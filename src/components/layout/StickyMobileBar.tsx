import React from 'react';
import { Icon } from '../ui/Icon';
import { Locale } from '../../types';
import { buildWhatsAppLink } from '../../lib/whatsapp';

interface StickyMobileBarProps {
  locale: Locale;
  startAdmissionLabel: string;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  locale,
  startAdmissionLabel
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-surface/95 backdrop-blur-md p-3 px-4 border-t border-shs-border shadow-[0_-4px_16px_rgba(0,0,0,0.06)] flex items-center gap-3">
      <a
        href={buildWhatsAppLink('general', locale)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-12 rounded-lg border border-shs-border bg-surface-container-lowest text-shs-navy text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-container transition-all active:scale-98"
      >
        <Icon name="chat" className="text-[18px] text-[#25D366]" />
        <span>WhatsApp</span>
      </a>
      <a
        href="#daftar"
        className="flex-[1.5] h-12 rounded-lg bg-shs-navy text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 hover:bg-[#12335c] transition-all active:scale-98 shadow-sm"
      >
        <span>{startAdmissionLabel}</span>
        <Icon name="arrow_forward" className="text-[16px] text-secondary-container" />
      </a>
    </div>
  );
};
