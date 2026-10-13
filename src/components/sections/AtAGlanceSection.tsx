import React from 'react';
import { ContentDictionary } from '../../types';
import { EditableText } from '../editor/EditableText';

interface AtAGlanceSectionProps {
  content: ContentDictionary['glance'];
}

export const AtAGlanceSection: React.FC<AtAGlanceSectionProps> = ({ content }) => {
  return (
    <section className="w-full bg-surface py-10 sm:py-14 border-b border-shs-border" id="tentang-shs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12 pb-6 border-b border-shs-border reveal-on-scroll">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
                <EditableText section="glance" field="eyebrow" value={content.eyebrow} />
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-shs-navy tracking-tight">
              <EditableText section="glance" field="title" value={content.title} />
            </h2>
          </div>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
            <EditableText section="glance" field="intro" value={content.intro} multiline />
          </p>
        </div>

        {/* 4-column stat matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-shs-border">
          {content.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`pt-4 lg:pt-0 ${
                idx === 0 ? 'lg:pl-0' : 'lg:px-6'
              } ${idx === 3 ? 'lg:pr-0' : ''} flex flex-col gap-1.5 group reveal-on-scroll ${
                idx === 0 ? 'reveal-delay-100' : idx === 1 ? 'reveal-delay-200' : idx === 2 ? 'reveal-delay-300' : 'reveal-delay-400'
              }`}
            >
              <span className="font-headline text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-shs-navy tracking-tight whitespace-nowrap group-hover:text-amber-600 transition-colors">
                <EditableText section="glance" subpath={`stats.${idx}.value`} value={stat.value} />
              </span>
              <span className="text-sm sm:text-base font-bold text-amber-800">
                <EditableText section="glance" subpath={`stats.${idx}.label`} value={stat.label} />
              </span>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                <EditableText section="glance" subpath={`stats.${idx}.description`} value={stat.description} multiline />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
