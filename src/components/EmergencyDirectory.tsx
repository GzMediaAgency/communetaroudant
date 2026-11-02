import React, { useState } from 'react';
import { Language } from '../types/portal';
import { emergencyHotlines } from '../data/portalData';
import { MoroccanStar } from './MoroccanMotifs';
import { 
  X, 
  Phone, 
  Copy, 
  Check, 
  HeartPulse, 
  Lightbulb, 
  Trash2, 
  Flame, 
  Shield, 
  Compass, 
  Droplets, 
  Zap 
} from 'lucide-react';

interface EmergencyDirectoryProps {
  lang: Language;
  onClose: () => void;
}

export const EmergencyDirectory: React.FC<EmergencyDirectoryProps> = ({ lang, onClose }) => {
  const isAr = lang === 'ar';
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-red-600" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-amber-600" />;
      case 'Trash2': return <Trash2 className="w-5 h-5 text-emerald-600" />;
      case 'Flame': return <Flame className="w-5 h-5 text-orange-600" />;
      case 'Shield': return <Shield className="w-5 h-5 text-blue-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-indigo-600" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-cyan-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-yellow-600" />;
      default: return <Phone className="w-5 h-5 text-stone-600" />;
    }
  };

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num.replace(/\s+/g, ''));
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="bg-[#FAF7F2] rounded-2xl border border-stone-300 shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden text-stone-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600/30 text-red-400 rounded-lg">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-amber-300 font-medium">
                {isAr ? 'مداومة 24/7' : 'Permanence 24/7'}
              </div>
              <h3 className="text-base sm:text-lg font-bold font-serif">
                {isAr ? 'دليل الطوارئ والمصالح الجماعية بتارودانت' : 'Numéros d\'Urgence Municipale & Dépannage'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Directory List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3">
          <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
            {isAr
              ? 'أرقام التدخل السريع لمصالح القرب بجماعة تارودانت والشركاء العموميين للتبليغ عن الأعطاب أو حالات الطوارئ:'
              : 'Coordonnées directes pour signaler une panne, une urgence sanitaire ou contacter les équipes de permanence :'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {emergencyHotlines.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-stone-200 flex items-center justify-between hover:border-amber-700/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-stone-100 rounded-lg shrink-0">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900 leading-snug">
                      {isAr ? item.nameAr : item.nameFr}
                    </div>
                    <div dir="ltr" className="text-sm font-mono font-bold text-amber-900 mt-0.5 text-start tracking-wider select-all">
                      {item.number}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleCopy(item.number)}
                    className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
                    title={isAr ? 'نسخ الرقم' : 'Copier le numéro'}
                  >
                    {copiedNumber === item.number ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  <a
                    href={`tel:${item.number.replace(/\s+/g, '')}`}
                    className="p-2 bg-amber-900 text-white rounded-lg hover:bg-amber-950 transition-colors cursor-pointer"
                    title={isAr ? 'اتصال فوري' : 'Appeler'}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-stone-100 rounded-xl text-xs text-stone-600 text-center">
            {isAr
              ? 'مكتب الاستقبال المركزي برئاسة الجماعة يستقبلكم من الإثنين إلى الجمعة من الساعة 8:30 إلى 16:30'
              : 'Accueil physique au siège de la Commune : du Lundi au Vendredi de 08h30 à 16h30'}
          </div>
        </div>
      </div>
    </div>
  );
};
