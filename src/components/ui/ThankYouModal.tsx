import React from 'react';
import { Icon } from './Icon';
import { ContentDictionary, Locale, StoredLead } from '../../types';
import { buildWhatsAppLink } from '../../lib/whatsapp';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: StoredLead | null;
  content: ContentDictionary['thankYouModal'];
  locale: Locale;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({
  isOpen,
  onClose,
  lead,
  content,
  locale
}) => {
  if (!isOpen || !lead) return null;

  const waLink = buildWhatsAppLink('lead_confirm', locale, {
    parentName: lead.parent_name,
    studentName: lead.student_name,
    level: lead.level,
    grade: lead.grade,
    academicYear: lead.academic_year
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-shs-navy/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative bg-surface rounded-2xl sm:rounded-3xl max-w-lg w-full p-6 sm:p-8 text-left shadow-2xl border border-shs-border animate-fade-in my-8">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-shs-navy hover:bg-surface-container-high transition-all"
          >
            <Icon name="close" className="text-[20px]" />
          </button>

          {/* Success Check Icon */}
          <div className="w-14 h-14 rounded-2xl bg-[#e8f3ee] text-[#1e6b52] flex items-center justify-center mb-5 shadow-xs">
            <Icon name="check_circle" className="text-[32px]" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
            {content.eyebrow}
          </span>
          <h3 className="font-headline text-2xl font-bold text-shs-navy tracking-tight leading-snug">
            {content.title}
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
            {content.description}
          </p>

          {/* Submitted data summary box */}
          <div className="mt-5 p-4 rounded-xl bg-surface-container border border-shs-border text-xs space-y-1.5">
            <p className="font-bold text-shs-navy mb-2">{content.receivedDataTitle}</p>
            <div className="flex justify-between border-b border-shs-border/60 pb-1">
              <span className="text-on-surface-variant">Calon Siswa:</span>
              <span className="font-semibold text-shs-navy">{lead.student_name}</span>
            </div>
            <div className="flex justify-between border-b border-shs-border/60 pb-1">
              <span className="text-on-surface-variant">Orang Tua / Wali:</span>
              <span className="font-semibold text-shs-navy">{lead.parent_name}</span>
            </div>
            <div className="flex justify-between border-b border-shs-border/60 pb-1">
              <span className="text-on-surface-variant">Jenjang &amp; Kelas:</span>
              <span className="font-semibold text-shs-navy">
                {lead.level} - {lead.grade}
              </span>
            </div>
            <div className="flex justify-between pt-0.5">
              <span className="text-on-surface-variant">WhatsApp:</span>
              <span className="font-semibold text-shs-navy">{lead.whatsapp}</span>
            </div>
          </div>

          {/* Next Steps 3 mini blocks */}
          <div className="mt-5 space-y-2.5">
            {content.nextSteps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low border border-shs-border"
              >
                <span className="font-headline text-xs font-bold text-secondary mt-0.5">
                  {st.number}
                </span>
                <div>
                  <h5 className="text-xs font-bold text-shs-navy">{st.title}</h5>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-2.5">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-all shadow-sm"
            >
              <Icon name="chat" className="text-[20px]" />
              <span>{content.whatsappCta}</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="w-full h-11 rounded-xl border border-shs-border text-on-surface-variant text-xs sm:text-sm font-semibold hover:bg-surface-container transition-colors"
            >
              {content.backBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
