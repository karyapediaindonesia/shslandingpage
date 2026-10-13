import { Locale, InterestType } from '../types';

export const OFFICIAL_WHATSAPP_NUMBER = '6281278901234';

export function normalizeWhatsAppNumber(input: string): string {
  // Remove spaces, hyphens, plus signs, brackets
  let cleaned = input.replace(/[\s\-\+\(\)]/g, '');
  
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.substring(1);
  } else if (cleaned.startsWith('8')) {
    cleaned = '62' + cleaned;
  }
  
  return cleaned;
}

export function buildWhatsAppLink(
  type: InterestType | 'general' | 'lead_confirm' | 'tour' | 'tuition',
  locale: Locale = 'id',
  customData?: {
    parentName?: string;
    studentName?: string;
    level?: string;
    grade?: string;
    academicYear?: string;
  }
): string {
  let message = '';
  const level = customData?.level || (locale === 'id' ? 'KB/TK/SD/SMP/SMA' : 'all levels');
  const year = customData?.academicYear || '2027/2028';

  if (type === 'lead_confirm' && customData?.parentName) {
    if (locale === 'id') {
      message = `Halo Tim Admission Suria Harapan School, saya ${customData.parentName}. Saya baru saja mengirimkan formulir pendaftaran untuk ananda ${customData.studentName || ''} (${customData.level || ''} - ${customData.grade || ''}). Mohon informasi langkah selanjutnya. Terima kasih!`;
    } else {
      message = `Hello Suria Harapan School Admission Team, I am ${customData.parentName}. I just submitted an admission inquiry for my child ${customData.studentName || ''} (${customData.level || ''} - ${customData.grade || ''}). Please guide me through the next steps. Thank you!`;
    }
  } else if (type === 'tuition' || type === 'tuition_info') {
    if (locale === 'id') {
      message = `Halo Tim Admission Suria Harapan School. Saya ingin mendapatkan informasi rincian biaya untuk jenjang ${level} pada tahun ajaran ${year}. Terima kasih.`;
    } else {
      message = `Hello Suria Harapan School Admission Team. I would like to get tuition information for ${level} for the ${year} academic year. Thank you.`;
    }
  } else if (type === 'tour' || type === 'school_tour') {
    if (locale === 'id') {
      message = `Halo Tim Admission Suria Harapan School. Saya ingin mengajukan school tour untuk jenjang ${level}. Mohon informasi jadwal yang tersedia. Terima kasih.`;
    } else {
      message = `Hello Suria Harapan School Admission Team. I would like to request a school tour for ${level}. Please let me know the available schedule. Thank you.`;
    }
  } else {
    // General or start_admission
    if (locale === 'id') {
      message = `Halo Tim Admission Suria Harapan School. Saya ingin mendapatkan informasi mengenai Penerimaan Siswa Baru untuk jenjang ${level}. Mohon informasinya. Terima kasih.`;
    } else {
      message = `Hello Suria Harapan School Admission Team. I would like to get information about admission for ${level}. Thank you.`;
    }
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
