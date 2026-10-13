import React from 'react';
import { Icon } from '../ui/Icon';
import { ContentDictionary } from '../../types';
import { EditableText } from '../editor/EditableText';
import { EditableImage } from '../editor/EditableImage';

interface LearningPhilosophySectionProps {
  content: ContentDictionary['philosophy'];
  onImageClick: (src: string, caption: string) => void;
}

export const LearningPhilosophySection: React.FC<LearningPhilosophySectionProps> = ({
  content,
  onImageClick
}) => {
  const labImg = content.labPhoto || '/images/photo-7.png';

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16" id="filosofi-belajar">
      <div className="bg-shs-navy text-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 overflow-hidden relative shadow-xl border border-primary-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 reveal-on-scroll">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block">
                <EditableText section="philosophy" field="eyebrow" value={content.eyebrow} />
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                <EditableText section="philosophy" field="title" value={content.title} />
              </h2>
              <p className="text-sm sm:text-base text-on-primary-container leading-relaxed pt-1">
                <EditableText section="philosophy" field="intro" value={content.intro} multiline />
              </p>
            </div>

            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] w-full border border-white/20 shadow-md">
              <EditableImage
                section="philosophy"
                field="labPhoto"
                positionField="labPhotoPosition"
                position={content.labPhotoPosition || '50% 15%'}
                src={labImg}
                alt="Siswa SHS berkolaborasi aktif dalam eksperimen sains dan teknologi"
                className="w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onImageClick={() => onImageClick(labImg, 'Eksplorasi Sains & Robotika di Laboratorium SHS')}
                title="Ganti Foto Laboratorium & Sains"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-amber-400 text-shs-navy text-xs font-bold shadow-xs pointer-events-none z-10">
                <EditableText section="philosophy" field="imageCaption" value={content.imageCaption} />
              </div>
            </div>

            <div>
              <a
                href="#tentang-shs"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-300 hover:text-amber-200 hover:underline"
              >
                <EditableText section="philosophy" field="cta" value={content.cta} />
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Verbs List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/15 lg:pl-4">
            {content.verbs.map((verb, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-1.5 reveal-on-scroll ${
                  idx === 0 ? 'reveal-delay-100 pb-7' : idx === content.verbs.length - 1 ? 'reveal-delay-400 pt-7' : idx === 1 ? 'reveal-delay-200 py-7' : 'reveal-delay-300 py-7'
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-headline text-2xl sm:text-3xl font-extrabold text-amber-300 tracking-tight">
                    <EditableText section="philosophy" subpath={`verbs.${idx}.enVerb`} value={verb.enVerb} />
                  </span>
                  <span className="font-headline text-base sm:text-lg text-white font-semibold opacity-90">
                    / <EditableText section="philosophy" subpath={`verbs.${idx}.idVerb`} value={verb.idVerb} />
                  </span>
                </div>
                <p className="text-sm sm:text-base text-surface-bright/90 leading-relaxed">
                  <EditableText section="philosophy" subpath={`verbs.${idx}.description`} value={verb.description} multiline />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
