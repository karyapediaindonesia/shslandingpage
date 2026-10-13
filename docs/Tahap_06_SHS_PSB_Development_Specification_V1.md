# Tahap 06 — SHS PSB Development Specification V1

**Project:** Suria Harapan School — Penerimaan Siswa Baru  
**Document Version:** V1  
**Document Type:** Development Specification / Technical Implementation Guide  
**Primary Output:** Buildable Technical Specification  
**Scope:** Bilingual PSB Landing Page + Admission Lite  
**Target Delivery:** 3-Day Build Sprint  
**Status:** Ready for Development Planning  

---

# 1. Purpose

Dokumen ini menerjemahkan hasil:

- **Tahap 01 — SHS PSB Landing Page Blueprint V1**
- **Tahap 02 — SHS PSB Content Audit & Content Inventory V1**
- **Tahap 03 — SHS PSB User Flow & Wireframe V1**
- **Tahap 04 — SHS PSB Creative Direction & UI Design System V1**
- **Tahap 05 — SHS PSB Final Content & Bilingual Copy Deck V1**

menjadi spesifikasi implementasi yang dapat langsung digunakan oleh tim development.

Tahap 06 mendefinisikan:

1. recommended stack;
2. application architecture;
3. route architecture;
4. component architecture;
5. bilingual implementation;
6. content structure;
7. form architecture;
8. lead storage;
9. WhatsApp integration;
10. UTM capture;
11. analytics;
12. SEO;
13. media optimization;
14. performance;
15. accessibility;
16. responsive behavior;
17. deployment;
18. security;
19. QA;
20. launch checklist;
21. post-launch monitoring.

---

# 2. Development Objective

Target implementasi:

> **Membangun landing page PSB bilingual yang cepat, modern, mudah dipelihara, conversion-ready, dan dapat dikembangkan menjadi Portal PSB pada fase berikutnya.**

Prinsip utama:

```text
FAST TO BUILD
+
FAST TO LOAD
+
EASY TO MAINTAIN
+
SAFE TO PUBLISH
+
READY TO EXPAND
```

---

# 3. Scope Reminder

Produk V1 adalah:

> **Bilingual PSB Landing Page + Admission Lite**

Bukan:

```text
Full PSB Portal
Parent Portal
Application Management System
Payment System
Document Management System
Assessment System
```

---

# 4. Recommended Technical Strategy

Karena target delivery hanya 3 hari, gunakan:

```text
Single Web Application
+
Server-Side / Serverless Form Endpoint
+
Simple Lead Database
+
Bilingual Content Files
+
Analytics Integration
```

Hindari arsitektur berlebihan.

---

# 5. Recommended Stack — Primary Option

Jika tim familiar dengan React ecosystem:

```text
Frontend:
Next.js
TypeScript

Styling:
Tailwind CSS
atau
CSS Modules + Design Tokens

Content:
Local structured JSON / TS objects / Markdown

Form API:
Next.js Server Route / Server Action

Database:
Supabase / PostgreSQL
atau database existing SHS jika siap

Analytics:
Google Analytics 4

Advertising Tracking:
Meta Pixel
Google Ads Conversion if needed

Deployment:
Vercel / equivalent Node-compatible hosting
```

Catatan:

> Gunakan stack yang paling dikuasai tim. Deadline 3 hari bukan waktu yang tepat untuk mempelajari framework baru.

---

# 6. Alternative Stack — Lightweight

Jika kebutuhan hanya landing page + form:

```text
Astro / Static Site
+
TypeScript
+
CSS / Tailwind
+
Serverless Form Endpoint
+
Supabase / Google Sheet Bridge
```

Keuntungan:

- ringan;
- cepat;
- cocok untuk marketing page.

Gunakan hanya jika tim sudah familiar.

---

# 7. Stack Decision Rule

Prioritas pemilihan stack:

```text
TEAM FAMILIARITY
>
STABILITY
>
DEPLOYMENT SPEED
>
PERFORMANCE
>
FRAMEWORK PREFERENCE
```

Jangan memilih teknologi hanya karena sedang populer.

---

# 8. Application Architecture

Recommended:

```text
Browser
   ↓
Landing Page
   ↓
Localized Content Layer
   ↓
UI Components
   ↓
Lead Form
   ↓
Server Validation
   ↓
Lead Database
   ↓
Success Response
   ↓
Thank You Page
   ↓
Admission Follow-Up
```

---

# 9. High-Level Folder Structure

Recommended Next.js-style structure:

```text
src/
│
├── app/
│   ├── [locale]/
│   │   ├── admission/
│   │   │   ├── page.tsx
│   │   │   └── thank-you/
│   │   │       └── page.tsx
│   │   └── layout.tsx
│   │
│   └── api/
│       └── leads/
│           └── route.ts
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── forms/
│   └── ui/
│
├── content/
│   ├── id/
│   └── en/
│
├── data/
│   ├── admission.ts
│   ├── levels.ts
│   ├── programmes.ts
│   └── faq.ts
│
├── lib/
│   ├── analytics.ts
│   ├── validation.ts
│   ├── utm.ts
│   ├── locale.ts
│   └── db.ts
│
├── styles/
│
└── types/
```

Struktur dapat disesuaikan dengan stack final.

---

# 10. Route Architecture

Recommended routes:

```text
/id/admission
/en/admission

/id/admission/thank-you
/en/admission/thank-you
```

Optional redirect:

```text
/admission
↓
/id/admission
```

atau redirect berdasarkan default language.

---

# 11. Language Architecture

Supported locales:

```text
id
en
```

Default:

```text
id
```

Content tidak boleh bercampur di satu object tanpa struktur jelas.

Recommended:

```text
/content/id/
/content/en/
```

atau:

```ts
content = {
  id: {...},
  en: {...}
}
```

---

# 12. Locale Persistence

Language preference dapat disimpan melalui:

```text
URL
+
cookie optional
```

URL harus menjadi source of truth utama.

Contoh:

```text
/id/admission
/en/admission
```

---

# 13. Language Switch Behavior

Ketika user berpindah:

```text
/id/admission#student-life
↓
/en/admission#student-life
```

Pertahankan:

- anchor;
- UTM;
- query parameters yang relevan.

Jika user sedang mengisi form:

> form state sebisa mungkin dipertahankan.

---

# 14. Content Architecture

Gunakan structured content.

Contoh:

```ts
hero: {
  eyebrow: "",
  title: "",
  body: "",
  primaryCta: "",
  secondaryCta: ""
}
```

Jangan hard-code copy panjang langsung di component.

---

# 15. Recommended Content Modules

```text
navigation
hero
atAGlance
whySHS
levels
learning
beyondClassroom
studentLife
trust
admissionJourney
admissionTimeline
schoolVisit
faq
leadForm
finalCTA
footer
```

---

# 16. Content Verification Handling

Semua placeholder:

```text
[VERIFY: ...]
```

harus:

- dihapus sebelum production;
- atau di-block melalui build check.

Recommended:

> buat script atau manual checklist agar production tidak boleh mengandung string `[VERIFY:`.

---

# 17. Build Safety Check

Before production build:

```text
Search repository for:

[VERIFY:
TODO:
Lorem ipsum
Coming Soon
```

Production release harus gagal secara manual jika masih ada factual placeholder.

---

# 18. Component Architecture

## Layout Components

```text
Header
MobileMenu
Footer
SectionContainer
WideContainer
FullBleedSection
```

## Section Components

```text
HeroSection
AtAGlanceSection
WhySHSSection
LearningLevelsSection
LearningSection
BeyondClassroomSection
StudentLifeSection
TrustSection
AdmissionJourneySection
AdmissionTimelineSection
SchoolVisitSection
FAQSection
LeadFormSection
FinalCTASection
```

## UI Components

```text
Button
TextLink
Eyebrow
Heading
StatItem
LevelPanel
TimelineStep
Accordion
Input
Select
Checkbox
FormMessage
LanguageSwitch
StickyCTA
```

---

# 19. Component Principle

Components should be:

```text
Reusable
Small enough to maintain
Not over-abstracted
Typed
Accessible
```

Avoid:

- one giant page component;
- excessive micro-components;
- premature design-system complexity.

---

# 20. Design Token Implementation

Use centralized tokens.

Example:

```css
:root {
  --color-primary: #...;
  --color-primary-hover: #...;
  --color-text: #...;
  --color-muted: #...;
  --color-bg: #...;
  --color-surface: #...;
  --color-border: #...;
  --color-error: #...;
  --color-success: #...;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;

  --container: 77.5rem;
}
```

Final values mengikuti Tahap 04.

---

# 21. Responsive Breakpoints

Recommended conceptual breakpoints:

```text
Mobile:
< 768px

Tablet:
768–1023px

Desktop:
≥ 1024px

Large Desktop:
≥ 1440px
```

Breakpoints dapat mengikuti framework yang digunakan.

---

# 22. Responsive Rule

Jangan hanya:

```text
scale desktop down
```

Lakukan:

```text
reflow
reorder if needed
simplify
reduce decorative elements
optimize media
```

---

# 23. Header Implementation

Desktop:

```text
Logo
Nav
Language
Start Admission
```

Mobile:

```text
Logo
Menu
```

Menu drawer berisi:

- navigation;
- language;
- Start Admission;
- Talk to Admission.

Header dapat berubah dari transparent ke solid saat scroll.

---

# 24. Sticky Header Rule

Use sticky header after hero entry.

Recommended:

```text
position: sticky
top: 0
z-index: high
```

Add:

- subtle background;
- subtle border;
- no heavy shadow.

---

# 25. Hero Implementation

Hero media:

```text
Image or short video
```

Video must include:

```text
poster
muted
playsInline
loop
autoplay if allowed
```

Fallback to poster image.

---

# 26. Hero Performance

Priority:

```text
Text first
Poster image second
Video enhancement third
```

Do not block first render waiting for video.

---

# 27. Image Component

Use image optimization supported by framework.

Required:

- width;
- height;
- aspect ratio;
- alt;
- responsive sizes;
- lazy loading below fold.

Hero images may use eager / priority loading.

---

# 28. Media Naming Convention

Recommended:

```text
hero-learning.webp
hero-sports.webp

early-learning-classroom-01.webp
primary-science-01.webp
secondary-student-life-01.webp
```

Avoid:

```text
IMG_9283.jpg
final-final2.jpg
```

---

# 29. Media Directory

```text
public/
└── media/
    ├── hero/
    ├── early-learning/
    ├── primary/
    ├── secondary/
    ├── student-life/
    ├── facilities/
    └── achievements/
```

---

# 30. Alt Text Rule

Alt text must describe meaningful content.

Example:

```text
Students conducting a science experiment in class
```

Not:

```text
image1
```

Decorative images:

```text
alt=""
```

---

# 31. Student Life Gallery

Recommended:

- CSS Grid;
- masonry-like editorial composition;
- no heavy carousel library unless needed.

Mobile:

- simplified stacked layout;
- optional horizontal scroll for selected groups.

---

# 32. Admission Journey Component

Data-driven:

```ts
steps = [
  {
    number: "01",
    title: "...",
    description: "..."
  }
]
```

Desktop:

- horizontal.

Mobile:

- vertical.

---

# 33. Admission Timeline Component

Data structure:

```ts
timeline = {
  level: "primary",
  periods: [
    {
      label: "",
      start: "",
      end: ""
    }
  ]
}
```

If all levels share dates:

> use one timeline.

---

# 34. Timeline Date Rule

Store machine-readable date separately from display copy.

Example:

```ts
{
  date: "2027-01-15",
  displayId: "15 Januari 2027",
  displayEn: "15 January 2027"
}
```

Avoid embedding date logic in UI text.

---

# 35. Lead Form Objective

Form V1 is:

> **lead capture**, not complete application.

Keep short.

---

# 36. Lead Form Fields

Recommended required:

```text
parent_name
whatsapp
student_name
level
grade
academic_year
interest
consent
```

Optional:

```text
email
current_school
date_of_birth
notes
```

---

# 37. Form Field Names

Recommended technical keys:

```text
parent_name
whatsapp
email
student_name
current_school
date_of_birth
level
grade
academic_year
interest
notes
consent
```

Tracking fields:

```text
source
medium
campaign
content
term
landing_url
referrer
locale
```

---

# 38. Client Validation

Client-side validation improves UX.

Validate:

- required fields;
- phone format;
- email format;
- allowed select values;
- consent.

But client validation is not sufficient.

---

# 39. Server Validation

Server must revalidate:

- required fields;
- string length;
- phone;
- email;
- allowed enum values;
- payload size;
- suspicious input.

Never trust browser validation alone.

---

# 40. WhatsApp Normalization

Accept:

```text
0812...
62812...
+62812...
```

Normalize to:

```text
62812...
```

Store both:

```text
raw_whatsapp
normalized_whatsapp
```

if useful.

---

# 41. Lead Database Schema

Recommended table:

```text
leads
```

Fields:

```text
id
created_at
parent_name
whatsapp
whatsapp_normalized
email
student_name
current_school
date_of_birth
level
grade
academic_year
interest
notes
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

---

# 42. Lead Status

Default:

```text
NEW
```

Possible future statuses:

```text
NEW
CONTACTED
SCHOOL_VISIT
INTERESTED
APPLIED
ENROLLED
NO_RESPONSE
NOT_INTERESTED
```

---

# 43. Lead ID

Use:

- UUID;
- database-generated ID.

Do not expose sequential IDs publicly if unnecessary.

---

# 44. Database Strategy

Preferred:

```text
PostgreSQL / Supabase
```

because it can grow into Portal PSB later.

For ultra-fast V1 only:

```text
Google Sheet via secure server integration
```

may be used as temporary lead storage.

But long-term recommendation:

> migrate to proper database.

---

# 45. Google Sheet Fallback Rule

If using Google Sheets:

Do not:

- write directly from browser;
- expose credentials;
- expose API key with write permissions.

Use:

```text
Browser
↓
Server Endpoint
↓
Google Sheets API
```

---

# 46. Form Submission API

Suggested endpoint:

```text
POST /api/leads
```

Payload example:

```json
{
  "parent_name": "...",
  "whatsapp": "...",
  "student_name": "...",
  "level": "primary",
  "grade": "1",
  "academic_year": "2027/2028",
  "interest": "school_tour",
  "consent": true
}
```

---

# 47. API Success Response

Example:

```json
{
  "success": true,
  "lead_id": "..."
}
```

Client then redirects to:

```text
/{locale}/admission/thank-you
```

---

# 48. API Error Response

Use generic public response.

Example:

```json
{
  "success": false,
  "message": "Unable to submit form"
}
```

Do not expose:

- database stack trace;
- SQL error;
- secret config;
- server path.

---

# 49. Duplicate Submission Protection

Minimum:

- disable submit button during submit;
- generate idempotency token optional;
- simple rate limit;
- detect obvious duplicate within short interval if needed.

---

# 50. Spam Protection

Recommended V1 options:

```text
honeypot
+
rate limiting
```

If spam becomes an issue:

```text
Turnstile / CAPTCHA
```

Avoid adding heavy friction before it is needed.

---

# 51. Rate Limiting

Recommended:

- limit repeated submissions by IP / fingerprint / session;
- conservative enough not to block real families.

Implementation depends on hosting.

---

# 52. UTM Capture

Capture on first landing:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
```

Store in:

- sessionStorage;
- cookie;
- application state.

Persist until form submit.

---

# 53. Referrer Capture

Store:

```text
document.referrer
```

when available.

Also store:

```text
landing_url
```

---

# 54. Analytics Integration

Minimum:

```text
Google Analytics 4
```

Optional based on campaigns:

```text
Meta Pixel
Google Ads Conversion
```

---

# 55. Analytics Event Naming

Recommended:

```text
hero_cta_click
explore_shs_click
level_view
whatsapp_click
school_tour_click
start_admission_click
form_start
form_submit
form_error
language_switch
faq_open
```

---

# 56. Analytics Event Parameters

Example:

```text
level
locale
cta_location
interest
utm_source
utm_campaign
```

Do not send sensitive student data to analytics.

---

# 57. Analytics Privacy Rule

Never send:

- student name;
- parent name;
- WhatsApp;
- email;
- date of birth.

Analytics should track behavior, not personal data.

---

# 58. WhatsApp Integration

Build URL server-side or client-side safely.

Format:

```text
https://wa.me/[NUMBER]?text=[ENCODED_MESSAGE]
```

Use verified official number only.

---

# 59. WhatsApp CTA Context

Different CTA can use different prefilled messages:

```text
General Inquiry
Tuition
School Tour
Admission
```

Track:

```text
cta_location
message_type
```

---

# 60. School Tour Flow

V1:

```text
Button
↓
Short Form
↓
Lead saved
↓
Interest = school_tour
↓
Thank You
↓
Manual confirmation by Admission Team
```

No live calendar required.

---

# 61. SEO Architecture

Each locale needs:

- title;
- meta description;
- canonical;
- hreflang;
- Open Graph;
- structured heading hierarchy.

---

# 62. Hreflang

Recommended:

```html
<link rel="alternate" hreflang="id" ... />
<link rel="alternate" hreflang="en" ... />
<link rel="alternate" hreflang="x-default" ... />
```

---

# 63. Canonical

Each locale canonical points to itself.

Example:

```text
/id/admission
/en/admission
```

---

# 64. Heading Structure

Recommended:

```text
H1
Hero only

H2
Major sections

H3
Subsections / cards
```

Avoid multiple random H1.

---

# 65. Structured Data

Optional but recommended:

```text
EducationalOrganization
School
```

Include only verified:

- name;
- address;
- contact;
- URL;
- logo.

Do not include unverified claims.

---

# 66. Open Graph

Required:

```text
og:title
og:description
og:image
og:url
og:type
```

Use a custom PSB image rather than generic logo-only image if possible.

---

# 67. Sitemap

Include:

```text
/id/admission
/en/admission
```

Thank-you page:

> noindex recommended.

---

# 68. Robots

Thank-you route:

```text
noindex
```

Admission landing page:

```text
index
follow
```

unless SHS explicitly wants private pre-launch mode.

---

# 69. Pre-Launch Staging

Before public launch:

```text
staging domain
or
preview URL
```

If publicly accessible:

- protect with password;
- or noindex.

---

# 70. Performance Goals

Recommended:

```text
Fast initial render
Minimal JavaScript
Optimized images
No unnecessary libraries
```

Aim for strong Core Web Vitals.

---

# 71. JavaScript Budget Principle

Do not install a library for something CSS can do simply.

Avoid large dependencies only for:

- accordion;
- basic tabs;
- simple reveal animation.

---

# 72. Motion Implementation

Preferred:

```text
CSS transitions
IntersectionObserver
small animation utility
```

If animation library used:

> keep usage selective.

---

# 73. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable non-essential:

- reveal;
- parallax;
- auto movement.

---

# 74. Font Loading

Use:

- locally hosted licensed font if available;
- optimized web font loading;
- limited weights.

Recommended maximum:

```text
2 font families
3–4 weights total
```

Avoid loading 10 font files.

---

# 75. Font Fallback

Define robust fallback.

Example:

```css
font-family:
  "Brand Sans",
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

---

# 76. Accessibility Requirements

Minimum:

- semantic HTML;
- keyboard navigation;
- visible focus;
- label for each input;
- accessible error text;
- alt text;
- sufficient contrast;
- proper button elements;
- accordion with ARIA;
- menu focus management.

---

# 77. Navigation Accessibility

Mobile menu:

- focus trap;
- ESC closes;
- proper aria-expanded;
- return focus to trigger.

---

# 78. Form Accessibility

Each field:

```text
label
input
error association
help text if needed
```

Never use placeholder as the only label.

---

# 79. FAQ Accessibility

Accordion button:

```text
aria-expanded
aria-controls
```

Content region:

```text
id
role optional
```

---

# 80. Security Baseline

Minimum:

- HTTPS;
- server-side validation;
- environment variables for secrets;
- rate limiting;
- no credentials in frontend;
- sanitized stored text where needed;
- dependency review.

---

# 81. Environment Variables

Example:

```text
DATABASE_URL
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
GA_ID
META_PIXEL_ID
ADMISSION_WHATSAPP
SITE_URL
```

Never commit secrets.

---

# 82. Public vs Private Variables

Public client variables should contain only safe identifiers.

Never expose:

```text
service role key
database password
API secret
```

---

# 83. Privacy Requirement

Collect only data needed for follow-up.

V1 should avoid unnecessary:

- ID numbers;
- family card;
- address;
- sensitive student records.

Those belong to future Portal PSB.

---

# 84. Consent Logging

Store:

```text
consent = true
consent_at = timestamp
```

Optional:

```text
privacy_version
```

---

# 85. Error Logging

Recommended:

- server logs;
- form submission failures;
- API errors.

Do not log full sensitive payload unnecessarily.

---

# 86. Development Environments

Recommended:

```text
local
staging
production
```

Use separate environment variables.

---

# 87. Git Workflow

For 3-day sprint:

```text
main
develop optional
feature branches optional
```

Keep workflow lightweight.

At minimum:

- commit often;
- meaningful messages;
- production deploy from controlled branch.

---

# 88. Suggested 3-Day Development Plan

## Day 1 — Foundation

Build:

```text
Project setup
Routing
Localization
Design tokens
Header
Hero
At a Glance
Why SHS
Levels
Core responsive system
```

Also:

- prepare content files;
- verify media paths.

---

## Day 2 — Full Page + Conversion

Build:

```text
Learning
Beyond Classroom
Student Life
Trust
Admission Journey
Timeline
School Visit
FAQ
Lead Form
API
Database
WhatsApp
Thank You
```

---

## Day 3 — QA + Launch

Finish:

```text
Bilingual QA
Responsive QA
Form QA
Analytics
SEO
Meta
Performance
Accessibility
Content verification
Production deploy
```

Do not add major new features on Day 3.

---

# 89. Technical Freeze

By end of Day 1 freeze:

```text
stack
routing
locale architecture
component structure
form schema
database destination
analytics tools
```

Changing these later risks launch.

---

# 90. Form Test Cases

Test:

```text
Valid submission
Missing required field
Invalid WhatsApp
Invalid email
No consent
Server error
Slow network
Double click
Mobile keyboard
Language switch
UTM capture
```

---

# 91. Lead Storage Test

Verify:

- record created once;
- all required fields stored;
- UTM stored;
- locale stored;
- timestamp correct;
- status = NEW.

---

# 92. WhatsApp Test

Verify on:

- Android;
- iPhone if available;
- desktop WhatsApp Web.

Check:

- number;
- message;
- encoding;
- tracking.

---

# 93. Bilingual QA

Verify:

```text
No mixed language
No missing translation
No overflow
No clipped button
No wrong locale links
No ID content under EN URL
```

---

# 94. Content QA

Before launch search for:

```text
[VERIFY:
TODO
Lorem
Coming Soon
2021/2022
```

All must be resolved or removed.

---

# 95. Responsive QA Devices

Minimum:

```text
Small mobile
Standard mobile
Large mobile
Tablet portrait
Tablet landscape
Laptop
Desktop
Large desktop
```

Use browser responsive tools plus real device when possible.

---

# 96. Browser QA

Minimum current major browsers:

```text
Chrome
Safari
Edge
Firefox
```

Mobile:

```text
Chrome Android
Safari iOS
```

---

# 97. Visual QA

Check:

- image crop;
- typography wrapping;
- section spacing;
- button alignment;
- sticky header;
- sticky CTA;
- footer;
- dark section contrast;
- accent consistency.

---

# 98. Accessibility QA

Check:

- keyboard tab;
- focus;
- screen zoom;
- labels;
- accordion keyboard;
- mobile menu;
- color contrast;
- reduced motion.

---

# 99. Performance QA

Check:

- hero load;
- image size;
- video load;
- unused JavaScript;
- layout shift;
- font load;
- mobile network simulation.

---

# 100. Analytics QA

Verify events:

```text
page_view
hero_cta_click
whatsapp_click
school_tour_click
start_admission_click
form_start
form_submit
language_switch
faq_open
```

Ensure events trigger once as intended.

---

# 101. SEO QA

Check:

- title;
- meta description;
- canonical;
- hreflang;
- OG image;
- heading hierarchy;
- alt text;
- sitemap;
- robots;
- noindex thank-you.

---

# 102. Production Launch Checklist

## Content

- [ ] All factual content verified.
- [ ] No placeholder.
- [ ] ID complete.
- [ ] EN complete.

## Contact

- [ ] WhatsApp correct.
- [ ] Email correct.
- [ ] Address correct.
- [ ] Operational hours correct.

## Admission

- [ ] Academic year correct.
- [ ] Timeline correct.
- [ ] Flow correct.
- [ ] Assessment wording correct.

## Technical

- [ ] HTTPS.
- [ ] Form works.
- [ ] Lead stored.
- [ ] WhatsApp works.
- [ ] Analytics works.
- [ ] Meta tags work.
- [ ] Sitemap works.
- [ ] Error states work.

## Visual

- [ ] Mobile approved.
- [ ] Desktop approved.
- [ ] Real SHS media used.
- [ ] No generic AI imagery.

---

# 103. Deployment Strategy

Recommended:

```text
Preview
↓
Internal Review
↓
Final Content Freeze
↓
Production Deployment
↓
Smoke Test
↓
Public Launch
```

---

# 104. Smoke Test After Deploy

Immediately test:

```text
/id/admission
/en/admission
language switch
Start Admission
WhatsApp
School Tour
form submit
thank-you
GA event
mobile menu
```

---

# 105. Rollback Strategy

Maintain:

- previous stable deploy;
- versioned git commit.

If critical issue occurs:

```text
rollback
↓
fix
↓
redeploy
```

Do not hot-edit production without source control.

---

# 106. Domain Strategy

Possible:

```text
www.suriaharapanschool.sch.id/admission
```

or:

```text
admission.suriaharapanschool.sch.id
```

Recommendation for V1:

> keep under main domain if technically easy.

Benefits:

- SEO;
- trust;
- simpler analytics.

---

# 107. Redirect Strategy

If existing admission page exists:

```text
301 redirect
```

only after new URL is stable.

Avoid broken links from:

- Instagram;
- Google;
- old QR;
- brochure.

---

# 108. QR Strategy

All printed QR should point to a stable URL.

Recommended:

```text
https://www.suriaharapanschool.sch.id/admission
```

Server can redirect to:

```text
/id/admission
```

This avoids printing locale-specific QR if unnecessary.

---

# 109. Future Portal Compatibility

Landing page should remain usable when Portal PSB launches.

Future:

```text
Start Admission
↓
Portal PSB
```

instead of:

```text
Lead Form
```

So keep CTA routing abstract enough to change later.

---

# 110. Future Portal Expansion

Possible future modules:

```text
Parent Account
Student Profile
Application Form
Document Upload
Assessment Schedule
Interview
Admission Result
Payment
Enrollment
```

Current architecture should not block these.

---

# 111. API Future-Proofing

Use stable form field names.

Avoid technical keys tied to UI label wording.

Good:

```text
academic_year
```

Not:

```text
tahunAjaran2027Dropdown
```

---

# 112. Content Future-Proofing

Keep content separate from UI.

This allows:

- copy update;
- translation update;
- PSB year update;
- timeline update;

without rewriting components.

---

# 113. Operational Handover

After launch provide:

```text
Repository
Environment variable documentation
Deployment access
Database access
Analytics access
Content update guide
Lead export guide
Rollback guide
```

---

# 114. Lead Operations

Admission Team must know:

```text
Where leads appear
Who checks them
How often
Who follows up
How status is updated
```

Landing page is not successful if leads are collected but not followed up.

---

# 115. Suggested Lead SLA

Internal SHS should define:

```text
Target response time: ______
```

Recommended operational principle:

> respond while interest is still fresh.

Do not display public SLA until officially approved.

---

# 116. Monitoring — First 24 Hours

Watch:

- page errors;
- form errors;
- lead count;
- WhatsApp clicks;
- mobile issues;
- analytics;
- broken links.

---

# 117. Monitoring — First 7 Days

Review:

```text
Traffic source
Top CTA
Form completion
Form drop-off
Mobile bounce
Language split
School Tour interest
Tuition interest
```

---

# 118. Optimization Backlog

After launch, possible improvements:

```text
A/B hero copy
CTA refinement
Form shortening
Photo optimization
FAQ improvement
Timeline clarity
Lead routing automation
CRM integration
```

Do not delay launch for these unless critical.

---

# 119. Non-Functional Requirements

Landing page should be:

```text
Responsive
Accessible
Secure
Fast
SEO-ready
Analytics-ready
Bilingual
Maintainable
```

---

# 120. Definition of Done — Tahap 06

Tahap 06 dianggap siap jika:

1. stack dipilih;
2. routes ditentukan;
3. locale architecture ditentukan;
4. component architecture disetujui;
5. content structure disetujui;
6. lead schema ditentukan;
7. form flow disetujui;
8. storage dipilih;
9. WhatsApp integration didefinisikan;
10. UTM capture didefinisikan;
11. analytics didefinisikan;
12. SEO requirement lengkap;
13. performance requirement lengkap;
14. security baseline lengkap;
15. QA checklist tersedia;
16. deployment flow tersedia;
17. launch checklist tersedia.

---

# 121. Recommended Technical Baseline

Untuk sprint 3 hari, baseline yang direkomendasikan:

```text
Next.js
+
TypeScript
+
Simple Design Token System
+
Structured ID/EN Content
+
Server-Side Lead Endpoint
+
PostgreSQL / Supabase
+
GA4
+
WhatsApp CTA
+
Vercel / Equivalent Deployment
```

Dengan catatan:

> Jika tim lebih cepat menggunakan stack existing SHS, gunakan stack existing selama memenuhi requirement dokumen ini.

---

# 122. Final Development Principle

> **Do not over-engineer a three-day launch. Engineer the parts that matter.**

Prioritas:

```text
ACCURATE CONTENT
+
FAST PAGE
+
CLEAR CTA
+
WORKING FORM
+
TRACKED LEADS
+
RELIABLE FOLLOW-UP
```

lebih penting daripada:

```text
COMPLEX BACKEND
+
EXCESSIVE ANIMATION
+
CUSTOM CMS
+
PORTAL FEATURES
```

---

# 123. Next Stage

Setelah Tahap 06, lanjut ke:

# Tahap 07 — SHS PSB QA, UAT & Launch Readiness V1

Tahap 07 akan fokus pada:

1. functional test;
2. responsive test;
3. bilingual test;
4. content verification;
5. form test;
6. lead test;
7. analytics test;
8. SEO test;
9. accessibility test;
10. performance test;
11. UAT;
12. defect classification;
13. launch gate;
14. post-launch monitoring.

Urutan final:

```text
BLUEPRINT
↓
CONTENT AUDIT
↓
USER FLOW & WIREFRAME
↓
CREATIVE DIRECTION
↓
FINAL COPY
↓
DEVELOPMENT SPECIFICATION
↓
QA / UAT
↓
LAUNCH
```
