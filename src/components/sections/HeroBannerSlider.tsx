import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Icon } from '../ui/Icon';
import { BannerSlide } from '../../types';
import { useLiveContent } from '../../context/LiveContentContext';
import { ImageUploadModal } from '../editor/ImageUploadModal';
import { BannerManagerModal } from '../editor/BannerManagerModal';

interface HeroBannerSliderProps {
  slides: BannerSlide[];
  onImageClick?: (src: string, caption: string) => void;
}

function parseYPercent(posStr?: string): number {
  if (!posStr) return 15;
  const match = posStr.match(/(\d+)%/);
  if (match) return parseInt(match[1], 10);
  if (posStr.includes('top')) return 12;
  if (posStr.includes('bottom')) return 85;
  return 50;
}

export const HeroBannerSlider: React.FC<HeroBannerSliderProps> = ({ slides, onImageClick }) => {
  const { isEditorMode, locale, updateBannerSlides } = useLiveContent();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [isDraggingNow, setIsDraggingNow] = useState(false);
  const [liveDragPercent, setLiveDragPercent] = useState<number | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);
  const startPosPercentRef = useRef(15);
  const hasMovedRef = useRef(false);

  const totalSlides = slides.length;

  const activeSlideData = slides[currentSlide] || slides[0];

  const updateActiveSlidePosition = (newPos: string) => {
    if (!slides || slides.length === 0) return;
    const updated = slides.map((s, idx) => {
      if (idx === currentSlide) {
        return { ...s, imagePosition: newPos };
      }
      return s;
    });
    updateBannerSlides(locale, updated);
  };

  const updateActiveSlideImage = (newUrl: string) => {
    if (!slides || slides.length === 0) return;
    const updated = slides.map((s, idx) => {
      if (idx === currentSlide) {
        return { ...s, image: newUrl };
      }
      return s;
    });
    updateBannerSlides(locale, updated);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play timer (pause if in editor mode or paused)
  useEffect(() => {
    if (isPaused || isEditorMode || totalSlides <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, isEditorMode, nextSlide, totalSlides]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isEditorMode) return;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isEditorMode) return;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (isEditorMode) return;
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Direct On-Page Dragging on Banner for Editor Mode
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!isEditorMode) return;
    if ((e.target as HTMLElement).closest('.editor-toolbar-ignore')) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startYRef.current = e.clientY;
    startPosPercentRef.current = parseYPercent(activeSlideData?.imagePosition);
    setIsDraggingNow(true);
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !isEditorMode) return;
    const deltaY = e.clientY - startYRef.current;
    if (Math.abs(deltaY) > 3) {
      hasMovedRef.current = true;
    }
    if (!hasMovedRef.current) return;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const rawDeltaPercent = (deltaY / (rect.height || 500)) * 100;
    const newY = Math.round(Math.max(0, Math.min(100, startPosPercentRef.current - rawDeltaPercent)));
    setLiveDragPercent(newY);
    updateActiveSlidePosition(`50% ${newY}%`);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDraggingNow(false);
    setLiveDragPercent(null);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch (_) {}
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  if (!slides || slides.length === 0) return null;

  const currentY = parseYPercent(activeSlideData?.imagePosition);

  return (
    <section
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`relative w-full bg-[#00152c] text-white overflow-hidden select-none border-b border-shs-border ${
        isEditorMode ? 'cursor-ns-resize touch-none' : ''
      }`}
      aria-label="School Highlights Banner Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Slides Container */}
      <div className="relative w-full h-[480px] sm:h-[520px] md:h-[560px] lg:h-[600px] xl:h-[640px] overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const resolvedObjectPosition = slide.imagePosition || '50% 15%';
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
                isActive
                  ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                  : 'opacity-0 scale-105 z-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              {/* Background Image with Configurable Focal Alignment */}
              <img
                src={slide.image}
                alt={slide.alt}
                style={{ objectPosition: resolvedObjectPosition }}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* High-Contrast Gradient Overlays for Crystal Clear Typography without obscuring faces */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001226]/95 via-[#00152c]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00152c]/90 via-[#00152c]/40 to-transparent hidden md:block" />

              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 z-20" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 z-20">
                <div className="max-w-3xl flex flex-col gap-2 sm:gap-3.5 animate-fade-in pointer-events-none">
                  {/* Badge */}
                  {slide.badge && (
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-amber-400/95 text-shs-navy text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-md shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-shs-navy animate-pulse"></span>
                        {slide.badge}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2] drop-shadow-md">
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  {slide.subtitle && (
                    <p className="font-body text-xs sm:text-base md:text-lg text-slate-100 max-w-2xl leading-relaxed drop-shadow-sm font-normal line-clamp-3 sm:line-clamp-3">
                      {slide.subtitle}
                    </p>
                  )}

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1.5 sm:pt-3 pointer-events-auto">
                    {slide.primaryCtaText && slide.primaryCtaLink && (
                      <a
                        href={slide.primaryCtaLink}
                        className="h-10 sm:h-12 px-4 sm:px-7 rounded-lg bg-amber-400 text-shs-navy font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-amber-300 transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <span>{slide.primaryCtaText}</span>
                        <Icon name="arrow_forward" className="text-[16px] sm:text-[18px]" />
                      </a>
                    )}

                    {slide.secondaryCtaText && slide.secondaryCtaLink && (
                      <a
                        href={slide.secondaryCtaLink}
                        className="h-10 sm:h-12 px-3.5 sm:px-6 rounded-lg bg-white/15 backdrop-blur-md text-white border border-white/30 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-white/25 transition-all"
                      >
                        <span>{slide.secondaryCtaText}</span>
                      </a>
                    )}

                    {onImageClick && (
                      <button
                        type="button"
                        onClick={() => onImageClick(slide.image, slide.alt)}
                        title="Perbesar Foto"
                        className="h-10 sm:h-12 px-2.5 sm:px-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 inline-flex items-center justify-center transition-colors"
                        aria-label="Lihat foto layar penuh"
                      >
                        <Icon name="zoom_in" className="text-[18px] sm:text-[20px]" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Action Bar for Banner Editor Mode (Clean & Non-Intrusive) */}
      {isEditorMode && (
        <div className="editor-toolbar-ignore absolute top-4 left-4 z-40 flex flex-wrap items-center gap-1.5 bg-black/80 backdrop-blur-md p-1.5 rounded-xl border border-white/20 shadow-2xl">
          <button
            type="button"
            onClick={() => setIsImagePickerOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-shs-navy text-xs font-bold shadow flex items-center gap-1.5 cursor-pointer"
            title="Ganti Foto Slide Ini"
          >
            <Icon name="photo_camera" className="text-[16px]" />
            <span>Ganti Foto Slide {currentSlide + 1}</span>
          </button>

          {/* Quick Focal Presets */}
          <div className="flex items-center gap-0.5 bg-white/10 p-0.5 rounded-lg border border-white/15 text-[11px] font-bold">
            <button
              type="button"
              onClick={() => updateActiveSlidePosition('50% 12%')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                currentY <= 25 ? 'bg-amber-400 text-shs-navy' : 'hover:bg-white/20 text-white'
              }`}
            >
              Atas (12%)
            </button>
            <button
              type="button"
              onClick={() => updateActiveSlidePosition('50% 50%')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                currentY > 25 && currentY < 75 ? 'bg-amber-400 text-shs-navy' : 'hover:bg-white/20 text-white'
              }`}
            >
              Tengah (50%)
            </button>
            <button
              type="button"
              onClick={() => updateActiveSlidePosition('50% 85%')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                currentY >= 75 ? 'bg-amber-400 text-shs-navy' : 'hover:bg-white/20 text-white'
              }`}
            >
              Bawah (85%)
            </button>
          </div>

          {/* Manage All Slides Button */}
          <button
            type="button"
            onClick={() => setIsManagerOpen(true)}
            className="px-2.5 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
            title="Kelola Semua Slide Banner (Tambah / Hapus / Teks)"
          >
            <Icon name="view_carousel" className="text-[16px] text-amber-400" />
            <span>Kelola Banner</span>
          </button>
        </div>
      )}

      {/* Live Drag Indicator Overlay */}
      {isDraggingNow && (
        <div className="absolute inset-0 bg-shs-navy/35 backdrop-blur-[1px] flex items-center justify-center z-50 pointer-events-none">
          <div className="px-5 py-3 rounded-2xl bg-amber-400 text-shs-navy font-black text-base shadow-2xl flex items-center gap-2 border-2 border-shs-navy animate-scale-in">
            <Icon name="drag_handle" className="text-[24px]" />
            <span>Titik Fokus Slide {currentSlide + 1}: {liveDragPercent ?? currentY}%</span>
          </div>
        </div>
      )}

      {/* Left Navigation Arrow */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Slide sebelumnya"
        className="editor-toolbar-ignore hidden md:flex absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-amber-400 hover:text-shs-navy text-white backdrop-blur-md border border-white/20 transition-all items-center justify-center shadow-lg active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
      >
        <Icon name="chevron_left" className="text-[24px] sm:text-[30px] transition-transform group-hover:-translate-x-0.5" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Slide berikutnya"
        className="editor-toolbar-ignore hidden md:flex absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-amber-400 hover:text-shs-navy text-white backdrop-blur-md border border-white/20 transition-all items-center justify-center shadow-lg active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
      >
        <Icon name="chevron_right" className="text-[24px] sm:text-[30px] transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Slide Indicators / Bullet Progress Bars */}
      <div className="editor-toolbar-ignore absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
        {slides.map((_, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Pindah ke slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'w-7 sm:w-9 bg-amber-400'
                  : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/80'
              }`}
            />
          );
        })}
      </div>

      {/* Slide Counter Indicator */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90 font-bold">
        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>

      {/* Image Picker Modal for Banner */}
      <ImageUploadModal
        isOpen={isImagePickerOpen}
        currentImage={activeSlideData?.image || ''}
        currentPosition={activeSlideData?.imagePosition || '50% 15%'}
        onClose={() => setIsImagePickerOpen(false)}
        onSelectImage={(newUrl) => {
          updateActiveSlideImage(newUrl);
          setIsImagePickerOpen(false);
        }}
        title={`Ganti Foto Slide ${currentSlide + 1}`}
      />

      {/* Banner Manager Modal */}
      <BannerManagerModal
        isOpen={isManagerOpen}
        onClose={() => setIsManagerOpen(false)}
      />
    </section>
  );
};
