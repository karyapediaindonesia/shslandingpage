import React, { useEffect } from 'react';
import { Icon } from './Icon';

interface ImageLightboxProps {
  isOpen: boolean;
  src: string;
  caption: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  src,
  caption,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all z-10"
        aria-label="Close photo preview"
      >
        <Icon name="close" className="text-[26px]" />
      </button>

      <div
        className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={caption}
          className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/20"
        />
        {caption && (
          <p className="text-white text-xs sm:text-sm font-medium mt-3 text-center max-w-xl bg-black/40 px-4 py-1.5 rounded-full border border-white/10">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};
