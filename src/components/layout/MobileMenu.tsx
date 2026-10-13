import React, { useEffect, useRef } from 'react';
import { Icon } from '../ui/Icon';
import { Locale, ContentDictionary } from '../../types';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { EditableText } from '../editor/EditableText';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
  setLocale: (loc: Locale) => void;
  content: ContentDictionary['nav'];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  locale,
  setLocale,
  content
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-shs-navy/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-surface shadow-2xl flex flex-col justify-between p-6 border-l border-shs-border border-t-2 border-amber-400 animate-fade-in"
      >
        <div>
          {/* Header in drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-shs-border">
            <img
              src="/shs-logo.png"
              alt="Suria Harapan School"
              className="h-12 sm:h-14 w-auto max-w-[220px] object-contain object-left shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
            />
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all cursor-pointer"
              aria-label="Close menu"
            >
              <Icon name="close" className="text-[22px]" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5 mt-5">
            <a
              href="#mengapa-shs"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-shs-navy font-semibold hover:bg-surface-container transition-colors"
            >
              <span>
                <EditableText section="nav" field="whySHS" value={content.whySHS} />
              </span>
              <Icon name="arrow_forward" className="text-[18px] text-on-surface-variant" />
            </a>
            <a
              href="#jenjang-studi"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-shs-navy font-semibold hover:bg-surface-container transition-colors"
            >
              <span>
                <EditableText section="nav" field="learningLevels" value={content.learningLevels} />
              </span>
              <Icon name="arrow_forward" className="text-[18px] text-on-surface-variant" />
            </a>
            <a
              href="#kehidupan-siswa"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-shs-navy font-semibold hover:bg-surface-container transition-colors"
            >
              <span>
                <EditableText section="nav" field="studentLife" value={content.studentLife} />
              </span>
              <Icon name="arrow_forward" className="text-[18px] text-on-surface-variant" />
            </a>
            <a
              href="#alur-pendaftaran"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-shs-navy font-semibold hover:bg-surface-container transition-colors"
            >
              <span>
                <EditableText section="nav" field="admissionJourney" value={content.admissionJourney} />
              </span>
              <Icon name="arrow_forward" className="text-[18px] text-on-surface-variant" />
            </a>
            <a
              href="#tanya-jawab"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-shs-navy font-semibold hover:bg-surface-container transition-colors"
            >
              <span>
                <EditableText section="nav" field="faq" value={content.faq} />
              </span>
              <Icon name="arrow_forward" className="text-[18px] text-on-surface-variant" />
            </a>
          </nav>

          {/* Language selection in drawer */}
          <div className="mt-6 pt-4 border-t border-shs-border">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary block mb-2">
              Pilihan Bahasa / Language:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLocale('id')}
                className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  locale === 'id'
                    ? 'bg-shs-navy text-white border-shs-navy'
                    : 'bg-surface-container text-on-surface-variant border-shs-border hover:bg-surface-container-high'
                }`}
              >
                Bahasa Indonesia (ID)
              </button>
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  locale === 'en'
                    ? 'bg-shs-navy text-white border-shs-navy'
                    : 'bg-surface-container text-on-surface-variant border-shs-border hover:bg-surface-container-high'
                }`}
              >
                English (EN)
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Actions */}
        <div className="pt-4 border-t border-shs-border flex flex-col gap-2.5">
          <a
            href={buildWhatsAppLink('general', locale)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3 px-4 rounded-lg border border-shs-navy text-shs-navy text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-container transition-all"
          >
            <Icon name="chat" className="text-[18px] text-[#25D366]" />
            <span>
              <EditableText section="nav" field="talkToAdmission" value={content.talkToAdmission} />
            </span>
          </a>
          <a
            href="#daftar"
            onClick={onClose}
            className="w-full py-3.5 px-4 rounded-lg bg-shs-navy text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-[#12335c] transition-all"
          >
            <span>
              <EditableText section="nav" field="startAdmission" value={content.startAdmission} />
            </span>
            <Icon name="arrow_forward" className="text-[18px] text-secondary-container" />
          </a>
        </div>
      </div>
    </div>
  );
};
