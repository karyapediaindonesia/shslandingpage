import { useState, useEffect } from 'react';
import { StoredLead } from './types';
import { captureUTM } from './lib/utm';
import { useScrollReveal } from './lib/scrollReveal';
import { LiveContentProvider, useLiveContent } from './context/LiveContentContext';

// Layout
import { Header } from './components/layout/Header';
import { MobileMenu } from './components/layout/MobileMenu';
import { StickyMobileBar } from './components/layout/StickyMobileBar';
import { Footer } from './components/layout/Footer';

// Sections
import { HeroBannerSlider } from './components/sections/HeroBannerSlider';
import { HeroSection } from './components/sections/HeroSection';
import { AtAGlanceSection } from './components/sections/AtAGlanceSection';
import { WhySHSSection } from './components/sections/WhySHSSection';
import { LearningLevelsSection } from './components/sections/LearningLevelsSection';
import { LearningPhilosophySection } from './components/sections/LearningPhilosophySection';
import { BeyondClassroomSection } from './components/sections/BeyondClassroomSection';
import { StudentLifeSection } from './components/sections/StudentLifeSection';
import { TrustSection } from './components/sections/TrustSection';
import { AdmissionJourneySection } from './components/sections/AdmissionJourneySection';
import { AdmissionTimelineSection } from './components/sections/AdmissionTimelineSection';
import { SchoolVisitSection } from './components/sections/SchoolVisitSection';
import { FAQSection } from './components/sections/FAQSection';
import { LeadFormSection } from './components/sections/LeadFormSection';
import { FinalCTASection } from './components/sections/FinalCTASection';

// UI
import { ThankYouModal } from './components/ui/ThankYouModal';
import { ImageLightbox } from './components/ui/ImageLightbox';

function MainApp() {
  const { locale, setLocale, content } = useLiveContent();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<StoredLead | null>(null);

  const [lightboxData, setLightboxData] = useState<{ src: string; caption: string } | null>(null);
  const [presetLevel, setPresetLevel] = useState<string | undefined>(undefined);
  const [presetInterest, setPresetInterest] = useState<string | undefined>(undefined);

  // Initialize UTM capturing on mount
  useEffect(() => {
    captureUTM();
  }, []);

  // Initialize smooth scroll reveal observer
  useScrollReveal(locale);

  const handleSelectLevel = (levelTitle: string) => {
    setPresetLevel(levelTitle);
    const formEl = document.getElementById('daftar');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTour = () => {
    setPresetInterest('school_tour');
    const formEl = document.getElementById('daftar');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (src: string, caption: string) => {
    setLightboxData({ src, caption });
  };

  const handleCloseLightbox = () => {
    setLightboxData(null);
  };

  const handleSubmissionSuccess = (lead: StoredLead) => {
    setSubmittedLead(lead);
    setIsThankYouOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body text-on-surface">
      {/* Fixed Desktop & Mobile Header */}
      <Header
        locale={locale}
        setLocale={setLocale}
        content={content.nav}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        locale={locale}
        setLocale={setLocale}
        content={content.nav}
      />

      {/* Main Content Area */}
      <main className="flex-grow pt-[72px] sm:pt-[84px] lg:pt-[94px] pb-16 lg:pb-0">
        {/* 00. Full-Width Hero Banner Slider */}
        <HeroBannerSlider
          slides={content.heroBanner.slides}
          onImageClick={handleOpenLightbox}
        />

        {/* 01. Hero Section */}
        <HeroSection
          content={content.hero}
          onImageClick={handleOpenLightbox}
        />

        {/* 02. SHS at a Glance */}
        <AtAGlanceSection
          content={content.glance}
        />

        {/* 03. Why SHS */}
        <WhySHSSection
          content={content.whySHS}
          onImageClick={handleOpenLightbox}
        />

        {/* 04. Learning Levels */}
        <LearningLevelsSection
          content={content.levels}
          onSelectLevel={handleSelectLevel}
          onImageClick={handleOpenLightbox}
        />

        {/* 05. Learning Philosophy */}
        <LearningPhilosophySection
          content={content.philosophy}
          onImageClick={handleOpenLightbox}
        />

        {/* 06. Beyond the Classroom & Extracurriculars */}
        <BeyondClassroomSection
          content={content.beyondClassroom}
          onImageClick={handleOpenLightbox}
        />

        {/* 07. Life at SHS Photo Journal */}
        <StudentLifeSection
          content={content.studentLife}
          onImageClick={handleOpenLightbox}
        />

        {/* 08. Trust & Achievements */}
        <TrustSection
          content={content.trust}
          onImageClick={handleOpenLightbox}
        />

        {/* 09. Admission Journey */}
        <AdmissionJourneySection
          content={content.admissionJourney}
          locale={locale}
        />

        {/* 10. Admission Timeline */}
        <AdmissionTimelineSection
          content={content.timeline}
          locale={locale}
        />

        {/* 11. School Visit Invitation */}
        <SchoolVisitSection
          content={content.schoolVisit}
          locale={locale}
          onBookTour={handleBookTour}
          onImageClick={handleOpenLightbox}
        />

        {/* 12. FAQ Accordion */}
        <FAQSection
          content={content.faq}
        />

        {/* 13. Lead Form Section (PSB Registration) */}
        <LeadFormSection
          content={content.form}
          locale={locale}
          presetLevel={presetLevel}
          presetInterest={presetInterest}
          onSubmissionSuccess={handleSubmissionSuccess}
        />

        {/* 14. Final Conversion CTA */}
        <FinalCTASection
          content={content.finalCta}
          locale={locale}
        />
      </main>

      {/* Structured Footer */}
      <Footer
        content={content.footer}
        locale={locale}
        setLocale={setLocale}
      />

      {/* Sticky Mobile Conversion Bar */}
      <StickyMobileBar
        locale={locale}
        startAdmissionLabel={content.nav.startAdmission}
      />

      {/* Thank You Dialog Modal */}
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
        lead={submittedLead}
        content={content.thankYouModal}
        locale={locale}
      />

      {/* Photo Lightbox */}
      <ImageLightbox
        isOpen={!!lightboxData}
        src={lightboxData?.src || ''}
        caption={lightboxData?.caption || ''}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}

export function App() {
  return (
    <LiveContentProvider>
      <MainApp />
    </LiveContentProvider>
  );
}

export default App;
