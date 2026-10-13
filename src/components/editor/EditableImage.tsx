import React, { useState, useRef } from 'react';
import { Icon } from '../ui/Icon';
import { useLiveContent } from '../../context/LiveContentContext';
import { ContentDictionary } from '../../types';
import { ImageUploadModal } from './ImageUploadModal';

interface EditableImageProps {
  section: keyof ContentDictionary;
  field?: string;
  subpath?: string;
  src: string;
  alt: string;
  position?: string;
  positionField?: string;
  positionSubpath?: string;
  className?: string;
  imgClassName?: string;
  onImageClick?: () => void;
  title?: string;
}

function parseYPercent(posStr?: string): number {
  if (!posStr) return 50;
  const match = posStr.match(/(\d+)%/);
  if (match) return parseInt(match[1], 10);
  if (posStr.includes('top')) return 15;
  if (posStr.includes('bottom')) return 85;
  return 50;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  section,
  field,
  subpath,
  src,
  alt,
  position,
  positionField,
  positionSubpath,
  className = '',
  imgClassName = '',
  onImageClick,
  title = 'Ganti Foto'
}) => {
  const { isEditorMode, locale, updateText, updateNestedText, updateImagePosition, getImagePosition } = useLiveContent();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDraggingNow, setIsDraggingNow] = useState(false);
  const [liveDragPercent, setLiveDragPercent] = useState<number | null>(null);

  const identifier = subpath || field || '';
  const contextPos = getImagePosition(locale, section, identifier);
  const resolvedPosition = contextPos || position || '50% 20%';

  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);
  const startPosPercentRef = useRef(50);
  const hasMovedRef = useRef(false);

  const applyPosition = (newPos: string) => {
    if (positionSubpath) {
      updateNestedText(locale, section, positionSubpath, newPos);
    } else if (positionField) {
      updateText(locale, section, positionField, newPos);
    }
    updateImagePosition(locale, section, identifier, newPos);
  };

  const handleSelectImage = (newUrl: string, newPosition?: string) => {
    if (subpath) {
      updateNestedText(locale, section, subpath, newUrl);
    } else if (field) {
      updateText(locale, section, field, newUrl);
    }

    if (newPosition) {
      applyPosition(newPosition);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('.editor-toolbar-ignore')) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startYRef.current = e.clientY;
    startPosPercentRef.current = parseYPercent(resolvedPosition);
    setIsDraggingNow(true);
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaY = e.clientY - startYRef.current;
    if (Math.abs(deltaY) > 3) {
      hasMovedRef.current = true;
    }
    if (!hasMovedRef.current) return;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    // Dragging down moves image content down / focuses upper area
    const rawDeltaPercent = (deltaY / (rect.height || 200)) * 100;
    const newY = Math.round(Math.max(0, Math.min(100, startPosPercentRef.current - rawDeltaPercent)));
    setLiveDragPercent(newY);
    applyPosition(`50% ${newY}%`);
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

  const isAbsolute = className.includes('absolute');
  const basePosClass = isAbsolute ? '' : 'relative';

  if (!isEditorMode) {
    return (
      <div className={`${basePosClass} w-full h-full overflow-hidden ${className}`}>
        <img
          src={src}
          alt={alt}
          style={{ objectPosition: resolvedPosition }}
          className={`w-full h-full object-cover ${imgClassName}`}
          onClick={onImageClick}
        />
      </div>
    );
  }

  const currentY = parseYPercent(resolvedPosition);

  return (
    <>
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`group/img ${basePosClass} w-full h-full overflow-hidden ${className} cursor-ns-resize select-none touch-none`}
        title="Klik & Geser (Drag) mouse atas-bawah langsung untuk atur posisi fokus foto"
      >
        <img
          src={src}
          alt={alt}
          style={{ objectPosition: resolvedPosition }}
          className={`w-full h-full object-cover ${imgClassName} transition-all duration-75 ${
            isDraggingNow ? 'brightness-105' : 'group-hover/img:brightness-95'
          }`}
        />

        {/* Live Dragging Indicator Badge */}
        {isDraggingNow && (
          <div className="absolute inset-0 bg-shs-navy/30 backdrop-blur-[1px] flex items-center justify-center z-30 pointer-events-none">
            <div className="px-4 py-2 rounded-xl bg-amber-400 text-shs-navy font-black text-sm shadow-2xl flex items-center gap-2 border-2 border-shs-navy animate-scale-in">
              <Icon name="drag_handle" className="text-[20px]" />
              <span>Titik Fokus: {liveDragPercent ?? currentY}%</span>
            </div>
          </div>
        )}

        {/* Floating Quick Action Toolbar (Positioned cleanly at the top-right / top-left corner) */}
        <div className="editor-toolbar-ignore absolute top-2 right-2 z-20 flex flex-wrap items-center gap-1 opacity-90 group-hover/img:opacity-100 transition-opacity">
          {/* Change Photo Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            className="px-2.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-shs-navy text-xs font-bold shadow-md flex items-center gap-1 cursor-pointer transition-transform active:scale-95"
            title="Pilih / Upload Foto Baru"
          >
            <Icon name="photo_camera" className="text-[15px]" />
            <span className="hidden sm:inline">Ganti Foto</span>
          </button>

          {/* Quick Preset Alignments */}
          <div className="flex items-center gap-0.5 bg-black/80 backdrop-blur-md p-0.5 rounded-lg shadow-md border border-white/20 text-white text-[10px] font-bold">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                applyPosition('50% 15%');
              }}
              title="Fokus Atas (Wajah / Kepala)"
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                currentY <= 25 ? 'bg-amber-400 text-shs-navy' : 'hover:bg-white/20 text-white'
              }`}
            >
              Atas
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                applyPosition('50% 50%');
              }}
              title="Fokus Tengah (Simetris)"
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                currentY > 25 && currentY < 75 ? 'bg-amber-400 text-shs-navy' : 'hover:bg-white/20 text-white'
              }`}
            >
              Tengah
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                applyPosition('50% 85%');
              }}
              title="Fokus Bawah (Meja / Tangan)"
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                currentY >= 75 ? 'bg-amber-400 text-shs-navy' : 'hover:bg-white/20 text-white'
              }`}
            >
              Bawah
            </button>
          </div>
        </div>

        {/* Bottom Drag Helper Hint (Appears on hover) */}
        <div className="absolute bottom-2 left-2 right-2 z-10 pointer-events-none opacity-0 group-hover/img:opacity-100 transition-opacity">
          <div className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-xs text-white text-[11px] font-medium flex items-center justify-between shadow-xs">
            <span className="flex items-center gap-1">
              <Icon name="open_with" className="text-[14px] text-amber-400" />
              <span>Drag gambar atas-bawah untuk geser</span>
            </span>
            <span className="font-mono text-amber-300 font-bold">{currentY}%</span>
          </div>
        </div>
      </div>

      <ImageUploadModal
        isOpen={isModalOpen}
        currentImage={src}
        currentPosition={resolvedPosition}
        onClose={() => setIsModalOpen(false)}
        onSelectImage={handleSelectImage}
        title={title}
      />
    </>
  );
};
