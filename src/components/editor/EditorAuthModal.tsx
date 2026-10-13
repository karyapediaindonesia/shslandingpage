import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../ui/Icon';
import { useLiveContent } from '../../context/LiveContentContext';

export const EditorAuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, loginEditor } = useLiveContent();
  const [pin, setPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockCountdown, setLockCountdown] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAuthModalOpen) {
      setPin('');
      setErrorMsg('');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isAuthModalOpen]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (lockCountdown > 0) {
      timer = setTimeout(() => {
        setLockCountdown((prev) => prev - 1);
      }, 1000);
    } else if (isLocked && lockCountdown === 0) {
      setIsLocked(false);
      setAttempts(0);
      setErrorMsg('');
    }
    return () => clearTimeout(timer);
  }, [lockCountdown, isLocked]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) return;

    if (!pin.trim()) {
      setErrorMsg('Silakan masukkan PIN otorisasi');
      return;
    }

    const res = loginEditor(pin);
    if (!res.success) {
      const nextAttempts = attempts + 1;
      setAttempts(nextAttempts);
      if (nextAttempts >= 3) {
        setIsLocked(true);
        setLockCountdown(30);
        setErrorMsg('Terlalu banyak percobaan gagal. Dikunci selama 30 detik untuk keamanan.');
      } else {
        setErrorMsg(res.error || `PIN salah. Percobaan ${nextAttempts} dari 3.`);
      }
      setPin('');
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={closeAuthModal}
    >
      <div
        className="bg-surface rounded-2xl shadow-2xl border border-shs-border max-w-md w-full p-6 sm:p-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-shs-navy" />

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
              <Icon name="shield_person" className="text-[24px]" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg text-shs-navy leading-tight">
                Mode Editor Live
              </h3>
              <p className="text-xs text-on-surface-variant">Suria Harapan School Admin</p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeAuthModal}
            className="w-8 h-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
          Masukkan <strong>PIN Master</strong> untuk membuka akses editing visual langsung, perubahan foto, dan manajemen banner pada halaman ini.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-shs-navy uppercase tracking-wider mb-2">
              PIN Master Editor
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={8}
                disabled={isLocked}
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  if (errorMsg && !isLocked) setErrorMsg('');
                }}
                placeholder="••••••"
                className="w-full text-center tracking-[0.4em] font-mono text-xl py-3 px-4 rounded-xl border border-shs-border bg-surface-container/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-surface transition-all disabled:opacity-50"
              />
              <Icon name="key" className="absolute right-3.5 top-1/2 -translate-y-1/2  text-outline text-[20px] pointer-events-none" />
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <Icon name="error" className="text-[18px] shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {isLocked && (
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold text-center">
              Coba lagi dalam {lockCountdown} detik...
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={closeAuthModal}
              className="flex-1 py-2.5 px-4 rounded-xl border border-shs-border text-xs sm:text-sm font-semibold text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isLocked || !pin}
              className="flex-1 py-2.5 px-4 rounded-xl bg-shs-navy text-white text-xs sm:text-sm font-bold hover:bg-[#12335c] transition-all disabled:opacity-50 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Icon name="lock_open" className="text-[18px]" />
              <span>Masuk Editor</span>
            </button>
          </div>
        </form>

        <div className="mt-5 pt-4 border-t border-shs-border/60 flex items-center justify-between text-[11px] text-outline">
          <span className="flex items-center gap-1">
            <Icon name="keyboard" className="text-[14px]" />
            Shortcut: <kbd className="px-1.5 py-0.5 rounded bg-surface-container border font-mono">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-surface-container border font-mono">Shift</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-surface-container border font-mono">E</kbd>
          </span>
          <span className="font-semibold text-amber-600">PIN: 202728</span>
        </div>
      </div>
    </div>
  );
};
