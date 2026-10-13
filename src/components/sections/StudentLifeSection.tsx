import React from 'react';
import { Icon } from '../ui/Icon';
import { ContentDictionary } from '../../types';
import { EditableText } from '../editor/EditableText';
import { EditableImage } from '../editor/EditableImage';

interface StudentLifeSectionProps {
  content: ContentDictionary['studentLife'];
  onImageClick: (src: string, caption: string) => void;
}

export const StudentLifeSection: React.FC<StudentLifeSectionProps> = ({
  content,
  onImageClick
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 border-b border-shs-border">
      <div className="flex flex-col gap-10 sm:gap-12">
        {/* Header with Micro-Story box */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-shs-border reveal-on-scroll">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-1.5">
              <EditableText section="studentLife" field="eyebrow" value={content.eyebrow} />
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-shs-navy tracking-tight">
              <EditableText section="studentLife" field="title" value={content.title} />
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
              <EditableText section="studentLife" field="intro" value={content.intro} multiline />
            </p>
          </div>

          <div className="bg-surface-container-low px-5 py-4 rounded-xl border border-shs-border max-w-md shadow-xs reveal-scale reveal-delay-200">
            <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-1">
              <Icon name="auto_stories" className="text-[16px] text-amber-600" />
              <EditableText section="studentLife" field="microStoryTag" value={content.microStoryTag} />
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant italic leading-snug">
              "<EditableText section="studentLife" field="microStoryText" value={content.microStoryText} multiline />"
            </p>
          </div>
        </div>

        {/* Photo Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4">
          {/* Moment 1: Large Span */}
          <div className="col-span-2 md:col-span-6 rounded-xl sm:rounded-2xl overflow-hidden bg-surface-container-high relative group aspect-[4/3] shadow-sm border border-shs-border reveal-scale reveal-delay-100">
            <EditableImage
              section="studentLife"
              subpath="moments.0.image"
              positionSubpath="moments.0.imagePosition"
              position={content.moments[0].imagePosition || '50% 15%'}
              src={content.moments[0].image}
              alt={content.moments[0].caption}
              className="w-full h-full"
              imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onImageClick={() => onImageClick(content.moments[0].image, content.moments[0].caption)}
              title="Ganti Foto Jurnal 1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white pointer-events-none z-10">
              <span className="px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md border border-white/30 text-xs font-semibold">
                <EditableText section="studentLife" subpath="moments.0.tag" value={content.moments[0].tag} />
              </span>
              <span className="text-xs font-mono opacity-90">{content.moments[0].plate}</span>
            </div>
          </div>

          {/* Moment 2 */}
          <div className="col-span-1 md:col-span-3 rounded-xl sm:rounded-2xl overflow-hidden bg-surface-container-high relative group aspect-square md:aspect-auto shadow-sm border border-shs-border reveal-scale reveal-delay-200">
            <EditableImage
              section="studentLife"
              subpath="moments.1.image"
              positionSubpath="moments.1.imagePosition"
              position={content.moments[1].imagePosition || '50% 15%'}
              src={content.moments[1].image}
              alt={content.moments[1].caption}
              className="w-full h-full"
              imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onImageClick={() => onImageClick(content.moments[1].image, content.moments[1].caption)}
              title="Ganti Foto Jurnal 2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 text-white pointer-events-none z-10">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-md border border-white/30 text-[11px] font-semibold">
                <EditableText section="studentLife" subpath="moments.1.tag" value={content.moments[1].tag} />
              </span>
            </div>
          </div>

          {/* Moment 3 */}
          <div className="col-span-1 md:col-span-3 rounded-xl sm:rounded-2xl overflow-hidden bg-surface-container-high relative group aspect-square md:aspect-auto shadow-sm border border-shs-border reveal-scale reveal-delay-300">
            <EditableImage
              section="studentLife"
              subpath="moments.2.image"
              positionSubpath="moments.2.imagePosition"
              position={content.moments[2].imagePosition || '50% 15%'}
              src={content.moments[2].image}
              alt={content.moments[2].caption}
              className="w-full h-full"
              imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onImageClick={() => onImageClick(content.moments[2].image, content.moments[2].caption)}
              title="Ganti Foto Jurnal 3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 text-white pointer-events-none z-10">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-md border border-white/30 text-[11px] font-semibold">
                <EditableText section="studentLife" subpath="moments.2.tag" value={content.moments[2].tag} />
              </span>
            </div>
          </div>

          {/* Moment 4 */}
          <div className="col-span-1 md:col-span-3 rounded-xl sm:rounded-2xl overflow-hidden bg-surface-container-high relative group aspect-square md:aspect-auto shadow-sm border border-shs-border reveal-scale reveal-delay-200">
            <EditableImage
              section="studentLife"
              subpath="moments.3.image"
              positionSubpath="moments.3.imagePosition"
              position={content.moments[3].imagePosition || '50% 15%'}
              src={content.moments[3].image}
              alt={content.moments[3].caption}
              className="w-full h-full"
              imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onImageClick={() => onImageClick(content.moments[3].image, content.moments[3].caption)}
              title="Ganti Foto Jurnal 4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 text-white pointer-events-none z-10">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-md border border-white/30 text-[11px] font-semibold">
                <EditableText section="studentLife" subpath="moments.3.tag" value={content.moments[3].tag} />
              </span>
            </div>
          </div>

          {/* Moment 5 */}
          <div className="col-span-1 md:col-span-3 rounded-xl sm:rounded-2xl overflow-hidden bg-surface-container-high relative group aspect-square md:aspect-auto shadow-sm border border-shs-border reveal-scale reveal-delay-300">
            <EditableImage
              section="studentLife"
              subpath="moments.4.image"
              positionSubpath="moments.4.imagePosition"
              position={content.moments[4].imagePosition || '50% 15%'}
              src={content.moments[4].image}
              alt={content.moments[4].caption}
              className="w-full h-full"
              imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onImageClick={() => onImageClick(content.moments[4].image, content.moments[4].caption)}
              title="Ganti Foto Jurnal 5"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 text-white pointer-events-none z-10">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest/20 backdrop-blur-md border border-white/30 text-[11px] font-semibold">
                <EditableText section="studentLife" subpath="moments.4.tag" value={content.moments[4].tag} />
              </span>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="col-span-2 md:col-span-6 bg-surface-container-lowest p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-shs-border shadow-sm flex flex-col justify-between gap-5 reveal-scale reveal-delay-400">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(content.testimonial.stars)].map((_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="font-headline text-base sm:text-lg text-shs-navy italic leading-snug">
                "<EditableText section="studentLife" subpath="testimonial.quote" value={content.testimonial.quote} multiline />"
              </blockquote>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-shs-border/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-headline text-shs-navy font-bold text-sm">
                  IH
                </div>
                <div>
                  <h5 className="text-sm font-bold text-shs-navy leading-none">
                    <EditableText section="studentLife" subpath="testimonial.parentName" value={content.testimonial.parentName} />
                  </h5>
                  <p className="text-xs text-on-surface-variant mt-1">
                    <EditableText section="studentLife" subpath="testimonial.parentTitle" value={content.testimonial.parentTitle} />
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-amber-700 text-xs font-semibold">
                <Icon name="verified" className="text-[16px]" />
                <EditableText section="studentLife" subpath="testimonial.verifiedTag" value={content.testimonial.verifiedTag} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
