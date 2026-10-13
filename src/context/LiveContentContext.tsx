import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, ContentDictionary, BannerSlide } from '../types';
import { contentId as defaultContentId } from '../content/id';
import { contentEn as defaultContentEn } from '../content/en';

const STORAGE_KEY = 'shs_live_content_store_v7';
const MASTER_PIN = '202728';

// Clear all legacy stores so visitors with cached previous versions (e.g. v1-v6)
// are immediately purged and receive the clean, official content defaults.
if (typeof window !== 'undefined') {
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (
        k &&
        (k.startsWith('shs_live_content_store_') ||
         k.startsWith('shs_live_image_positions_'))
      ) {
        keysToRemove.push(k);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  } catch (_) {}
}

interface LiveContentContextType {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  content: ContentDictionary;
  contentId: ContentDictionary;
  contentEn: ContentDictionary;
  isEditorMode: boolean;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  loginEditor: (pin: string) => { success: boolean; error?: string };
  logoutEditor: () => void;
  updateText: (locale: Locale, section: keyof ContentDictionary, field: string, value: string) => void;
  updateNestedText: (locale: Locale, section: keyof ContentDictionary, subpath: string, value: string) => void;
  updateBannerSlides: (locale: Locale, slides: BannerSlide[]) => void;
  imagePositions: Record<string, string>;
  updateImagePosition: (locale: Locale, section: keyof ContentDictionary, fieldOrSubpath: string, position: string) => void;
  getImagePosition: (locale: Locale, section: keyof ContentDictionary, fieldOrSubpath?: string) => string | undefined;
  resetToDefaults: () => void;
  exportContentJSON: () => void;
  importContentJSON: (jsonStr: string) => boolean;
}

const LiveContentContext = createContext<LiveContentContextType | undefined>(undefined);

export const LiveContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang === 'en' || urlLang === 'id') return urlLang;
      if (window.location.pathname.startsWith('/id')) return 'id';
      if (window.location.pathname.startsWith('/en')) return 'en';
      const savedLang = localStorage.getItem('shs_preferred_lang');
      if (savedLang === 'en' || savedLang === 'id') return savedLang;
    }
    return 'en'; // Default to English (EN) on initial visit
  });

  const [contentId, setContentId] = useState<ContentDictionary>(() => {
    if (typeof window !== 'undefined') {
      try {
        const isEditorActive = sessionStorage.getItem('shs_editor_session_active') === 'true';
        if (isEditorActive) {
          const saved = localStorage.getItem(STORAGE_KEY + '_id');
          if (saved) return JSON.parse(saved);
        }
      } catch (e) {
        console.error('Failed to load saved ID content', e);
      }
    }
    return defaultContentId;
  });

  const [contentEn, setContentEn] = useState<ContentDictionary>(() => {
    if (typeof window !== 'undefined') {
      try {
        const isEditorActive = sessionStorage.getItem('shs_editor_session_active') === 'true';
        if (isEditorActive) {
          const saved = localStorage.getItem(STORAGE_KEY + '_en');
          if (saved) return JSON.parse(saved);
        }
      } catch (e) {
        console.error('Failed to load saved EN content', e);
      }
    }
    return defaultContentEn;
  });

  const [isEditorMode, setIsEditorMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.removeItem('shs_editor_session_active');
      } catch (_) {}
    }
    return false;
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Save to localStorage ONLY when live editor mode is active
  useEffect(() => {
    if (isEditorMode) {
      try {
        localStorage.setItem(STORAGE_KEY + '_id', JSON.stringify(contentId));
      } catch (e) {
        console.error('Failed to save ID content', e);
      }
    }
  }, [contentId, isEditorMode]);

  useEffect(() => {
    if (isEditorMode) {
      try {
        localStorage.setItem(STORAGE_KEY + '_en', JSON.stringify(contentEn));
      } catch (e) {
        console.error('Failed to save EN content', e);
      }
    }
  }, [contentEn, isEditorMode]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('shs_preferred_lang', newLocale);
      } catch (_) {}
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);
      window.history.replaceState({}, '', url.toString());
      document.documentElement.lang = newLocale;
    }
  };

  const loginEditor = (pin: string) => {
    if (pin.trim() === MASTER_PIN) {
      setIsEditorMode(true);
      sessionStorage.setItem('shs_editor_session_active', 'true');
      setIsAuthModalOpen(false);
      return { success: true };
    }
    return { success: false, error: 'PIN Master tidak valid. Silakan coba lagi.' };
  };

  const logoutEditor = () => {
    setIsEditorMode(false);
    sessionStorage.removeItem('shs_editor_session_active');
  };

  const updateText = (
    targetLocale: Locale,
    section: keyof ContentDictionary,
    field: string,
    value: string
  ) => {
    const setter = targetLocale === 'id' ? setContentId : setContentEn;
    setter((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] as Record<string, unknown>),
        [field]: value
      }
    }));
  };

  const updateNestedText = (
    targetLocale: Locale,
    section: keyof ContentDictionary,
    subpath: string,
    value: string
  ) => {
    const setter = targetLocale === 'id' ? setContentId : setContentEn;
    setter((prev) => {
      const cloned = JSON.parse(JSON.stringify(prev));
      const parts = [section as string, ...subpath.split('.')];
      let curr: any = cloned;
      for (let i = 0; i < parts.length - 1; i++) {
        const key = parts[i];
        if (!curr[key]) curr[key] = {};
        curr = curr[key];
      }
      curr[parts[parts.length - 1]] = value;
      return cloned;
    });
  };

  const updateBannerSlides = (targetLocale: Locale, slides: BannerSlide[]) => {
    const setter = targetLocale === 'id' ? setContentId : setContentEn;
    setter((prev) => ({
      ...prev,
      heroBanner: {
        ...prev.heroBanner,
        slides
      }
    }));
  };

  const [imagePositions, setImagePositions] = useState<Record<string, string>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const isEditorActive = sessionStorage.getItem('shs_editor_session_active') === 'true';
        if (isEditorActive) {
          const saved = localStorage.getItem('shs_live_image_positions_v2');
          if (saved) return JSON.parse(saved);
        }
      } catch (e) {
        console.error('Failed to load saved image positions', e);
      }
    }
    return {};
  });

  // Save image positions ONLY when live editor mode is active
  useEffect(() => {
    if (isEditorMode) {
      try {
        localStorage.setItem('shs_live_image_positions_v2', JSON.stringify(imagePositions));
      } catch (e) {
        console.error('Failed to save image positions', e);
      }
    }
  }, [imagePositions, isEditorMode]);

  const updateImagePosition = (
    targetLocale: Locale,
    section: keyof ContentDictionary,
    fieldOrSubpath: string,
    position: string
  ) => {
    const key = `${targetLocale}_${String(section)}_${fieldOrSubpath}`;
    setImagePositions((prev) => ({
      ...prev,
      [key]: position
    }));

    // Also update directly in the content state if appropriate field/subpath exists
    if (fieldOrSubpath.includes('.')) {
      const posSubpath = fieldOrSubpath.endsWith('.image')
        ? fieldOrSubpath.replace(/\.image$/, '.imagePosition')
        : `${fieldOrSubpath}Position`;
      updateNestedText(targetLocale, section, posSubpath, position);
    } else {
      const posField = fieldOrSubpath.endsWith('Position')
        ? fieldOrSubpath
        : `${fieldOrSubpath}Position`;
      updateText(targetLocale, section, posField, position);
    }
  };

  const getImagePosition = (
    targetLocale: Locale,
    section: keyof ContentDictionary,
    fieldOrSubpath?: string
  ): string | undefined => {
    if (!fieldOrSubpath) return undefined;
    const key = `${targetLocale}_${String(section)}_${fieldOrSubpath}`;
    return imagePositions[key];
  };

  const resetToDefaults = () => {
    if (window.confirm('Kembalikan seluruh teks, gambar, dan tata letak ke versi resmi bawaan sekolah?')) {
      setContentId(defaultContentId);
      setContentEn(defaultContentEn);
      setImagePositions({});
      localStorage.removeItem(STORAGE_KEY + '_id');
      localStorage.removeItem(STORAGE_KEY + '_en');
      localStorage.removeItem('shs_live_image_positions_v2');
    }
  };

  const exportContentJSON = () => {
    const data = {
      version: '1.1',
      exportedAt: new Date().toISOString(),
      school: 'Suria Harapan School',
      contentId,
      contentEn,
      imagePositions
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shs_landing_content_backup_' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importContentJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.contentId && parsed.contentEn) {
        setContentId(parsed.contentId);
        setContentEn(parsed.contentEn);
        if (parsed.imagePositions) {
          setImagePositions(parsed.imagePositions);
        }
        return true;
      }
      return false;
    } catch (e) {
      console.error('Import error:', e);
      return false;
    }
  };

  const content = locale === 'en' ? contentEn : contentId;

  return (
    <LiveContentContext.Provider
      value={{
        locale,
        setLocale,
        content,
        contentId,
        contentEn,
        isEditorMode,
        isAuthModalOpen,
        openAuthModal: () => setIsAuthModalOpen(true),
        closeAuthModal: () => setIsAuthModalOpen(false),
        loginEditor,
        logoutEditor,
        updateText,
        updateNestedText,
        updateBannerSlides,
        imagePositions,
        updateImagePosition,
        getImagePosition,
        resetToDefaults,
        exportContentJSON,
        importContentJSON
      }}
    >
      {children}
    </LiveContentContext.Provider>
  );
};

export function useLiveContent() {
  const context = useContext(LiveContentContext);
  if (!context) {
    throw new Error('useLiveContent must be used within a LiveContentProvider');
  }
  return context;
}
