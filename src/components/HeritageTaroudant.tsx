import React, { useState } from 'react';
import { Language, HistoricGate } from '../types/portal';
import { historicGates } from '../data/portalData';
import { MoroccanStar, MoroccanFriezeDivider } from './MoroccanMotifs';
import { 
  Compass, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle,
  Gem,
  Palette,
  ShieldAlert
} from 'lucide-react';

interface HeritageTaroudantProps {
  lang: Language;
}

export const HeritageTaroudant: React.FC<HeritageTaroudantProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedGate, setSelectedGate] = useState<HistoricGate>(historicGates[0]);

  return (
    <section id="heritage" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-2">
            <MoroccanStar size={12} />
            <span>{isAr ? 'أم مراكش وحاضرة السعديين' : 'Patrimoine Séculaire & Portes Historiques'}</span>
            <MoroccanStar size={12} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight text-balance">
            {isAr ? 'تارودانت العريقة: 8.5 كلم من الأسوار وخمسة أبواب خالدة' : 'Taroudant la Fortifiée : 8,5 km de Remparts et Portes Mythiques'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {isAr
              ? 'تعتبر أسوار تارودانت الطينية ثالث أطول سور تاريخي في العالم بعد سور الصين العظيم وسور كمبلغار، وتحتضن المدينة كنوزاً من الصناعة التقليدية والذاكرة الوطنية.'
              : 'Érigée au XVIe siècle par la dynastie saadienne, l\'enceinte de Taroudant compte parmi les plus vastes remparts en terre battue au monde, ceignant une médina aux savoir-faire d\'exception.'}
          </p>
          <MoroccanFriezeDivider className="my-5" />
        </div>

        {/* 2-Column Split: Gate presentation & Interactive selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Image of the Monumental Medina Gate with Real Photo */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-stone-200 min-h-[340px] shadow-sm">
            <img
              src={selectedGate.image || "/assets/aistudio/____________7a2df98e.jpg"}
              alt={isAr ? selectedGate.nameAr : selectedGate.nameFr}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-xs font-semibold text-amber-300">
                  {isAr ? 'الهندسة المعمارية السعدية' : 'Architecture Militaire Saadienne'}
                </span>
                <span className="text-[10px] bg-amber-900/90 text-amber-200 px-2 py-0.5 rounded font-medium border border-amber-600/50">
                  {isAr ? 'صورة حقيقية حية' : 'Photo authentique'}
                </span>
              </div>
              <h3 className="text-xl font-bold font-serif">
                {isAr ? selectedGate.nameAr : selectedGate.nameFr}
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                {isAr ? selectedGate.locationAr : selectedGate.locationFr}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Gate Explorer */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-stone-200">
            <div>
              {/* Gate Selector Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
                {historicGates.map((gate) => {
                  const isActive = selectedGate.id === gate.id;
                  return (
                    <button
                      key={gate.id}
                      onClick={() => setSelectedGate(gate)}
                      className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-amber-900 text-white shadow-sm'
                          : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                      }`}
                    >
                      {isAr ? gate.nameAr : gate.nameFr}
                    </button>
                  );
                })}
              </div>

              {/* Selected Gate Details */}
              <div className="flex items-center justify-between gap-2 text-xs text-stone-500 mb-3">
                <div className="flex items-center gap-1.5 text-amber-900 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{isAr ? selectedGate.builtEraAr : selectedGate.builtEraFr}</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-600">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>{isAr ? selectedGate.locationAr : selectedGate.locationFr}</span>
                </div>
              </div>

              <h4 className="text-xl font-bold font-serif text-stone-900 mb-3">
                {isAr ? selectedGate.nameAr : selectedGate.nameFr}
              </h4>

              <p className="text-sm text-stone-700 leading-relaxed mb-6">
                {isAr ? selectedGate.descriptionAr : selectedGate.descriptionFr}
              </p>

              {/* Historical architectural facts */}
              <div>
                <h5 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
                  {isAr ? 'مميزات معمارية ودفاعية:' : 'Caractéristiques architecturales :'}
                </h5>
                <div className="space-y-2">
                  {(isAr ? selectedGate.factsAr : selectedGate.factsFr).map((fact, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 bg-white p-3 rounded-xl border border-stone-200">
                      <CheckCircle className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <span>{isAr ? 'طول السور الإجمالي: 8 كيلومترات و500 متر' : 'Périmètre total : 8,5 kilomètres'}</span>
              <span className="font-semibold text-amber-900">{isAr ? '130 برج مراقبة' : '130 bastions'}</span>
            </div>
          </div>
        </div>

        {/* Artisanal and Medina Heritage Banner with Crafts Photo */}
        <div className="bg-[#FAF7F2] rounded-2xl border border-stone-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 mb-3">
                <Gem className="w-4 h-4 text-amber-700" />
                <span>{isAr ? 'كنوز الصناعة التقليدية السوسية' : 'Trésors Artisanaux du Souss'}</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>{isAr ? 'سوق جنان الجامع' : 'Jnane El-Jaami'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                {isAr
                  ? 'مهد الصاغة الفضية، المصنوعات الجلدية، وزيوت الأركان الأصيلة'
                  : 'Berceau de l\'Orfèvrerie Berbère, de la Maroquinerie & de l\'Argan'}
              </h3>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                {isAr
                  ? 'تشتهر أسواق تارودانت العتيقة ببراعة الصانع التقليدي الروداني، لاسيما في صياغة الحلي الفضية الأمازيغية، دباغة الجلود وصناعة البلغة السوسية، نقش خشب العرعار، واستخلاص زيت الأركان البيولوجي من غابات الإقليم.'
                  : 'Les souks de Taroudant perpétuent des gestes séculaires : bijoux berbères gravés à la main, babouches en cuir souple tanné selon la tradition, ébénisterie en thuya et nectar doré de l\'arganier.'}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-stone-200 grid grid-cols-3 gap-3 text-center">
              <div className="bg-white p-3 rounded-xl border border-stone-200">
                <span className="block text-lg font-bold font-serif text-amber-900">+1,200</span>
                <span className="text-[11px] text-stone-600">{isAr ? 'صانع تقليدي' : 'Artisans certifiés'}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-stone-200">
                <span className="block text-lg font-bold font-serif text-amber-900">4 قرون</span>
                <span className="text-[11px] text-stone-600">{isAr ? 'توارث للحرف' : 'Transmission'}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-stone-200">
                <span className="block text-lg font-bold font-serif text-amber-900">100%</span>
                <span className="text-[11px] text-stone-600">{isAr ? 'صناعة محلية' : 'Fait-main local'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-full">
            <img
              src="/assets/aistudio/____________________________________________________________________c4d39eec.jpg"
              alt="رواق المصنوعات الجلدية  .  سوق جنان الجامع  .  صورة حقيقية حية"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-xs font-semibold text-amber-300">
                  {isAr ? 'سوق جنان الجامع' : 'Souk Jnane El-Jaami'}
                </span>
                <span className="text-[10px] bg-amber-900/90 text-amber-200 px-2 py-0.5 rounded font-medium border border-amber-600/50">
                  {isAr ? 'صورة حقيقية حية' : 'Photo authentique'}
                </span>
              </div>
              <h3 className="text-xl font-bold font-serif">
                {isAr ? 'رواق المصنوعات الجلدية' : 'Galerie des Métiers du Cuir'}
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                {isAr
                  ? 'رواق المصنوعات الجلدية  .  سوق جنان الجامع  .  صورة حقيقية حية'
                  : 'Galerie de Maroquinerie  .  Souk Jnane El-Jaami  .  Photo authentique'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
