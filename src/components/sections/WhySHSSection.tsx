import React from 'react';
import { Icon } from '../ui/Icon';
import { ContentDictionary } from '../../types';
import { EditableText } from '../editor/EditableText';
import { EditableImage } from '../editor/EditableImage';

interface WhySHSSectionProps {
  content: ContentDictionary['whySHS'];
  onImageClick: (src: string, caption: string) => void;
}

export const WhySHSSection: React.FC<WhySHSSectionProps> = ({ content, onImageClick }) => {
  const communityImg = content.communityPhoto || '/images/photo-19.png';

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 border-b border-shs-border" id="mengapa-shs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Mission Narrative + Photo Plate */}
        <div className="lg:col-span-5 flex flex-col gap-6 reveal-on-scroll">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-amber-800">01</span>
              <span className="w-6 h-0.5 bg-amber-400"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
                <EditableText section="whySHS" field="eyebrow" value={content.eyebrow} />
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-shs-navy tracking-tight leading-tight">
              <EditableText section="whySHS" field="title" value={content.title} />
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed pt-1">
              <EditableText section="whySHS" field="intro" value={content.intro} multiline />
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-1">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high relative border border-shs-border shadow-sm">
              <EditableImage
                section="whySHS"
                field="communityPhoto"
                positionField="communityPhotoPosition"
                position={content.communityPhotoPosition || '50% 15%'}
                src={communityImg}
                alt="Siswa Suria Harapan School bermain basket dengan kebersamaan hangat"
                className="w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onImageClick={() => onImageClick(communityImg, 'Tumbuh Bersama Komunitas Sehat di Lapangan Olahraga SHS')}
                title="Ganti Foto Komunitas & Olahraga"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-shs-navy/85 backdrop-blur-xs text-white text-xs font-semibold flex items-center gap-1.5 pointer-events-none z-10">
                <Icon name="groups" className="text-[16px] text-amber-400" />
                <EditableText section="whySHS" field="imageCaption" value={content.imageCaption} />
              </div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-on-surface-variant italic">
                Aktivitas &amp; Kebersamaan Kampus
              </span>
              <a
                href="#daftar"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-900 hover:underline"
              >
                <EditableText section="whySHS" field="contactCta" value={content.contactCta} />
                <Icon name="arrow_forward" className="text-[16px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Educational Pillars */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-shs-border">
          {content.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`flex gap-4 sm:gap-6 reveal-on-scroll ${
                idx === 0 ? 'reveal-delay-100 pb-7' : idx === 1 ? 'reveal-delay-200 py-7' : idx === 2 ? 'reveal-delay-300 py-7' : 'reveal-delay-400 pt-7'
              }`}
            >
              <span className="font-headline text-3xl sm:text-4xl font-extrabold text-amber-500 shrink-0 leading-none pt-0.5">
                {pillar.number}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-headline text-lg sm:text-xl font-bold text-shs-navy">
                  <EditableText section="whySHS" subpath={`pillars.${idx}.title`} value={pillar.title} />
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  <EditableText section="whySHS" subpath={`pillars.${idx}.description`} value={pillar.description} multiline />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
