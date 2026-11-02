import React, { useState } from 'react';
import { Language } from '../types/portal';
import { MoroccanStar, MoroccanFriezeDivider } from './MoroccanMotifs';
import { 
  Briefcase, 
  ShieldCheck, 
  FileCheck, 
  Download, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

interface GovernanceRecruitmentSectionProps {
  lang: Language;
}

export const GovernanceRecruitmentSection: React.FC<GovernanceRecruitmentSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [downloadMsg, setDownloadMsg] = useState<string | null>(null);

  const handleDownload = (filename: string) => {
    setDownloadMsg(filename);
    setTimeout(() => setDownloadMsg(null), 2500);
  };

  const jobNotices = [
    {
      id: 'concours-1',
      titleAr: 'مباراة توظيف تقنيين من الدرجة الثالثة (تخصص الهندسة المدنية والتعمير)',
      titleFr: 'Concours de recrutement de Techniciens 3ème grade (Génie Civil & Urbanisme)',
      date: '20 أكتوبر 2026',
      deadline: '15 نونبر 2026',
      seats: '04 مناصب',
      statusAr: 'إيداع الترشيحات مفتوح',
      statusFr: 'Candidatures ouvertes'
    },
    {
      id: 'concours-2',
      titleAr: 'امتحان الكفاءة المهنية لولوج درجة متصرف من الدرجة الثانية برسم سنة 2026',
      titleFr: 'Examen d\'aptitude professionnelle pour l\'accès au grade d\'Administrateur 2ème grade',
      date: '12 أكتوبر 2026',
      deadline: '05 نونبر 2026',
      seats: '06 مناصب',
      statusAr: 'لوائح المترشحين المقبولين لاجتياز الاختبار',
      statusFr: 'Listes des candidats convoqués'
    },
    {
      id: 'concours-3',
      titleAr: 'مباراة توظيف أطباء عامين وبياطرة بالمكتب الصحي البلدي لتارودانت',
      titleFr: 'Recrutement de Médecins et Vétérinaires au Bureau Municipal d\'Hygiène',
      date: '02 أكتوبر 2026',
      deadline: '30 أكتوبر 2026',
      seats: '02 مناصب',
      statusAr: 'النتائج النهائية ولائحة الانتظار',
      statusFr: 'Résultats définitifs publiés'
    }
  ];

  const auditReports = [
    {
      titleAr: 'تقرير التدقيق الداخلي السنوي حول منظومة المشتريات والصفقات العمومية',
      titleFr: 'Rapport d\'Audit Interne sur la Commande Publique',
      year: '2025/2026',
      size: '2.1 MB'
    },
    {
      titleAr: 'تقرير تقييم نجاعة أداء المصالح الجماعية وجودة استقبال المرتفقين',
      titleFr: 'Rapport d\'Évaluation de la Qualité de Service aux Usagers',
      year: '2026',
      size: '1.8 MB'
    },
    {
      titleAr: 'الدليل المسطري للهيكل التنظيمي واختصاصات أقسام ومصالح جماعة تارودانت',
      titleFr: 'Manuel des Procédures & Organigramme des Services',
      year: '2026',
      size: '3.6 MB'
    }
  ];

  return (
    <section id="governance" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-2">
            <MoroccanStar size={12} />
            <span>{isAr ? 'الحكامة الإدارية وتكافؤ الفرص' : 'Gouvernance, RH & Recrutement'}</span>
            <MoroccanStar size={12} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight text-balance">
            {isAr ? 'الحكامة، تقارير التدقيق ومباريات التوظيف' : 'Gouvernance, Rapports d\'Audit & Concours'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {isAr
              ? 'نشر وتحديث مستمر لإعلانات مباريات التوظيف العمومي، امتحانات الكفاءة المهنية لموظفي الجماعة، وتقارير التدقيق الداخلي لضمان الشفافية الإدارية.'
              : 'Consultez les concours de recrutement, les résultats d\'aptitude professionnelle et les rapports d\'audit interne.'}
          </p>
          <MoroccanFriezeDivider className="my-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Job notices & Recrutement (مباريات التوظيف) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-amber-800" />
                <span>{isAr ? 'مباريات التوظيف وامتحانات الكفاءة المهنية' : 'Concours de Recrutement & Examens'}</span>
              </h3>
              <span className="text-xs text-stone-500 font-mono">
                {isAr ? 'بوابة التشغيل العمومي' : 'Emploi Public'}
              </span>
            </div>

            <div className="space-y-3">
              {jobNotices.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-5 rounded-xl border border-stone-200 hover:border-amber-700/50 transition-all shadow-sm"
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-emerald-800">{isAr ? job.statusAr : job.statusFr}</span>
                    <span className="font-mono text-stone-500">{job.seats}</span>
                  </div>

                  <h4 className="text-sm font-bold text-stone-900 leading-snug mb-3">
                    {isAr ? job.titleAr : job.titleFr}
                  </h4>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between flex-wrap gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-stone-500">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{isAr ? `آخر أجل للترشيح: ${job.deadline}` : `Délai: ${job.deadline}`}</span>
                    </div>

                    <button
                      onClick={() => handleDownload(`Avis_${job.id}.pdf`)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-amber-900 hover:text-amber-950 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{isAr ? 'تحميل نص القرار والشروط' : 'Télécharger l\'avis'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Audit Reports & Administrative Charts */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-800" />
                <span>{isAr ? 'تقارير التدقيق والحكامة' : 'Rapports d\'Audit & Transparence'}</span>
              </h3>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <p className="text-xs text-stone-600 leading-relaxed">
                {isAr
                  ? 'عملاً بمقتضيات المادة 272 من القانون التنظيمي رقم 113.14، تضع الجماعة رهن إشارة العموم تقارير التقييم والتدقيق الداخلي.'
                  : 'En application de l\'article 272 de la loi organique 113.14, la commune met à disposition du public ses rapports d\'évaluation.'}
              </p>

              <div className="space-y-3">
                {auditReports.map((rep, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#FAF7F2] rounded-xl border border-stone-200 flex items-center justify-between hover:bg-amber-50/50 transition-colors"
                  >
                    <div className="pr-2 rtl:pr-0 rtl:pl-2">
                      <h5 className="text-xs font-bold text-stone-900 leading-snug">{isAr ? rep.titleAr : rep.titleFr}</h5>
                      <span className="text-[11px] text-stone-500 font-mono">{rep.year} · {rep.size}</span>
                    </div>
                    <button
                      onClick={() => handleDownload(`${rep.titleAr.slice(0, 15)}.pdf`)}
                      className="p-2 text-stone-600 hover:text-amber-900 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer shrink-0"
                      title="Télécharger"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {downloadMsg && (
          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 bg-stone-900 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-xs border border-stone-700 animate-in fade-in-50">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{isAr ? `تم تنزيل الوثيقة الرسمية: ${downloadMsg}` : `Téléchargement : ${downloadMsg}`}</span>
          </div>
        )}
      </div>
    </section>
  );
};
