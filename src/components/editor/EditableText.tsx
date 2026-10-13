import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../ui/Icon';
import { useLiveContent } from '../../context/LiveContentContext';
import { ContentDictionary } from '../../types';

interface EditableTextProps {
  section: keyof ContentDictionary;
  field?: string;
  subpath?: string;
  value: string;
  multiline?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export const EditableText: React.FC<EditableTextProps> = ({
  section,
  field,
  subpath,
  value,
  multiline = false,
  className = '',
  as: Component = 'span'
}) => {
  const { isEditorMode, locale, updateText, updateNestedText } = useLiveContent();
  const [isEditing, setIsEditing] = useState(false);
  const [currentVal, setCurrentVal] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setCurrentVal(value);
  }, [value]);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing]);

  if (!isEditorMode) {
    return <Component className={className}>{value}</Component>;
  }

  const handleSave = () => {
    setIsEditing(false);
    if (currentVal !== value) {
      if (subpath) {
        updateNestedText(locale, section, subpath, currentVal);
      } else if (field) {
        updateText(locale, section, field, currentVal);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setCurrentVal(value);
      setIsEditing(false);
    }
  };

  const handleClickStart = (e: React.MouseEvent) => {
    // Prevent parent <a> or <button> navigation or click triggers
    e.preventDefault();
    e.stopPropagation();
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <span
        className="relative inline-block w-full"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={currentVal}
            onChange={(e) => setCurrentVal(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            rows={3}
            className={`w-full p-2 bg-amber-50 text-shs-navy border-2 border-amber-500 rounded-lg shadow-xl font-inherit text-inherit focus:outline-none resize-y z-30 relative ${className}`}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={currentVal}
            onChange={(e) => setCurrentVal(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className={`w-full p-1 bg-amber-50 text-shs-navy border-2 border-amber-500 rounded-md shadow-xl font-inherit text-inherit focus:outline-none z-30 relative ${className}`}
          />
        )}
      </span>
    );
  }

  return (
    <Component
      onClick={handleClickStart}
      onMouseDown={(e) => {
        // Stop mousedown bubbling so button/link active states aren't triggered
        e.stopPropagation();
      }}
      title="Klik untuk mengedit teks ini"
      className={`group relative inline-block cursor-pointer transition-all hover:outline-dashed hover:outline-2 hover:outline-amber-400 hover:bg-amber-100/40 rounded px-0.5 -mx-0.5 ${className}`}
    >
      {value}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-3 -right-3 w-5 h-5 rounded-full bg-amber-500 text-shs-navy shadow-md flex items-center justify-center pointer-events-none z-20">
        <Icon name="edit" className="text-[12px]" />
      </span>
    </Component>
  );
};
