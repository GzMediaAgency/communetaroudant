import React from 'react';

// Moroccan 8-pointed star (Khatam Suleyman)
export const MoroccanStar: React.FC<{ className?: string; size?: number }> = ({ 
  className = "text-amber-800", 
  size = 20 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2L14.7 6.3L19.7 4.3L17.7 9.3L22 12L17.7 14.7L19.7 19.7L14.7 17.7L12 22L9.3 17.7L4.3 19.7L6.3 14.7L2 12L6.3 9.3L4.3 4.3L9.3 6.3L12 2Z" />
  </svg>
);

// Moroccan geometric ribbon / frieze divider
export const MoroccanFriezeDivider: React.FC<{ className?: string }> = ({ className = "my-6" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-px bg-stone-200 flex-1 max-w-xs" />
    <div className="flex items-center gap-1.5 text-amber-800">
      <div className="w-1.5 h-1.5 rotate-45 bg-emerald-800" />
      <MoroccanStar size={14} className="text-amber-800" />
      <div className="w-1.5 h-1.5 rotate-45 bg-emerald-800" />
    </div>
    <div className="h-px bg-stone-200 flex-1 max-w-xs" />
  </div>
);

// Official Logo of Commune de Taroudant (شعار جماعة تارودانت الرسمي)
// Features: The mural crown, two red heraldic horses, the Saadian pisé rampart shield, 
// the green crescent and stars, the motto 'الأصالة أساس الاستمرار',
// and the official titles in Arabic, Amazigh Tifinagh, and French.
export const CommuneTaroudantOriginalLogo: React.FC<{ size?: number; className?: string; alt?: string }> = ({
  size = 54,
  className = "",
  alt = "شعار جماعة تارودانت - Commune de Taroudannt"
}) => (
  <img
    src="/assets/aistudio/image_538272b5.png"
    alt={alt}
    style={{ height: size, width: 'auto' }}
    className={`object-contain shrink-0 ${className}`}
    loading="eager"
  />
);

// Backward compatibility alias
export const MoroccanKingdomCrest = CommuneTaroudantOriginalLogo;

