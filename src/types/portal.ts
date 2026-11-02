export type Language = 'ar' | 'fr';

export interface EServiceItem {
  id: string;
  code: string;
  titleAr: string;
  titleFr: string;
  descAr: string;
  descFr: string;
  iconName: string;
  category: 'civil' | 'urban' | 'complaints' | 'business' | 'taxes' | 'tenders';
  timeEstimateAr: string;
  timeEstimateFr: string;
  docsRequiredAr: string[];
  docsRequiredFr: string[];
  externalUrl?: string;
  isDirectAction?: boolean;
}

export interface PacProject {
  id: string;
  titleAr: string;
  titleFr: string;
  descriptionAr: string;
  descriptionFr: string;
  budget: string;
  completionRate: number;
  status: 'ongoing' | 'completed' | 'launching';
  statusAr: string;
  statusFr: string;
  categoryAr: string;
  categoryFr: string;
  partnerAr: string;
  partnerFr: string;
  year: string;
}

export interface HistoricGate {
  id: string;
  nameAr: string;
  nameFr: string;
  descriptionAr: string;
  descriptionFr: string;
  locationAr: string;
  locationFr: string;
  builtEraAr: string;
  builtEraFr: string;
  factsAr: string[];
  factsFr: string[];
  image?: string;
  isRealPhoto?: boolean;
}

export interface TrackingStep {
  stepNumber: number;
  labelAr: string;
  labelFr: string;
  date: string;
  departmentAr: string;
  departmentFr: string;
  isDone: boolean;
  isCurrent: boolean;
  notesAr?: string;
  notesFr?: string;
}

export interface TrackingRecord {
  trackingId: string;
  citizenName: string;
  subjectAr: string;
  subjectFr: string;
  typeAr: string;
  typeFr: string;
  submittedDate: string;
  expectedDate: string;
  statusAr: string;
  statusFr: string;
  attachedFiles?: string[];
  steps: TrackingStep[];
}

export interface NewsArticle {
  id: string;
  titleAr: string;
  titleFr: string;
  excerptAr: string;
  excerptFr: string;
  date: string;
  categoryAr: string;
  categoryFr: string;
  readTimeAr: string;
  readTimeFr: string;
}
