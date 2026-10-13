# Tahap 07 — SHS PSB QA, UAT & Launch Readiness V1

**Project:** Suria Harapan School — Penerimaan Siswa Baru  
**Document Version:** V1  
**Document Type:** QA / UAT / Launch Readiness / Release Gate  
**Primary Output:** Test Plan + UAT Checklist + Defect Handling + Launch Gate  
**Scope:** Bilingual PSB Landing Page + Admission Lite  
**Status:** Ready for Final QA and Launch Preparation  

---

# 1. Purpose

Dokumen ini merupakan tahap akhir sebelum landing page PSB Suria Harapan School diluncurkan.

Tahap 07 bertujuan untuk memastikan bahwa hasil dari:

- **Tahap 01 — Blueprint**
- **Tahap 02 — Content Audit**
- **Tahap 03 — User Flow & Wireframe**
- **Tahap 04 — Creative Direction & UI Design System**
- **Tahap 05 — Final Content & Bilingual Copy**
- **Tahap 06 — Development Specification**

telah diterapkan dengan benar dan layak digunakan oleh calon orang tua dan siswa.

Tahap ini mencakup:

1. functional testing;
2. content verification;
3. bilingual QA;
4. responsive QA;
5. form testing;
6. lead database testing;
7. WhatsApp testing;
8. analytics testing;
9. SEO testing;
10. accessibility testing;
11. performance testing;
12. UAT;
13. defect classification;
14. launch gate;
15. rollback readiness;
16. post-launch monitoring.

---

# 2. QA Objective

Landing page dianggap siap launch jika:

```text
ACCURATE
+
FUNCTIONAL
+
RESPONSIVE
+
BILINGUAL
+
FAST
+
ACCESSIBLE
+
TRACKABLE
+
CONVERSION-READY
```

---

# 3. QA Principle

QA bukan hanya mencari bug visual.

QA harus memastikan:

> pengguna dapat memahami SHS, menemukan informasi PSB, melakukan inquiry, dan terhubung dengan Tim Admission tanpa hambatan.

---

# 4. Test Scope

Testing mencakup:

```text
CONTENT
UX
UI
FUNCTION
FORM
DATABASE
TRACKING
SEO
PERFORMANCE
ACCESSIBILITY
SECURITY
DEPLOYMENT
```

---

# 5. Test Environments

Recommended:

```text
LOCAL
↓
STAGING
↓
PRODUCTION
```

Semua major testing dilakukan di:

> **STAGING**

Production hanya digunakan untuk:

- smoke test;
- final analytics check;
- final form check;
- final contact check.

---

# 6. QA Roles

Suggested roles:

| Role | Responsibility |
|---|---|
| QA / Tester | Functional, responsive, regression |
| Content Reviewer | Accuracy, bilingual, factual content |
| Admission PIC | PSB flow, dates, contact, FAQ |
| Academic PIC | Curriculum, programmes, level information |
| Marketing / Brand PIC | Visual, tone, media, branding |
| Developer | Bug fixing, deployment |
| Final Approver | Launch approval |

Jika tim kecil:

> satu orang boleh memegang beberapa role, tetapi final factual approval tetap harus jelas.

---

# 7. Test Priority

Use:

```text
P0 = Critical
P1 = High
P2 = Medium
P3 = Low
```

---

# 8. Defect Severity

## Severity 1 — Critical

Contoh:

- form tidak bisa submit;
- lead tidak tersimpan;
- WhatsApp salah nomor;
- data PSB salah;
- halaman error;
- bahasa tidak muncul;
- major mobile layout broken;
- production unreachable.

Status:

> **BLOCKER**

Tidak boleh launch.

---

## Severity 2 — High

Contoh:

- CTA salah arah;
- jadwal admission salah;
- language switch gagal;
- major section tidak tampil;
- mobile menu tidak bekerja;
- analytics conversion tidak tercatat.

Status:

> **MUST FIX BEFORE LAUNCH**

---

## Severity 3 — Medium

Contoh:

- spacing kurang konsisten;
- minor copy issue;
- image crop kurang ideal;
- animation sedikit bermasalah;
- FAQ behavior minor.

Status:

> Fix before launch if possible.

---

## Severity 4 — Low

Contoh:

- micro-spacing;
- minor visual polish;
- non-critical animation refinement.

Status:

> Can move to post-launch backlog.

---

# 9. QA Entry Criteria

Testing dapat dimulai jika:

- [ ] staging URL tersedia;
- [ ] ID page complete;
- [ ] EN page complete;
- [ ] form connected;
- [ ] database connected;
- [ ] WhatsApp CTA active;
- [ ] content P0 loaded;
- [ ] analytics installed;
- [ ] major media loaded.

---

# 10. QA Exit Criteria

Testing selesai jika:

- [ ] 0 Critical defects;
- [ ] 0 High defects;
- [ ] all P0 content verified;
- [ ] form submit successful;
- [ ] leads stored correctly;
- [ ] bilingual complete;
- [ ] mobile approved;
- [ ] desktop approved;
- [ ] analytics verified;
- [ ] SEO baseline verified;
- [ ] launch approver signs off.

---

# 11. Functional Test — Navigation

Test:

- [ ] Logo clickable.
- [ ] Why SHS anchor works.
- [ ] Levels anchor works.
- [ ] Student Life anchor works.
- [ ] Admissions anchor works.
- [ ] FAQ anchor works.
- [ ] Start Admission scrolls / routes correctly.
- [ ] Sticky header works.
- [ ] Mobile menu opens.
- [ ] Mobile menu closes.
- [ ] ESC closes menu on desktop keyboard.
- [ ] Menu focus is usable.

---

# 12. Functional Test — Hero

Check:

- [ ] Hero headline displays correctly.
- [ ] Supporting copy displays correctly.
- [ ] Primary CTA works.
- [ ] Secondary CTA works.
- [ ] Video poster loads.
- [ ] Video does not block page.
- [ ] Image fallback works.
- [ ] Hero content readable on mobile.

---

# 13. Functional Test — At a Glance

Check:

- [ ] Only verified facts shown.
- [ ] Numbers are correct.
- [ ] Labels are bilingual.
- [ ] No unsupported statistic appears.
- [ ] No `[VERIFY]` text appears.

---

# 14. Functional Test — Why SHS

Check:

- [ ] All differentiators appear.
- [ ] Copy matches approved version.
- [ ] No outdated claim.
- [ ] Visual hierarchy clear.
- [ ] CTA works.

---

# 15. Functional Test — Learning Levels

Check:

- [ ] Early Learning visible.
- [ ] Primary visible.
- [ ] Secondary visible.
- [ ] Level metadata correct.
- [ ] CTA works.
- [ ] Mobile stacking works.
- [ ] Hover-only information is not required.

---

# 16. Functional Test — Learning at SHS

Check:

- [ ] Learning verbs display.
- [ ] Photo loads.
- [ ] Copy correct.
- [ ] No overflow.
- [ ] Mobile layout readable.

---

# 17. Functional Test — Beyond the Classroom

Check:

- [ ] Only active programmes shown.
- [ ] Categories are correct.
- [ ] Media matches category.
- [ ] Horizontal scroll works if used.
- [ ] No auto-carousel issue.

---

# 18. Functional Test — Life at SHS

Check:

- [ ] Real SHS media used.
- [ ] No broken image.
- [ ] Captions match media.
- [ ] No fake / generic caption.
- [ ] Mobile crop acceptable.

---

# 19. Functional Test — Trust & Achievements

Check:

- [ ] Accreditation current.
- [ ] Curriculum wording approved.
- [ ] Achievements current.
- [ ] No unsupported claim.
- [ ] Proof content readable.

---

# 20. Functional Test — Admission Journey

Check:

- [ ] Step order correct.
- [ ] Assessment step only if applicable.
- [ ] Copy matches official flow.
- [ ] Desktop timeline works.
- [ ] Mobile timeline works.
- [ ] CTA works.

---

# 21. Functional Test — Admission Timeline

Check:

- [ ] Academic year correct.
- [ ] Admission open date correct.
- [ ] Early period correct if applicable.
- [ ] Regular period correct.
- [ ] Assessment period correct.
- [ ] Enrollment date correct.
- [ ] Level tabs work if used.
- [ ] Timeline readable mobile.

---

# 22. Functional Test — School Visit

Check:

- [ ] CTA works.
- [ ] School Tour flow works.
- [ ] Inquiry interest stored as `school_tour`.
- [ ] Confirmation message correct.
- [ ] Manual follow-up process known.

---

# 23. Functional Test — FAQ

Check:

- [ ] All questions visible.
- [ ] Accordion opens.
- [ ] Accordion closes.
- [ ] Keyboard access works.
- [ ] Answer copy correct.
- [ ] No outdated fact.
- [ ] No duplicate question.

---

# 24. Functional Test — Final CTA

Check:

- [ ] Start Admission works.
- [ ] Talk to Admission works.
- [ ] CTA label correct.
- [ ] CTA tracking fires.

---

# 25. Form Test — Required Fields

Test empty submit.

Expected:

- [ ] required fields identified;
- [ ] clear error message;
- [ ] no server submission;
- [ ] focus moves logically.

---

# 26. Form Test — Valid Submission

Input valid data.

Expected:

```text
Submit
↓
Server validates
↓
Lead stored
↓
Success response
↓
Thank You
```

Check:

- [ ] one lead created;
- [ ] timestamp correct;
- [ ] status = NEW;
- [ ] locale stored;
- [ ] UTM stored;
- [ ] consent stored.

---

# 27. Form Test — Invalid WhatsApp

Test:

```text
abc
123
+62 invalid
```

Expected:

- [ ] invalid blocked;
- [ ] user-friendly message shown.

---

# 28. Form Test — WhatsApp Normalization

Test:

```text
08123456789
628123456789
+628123456789
```

Expected normalized result:

```text
628123456789
```

---

# 29. Form Test — Invalid Email

Test:

```text
name@
name.com
@domain.com
```

Expected:

- [ ] invalid email error;
- [ ] optional email may remain blank if allowed.

---

# 30. Form Test — Dynamic Grade

Test:

```text
Early Learning
Primary
Secondary
```

Expected:

- [ ] grade options change correctly;
- [ ] no impossible grade combination;
- [ ] current selection resets safely if level changes.

---

# 31. Form Test — Consent

If consent required:

- [ ] submit blocked without consent;
- [ ] copy visible;
- [ ] consent_at stored.

---

# 32. Form Test — Double Submit

Double click submit.

Expected:

- [ ] one submission;
- [ ] button disabled / loading;
- [ ] no duplicate lead.

---

# 33. Form Test — Slow Network

Simulate slow network.

Expected:

- [ ] loading state visible;
- [ ] user not confused;
- [ ] no duplicate submit;
- [ ] eventual success / error handled.

---

# 34. Form Test — Server Error

Simulate endpoint failure.

Expected:

- [ ] user sees friendly error;
- [ ] data not lost if possible;
- [ ] WhatsApp fallback available.

---

# 35. Form Test — Spam Protection

Test:

- repeated submission;
- honeypot;
- rate limit.

Expected:

- [ ] genuine user not blocked;
- [ ] obvious spam reduced.

---

# 36. Lead Database QA

Check database record:

```text
id
created_at
parent_name
whatsapp
whatsapp_normalized
email
student_name
level
grade
academic_year
interest
locale
source
medium
campaign
content
term
landing_url
referrer
status
consent_at
```

Verify:

- [ ] required data stored;
- [ ] no field swapped;
- [ ] UTF-8 text preserved;
- [ ] no accidental analytics data in wrong field.

---

# 37. Lead Privacy QA

Verify database does not collect unnecessary:

- NIK;
- family card;
- health data;
- excessive student information.

V1 must remain minimal.

---

# 38. Thank You Page QA

Check:

- [ ] success message correct;
- [ ] language matches locale;
- [ ] WhatsApp CTA works;
- [ ] back CTA works;
- [ ] noindex present;
- [ ] no form resubmission on refresh.

---

# 39. WhatsApp QA

Check:

- [ ] official number verified;
- [ ] `wa.me` link valid;
- [ ] prefilled message encoded;
- [ ] ID message correct;
- [ ] EN message correct;
- [ ] mobile opens app;
- [ ] desktop opens WhatsApp Web where available.

---

# 40. WhatsApp Tracking QA

Check:

- [ ] `whatsapp_click` event fires;
- [ ] CTA location recorded;
- [ ] message type recorded;
- [ ] no personal user data sent to analytics.

---

# 41. Bilingual QA — Navigation

Check:

- [ ] ID labels correct;
- [ ] EN labels correct;
- [ ] no mixed language;
- [ ] language switch visible;
- [ ] current locale clear.

---

# 42. Bilingual QA — Content

Check all:

```text
Hero
Why SHS
Levels
Learning
Beyond Classroom
Student Life
Trust
Admission
Timeline
School Visit
FAQ
Form
Thank You
Footer
```

Expected:

- [ ] all translated;
- [ ] no missing section;
- [ ] natural English;
- [ ] no machine-like literal translation.

---

# 43. Bilingual QA — URLs

Check:

```text
/id/admission
/en/admission
```

Verify:

- [ ] correct page language;
- [ ] canonical correct;
- [ ] hreflang correct;
- [ ] anchor preserved;
- [ ] UTM preserved.

---

# 44. Content QA — Search Terms

Search repository / production HTML for:

```text
[VERIFY:
TODO
Lorem ipsum
Coming Soon
2021/2022
```

Expected:

> zero results in production content.

---

# 45. Content QA — Critical Facts

Verify:

- [ ] school name;
- [ ] motto;
- [ ] year established;
- [ ] curriculum;
- [ ] learning levels;
- [ ] accreditation;
- [ ] academic year;
- [ ] admission dates;
- [ ] assessment;
- [ ] school tour;
- [ ] WhatsApp;
- [ ] email;
- [ ] phone;
- [ ] address;
- [ ] operational hours.

---

# 46. Media QA

Check:

- [ ] current SHS media;
- [ ] correct uniform;
- [ ] current campus;
- [ ] no stock photo;
- [ ] no AI-generated student image;
- [ ] image permission confirmed;
- [ ] image resolution sufficient;
- [ ] image file size optimized.

---

# 47. Mobile QA — Small Screen

Recommended width:

```text
320–360px
```

Check:

- [ ] no horizontal scroll;
- [ ] headline readable;
- [ ] buttons fit;
- [ ] menu works;
- [ ] form usable;
- [ ] timeline usable.

---

# 48. Mobile QA — Standard

Recommended:

```text
375–430px
```

Check:

- [ ] hero composition;
- [ ] image crop;
- [ ] sticky CTA;
- [ ] accordion tap area;
- [ ] form keyboard behavior;
- [ ] footer.

---

# 49. Tablet QA

Check portrait + landscape:

- [ ] layout does not look stretched;
- [ ] navigation appropriate;
- [ ] cards / panels reflow;
- [ ] typography balanced;
- [ ] timeline readable.

---

# 50. Desktop QA

Check:

```text
1024
1280
1366
1440
1920
```

Verify:

- [ ] max width works;
- [ ] whitespace balanced;
- [ ] no oversized line length;
- [ ] collage not broken;
- [ ] hero not too empty.

---

# 51. Browser QA

Minimum:

```text
Chrome
Edge
Firefox
Safari
```

Mobile:

```text
Chrome Android
Safari iOS
```

---

# 52. Browser Issues to Watch

Common:

- Safari video autoplay;
- sticky positioning;
- viewport height;
- form select rendering;
- font loading;
- smooth scroll;
- input zoom on iOS.

---

# 53. Accessibility QA — Keyboard

Test without mouse:

- [ ] navigation;
- [ ] menu;
- [ ] language switch;
- [ ] CTA;
- [ ] accordion;
- [ ] form;
- [ ] submit;
- [ ] footer links.

---

# 54. Accessibility QA — Focus

Check:

- [ ] focus visible;
- [ ] focus order logical;
- [ ] focus not trapped incorrectly;
- [ ] mobile menu returns focus.

---

# 55. Accessibility QA — Form

Check:

- [ ] each field has label;
- [ ] error associated with field;
- [ ] required state clear;
- [ ] placeholder not used as label;
- [ ] screen-reader friendly.

---

# 56. Accessibility QA — Images

Check:

- meaningful image → useful alt;
- decorative image → `alt=""`.

Avoid repetitive alt text.

---

# 57. Accessibility QA — Contrast

Check:

- normal text readable;
- primary CTA readable;
- secondary CTA readable;
- dark section readable;
- disabled state still understandable.

---

# 58. Accessibility QA — Motion

Test:

```text
prefers-reduced-motion
```

Expected:

- [ ] non-essential motion disabled;
- [ ] page still functional.

---

# 59. Performance QA — Initial Load

Check:

- hero text visible quickly;
- poster visible quickly;
- video not blocking;
- no massive JS bundle;
- no unnecessary third-party scripts.

---

# 60. Performance QA — Images

Check:

- [ ] WebP / AVIF where possible;
- [ ] responsive sizes;
- [ ] lazy load below fold;
- [ ] hero priority;
- [ ] no 5MB photo accidentally shipped.

---

# 61. Performance QA — Fonts

Check:

- [ ] limited families;
- [ ] limited weights;
- [ ] no render blocking if avoidable;
- [ ] fallback works;
- [ ] no major layout shift.

---

# 62. Performance QA — Layout Shift

Check:

- image dimensions reserved;
- video poster dimensions reserved;
- font behavior controlled;
- sticky elements do not cause jump.

---

# 63. Performance QA — Mobile Network

Test with throttling:

```text
Fast 3G
Slow 4G
```

Observe:

- first meaningful view;
- CTA readiness;
- form usability.

---

# 64. SEO QA — Metadata

Check per locale:

- [ ] title;
- [ ] meta description;
- [ ] canonical;
- [ ] hreflang;
- [ ] Open Graph;
- [ ] favicon.

---

# 65. SEO QA — Heading

Check:

- [ ] one H1;
- [ ] logical H2;
- [ ] H3 used correctly;
- [ ] no heading level used only for style.

---

# 66. SEO QA — Indexing

Check:

Landing:

```text
index, follow
```

Thank You:

```text
noindex
```

Staging:

```text
noindex
or password protected
```

---

# 67. SEO QA — Sitemap

Verify:

- [ ] ID admission included;
- [ ] EN admission included;
- [ ] thank-you excluded if desired.

---

# 68. SEO QA — Structured Data

If implemented:

- [ ] school name;
- [ ] logo;
- [ ] address;
- [ ] phone;
- [ ] URL;

must be verified.

---

# 69. Analytics QA — GA4

Check:

- [ ] page_view;
- [ ] locale;
- [ ] referrer;
- [ ] UTM.

Use realtime / debug view.

---

# 70. Analytics QA — Conversion Events

Test:

```text
hero_cta_click
whatsapp_click
school_tour_click
start_admission_click
form_start
form_submit
language_switch
faq_open
```

---

# 71. Analytics QA — Privacy

Verify analytics does NOT include:

```text
parent_name
student_name
whatsapp
email
date_of_birth
```

---

# 72. UTM QA

Test URL:

```text
?id=test
&utm_source=instagram
&utm_medium=social
&utm_campaign=psb_test
&utm_content=hero
```

Expected:

- [ ] retained during browsing;
- [ ] stored in lead;
- [ ] correct values.

---

# 73. Security QA

Check:

- [ ] HTTPS;
- [ ] server-side validation;
- [ ] rate limit;
- [ ] secrets not exposed;
- [ ] database not public-write;
- [ ] no stack traces;
- [ ] no debug endpoint;
- [ ] environment variables correct.

---

# 74. Security QA — Client Source

Inspect browser bundle / source.

Must NOT expose:

```text
database password
service-role key
private API secret
```

---

# 75. Security QA — Form Abuse

Test:

- very long strings;
- HTML;
- script tags;
- repeated submit;
- invalid enums.

Expected:

- safe handling;
- no page break;
- no script execution.

---

# 76. UAT Objective

User Acceptance Testing confirms:

> “Does this landing page actually work for SHS and its admission team?”

UAT is not only developer testing.

---

# 77. UAT Participants

Recommended:

- 1 Admission representative;
- 1 Marketing / Communication representative;
- 1 Academic representative;
- 1 Management approver;
- optional 1 parent-like test user unfamiliar with the project.

---

# 78. UAT Scenario 01 — New Parent

Scenario:

> “Saya baru pertama mengenal SHS dan ingin tahu apakah sekolah ini cocok untuk anak saya.”

Tasks:

1. identify what SHS offers;
2. find the relevant level;
3. understand learning experience;
4. find Student Life;
5. find admission process;
6. contact Admission.

Pass if:

- user completes without guidance.

---

# 79. UAT Scenario 02 — Ready Parent

Scenario:

> “Saya sudah tahu SHS dan ingin mendaftarkan anak saya.”

Tasks:

1. find Start Admission;
2. understand admission steps;
3. see timeline;
4. fill form;
5. reach Thank You.

Pass if:

- user understands this is initial admission / inquiry flow;
- no confusion.

---

# 80. UAT Scenario 03 — Tuition Inquiry

Scenario:

> “Saya ingin tahu biaya sekolah.”

Tasks:

1. find tuition info route;
2. use form or WhatsApp;
3. understand next step.

Pass if:

- user can contact Admission in ≤3 logical actions.

---

# 81. UAT Scenario 04 — School Tour

Scenario:

> “Saya ingin datang melihat sekolah.”

Tasks:

1. find School Visit;
2. submit request;
3. receive clear next-step message.

---

# 82. UAT Scenario 05 — English User

Scenario:

> “I want to explore SHS in English.”

Tasks:

1. switch to EN;
2. explore page;
3. submit inquiry;
4. receive EN confirmation.

Pass if:

- no mixed language;
- flow identical.

---

# 83. UAT Scenario 06 — Mobile User

Scenario:

> User arrives from Instagram.

Tasks:

1. understand hero;
2. scroll;
3. use sticky CTA;
4. fill form;
5. WhatsApp.

Pass if:

- easy with one hand;
- no layout obstruction.

---

# 84. UAT Evaluation Questions

Ask testers:

1. Dalam 5 detik, apakah Anda paham ini website apa?
2. Apakah SHS terasa berbeda dari sekolah lain?
3. Apakah informasi jenjang mudah ditemukan?
4. Apakah proses PSB mudah dipahami?
5. Apakah Anda tahu langkah berikutnya?
6. Apakah CTA terlalu banyak?
7. Apakah website terasa modern?
8. Apakah website terasa seperti template?
9. Apakah English terasa natural?
10. Apakah ada informasi yang membuat Anda ragu?

---

# 85. UAT Acceptance Criteria

UAT pass if:

- major tasks completed;
- no critical confusion;
- admission flow understood;
- CTA understood;
- form understood;
- content perceived credible;
- no major factual objection.

---

# 86. UAT Feedback Classification

Classify feedback:

```text
BLOCKER
MUST FIX
NICE TO HAVE
POST-LAUNCH
```

Do not change structure because of every personal preference.

---

# 87. Defect Log Template

| ID | Date | Area | Issue | Severity | Device | Owner | Status |
|---|---|---|---|---|---|---|---|
| BUG-001 | | Form | | S1 | Mobile | | Open |
| BUG-002 | | EN | | S2 | Desktop | | Open |

---

# 88. Defect Status

Use:

```text
OPEN
IN PROGRESS
READY TO RETEST
CLOSED
DEFERRED
```

---

# 89. Regression Testing

After major fix, retest:

- related component;
- mobile;
- EN;
- form;
- analytics if CTA changed.

Avoid fixing one area and breaking another.

---

# 90. Launch Blockers

Do not launch if any of these exist:

```text
Wrong admission date
Wrong curriculum claim
Wrong contact
Form broken
Lead not saved
WhatsApp broken
EN incomplete
Mobile severely broken
Production error
Critical analytics / conversion issue if campaigns depend on it
```

---

# 91. Launch Gate — Content

All must be YES:

- [ ] Curriculum approved.
- [ ] Admission dates approved.
- [ ] Academic year approved.
- [ ] Contact approved.
- [ ] Accreditation approved if shown.
- [ ] Programmes approved.
- [ ] Assessment wording approved.
- [ ] EN approved.

---

# 92. Launch Gate — Functional

All must be YES:

- [ ] Navigation works.
- [ ] Language switch works.
- [ ] Start Admission works.
- [ ] School Tour works.
- [ ] WhatsApp works.
- [ ] Form works.
- [ ] Thank You works.
- [ ] Lead stored.

---

# 93. Launch Gate — Technical

All must be YES:

- [ ] Production environment configured.
- [ ] HTTPS active.
- [ ] Analytics active.
- [ ] SEO metadata active.
- [ ] Error logging active.
- [ ] Backup / rollback ready.

---

# 94. Launch Gate — Visual

All must be YES:

- [ ] Mobile approved.
- [ ] Desktop approved.
- [ ] Real media used.
- [ ] No broken images.
- [ ] No placeholder.
- [ ] No AI-looking generic imagery.

---

# 95. Launch Approval

Recommended final sign-off:

```text
Admission PIC:
Name:
Date:
Approved:

Marketing / Brand:
Name:
Date:
Approved:

Technical:
Name:
Date:
Approved:

Final Approver:
Name:
Date:
Approved:
```

---

# 96. Pre-Launch Backup

Before production deployment:

- [ ] tag stable git commit;
- [ ] database structure backed up if needed;
- [ ] previous production deploy retained;
- [ ] environment variable backup secure.

---

# 97. Production Deployment Flow

```text
Staging Approved
↓
Content Freeze
↓
Tag Release
↓
Deploy Production
↓
Smoke Test
↓
Analytics Check
↓
Launch Announcement
```

---

# 98. Production Smoke Test

Immediately after deploy:

Test:

```text
/id/admission
/en/admission
Start Admission
WhatsApp
School Tour
Form Submit
Lead Storage
Thank You
Language Switch
Mobile Menu
```

---

# 99. First 15-Minute Check

Check:

- no 404;
- no console-breaking error;
- no broken image;
- form success;
- database receive;
- GA realtime;
- WhatsApp.

---

# 100. First 24-Hour Monitoring

Monitor:

```text
Page Views
Form Submits
Form Errors
WhatsApp Clicks
School Tour Clicks
404 Errors
Server Errors
Mobile Issues
```

---

# 101. First 7-Day Review

Review:

- traffic source;
- conversion rate;
- form completion;
- WhatsApp usage;
- school tour interest;
- tuition interest;
- EN vs ID usage;
- device split;
- common FAQ interest.

---

# 102. Post-Launch Metrics

Minimum:

```text
Sessions
Users
Mobile %
CTA Click Rate
Form Start Rate
Form Submit Rate
WhatsApp Click Rate
School Tour Requests
Leads
```

---

# 103. Lead Quality Review

Admission Team should mark:

```text
Valid Lead
Duplicate
Spam
Wrong Contact
Interested
School Visit
Applied
Enrolled
```

This helps evaluate campaign quality, not just quantity.

---

# 104. Post-Launch Optimization Priority

Use actual data.

Priority order:

```text
1. Fix broken flow
2. Improve conversion friction
3. Improve content clarity
4. Improve performance
5. Improve visual polish
```

Not:

```text
Add more animation first
```

---

# 105. Suggested Optimization Tests

Possible after enough traffic:

- hero headline;
- primary CTA label;
- form length;
- School Tour prominence;
- tuition CTA;
- image sequence;
- FAQ order.

---

# 106. Do Not A/B Test Too Early

Do not run meaningless tests with low traffic.

First ensure:

- sufficient sessions;
- stable baseline;
- clear hypothesis.

---

# 107. Incident Response

If critical production issue:

```text
Detect
↓
Assess Severity
↓
Rollback if needed
↓
Fix
↓
Retest
↓
Redeploy
```

---

# 108. Critical Incident Examples

- form stops saving;
- incorrect fee published;
- incorrect admission deadline;
- wrong WhatsApp;
- page down;
- data leak.

These require immediate action.

---

# 109. Rollback Rule

Rollback is preferred over risky live editing if:

- critical defect affects all users;
- fix is uncertain;
- data integrity at risk.

---

# 110. Post-Launch Ownership

Assign:

| Area | Owner |
|---|---|
| Admission dates | Admission Team |
| Curriculum | Academic Team |
| Programmes | Academic / Marketing |
| Photos | Marketing |
| Leads | Admission Team |
| Website technical | Development |
| Analytics | Marketing / Digital |
| Final approval | Management |

---

# 111. Content Maintenance Rule

Any change to:

```text
Curriculum
Fees
Promotion
Admission Dates
Contact
Assessment
```

must have:

```text
Source
Owner
Approval
Date
```

---

# 112. Versioning

Recommended release format:

```text
V1.0 — Initial Launch
V1.1 — Minor Content Update
V1.2 — Conversion Improvement
V2.0 — Portal Integration
```

---

# 113. QA Checklist — Short Form

Before launch:

## Content
- [ ] Facts correct.
- [ ] No placeholder.
- [ ] ID complete.
- [ ] EN complete.

## UX
- [ ] CTA clear.
- [ ] Admission flow clear.
- [ ] Timeline clear.

## Function
- [ ] Form works.
- [ ] Leads saved.
- [ ] WhatsApp works.
- [ ] School Tour works.

## Mobile
- [ ] No overflow.
- [ ] Menu works.
- [ ] Form usable.

## Technical
- [ ] Analytics.
- [ ] SEO.
- [ ] HTTPS.
- [ ] Error handling.

---

# 114. UAT Sign-Off Template

```text
Project:
SHS PSB Landing Page

Version:
V1

Environment:
Staging / Production

UAT Date:

Tested By:

Overall Result:
PASS / PASS WITH MINOR ISSUE / FAIL

Critical Issues:
-

High Issues:
-

Approved for Launch:
YES / NO

Notes:
-
```

---

# 115. Launch Readiness Score

Optional scoring:

```text
Content       /20
Functional    /20
Mobile        /15
Bilingual     /15
Performance   /10
SEO           /5
Accessibility /5
Analytics     /5
Security      /5
----------------
Total        /100
```

Recommended:

```text
≥ 90
and
0 Critical
and
0 High
```

before launch.

This score is internal only.

---

# 116. Definition of Done — Tahap 07

Tahap 07 dianggap selesai jika:

1. functional QA selesai;
2. bilingual QA selesai;
3. responsive QA selesai;
4. form QA selesai;
5. lead storage QA selesai;
6. WhatsApp QA selesai;
7. analytics QA selesai;
8. SEO QA selesai;
9. accessibility baseline selesai;
10. performance QA selesai;
11. UAT selesai;
12. blockers closed;
13. launch gate passed;
14. final approver signs off;
15. post-launch monitoring owner ditetapkan.

---

# 117. Final Launch Gate

The landing page may go live only when:

```text
NO CRITICAL DEFECT
+
NO HIGH DEFECT
+
ALL P0 CONTENT VERIFIED
+
FORM WORKING
+
LEADS WORKING
+
CONTACT WORKING
+
MOBILE WORKING
+
BILINGUAL COMPLETE
+
FINAL APPROVAL RECEIVED
```

---

# 118. Final Project Flow

```text
01 BLUEPRINT
↓
02 CONTENT AUDIT
↓
03 USER FLOW & WIREFRAME
↓
04 CREATIVE DIRECTION & UI SYSTEM
↓
05 FINAL BILINGUAL COPY
↓
06 DEVELOPMENT SPECIFICATION
↓
07 QA, UAT & LAUNCH READINESS
↓
LAUNCH
↓
MONITOR
↓
OPTIMIZE
```

---

# 119. Final Principle

A successful launch is not:

> “Website sudah online.”

A successful launch is:

> **Orang tua dapat memahami SHS, menemukan informasi yang benar, menghubungi Admission, dan menyelesaikan inquiry tanpa hambatan.**

Final rule:

```text
CORRECT FIRST
CLEAR SECOND
FAST THIRD
BEAUTIFUL ALWAYS
```

but never:

```text
BEAUTIFUL
AT THE COST OF
ACCURACY OR FUNCTION.
```
