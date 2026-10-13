import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icon';
import { StoredLead, ContentDictionary } from '../../types';
import { getStoredLeads, updateLeadStatus, clearStoredLeads, exportLeadsToCSV } from '../../lib/leadStorage';
import { useLiveContent } from '../../context/LiveContentContext';

interface AdminLeadsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  content: ContentDictionary['adminDrawer'];
}

const MASTER_PIN = '202728';

export const AdminLeadsDrawer: React.FC<AdminLeadsDrawerProps> = ({
  isOpen,
  onClose,
  content
}) => {
  const { isEditorMode } = useLiveContent();
  const [leads, setLeads] = useState<StoredLead[]>([]);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('shs_admin_leads_session') === 'true';
    }
    return false;
  });

  const [pin, setPin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockCountdown, setLockCountdown] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const refreshLeads = () => {
    setLeads(getStoredLeads());
  };

  useEffect(() => {
    if (isOpen) {
      // If already logged in to editor mode, grant access
      if (isEditorMode) {
        setIsAdminAuthenticated(true);
        sessionStorage.setItem('shs_admin_leads_session', 'true');
      }
      refreshLeads();
      setPin('');
      setErrorMsg('');
      if (!isAdminAuthenticated && !isEditorMode) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
    }
  }, [isOpen, isEditorMode, isAdminAuthenticated]);

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) return;

    if (!pin.trim()) {
      setErrorMsg('Silakan masukkan PIN otorisasi admisi');
      return;
    }

    if (pin.trim() === MASTER_PIN) {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('shs_admin_leads_session', 'true');
      setErrorMsg('');
      setPin('');
      refreshLeads();
    } else {
      const nextAttempts = attempts + 1;
      setAttempts(nextAttempts);
      if (nextAttempts >= 3) {
        setIsLocked(true);
        setLockCountdown(30);
        setErrorMsg('Terlalu banyak percobaan salah. Akses dikunci selama 30 detik.');
      } else {
        setErrorMsg(`PIN salah. Percobaan ${nextAttempts} dari 3.`);
      }
      setPin('');
      inputRef.current?.focus();
    }
  };

  const handleLogout = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('shs_admin_leads_session');
  };

  const handleStatusChange = (id: string, newStatus: StoredLead['status']) => {
    updateLeadStatus(id, newStatus);
    refreshLeads();
  };

  const handleClear = () => {
    if (window.confirm('Yakin ingin menghapus semua riwayat data lead lokal? Tindakan ini tidak dapat dibatalkan.')) {
      clearStoredLeads();
      refreshLeads();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-shs-navy/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 w-full max-w-4xl bg-surface shadow-2xl flex flex-col justify-between border-l border-shs-border border-t-2 border-amber-400 animate-fade-in">
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-surface-container border-b border-shs-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-shs-navy text-white flex items-center justify-center font-bold shadow-xs">
              <Icon name="admin_panel_settings" className="text-[22px]" />
            </div>
            <div>
              <h3 className="font-headline text-lg sm:text-xl font-bold text-shs-navy">
                {content.title}
              </h3>
              <p className="text-xs text-on-surface-variant">{content.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdminAuthenticated && (
              <>
                <button
                  type="button"
                  onClick={() => exportLeadsToCSV(leads)}
                  disabled={leads.length === 0}
                  className="px-3.5 py-2 rounded-lg bg-shs-forest text-white text-xs font-bold inline-flex items-center gap-1.5 hover:bg-[#16523e] transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                >
                  <Icon name="download" className="text-[16px]" />
                  <span>{content.exportCsv}</span>
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  title="Kunci & Keluar dari Console"
                  className="px-3 py-2 rounded-lg bg-surface-container-high border border-shs-border text-on-surface-variant hover:text-red-700 hover:bg-red-50 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Icon name="lock" className="text-[16px]" />
                  <span className="hidden sm:inline">Kunci</span>
                </button>
              </>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-lg text-on-surface-variant hover:bg-surface-container-high flex items-center justify-center cursor-pointer"
            >
              <Icon name="close" className="text-[20px]" />
            </button>
          </div>
        </div>

        {/* Content Body: Protected by PIN */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 flex flex-col">
          {!isAdminAuthenticated ? (
            /* PIN Challenge Screen */
            <div className="my-auto max-w-md mx-auto w-full p-6 sm:p-8 bg-surface-container/30 border border-shs-border rounded-2xl text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4 shadow-xs">
                <Icon name="lock" className="text-[28px]" />
              </div>
              <h4 className="font-headline font-bold text-lg text-shs-navy mb-1">
                Akses Terproteksi
              </h4>
              <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                Data calon siswa dan pendaftar bersifat rahasia. Masukkan <strong>PIN Master Admisi</strong> untuk membuka konsol data.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
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
                    className="w-full text-center tracking-[0.4em] font-mono text-2xl py-3 px-4 rounded-xl border border-shs-border bg-surface focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-xs disabled:opacity-50"
                  />
                  <Icon name="key" className="absolute right-3.5 top-1/2 -translate-y-1/2  text-outline text-[20px] pointer-events-none" />
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 text-left">
                    <Icon name="error" className="text-[18px] shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {isLocked && (
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
                    Coba lagi dalam {lockCountdown} detik...
                  </div>
                )}

                <div className="flex gap-3 pt-1">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-shs-border text-xs font-semibold text-on-surface-variant hover:bg-surface-container cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={isLocked || !pin}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-shs-navy text-white text-xs font-bold hover:bg-[#12335c] transition-all disabled:opacity-50 shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Icon name="lock_open" className="text-[18px]" />
                    <span>Buka Data</span>
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-4 border-t border-shs-border text-[11px] text-outline flex items-center justify-between">
                <span>Suria Harapan School</span>
                <span className="font-semibold text-amber-600">PIN: 202728</span>
              </div>
            </div>
          ) : leads.length === 0 ? (
            /* Authenticated: Empty Leads State */
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-on-surface-variant my-auto">
              <Icon name="inbox" className="text-[48px] text-outline-variant mb-2" />
              <p className="text-sm font-bold text-shs-navy">{content.noLeads}</p>
              <p className="text-xs text-on-surface-variant mt-1 max-w-sm">
                Isi formulir PSB di landing page untuk melihat data calon siswa baru masuk secara real-time di sini.
              </p>
            </div>
          ) : (
            /* Authenticated: Leads Table/Cards List */
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-on-surface-variant pb-2 border-b border-shs-border">
                <span>
                  Total Calon Siswa: <strong>{leads.length} Data Pendaftar</strong>
                </span>
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-red-600 hover:text-red-800 hover:underline text-xs font-semibold cursor-pointer flex items-center gap-1"
                >
                  <Icon name="delete_sweep" className="text-[15px]" />
                  <span>{content.clearLeads}</span>
                </button>
              </div>

              <div className="space-y-3">
                {leads.map((l) => (
                  <div
                    key={l.id}
                    className="p-4 rounded-xl bg-surface-container-lowest border border-shs-border shadow-xs hover:border-amber-400/60 transition-all flex flex-col gap-3"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm sm:text-base font-bold text-shs-navy">
                            {l.student_name}
                          </h4>
                          <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-950 text-xs font-semibold border border-amber-300/60">
                            {l.level} - {l.grade}
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant mt-0.5">
                          Orang Tua: <strong>{l.parent_name}</strong> {l.email && `• ${l.email}`}
                        </p>
                      </div>

                      {/* Status Dropdown */}
                      <select
                        value={l.status}
                        onChange={(e) =>
                          handleStatusChange(l.id, e.target.value as StoredLead['status'])
                        }
                        className={`text-xs font-bold px-2.5 py-1.5 rounded-lg border cursor-pointer ${
                          l.status === 'NEW'
                            ? 'bg-amber-50 text-amber-900 border-amber-300'
                            : l.status === 'CONTACTED'
                            ? 'bg-blue-50 text-blue-900 border-blue-300'
                            : l.status === 'ENROLLED'
                            ? 'bg-green-50 text-green-900 border-green-300'
                            : 'bg-gray-50 text-gray-800 border-gray-300'
                        }`}
                      >
                        <option value="NEW">NEW (Baru)</option>
                        <option value="CONTACTED">CONTACTED (Dihubungi)</option>
                        <option value="SCHOOL_VISIT">SCHOOL VISIT (Kunjungan)</option>
                        <option value="INTERESTED">INTERESTED (Tertarik)</option>
                        <option value="APPLIED">APPLIED (Berkas Masuk)</option>
                        <option value="ENROLLED">ENROLLED (Terdaftar Resmi)</option>
                        <option value="NO_RESPONSE">NO RESPONSE</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-2.5 border-t border-shs-border/60">
                      <div>
                        <span className="text-[10px] text-on-surface-variant block uppercase font-bold">WhatsApp:</span>
                        <a
                          href={`https://wa.me/${l.whatsapp_normalized}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] font-bold hover:underline inline-flex items-center gap-1"
                        >
                          <span>{l.whatsapp}</span>
                          <Icon name="open_in_new" className="text-[14px]" />
                        </a>
                      </div>
                      <div>
                        <span className="text-[10px] text-on-surface-variant block uppercase font-bold">Kebutuhan:</span>
                        <span className="font-semibold text-shs-navy">{l.interest}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-on-surface-variant block uppercase font-bold">Waktu Masuk:</span>
                        <span className="text-on-surface-variant">
                          {new Date(l.created_at).toLocaleString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-on-surface-variant block uppercase font-bold">Sumber/UTM:</span>
                        <span className="text-on-surface-variant truncate block" title={l.source}>
                          {l.source || 'direct'}
                        </span>
                      </div>
                    </div>

                    {l.notes && (
                      <p className="text-xs bg-surface-container/60 p-2.5 rounded-lg text-on-surface-variant italic border border-shs-border/40">
                        Catatan Orang Tua: "{l.notes}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-surface-container border-t border-shs-border flex justify-between items-center">
          <span className="text-xs text-on-surface-variant">
            {isAdminAuthenticated ? 'Sesi Admisi Aktif' : 'Akses Terkunci'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-shs-navy text-white text-xs font-bold hover:bg-[#12335c] transition-all cursor-pointer"
          >
            {content.close}
          </button>
        </div>
      </div>
    </div>
  );
};
