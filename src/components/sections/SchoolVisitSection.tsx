import React from 'react';
import { Icon } from '../ui/Icon';
import { ContentDictionary, Locale } from '../../types';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { EditableText } from '../editor/EditableText';
import { EditableImage } from '../editor/EditableImage';

interface SchoolVisitSectionProps {
  content: ContentDictionary['schoolVisit'];
  locale: Locale;
  onBookTour: () => void;
  onImageClick: (src: string, caption: string) => void;
}

export const SchoolVisitSection: React.FC<SchoolVisitSectionProps> = ({
  content,
  locale,
  onBookTour,
  onImageClick
}) => {
  const visitPhoto = content.visitPhoto || '/images/photo-11.png';

  return (
    <section className="w-full bg-surface-container-low py-10 sm:py-14 lg:py-16 border-b border-shs-border" id="kunjungan-kampus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photo side */}
          <div className="lg:col-span-7 flex flex-col gap-3 reveal-scale reveal-delay-100">
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-surface-container-high relative border border-shs-border shadow-sm">
              <EditableImage
                section="schoolVisit"
                field="visitPhoto"
                positionField="visitPhotoPosition"
                position={content.visitPhotoPosition || '50% 15%'}
                src={visitPhoto}
                alt="Suasana interaksi hangat & eksploratif di kampus Suria Harapan School"
                className="w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onImageClick={() => onImageClick(visitPhoto, 'Kunjungan Kampus & Ruang Belajar SHS')}
                title="Ganti Foto Kunjungan Kampus"
              />
            </div>
            <p className="text-xs text-on-surface-variant italic px-1">
              <EditableText section="schoolVisit" field="photoCaption" value={content.photoCaption} />
            </p>
          </div>

          {/* Text & Actions */}
          <div className="lg:col-span-5 flex flex-col gap-5 reveal-on-scroll reveal-delay-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-1.5">
                <EditableText section="schoolVisit" field="eyebrow" value={content.eyebrow} />
              </span>
              <h2 className="font-headline text-2xl sm:text-4xl font-bold text-shs-navy tracking-tight leading-tight">
                <EditableText section="schoolVisit" field="title" value={content.title} />
              </h2>
            </div>

            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              <EditableText section="schoolVisit" field="description" value={content.description} multiline />
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onBookTour}
                className="h-12 px-6 rounded-lg bg-shs-navy text-white text-sm font-bold inline-flex items-center justify-center hover:bg-[#12335c] transition-all shadow-sm active:scale-98 cursor-pointer"
              >
                <EditableText section="schoolVisit" field="primaryCta" value={content.primaryCta} />
              </button>
              <a
                href={buildWhatsAppLink('tour', locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-5 rounded-lg border border-shs-border bg-surface text-shs-navy text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-surface-container transition-colors"
              >
                <Icon name="chat" className="text-[20px] text-[#25D366]" />
                <EditableText section="schoolVisit" field="secondaryCta" value={content.secondaryCta} />
              </a>
            </div>

            <p className="text-xs text-on-surface-variant/90 border-t border-shs-border pt-4">
              <EditableText section="schoolVisit" field="operationalNote" value={content.operationalNote} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
