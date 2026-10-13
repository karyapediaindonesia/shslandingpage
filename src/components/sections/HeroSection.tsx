import React from 'react';
import { Icon } from '../ui/Icon';
import { HeroContent } from '../../types';
import { EditableText } from '../editor/EditableText';
import { EditableImage } from '../editor/EditableImage';

interface HeroSectionProps {
  content: HeroContent;
  onImageClick: (src: string, caption: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content, onImageClick }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 border-b border-shs-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Messaging & CTAs */}
        <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300/80 text-xs font-bold uppercase tracking-wider shadow-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <EditableText section="hero" field="badge" value={content.badge} />
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold">
              <EditableText section="hero" field="levelsPill" value={content.levelsPill} />
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.12]">
            <EditableText section="hero" field="headline" value={content.headline} />{' '}
            <span className="relative inline-block text-primary underline decoration-amber-400 decoration-4 sm:decoration-[6px] underline-offset-4 sm:underline-offset-8">
              <EditableText section="hero" field="headlineHighlight" value={content.headlineHighlight} />
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed">
            <EditableText section="hero" field="description" value={content.description} multiline />
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1 sm:pt-2">
            <a
              href="#daftar"
              className="h-12 sm:h-13 px-7 rounded-lg bg-shs-navy text-white text-sm sm:text-base font-bold inline-flex items-center justify-center hover:bg-[#12335c] transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              <EditableText section="hero" field="primaryCta" value={content.primaryCta} />
            </a>
            <a
              href="#kunjungan-sekolah"
              className="h-12 sm:h-13 px-6 rounded-lg border border-shs-border bg-surface text-shs-navy text-sm sm:text-base font-semibold inline-flex items-center justify-center gap-2 hover:bg-surface-container transition-colors"
            >
              <Icon name="calendar_today" className="text-[20px] text-amber-600" />
              <EditableText section="hero" field="secondaryCta" value={content.secondaryCta} />
            </a>
          </div>

          {/* Quick Institutional Credentials */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-shs-border text-xs sm:text-sm text-on-surface-variant font-medium">
            <div className="flex items-center gap-2">
              <Icon name="verified" className="text-amber-500 text-[20px]" />
              <EditableText section="hero" field="accreditation" value={content.accreditation} />
            </div>
            <div className="flex items-center gap-2">
              <Icon name="public" className="text-amber-500 text-[20px]" />
              <EditableText section="hero" field="curriculum" value={content.curriculum} />
            </div>
          </div>
        </div>

        {/* Right Column: Real School Photography Editorial Grid */}
        <div className="lg:col-span-6 grid grid-cols-12 gap-3 sm:gap-4">
          {/* Main Large Photo */}
          <div className="col-span-12 rounded-xl sm:rounded-2xl overflow-hidden bg-surface-container-high relative aspect-[16/10] shadow-md border border-shs-border">
            <EditableImage
              section="hero"
              field="mainPhoto"
              positionField="mainPhotoPosition"
              position={content.mainPhotoPosition || '50% 15%'}
              src={content.mainPhoto || '/images/photo-8.jpg'}
              alt="Siswa Suria Harapan School berkolaborasi aktif di ruang kelas"
              className="w-full h-full"
              imgClassName="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onImageClick={() =>
                onImageClick(
                  content.mainPhoto || '/images/photo-8.jpg',
                  'Pembelajaran Kolaboratif Aktif Siswa SHS'
                )
              }
              title="Ganti Foto Utama Hero"
            />
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 rounded-lg bg-surface/90 backdrop-blur-md px-3.5 py-1.5 border border-shs-border text-shs-navy text-xs font-semibold flex items-center gap-2 shadow-xs pointer-events-none z-10">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <EditableText section="hero" field="featuredPlateTitle" value={content.featuredPlateTitle} />
            </div>
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-amber-400 text-shs-navy text-[10px] font-mono font-bold shadow-xs pointer-events-none z-10">
              <EditableText section="hero" field="featuredPlateTag" value={content.featuredPlateTag} />
            </div>
          </div>

          {/* Secondary Sub-Photo 1: Art */}
          <div className="col-span-6 rounded-lg sm:rounded-xl overflow-hidden bg-surface-container-high relative aspect-[4/3] shadow-sm border border-shs-border">
            <EditableImage
              section="hero"
              field="artPhoto"
              positionField="artPhotoPosition"
              position={content.artPhotoPosition || '50% 15%'}
              src={content.artPhoto || '/images/photo-4.png'}
              alt="Siswa aktif berkarya seni di sanggar seni SHS"
              className="w-full h-full"
              imgClassName="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onImageClick={() =>
                onImageClick(
                  content.artPhoto || '/images/photo-4.png',
                  'Eksplorasi Seni Rupa & Studio Kreatif Siswa SHS'
                )
              }
              title="Ganti Foto Seni & Kreativitas"
            />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-shs-navy/80 text-white text-[10px] font-semibold backdrop-blur-xs pointer-events-none z-10">
              Seni &amp; Kreativitas
            </div>
          </div>

          {/* Secondary Sub-Photo 2: Music */}
          <div className="col-span-6 rounded-lg sm:rounded-xl overflow-hidden bg-surface-container-high relative aspect-[4/3] shadow-sm border border-shs-border">
            <EditableImage
              section="hero"
              field="musicPhoto"
              positionField="musicPhotoPosition"
              position={content.musicPhotoPosition || '50% 15%'}
              src={content.musicPhoto || '/images/photo-2.png'}
              alt="Siswa bermain musik dan paduan suara bersama di studio SHS"
              className="w-full h-full"
              imgClassName="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onImageClick={() =>
                onImageClick(
                  content.musicPhoto || '/images/photo-2.png',
                  'Studio Musik & Paduan Suara Siswa SHS'
                )
              }
              title="Ganti Foto Musik & Paduan Suara"
            />
            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-shs-navy/80 text-white text-[10px] font-semibold backdrop-blur-xs pointer-events-none z-10">
              Musik &amp; Harmoni
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
