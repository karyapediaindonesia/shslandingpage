import React from 'react';
import { Icon } from '../ui/Icon';
import { ContentDictionary, Locale } from '../../types';
import { EditableText } from '../editor/EditableText';

interface FooterProps {
  content: ContentDictionary['footer'];
  locale: Locale;
  setLocale: (loc: Locale) => void;
}

export const Footer: React.FC<FooterProps> = ({
  content,
  locale,
  setLocale
}) => {
  return (
    <footer className="w-full bg-[#0a1c30] text-white pt-16 sm:pt-20 pb-12 border-t-2 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Profile */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-white rounded-xl px-4 py-3 w-fit border border-amber-300/40 shadow-sm">
              <img
                src="/shs-logo.png"
                alt="Suria Harapan School"
                className="h-14 sm:h-16 w-auto max-w-[280px] object-contain"
              />
            </div>

            <p className="font-headline text-sm font-semibold text-amber-300 italic">
              "<EditableText section="footer" field="motto" value={content.motto} />"
            </p>

            <p className="text-xs sm:text-sm text-on-primary-container pr-2 leading-relaxed">
              <EditableText section="footer" field="missionSummary" value={content.missionSummary} multiline />
            </p>

            <div className="pt-2 text-on-primary-container space-y-1.5 text-xs">
              <p>
                <a href="#lokasi-sekolah" className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 group">
                  <span className="font-semibold text-white">
                    <EditableText section="footer" field="campusLabel" value={content.campusLabel} />
                  </span>{' '}
                  <EditableText section="footer" field="address" value={content.address} />
                  <Icon name="map" className="text-[14px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">
                  <EditableText section="footer" field="whatsappLabel" value={content.whatsappLabel} />
                </span>{' '}
                <EditableText section="footer" field="whatsapp" value={content.whatsapp} />
              </p>
              <p>
                <span className="font-semibold text-white">
                  <EditableText section="footer" field="emailLabel" value={content.emailLabel} />
                </span>{' '}
                <EditableText section="footer" field="email" value={content.email} />
              </p>
              <p>
                <span className="font-semibold text-white">
                  <EditableText section="footer" field="hoursLabel" value={content.hoursLabel} />
                </span>{' '}
                <EditableText section="footer" field="hours" value={content.hours} />
              </p>
            </div>
          </div>

          {/* Col 2: Fast Nav */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
              <EditableText section="footer" field="quickNavTitle" value={content.quickNavTitle} />
            </h3>
            <a href="#mengapa-shs" className="text-xs sm:text-sm text-on-primary-container hover:text-white transition-colors">
              <EditableText section="footer" field="navWhySHS" value={content.navWhySHS || 'Mengapa SHS'} />
            </a>
            <a href="#jenjang-studi" className="text-xs sm:text-sm text-on-primary-container hover:text-white transition-colors">
              <EditableText section="footer" field="navLearningLevels" value={content.navLearningLevels || 'Jenjang Studi'} />
            </a>
            <a href="#filosofi-belajar" className="text-xs sm:text-sm text-on-primary-container hover:text-white transition-colors">
              <EditableText section="footer" field="navPhilosophy" value={content.navPhilosophy || 'Filosofi Belajar'} />
            </a>
            <a href="#kehidupan-siswa" className="text-xs sm:text-sm text-on-primary-container hover:text-white transition-colors">
              <EditableText section="footer" field="navStudentLife" value={content.navStudentLife || 'Kehidupan Siswa'} />
            </a>
            <a href="#alur-pendaftaran" className="text-xs sm:text-sm text-on-primary-container hover:text-white transition-colors">
              <EditableText section="footer" field="navAdmissionJourney" value={content.navAdmissionJourney || 'Alur Pendaftaran'} />
            </a>
            <a href="#tanya-jawab" className="text-xs sm:text-sm text-on-primary-container hover:text-white transition-colors">
              <EditableText section="footer" field="navFAQ" value={content.navFAQ || 'Tanya Jawab'} />
            </a>
            <a href="#lokasi-sekolah" className="text-xs sm:text-sm text-amber-300 font-semibold hover:underline flex items-center gap-1">
              <Icon name="pin_drop" className="text-[15px]" />
              <span>
                <EditableText section="footer" field="navMap" value={content.navMap || (locale === 'en' ? 'Campus Map & Location' : 'Peta & Lokasi')} />
              </span>
            </a>
            <a href="#daftar" className="text-xs sm:text-sm text-secondary-fixed font-semibold hover:underline">
              <EditableText section="footer" field="navForm" value={content.navForm || 'Formulir PSB'} />
            </a>
          </div>

          {/* Col 3: Accreditation & Status */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
              <EditableText section="footer" field="accreditationTitle" value={content.accreditationTitle} />
            </h3>
            <p className="text-xs text-on-primary-container">
              <EditableText section="footer" field="accreditationDesc" value={content.accreditationDesc} />
            </p>
            <p className="text-xs text-on-primary-container">
              <EditableText section="footer" field="spkDesc" value={content.spkDesc} />
            </p>
            <p className="text-xs text-on-primary-container">
              <EditableText section="footer" field="curriculumDesc" value={content.curriculumDesc} />
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                <EditableText section="footer" field="statusTitle" value={content.statusTitle} />
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <EditableText section="footer" field="statusBadge" value={content.statusBadge} />
              </span>
            </div>
          </div>

          {/* Col 4: Social & Locale */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
              <EditableText section="footer" field="socialTitle" value={content.socialTitle} />
            </h3>
            <p className="text-xs text-on-primary-container">
              <EditableText section="footer" field="socialDesc" value={content.socialDesc} />
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href="https://instagram.com/suriaharapanschool"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Suria Harapan School"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-amber-400 hover:text-shs-navy transition-colors"
              >
                <Icon name="photo_camera" className="text-[20px]" />
              </a>
              <a
                href="https://facebook.com/suriaharapanschool"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook Suria Harapan School"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-amber-400 hover:text-shs-navy transition-colors"
              >
                <Icon name="share" className="text-[20px]" />
              </a>
              <a
                href="https://youtube.com/@suriaharapanschool"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube Suria Harapan School"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-amber-400 hover:text-shs-navy transition-colors"
              >
                <Icon name="smart_display" className="text-[20px]" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-on-primary-container">
              <button
                type="button"
                onClick={() => setLocale('id')}
                className={`cursor-pointer ${
                  locale === 'id' ? 'text-amber-300 underline font-extrabold' : 'hover:text-white'
                }`}
              >
                ID
              </button>
              <span>|</span>
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`cursor-pointer ${
                  locale === 'en' ? 'text-amber-300 underline font-extrabold' : 'hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 text-xs text-on-primary-container">
          <p>
            <EditableText section="footer" field="copyright" value={content.copyright} />
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">
              <EditableText section="footer" field="privacyPolicy" value={content.privacyPolicy} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
