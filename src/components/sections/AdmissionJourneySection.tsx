import React from 'react';
import { Icon } from '../ui/Icon';
import { ContentDictionary, Locale } from '../../types';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { EditableText } from '../editor/EditableText';

interface AdmissionJourneySectionProps {
  content: ContentDictionary['admissionJourney'];
  locale: Locale;
}

export const AdmissionJourneySection: React.FC<AdmissionJourneySectionProps> = ({
  content,
  locale
}) => {
  return (
    <section className="w-full bg-surface-container-low py-10 sm:py-14 lg:py-16 border-b border-shs-border" id="alur-pendaftaran">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-shs-border reveal-on-scroll">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-1.5">
              <EditableText section="admissionJourney" field="eyebrow" value={content.eyebrow} />
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-shs-navy tracking-tight">
              <EditableText section="admissionJourney" field="title" value={content.title} />
            </h2>
          </div>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
            <EditableText section="admissionJourney" field="intro" value={content.intro} multiline />
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="relative pt-2">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-[1.5px] bg-shs-border z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 sm:gap-6 relative z-10">
            {content.steps.map((step, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-3 bg-surface-container-lowest md:bg-transparent p-5 md:p-0 rounded-xl md:rounded-none border md:border-none border-shs-border shadow-xs md:shadow-none reveal-on-scroll ${
                  idx === 0 ? 'reveal-delay-100' : idx === 1 ? 'reveal-delay-200' : idx === 2 ? 'reveal-delay-300' : idx === 3 ? 'reveal-delay-400' : 'reveal-delay-400'
                }`}
              >
                <div className="flex items-center gap-3 md:block">
                  <div
                    className={`w-12 h-12 rounded-lg font-headline text-lg font-bold flex items-center justify-center mb-3 shadow-xs ${
                      idx === 0
                        ? 'bg-shs-navy text-white'
                        : idx === content.steps.length - 1
                        ? 'bg-shs-navy text-white ring-2 ring-amber-400'
                        : 'bg-surface-container-high text-shs-navy border border-shs-border'
                    }`}
                  >
                    <EditableText section="admissionJourney" subpath={`steps.${idx}.number`} value={step.number} />
                  </div>
                  <span className="md:hidden text-xs font-bold uppercase text-amber-800 tracking-wider">
                    <EditableText section="admissionJourney" subpath={`steps.${idx}.phaseLabel`} value={step.phaseLabel} />
                  </span>
                </div>

                <div>
                  <h4 className="font-headline text-base sm:text-lg font-bold text-shs-navy leading-snug">
                    <EditableText section="admissionJourney" subpath={`steps.${idx}.title`} value={step.title} />
                  </h4>
                  <span className="text-xs text-amber-800 font-semibold block mt-0.5">
                    <EditableText section="admissionJourney" subpath={`steps.${idx}.subtitle`} value={step.subtitle} />
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  <EditableText section="admissionJourney" subpath={`steps.${idx}.description`} value={step.description} multiline />
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA & Note */}
        <div className="pt-4 border-t border-shs-border flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="#daftar"
              className="h-12 px-7 rounded-lg bg-shs-navy text-white text-sm font-bold inline-flex items-center justify-center hover:bg-[#12335c] transition-all shadow-sm"
            >
              <EditableText section="admissionJourney" field="primaryCta" value={content.primaryCta} />
            </a>
            <a
              href={buildWhatsAppLink('general', locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-amber-800 hover:text-amber-950 hover:underline inline-flex items-center gap-1.5"
            >
              <EditableText section="admissionJourney" field="contactCta" value={content.contactCta} />
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant italic">
            <EditableText section="admissionJourney" field="supportNote" value={content.supportNote} />
          </p>
        </div>
      </div>
    </section>
  );
};
