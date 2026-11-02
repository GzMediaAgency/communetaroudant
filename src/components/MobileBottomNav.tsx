import React from 'react';
import { Language } from '../types/portal';
import { Home, Layers, Search, AlertCircle, PhoneCall } from 'lucide-react';

interface MobileBottomNavProps {
  lang: Language;
  onOpenTracker: () => void;
  onOpenComplaint: () => void;
  onOpenHotlines: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  lang,
  onOpenTracker,
  onOpenComplaint,
  onOpenHotlines
}) => {
  const isAr = lang === 'ar';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-stone-300 py-1.5 px-2 shadow-2xl safe-area-pb"
    >
      <div className="grid grid-cols-5 gap-1 max-w-md mx-auto">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center justify-center py-1 px-1 text-stone-700 hover:text-amber-900 transition-colors"
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium leading-none whitespace-nowrap">
            {isAr ? 'الرئيسية' : 'Accueil'}
          </span>
        </button>

        <button
          onClick={() => scrollToSection('services')}
          className="flex flex-col items-center justify-center py-1 px-1 text-stone-700 hover:text-amber-900 transition-colors"
        >
          <Layers className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium leading-none whitespace-nowrap">
            {isAr ? 'الخدمات' : 'Services'}
          </span>
        </button>

        <button
          onClick={onOpenTracker}
          className="flex flex-col items-center justify-center py-1 px-1 text-amber-900 hover:text-amber-950 transition-colors"
        >
          <Search className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold leading-none whitespace-nowrap">
            {isAr ? 'تتبع ملف' : 'Suivi'}
          </span>
        </button>

        <button
          onClick={onOpenComplaint}
          className="flex flex-col items-center justify-center py-1 px-1 text-stone-700 hover:text-amber-900 transition-colors"
        >
          <AlertCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium leading-none whitespace-nowrap">
            {isAr ? 'شكاية' : 'Chikaya'}
          </span>
        </button>

        <button
          onClick={onOpenHotlines}
          className="flex flex-col items-center justify-center py-1 px-1 text-stone-700 hover:text-amber-900 transition-colors"
        >
          <PhoneCall className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium leading-none whitespace-nowrap">
            {isAr ? 'طوارئ' : 'Urgence'}
          </span>
        </button>
      </div>
    </nav>
  );
};
