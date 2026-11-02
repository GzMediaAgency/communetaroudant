import React, { useState, useRef } from 'react';
import { Language, EServiceItem } from '../types/portal';
import { MoroccanStar } from './MoroccanMotifs';
import { 
  X, 
  CheckCircle, 
  Clock, 
  FileText, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  Info,
  UploadCloud,
  Paperclip,
  Trash2,
  FileCheck2,
  AlertCircle
} from 'lucide-react';

interface ServiceModalProps {
  service: EServiceItem;
  lang: Language;
  onClose: () => void;
  onTrackNewCode: (
    code: string, 
    citizenName: string, 
    subject: string, 
    type: string, 
    attachedFiles?: string[]
  ) => void;
}

interface UploadedFileItem {
  id: string;
  name: string;
  size: string;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  lang,
  onClose,
  onTrackNewCode
}) => {
  const isAr = lang === 'ar';

  const [activeTab, setActiveTab] = useState<'info' | 'form'>('info');
  const [fullName, setFullName] = useState('');
  const [cnie, setCnie] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('المدينة العتيقة');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Document upload state
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileItem[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mandatory document upload check for:
  // 1. الشواهد (Certificates): civil category or cert in id/title
  // 2. الرخص (Licenses & Permits): urban/business category or permit/license in id/title
  // 3. الجبايات (Local Taxes): taxes category or tax in id/title
  const isDocumentUploadRequired =
    service.category === 'civil' ||
    service.category === 'urban' ||
    service.category === 'business' ||
    service.category === 'taxes' ||
    service.id.includes('cert') ||
    service.id.includes('license') ||
    service.id.includes('permit') ||
    service.id.includes('taxes');

  const taroudantDistricts = [
    { ar: 'المدينة العتيقة (داخل الأسوار)', fr: 'Médina Historique (Intra-muros)' },
    { ar: 'حي المحايطة', fr: 'Quartier El Mahaita' },
    { ar: 'حي لاسطاح', fr: 'Quartier Lastah' },
    { ar: 'حي أولاد بونونة', fr: 'Quartier Oulad Bounouna' },
    { ar: 'حي سيدي بلقاس', fr: 'Quartier Sidi Belkas' },
    { ar: 'حي البويضاء', fr: 'Quartier El Bouida' },
    { ar: 'حي بيزمارين', fr: 'Quartier Bizmarine' },
    { ar: 'حي تمقلات', fr: 'Quartier Temglat' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const newFiles: UploadedFileItem[] = Array.from(e.target.files).map((file) => {
      const sizeKB = file.size / 1024;
      const formattedSize = sizeKB > 1024 
        ? `${(sizeKB / 1024).toFixed(1)} MB` 
        : `${Math.round(sizeKB)} KB`;
      return {
        id: `${file.name}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        name: file.name,
        size: formattedSize
      };
    });

    setUploadedFiles((prev) => [...prev, ...newFiles]);
    setUploadError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveFile = (idToRemove: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== idToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !cnie.trim()) return;

    // Enforce mandatory document upload for certificates, licenses, and taxes
    if (isDocumentUploadRequired && uploadedFiles.length === 0) {
      setUploadError(
        isAr
          ? 'تحميل الوثائق والمستندات الثبوتية إلزامي لقبول طلبات الشواهد والرخص والجبايات. يرجى إرفاق الوثائق المطلوبة أدناه لمتابعة طلبكم.'
          : 'Le téléversement des pièces justificatives est obligatoire pour les demandes de certificats, autorisations et taxes. Veuillez joindre les documents requis.'
      );
      return;
    }

    setUploadError(null);
    setIsSubmitting(true);
    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const code = `TAR-2026-${randomNum}`;
      setGeneratedTicket(code);
      setIsSubmitting(false);

      onTrackNewCode(
        code,
        fullName,
        isAr ? service.titleAr : service.titleFr,
        isAr ? 'شباك الخدمات الرقمية' : 'Guichet Digital',
        uploadedFiles.map((f) => f.name)
      );
    }, 600);
  };

  const handleCopyCode = () => {
    if (generatedTicket) {
      navigator.clipboard.writeText(generatedTicket);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-[#FAF7F2] rounded-2xl border border-stone-300 shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden text-stone-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-600/30 text-amber-300 rounded-lg">
              <MoroccanStar size={20} />
            </div>
            <div>
              <div className="text-xs text-amber-300 font-mono tracking-wider">{service.code}</div>
              <h3 className="text-base sm:text-lg font-bold font-serif leading-snug">
                {isAr ? service.titleAr : service.titleFr}
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

        {/* Tab Switcher if direct action */}
        {service.isDirectAction && !generatedTicket && (
          <div className="flex border-b border-stone-200 bg-white px-6 pt-3">
            <button
              onClick={() => setActiveTab('info')}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'info'
                  ? 'border-amber-800 text-amber-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              {isAr ? 'تفاصيل المسطرة والوثائق' : 'Guide & Pièces Requises'}
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'form'
                  ? 'border-amber-800 text-amber-900'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              {isAr ? 'إيداع الطلب إلكترونياً' : 'Formulaire en Ligne'}
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* Success screen after submission */}
          {generatedTicket ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-serif text-stone-900">
                {isAr ? 'تم تسجيل طلبكم بنجاح' : 'Votre demande a été enregistrée'}
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                {isAr
                  ? 'تم إحالة ملفكم إلى المصلحة الجماعية المختصة بجماعة تارودانت. سيصلكم إشعار نصي SMS عند كل مستجد.'
                  : 'Votre dossier a été transmis au service compétent. Vous recevrez un SMS à chaque étape.'}
              </p>

              <div className="bg-white p-4 rounded-xl border border-stone-300 max-w-sm mx-auto shadow-sm">
                <div className="text-xs text-stone-500 mb-1">{isAr ? 'الرقم المرجعي للتتبع:' : 'Numéro de suivi officiel :'}</div>
                <div className="text-2xl font-bold font-mono tracking-wider text-amber-900 flex items-center justify-center gap-3">
                  <span>{generatedTicket}</span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 text-stone-500 hover:text-stone-900 rounded bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
                    title={isAr ? 'نسخ الرمز' : 'Copier'}
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>
                    {isAr 
                      ? `تم تحميل ${uploadedFiles.length} وثائق إدارية ثبوتية وإرفاقها بالملف بنجاح`
                      : `${uploadedFiles.length} pièce(s) justificative(s) transmise(s) avec succès`}
                  </span>
                </div>
              )}

              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-amber-900 text-white font-semibold text-xs sm:text-sm rounded-lg hover:bg-amber-950 transition-colors shadow-sm cursor-pointer"
                >
                  {isAr ? 'الانتقال إلى لوحة التتبع' : 'Voir le suivi'}
                </button>
              </div>
            </div>
          ) : activeTab === 'info' || !service.isDirectAction ? (
            <>
              {/* Description */}
              <div>
                <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                  {isAr ? 'وصف الخدمة الجماعية' : 'Description de la démarche'}
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed bg-white p-3.5 rounded-xl border border-stone-200">
                  {isAr ? service.descAr : service.descFr}
                </p>
              </div>

              {/* Time Estimate */}
              <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900">
                <Clock className="w-4 h-4 text-amber-800 shrink-0" />
                <div>
                  <span className="font-semibold">{isAr ? 'أجل المعالجة القانوني:' : 'Délai moyen de traitement :'} </span>
                  <span>{isAr ? service.timeEstimateAr : service.timeEstimateFr}</span>
                </div>
              </div>

              {/* Required Documents Checklist */}
              <div>
                <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
                  {isAr ? 'الوثائق والشهادات الواجب الإدلاء بها' : 'Pièces et justificatifs à fournir'}
                </h4>
                <div className="bg-white rounded-xl border border-stone-200 p-4 space-y-2.5">
                  {(isAr ? service.docsRequiredAr : service.docsRequiredFr).map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-600 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* External platform notification if applicable */}
              {service.externalUrl && (
                <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-blue-900">
                  <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">
                      {isAr ? 'معالجة مركزية عبر المنصة الوطنية الموحدة' : 'Traitement dématérialisé sur la plateforme nationale'}
                    </div>
                    <div className="mt-1 text-blue-800 text-xs">
                      {isAr
                        ? 'تتم معالجة هذا النوع من الملفات عبر المنصة الوطنية المشتركة بين الجماعات الترابية والوزارات المعنية.'
                        : 'Cette démarche s\'effectue directement sur le portail national interministériel.'}
                    </div>
                    <a
                      href={service.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      <span>{isAr ? 'الانتقال إلى المنصة الوطنية' : 'Accéder au portail national'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* Action button to switch to form */}
              {service.isDirectAction && (
                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('form')}
                    className="w-full py-3 bg-amber-900 hover:bg-amber-950 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isAr ? 'متابعة وإيداع الطلب الرقمي' : 'Continuer et remplir le formulaire'}</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Interactive Direct Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'الاسم الكامل للمرتفق *' : 'Nom & Prénom du citoyen *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={isAr ? 'محمد أمين الإدريسي' : 'Mohamed Amine Idrissi'}
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'رقم البطاقة الوطنية للتعريف (CNIE) *' : 'N° Carte Nationale (CNIE) *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={cnie}
                    onChange={(e) => setCnie(e.target.value)}
                    placeholder="JC123456"
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'رقم الهاتف للتواصل وإشعارات SMS *' : 'N° de téléphone (SMS de suivi) *'}
                  </label>
                  <input
                    type="tel"
                    dir="ltr"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 font-mono text-start"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {isAr ? 'الحي السكني أو مقر النشاط بتارودانت *' : 'Quartier / Adresse à Taroudant *'}
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 cursor-pointer"
                  >
                    {taroudantDistricts.map((d, i) => (
                      <option key={i} value={d.ar}>
                        {isAr ? d.ar : d.fr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {isAr ? 'ملاحظات إضافية أو تفاصيل الشأن المطلوب' : 'Observations ou précisions'}
                </label>
                <textarea
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={
                    isAr
                      ? 'حدد أية تفاصيل تفيد المصلحة الإدارية في دراسة طلبكم...'
                      : 'Précisez l\'objet ou les références utiles...'
                  }
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
                />
              </div>

              {/* Mandatory/Optional Document Upload Field */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-800" />
                    <span className="text-xs font-bold text-stone-900">
                      {isAr ? 'تحميل الوثائق والمستندات الثبوتية' : 'Téléversement des pièces justificatives'}
                    </span>
                    {isDocumentUploadRequired ? (
                      <span className="text-[10px] font-bold text-rose-800 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-300">
                        {isAr ? 'إلزامي *' : 'Obligatoire *'}
                      </span>
                    ) : (
                      <span className="text-[10px] text-stone-600 bg-stone-200 px-2 py-0.5 rounded-full">
                        {isAr ? 'اختياري' : 'Optionnel'}
                      </span>
                    )}
                  </div>
                  {uploadedFiles.length > 0 && (
                    <span className="text-xs text-emerald-800 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{isAr ? `${uploadedFiles.length} وثيقة مرفقة` : `${uploadedFiles.length} pièce(s) jointe(s)`}</span>
                    </span>
                  )}
                </div>

                {/* Checklist of required documents for this specific service */}
                {service.docsRequiredAr && service.docsRequiredAr.length > 0 && (
                  <div className="text-xs text-stone-700 bg-amber-50/70 p-3 rounded-lg border border-amber-200/80">
                    <div className="font-semibold text-amber-950 mb-1.5 flex items-center gap-1.5">
                      <Paperclip className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                      <span>
                        {isAr 
                          ? 'الوثائق الواجب الإدلاء بها لإتمام هذا الطلب:' 
                          : 'Pièces requises à joindre obligatoirement :'}
                      </span>
                    </div>
                    <ul className="space-y-1 text-[11px] text-stone-700 ps-4 list-disc">
                      {(isAr ? service.docsRequiredAr : service.docsRequiredFr).map((doc, idx) => (
                        <li key={idx} className="leading-tight">{doc}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="document-upload-input"
                />

                {/* Upload Dropzone / Trigger */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                    uploadError
                      ? 'border-rose-400 bg-rose-50/60'
                      : uploadedFiles.length > 0
                      ? 'border-emerald-300 bg-emerald-50/30 hover:bg-emerald-50/50'
                      : 'border-stone-300 hover:border-amber-700 bg-white hover:bg-amber-50/30'
                  }`}
                >
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto mb-2">
                    <UploadCloud className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-semibold text-stone-800">
                    {isAr ? 'اضغط لاختيار وتحميل الوثائق من جهازك' : 'Cliquez pour sélectionner vos fichiers'}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">
                    {isAr 
                      ? 'صيغ الملفات المقبولة: PDF, JPG, PNG (الحد الأقصى 10 ميغابايت لكل ملف)' 
                      : 'Formats acceptés : PDF, JPG, PNG (Max 10 Mo par document)'}
                  </div>
                </div>

                {/* Error Banner when mandatory files missing */}
                {uploadError && (
                  <div className="flex items-start gap-2 p-3 bg-rose-50 border border-rose-300 rounded-lg text-xs text-rose-800 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="font-semibold leading-relaxed">{uploadError}</span>
                  </div>
                )}

                {/* List of uploaded files */}
                {uploadedFiles.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-semibold text-stone-600">
                      {isAr ? 'الوثائق التي تم تحميلها بنجاح:' : 'Documents joints :'}
                    </div>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto">
                      {uploadedFiles.map((file) => (
                        <div
                          key={file.id}
                          className="flex items-center justify-between p-2 bg-white border border-stone-200 rounded-lg text-xs shadow-2xs"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <FileCheck2 className="w-4 h-4 text-emerald-700 shrink-0" />
                            <span className="font-medium text-stone-800 truncate text-[11px] sm:text-xs">
                              {file.name}
                            </span>
                            <span className="text-[10px] text-stone-500 font-mono shrink-0 bg-stone-100 px-1.5 py-0.5 rounded">
                              {file.size}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveFile(file.id);
                            }}
                            className="p-1 text-stone-400 hover:text-rose-600 rounded hover:bg-stone-100 transition-colors cursor-pointer ms-2 shrink-0"
                            title={isAr ? 'حذف الوثيقة' : 'Supprimer'}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-3 bg-stone-100 rounded-xl text-xs text-stone-600 flex items-center gap-2">
                <FileText className="w-4 h-4 text-stone-500 shrink-0" />
                <span>
                  {isAr
                    ? 'سيتم تدقيق مطابقة الوثائق الأصلية عند الاستلام بالشباك الموحد مع التوقيع الإلكتروني المؤمّن.'
                    : 'Les originaux des pièces seront vérifiés lors du retrait au guichet unique.'}
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('info')}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  {isAr ? 'رجوع' : 'Retour'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-amber-900 hover:bg-amber-950 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>{isAr ? 'جارٍ المعالجة وتوليد الرمز...' : 'Génération du ticket...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{isAr ? 'تأكيد وإرسال الطلب' : 'Valider la demande'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
