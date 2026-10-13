import React, { useState, useRef } from 'react';
import { Icon } from '../ui/Icon';
import { useLiveContent } from '../../context/LiveContentContext';
import { BannerSlide } from '../../types';
import { ImageUploadModal } from './ImageUploadModal';

interface BannerManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function parseYPercent(posStr?: string): number {
  if (!posStr) return 15;
  let clean = posStr.toLowerCase().trim();
  if (clean.startsWith('object-[')) {
    clean = clean.replace(/^object-\[/, '').replace(/\]$/, '').replace(/_/g, ' ');
  }
  const match = clean.match(/(\d+)%/);
  if (match) return parseInt(match[1], 10);
  if (clean.includes('top')) return 12;
  if (clean.includes('bottom')) return 85;
  return 50;
}

export const BannerManagerModal: React.FC<BannerManagerModalProps> = ({
  isOpen,
  onClose
}) => {
  const { locale, content, updateBannerSlides } = useLiveContent();
  const [slides, setSlides] = useState<BannerSlide[]>(() => {
    return JSON.parse(JSON.stringify(content.heroBanner.slides || []));
  });

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isImagePickerOpen, setIsImagePickerOpen] = useState<boolean>(false);
  const [isDraggingNow, setIsDraggingNow] = useState(false);

  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);
  const startYPercentRef = useRef(15);

  // Sync slides when opening or when locale changes
  React.useEffect(() => {
    if (isOpen) {
      setSlides(JSON.parse(JSON.stringify(content.heroBanner.slides || [])));
      setActiveSlideIndex(0);
    }
  }, [isOpen, content, locale]);

  if (!isOpen) return null;

  const currentSlide = slides[activeSlideIndex] || slides[0];

  const handleUpdateCurrentSlide = (field: keyof BannerSlide, value: string) => {
    setSlides((prev) => {
      const copy = [...prev];
      if (copy[activeSlideIndex]) {
        copy[activeSlideIndex] = {
          ...copy[activeSlideIndex],
          [field]: value
        };
      }
      return copy;
    });
  };

  const handleAddSlide = () => {
    const newSlide: BannerSlide = {
      id: 'slide-' + Date.now(),
      badge: locale === 'en' ? 'NEW ADMISSION UPDATE' : 'INFORMASI PENERIMAAN BARU',
      title: locale === 'en' ? 'Empowering Future Leaders' : 'Mempersiapkan Pemimpin Masa Depan',
      subtitle: locale === 'en' ? 'Join our vibrant school community.' : 'Daftar sekarang untuk tahun ajaran baru di Suria Harapan School.',
      primaryCtaText: locale === 'en' ? 'Register Now' : 'Daftar Sekarang',
      primaryCtaLink: '#daftar',
      secondaryCtaText: locale === 'en' ? 'School Tour' : 'Jadwalkan Kunjungan',
      secondaryCtaLink: '#kunjungan',
      image: '/photos/campus-hero-1.jpg',
      imagePosition: '50% 15%',
      alt: 'Suria Harapan School Banner'
    };
    const updated = [...slides, newSlide];
    setSlides(updated);
    setActiveSlideIndex(updated.length - 1);
  };

  const handleDeleteSlide = (indexToDelete: number) => {
    if (slides.length <= 1) {
      alert('Minimal harus ada 1 slide banner aktif.');
      return;
    }
    if (window.confirm('Hapus slide banner ini?')) {
      const updated = slides.filter((_, idx) => idx !== indexToDelete);
      setSlides(updated);
      setActiveSlideIndex(Math.max(0, indexToDelete - 1));
    }
  };

  const handleSaveAll = () => {
    updateBannerSlides(locale, slides);
    onClose();
  };

  // Drag handlers for the banner preview canvas
  const handleBannerPointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startYRef.current = e.clientY;
    startYPercentRef.current = parseYPercent(currentSlide.imagePosition);
    setIsDraggingNow(true);
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handleBannerPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaY = e.clientY - startYRef.current;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const rawDeltaPercent = (deltaY / (rect.height || 200)) * 100;
    const newY = Math.round(Math.max(0, Math.min(100, startYPercentRef.current - rawDeltaPercent)));
    handleUpdateCurrentSlide('imagePosition', `50% ${newY}%`);
  };

  const handleBannerPointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    setIsDraggingNow(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch (_) {}
  };

  const currentY = parseYPercent(currentSlide?.imagePosition);
  const formattedPosition = currentSlide?.imagePosition && currentSlide.imagePosition.includes('%')
    ? currentSlide.imagePosition
    : `50% ${currentY}%`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-2xl shadow-2xl border border-shs-border max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-shs-border flex items-center justify-between bg-surface-container/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-600 flex items-center justify-center">
              <Icon name="view_carousel" className="text-[22px]" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-base sm:text-lg text-shs-navy">
                Kelola Slide Banner Hero ({locale.toUpperCase()})
              </h3>
              <p className="text-xs text-on-surface-variant">
                Atur judul, gambar latar, teks tombol, dan geser posisi foto secara langsung
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors cursor-pointer"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
        </div>

        {/* Top Slide Horizontal Tab Bar */}
        <div className="border-b border-shs-border px-6 py-3 bg-surface-container/20 flex items-center justify-between gap-3 overflow-x-auto shrink-0">
          <div className="flex items-center gap-2 overflow-x-auto">
            {slides.map((slide, idx) => (
              <button
                key={slide.id || idx}
                type="button"
                onClick={() => setActiveSlideIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 border ${
                  activeSlideIndex === idx
                    ? 'border-amber-500 bg-amber-400 text-shs-navy shadow-sm'
                    : 'border-shs-border bg-surface text-on-surface-variant hover:border-amber-300'
                }`}
              >
                <div className="w-5 h-5 rounded overflow-hidden bg-slate-200 shrink-0">
                  <img src={slide.image} alt="" className="w-full h-full object-cover" />
                </div>
                <span>Slide #{idx + 1}</span>
                {slides.length > 1 && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteSlide(idx);
                    }}
                    title="Hapus slide ini"
                    className="w-4 h-4 rounded hover:bg-red-500 hover:text-white flex items-center justify-center text-on-surface-variant/60"
                  >
                    <Icon name="close" className="text-[12px]" />
                  </span>
                )}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleAddSlide}
            className="px-3 py-2 rounded-xl bg-shs-navy text-white text-xs font-bold hover:bg-[#12335c] transition-colors flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
          >
            <Icon name="add" className="text-[16px] text-amber-400" />
            <span>Tambah Slide</span>
          </button>
        </div>

        {/* Spacious Form & Live Drag Canvas */}
        {currentSlide && (
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            {/* 1. Live Banner Drag Preview Box */}
            <div className="space-y-3 bg-surface-container/30 p-4 rounded-2xl border border-shs-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="drag_indicator" className="text-[18px] text-amber-600" />
                  <span className="text-xs font-bold text-shs-navy uppercase tracking-wider">
                    Pratinjau Live &amp; Drag Geser Foto Banner:
                  </span>
                </div>
                <span className="text-xs font-mono font-bold bg-amber-200 text-amber-950 px-2 py-0.5 rounded shadow-2xs">
                  Fokus Vertikal: {currentY}%
                </span>
              </div>

              {/* Interactive Drag Canvas */}
              <div
                onPointerDown={handleBannerPointerDown}
                onPointerMove={handleBannerPointerMove}
                onPointerUp={handleBannerPointerUp}
                className="w-full aspect-[21/9] sm:aspect-[16/7] rounded-xl overflow-hidden bg-slate-950 relative select-none cursor-ns-resize touch-none border-2 border-amber-500 shadow-md group"
                title="Klik & Drag atas-bawah langsung pada gambar banner ini"
              >
                <img
                  src={currentSlide.image}
                  alt="Banner Live Preview"
                  style={{ objectPosition: formattedPosition }}
                  className="w-full h-full object-cover transition-all duration-75"
                />

                {/* Banner Gradient Simulation */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001226]/90 via-[#00152c]/40 to-transparent pointer-events-none" />

                {/* Banner Content Simulation */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white pointer-events-none">
                  {currentSlide.badge && (
                    <span className="text-[9px] sm:text-[10px] font-bold font-mono px-2 py-0.5 bg-amber-400 text-shs-navy rounded-full w-fit mb-1 shadow-xs">
                      {currentSlide.badge}
                    </span>
                  )}
                  <h4 className="font-headline font-bold text-sm sm:text-lg line-clamp-1 drop-shadow">
                    {currentSlide.title || 'Judul Banner'}
                  </h4>
                  {currentSlide.subtitle && (
                    <p className="text-[11px] sm:text-xs text-slate-200 line-clamp-1 drop-shadow">
                      {currentSlide.subtitle}
                    </p>
                  )}
                </div>

                {/* Center Drag Badge */}
                <div className="absolute top-3 right-3 z-10 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1 border border-white/20 shadow">
                    <Icon name="open_with" className="text-[14px] text-amber-400" />
                    <span>Drag gambar atas/bawah</span>
                  </span>
                </div>

                {isDraggingNow && (
                  <div className="absolute inset-0 bg-shs-navy/30 flex items-center justify-center z-20 pointer-events-none">
                    <div className="px-4 py-2 rounded-xl bg-amber-400 text-shs-navy font-black text-sm shadow-xl animate-scale-in">
                      Posisi Fokus: {currentY}%
                    </div>
                  </div>
                )}
              </div>

              {/* Slider & Quick Buttons Row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center pt-1">
                {/* Vertical Slider */}
                <div className="sm:col-span-7 flex flex-col gap-1 bg-surface p-2.5 rounded-xl border border-shs-border">
                  <div className="flex items-center justify-between text-xs font-bold text-shs-navy">
                    <span>Slider Posisi Vertikal:</span>
                    <span className="font-mono text-amber-700">{currentY}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentY}
                    onChange={(e) => handleUpdateCurrentSlide('imagePosition', `50% ${e.target.value}%`)}
                    className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-on-surface-variant">
                    <span>0% (Atas)</span>
                    <span>50% (Tengah)</span>
                    <span>100% (Bawah)</span>
                  </div>
                </div>

                {/* Quick Presets & Change Photo Button */}
                <div className="sm:col-span-5 flex flex-col gap-2">
                  <div className="flex items-center gap-1 bg-surface p-1 rounded-xl border border-shs-border justify-between">
                    <button
                      type="button"
                      onClick={() => handleUpdateCurrentSlide('imagePosition', '50% 12%')}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex-1 text-center ${
                        currentY <= 25 ? 'bg-amber-400 text-shs-navy shadow-xs' : 'hover:bg-surface-container text-on-surface'
                      }`}
                    >
                      Atas (12%)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleUpdateCurrentSlide('imagePosition', '50% 50%')}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex-1 text-center ${
                        currentY > 25 && currentY < 75 ? 'bg-amber-400 text-shs-navy shadow-xs' : 'hover:bg-surface-container text-on-surface'
                      }`}
                    >
                      Tengah (50%)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleUpdateCurrentSlide('imagePosition', '50% 85%')}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer flex-1 text-center ${
                        currentY >= 75 ? 'bg-amber-400 text-shs-navy shadow-xs' : 'hover:bg-surface-container text-on-surface'
                      }`}
                    >
                      Bawah (85%)
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsImagePickerOpen(true)}
                    className="py-2 px-3 rounded-xl bg-shs-navy hover:bg-[#12335c] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Icon name="photo_camera" className="text-[16px] text-amber-400" />
                    <span>Ganti Foto dari Galeri / Upload</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Text Content Inputs */}
            <div className="space-y-4">
              {/* Badge Text */}
              <div>
                <label className="block text-xs font-bold text-shs-navy uppercase tracking-wider mb-1.5">
                  Label Badge Atas
                </label>
                <input
                  type="text"
                  value={currentSlide.badge}
                  onChange={(e) => handleUpdateCurrentSlide('badge', e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 rounded-xl border border-shs-border bg-surface focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-shs-navy uppercase tracking-wider mb-1.5">
                  Judul Utama Banner
                </label>
                <input
                  type="text"
                  value={currentSlide.title}
                  onChange={(e) => handleUpdateCurrentSlide('title', e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 rounded-xl border border-shs-border bg-surface focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Subtitle */}
              <div>
                <label className="block text-xs font-bold text-shs-navy uppercase tracking-wider mb-1.5">
                  Deskripsi / Subtitle
                </label>
                <textarea
                  rows={2}
                  value={currentSlide.subtitle}
                  onChange={(e) => handleUpdateCurrentSlide('subtitle', e.target.value)}
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 rounded-xl border border-shs-border bg-surface focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                />
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-shs-navy uppercase tracking-wider mb-1.5">
                    Teks Tombol Utama (CTA 1)
                  </label>
                  <input
                    type="text"
                    value={currentSlide.primaryCtaText}
                    onChange={(e) => handleUpdateCurrentSlide('primaryCtaText', e.target.value)}
                    className="w-full text-xs sm:text-sm py-2.5 px-3.5 rounded-xl border border-shs-border bg-surface focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-shs-navy uppercase tracking-wider mb-1.5">
                    Teks Tombol Kedua (CTA 2)
                  </label>
                  <input
                    type="text"
                    value={currentSlide.secondaryCtaText || ''}
                    onChange={(e) => handleUpdateCurrentSlide('secondaryCtaText', e.target.value)}
                    className="w-full text-xs sm:text-sm py-2.5 px-3.5 rounded-xl border border-shs-border bg-surface focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-shs-border bg-surface-container/40 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="py-2.5 px-4 rounded-xl border border-shs-border text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
          >
            Tutup
          </button>
          <button
            type="button"
            onClick={handleSaveAll}
            className="py-2.5 px-6 rounded-xl bg-amber-500 text-shs-navy text-xs font-bold hover:bg-amber-400 transition-colors shadow-sm cursor-pointer flex items-center gap-1.5"
          >
            <Icon name="save" className="text-[16px]" />
            <span>Simpan Perubahan Banner</span>
          </button>
        </div>
      </div>

      {/* Image Picker Child Modal */}
      <ImageUploadModal
        isOpen={isImagePickerOpen}
        currentImage={currentSlide?.image || ''}
        currentPosition={currentSlide?.imagePosition || '50% 15%'}
        onClose={() => setIsImagePickerOpen(false)}
        onSelectImage={(newUrl) => {
          handleUpdateCurrentSlide('image', newUrl);
          setIsImagePickerOpen(false);
        }}
        title="Pilih Foto Latar Banner Hero"
      />
    </div>
  );
};
