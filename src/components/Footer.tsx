import React from 'react';
import { Language } from '../types/portal';
import { CommuneTaroudantOriginalLogo, MoroccanStar } from './MoroccanMotifs';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const partnerPortals = [
    { labelAr: 'البوابة الوطنية للجماعات الترابية', labelFr: 'Portail National des Collectivités', url: 'https://www.collectivitesterritoriales.ma' },
    { labelAr: 'منصة وثيقة للشواهد الإدارية', labelFr: 'Plateforme Watiqa.ma', url: 'https://www.watiqa.ma' },
    { labelAr: 'منصة رخص للتعمير والأنشطة', labelFr: 'Plateforme Rokhas.ma', url: 'https://www.rokhas.ma' },
    { labelAr: 'البوابة المغربية للصفقات العمومية', labelFr: 'Portail des Marchés Publics', url: 'https://www.marchespublics.gov.ma' },
    { labelAr: 'مجلس جهة سوس ماسة', labelFr: 'Conseil Régional Souss-Massa', url: 'https://www.soussmassa.ma' }
  ];

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 lg:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Original Municipal Logo & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <CommuneTaroudantOriginalLogo size={52} className="shrink-0" />
              <div>
                <h3 className="text-lg font-bold font-serif text-white">
                  {isAr ? 'المملكة المغربية - جماعة تارودانت' : 'Royaume du Maroc - Commune de Taroudant'}
                </h3>
                <span className="text-xs text-amber-400 block font-serif tracking-wide">
                  {isAr ? 'عمالة إقليم تارودانت · جهة سوس ماسة · ⵜⴰⴳⵔⴰⵡⵜ ⵏ ⵜⴰⵔⵓⴷⴰⵏⵜ' : 'Province de Taroudant · Région Souss-Massa'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              {isAr
                ? 'البوابة الرسمية لجماعة تارودانت (communetaroudant.ma). منصة الإدارة الرقمية لتقريب الخدمات من المرتفقين، تكريس الحكامة والشفافية، والنهوض بالتنمية الحضرية والتراث السوسي الأصيل.'
                : 'Portail officiel de la Commune de Taroudant (communetaroudant.ma). Plateforme dédiée aux services municipaux, à la transparence budgétaire et au développement du territoire.'}
            </p>

            <div className="flex items-center gap-3 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <MoroccanStar size={12} className="text-amber-500" />
                <span>{isAr ? 'عاصمة السعديين التاريخية' : 'Capitale Historique'}</span>
              </div>
              <span aria-hidden="true" className="text-stone-700">·</span>
              <span>{isAr ? '8.5 كلم من الأسوار الطينية' : '8,5 km de remparts'}</span>
            </div>
          </div>

          {/* Col 2: Institutional Contact Info (Exact coordinates from communetaroudant.ma) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
              {isAr ? 'مقر الجماعة ومعلومات الاتصال المعتمدة' : 'Siège & Contact Officiel'}
            </h4>

            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{isAr ? 'الحي الإداري المحايطة، تارودانت 83000، المغرب' : 'Quartier Administratif Lmahaita, Taroudant 83000, Maroc'}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span dir="ltr" className="font-mono tabular-nums inline-block select-all">0661983840 / 05 28 85 20 40</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-mono">commune.taroudant@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{isAr ? 'الإثنين - الجمعة: 08:30 إلى 16:30 (المداومة 24/7)' : 'Lundi - Vendredi: 08h30 - 16h30 (Permanence 24/7)'}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: National Platforms & E-Government Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
              {isAr ? 'المنصات الوطنية المشتركة' : 'Portails Publics Partenaires'}
            </h4>

            <ul className="space-y-2 text-xs">
              {partnerPortals.map((portal, idx) => (
                <li key={idx}>
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-stone-400 hover:text-amber-300 transition-colors py-0.5 group"
                  >
                    <span>{isAr ? portal.labelAr : portal.labelFr}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-600 group-hover:text-amber-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            {isAr
              ? 'جماعة تارودانت © 2026 - المملكة المغربية. الموقع الرسمي: communetaroudant.ma'
              : 'Commune de Taroudant © 2026 - Royaume du Maroc. Site officiel: communetaroudant.ma'}
          </div>
          <div className="text-center sm:text-end">
            <span className="text-stone-400 font-medium inline-flex items-center gap-1.5 flex-wrap justify-center sm:justify-end">
              <span>{isAr ? 'الحي الإداري المحايطة، تارودانت' : 'Quartier Administratif Lmahaita, Taroudant'}</span>
              <span aria-hidden="true">|</span>
              <span className="font-mono">commune.taroudant@gmail.com</span>
              <span aria-hidden="true">|</span>
              <span>{isAr ? 'الهاتف:' : 'Tél:'}</span>
              <span dir="ltr" className="font-mono tabular-nums inline-block select-all">0661983840</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
