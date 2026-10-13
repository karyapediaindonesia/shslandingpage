import React from 'react';
import { Icon } from '../ui/Icon';
import { ContentDictionary } from '../../types';
import { EditableText } from '../editor/EditableText';
import { EditableImage } from '../editor/EditableImage';

interface LearningLevelsSectionProps {
  content: ContentDictionary['levels'];
  onSelectLevel: (levelId: string) => void;
  onImageClick: (src: string, caption: string) => void;
}

export const LearningLevelsSection: React.FC<LearningLevelsSectionProps> = ({
  content,
  onSelectLevel,
  onImageClick
}) => {
  return (
    <section className="w-full bg-surface-container-lowest py-10 sm:py-14 lg:py-16 border-b border-shs-border" id="jenjang-studi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="max-w-2xl reveal-on-scroll">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-bold text-amber-800">02</span>
            <span className="w-6 h-0.5 bg-amber-400"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
              <EditableText section="levels" field="eyebrow" value={content.eyebrow} />
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-shs-navy tracking-tight">
            <EditableText section="levels" field="title" value={content.title} />
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
            <EditableText section="levels" field="intro" value={content.intro} multiline />
          </p>
        </div>

        {/* 3 Level Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.items.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between border border-shs-border rounded-xl sm:rounded-2xl overflow-hidden bg-surface transition-all duration-300 hover:border-amber-400/60 hover:shadow-tactile group reveal-scale ${
                idx === 0 ? 'reveal-delay-100' : idx === 1 ? 'reveal-delay-200' : 'reveal-delay-300'
              }`}
            >
              {/* Photo Plate */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container-high relative cursor-pointer">
                <EditableImage
                  section="levels"
                  subpath={`items.${idx}.image`}
                  positionSubpath={`items.${idx}.imagePosition`}
                  position={item.imagePosition || '50% 15%'}
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onImageClick={() => onImageClick(item.image, `${item.levelTitle} - ${item.subtitle}`)}
                  title={`Ganti Foto ${item.levelTitle}`}
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-shs-navy/85 backdrop-blur-xs text-white text-xs font-bold uppercase tracking-wider pointer-events-none z-10">
                  <EditableText section="levels" subpath={`items.${idx}.age`} value={item.age} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow gap-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-headline text-2xl sm:text-3xl font-bold text-amber-500 leading-none">
                      {item.number}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300/60">
                      <EditableText section="levels" subpath={`items.${idx}.subtitle`} value={item.subtitle} />
                    </span>
                  </div>

                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-shs-navy mb-2">
                    <EditableText section="levels" subpath={`items.${idx}.levelTitle`} value={item.levelTitle} />
                  </h3>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                    <EditableText section="levels" subpath={`items.${idx}.description`} value={item.description} multiline />
                  </p>

                  {/* Highlights pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.curriculumHighlights.map((hl, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant"
                      >
                        • <EditableText section="levels" subpath={`items.${idx}.curriculumHighlights.${i}`} value={hl} />
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-shs-border flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectLevel(item.levelTitle)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-950 transition-colors group-hover:underline cursor-pointer"
                  >
                    <span>
                      <EditableText section="levels" subpath={`items.${idx}.ctaText`} value={item.ctaText} />
                    </span>
                    <Icon name="arrow_forward" className="text-[18px] transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
