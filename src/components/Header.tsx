import React, { useState, useRef, useEffect } from 'react';
import { CommuneTaroudantOriginalLogo, MoroccanStar } from './MoroccanMotifs';
import { Language } from '../types/portal';
import { InstitutionalTopic } from './InstitutionalModal';
import { 
  Menu, 
  X, 
  Search, 
  PhoneCall, 
  ChevronDown, 
  Building, 
  Users, 
  FileText, 
  Handshake, 
  Newspaper, 
  Mail,
  Home,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { TaroudantWeatherWidget } from './TaroudantWeatherWidget';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenTracker: () => void;
  onOpenSearch: () => void;
  onOpenHotlines: () => void;
  onOpenInstitutional: (topic: InstitutionalTopic) => void;
  onOpenService: (serviceId: string) => void;
  onOpenComplaint: () => void;
  onOpenAppointment?: () => void;
  onOpenWeather?: () => void;
}

interface MenuItem {
  id: string;
  labelAr: string;
  labelFr: string;
  href?: string;
  subItems?: {
    labelAr: string;
    labelFr: string;
    action: () => void;
  }[];
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenTracker,
  onOpenSearch,
  onOpenHotlines,
  onOpenInstitutional,
  onOpenService,
  onOpenComplaint,
  onOpenAppointment,
  onOpenWeather
}) => {
  const isAr = lang === 'ar';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // The Original Header Menu structure of communetaroudant.ma
  const originalMenuItems: MenuItem[] = [
    {
      id: 'home',
      labelAr: 'الرئيسية',
      labelFr: 'Accueil',
      href: '#',
      subItems: undefined
    },
    {
      id: 'commune',
      labelAr: 'الجماعة',
      labelFr: 'La Commune',
      subItems: [
        {
          labelAr: 'اختصاصات الجماعة (القانون 113.14)',
          labelFr: 'Compétences de la Commune (Loi 113.14)',
          action: () => onOpenInstitutional('powers')
        },
        {
          labelAr: 'تشكيلة ومكتب المجلس الجماعي',
          labelFr: 'Composition du Conseil Communal',
          action: () => onOpenInstitutional('council_board')
        },
        {
          labelAr: 'اللجان الدائمة بالمجلس',
          labelFr: 'Commissions Permanentes',
          action: () => onOpenInstitutional('council_board')
        },
        {
          labelAr: 'برنامج عمل الجماعة (PAC 2023-2028)',
          labelFr: 'Plan d\'Action Communal (PAC)',
          action: () => scrollToSection('pac')
        },
        {
          labelAr: 'تاريخ وأسوار تارودانت التاريخية',
          labelFr: 'Histoire & Remparts de Taroudant',
          action: () => scrollToSection('heritage')
        }
      ]
    },
    {
      id: 'participation',
      labelAr: 'المشاركة المواطنة',
      labelFr: 'Participation Citoyenne',
      subItems: [
        {
          labelAr: 'فضاء الاقتراحات والملاحظات (Chikaya)',
          labelFr: 'Espace Suggestions & Réclamations',
          action: () => onOpenComplaint()
        },
        {
          labelAr: 'ميثاق المشاركة المواطنة لتارودانت',
          labelFr: 'Charte de Participation Citoyenne',
          action: () => onOpenInstitutional('charter')
        },
        {
          labelAr: 'الميزانية التشاركية للساكنة',
          labelFr: 'Budget Participatif Citoyen',
          action: () => onOpenInstitutional('participatory_budget')
        },
        {
          labelAr: 'تتبع برنامج عمل الجماعة والشفافية',
          labelFr: 'Suivi Participatif des Projets',
          action: () => scrollToSection('pac')
        },
        {
          labelAr: 'تتبع ملف أو شكاية بالرقم المرجعي',
          labelFr: 'Suivi de Dossier & Réclamation',
          action: () => onOpenTracker()
        }
      ]
    },
    {
      id: 'services',
      labelAr: 'الخدمات الإدارية',
      labelFr: 'Services Administratifs',
      subItems: [
        {
          labelAr: 'الحالة المدنية والشواهد الإدارية',
          labelFr: 'État Civil & Certificats de Résidence',
          action: () => {
            scrollToSection('services');
            onOpenService('residence-cert');
          }
        },
        {
          labelAr: 'التعمير ورخص البناء (منصة رخص)',
          labelFr: 'Urbanisme & Permis de Bâtir (Rokhas)',
          action: () => {
            scrollToSection('services');
            onOpenService('building-permit');
          }
        },
        {
          labelAr: 'الأنشطة الاقتصادية ورخص المحلات',
          labelFr: 'Autorisations Commerciales & Artisanat',
          action: () => {
            scrollToSection('services');
            onOpenService('business-license');
          }
        },
        {
          labelAr: 'الجبايات والرسوم الجماعية المحلية',
          labelFr: 'Fiscalité Locale & Taxes',
          action: () => {
            scrollToSection('services');
            onOpenService('local-taxes');
          }
        }
      ]
    },
    {
      id: 'cooperation',
      labelAr: 'التعاون والشراكات',
      labelFr: 'Coopération & Partenariats',
      subItems: [
        {
          labelAr: 'اتفاقيات التعاون والتوأمة الدولية',
          labelFr: 'Conventions & Jumelages (Romans-sur-Isère)',
          action: () => onOpenInstitutional('cooperation')
        },
        {
          labelAr: 'الشراكة مع جهة سوس ماسة والوزارات',
          labelFr: 'Partenariat avec la Région & Ministères',
          action: () => onOpenInstitutional('cooperation')
        },
        {
          labelAr: 'الشراكة مع جمعيات المجتمع المدني',
          labelFr: 'Partenariat avec la Société Civile',
          action: () => onOpenInstitutional('charter')
        }
      ]
    },
    {
      id: 'budget',
      labelAr: 'الميزانية المفتوحة',
      labelFr: 'Budget Ouvert & Marchés',
      subItems: [
        {
          labelAr: 'ميزانية الجماعة والقوائم المالية',
          labelFr: 'Budget Communal & États Financiers',
          action: () => scrollToSection('budget')
        },
        {
          labelAr: 'ميزانية المواطن المبسطة 2026',
          labelFr: 'Budget Citoyen Simplifié',
          action: () => scrollToSection('budget')
        },
        {
          labelAr: 'طلبات العروض وصفقات الجماعة والبرنامج التوقعي',
          labelFr: 'Appels d\'Offres & Marchés Publics',
          action: () => scrollToSection('budget')
        }
      ]
    },
    {
      id: 'news',
      labelAr: 'الأخبار والأنشطة',
      labelFr: 'Actualités & Événements',
      subItems: [
        {
          labelAr: 'أنشطة ومقررات المجلس الجماعي',
          labelFr: 'Activités & Délibérations du Conseil',
          action: () => scrollToSection('council')
        },
        {
          labelAr: 'البلاغات والإعلانات الرسمية للعموم',
          labelFr: 'Avis Publics & Communiqués',
          action: () => scrollToSection('council')
        },
        {
          labelAr: 'مباريات التوظيف وتقارير التدقيق',
          labelFr: 'Recrutement & Rapports d\'Audit',
          action: () => scrollToSection('governance')
        }
      ]
    },
    {
      id: 'contact',
      labelAr: 'اتصل بنا',
      labelFr: 'Contact & Permanence',
      subItems: [
        {
          labelAr: 'أرقام الطوارئ والمداومة 24/7',
          labelFr: 'Numéros d\'Urgence Municipale 24/7',
          action: () => onOpenHotlines()
        },
        {
          labelAr: 'المقر المركزي ومكاتب المقاطعات',
          labelFr: 'Siège Communal & Arrondissements',
          action: () => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }
        }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200 shadow-sm" ref={dropdownRef}>
      {/* 1. Official Administrative Utility Ribbon */}
      <div className="bg-[#1C1917] text-stone-300 text-xs px-4 sm:px-6 py-1.5 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate text-stone-300 font-medium">
            <span className="text-amber-500 font-bold">
              {isAr ? 'المملكة المغربية' : 'Royaume du Maroc'}
            </span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="hidden sm:inline text-stone-400">
              {isAr ? 'وزارة الداخلية' : 'Ministère de l\'Intérieur'}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-stone-600">·</span>
            <span className="hidden md:inline text-stone-400">
              {isAr ? 'عمالة إقليم تارودانت' : 'Province de Taroudannt'}
            </span>
            <span aria-hidden="true" className="hidden md:inline text-stone-600">·</span>
            <span className="text-amber-400/90 font-serif text-[11px] tracking-wider">ⵜⴰⴳⵔⴰⵡⵜ ⵏ ⵜⴰⵔⵓﺩⴰنⵜ</span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-stone-300">
            <button
              onClick={onOpenHotlines}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors text-xs font-medium cursor-pointer"
              title={isAr ? 'أرقام الطوارئ والمصالح الجماعية' : 'Numéros d\'urgence'}
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden sm:inline-flex items-center gap-1">
                <span>{isAr ? 'المداومة:' : 'Permanence:'}</span>
                <span dir="ltr" className="font-mono tabular-nums inline-block select-all text-amber-300 font-bold">
                  05 28 85 20 40
                </span>
              </span>
              <span className="sm:hidden">{isAr ? 'طوارئ' : 'Urgence'}</span>
            </button>

            <span aria-hidden="true" className="text-stone-700">|</span>

            {/* Live Weather Indicator for Taroudant */}
            <TaroudantWeatherWidget
              lang={lang}
              variant="compact"
              onOpenDetailed={onOpenWeather}
            />

            <span aria-hidden="true" className="text-stone-700">|</span>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="px-2 py-0.5 rounded text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-amber-300 hover:text-amber-200 transition-colors border border-stone-700 cursor-pointer"
              aria-label="Switch Language"
            >
              {lang === 'ar' ? 'Français' : 'العربية'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Brand Row with Action CTAs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-6 h-18">
          {/* Brand Zone */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 shrink-0 whitespace-nowrap text-stone-900 group"
          >
            <CommuneTaroudantOriginalLogo size={46} className="shrink-0 transition-transform group-hover:scale-105 mix-blend-multiply" />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-stone-950 font-serif">
                {isAr ? 'جماعة تارودانت' : 'Commune de Taroudant'}
              </span>
              <span className="text-[11px] font-medium text-amber-800 -mt-1 tracking-wide">
                {isAr ? 'البوابة الرسمية للمواطنين والخدمات' : 'Portail Officiel des Citoyens'}
              </span>
            </div>
          </a>

          {/* Action Zone: Search, Track Button, and Mobile Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 rounded-lg transition-colors cursor-pointer"
              aria-label={isAr ? 'بحث سريع' : 'Rechercher'}
              title={isAr ? 'بحث في البوابة' : 'Rechercher'}
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenTracker}
              className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg transition-all shadow-sm hover:shadow active:scale-95 whitespace-nowrap shrink-0 cursor-pointer border border-amber-800"
            >
              {isAr ? 'تتبع طلب أو شكاية' : 'Suivre une Démarche'}
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-700 hover:text-stone-950 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. The Original Header Menu Bar (Desktop: Full 7-item Navigation with Dropdowns) */}
      <div className="hidden xl:block bg-stone-100/90 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between text-sm font-semibold text-stone-700">
            {originalMenuItems.map((item) => {
              const hasSub = item.subItems && item.subItems.length > 0;
              const isDropdownOpen = activeDropdown === item.id;

              return (
                <div key={item.id} className="relative group">
                  {hasSub ? (
                    <button
                      onClick={() => setActiveDropdown(isDropdownOpen ? null : item.id)}
                      onMouseEnter={() => setActiveDropdown(item.id)}
                      className={`flex items-center gap-1.5 py-3 px-3 hover:text-amber-900 hover:bg-stone-200/50 transition-colors whitespace-nowrap cursor-pointer ${
                        isDropdownOpen ? 'text-amber-900 bg-stone-200/70' : ''
                      }`}
                    >
                      <span>{isAr ? item.labelAr : item.labelFr}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-amber-800' : 'text-stone-400'}`} />
                    </button>
                  ) : (
                    <a
                      href={item.href || '#'}
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-center gap-1.5 py-3 px-3 hover:text-amber-900 hover:bg-stone-200/50 transition-colors whitespace-nowrap"
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>{isAr ? item.labelAr : item.labelFr}</span>
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {hasSub && isDropdownOpen && (
                    <div 
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full start-0 w-72 bg-white rounded-b-xl shadow-xl border border-stone-200 py-2 z-50 animate-in fade-in-50 duration-150"
                    >
                      <div className="px-3.5 py-1.5 border-b border-stone-100 text-[11px] font-bold text-amber-900 uppercase tracking-wider">
                        {isAr ? item.labelAr : item.labelFr}
                      </div>
                      {item.subItems?.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => {
                            setActiveDropdown(null);
                            sub.action();
                          }}
                          className="w-full text-start px-3.5 py-2.5 text-xs font-medium text-stone-700 hover:text-amber-950 hover:bg-amber-50/70 transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <span className="leading-snug">{isAr ? sub.labelAr : sub.labelFr}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-amber-800 transition-colors shrink-0" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 4. Mobile Drawer Navigation (Accordion for all original menu sections) */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-stone-200 bg-[#FAF7F2] px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="text-xs font-bold text-stone-500 uppercase tracking-wider px-2 mb-2">
            {isAr ? 'القائمة الرئيسية للبوابة' : 'Menu Officiel'}
          </div>

          <nav className="flex flex-col divide-y divide-stone-200/70">
            {originalMenuItems.map((item) => {
              const hasSub = item.subItems && item.subItems.length > 0;
              const isExpanded = mobileExpanded === item.id;

              return (
                <div key={item.id} className="py-1">
                  {hasSub ? (
                    <div>
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : item.id)}
                        className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-bold text-stone-800 hover:bg-stone-200/50 rounded-lg transition-colors cursor-pointer"
                      >
                        <span>{isAr ? item.labelAr : item.labelFr}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-amber-800' : 'text-stone-400'}`} />
                      </button>

                      {isExpanded && (
                        <div className="bg-white/70 rounded-lg p-2 mt-1 space-y-1 border border-stone-200">
                          {item.subItems?.map((sub, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                sub.action();
                              }}
                              className="w-full text-start p-2 text-xs font-semibold text-stone-700 hover:text-amber-900 hover:bg-stone-100 rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-800 shrink-0" />
                              <span>{isAr ? sub.labelAr : sub.labelFr}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full text-start py-2.5 px-3 text-sm font-bold text-stone-800 hover:bg-stone-200/50 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Home className="w-4 h-4 text-amber-800" />
                      <span>{isAr ? item.labelAr : item.labelFr}</span>
                    </button>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="w-full py-3 text-center text-sm font-bold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm cursor-pointer"
            >
              {isAr ? 'تتبع طلب أو شكاية بالرقم المرجعي' : 'Suivre une Démarche'}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHotlines();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-stone-700 bg-stone-100 border border-stone-200 rounded-lg cursor-pointer"
            >
              {isAr ? 'أرقام الطوارئ ومداومة المدينة' : 'Numéros d\'urgence municipale'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
