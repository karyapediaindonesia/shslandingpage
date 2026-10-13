import React, { useState } from 'react';
import { Icon } from '../ui/Icon';
import { ContentDictionary, EducationLevel, Locale } from '../../types';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { EditableText } from '../editor/EditableText';

interface AdmissionTimelineSectionProps {
  content: ContentDictionary['timeline'];
  locale: Locale;
}

export const AdmissionTimelineSection: React.FC<AdmissionTimelineSectionProps> = ({
  content,
  locale
}) => {
  const [activeTab, setActiveTab] = useState<EducationLevel>('early-learning');

  const currentMilestones = content.milestones[activeTab];

  return (
    <section className="w-full bg-surface py-10 sm:py-14 lg:py-16 border-b border-shs-border" id="admission-timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-12">
        {/* Header with Level Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-shs-border reveal-on-scroll">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-1.5">
              <EditableText section="timeline" field="eyebrow" value={content.eyebrow} />
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-shs-navy tracking-tight">
              <EditableText section="timeline" field="title" value={content.title} />
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
              <EditableText section="timeline" field="intro" value={content.intro} multiline />
            </p>
          </div>

          {/* Level Switcher Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-surface-container border border-shs-border self-start md:self-auto shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('early-learning')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'early-learning'
                  ? 'bg-amber-100 text-amber-950 border border-amber-300/80 shadow-xs'
                  : 'text-on-surface-variant hover:text-shs-navy'
              }`}
            >
              <EditableText section="timeline" subpath="tabs.earlyLearning" value={content.tabs.earlyLearning} />
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('primary')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'primary'
                  ? 'bg-amber-100 text-amber-950 border border-amber-300/80 shadow-xs'
                  : 'text-on-surface-variant hover:text-shs-navy'
              }`}
            >
              <EditableText section="timeline" subpath="tabs.primary" value={content.tabs.primary} />
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('secondary')}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'secondary'
                  ? 'bg-amber-100 text-amber-950 border border-amber-300/80 shadow-xs'
                  : 'text-on-surface-variant hover:text-shs-navy'
              }`}
            >
              <EditableText section="timeline" subpath="tabs.secondary" value={content.tabs.secondary} />
            </button>
          </div>
        </div>

        {/* 6 Milestones Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {currentMilestones.map((m, idx) => {
            const delayClass = idx === 0 ? 'reveal-delay-100' : idx === 1 ? 'reveal-delay-150' : idx === 2 ? 'reveal-delay-200' : idx === 3 ? 'reveal-delay-250' : idx === 4 ? 'reveal-delay-300' : 'reveal-delay-400';
            if (m.isSpecial) {
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-xl bg-shs-navy text-white border border-amber-400/40 flex flex-col justify-between gap-4 shadow-sm reveal-scale ${delayClass}`}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      <EditableText section="timeline" subpath={`milestones.${activeTab}.${idx}.step`} value={m.step} />
                    </span>
                    <h4 className="font-headline text-base sm:text-lg font-bold text-white leading-snug">
                      <EditableText section="timeline" subpath={`milestones.${activeTab}.${idx}.title`} value={m.title} />
                    </h4>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <p className="text-xs font-bold text-amber-300">
                      <EditableText section="timeline" subpath={`milestones.${activeTab}.${idx}.period`} value={m.period} />
                    </p>
                    <p className="text-xs text-on-primary-container mt-1">
                      <EditableText section="timeline" subpath={`milestones.${activeTab}.${idx}.description`} value={m.description} multiline />
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className={`p-5 rounded-xl bg-surface-container-lowest border border-shs-border flex flex-col justify-between gap-4 shadow-xs reveal-scale ${delayClass}`}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    <EditableText section="timeline" subpath={`milestones.${activeTab}.${idx}.step`} value={m.step} />
                  </span>
                  <h4 className="font-headline text-base sm:text-lg font-bold text-shs-navy leading-snug">
                    <EditableText section="timeline" subpath={`milestones.${activeTab}.${idx}.title`} value={m.title} />
                  </h4>
                </div>
                <div className="pt-3 border-t border-shs-border">
                  <p className="text-xs font-bold text-shs-navy">
                    <EditableText section="timeline" subpath={`milestones.${activeTab}.${idx}.period`} value={m.period} />
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    <EditableText section="timeline" subpath={`milestones.${activeTab}.${idx}.description`} value={m.description} multiline />
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer & Bottom Action */}
        <div className="pt-4 border-t border-shs-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-on-surface-variant italic">
            <EditableText section="timeline" field="disclaimer" value={content.disclaimer} multiline />
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#daftar"
              className="h-11 sm:h-12 px-6 rounded-lg bg-shs-navy text-white text-xs sm:text-sm font-bold inline-flex items-center justify-center hover:bg-[#12335c] transition-all shadow-sm"
            >
              <EditableText section="timeline" field="primaryCta" value={content.primaryCta} />
            </a>
            <a
              href={buildWhatsAppLink('general', locale, { level: activeTab })}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-950 hover:underline inline-flex items-center gap-1.5"
            >
              <EditableText section="timeline" field="consultScheduleCta" value={content.consultScheduleCta} />
              <Icon name="calendar_today" className="text-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
