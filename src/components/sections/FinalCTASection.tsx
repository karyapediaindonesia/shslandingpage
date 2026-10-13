import React, { useState } from 'react';
import { Icon } from '../ui/Icon';
import { ContentDictionary, Locale } from '../../types';
import { buildWhatsAppLink } from '../../lib/whatsapp';
import { EditableText } from '../editor/EditableText';
import { useLiveContent } from '../../context/LiveContentContext';

interface FinalCTASectionProps {
  content: ContentDictionary['finalCta'];
  locale: Locale;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ content, locale }) => {
  const { isEditorMode, updateText } = useLiveContent();
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const [mapEmbedQuery, setMapEmbedQuery] = useState(
    content.mapEmbedQuery || 'Suria Harapan School Jambi'
  );
  const [mapPinLabel, setMapPinLabel] = useState(
    content.mapPinLabel || 'Suria Harapan School • Jambi'
  );
  const [mapGoogleUrl, setMapGoogleUrl] = useState(
    content.mapGoogleUrl || 'https://www.google.com/maps/search/?api=1&query=Suria+Harapan+School+Jambi'
  );
  const [mapDirectionsUrl, setMapDirectionsUrl] = useState(
    content.mapDirectionsUrl || 'https://www.google.com/maps/dir/?api=1&destination=Suria+Harapan+School+Jambi'
  );

  React.useEffect(() => {
    setMapEmbedQuery(content.mapEmbedQuery || 'Suria Harapan School Jambi');
    setMapPinLabel(content.mapPinLabel || 'Suria Harapan School • Jambi');
    setMapGoogleUrl(content.mapGoogleUrl || 'https://www.google.com/maps/search/?api=1&query=Suria+Harapan+School+Jambi');
    setMapDirectionsUrl(content.mapDirectionsUrl || 'https://www.google.com/maps/dir/?api=1&destination=Suria+Harapan+School+Jambi');
  }, [content]);

  const handleSaveMapSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateText(locale, 'finalCta', 'mapEmbedQuery', mapEmbedQuery);
    updateText(locale, 'finalCta', 'mapPinLabel', mapPinLabel);
    updateText(locale, 'finalCta', 'mapGoogleUrl', mapGoogleUrl);
    updateText(locale, 'finalCta', 'mapDirectionsUrl', mapDirectionsUrl);
    setIsMapModalOpen(false);
  };

  const iframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    content.mapEmbedQuery || 'Suria Harapan School Jambi'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="w-full bg-surface-container-high py-10 sm:py-14 lg:py-16 border-t border-shs-border" id="lokasi-sekolah">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Top: Next Steps CTA Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 sm:pb-12 border-b border-shs-border/80 reveal-on-scroll">
          <div className="max-w-2xl flex flex-col gap-2.5">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block">
              <EditableText section="finalCta" field="eyebrow" value={content.eyebrow} />
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-shs-navy tracking-tight leading-tight">
              <EditableText section="finalCta" field="title" value={content.title} />
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              <EditableText section="finalCta" field="description" value={content.description} multiline />
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            <a
              href="#daftar"
              className="h-13 sm:h-14 px-8 rounded-xl bg-shs-navy text-white text-sm sm:text-base font-bold inline-flex items-center justify-center hover:bg-[#12335c] transition-all shadow-sm active:scale-98"
            >
              <EditableText section="finalCta" field="primaryCta" value={content.primaryCta} />
            </a>
            <a
              href={buildWhatsAppLink('general', locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="h-13 sm:h-14 px-7 rounded-xl border border-shs-navy/30 bg-surface-container-lowest text-shs-navy text-sm sm:text-base font-semibold inline-flex items-center justify-center gap-2 hover:bg-surface transition-colors"
            >
              <Icon name="chat" className="text-[20px] text-[#25D366]" />
              <EditableText section="finalCta" field="secondaryCta" value={content.secondaryCta} />
            </a>
          </div>
        </div>

        {/* Bottom: School Location & Interactive Google Maps */}
        <div className="bg-surface rounded-2xl sm:rounded-3xl border border-shs-border shadow-md overflow-hidden reveal-scale reveal-delay-150">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: School Info & Address Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r border-shs-border bg-surface">
              <div className="flex flex-col gap-5">
                {/* Section Tag */}
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
                    <EditableText section="finalCta" field="mapBadge" value={content.mapBadge} />
                  </span>
                </div>

                <div>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-shs-navy tracking-tight">
                    <EditableText section="finalCta" field="mapLocationTitle" value={content.mapLocationTitle} />
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                    <EditableText section="finalCta" field="mapLocationSubtitle" value={content.mapLocationSubtitle} multiline />
                  </p>
                </div>

                {/* Info List */}
                <div className="space-y-4 pt-2">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-800 mt-0.5">
                      <Icon name="location_on" className="text-[18px]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary block">
                        <EditableText section="finalCta" field="mapAddressLabel" value={content.mapAddressLabel} />
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-on-surface leading-snug mt-0.5">
                        <EditableText section="finalCta" field="mapAddressValue" value={content.mapAddressValue} multiline />
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-container border border-shs-border flex items-center justify-center shrink-0 text-shs-navy mt-0.5">
                      <Icon name="schedule" className="text-[18px]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary block">
                        <EditableText section="finalCta" field="mapHoursLabel" value={content.mapHoursLabel} />
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-on-surface leading-snug mt-0.5">
                        <EditableText section="finalCta" field="mapHoursValue" value={content.mapHoursValue} multiline />
                      </p>
                    </div>
                  </div>

                  {/* Phone & WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-container border border-shs-border flex items-center justify-center shrink-0 text-shs-navy mt-0.5">
                      <Icon name="call" className="text-[18px]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary block">
                        <EditableText section="finalCta" field="mapContactLabel" value={content.mapContactLabel || (locale === 'en' ? 'School Contact / Phone & WhatsApp' : 'Kontak Sekolah / Telepon & WhatsApp')} />
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-on-surface leading-snug mt-0.5">
                        <EditableText section="finalCta" field="mapContactValue" value={content.mapContactValue || '(0741) 789012 • +62 812-7890-1234'} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2.5 pt-4 border-t border-shs-border">
                <a
                  href={content.mapGoogleUrl || 'https://www.google.com/maps/search/?api=1&query=Suria+Harapan+School+Jambi'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-shs-navy text-white text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 hover:bg-[#12335c] transition-all shadow-sm"
                >
                  <Icon name="map" className="text-[18px]" />
                  <span>
                    <EditableText section="finalCta" field="mapOpenInGoogleMaps" value={content.mapOpenInGoogleMaps} />
                  </span>
                  <Icon name="open_in_new" className="text-[14px]" />
                </a>
                <a
                  href={content.mapDirectionsUrl || 'https://www.google.com/maps/dir/?api=1&destination=Suria+Harapan+School+Jambi'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl border border-shs-border bg-surface-container text-shs-navy text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors"
                >
                  <Icon name="directions" className="text-[18px] text-amber-600" />
                  <span>
                    <EditableText section="finalCta" field="mapGetDirections" value={content.mapGetDirections} />
                  </span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Google Map Embed with Live Edit Trigger */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[420px] lg:min-h-full bg-surface-container-low flex group">
              <iframe
                title="Peta Lokasi Suria Harapan School Jambi"
                src={iframeSrc}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[360px] sm:min-h-[420px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Top Floating Overlay Tag */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-md border border-shs-border flex items-center gap-2 pointer-events-auto">
                <Icon name="pin_drop" className="text-[18px] text-red-600" />
                <span className="text-xs font-bold text-shs-navy">
                  <EditableText section="finalCta" field="mapPinLabel" value={content.mapPinLabel || 'Suria Harapan School • Jambi'} />
                </span>
              </div>

              {/* Editor Mode Quick Edit Map Overlay Button */}
              {isEditorMode && (
                <div className="absolute bottom-4 right-4 z-20">
                  <button
                    type="button"
                    onClick={() => setIsMapModalOpen(true)}
                    className="py-2 px-3.5 rounded-xl bg-amber-500 text-shs-navy text-xs font-black shadow-lg hover:bg-amber-400 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Icon name="edit_location_alt" className="text-[16px]" />
                    <span>Edit Pengaturan Peta &amp; URL</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Settings Modal */}
      {isMapModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsMapModalOpen(false)}
        >
          <div
            className="bg-surface rounded-2xl shadow-2xl border border-shs-border max-w-lg w-full p-6 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-shs-border mb-4">
              <div className="flex items-center gap-2">
                <Icon name="map" className="text-amber-500 text-[22px]" />
                <h3 className="font-headline font-bold text-lg text-shs-navy">
                  Edit Pengaturan Peta &amp; Lokasi
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsMapModalOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-surface-container flex items-center justify-center text-on-surface-variant cursor-pointer"
              >
                <Icon name="close" className="text-[20px]" />
              </button>
            </div>

            <form onSubmit={handleSaveMapSettings} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-shs-navy uppercase tracking-wider mb-1">
                  Nama / Alamat Pencarian Peta (Search Query)
                </label>
                <input
                  type="text"
                  value={mapEmbedQuery}
                  onChange={(e) => setMapEmbedQuery(e.target.value)}
                  placeholder="Contoh: Suria Harapan School Jambi"
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 rounded-xl border border-shs-border bg-surface-container/30 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <p className="text-[11px] text-on-surface-variant mt-1">
                  Peta Google Maps interaktif akan otomatis mencari lokasi sesuai kata kunci ini.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-shs-navy uppercase tracking-wider mb-1">
                  Label Pin Lokasi di Peta
                </label>
                <input
                  type="text"
                  value={mapPinLabel}
                  onChange={(e) => setMapPinLabel(e.target.value)}
                  placeholder="Contoh: Suria Harapan School • Jambi"
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 rounded-xl border border-shs-border bg-surface-container/30 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-shs-navy uppercase tracking-wider mb-1">
                  URL Tombol "Buka di Google Maps"
                </label>
                <input
                  type="url"
                  value={mapGoogleUrl}
                  onChange={(e) => setMapGoogleUrl(e.target.value)}
                  placeholder="https://www.google.com/maps/search/..."
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 rounded-xl border border-shs-border bg-surface-container/30 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-shs-navy uppercase tracking-wider mb-1">
                  URL Tombol "Petunjuk Arah"
                </label>
                <input
                  type="url"
                  value={mapDirectionsUrl}
                  onChange={(e) => setMapDirectionsUrl(e.target.value)}
                  placeholder="https://www.google.com/maps/dir/..."
                  className="w-full text-xs sm:text-sm py-2.5 px-3.5 rounded-xl border border-shs-border bg-surface-container/30 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-shs-border">
                <button
                  type="button"
                  onClick={() => setIsMapModalOpen(false)}
                  className="py-2 px-4 rounded-xl border border-shs-border text-xs font-semibold text-on-surface-variant hover:bg-surface-container cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="py-2 px-5 rounded-xl bg-amber-500 text-shs-navy text-xs font-bold hover:bg-amber-400 shadow-sm cursor-pointer flex items-center gap-1.5"
                >
                  <Icon name="save" className="text-[16px]" />
                  <span>Simpan Pengaturan Peta</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
