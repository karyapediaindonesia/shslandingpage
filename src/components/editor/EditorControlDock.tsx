import React, { useState, useRef } from 'react';
import { Icon } from '../ui/Icon';
import { useLiveContent } from '../../context/LiveContentContext';
import { BannerManagerModal } from './BannerManagerModal';

export const EditorControlDock: React.FC = () => {
  const {
    isEditorMode,
    locale,
    setLocale,
    logoutEditor,
    resetToDefaults,
    exportContentJSON,
    importContentJSON
  } = useLiveContent();

  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [saveToast, setSaveToast] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isEditorMode) return null;

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (text) {
        const success = importContentJSON(text);
        if (success) {
          alert('Data konten berhasil di-import!');
        } else {
          alert('Format file JSON tidak valid.');
        }
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const showSaveSuccess = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  return (
    <>
      {/* Toast Notification for Autosave */}
      {saveToast && (
        <div className="fixed top-24 right-6 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-xs font-bold animate-fade-in">
          <Icon name="check_circle" className="text-[18px]" />
          <span>Perubahan tersimpan otomatis di perangkat!</span>
        </div>
      )}

      {/* Floating Bottom Dock */}
      <aside
        aria-label="Editor Controls"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-45 max-w-[95vw] sm:max-w-4xl w-auto transition-all duration-300"
      >
        <div className="bg-[#0c1f36]/95 backdrop-blur-md text-white border-2 border-amber-400/80 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.4)] px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2 sm:gap-3">
          {/* Status Indicator */}
          <div className="flex items-center gap-2 pr-2 sm:pr-3 border-r border-white/20 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <div className="hidden sm:block">
              <span className="text-[11px] font-black tracking-wider text-amber-300 uppercase block leading-none">
                Live Editor Aktif
              </span>
              <span className="text-[9px] text-white/70 leading-none">Klik teks/foto untuk ubah</span>
            </div>
          </div>

          {!isCollapsed ? (
            <>
              {/* Language Switcher */}
              <div className="flex items-center bg-white/10 rounded-lg p-0.5 border border-white/10 text-xs font-bold shrink-0">
                <button
                  type="button"
                  onClick={() => setLocale('id')}
                  className={`px-2 py-1 rounded cursor-pointer transition-colors ${
                    locale === 'id'
                      ? 'bg-amber-400 text-shs-navy font-black shadow-xs'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => setLocale('en')}
                  className={`px-2 py-1 rounded cursor-pointer transition-colors ${
                    locale === 'en'
                      ? 'bg-amber-400 text-shs-navy font-black shadow-xs'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Banner Manager Button */}
              <button
                type="button"
                onClick={() => setIsBannerModalOpen(true)}
                className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-shs-navy text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                title="Kelola Hero Banner Slides"
              >
                <Icon name="view_carousel" className="text-[16px]" />
                <span className="hidden md:inline">Kelola Banner</span>
              </button>

              {/* Export Backup JSON */}
              <button
                type="button"
                onClick={() => {
                  exportContentJSON();
                  showSaveSuccess();
                }}
                className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                title="Download file backup JSON seluruh data situs"
              >
                <Icon name="download" className="text-[16px]" />
                <span className="hidden lg:inline">Backup JSON</span>
              </button>

              {/* Import Backup JSON */}
              <label
                className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                title="Restore data dari file backup JSON"
              >
                <Icon name="upload" className="text-[16px]" />
                <span className="hidden lg:inline">Restore</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json"
                  onChange={handleImportFile}
                  className="hidden"
                />
              </label>

              {/* Reset to Default */}
              <button
                type="button"
                onClick={resetToDefaults}
                className="p-1.5 rounded-lg hover:bg-red-500/20 text-red-300 hover:text-red-200 transition-colors shrink-0 cursor-pointer"
                title="Reset kembali ke teks & foto asli bawaan"
              >
                <Icon name="restart_alt" className="text-[18px]" />
              </button>

              {/* Exit Editor Mode */}
              <button
                type="button"
                onClick={logoutEditor}
                className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-shs-navy text-xs font-extrabold transition-all shadow-sm flex items-center gap-1 shrink-0 cursor-pointer"
                title="Selesai dan keluar dari mode editor"
              >
                <Icon name="logout" className="text-[16px]" />
                <span>Selesai & Kunci</span>
              </button>
            </>
          ) : null}

          {/* Minimize / Maximize Dock Button */}
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors shrink-0 cursor-pointer ml-auto"
            title={isCollapsed ? 'Buka Panel Kontrol' : 'Ciutkan Panel Kontrol'}
          >
            <Icon name={isCollapsed ? 'expand_less' : 'expand_more'} className="text-[18px]" />
          </button>
        </div>
      </aside>

      {/* Hero Banner Modal */}
      <BannerManagerModal
        isOpen={isBannerModalOpen}
        onClose={() => setIsBannerModalOpen(false)}
      />
    </>
  );
};
