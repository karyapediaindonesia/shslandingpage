export interface UTMParams {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  referrer?: string;
  landing_url?: string;
}

const STORAGE_KEY = 'shs_psb_utm_data';

export function captureUTM(): UTMParams {
  if (typeof window === 'undefined') return {};

  try {
    // Check if already captured in sessionStorage
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }

    const urlParams = new URLSearchParams(window.location.search);
    const utm: UTMParams = {
      source: urlParams.get('utm_source') || undefined,
      medium: urlParams.get('utm_medium') || undefined,
      campaign: urlParams.get('utm_campaign') || undefined,
      content: urlParams.get('utm_content') || undefined,
      term: urlParams.get('utm_term') || undefined,
      referrer: document.referrer || undefined,
      landing_url: window.location.href
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
    return utm;
  } catch (e) {
    console.error('Error capturing UTM:', e);
    return {};
  }
}

export function getStoredUTM(): UTMParams {
  if (typeof window === 'undefined') return {};
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}
