import React, { useState, useEffect } from 'react';
import { Icon } from '../ui/Icon';
import { ContentDictionary, LeadFormData, Locale, StoredLead } from '../../types';
import { saveLead } from '../../lib/leadStorage';
import { EditableText } from '../editor/EditableText';

interface LeadFormSectionProps {
  content: ContentDictionary['form'];
  locale: Locale;
  presetLevel?: string;
  presetInterest?: string;
  onSubmissionSuccess: (lead: StoredLead) => void;
}

export const LeadFormSection: React.FC<LeadFormSectionProps> = ({
  content,
  locale,
  presetLevel,
  presetInterest,
  onSubmissionSuccess
}) => {
  const [parentName, setParentName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [studentName, setStudentName] = useState('');
  const [currentSchool, setCurrentSchool] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('Primary');
  const [selectedGrade, setSelectedGrade] = useState('Grade 1');
  const [academicYear, setAcademicYear] = useState('2027/2028');
  const [selectedInterest, setSelectedInterest] = useState('admission_info');
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(true);
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync preset if passed
  useEffect(() => {
    if (presetLevel) {
      if (presetLevel.toLowerCase().includes('early')) {
        setSelectedLevel('Early Learning');
      } else if (presetLevel.toLowerCase().includes('secondary')) {
        setSelectedLevel('Secondary');
      } else {
        setSelectedLevel('Primary');
      }
    }
  }, [presetLevel]);

  useEffect(() => {
    if (presetInterest) {
      setSelectedInterest(presetInterest);
    }
  }, [presetInterest]);

  // Update grade options when level changes
  const currentLevelConfig =
    content.levelOptions.find(l => l.id.toLowerCase() === selectedLevel.toLowerCase()) ||
    content.levelOptions[0];

  useEffect(() => {
    if (currentLevelConfig && currentLevelConfig.grades.length > 0) {
      setSelectedGrade(currentLevelConfig.grades[0]);
    }
  }, [selectedLevel]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!parentName.trim()) {
      errs.parentName = content.validationErrors.required;
    }

    const cleanedWA = whatsapp.replace(/[\s\-\+\(\)]/g, '');
    if (!cleanedWA || cleanedWA.length < 9 || !/^\d+$/.test(cleanedWA)) {
      errs.whatsapp = content.validationErrors.invalidWhatsapp;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = content.validationErrors.invalidEmail;
    }

    if (!studentName.trim()) {
      errs.studentName = content.validationErrors.required;
    }

    if (!selectedLevel) {
      errs.level = content.validationErrors.levelRequired;
    }

    if (!selectedGrade) {
      errs.grade = content.validationErrors.required;
    }

    if (!consent) {
      errs.consent = content.validationErrors.consentRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (honeypot) {
      console.warn('Bot submission blocked');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const formData: LeadFormData = {
      parent_name: parentName.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim() || undefined,
      student_name: studentName.trim(),
      current_school: currentSchool.trim() || undefined,
      level: selectedLevel,
      grade: selectedGrade,
      academic_year: academicYear,
      interest: selectedInterest,
      notes: notes.trim() || undefined,
      consent: consent,
      locale: locale
    };

    setTimeout(() => {
      try {
        const storedLead = saveLead(formData);
        setIsSubmitting(false);
        onSubmissionSuccess(storedLead);
      } catch (err) {
        console.error('Submission failed:', err);
        setIsSubmitting(false);
        alert(content.errorToast);
      }
    }, 400);
  };

  return (
    <section className="w-full bg-[#0e2a47] text-white py-10 sm:py-14 lg:py-16 border-t border-primary-container" id="daftar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Story, Next Steps & Trust Badges */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-on-primary reveal-on-scroll">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block">
                <EditableText section="form" field="eyebrow" value={content.eyebrow} />
              </span>
              <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                <EditableText section="form" field="title" value={content.title} />
              </h2>
              <p className="text-sm sm:text-base text-on-primary-container leading-relaxed">
                <EditableText section="form" field="intro" value={content.intro} multiline />
              </p>
            </div>

            {/* Next Steps preview */}
            <div className="flex flex-col gap-3.5 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                <EditableText section="form" field="stepsTitle" value={content.stepsTitle} />
              </span>
              <div className="flex flex-col gap-3">
                {content.steps.map((st, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="font-headline text-lg font-bold text-amber-300 leading-none mt-0.5">
                      <EditableText section="form" subpath={`steps.${i}.number`} value={st.number} />
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        <EditableText section="form" subpath={`steps.${i}.title`} value={st.title} />
                      </h4>
                      <p className="text-xs text-on-primary-container mt-0.5">
                        <EditableText section="form" subpath={`steps.${i}.desc`} value={st.desc} multiline />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust highlights */}
            <div className="space-y-4 pt-2 border-t border-white/15">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
                  <Icon name="schedule" className="text-[20px]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    <EditableText section="form" subpath="trustBadges.fastResponseTitle" value={content.trustBadges.fastResponseTitle} />
                  </p>
                  <p className="text-xs text-on-primary-container">
                    <EditableText section="form" subpath="trustBadges.fastResponseDesc" value={content.trustBadges.fastResponseDesc} />
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
                  <Icon name="lock" className="text-[20px]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    <EditableText section="form" subpath="trustBadges.privacyTitle" value={content.trustBadges.privacyTitle} />
                  </p>
                  <p className="text-xs text-on-primary-container">
                    <EditableText section="form" subpath="trustBadges.privacyDesc" value={content.trustBadges.privacyDesc} />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Form Container with Amber Top Accent */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl text-neutral-800 border-t-4 border-amber-400 border-x border-b border-shs-border reveal-scale reveal-delay-200 overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
              {/* Spam honeypot hidden field */}
              <input
                type="text"
                name="school_website_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none', position: 'absolute', opacity: 0 }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Row 1: Parent Name & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs sm:text-sm text-shs-navy font-bold block mb-1.5">
                    <EditableText section="form" subpath="labels.parentName" value={content.labels.parentName} />
                  </label>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => {
                      setParentName(e.target.value);
                      if (errors.parentName) setErrors({ ...errors, parentName: '' });
                    }}
                    placeholder={content.labels.parentNamePlaceholder}
                    className={`w-full h-11 sm:h-12 px-3.5 rounded-lg bg-surface border ${
                      errors.parentName ? 'border-red-500' : 'border-shs-border'
                    } text-xs sm:text-sm text-on-surface focus:border-shs-navy`}
                  />
                  {errors.parentName && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.parentName}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs sm:text-sm text-shs-navy font-bold block mb-1.5">
                    <EditableText section="form" subpath="labels.whatsapp" value={content.labels.whatsapp} />
                  </label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => {
                      setWhatsapp(e.target.value);
                      if (errors.whatsapp) setErrors({ ...errors, whatsapp: '' });
                    }}
                    placeholder={content.labels.whatsappPlaceholder}
                    className={`w-full h-11 sm:h-12 px-3.5 rounded-lg bg-surface border ${
                      errors.whatsapp ? 'border-red-500' : 'border-shs-border'
                    } text-xs sm:text-sm text-on-surface focus:border-shs-navy`}
                  />
                  {errors.whatsapp && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.whatsapp}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Student Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs sm:text-sm text-shs-navy font-bold block mb-1.5">
                    <EditableText section="form" subpath="labels.email" value={content.labels.email} />
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder={content.labels.emailPlaceholder}
                    className={`w-full h-11 sm:h-12 px-3.5 rounded-lg bg-surface border ${
                      errors.email ? 'border-red-500' : 'border-shs-border'
                    } text-xs sm:text-sm text-on-surface focus:border-shs-navy`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-xs sm:text-sm text-shs-navy font-bold block mb-1.5">
                    <EditableText section="form" subpath="labels.studentName" value={content.labels.studentName} />
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => {
                      setStudentName(e.target.value);
                      if (errors.studentName) setErrors({ ...errors, studentName: '' });
                    }}
                    placeholder={content.labels.studentNamePlaceholder}
                    className={`w-full h-11 sm:h-12 px-3.5 rounded-lg bg-surface border ${
                      errors.studentName ? 'border-red-500' : 'border-shs-border'
                    } text-xs sm:text-sm text-on-surface focus:border-shs-navy`}
                  />
                  {errors.studentName && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.studentName}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Current School */}
              <div>
                <label className="text-xs sm:text-sm text-shs-navy font-bold block mb-1.5">
                  <EditableText section="form" subpath="labels.currentSchool" value={content.labels.currentSchool} />
                </label>
                <input
                  type="text"
                  value={currentSchool}
                  onChange={(e) => setCurrentSchool(e.target.value)}
                  placeholder={content.labels.currentSchoolPlaceholder}
                  className="w-full h-11 sm:h-12 px-3.5 rounded-lg bg-surface border border-shs-border text-xs sm:text-sm text-on-surface focus:border-shs-navy"
                />
              </div>

              {/* Level Selector Radio Tiles */}
              <div>
                <label className="text-xs sm:text-sm text-shs-navy font-bold block mb-2">
                  <EditableText section="form" subpath="labels.level" value={content.labels.level} />
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  {content.levelOptions.map((opt, optIdx) => (
                    <label
                      key={opt.id}
                      className={`flex items-center gap-2 px-2.5 sm:px-2 md:px-2.5 lg:px-3 py-2.5 sm:py-3 rounded-xl border cursor-pointer transition-all ${
                        selectedLevel.toLowerCase() === opt.id.toLowerCase()
                          ? 'border-shs-navy bg-surface-container-high text-shs-navy shadow-xs font-bold ring-1 ring-shs-navy/20'
                          : 'border-shs-border bg-surface text-on-surface-variant hover:bg-surface-container'
                      }`}
                    >
                      <input
                        type="radio"
                        name="education_level_choice"
                        value={opt.id}
                        checked={selectedLevel.toLowerCase() === opt.id.toLowerCase()}
                        onChange={() => setSelectedLevel(opt.id)}
                        className="accent-shs-navy shrink-0 w-3.5 h-3.5 cursor-pointer"
                      />
                      <span className="text-xs sm:text-[11px] md:text-xs lg:text-xs xl:text-sm font-semibold leading-tight">
                        <EditableText section="form" subpath={`levelOptions.${optIdx}.label`} value={opt.label} />
                      </span>
                    </label>
                  ))}
                </div>
                {errors.level && (
                  <p className="text-[11px] text-red-500 mt-1">{errors.level}</p>
                )}
              </div>

              {/* Dynamic Grade & Academic Year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs sm:text-sm text-shs-navy font-bold block mb-1.5">
                    <EditableText section="form" subpath="labels.grade" value={content.labels.grade} />
                  </label>
                  <select
                    value={selectedGrade}
                    onChange={(e) => {
                      setSelectedGrade(e.target.value);
                      if (errors.grade) setErrors({ ...errors, grade: '' });
                    }}
                    className="w-full h-11 sm:h-12 px-3.5 rounded-lg bg-surface border border-shs-border text-xs sm:text-sm text-on-surface focus:border-shs-navy font-medium"
                  >
                    {currentLevelConfig.grades.map((g, idx) => (
                      <option key={idx} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs sm:text-sm text-shs-navy font-bold block mb-1.5">
                    <EditableText section="form" subpath="labels.academicYear" value={content.labels.academicYear} />
                  </label>
                  <input
                    type="text"
                    value={academicYear}
                    onChange={(e) => setAcademicYear(e.target.value)}
                    className="w-full h-11 sm:h-12 px-3.5 rounded-lg bg-surface border border-shs-border text-xs sm:text-sm text-on-surface focus:border-shs-navy font-medium"
                  />
                </div>
              </div>

              {/* Interest Options Radio Grid */}
              <div>
                <label className="text-xs sm:text-sm text-shs-navy font-bold block mb-2">
                  <EditableText section="form" subpath="labels.interest" value={content.labels.interest} />
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {content.interestOptions.map((opt, optIdx) => (
                    <label
                      key={opt.id}
                      className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedInterest === opt.id
                          ? 'border-shs-navy bg-surface-container-high text-shs-navy shadow-xs font-bold'
                          : 'border-shs-border bg-surface text-on-surface-variant hover:bg-surface-container'
                      }`}
                    >
                      <input
                        type="radio"
                        name="interest_intent"
                        value={opt.id}
                        checked={selectedInterest === opt.id}
                        onChange={() => setSelectedInterest(opt.id)}
                        className="accent-shs-navy shrink-0 cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm whitespace-nowrap">
                        <EditableText section="form" subpath={`interestOptions.${optIdx}.label`} value={opt.label} />
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs sm:text-sm text-shs-navy font-bold block mb-1.5">
                  <EditableText section="form" subpath="labels.notes" value={content.labels.notes} />
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={content.labels.notesPlaceholder}
                  className="w-full p-3 rounded-lg bg-surface border border-shs-border text-xs sm:text-sm text-on-surface focus:border-shs-navy"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 accent-shs-navy rounded cursor-pointer"
                  />
                  <span className="text-xs text-on-surface-variant leading-snug">
                    <EditableText section="form" subpath="labels.consent" value={content.labels.consent} />
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[11px] text-red-500 mt-1">{errors.consent}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-13 sm:h-14 rounded-xl bg-shs-navy text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2 hover:bg-[#12335c] transition-all shadow-md active:scale-99 disabled:opacity-75 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>{content.labels.submitting}</span>
                ) : (
                  <span>
                    <EditableText section="form" subpath="labels.submitBtn" value={content.labels.submitBtn} />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
