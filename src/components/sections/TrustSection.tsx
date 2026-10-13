import React from 'react';
import { ContentDictionary } from '../../types';
import { EditableText } from '../editor/EditableText';
import { EditableImage } from '../editor/EditableImage';

interface TrustSectionProps {
  content: ContentDictionary['trust'];
  onImageClick: (src: string, caption: string) => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ content, onImageClick }) => {
  const stemImg = content.stemPhoto || '/images/photo-10.png';

  return (
    <section className="w-full bg-surface-container-lowest py-10 sm:py-14 lg:py-16 border-b border-shs-border" id="trust-achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-shs-border reveal-on-scroll">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-1.5">
              <EditableText section="trust" field="eyebrow" value={content.eyebrow} />
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-shs-navy tracking-tight">
              <EditableText section="trust" field="title" value={content.title} />
            </h2>
          </div>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-md leading-relaxed">
            <EditableText section="trust" field="intro" value={content.intro} multiline />
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Trust points */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-shs-border">
            {content.items.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-1.5 reveal-on-scroll ${
                  idx === 0 ? 'reveal-delay-100 pb-6' : idx === content.items.length - 1 ? 'reveal-delay-400 pt-6' : idx === 1 ? 'reveal-delay-200 py-6' : 'reveal-delay-300 py-6'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
                  <EditableText section="trust" subpath={`items.${idx}.tag`} value={item.tag} />
                </span>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-shs-navy">
                  <EditableText section="trust" subpath={`items.${idx}.title`} value={item.title} />
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  <EditableText section="trust" subpath={`items.${idx}.description`} value={item.description} multiline />
                </p>
              </div>
            ))}
          </div>

          {/* Photo Side Plate */}
          <div className="lg:col-span-5 flex flex-col gap-3 reveal-scale reveal-delay-200">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-high relative border border-shs-border shadow-sm">
              <EditableImage
                section="trust"
                field="stemPhoto"
                positionField="stemPhotoPosition"
                position={content.stemPhotoPosition || '50% 15%'}
                src={stemImg}
                alt="Siswa Suria Harapan School berkolaborasi aktif dalam proyek sains"
                className="w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onImageClick={() => onImageClick(stemImg, 'Laboratorium STEM & Riset Siswa SHS')}
                title="Ganti Foto STEM & Riset"
              />
            </div>
            <div className="flex items-center justify-between px-1">
              <span className="text-xs text-on-surface-variant italic">
                <EditableText section="trust" field="photoCaption" value={content.photoCaption} />
              </span>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                <EditableText section="trust" field="photoTag" value={content.photoTag} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
