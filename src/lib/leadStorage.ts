import { LeadFormData, StoredLead } from '../types';
import { normalizeWhatsAppNumber } from './whatsapp';
import { getStoredUTM } from './utm';

const LEADS_STORAGE_KEY = 'shs_psb_admission_leads_v1';

export function getStoredLeads(): StoredLead[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Error reading stored leads:', err);
    return [];
  }
}

export function saveLead(formData: LeadFormData): StoredLead {
  const existing = getStoredLeads();
  const utm = getStoredUTM();
  
  const newLead: StoredLead = {
    ...formData,
    id: 'LEAD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase(),
    created_at: new Date().toISOString(),
    whatsapp_normalized: normalizeWhatsAppNumber(formData.whatsapp),
    status: 'NEW',
    source: formData.source || utm.source || 'direct',
    medium: formData.medium || utm.medium,
    campaign: formData.campaign || utm.campaign,
    content: formData.content || utm.content,
    term: formData.term || utm.term,
    landing_url: formData.landing_url || utm.landing_url,
    referrer: formData.referrer || utm.referrer
  };

  const updated = [newLead, ...existing];
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving lead to storage:', err);
  }

  return newLead;
}

export function updateLeadStatus(id: string, status: StoredLead['status']): void {
  const leads = getStoredLeads();
  const index = leads.findIndex(l => l.id === id);
  if (index !== -1) {
    leads[index].status = status;
    try {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
    } catch (err) {
      console.error('Error updating lead status:', err);
    }
  }
}

export function clearStoredLeads(): void {
  try {
    localStorage.removeItem(LEADS_STORAGE_KEY);
  } catch (err) {
    console.error('Error clearing leads:', err);
  }
}

export function exportLeadsToCSV(leads: StoredLead[]): void {
  if (leads.length === 0) return;

  const headers = [
    'Lead ID',
    'Date Submitted',
    'Parent Name',
    'WhatsApp',
    'WhatsApp Normalized',
    'Email',
    'Student Name',
    'Current School',
    'Level',
    'Grade',
    'Academic Year',
    'Interest',
    'Notes',
    'Locale',
    'Status',
    'UTM Source',
    'UTM Medium',
    'UTM Campaign'
  ];

  const rows = leads.map(l => [
    l.id,
    new Date(l.created_at).toLocaleString('id-ID'),
    `"${(l.parent_name || '').replace(/"/g, '""')}"`,
    `"${l.whatsapp}"`,
    `"${l.whatsapp_normalized}"`,
    `"${l.email || ''}"`,
    `"${(l.student_name || '').replace(/"/g, '""')}"`,
    `"${(l.current_school || '').replace(/"/g, '""')}"`,
    `"${l.level}"`,
    `"${l.grade}"`,
    `"${l.academic_year}"`,
    `"${l.interest}"`,
    `"${(l.notes || '').replace(/"/g, '""')}"`,
    l.locale || 'id',
    l.status,
    l.source || '',
    l.medium || '',
    l.campaign || ''
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `SHS_PSB_Leads_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
