import React, { useState } from 'react';
import { Language } from '../types/portal';
import { modernizationComparison } from '../data/portalData';
import { MoroccanStar, MoroccanFriezeDivider } from './MoroccanMotifs';
import { 
  Smartphone, 
  Palette, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  X,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ModernizationAuditProps {
  lang: Language;
}

export const ModernizationAudit: React.FC<ModernizationAuditProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState<'comparison' | 'matrix'>('comparison');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const engineeringChecklist = [
    {
      featureAr: 'التصميم المتجاوب بنظام Mobile-First للأجهزة اللمسية',
      featureFr: 'Design réactif Mobile-First pour smartphones et tablettes',
      oldSite: false,
      newSite: true,
      impactAr: 'تمكين 85% من المرتفقين الذين يتصفحون عبر الهاتف المحمول من إنجاز المساطر بسلاسة'
    },
    {
      featureAr: 'الهوية البصرية المستوحاة من أسوار تارودانت والزليج المغربي',
      featureFr: 'Identité architecturale marocaine (Pisé ocre & Zellige vert)',
      oldSite: false,
      newSite: true,
      impactAr: 'تعزيز الفخر المحلي والإشعاع السياحي لحاضرة سوس و"أم مراكش"'
    },
    {
      featureAr: 'منظومة الشكايات المباشرة مع توليد أرقام التتبع التلقائية (Chikaya)',
      featureFr: 'Plateforme intégrée de réclamations avec code de suivi instantané',
      oldSite: false,
      newSite: true,
      impactAr: 'تقليص زمن الاستجابة لمشاكل الإنارة والنظافة من أسابيع إلى 48 ساعة'
    },
    {
      featureAr: 'شباك حجز المواعيد المسبقة لتفادي الطوابير بمكاتب الحالة المدنية',
      featureFr: 'Module de prise de rendez-vous en ligne sans file d\'attente',
      oldSite: false,
      newSite: true,
      impactAr: 'القضاء على الاكتظاظ الصباحي وتحسين كفاءة الموظفين الجماعيين'
    },
    {
      featureAr: 'لوحة قيادة تفاعلية شفافة لبرنامج عمل الجماعة (PAC 2023-2028)',
      featureFr: 'Tableau de bord participatif du Plan d\'Action Communal',
      oldSite: false,
      newSite: true,
      impactAr: 'تكريس مبادئ الدستور في الحق في الحصول على المعلومة والشفافية المالية'
    },
    {
      featureAr: 'دعم ثنائي كامل للغة العربية (RTL) والفرنسية (LTR) مع تيفيناغ',
      featureFr: 'Bilinguisme intégral Arabe (RTL) / Français (LTR) & Tifinagh',
      oldSite: false,
      newSite: true,
      impactAr: 'ولوجية شاملة لكافة مكونات المجتمع والجالية المغربية المقيمة بالخارج'
    }
  ];

  return (
    <section id="audit" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-2">
            <MoroccanStar size={12} />
            <span>{isAr ? 'خارطة طريق التحديث والرقمنة' : 'Feuille de Route & Audit de Modernisation'}</span>
            <MoroccanStar size={12} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight text-balance">
            {isAr
              ? 'مقترح التحديث الهندسي والرقمي لبوابة جماعة تارودانت'
              : 'Proposition de Modernisation pour communetaroudant.ma'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {isAr
              ? 'مقارنة شاملة بين الوضعية الكلاسيكية للبوابة السابقة (communetaroudant.ma) وهذا النموذج المطور المستجيب لمتطلبات الإدارة الرقمية الحديثة.'
              : 'Analyse comparative des gains ergonomiques, identitaires et administratifs apportés par cette refonte.'}
          </p>
          <MoroccanFriezeDivider className="my-5" />
        </div>

        {/* Tab switch for comparison mode */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="inline-flex p-1 bg-stone-200 rounded-xl">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isAr ? 'المقارنة البصرية (قبل / بعد)' : 'Comparatif Visuel'}
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isAr ? 'مصفوفة المعايير التقنية' : 'Matrice Technique'}
            </button>
          </div>
        </div>

        {/* Content Tab 1: Comparison Cards */}
        {activeTab === 'comparison' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modernizationComparison.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-sm hover:border-amber-700/40 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-900 shrink-0">
                      {getIcon(item.iconName)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
                      {isAr ? item.titleAr : item.titleFr}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {/* Old portal drawback */}
                    <div className="p-3.5 bg-red-50/60 rounded-xl border border-red-100 flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-red-100 text-red-700 shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-red-900 mb-0.5">
                          {isAr ? 'البوابة السابقة (communetaroudant.ma)' : 'Ancien Portail'}
                        </div>
                        <p className="text-xs text-red-800 leading-relaxed">
                          {isAr ? item.oldPortalAr : item.oldPortalFr}
                        </p>
                      </div>
                    </div>

                    {/* New portal modernization */}
                    <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-emerald-900 mb-0.5">
                          {isAr ? 'النموذج المحدث (تارودانت الذكية 2026)' : 'Nouvelle Version Recommandée'}
                        </div>
                        <p className="text-xs text-emerald-800 leading-relaxed">
                          {isAr ? item.newPortalAr : item.newPortalFr}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content Tab 2: Engineering Checklist Matrix */}
        {activeTab === 'matrix' && (
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-start text-xs sm:text-sm">
                <thead className="bg-stone-100 border-b border-stone-200 text-stone-700 font-semibold">
                  <tr>
                    <th className="p-4 text-start">{isAr ? 'المعيار والميزة المضافة' : 'Fonctionnalité & Norme'}</th>
                    <th className="p-4 text-center w-28">{isAr ? 'الموقع القديم' : 'Ancien'}</th>
                    <th className="p-4 text-center w-28">{isAr ? 'البوابة المقترحة' : 'Nouveau'}</th>
                    <th className="p-4 text-start hidden sm:table-cell">{isAr ? 'الأثر المباشر على المواطن' : 'Impact Citoyen'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-800">
                  {engineeringChecklist.map((row, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/30 transition-colors">
                      <td className="p-4 font-medium text-stone-900">
                        {isAr ? row.featureAr : row.featureFr}
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-700">
                          <X className="w-3.5 h-3.5" />
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                          <Check className="w-4 h-4" />
                        </span>
                      </td>
                      <td className="p-4 text-xs text-stone-600 hidden sm:table-cell">
                        {row.impactAr}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Official Reference Link Box */}
        <div className="mt-10 p-4 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-amber-950">
          <div>
            <span className="font-bold">{isAr ? 'الموقع الرسمي المرجعي قيد التطوير:' : 'Portail de référence à moderniser :'} </span>
            <span className="font-mono text-stone-700">https://www.communetaroudant.ma/ar</span>
          </div>
          <a
            href="https://www.communetaroudant.ma/ar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg font-semibold text-xs transition-colors shrink-0"
          >
            <span>{isAr ? 'معاينة الرابط الأصلي' : 'Visiter le lien original'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
