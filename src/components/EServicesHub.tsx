import React, { useState } from 'react';
import { Language, EServiceItem } from '../types/portal';
import { eServicesList } from '../data/portalData';
import { MoroccanStar, MoroccanFriezeDivider } from './MoroccanMotifs';
import { 
  FileText, 
  Building2, 
  AlertCircle, 
  Store, 
  CreditCard, 
  FileSpreadsheet, 
  CalendarCheck,
  Stamp,
  ArrowLeft,
  ArrowRight,
  Clock,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

interface EServicesHubProps {
  lang: Language;
  onSelectService: (service: EServiceItem) => void;
  searchFilter?: string;
  onClearSearchFilter?: () => void;
}

export const EServicesHub: React.FC<EServicesHubProps> = ({
  lang,
  onSelectService,
  searchFilter = '',
  onClearSearchFilter
}) => {
  const isAr = lang === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelAr: 'كافة الخدمات الجماعية', labelFr: 'Toutes les Démarches' },
    { id: 'civil', labelAr: 'الحالة المدنية والشواهد', labelFr: 'État Civil & Certificats' },
    { id: 'urban', labelAr: 'التعمير ورخص البناء', labelFr: 'Urbanisme & Travaux' },
    { id: 'complaints', labelAr: 'الشكايات والمقترحات', labelFr: 'Réclamations (Chikaya)' },
    { id: 'business', labelAr: 'الأنشطة الاقتصادية', labelFr: 'Activités Économiques' },
    { id: 'taxes', labelAr: 'الجبايات والرسوم', labelFr: 'Fiscalité Locale' },
    { id: 'tenders', labelAr: 'الصفقات العمومية', labelFr: 'Marchés Publics' }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'AlertCircle': return <AlertCircle className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5" />;
      case 'Stamp': return <Stamp className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const filteredServices = eServicesList.filter((srv) => {
    // category filter
    const matchesCat = selectedCategory === 'all' || srv.category === selectedCategory;
    // search filter
    if (!searchFilter.trim()) return matchesCat;

    const query = searchFilter.toLowerCase();
    const titleMatch = (isAr ? srv.titleAr : srv.titleFr).toLowerCase().includes(query);
    const descMatch = (isAr ? srv.descAr : srv.descFr).toLowerCase().includes(query);
    return matchesCat && (titleMatch || descMatch);
  });

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Moroccan Editorial Styling */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-2">
            <MoroccanStar size={12} />
            <span>{isAr ? 'الشباك الإلكتروني الموحد' : 'Guichet Électronique Unique'}</span>
            <MoroccanStar size={12} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight text-balance">
            {isAr ? 'الخدمات الرقمية والمساطر الإدارية' : 'E-Services & Démarches Administratives'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {isAr
              ? 'دليل المساطر الجماعية لساكنة تارودانت: طلب الشواهد، تراخيص التعمير، ومتابعة الملفات والشكايات دون عناء التنقل.'
              : 'Accédez directement à vos formalités communales : pièces requises, démarches d\'urbanisme, état civil et suivi en ligne.'}
          </p>
          <MoroccanFriezeDivider className="my-5" />
        </div>

        {/* Search query banner if active */}
        {searchFilter && (
          <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between text-xs sm:text-sm text-amber-900">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{isAr ? 'نتائج البحث عن:' : 'Résultats pour:'}</span>
              <span className="underline font-bold">"{searchFilter}"</span>
              <span className="text-stone-500">({filteredServices.length} {isAr ? 'خدمة' : 'service(s)'})</span>
            </div>
            {onClearSearchFilter && (
              <button
                onClick={onClearSearchFilter}
                className="text-amber-800 hover:text-amber-950 font-bold underline cursor-pointer"
              >
                {isAr ? 'إلغاء التصفية' : 'Effacer'}
              </button>
            )}
          </div>
        )}

        {/* Interactive Filter Tabs (Permitted Segmented Controls) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-amber-900 text-white shadow-sm'
                    : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                }`}
              >
                {isAr ? cat.labelAr : cat.labelFr}
              </button>
            );
          })}
        </div>

        {/* Services Grid (Single-Elevation Depth, Hairline Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onSelectService(srv)}
              className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:border-amber-700/60 hover:shadow-md transition-all group cursor-pointer"
            >
              <div>
                {/* Unboxed Metadata Header (Zero-Pill Discipline) */}
                <div className="flex items-center justify-between gap-2 text-xs text-stone-500 mb-3">
                  <span className="font-mono tabular-nums font-semibold text-amber-800">{srv.code}</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{isAr ? srv.timeEstimateAr : srv.timeEstimateFr}</span>
                  </div>
                </div>

                {/* Title & Icon Lockup */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-stone-100 text-amber-900 group-hover:bg-amber-900 group-hover:text-white transition-colors shrink-0">
                    {getIcon(srv.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-900 transition-colors leading-snug">
                      {isAr ? srv.titleAr : srv.titleFr}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                  {isAr ? srv.descAr : srv.descFr}
                </p>

                {/* Quick required documents preview */}
                <div className="mt-4 pt-3 border-t border-stone-100">
                  <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
                    {isAr ? 'أبرز الوثائق المطلوبة:' : 'Pièces requises principales :'}
                  </div>
                  <ul className="space-y-1.5">
                    {(isAr ? srv.docsRequiredAr : srv.docsRequiredFr).slice(0, 2).map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-stone-600 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span className="truncate">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-6 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-900 group-hover:text-amber-950">
                <span className="flex items-center gap-1">
                  {srv.externalUrl ? (
                    <>
                      <span>{isAr ? 'الولوج للمنصة الوطنية' : 'Accéder au portail'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <span>{isAr ? 'بدء الطلب وتفاصيل المسطرة' : 'Démarrer la démarche'}</span>
                  )}
                </span>
                <ArrowIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-stone-200 p-8">
            <p className="text-stone-600 font-medium text-sm">
              {isAr
                ? 'لم يتم العثور على نتائج مطابقة لبحثك. يرجى تجربة كلمات أخرى أو الاتصال بمكتب الضبط.'
                : 'Aucune démarche ne correspond à votre recherche.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
