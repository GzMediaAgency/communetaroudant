import React, { useState } from 'react';
import { Language, NewsArticle } from '../types/portal';
import { councilNewsList } from '../data/portalData';
import { MoroccanStar, MoroccanFriezeDivider } from './MoroccanMotifs';
import { 
  FileText, 
  Calendar, 
  Download, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle,
  Bell
} from 'lucide-react';

interface CouncilNewsProps {
  lang: Language;
}

export const CouncilNews: React.FC<CouncilNewsProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (id: string) => {
    setDownloadSuccess(id);
    setTimeout(() => setDownloadSuccess(null), 2500);
  };

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="council" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-2">
            <MoroccanStar size={12} />
            <span>{isAr ? 'العمل الجماعي والحكامة' : 'Délibérations & Vie Municipale'}</span>
            <MoroccanStar size={12} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight text-balance">
            {isAr ? 'مقررات المجلس وأخبار جماعة تارودانت' : 'Décisions du Conseil & Actualités Communales'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {isAr
              ? 'متابعة مباشرة لقرارات الدورات العادية والاستثنائية للمجلس الجماعي، إعلانات الصفقات، والمستجدات الإدارية.'
              : 'Consultez les procès-verbaux des sessions, les arrêtés municipaux et les avis publics aux habitants.'}
          </p>
          <MoroccanFriezeDivider className="my-5" />
        </div>

        {/* News Grid (Zero-Pill Discipline) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {councilNewsList.map((item) => (
            <article
              key={item.id}
              className="bg-[#FAF7F2] rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:border-amber-700/50 transition-all shadow-sm group"
            >
              <div>
                {/* Unboxed Metadata (Zero-pill discipline §1.A) */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-amber-900">{isAr ? item.categoryAr : item.categoryFr}</span>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3 text-stone-400" />
                    <span>{item.date}</span>
                  </div>
                  <span aria-hidden="true">·</span>
                  <span>{isAr ? item.readTimeAr : item.readTimeFr}</span>
                </div>

                <h3 className="text-base font-bold font-serif text-stone-900 group-hover:text-amber-900 transition-colors leading-snug mb-3">
                  {isAr ? item.titleAr : item.titleFr}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {isAr ? item.excerptAr : item.excerptFr}
                </p>
              </div>

              {/* Action row */}
              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                <button
                  onClick={() => handleDownload(item.id)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-950 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>
                    {downloadSuccess === item.id
                      ? (isAr ? 'تم التحميل (PDF)' : 'Téléchargé !')
                      : (isAr ? 'تحميل المحضر الرسمي' : 'Télécharger PV')}
                  </span>
                </button>

                <div className="text-stone-400 group-hover:text-amber-900 transition-colors">
                  <ArrowIcon className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Administrative Council Agenda Notice */}
        <div className="mt-12 bg-amber-50/60 rounded-2xl border border-amber-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-900 text-white rounded-xl shrink-0 mt-0.5">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold font-serif text-stone-900">
                {isAr ? 'الدورة العادية القادمة لشهر فبراير 2027' : 'Prochaine Session Ordinaire de Février 2027'}
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
                {isAr
                  ? 'جلسة عمومية مفتوحة أمام ساكنة وفعاليات المجتمع المدني بتارودانت لدراسة الحساب الإداري واتفاقيات الشراكة.'
                  : 'Séance publique ouverte aux citoyens et associations locales pour l\'examen du compte administratif.'}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => handleDownload('next-agenda')}
              className="px-4 py-2.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-4 h-4 text-amber-800" />
              <span>{isAr ? 'جدول أعمال الجلسة (PDF)' : 'Ordre du jour (PDF)'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
