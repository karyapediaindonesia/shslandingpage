import React, { useState, useEffect } from 'react';
import { Icon } from '../ui/Icon';

interface ImageUploadModalProps {
  isOpen: boolean;
  currentImage: string;
  currentPosition?: string;
  onClose: () => void;
  onSelectImage: (newUrl: string, newPosition?: string) => void;
  title?: string;
}

const PRESET_PHOTOS = [
  { label: 'Tim Pramuka & Laptop (Perpustakaan)', src: '/images/photo-8.jpg' },
  { label: 'Global Learning & Buku Geografi', src: '/images/photo-16.png' },
  { label: 'Tim Lab Sains & Riset', src: '/images/photo-10.png' },
  { label: 'Pemain Tim Basket SHS (#10)', src: '/images/photo-19.png' },
  { label: 'Siswa-Siswi TK / Early Childhood', src: '/images/photo-14.png' },
  { label: 'Siswa Primary Aktif di Kelas', src: '/images/photo-5.png' },
  { label: 'Siswa Secondary & Laptop', src: '/images/photo-15.png' },
  { label: 'Duet Siswa Pemain Biola', src: '/images/photo-2.png' },
  { label: 'Siswi Buku Sastra (Perpustakaan)', src: '/images/photo-4.png' },
  { label: 'Siswi Praktikum Kimia Lab', src: '/images/photo-7.png' },
  { label: 'Kelas Kreatif & Dekorasi Kapal', src: '/images/photo-11.png' },
  { label: 'Siswi Belajar di Perpustakaan', src: '/images/photo-1.png' },
  { label: 'Siswa & Siswi Eksplorasi Globe', src: '/images/photo-3.png' },
  { label: 'Interaksi Kelas & Guru', src: '/images/photo-6.png' },
  { label: 'Siswi Primary Belajar Laptop', src: '/images/photo-9.png' },
  { label: 'Siswi Fokus Menulis', src: '/images/photo-12.png' },
  { label: 'Siswi Ceria Angkat Tangan', src: '/images/photo-13.png' },
  { label: 'Siswa Secondary & Globe (Portrait)', src: '/images/photo-17.png' },
  { label: 'Siswa Secondary & Globe (Landscape)', src: '/images/photo-18.png' },
  { label: 'Logo Resmi SHS', src: '/shs-logo.png' }
];

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  isOpen,
  currentImage,
  currentPosition,
  onClose,
  onSelectImage,
  title = 'Pilih / Ganti Foto'
}) => {
  const [activeTab, setActiveTab] = useState<'presets' | 'upload' | 'url'>('presets');
  const [selectedUrl, setSelectedUrl] = useState<string>(currentImage);
  const [customUrl, setCustomUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedUrl(currentImage);
      setCustomUrl('');
      setActiveTab('presets');
    }
  }, [isOpen, currentImage]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setSelectedUrl(result);
      }
      setIsUploading(false);
    };
    reader.onerror = () => {
      alert('Gagal membaca file gambar.');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleApply = () => {
    const finalUrl = activeTab === 'url' && customUrl.trim() ? customUrl.trim() : selectedUrl;
    if (finalUrl) {
      onSelectImage(finalUrl, currentPosition);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-2xl shadow-2xl border border-shs-border max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-shs-border flex items-center justify-between bg-surface-container/40">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-600 flex items-center justify-center">
              <Icon name="photo_library" className="text-[22px]" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-base sm:text-lg text-shs-navy">
                {title}
              </h3>
              <p className="text-xs text-on-surface-variant">
                Pilih foto dari galeri sekolah atau upload foto baru dari perangkat Anda
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

        {/* Tab Selection */}
        <div className="flex border-b border-shs-border px-6 bg-surface">
          <button
            type="button"
            onClick={() => setActiveTab('presets')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'presets'
                ? 'border-amber-500 text-shs-navy'
                : 'border-transparent text-on-surface-variant hover:text-shs-navy'
            }`}
          >
            <Icon name="collections" className="text-[16px]" />
            <span>Galeri Foto SHS ({PRESET_PHOTOS.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'upload'
                ? 'border-amber-500 text-shs-navy'
                : 'border-transparent text-on-surface-variant hover:text-shs-navy'
            }`}
          >
            <Icon name="upload_file" className="text-[16px]" />
            <span>Upload dari Perangkat</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('url')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'url'
                ? 'border-amber-500 text-shs-navy'
                : 'border-transparent text-on-surface-variant hover:text-shs-navy'
            }`}
          >
            <Icon name="link" className="text-[16px]" />
            <span>Input URL Gambar</span>
          </button>
        </div>

        {/* Spacious Single-Pane Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'presets' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
              {PRESET_PHOTOS.map((preset, idx) => {
                const isSelected = selectedUrl === preset.src;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedUrl(preset.src)}
                    className={`group relative rounded-xl overflow-hidden border-2 text-left transition-all cursor-pointer aspect-[4/3] bg-surface-container ${
                      isSelected
                        ? 'border-amber-500 ring-4 ring-amber-400/40 shadow-lg scale-[0.98]'
                        : 'border-shs-border hover:border-amber-400/70 hover:shadow-md'
                    }`}
                  >
                    <img
                      src={preset.src}
                      alt={preset.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/shs-logo.png';
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-2.5 text-white">
                      <p className="text-[11px] font-semibold truncate">{preset.label}</p>
                    </div>
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg">
                        <Icon name="check" className="text-[16px]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {activeTab === 'upload' && (
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-shs-border rounded-2xl p-12 bg-surface-container/30 hover:bg-surface-container/50 transition-colors text-center">
              <Icon name="add_photo_alternate" className="text-[56px] text-amber-500 mb-3" />
              <p className="text-base font-bold text-shs-navy mb-1">
                Pilih file foto dari komputer / laptop Anda
              </p>
              <p className="text-xs text-on-surface-variant mb-6">
                Mendukung format JPG, PNG, WEBP hingga 5MB
              </p>
              <label className="py-3 px-6 rounded-xl bg-shs-navy text-white text-xs font-bold hover:bg-[#12335c] transition-colors cursor-pointer shadow-md flex items-center gap-2">
                <Icon name="folder_open" className="text-[18px]" />
                <span>{isUploading ? 'Memproses...' : 'Browse File Foto'}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          )}

          {activeTab === 'url' && (
            <div className="space-y-4 max-w-lg mx-auto py-6">
              <div>
                <label className="block text-xs font-bold text-shs-navy uppercase tracking-wider mb-2">
                  Alamat URL Gambar Web
                </label>
                <input
                  type="url"
                  value={customUrl}
                  onChange={(e) => {
                    setCustomUrl(e.target.value);
                    setSelectedUrl(e.target.value);
                  }}
                  placeholder="https://domain.com/path-to-photo.jpg"
                  className="w-full text-sm py-3 px-4 rounded-xl border border-shs-border bg-surface-container/30 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <p className="text-xs text-on-surface-variant mt-2">
                  Pastikan link URL gambar dapat diakses secara publik.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-shs-border bg-surface-container/40 flex items-center justify-between">
          <span className="text-xs text-on-surface-variant truncate max-w-xs font-mono">
            {selectedUrl.split('/').pop() || selectedUrl}
          </span>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl border border-shs-border text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={handleApply}
              disabled={!selectedUrl && !customUrl}
              className="py-2.5 px-6 rounded-xl bg-amber-500 text-shs-navy text-xs font-bold hover:bg-amber-400 transition-colors shadow-sm disabled:opacity-50 cursor-pointer flex items-center gap-1.5"
            >
              <Icon name="check_circle" className="text-[16px]" />
              <span>Gunakan Foto Ini</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
