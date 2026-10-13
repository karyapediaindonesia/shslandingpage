import React, { useState, useEffect } from 'react';
import { Icon } from '../ui/Icon';
import { Locale, ContentDictionary } from '../../types';
import { EditableText } from '../editor/EditableText';

interface HeaderProps {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  content: ContentDictionary['nav'];
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  locale,
  setLocale,
  content,
  onOpenMobileMenu
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-t-[3px] border-amber-400 ${
        scrolled
          ? 'bg-surface/98 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-b border-shs-border'
          : 'bg-surface border-b border-shs-border/70'
      }`}
    >
      <div className="h-[74px] sm:h-[84px] lg:h-[94px] max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-8">
        {/* Brand Logo (Full Image Logo - Lock Full Size on Desktop & Scaled for Mobile) */}
        <a
          href="#"
          className="flex items-center group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg py-1 pr-1"
          aria-label="Suria Harapan School"
        >
          <img
            src="/shs-logo.png"
            alt="Suria Harapan School"
            className="h-11 sm:h-13 md:h-14 lg:h-[68px] xl:h-[72px] w-auto max-w-[200px] xs:max-w-[220px] sm:max-w-[270px] lg:max-w-[330px] object-contain object-left transition-all duration-300 group-hover:scale-[1.02] drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)] shrink-0"
          />
        </a>

        {/* Desktop Navigation (Visible on xl: 1280px+ with Plenty of Room) */}
        <nav className="hidden xl:flex items-center justify-center gap-4 2xl:gap-6 px-2 shrink-0">
          <a
            href="#mengapa-shs"
            className="text-xs 2xl:text-sm font-semibold text-on-surface-variant hover:text-shs-navy hover:bg-surface-container/70 px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap"
          >
            <EditableText section="nav" field="whySHS" value={content.whySHS} />
          </a>
          <a
            href="#jenjang-studi"
            className="text-xs 2xl:text-sm font-semibold text-on-surface-variant hover:text-shs-navy hover:bg-surface-container/70 px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap"
          >
            <EditableText section="nav" field="learningLevels" value={content.learningLevels} />
          </a>
          <a
            href="#kehidupan-siswa"
            className="text-xs 2xl:text-sm font-semibold text-on-surface-variant hover:text-shs-navy hover:bg-surface-container/70 px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap"
          >
            <EditableText section="nav" field="studentLife" value={content.studentLife} />
          </a>
          <a
            href="#alur-pendaftaran"
            className="text-xs 2xl:text-sm font-semibold text-on-surface-variant hover:text-shs-navy hover:bg-surface-container/70 px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap"
          >
            <EditableText section="nav" field="admissionJourney" value={content.admissionJourney} />
          </a>
          <a
            href="#tanya-jawab"
            className="text-xs 2xl:text-sm font-semibold text-on-surface-variant hover:text-shs-navy hover:bg-surface-container/70 px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap"
          >
            <EditableText section="nav" field="faq" value={content.faq} />
          </a>
        </nav>

        {/* Right Actions: Lang Switcher + CTA + Mobile trigger */}
        <div className="flex items-center gap-2 sm:gap-3 xl:gap-3.5 shrink-0 xl:pl-4 2xl:pl-6 xl:border-l xl:border-shs-border/70">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold bg-surface-container px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border border-shs-border/60 shrink-0 shadow-2xs">
            <button
              type="button"
              onClick={() => setLocale('id')}
              className={`transition-colors cursor-pointer px-0.5 ${
                locale === 'id'
                  ? 'text-shs-navy font-extrabold underline decoration-amber-500 decoration-2 underline-offset-2'
                  : 'text-on-surface-variant hover:text-shs-navy'
              }`}
              aria-label="Switch to Bahasa Indonesia"
            >
              ID
            </button>
            <span className="text-outline-variant font-light">|</span>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`transition-colors cursor-pointer px-0.5 ${
                locale === 'en'
                  ? 'text-shs-navy font-extrabold underline decoration-amber-500 decoration-2 underline-offset-2'
                  : 'text-on-surface-variant hover:text-shs-navy'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Desktop Primary CTA */}
          <a
            href="#daftar"
            className="hidden sm:inline-flex items-center justify-center h-10 xl:h-11 px-4 xl:px-5 rounded-lg bg-shs-navy text-white text-xs xl:text-sm font-bold tracking-tight whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-[#12335c] hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
          >
            <EditableText section="nav" field="startAdmission" value={content.startAdmission} />
          </a>

          {/* Mobile & Tablet Menu Button (Visible on screens < 1280px) */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="xl:hidden w-9 h-9 xs:w-10 xs:h-10 flex items-center justify-center rounded-lg text-shs-navy bg-surface-container/60 hover:bg-surface-container active:scale-95 transition-all cursor-pointer shrink-0"
            aria-label="Open Navigation Menu"
          >
            <Icon name="menu" className="text-[24px] xs:text-[26px]" />
          </button>
        </div>
      </div>
    </header>
  );
};
