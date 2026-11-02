import React, { useState } from 'react';
import { Language, TrackingRecord } from '../types/portal';
import { sampleTrackingRecords } from '../data/portalData';
import { MoroccanStar, MoroccanFriezeDivider } from './MoroccanMotifs';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  Building, 
  User, 
  Calendar, 
  AlertCircle,
  FileCheck2
} from 'lucide-react';

interface RequestTrackerProps {
  lang: Language;
  prefilledCode?: string;
  customRecords?: TrackingRecord[];
}

export const RequestTracker: React.FC<RequestTrackerProps> = ({
  lang,
  prefilledCode = '',
  customRecords = []
}) => {
  const isAr = lang === 'ar';
  const [trackingIdInput, setTrackingIdInput] = useState<string>(prefilledCode || 'TAR-2026-8941');
  const [searchTriggered, setSearchTriggered] = useState<boolean>(true);

  // Combine default sample records with user-created records
  const allRecords = [...customRecords, ...sampleTrackingRecords];

  const currentRecord = allRecords.find(
    (r) => r.trackingId.trim().toUpperCase() === trackingIdInput.trim().toUpperCase()
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTriggered(true);
  };

  const handleSelectSample = (code: string) => {
    setTrackingIdInput(code);
    setSearchTriggered(true);
  };

  return (
    <section id="tracker" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-2">
            <MoroccanStar size={12} />
            <span>{isAr ? 'الشفافية والتتبع الآلي' : 'Transparence & Suivi en Direct'}</span>
            <MoroccanStar size={12} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight text-balance">
            {isAr ? 'فضاء تتبع الطلبات والشكايات' : 'Espace de Suivi des Démarches & Réclamations'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {isAr
              ? 'أدخل الرقم المرجعي لمتابعة مسار معالجة ملفكم، مصلحة الاختصاص، والتاريخ المتوقع لجاهزية الوثيقة.'
              : 'Saisissez votre référence officielle pour suivre l\'état d\'avancement de votre dossier administratif.'}
          </p>
          <MoroccanFriezeDivider className="my-5" />
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-stretch gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={trackingIdInput}
                onChange={(e) => setTrackingIdInput(e.target.value)}
                placeholder={isAr ? 'مثال: TAR-2026-8941' : 'Ex: TAR-2026-8941'}
                className="w-full px-4 py-3 bg-[#FAF7F2] border border-stone-300 rounded-xl text-stone-900 font-mono text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-800 focus:bg-white transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-amber-900 hover:bg-amber-950 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>{isAr ? 'تتبع الملف' : 'Vérifier l\'état'}</span>
            </button>
          </form>

          {/* Quick Clickable Sample IDs */}
          <div className="mt-3 flex items-center gap-2 flex-wrap text-xs text-stone-600">
            <span className="font-medium text-stone-500">{isAr ? 'ملفات للتجربة السريعة:' : 'Exemples disponibles :'}</span>
            <button
              type="button"
              onClick={() => handleSelectSample('TAR-2026-8941')}
              className="hover:text-amber-900 font-mono underline decoration-amber-700/50 cursor-pointer"
            >
              TAR-2026-8941 ({isAr ? 'رخصة إصلاح' : 'Permis'})
            </button>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <button
              type="button"
              onClick={() => handleSelectSample('TAR-2026-4412')}
              className="hover:text-amber-900 font-mono underline decoration-amber-700/50 cursor-pointer"
            >
              TAR-2026-4412 ({isAr ? 'شكاية إنارة' : 'Éclairage'})
            </button>
          </div>
        </div>

        {/* Result Container */}
        {searchTriggered && currentRecord ? (
          <div className="max-w-3xl mx-auto bg-[#FAF7F2] rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            {/* Record Overview (Zero-Pill Discipline) */}
            <div className="border-b border-stone-200 pb-6 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <span className="text-sm font-mono font-bold text-amber-900 tracking-wider">
                  {currentRecord.trackingId}
                </span>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isAr ? currentRecord.statusAr : currentRecord.statusFr}</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-serif text-stone-900 mb-3">
                {isAr ? currentRecord.subjectAr : currentRecord.subjectFr}
              </h3>

              {/* Unboxed Metadata Strip */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-stone-600">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-stone-400" />
                  <span>{currentRecord.citizenName}</span>
                </div>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <div className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-stone-400" />
                  <span>{isAr ? currentRecord.typeAr : currentRecord.typeFr}</span>
                </div>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span>{isAr ? `تاريخ الإيداع: ${currentRecord.submittedDate}` : `Déposé le: ${currentRecord.submittedDate}`}</span>
                </div>
              </div>

              {/* Attached Documents if available */}
              {currentRecord.attachedFiles && currentRecord.attachedFiles.length > 0 && (
                <div className="mt-4 pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-stone-700 flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4 text-emerald-700" />
                    <span>{isAr ? 'الوثائق الثبوتية المرفقة بالملف:' : 'Pièces justificatives jointes :'}</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentRecord.attachedFiles.map((fileName, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 rounded-md font-mono text-[11px]"
                      >
                        {fileName}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Stepper Timeline */}
            <div>
              <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-6">
                {isAr ? 'المسار الإداري للملف ومحطات المعالجة' : 'Chronologie des étapes d\'instruction'}
              </h4>

              <div className="relative ps-6 space-y-6 before:absolute before:top-2 before:bottom-2 before:start-[11px] before:w-0.5 before:bg-stone-200">
                {currentRecord.steps.map((step) => {
                  return (
                    <div key={step.stepNumber} className="relative">
                      {/* Circle indicator */}
                      <div
                        className={`absolute -start-6 top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                          step.isDone
                            ? 'bg-emerald-700 text-white shadow-sm'
                            : step.isCurrent
                            ? 'bg-amber-600 text-white ring-4 ring-amber-100'
                            : 'bg-stone-200 text-stone-500'
                        }`}
                      >
                        {step.isDone ? '✓' : step.stepNumber}
                      </div>

                      {/* Content block */}
                      <div className="bg-white p-4 rounded-xl border border-stone-200">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h5 className="text-sm font-bold text-stone-900">
                            {isAr ? step.labelAr : step.labelFr}
                          </h5>
                          <span className="text-xs text-stone-500 font-mono tabular-nums">
                            {step.date}
                          </span>
                        </div>

                        <div className="text-xs text-amber-900 font-medium mb-1">
                          {isAr ? step.departmentAr : step.departmentFr}
                        </div>

                        {(isAr ? step.notesAr : step.notesFr) && (
                          <p className="mt-2 text-xs text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-100 leading-relaxed">
                            {isAr ? step.notesAr : step.notesFr}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : searchTriggered ? (
          <div className="max-w-md mx-auto text-center p-8 bg-[#FAF7F2] rounded-2xl border border-stone-200">
            <AlertCircle className="w-8 h-8 text-amber-800 mx-auto mb-3" />
            <h4 className="text-base font-bold text-stone-900 mb-1">
              {isAr ? 'لم يتم العثور على ملف بهذا الرقم' : 'Aucun dossier correspondant'}
            </h4>
            <p className="text-xs text-stone-600 mb-4">
              {isAr
                ? 'يرجى التأكد من كتابة الرقم المرجعي بدقة (مثلاً: TAR-2026-8941) أو مراجعة وصل الإيداع المسلّم إليكم.'
                : 'Veuillez vérifier la référence saisie ou contacter le bureau d\'ordre.'}
            </p>
            <button
              onClick={() => handleSelectSample('TAR-2026-8941')}
              className="text-xs font-semibold text-amber-900 hover:underline cursor-pointer"
            >
              {isAr ? 'عرض مثال توضيحي جاهز' : 'Charger un exemple de dossier'}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};
