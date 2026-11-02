import React, { useState } from 'react';
import { Language } from '../types/portal';
import { MoroccanStar, MoroccanFriezeDivider } from './MoroccanMotifs';
import { 
  FileSpreadsheet, 
  Coins, 
  Download, 
  CheckCircle2, 
  TrendingUp, 
  PieChart, 
  Calendar,
  Building,
  FileText
} from 'lucide-react';

interface OpenBudgetSectionProps {
  lang: Language;
}

export const OpenBudgetSection: React.FC<OpenBudgetSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState<'citizen_budget' | 'tenders' | 'financial_report'>('citizen_budget');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = (docName: string) => {
    setDownloadNotice(docName);
    setTimeout(() => setDownloadNotice(null), 2500);
  };

  const sampleTenders = [
    {
      ref: 'AO-04/TAR/2026',
      titleAr: 'أشغال صيانة وتأهيل الإنارة العمومية بالطاقة الشمسية بمدخل باب الزركان وباب تارغنت',
      titleFr: 'Travaux de maintenance et d\'extension de l\'éclairage solaire aux portes Bab Zorgan et Bab Targhount',
      budget: '1,450,000.00 درهم',
      openDate: '18 نونبر 2026',
      statusAr: 'مفتوح لتلقي العروض',
      statusFr: 'Appel d\'offres ouvert',
      categoryAr: 'الأشغال والإنارة',
      categoryFr: 'Travaux d\'éclairage'
    },
    {
      ref: 'AO-05/TAR/2026',
      titleAr: 'تزويد مكاتب الحالة المدنية والمصالح الجماعية بالعتاد المعلوماتي والبرمجيات الذكية',
      titleFr: 'Acquisition de matériel informatique et progiciels pour la dématérialisation de l\'état civil',
      budget: '680,000.00 درهم',
      openDate: '25 نونبر 2026',
      statusAr: 'مفتوح لتلقي العروض',
      statusFr: 'Appel d\'offres ouvert',
      categoryAr: 'التحول الرقمي',
      categoryFr: 'Équipement numérique'
    },
    {
      ref: 'AO-06/TAR/2026',
      titleAr: 'تهيئة الأرصفة وتبليط الأزقة بالخرسانة المطبوعة بالمدينة العتيقة داخل الأسوار',
      titleFr: 'Aménagement de la voirie et pavage traditionnel des venelles intramuros de la médina',
      budget: '3,200,000.00 درهم',
      openDate: '02 دجنبر 2026',
      statusAr: 'مفتوح لتلقي العروض',
      statusFr: 'Appel d\'offres ouvert',
      categoryAr: 'التهيئة الحضرية',
      categoryFr: 'Voirie & Pavage'
    }
  ];

  return (
    <section id="budget" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-2">
            <MoroccanStar size={12} />
            <span>{isAr ? 'الشفافية والحق في المعلومة' : 'Budget Ouvert & Marchés Publics'}</span>
            <MoroccanStar size={12} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight text-balance">
            {isAr ? 'الميزانية المفتوحة والصفقات العمومية' : 'Transparence Budgétaire & Appels d\'Offres'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {isAr
              ? 'تجسيداً لمبادئ الحكامة المالية المنصوص عليها في البوابة الرسمية، نضع رهن إشارتكم تفاصيل ميزانية الجماعة، ميزانية المواطن المبسطة، والصفقات العمومية المعلنة.'
              : 'Consultez en toute transparence le budget communal, le budget citoyen simplifié et la programmation des marchés publics.'}
          </p>
          <MoroccanFriezeDivider className="my-5" />
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="inline-flex p-1 bg-[#FAF7F2] border border-stone-200 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('citizen_budget')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'citizen_budget'
                  ? 'bg-amber-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isAr ? 'ميزانية المواطن 2026' : 'Budget Citoyen Simplifié'}
            </button>

            <button
              onClick={() => setActiveTab('tenders')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'tenders'
                  ? 'bg-amber-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isAr ? 'طلبات العروض والصفقات' : 'Appels d\'Offres en cours'}
            </button>

            <button
              onClick={() => setActiveTab('financial_report')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'financial_report'
                  ? 'bg-amber-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isAr ? 'التقرير المالي والحساب الإداري' : 'Comptes & Rapports Financiers'}
            </button>
          </div>
        </div>

        {/* Tab 1: Citizen Budget (ميزانية المواطن) */}
        {activeTab === 'citizen_budget' && (
          <div className="space-y-8 animate-in fade-in-50 duration-200">
            {/* Top Key Financial Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#FAF7F2] p-5 rounded-xl border border-stone-200">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                  {isAr ? 'مداخيل التسيير المقدرة' : 'Recettes de Fonctionnement'}
                </div>
                <div className="text-2xl font-bold font-mono text-stone-900">76,420,000 درهم</div>
                <div className="mt-1 text-xs text-emerald-800 flex items-center gap-1 font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{isAr ? '+6.8% مقارنة بالسنة الماضية' : '+6.8% vs N-1'}</span>
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-5 rounded-xl border border-stone-200">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                  {isAr ? 'اعتمادات التجهيز والاستثمار' : 'Budget d\'Investissement'}
                </div>
                <div className="text-2xl font-bold font-mono text-amber-900">38,900,000 درهم</div>
                <div className="mt-1 text-xs text-stone-500">
                  {isAr ? 'مخصصة للبنيات التحتية والأشغال' : 'Dédiés aux chantiers de proximité'}
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-5 rounded-xl border border-stone-200">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                  {isAr ? 'الفائض المالي الحقيقي المحقق' : 'Excédent Budgétaire'}
                </div>
                <div className="text-2xl font-bold font-mono text-emerald-800">12,150,000 درهم</div>
                <div className="mt-1 text-xs text-stone-500">
                  {isAr ? 'مُعاد برمجته في مشاريع القرب' : 'Réinjecté dans le PAC'}
                </div>
              </div>
            </div>

            {/* Expenditure Allocation Breakdown */}
            <div className="bg-[#FAF7F2] rounded-2xl border border-stone-200 p-6 sm:p-8">
              <h3 className="text-lg font-bold font-serif text-stone-900 mb-6 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-amber-800" />
                <span>{isAr ? 'أين تُصرف ميزانية جماعة تارودانت؟ (ميزانية المواطن)' : 'Répartition des Dépenses Communales'}</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-stone-800">{isAr ? 'المرافق العمومية الأساسية (الإنارة، النظافة، التطهير)' : 'Services Publics (Éclairage, Propreté, Voirie)'}</span>
                    <span className="font-mono text-amber-900">34% (39.2 M DH)</span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-800 rounded-full" style={{ width: '34%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-stone-800">{isAr ? 'التهيئة الحضرية وصيانة الأسوار العتيقة والمساحات الخضراء' : 'Aménagement Urbain, Patrimoine & Espaces Verts'}</span>
                    <span className="font-mono text-amber-900">28% (32.3 M DH)</span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-700 rounded-full" style={{ width: '28%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-stone-800">{isAr ? 'الشؤون الاجتماعية، دعم التمدرس، الرياضة والثقافة' : 'Affaires Sociales, Éducation, Sport & Culture'}</span>
                    <span className="font-mono text-amber-900">20% (23.0 M DH)</span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-600 rounded-full" style={{ width: '20%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-stone-800">{isAr ? 'الإدارة العامة، التحول الرقمي ومصاريف التسيير' : 'Administration Générale & Digitalisation'}</span>
                    <span className="font-mono text-amber-900">18% (20.8 M DH)</span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-200 rounded-full overflow-hidden">
                    <div className="h-full bg-stone-600 rounded-full" style={{ width: '18%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Tenders (طلبات العروض والصفقات) */}
        {activeTab === 'tenders' && (
          <div className="space-y-4 animate-in fade-in-50 duration-200">
            <div className="flex items-center justify-between flex-wrap gap-3 pb-2">
              <span className="text-xs font-semibold text-stone-600">
                {isAr ? 'الصفقات المفتوحة للمنافسة عبر البوابة المغربية للصفقات العمومية:' : 'Marchés ouverts à la concurrence :'}
              </span>
              <button
                onClick={() => handleDownload('programme_previsionnel_2026.pdf')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-amber-800" />
                <span>{isAr ? 'تحميل البرنامج التوقعي لصفقات 2026 (PDF)' : 'Programme prévisionnel (PDF)'}</span>
              </button>
            </div>

            <div className="space-y-3">
              {sampleTenders.map((tender, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF7F2] p-5 rounded-xl border border-stone-200 hover:border-amber-700/60 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono font-bold text-amber-900">{tender.ref}</span>
                      <span aria-hidden="true" className="text-stone-400">·</span>
                      <span className="text-stone-600">{isAr ? tender.categoryAr : tender.categoryFr}</span>
                      <span aria-hidden="true" className="text-stone-400">·</span>
                      <span className="text-emerald-800 font-semibold">{isAr ? tender.statusAr : tender.statusFr}</span>
                    </div>

                    <h4 className="text-sm font-bold text-stone-900 leading-snug">
                      {isAr ? tender.titleAr : tender.titleFr}
                    </h4>

                    <div className="flex items-center gap-4 text-xs text-stone-500 pt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-stone-400" />
                        <span>{isAr ? `تاريخ فتح الأظرفة: ${tender.openDate}` : `Ouverture des plis: ${tender.openDate}`}</span>
                      </div>
                      <span>{isAr ? `التقدير المالي: ${tender.budget}` : `Budget: ${tender.budget}`}</span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <button
                      onClick={() => handleDownload(`${tender.ref}_CPS.pdf`)}
                      className="px-4 py-2 bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-900" />
                      <span>{isAr ? 'تحميل دفتر التحملات (CPS)' : 'Télécharger CPS'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Financial Report & Administrative Account (الحساب الإداري) */}
        {activeTab === 'financial_report' && (
          <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-stone-200 animate-in fade-in-50 duration-200 space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 mb-2">
                {isAr ? 'الحساب الإداري والقوائم المالية المصادق عليها' : 'Compte Administratif & Rapports d\'Exécution'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isAr
                  ? 'يمكنكم تحميل القوائم التركيبية لمداخيل ومصاريف جماعة تارودانت والبيان المالي السنوي المدقق طبقاً للقانون التنظيمي رقم 113.14.'
                  : 'Téléchargez les états financiers consolidés de la Commune de Taroudant certifiés conformes.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-stone-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{isAr ? 'البيان المالي للحساب الإداري لسنة 2025' : 'Compte Administratif 2025'}</h4>
                  <span className="text-[11px] text-stone-500 font-mono">PDF · 3.4 MB</span>
                </div>
                <button
                  onClick={() => handleDownload('Compte_Administratif_2025.pdf')}
                  className="p-2 text-amber-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                  title="Télécharger"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{isAr ? 'ميزانية جماعة تارودانت لسنة 2026' : 'Budget de la Commune 2026'}</h4>
                  <span className="text-[11px] text-stone-500 font-mono">PDF · 4.1 MB</span>
                </div>
                <button
                  onClick={() => handleDownload('Budget_Commune_2026.pdf')}
                  className="p-2 text-amber-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                  title="Télécharger"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Download notification feedback */}
        {downloadNotice && (
          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 bg-stone-900 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-xs border border-stone-700 animate-in fade-in-50">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{isAr ? `تم تنزيل الملف الرسمي: ${downloadNotice}` : `Téléchargement réussi : ${downloadNotice}`}</span>
          </div>
        )}
      </div>
    </section>
  );
};
