export type Locale = 'id' | 'en';

export type EducationLevel = 'early-learning' | 'primary' | 'secondary';

export type InterestType = 
  | 'admission_info' 
  | 'tuition_info' 
  | 'school_tour' 
  | 'start_admission';

export interface LeadFormData {
  parent_name: string;
  whatsapp: string;
  email?: string;
  student_name: string;
  current_school?: string;
  level: string;
  grade: string;
  academic_year: string;
  interest: string;
  notes?: string;
  consent: boolean;
  
  // Tracking
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  landing_url?: string;
  referrer?: string;
  locale?: Locale;
}

export interface StoredLead extends LeadFormData {
  id: string;
  created_at: string;
  whatsapp_normalized: string;
  status: 'NEW' | 'CONTACTED' | 'SCHOOL_VISIT' | 'INTERESTED' | 'APPLIED' | 'ENROLLED' | 'NO_RESPONSE';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BannerSlide {
  id: string;
  image: string;
  alt: string;
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imagePosition?: string;
}

export interface HeroBannerContent {
  slides: BannerSlide[];
}

export interface HeroContent {
  badge: string;
  levelsPill: string;
  headline: string;
  headlineHighlight: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  accreditation: string;
  curriculum: string;
  featuredPlateTitle: string;
  featuredPlateDesc: string;
  featuredPlateTag: string;
  mainPhoto?: string;
  mainPhotoPosition?: string;
  artPhoto?: string;
  artPhotoPosition?: string;
  musicPhoto?: string;
  musicPhotoPosition?: string;
}

export interface GlanceStat {
  value: string;
  label: string;
  description: string;
}

export interface WhySHSPillar {
  number: string;
  title: string;
  description: string;
}

export interface LearningLevelItem {
  id: EducationLevel;
  number: string;
  age: string;
  levelTitle: string;
  subtitle: string;
  description: string;
  curriculumHighlights: string[];
  ctaText: string;
  image: string;
  imagePosition?: string;
  alt: string;
}

export interface PhilosophyVerb {
  enVerb: string;
  idVerb: string;
  description: string;
}

export interface ExtracurricularItem {
  tag: string;
  title: string;
  description: string;
  details: string;
  image: string;
  imagePosition?: string;
  colSpanDesktop: string;
  isAccent?: boolean;
}

export interface StudentLifeMoment {
  tag: string;
  plate: string;
  caption: string;
  image: string;
  imagePosition?: string;
  aspect: string;
}

export interface TrustItem {
  tag: string;
  title: string;
  description: string;
}

export interface AdmissionStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  phaseLabel: string;
}

export interface TimelineMilestone {
  step: string;
  title: string;
  period: string;
  description: string;
  isSpecial?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContentDictionary {
  nav: {
    whySHS: string;
    learningLevels: string;
    studentLife: string;
    admissionJourney: string;
    faq: string;
    startAdmission: string;
    menuTitle: string;
    talkToAdmission: string;
  };
  heroBanner: HeroBannerContent;
  hero: HeroContent;
  glance: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: GlanceStat[];
  };
  whySHS: {
    eyebrow: string;
    title: string;
    intro: string;
    imageCaption: string;
    contactCta: string;
    communityPhoto?: string;
    communityPhotoPosition?: string;
    pillars: WhySHSPillar[];
  };
  levels: {
    eyebrow: string;
    title: string;
    intro: string;
    items: LearningLevelItem[];
  };
  philosophy: {
    eyebrow: string;
    title: string;
    intro: string;
    imageCaption: string;
    cta: string;
    labPhoto?: string;
    labPhotoPosition?: string;
    verbs: PhilosophyVerb[];
  };
  beyondClassroom: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    items: ExtracurricularItem[];
  };
  studentLife: {
    eyebrow: string;
    title: string;
    intro: string;
    microStoryTag: string;
    microStoryText: string;
    moments: StudentLifeMoment[];
    testimonial: {
      stars: number;
      quote: string;
      parentName: string;
      parentTitle: string;
      verifiedTag: string;
    };
  };
  trust: {
    eyebrow: string;
    title: string;
    intro: string;
    items: TrustItem[];
    photoCaption: string;
    photoTag: string;
    stemPhoto?: string;
    stemPhotoPosition?: string;
  };
  admissionJourney: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: AdmissionStep[];
    primaryCta: string;
    contactCta: string;
    supportNote: string;
  };
  timeline: {
    eyebrow: string;
    title: string;
    intro: string;
    tabs: {
      earlyLearning: string;
      primary: string;
      secondary: string;
    };
    milestones: {
      'early-learning': TimelineMilestone[];
      'primary': TimelineMilestone[];
      'secondary': TimelineMilestone[];
    };
    disclaimer: string;
    primaryCta: string;
    consultScheduleCta: string;
  };
  schoolVisit: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    photoCaption: string;
    operationalNote: string;
    visitPhoto?: string;
    visitPhotoPosition?: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    intro: string;
    searchPlaceholder: string;
    items: FAQItem[];
    allCategories: string;
  };
  form: {
    eyebrow: string;
    title: string;
    intro: string;
    stepsTitle: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
    trustBadges: {
      fastResponseTitle: string;
      fastResponseDesc: string;
      privacyTitle: string;
      privacyDesc: string;
    };
    labels: {
      parentName: string;
      parentNamePlaceholder: string;
      whatsapp: string;
      whatsappPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      studentName: string;
      studentNamePlaceholder: string;
      currentSchool: string;
      currentSchoolPlaceholder: string;
      level: string;
      grade: string;
      gradePlaceholder: string;
      academicYear: string;
      interest: string;
      notes: string;
      notesPlaceholder: string;
      consent: string;
      submitBtn: string;
      submitting: string;
    };
    levelOptions: {
      id: string;
      label: string;
      grades: string[];
    }[];
    interestOptions: {
      id: InterestType;
      label: string;
    }[];
    validationErrors: {
      required: string;
      invalidWhatsapp: string;
      invalidEmail: string;
      levelRequired: string;
      consentRequired: string;
    };
    successToast: string;
    errorToast: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    mapLocationTitle: string;
    mapLocationSubtitle: string;
    mapAddressLabel: string;
    mapAddressValue: string;
    mapHoursLabel: string;
    mapHoursValue: string;
    mapContactLabel: string;
    mapContactValue: string;
    mapOpenInGoogleMaps: string;
    mapGetDirections: string;
    mapBadge: string;
    mapEmbedQuery?: string;
    mapGoogleUrl?: string;
    mapDirectionsUrl?: string;
    mapPinLabel?: string;
  };
  footer: {
    schoolName: string;
    tagline: string;
    motto: string;
    missionSummary: string;
    campusLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    whatsappLabel: string;
    whatsapp: string;
    emailLabel: string;
    email: string;
    hoursLabel: string;
    hours: string;
    quickNavTitle: string;
    navWhySHS?: string;
    navLearningLevels?: string;
    navPhilosophy?: string;
    navStudentLife?: string;
    navAdmissionJourney?: string;
    navFAQ?: string;
    navMap?: string;
    navForm?: string;
    accreditationTitle: string;
    accreditationDesc: string;
    spkDesc: string;
    curriculumDesc: string;
    statusTitle: string;
    statusBadge: string;
    socialTitle: string;
    socialDesc: string;
    copyright: string;
    privacyPolicy: string;
    adminPanelLink: string;
  };
  thankYouModal: {
    eyebrow: string;
    title: string;
    description: string;
    receivedDataTitle: string;
    nextSteps: {
      number: string;
      title: string;
      desc: string;
    }[];
    whatsappCta: string;
    backBtn: string;
  };
  adminDrawer: {
    title: string;
    subtitle: string;
    exportCsv: string;
    clearLeads: string;
    noLeads: string;
    tableHeaders: {
      date: string;
      parent: string;
      student: string;
      whatsapp: string;
      levelGrade: string;
      interest: string;
      status: string;
      source: string;
    };
    close: string;
  };
}
