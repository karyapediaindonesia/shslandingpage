import React from 'react';
import { Icon } from '../ui/Icon';
import { ContentDictionary } from '../../types';
import { EditableText } from '../editor/EditableText';
import { EditableImage } from '../editor/EditableImage';

interface BeyondClassroomSectionProps {
  content: ContentDictionary['beyondClassroom'];
  onImageClick: (src: string, caption: string) => void;
}

export const BeyondClassroomSection: React.FC<BeyondClassroomSectionProps> = ({
  content,
  onImageClick
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 border-b border-shs-border" id="kehidupan-siswa">
      <div className="flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-shs-border reveal-on-scroll">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-bold text-amber-800">03</span>
              <span className="w-6 h-0.5 bg-amber-400"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
                <EditableText section="beyondClassroom" field="eyebrow" value={content.eyebrow} />
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-shs-navy tracking-tight">
              <EditableText section="beyondClassroom" field="title" value={content.title} />
            </h2>
          </div>
          <div className="max-w-md flex flex-col gap-3">
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              <EditableText section="beyondClassroom" field="intro" value={content.intro} multiline />
            </p>
            <a
              href="#daftar"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-950 hover:underline w-fit"
            >
              <EditableText section="beyondClassroom" field="cta" value={content.cta} />
              <Icon name="arrow_forward" className="text-[16px]" />
            </a>
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {content.items.map((item, idx) => {
            const delayClass = idx === 0 ? 'reveal-delay-100' : idx === 1 ? 'reveal-delay-200' : idx === 2 ? 'reveal-delay-300' : 'reveal-delay-400';
            if (item.isAccent) {
              return (
                <div
                  key={idx}
                  className={`md:col-span-12 lg:col-span-3 rounded-2xl bg-surface-container p-6 sm:p-7 flex flex-col justify-between border border-shs-border shadow-xs reveal-scale ${delayClass}`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                      <Icon name="psychology" className="text-[24px]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800 block mb-1">
                        <EditableText section="beyondClassroom" subpath={`items.${idx}.tag`} value={item.tag} />
                      </span>
                      <h3 className="font-headline text-lg sm:text-xl font-bold text-shs-navy mb-2">
                        <EditableText section="beyondClassroom" subpath={`items.${idx}.title`} value={item.title} />
                      </h3>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                        <EditableText section="beyondClassroom" subpath={`items.${idx}.description`} value={item.description} multiline />
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-shs-border/60 flex items-center gap-2 text-xs font-semibold text-shs-navy">
                    <Icon name="check_circle" className="text-secondary text-[18px]" />
                    <span>Pendidikan Karakter Terpadu</span>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className={`${item.colSpanDesktop} rounded-2xl overflow-hidden bg-[#00152c] relative group min-h-[340px] sm:min-h-[380px] flex flex-col justify-end p-6 sm:p-8 lg:p-9 border border-shs-border shadow-sm reveal-scale ${delayClass}`}
              >
                {item.image && (
                  <EditableImage
                    section="beyondClassroom"
                    subpath={`items.${idx}.image`}
                    positionSubpath={`items.${idx}.imagePosition`}
                    position={item.imagePosition || '50% 20%'}
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full"
                    imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onImageClick={() => onImageClick(item.image, item.title)}
                    title={`Ganti Foto ${item.title}`}
                  />
                )}
                {/* Smooth Continuous Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001226]/95 via-[#00152c]/50 to-transparent pointer-events-none z-[1]" />

                {/* Content over photo with ample breathing room */}
                <div className="relative z-10 text-white flex flex-col gap-3 max-w-xl pointer-events-none mt-auto pt-10 sm:pt-14">
                  <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-bold uppercase tracking-wider w-fit pointer-events-auto shadow-xs">
                    <EditableText section="beyondClassroom" subpath={`items.${idx}.tag`} value={item.tag} />
                  </span>
                  <h3 className="font-headline text-lg sm:text-2xl font-bold text-white leading-snug pointer-events-auto drop-shadow-sm">
                    <EditableText section="beyondClassroom" subpath={`items.${idx}.title`} value={item.title} />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-100/95 line-clamp-2 sm:line-clamp-none pointer-events-auto leading-relaxed drop-shadow-xs">
                    <EditableText section="beyondClassroom" subpath={`items.${idx}.description`} value={item.description} multiline />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
