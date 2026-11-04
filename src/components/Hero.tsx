import React, { useState } from 'react';
import { Language } from '../types/portal';
import heroImage from '../assets/images/taroudant_historic_ramparts_1793483779305.jpg';
import { MoroccanStar } from './MoroccanMotifs';
import { Search, FileText, AlertCircle, Clock, MapPin, Building, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onSelectService: (serviceId: string) => void;
  onOpenComplaint: () => void;
  onSearchQuery: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onSelectService,
  onOpenComplaint,
  onSearchQuery
}) => {
  const isAr = lang === 'ar';
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchQuery(searchInput.trim());
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const quickSearchTags = isAr
    ? ['شهادة السكنى', 'رخص البناء', 'شكايات الإنارة', 'الصفقات العمومية', 'سوق جنان الجامع']
    : ['Certificat de résidence', 'Permis de construire', 'Réclamation éclairage', 'Marchés publics', 'Souks'];

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white">
      {/* Hero Background Image with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
  src={heroImage}
  alt="أسوار تارودانت التاريخية العريقة بالمغرب"
  className="w-full h-full object-cover object-center transform scale-102 filter brightness-85"
  referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/40 via-transparent to-stone-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-4xl">
          {/* Unboxed clean metadata kicker (Zero-pill discipline) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-300 font-medium mb-4 tracking-wide">
            <MoroccanStar size={14} className="text-amber-400" />
            <span>{isAr ? 'حاضرة سوس العالمة والمدينة التاريخية' : 'Cité Millénaire du Souss & Capitale Historique'}</span>
            <span aria-hidden="true" className="text-amber-500/70">·</span>
            <span>{isAr ? 'البوابة الجماعية الموحدة 2026' : 'Portail Communal Unifié'}</span>
          </div>

          {/* Headline with text-wrap: balance */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif leading-[1.18] text-balance">
            {isAr ? (
              <>
                جماعة تارودانت: <br />
                <span className="text-amber-200">إدارة القرب والتحول الرقمي</span> في خدمة الساكنة
              </>
            ) : (
              <>
                Commune de Taroudant: <br />
                <span className="text-amber-200">Proximité Citoyenne & Transition Digitale</span>
              </>
            )}
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl">
            {isAr
              ? 'مرحباً بكم في البوابة الرقمية الرسمية المحدثة. نضع رهن إشارتكم باقة من الخدمات الإلكترونية لمعالجة ملفاتكم الإدارية، إيداع الشكايات، وتتبع برامج التنمية الحضرية بكل شفافية.'
              : 'Bienvenue sur la plateforme digitale modernisée. Accédez aux démarches administratives en ligne, déposez vos réclamations et suivez les grands chantiers du Plan d\'Action Communal.'}
          </p>

          {/* Interactive Citizen Search Form */}
          <form onSubmit={handleSearchSubmit} className="mt-8 max-w-2xl">
            <div className="bg-[#FAF7F2] p-1.5 sm:p-2 rounded-xl shadow-2xl border border-stone-200/80 flex flex-col sm:flex-row items-stretch gap-2">
              <div className="flex items-center gap-3 px-3 flex-1">
                <Search className="w-5 h-5 text-amber-800 shrink-0" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder={
                    isAr
                      ? 'عن ماذا تبحث؟ (مثلاً: شهادة السكنى، رخصة بناء، موعد، شكاية...)'
                      : 'Rechercher une démarche (ex: certificat, permis, réclamation...)'
                  }
                  className="w-full bg-transparent text-stone-900 placeholder:text-stone-500 text-sm sm:text-base focus:outline-none py-2"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-amber-900 hover:bg-amber-950 text-white font-semibold text-sm rounded-lg transition-colors shrink-0 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isAr ? 'بحث سريع' : 'Rechercher'}</span>
              </button>
            </div>

            {/* Quick search suggestion tags */}
            <div className="mt-3 flex items-center gap-2 flex-wrap text-xs text-stone-300">
              <span className="text-stone-400 font-medium">{isAr ? 'الأكثر طلباً:' : 'Suggestions:'}</span>
              {quickSearchTags.map((tag, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSearchInput(tag);
                    onSearchQuery(tag);
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 underline underline-offset-4 decoration-amber-500/50 transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </form>

          {/* Direct Citizen Fast-Action Buttons */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
            <button
              onClick={() => onSelectService('residence-cert')}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/15 transition-all group text-start cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{isAr ? 'شواهد إدارية' : 'Certificats'}</div>
                  <div className="text-xs text-stone-300">{isAr ? 'طلب الوثائق الفورية' : 'Démarches état civil'}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-amber-300 transition-colors" />
            </button>

            <button
              onClick={onOpenComplaint}
              className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/15 transition-all group text-start cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{isAr ? 'شكاية أو مقترح' : 'Réclamations'}</div>
                  <div className="text-xs text-stone-300">{isAr ? 'تواصل مع المجلس' : 'Chikaya en ligne'}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-300 transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Operational Utility Ribbon below hero */}
      <div className="border-t border-white/10 bg-stone-950/90 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {isAr ? 'أوقات الاستقبال: الإثنين - الجمعة (08:30 إلى 16:30)' : 'Horaires d\'accueil: Lundi - Vendredi (08h30 à 16h30)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {isAr ? 'المقر المركزي: الحي الإداري المحايطة، تارودانت' : 'Siège: Quartier Administratif Lmahaita, Taroudant'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Building className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              {isAr ? 'مكتب الضبط الرقمي والخدمات الإلكترونية متاح 24/7' : 'Guichet numérique accessible 24/7'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
