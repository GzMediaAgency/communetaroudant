import React, { useState, useEffect } from 'react';
import { Language, EServiceItem, TrackingRecord } from './types/portal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EServicesHub } from './components/EServicesHub';
import { ServiceModal } from './components/ServiceModal';
import { RequestTracker } from './components/RequestTracker';
import { ActionPlanPAC } from './components/ActionPlanPAC';
import { HeritageTaroudant } from './components/HeritageTaroudant';
import { ModernizationAudit } from './components/ModernizationAudit';
import { CouncilNews } from './components/CouncilNews';
import { EmergencyDirectory } from './components/EmergencyDirectory';
import { InstitutionalModal, InstitutionalTopic } from './components/InstitutionalModal';
import { OpenBudgetSection } from './components/OpenBudgetSection';
import { GovernanceRecruitmentSection } from './components/GovernanceRecruitmentSection';
import { TaroudantWeatherWidget } from './components/TaroudantWeatherWidget';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { eServicesList } from './data/portalData';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [selectedService, setSelectedService] = useState<EServiceItem | null>(null);
  const [isHotlinesOpen, setIsHotlinesOpen] = useState<boolean>(false);
  const [isWeatherModalOpen, setIsWeatherModalOpen] = useState<boolean>(false);
  const [institutionalTopic, setInstitutionalTopic] = useState<InstitutionalTopic | null>(null);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [customRecords, setCustomRecords] = useState<TrackingRecord[]>([]);
  const [trackerPrefill, setTrackerPrefill] = useState<string>('TAR-2026-8941');

  // Update HTML and body dir/lang attributes when language changes
  useEffect(() => {
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = lang;
    if (document.body) {
      document.body.dir = direction;
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'fr' : 'ar'));
  };

  const handleOpenTracker = (code?: string) => {
    if (code) {
      setTrackerPrefill(code);
    }
    const trackerEl = document.getElementById('tracker');
    if (trackerEl) {
      trackerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenComplaint = () => {
    const complaintService = eServicesList.find((s) => s.id === 'citizen-complaint');
    if (complaintService) {
      setSelectedService(complaintService);
    }
  };

  const handleTrackNewCode = (
    code: string,
    citizenName: string,
    subject: string,
    type: string,
    attachedFiles?: string[]
  ) => {
    const isAr = lang === 'ar';
    const today = isAr ? '31 أكتوبر 2026' : '31 Octobre 2026';
    const expected = isAr ? '07 نونبر 2026' : '07 Novembre 2026';

    const hasDocs = attachedFiles && attachedFiles.length > 0;

    const newRecord: TrackingRecord = {
      trackingId: code,
      citizenName,
      subjectAr: subject,
      subjectFr: subject,
      typeAr: type,
      typeFr: type,
      submittedDate: today,
      expectedDate: expected,
      statusAr: 'تم التسجيل وقيد المعالجة الإدارية',
      statusFr: 'Enregistré & en cours de traitement',
      attachedFiles: attachedFiles || [],
      steps: [
        {
          stepNumber: 1,
          labelAr: hasDocs 
            ? `تسجيل وإيداع الطلب الرقمي (مع ${attachedFiles.length} وثائق مرفقة)`
            : 'تسجيل وإيداع الطلب الرقمي',
          labelFr: hasDocs 
            ? `Dépôt numérique (${attachedFiles.length} pièce(s) jointe(s))`
            : 'Enregistrement de la demande numérique',
          date: today,
          departmentAr: 'مكتب الضبط الرقمي المركزي',
          departmentFr: 'Bureau d\'Ordre Digital',
          isDone: true,
          isCurrent: false,
          notesAr: hasDocs
            ? `تم استلام وتحميل الوثائق: [${attachedFiles.join(' ، ')}] ومطابقتها للشروط الإدارية.`
            : 'تم استلام البيانات بنجاح وإحالتها للمصلحة المعنية',
          notesFr: hasDocs
            ? `Documents reçus et vérifiés : ${attachedFiles.join(', ')}.`
            : 'Dossier transmis au service municipal compétent'
        },
        {
          stepNumber: 2,
          labelAr: 'المعالجة الإدارية والتقنية',
          labelFr: 'Instruction administrative & technique',
          date: today,
          departmentAr: 'المصلحة الجماعية المختصة',
          departmentFr: 'Service Municipal Compétent',
          isDone: false,
          isCurrent: true,
          notesAr: 'الملف قيد الدراسة والمطابقة',
          notesFr: 'Vérification de conformité en cours'
        },
        {
          stepNumber: 3,
          labelAr: 'التوقيع والتأشير النهائي',
          labelFr: 'Signature et validation finale',
          date: expected,
          departmentAr: 'رئاسة الجماعة',
          departmentFr: 'Présidence de la Commune',
          isDone: false,
          isCurrent: false
        },
        {
          stepNumber: 4,
          labelAr: 'جاهزية الوثيقة للاستلام أو التحميل',
          labelFr: 'Disponibilité du document / Clôture',
          date: expected,
          departmentAr: 'الشباك الإلكتروني الموحد',
          departmentFr: 'Guichet Unique Dématérialisé',
          isDone: false,
          isCurrent: false
        }
      ]
    };

    setCustomRecords((prev) => [newRecord, ...prev]);
    setTrackerPrefill(code);
  };

  return (
    <div 
      className="min-h-screen flex flex-col bg-[#FAF7F2] text-stone-900 selection:bg-amber-900 selection:text-white"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Top Header with original header menu of communetaroudant.ma */}
      <Header
        lang={lang}
        onToggleLang={toggleLang}
        onOpenTracker={() => handleOpenTracker()}
        onOpenSearch={() => {
          const el = document.getElementById('services');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenHotlines={() => setIsHotlinesOpen(true)}
        onOpenInstitutional={(topic) => setInstitutionalTopic(topic)}
        onOpenService={(serviceId) => {
          const srv = eServicesList.find((s) => s.id === serviceId);
          if (srv) setSelectedService(srv);
        }}
        onOpenComplaint={handleOpenComplaint}
        onOpenWeather={() => setIsWeatherModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero with authentic Taroudant ramparts visual & fast citizen actions */}
        <Hero
          lang={lang}
          onSelectService={(id) => {
            const srv = eServicesList.find((s) => s.id === id);
            if (srv) setSelectedService(srv);
          }}
          onOpenComplaint={handleOpenComplaint}
          onSearchQuery={(q) => setSearchFilter(q)}
        />

        {/* E-Services Hub */}
        <EServicesHub
          lang={lang}
          onSelectService={(srv) => setSelectedService(srv)}
          searchFilter={searchFilter}
          onClearSearchFilter={() => setSearchFilter('')}
        />

        {/* Citizen Request Tracker */}
        <RequestTracker
          lang={lang}
          prefilledCode={trackerPrefill}
          customRecords={customRecords}
        />

        {/* Open Budget, Citizen Budget & Municipal Tenders (الميزانية المفتوحة والصفقات) */}
        <OpenBudgetSection lang={lang} />

        {/* Governance, Recruitment Concours & Audit (الحكامة ومباريات التوظيف والتدقيق) */}
        <GovernanceRecruitmentSection lang={lang} />

        {/* Communal Action Plan (PAC 2023-2028) */}
        <ActionPlanPAC lang={lang} />

        {/* Heritage & Historic Gates of Taroudant */}
        <HeritageTaroudant lang={lang} />

        {/* Redesign & Modernization Audit (Before/After for communetaroudant.ma) */}
        <ModernizationAudit lang={lang} />

        {/* Council Decisions & Communal News */}
        <CouncilNews lang={lang} />
      </main>

      {/* Official Footer */}
      <Footer lang={lang} />

      {/* Mobile Sticky Bottom Dock (15% height rule compliant) */}
      <MobileBottomNav
        lang={lang}
        onOpenTracker={() => handleOpenTracker()}
        onOpenComplaint={handleOpenComplaint}
        onOpenHotlines={() => setIsHotlinesOpen(true)}
      />

      {/* Service Detail & Submission Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          lang={lang}
          onClose={() => setSelectedService(null)}
          onTrackNewCode={(code, name, subj, type) => {
            handleTrackNewCode(code, name, subj, type);
            setTimeout(() => {
              handleOpenTracker(code);
            }, 300);
          }}
        />
      )}

      {/* Emergency Directory Modal */}
      {isHotlinesOpen && (
        <EmergencyDirectory
          lang={lang}
          onClose={() => setIsHotlinesOpen(false)}
        />
      )}

      {/* Institutional Topic Modal (Powers, Council Composition, Charter, Cooperation) */}
      {institutionalTopic && (
        <InstitutionalModal
          topic={institutionalTopic}
          lang={lang}
          onClose={() => setInstitutionalTopic(null)}
          onOpenComplaint={handleOpenComplaint}
        />
      )}

      {/* Taroudant Weather Detailed Forecast Modal */}
      {isWeatherModalOpen && (
        <TaroudantWeatherWidget
          lang={lang}
          variant="modal"
          onClose={() => setIsWeatherModalOpen(false)}
        />
      )}
    </div>
  );
}
