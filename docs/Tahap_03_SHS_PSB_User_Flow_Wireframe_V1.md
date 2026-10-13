# Tahap 03 — SHS PSB User Flow & Wireframe V1

**Project:** Suria Harapan School — Penerimaan Siswa Baru  
**Document Version:** V1  
**Document Type:** UX Flow / Conversion Flow / Low-Fidelity Wireframe  
**Primary Output:** User Flow + Mobile-First Wireframe + Desktop Wireframe  
**Language:** Bahasa Indonesia & English  
**Scope:** Bilingual PSB Landing Page + Admission Lite  
**Status:** Draft for UX Freeze  

---

# 1. Purpose

Dokumen ini menerjemahkan hasil:

- **Tahap 01 — SHS PSB Landing Page Blueprint V1**
- **Tahap 02 — SHS PSB Content Audit & Content Inventory V1**

menjadi struktur pengalaman pengguna yang konkret.

Tahap 03 bertujuan untuk:

1. menentukan bagaimana pengguna masuk ke landing page;
2. menentukan jalur pengguna berdasarkan tingkat kesiapan;
3. menentukan urutan informasi;
4. menentukan CTA utama dan sekunder;
5. menentukan flow School Tour, WhatsApp, dan Start Admission;
6. menentukan perilaku bilingual;
7. menentukan wireframe mobile-first;
8. menentukan wireframe desktop;
9. menentukan interaction notes;
10. mengunci struktur sebelum masuk ke final visual design.

Dokumen ini belum menentukan:

- warna final;
- font final;
- ilustrasi final;
- styling final;
- motion final;
- visual brand final.

---

# 2. UX Objective

Landing page harus membantu pengguna bergerak dari:

```text
ARRIVE
↓
UNDERSTAND
↓
EXPLORE
↓
TRUST
↓
DECIDE
↓
CONVERT
```

Landing page tidak boleh mengandalkan asumsi bahwa semua pengguna langsung siap mendaftar.

Karena itu, pengalaman dibagi menjadi tiga tingkat kesiapan.

---

# 3. User Readiness Model

## Level 1 — Exploring

Pengguna baru mengenal SHS.

Kebutuhan:

- memahami sekolah secara cepat;
- melihat suasana sekolah;
- melihat jenjang;
- melihat program;
- melihat kehidupan siswa.

Primary CTA:

```text
Explore SHS
```

Secondary CTA:

```text
Explore Learning Levels
```

---

## Level 2 — Considering

Pengguna sudah tertarik tetapi masih membutuhkan keyakinan.

Kebutuhan:

- melihat curriculum;
- melihat student life;
- melihat trust / proof;
- memahami admission process;
- melihat timeline;
- bertanya tentang biaya;
- melakukan school visit.

Primary CTA:

```text
Book a School Tour
```

atau:

```text
Talk to Admission
```

---

## Level 3 — Ready

Pengguna sudah siap masuk ke proses penerimaan.

Kebutuhan:

- proses singkat;
- form tidak panjang;
- informasi jelas;
- CTA kuat;
- konfirmasi setelah submit.

Primary CTA:

```text
Start Admission
```

---

# 4. Primary User Personas

## Persona A — Parent Explorer

Datang dari:

- Instagram;
- Facebook;
- Google;
- QR;
- referral.

Belum mengetahui banyak tentang SHS.

Perilaku:

```text
Hero
↓
Why SHS
↓
Levels
↓
Student Life
↓
Trust
↓
School Tour
```

Conversion ideal:

> School Tour / WhatsApp

---

## Persona B — Parent Evaluator

Sudah mengenal SHS.

Datang untuk membandingkan sekolah.

Perilaku:

```text
Hero
↓
Levels
↓
Learning
↓
Programmes
↓
Trust
↓
Admission
↓
FAQ
```

Conversion ideal:

> Talk to Admission / Start Admission

---

## Persona C — Ready-to-Apply Parent

Sudah siap mendaftar.

Perilaku:

```text
Hero
↓
Admission
↓
Timeline
↓
Start Admission
↓
Form
```

Conversion ideal:

> Form Submit

---

## Persona D — Prospective Student

Datang melalui:

- Instagram;
- TikTok;
- link orang tua;
- direct sharing.

Perilaku:

```text
Hero
↓
Student Life
↓
Programmes
↓
Sports / Art / Activities
↓
Levels
```

Conversion ideal:

> Emotional interest

Tidak selalu melakukan form sendiri.

---

# 5. Entry Points

Landing page harus siap menerima traffic dari:

```text
Instagram
Facebook
TikTok
Google Search
Google Ads
Meta Ads
QR Code
WhatsApp
School Event
Referral
Direct Visit
```

Setiap entry point dapat menggunakan UTM.

Contoh:

```text
?utm_source=instagram
&utm_medium=social
&utm_campaign=psb_2027
&utm_content=student_life
```

---

# 6. Global User Flow

```text
TRAFFIC SOURCE
      ↓
PSB LANDING PAGE
      ↓
     HERO
      ↓
 ┌────┴───────────────┐
 ↓                    ↓
EXPLORE            READY
 ↓                    ↓
WHY SHS          ADMISSION
 ↓                    ↓
LEVELS            TIMELINE
 ↓                    ↓
LEARNING           FORM
 ↓                    ↓
STUDENT LIFE      THANK YOU
 ↓                    ↓
TRUST             WHATSAPP
 ↓
ADMISSION
 ↓
 ┌────────────┬───────────────┐
 ↓            ↓               ↓
WHATSAPP   SCHOOL TOUR    START ADMISSION
```

---

# 7. Conversion Architecture

Landing page menggunakan tiga jenis conversion.

## 7.1 Soft Conversion

Tujuan:

- menjaga pengguna tetap mengeksplorasi.

CTA:

- Explore SHS
- See Student Life
- Explore Levels

---

## 7.2 Mid Conversion

Tujuan:

- membuka hubungan dengan Admission Team.

CTA:

- Talk to Admission
- Book a School Tour
- Get Tuition Information

---

## 7.3 Hard Conversion

Tujuan:

- memperoleh lead yang siap masuk proses admission.

CTA:

- Start Admission

---

# 8. Main Navigation Flow

Desktop navigation:

```text
[SHS Logo]

Why SHS
Levels
Student Life
Admissions
FAQ

ID | EN

[Start Admission]
```

Recommended behavior:

- sticky header after initial scroll;
- Start Admission selalu terlihat;
- active section indication optional;
- transparent header over hero dapat berubah menjadi solid saat scroll.

---

# 9. Mobile Navigation Flow

Mobile header:

```text
[Logo]                 [Menu]
                [Start Admission]
```

atau jika ruang terbatas:

```text
[Logo]           [Menu]
```

Setelah menu dibuka:

```text
Why SHS
Levels
Student Life
Admissions
FAQ

Language
ID / EN

Talk to Admission

[Start Admission]
```

CTA Start Admission harus terlihat jelas.

---

# 10. Language Switch Flow

Language switch tidak boleh:

- mengarahkan user kembali ke homepage;
- menghilangkan posisi section jika dapat dihindari;
- kehilangan UTM;
- kehilangan form state tanpa warning.

Recommended behavior:

```text
/id/admission#student-life
        ⇅
/en/admission#student-life
```

Jika user sedang mengisi form:

```text
Switch language
↓
Retain entered values
↓
Translate labels only
```

Jika teknis tidak memungkinkan:

> tampilkan warning singkat sebelum reload.

---

# 11. Page Architecture V1

Recommended section order:

```text
01 Navigation
02 Hero
03 SHS at a Glance
04 Why SHS
05 Find Your Learning Journey
06 Learning at SHS
07 Beyond the Classroom
08 Life at SHS
09 Trust & Achievements
10 Admission Journey
11 Admission Timeline
12 School Visit
13 FAQ
14 Start Your SHS Journey
15 Final CTA
16 Footer
```

---

# 12. Section Flow Rationale

Urutan dibangun berdasarkan logika:

```text
EMOTION
↓
UNDERSTANDING
↓
RELEVANCE
↓
EXPERIENCE
↓
TRUST
↓
ADMISSION CLARITY
↓
ACTION
```

Artinya:

- Hero menjual rasa;
- Why SHS menjual alasan;
- Levels menjual relevansi;
- Learning & Student Life menjual pengalaman;
- Trust menjual keyakinan;
- Admission menjual kejelasan;
- Form menjual tindakan.

---

# 13. Mobile-First Wireframe

---

# 13.1 Mobile — Navigation

```text
┌─────────────────────────────┐
│ SHS LOGO              ☰     │
│                             │
│ [Start Admission]           │
└─────────────────────────────┘
```

Interaction:

- sticky after scroll;
- button dapat dipindah ke bottom sticky bar jika lebih efektif.

---

# 13.2 Mobile — Hero

```text
┌─────────────────────────────┐
│ [FULL WIDTH PHOTO / VIDEO]  │
│                             │
│  SMALL EYEBROW              │
│                             │
│  BIG HEADLINE               │
│  2–4 lines maximum          │
│                             │
│  Short supporting text      │
│                             │
│ [Start Admission]           │
│ [Explore SHS ↓]             │
│                             │
└─────────────────────────────┘
```

Recommended content density:

- headline maximum 4 lines on mobile;
- supporting text maximum ~40 words;
- maximum 2 CTA.

---

# 13.3 Mobile — SHS at a Glance

```text
┌─────────────────────────────┐
│ SHS AT A GLANCE             │
│                             │
│  2013       X LEVELS        │
│  Founded    Learning        │
│                             │
│  A          X LANGUAGES     │
│  Accreditation              │
│                             │
└─────────────────────────────┘
```

Use only verified data.

Recommended:

- 3–4 facts;
- avoid long cards;
- use typography instead of icon-heavy layout.

---

# 13.4 Mobile — Why SHS

```text
┌─────────────────────────────┐
│ WHY SHS                     │
│                             │
│ A school where learning     │
│ feels active and meaningful │
│                             │
│ 01 Active Learning          │
│ Short explanation           │
│                             │
│ 02 Character                │
│ Short explanation           │
│                             │
│ 03 Talent                   │
│ Short explanation           │
│                             │
│ [Talk to Admission]         │
└─────────────────────────────┘
```

Maximum:

> 3–4 differentiators.

---

# 13.5 Mobile — Learning Levels

```text
┌─────────────────────────────┐
│ FIND YOUR LEARNING JOURNEY  │
│                             │
│ [EARLY LEARNING PHOTO]      │
│ Early Learning              │
│ Age / Level                 │
│ Short description           │
│ [Explore]                   │
│                             │
│ [PRIMARY PHOTO]             │
│ Primary                     │
│ Grade                       │
│ Short description           │
│ [Explore]                   │
│                             │
│ [SECONDARY PHOTO]           │
│ Secondary                   │
│ Grade                       │
│ Short description           │
│ [Explore]                   │
└─────────────────────────────┘
```

Interaction option:

- swipeable cards;
- stacked editorial panels preferred over generic 3-card UI.

---

# 13.6 Mobile — Learning at SHS

```text
┌─────────────────────────────┐
│ LEARNING AT SHS             │
│                             │
│ HEADLINE                    │
│                             │
│ Short intro                 │
│                             │
│ [PHOTO]                     │
│                             │
│ ASK                         │
│ Small supporting copy       │
│                             │
│ EXPLORE                     │
│ Small supporting copy       │
│                             │
│ CREATE                      │
│ Small supporting copy       │
│                             │
│ COLLABORATE                 │
│ Small supporting copy       │
└─────────────────────────────┘
```

Avoid:

> 4 identical icon cards.

Use text + photography.

---

# 13.7 Mobile — Beyond the Classroom

```text
┌─────────────────────────────┐
│ BEYOND THE CLASSROOM        │
│                             │
│ [SPORT PHOTO]               │
│ SPORT                       │
│ Short label                 │
│                             │
│ [MUSIC PHOTO]               │
│ MUSIC                       │
│                             │
│ [SCIENCE / TECH PHOTO]      │
│ SCIENCE & TECHNOLOGY        │
│                             │
│ [ART / LIFE SKILL PHOTO]    │
│ LIFE SKILLS / ARTS          │
└─────────────────────────────┘
```

Recommended interaction:

- horizontal snap-scroll on mobile;
- no auto-carousel required.

---

# 13.8 Mobile — Life at SHS

```text
┌─────────────────────────────┐
│ LIFE AT SHS                 │
│ School should feel alive.   │
│                             │
│ [WIDE PHOTO]                │
│ caption                     │
│                             │
│ [PORTRAIT] [PORTRAIT]       │
│                             │
│ [WIDE PHOTO]                │
│                             │
│ small quote / real moment   │
│                             │
│ [See More / Instagram]      │
└─────────────────────────────┘
```

Important:

- asymmetrical layout;
- candid photo priority;
- not all images need captions.

---

# 13.9 Mobile — Trust & Achievements

```text
┌─────────────────────────────┐
│ WHY PARENTS TRUST SHS       │
│                             │
│ BIG PROOF NUMBER            │
│ Supporting label            │
│                             │
│ Accreditation / Curriculum  │
│ Short factual copy          │
│                             │
│ Achievement Highlight       │
│ Short factual copy          │
│                             │
│ [PHOTO / PROOF]             │
└─────────────────────────────┘
```

No unsupported claims.

---

# 13.10 Mobile — Admission Journey

```text
┌─────────────────────────────┐
│ YOUR ADMISSION JOURNEY      │
│                             │
│ 01 Inquiry                  │
│    Short explanation        │
│    │                        │
│ 02 School Visit             │
│    Short explanation        │
│    │                        │
│ 03 Assessment              │
│    Short explanation        │
│    │                        │
│ 04 Confirmation             │
│    Short explanation        │
│    │                        │
│ 05 Enrollment               │
│                             │
│ [Start Admission]           │
└─────────────────────────────┘
```

Use vertical timeline on mobile.

Final steps must match official process.

---

# 13.11 Mobile — Admission Timeline

```text
┌─────────────────────────────┐
│ ADMISSION 20XX/20XX         │
│                             │
│ [Early] [Primary] [Secondary]
│                             │
│ SEP       Admission Open    │
│ OCT       Early Admission   │
│ JAN       Regular Period    │
│ APR       Final Intake      │
│ JUL       First Day         │
│                             │
│ *Subject to verification    │
└─────────────────────────────┘
```

Use level tabs only if schedules differ.

Do not show artificial countdown unless deadline is real.

---

# 13.12 Mobile — School Visit

```text
┌─────────────────────────────┐
│ [CAMPUS PHOTO]              │
│                             │
│ COME SEE SHS FOR YOURSELF   │
│                             │
│ Visit classrooms, meet the  │
│ team, and experience SHS.   │
│                             │
│ [Book a School Tour]        │
│ [Talk to Admission]         │
└─────────────────────────────┘
```

Potential location map is optional for V1.

---

# 13.13 Mobile — FAQ

```text
┌─────────────────────────────┐
│ WHAT PARENTS WANT TO KNOW   │
│                             │
│ + What curriculum...?       │
│                             │
│ + Is assessment required?   │
│                             │
│ + How can we visit?         │
│                             │
│ + What documents...?        │
│                             │
│ + How do I get tuition...?  │
└─────────────────────────────┘
```

Accordion:

- one open at a time optional;
- accessible keyboard behavior required on desktop.

---

# 13.14 Mobile — Start Your SHS Journey

```text
┌─────────────────────────────┐
│ START YOUR SHS JOURNEY      │
│                             │
│ Parent / Guardian Name      │
│ [_______________________]   │
│                             │
│ WhatsApp                    │
│ [_______________________]   │
│                             │
│ Email                       │
│ [_______________________]   │
│                             │
│ Student Name                │
│ [_______________________]   │
│                             │
│ Interested Level            │
│ [Select ▼]                  │
│                             │
│ Grade                       │
│ [Select ▼]                  │
│                             │
│ Academic Year               │
│ [Select ▼]                  │
│                             │
│ I'm interested in:          │
│ ○ Admission Info            │
│ ○ Tuition Info              │
│ ○ School Tour               │
│ ○ Start Admission           │
│                             │
│ [Start My SHS Journey]      │
│                             │
│ Short privacy statement     │
└─────────────────────────────┘
```

Recommended form length:

> 6–8 fields maximum.

---

# 13.15 Mobile — Final CTA

```text
┌─────────────────────────────┐
│ READY TO TAKE THE NEXT STEP?│
│                             │
│ Short supporting copy       │
│                             │
│ [Start Admission]           │
│ [WhatsApp Admission]        │
└─────────────────────────────┘
```

---

# 13.16 Mobile — Footer

```text
┌─────────────────────────────┐
│ SHS LOGO                    │
│ Shine and Be a Blessing     │
│                             │
│ Address                     │
│ Phone                       │
│ WhatsApp                    │
│ Email                       │
│                             │
│ Why SHS                     │
│ Levels                      │
│ Admissions                  │
│ FAQ                         │
│                             │
│ ID | EN                     │
│                             │
│ Instagram / Social          │
│                             │
│ © Suria Harapan School      │
└─────────────────────────────┘
```

---

# 14. Desktop Wireframe

---

# 14.1 Desktop — Hero

```text
┌────────────────────────────────────────────────────────────┐
│ LOGO   Why SHS  Levels  Student Life  Admissions FAQ ID EN│
│                                           [Start Admission]│
├────────────────────────────────────────────────────────────┤
│                                                            │
│  EYEBROW                         [ LARGE HERO PHOTO / VIDEO]│
│                                                            │
│  LARGE HEADLINE                                             │
│  LARGE HEADLINE                                             │
│                                                            │
│  Short supporting copy                                     │
│                                                            │
│  [Start Admission] [Explore SHS]                           │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

Alternative:

- photo can break grid;
- headline can overlap image edge slightly;
- avoid centered corporate hero.

---

# 14.2 Desktop — SHS at a Glance

```text
┌────────────────────────────────────────────────────────────┐
│ SHS AT A GLANCE                                            │
│                                                            │
│  2013           A           X            X                  │
│  Founded        Accredited  Levels       Languages          │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

Use typographic rhythm, not cards.

---

# 14.3 Desktop — Why SHS

```text
┌────────────────────────────────────────────────────────────┐
│ WHY SHS                                                    │
│                                                            │
│ BIG STATEMENT                                              │
│ BIG STATEMENT                           [REAL PHOTO]        │
│                                                            │
│ 01 Active Learning                                        │
│ 02 Character Growth                                       │
│ 03 Talent & Passion                                       │
│ 04 Community                                              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

# 14.4 Desktop — Learning Levels

```text
┌────────────────────────────────────────────────────────────┐
│ FIND YOUR LEARNING JOURNEY                                │
│                                                            │
│ [EARLY LEARNING]     [PRIMARY]           [SECONDARY]       │
│ Large photo           Large photo         Large photo       │
│ Level                 Level               Level             │
│ Short copy            Short copy          Short copy        │
│ Explore →             Explore →           Explore →         │
└────────────────────────────────────────────────────────────┘
```

Avoid generic card styling.

Possible:

- photos have different ratios;
- each level may use a different accent.

---

# 14.5 Desktop — Learning at SHS

```text
┌────────────────────────────────────────────────────────────┐
│ LEARNING AT SHS                                            │
│                                                            │
│  BIG HEADLINE                       [LARGE CLASS PHOTO]     │
│                                                            │
│  Ask          Explore          Create          Collaborate  │
│  short copy   short copy       short copy      short copy   │
└────────────────────────────────────────────────────────────┘
```

---

# 14.6 Desktop — Beyond the Classroom

```text
┌────────────────────────────────────────────────────────────┐
│ BEYOND THE CLASSROOM                                       │
│                                                            │
│ [SPORT - LARGE]       [MUSIC - PORTRAIT]                  │
│                                                            │
│          [SCIENCE - WIDE]        [ART - SMALL]             │
│                                                            │
│ [LIFE SKILLS]                                             │
└────────────────────────────────────────────────────────────┘
```

Editorial collage preferred.

---

# 14.7 Desktop — Life at SHS

```text
┌────────────────────────────────────────────────────────────┐
│ LIFE AT SHS                     SCHOOL SHOULD FEEL ALIVE.  │
│                                                            │
│ [WIDE PHOTO]                          [PORTRAIT PHOTO]     │
│                                                            │
│        [SMALL PHOTO] [SMALL PHOTO]                        │
│                                                            │
│ [QUOTE / REAL MOMENT]              [WIDE PHOTO]           │
└────────────────────────────────────────────────────────────┘
```

This is one of the most visually expressive sections.

---

# 14.8 Desktop — Trust & Achievements

```text
┌────────────────────────────────────────────────────────────┐
│ TRUST & PROOF                                              │
│                                                            │
│ BIG NUMBER     ACCREDITATION       ACHIEVEMENT             │
│ Supporting     Supporting          Supporting              │
│ text           text                text                    │
│                                                            │
│ [OPTIONAL PHOTO / CERTIFICATE / ACHIEVEMENT IMAGE]         │
└────────────────────────────────────────────────────────────┘
```

---

# 14.9 Desktop — Admission Journey

```text
┌────────────────────────────────────────────────────────────┐
│ YOUR ADMISSION JOURNEY                                     │
│                                                            │
│ 01 Inquiry ── 02 Visit ── 03 Assessment ── 04 Confirmation│
│                                              ── 05 Enroll  │
│                                                            │
│ [Start Admission]                                          │
└────────────────────────────────────────────────────────────┘
```

Horizontal timeline on desktop.

---

# 14.10 Desktop — Admission Timeline

```text
┌────────────────────────────────────────────────────────────┐
│ ADMISSION 20XX / 20XX          [EL] [Primary] [Secondary] │
│                                                            │
│ SEP────OCT────NOV────JAN────MAR────APR────JUL              │
│ Open   Early                 Regular        Enrollment     │
│                                                            │
│ [Start Admission]       [Talk to Admission]                │
└────────────────────────────────────────────────────────────┘
```

---

# 14.11 Desktop — School Visit

```text
┌────────────────────────────────────────────────────────────┐
│ [LARGE CAMPUS PHOTO]       COME SEE SHS FOR YOURSELF      │
│                            Supporting copy                  │
│                            [Book a School Tour]             │
│                            [Talk to Admission]              │
└────────────────────────────────────────────────────────────┘
```

---

# 14.12 Desktop — FAQ

```text
┌────────────────────────────────────────────────────────────┐
│ WHAT PARENTS WANT TO KNOW                                  │
│                                                            │
│ FAQ COLUMN 1                 FAQ COLUMN 2                   │
│ + Curriculum                + Documents                    │
│ + Languages                 + Tuition                      │
│ + Assessment                + School Tour                  │
│ + Academic year             + Contact                     │
└────────────────────────────────────────────────────────────┘
```

Accordion can still be used.

---

# 14.13 Desktop — Lead Form

```text
┌────────────────────────────────────────────────────────────┐
│ START YOUR SHS JOURNEY          │ FORM                     │
│                                 │                          │
│ Short persuasive statement      │ Parent Name              │
│                                 │ WhatsApp                 │
│ What happens next:              │ Email                    │
│ 1. Submit                       │ Student Name             │
│ 2. Admission contacts you       │ Level / Grade           │
│ 3. Continue your journey        │ Academic Year           │
│                                 │ Interest                 │
│                                 │                          │
│                                 │ [Submit]                 │
└────────────────────────────────────────────────────────────┘
```

---

# 15. CTA Placement Map

CTA should appear at intentional intervals.

| Section | CTA |
|---|---|
| Navigation | Start Admission |
| Hero | Start Admission / Explore SHS |
| Why SHS | Talk to Admission |
| Levels | Explore Level |
| Student Life | Optional Explore |
| Trust | Optional Talk to Admission |
| Admission Journey | Start Admission |
| Timeline | Start Admission |
| School Visit | Book a School Tour |
| FAQ | Talk to Admission |
| Lead Form | Start My SHS Journey |
| Final CTA | Start Admission / WhatsApp |

Avoid:

> CTA button after every paragraph.

---

# 16. Sticky CTA Strategy — Mobile

Recommended option:

```text
┌───────────────────────────────┐
│ [WhatsApp]   [Start Admission]│
└───────────────────────────────┘
```

Sticky bottom CTA may appear after the user leaves the hero.

Rules:

- does not cover form fields;
- hides while keyboard is open;
- accessible;
- not overly tall;
- may reduce to one CTA near form.

---

# 17. WhatsApp Flow

User clicks:

```text
Talk to Admission
```

Flow:

```text
CTA Click
↓
Track Event
↓
Open WhatsApp
↓
Pre-filled message
```

Suggested message pattern:

```text
Halo Tim Admission Suria Harapan School,
saya ingin mendapatkan informasi mengenai Penerimaan Siswa Baru untuk [jenjang].
```

English:

```text
Hello Suria Harapan School Admission Team,
I would like to get more information about admission for [level].
```

Do not collect unnecessary personal information in the prefilled message.

---

# 18. School Tour Flow

Recommended V1:

```text
Book School Tour
↓
Short Form / Contact Form
↓
Name
WhatsApp
Student Level
Preferred Day
Optional Note
↓
Submit
↓
Thank You
↓
Admission Team Confirms Schedule Manually
```

Do not build:

- live calendar;
- automated scheduling;
- complex slot engine;

for V1 unless already available.

---

# 19. Start Admission Flow

Recommended:

```text
Start Admission
↓
Scroll / Open Lead Form
↓
Fill Parent Data
↓
Fill Student Data
↓
Select Level
↓
Select Grade
↓
Select Academic Year
↓
Select Interest
↓
Consent
↓
Submit
↓
Save Lead
↓
Thank You Page
↓
WhatsApp Option
↓
Admission Team Follow-Up
```

This is not yet the full official application.

---

# 20. Form Field Specification

## Required Fields

Recommended:

```text
Parent / Guardian Name *
WhatsApp *
Student Name *
Interested Level *
Grade *
Academic Year *
Interest *
```

## Optional

```text
Email
Current School
Date of Birth
Note
```

Because the primary goal is lead capture, keep friction low.

---

# 21. Form Validation

## Name

- minimum 2 characters;
- no numbers-only input.

## WhatsApp

- normalize Indonesian number;
- allow:
  - 08...
  - +62...
  - 62...

## Email

- validate only if field filled.

## Level

- required.

## Grade

- options depend on level.

## Academic Year

- required.

---

# 22. Dynamic Form Logic

Example:

```text
Interested Level = Early Learning
↓
Grade options:
Nursery 1
Nursery 2
Kindergarten 1
Kindergarten 2
```

If:

```text
Interested Level = Primary
↓
Grade 1–6
```

If:

```text
Interested Level = Secondary
↓
Show current official grade options
```

Use only after official grade structure is confirmed.

---

# 23. Consent & Privacy

Form should include concise consent:

ID example:

> Dengan mengirimkan formulir ini, saya bersedia dihubungi oleh Tim Admission Suria Harapan School terkait informasi penerimaan siswa.

EN example:

> By submitting this form, I agree to be contacted by the Suria Harapan School Admission Team regarding admission information.

If privacy policy exists:

> include link.

---

# 24. Submit States

Required states:

```text
DEFAULT
↓
VALIDATING
↓
SUBMITTING
↓
SUCCESS
```

Error states:

```text
FIELD ERROR
SERVER ERROR
NETWORK ERROR
DUPLICATE / RATE LIMIT
```

Never silently fail.

---

# 25. Thank You Page Wireframe

```text
┌─────────────────────────────────────┐
│ SHS LOGO                            │
│                                     │
│ THANK YOU!                          │
│                                     │
│ Your SHS journey starts here.       │
│                                     │
│ Our Admission Team will contact     │
│ you using the WhatsApp number       │
│ provided.                           │
│                                     │
│ [Chat with Admission Team]          │
│ [Back to SHS]                       │
│                                     │
└─────────────────────────────────────┘
```

Optional:

- show reference number if easy to generate;
- not required for V1.

---

# 26. FAQ Interaction

Recommended:

```text
Question
↓
Tap / Click
↓
Expand answer
```

Rules:

- URL hash optional;
- accessible;
- answer not too long;
- important facts repeated in admission section where needed.

---

# 27. Level Explorer Interaction

Recommended option:

Desktop:

```text
Hover / Click level
↓
Image changes
↓
Short description appears
↓
Explore CTA
```

Mobile:

```text
Stacked
or
Horizontal swipe
```

Avoid interaction that hides important information behind hover only.

---

# 28. Student Life Interaction

Recommended:

- light horizontal scroll;
- image reveal;
- subtle hover caption;
- optional Instagram link.

Avoid:

- autoplay carousel;
- excessive motion;
- infinite slider that users cannot control.

---

# 29. Admission Timeline Interaction

If level timelines differ:

```text
Early Learning
Primary
Secondary
```

User selects one tab.

Timeline updates.

Rules:

- first tab selected by default;
- mobile horizontal scroll only if necessary;
- dates must remain readable;
- do not animate excessively.

---

# 30. Scroll Behavior

Recommended:

- smooth anchor navigation;
- no scroll hijacking;
- sticky header;
- optional subtle section reveal.

Anchor examples:

```text
#why-shs
#levels
#student-life
#admissions
#faq
#apply
```

---

# 31. Mobile Performance UX

Priority:

- hero loads quickly;
- poster image before video loads;
- lazy-load below-fold media;
- no heavy animation dependency;
- large tap targets;
- minimum input font size to avoid mobile zoom issues;
- compressed photos.

---

# 32. Accessibility Baseline

Minimum:

- keyboard navigable;
- semantic headings;
- sufficient contrast;
- visible focus states;
- alt text;
- form labels;
- error messages associated with fields;
- buttons not represented only by icons;
- language attribute set correctly.

---

# 33. Empty / Missing Content Behavior

If a content block is not verified by launch:

Do not display:

```text
Coming Soon
Lorem Ipsum
TBD
```

unless intentionally useful.

Better:

> remove the block entirely.

Example:

If achievements are not ready:

```text
Remove achievement module
```

Do not fabricate proof.

---

# 34. Bilingual Content Behavior

Both languages must have equivalent information architecture.

Structure:

```text
ID
Hero
Why SHS
Levels
...
Admission
Form

EN
Hero
Why SHS
Levels
...
Admission
Form
```

Do not create:

- complete Indonesian page;
- incomplete English page.

If English content is not complete:

> do not launch the language switch yet.

---

# 35. URL Structure

Recommended:

```text
/id/admission
/en/admission
```

Thank you:

```text
/id/admission/thank-you
/en/admission/thank-you
```

Optional level anchors:

```text
/id/admission#levels
/en/admission#levels
```

---

# 36. Analytics Event Map

Track minimum:

| Event | Trigger |
|---|---|
| `page_view` | Page loaded |
| `hero_cta_click` | Hero Start Admission |
| `explore_click` | Explore SHS |
| `level_view` | Level explored |
| `whatsapp_click` | WhatsApp CTA |
| `school_tour_click` | School Tour CTA |
| `admission_cta_click` | Any Start Admission |
| `form_start` | First form interaction |
| `form_submit` | Successful submission |
| `form_error` | Failed submission |
| `language_switch` | ID/EN switch |
| `faq_open` | FAQ opened |

Optional:

```text
scroll_50
scroll_75
scroll_90
```

---

# 37. UTM Persistence

UTM should persist until conversion.

Example:

```text
User enters:
?id=...&utm_source=instagram

↓
User explores page
↓
User submits form

Stored with lead:
utm_source
utm_medium
utm_campaign
utm_content
```

---

# 38. Lead Source Mapping

Recommended lead source categories:

```text
Instagram
Facebook
TikTok
Google Organic
Google Ads
WhatsApp
QR
Event
Referral
Direct
Other
```

---

# 39. Error Page / Failure Flow

If form submission fails:

```text
We couldn't send your request.
Please try again or contact our Admission Team via WhatsApp.
```

Buttons:

```text
Try Again
WhatsApp Admission
```

Never lose entered data if possible.

---

# 40. Mobile Wireframe Summary

```text
NAV
↓
HERO
↓
AT A GLANCE
↓
WHY SHS
↓
LEVELS
↓
LEARNING
↓
BEYOND CLASSROOM
↓
LIFE AT SHS
↓
TRUST
↓
ADMISSION JOURNEY
↓
TIMELINE
↓
SCHOOL VISIT
↓
FAQ
↓
LEAD FORM
↓
FINAL CTA
↓
FOOTER
```

---

# 41. Desktop Wireframe Summary

Desktop should use the same content order.

Differences:

- more editorial composition;
- more whitespace;
- side-by-side sections;
- horizontal timeline;
- larger photography;
- fewer stacked blocks;
- richer asymmetry;
- stronger typography scale.

---

# 42. What Must Not Change After UX Freeze

Once Tahap 03 is approved, the following should remain stable:

- section order;
- primary CTA;
- main conversion flow;
- form purpose;
- language structure;
- lead destination;
- admission section placement;
- navigation architecture.

Can still change:

- wording;
- photo;
- typography;
- color;
- spacing;
- visual treatment;
- minor interactions.

---

# 43. Wireframe Approval Checklist

## Structure

- [ ] Page order approved.
- [ ] Hero purpose clear.
- [ ] Why SHS clear.
- [ ] Levels clear.
- [ ] Student Life present.
- [ ] Admission prominent.
- [ ] FAQ present.
- [ ] Form position approved.

## Conversion

- [ ] Start Admission visible.
- [ ] WhatsApp visible.
- [ ] School Tour visible.
- [ ] Form simple enough.
- [ ] Thank You flow clear.

## Mobile

- [ ] Hero readable.
- [ ] Navigation usable.
- [ ] Form usable.
- [ ] Timeline readable.
- [ ] Sticky CTA approved.

## Bilingual

- [ ] ID/EN architecture approved.
- [ ] Language switching behavior approved.
- [ ] Form labels bilingual-ready.

---

# 44. UX Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Too much content | User fatigue | Enforce short-copy rules |
| Too many CTA | Confusion | Maintain CTA hierarchy |
| Form too long | Drop-off | Keep 6–8 fields |
| Weak Student Life | Website feels corporate | Use real photography |
| Admission hidden too low | Conversion loss | Sticky CTA + nav CTA |
| Timeline unclear | Parent confusion | Use simple level-based timeline |
| English inconsistent | Low trust | Human review |
| Mobile heavy | High bounce | Compress media |
| Unverified claims | Trust / legal risk | Content freeze before publish |

---

# 45. UX Definition of Done

Tahap 03 dianggap selesai jika:

1. semua entry point telah didefinisikan;
2. tiga tingkat user readiness telah didefinisikan;
3. primary journey disetujui;
4. CTA hierarchy disetujui;
5. mobile wireframe disetujui;
6. desktop wireframe disetujui;
7. form flow disetujui;
8. School Tour flow disetujui;
9. WhatsApp flow disetujui;
10. bilingual behavior disetujui;
11. Thank You flow disetujui;
12. analytics event map tersedia.

---

# 46. Recommended UX Freeze

Recommended final structure:

```text
1. Navigation
2. Hero
3. SHS at a Glance
4. Why SHS
5. Find Your Learning Journey
6. Learning at SHS
7. Beyond the Classroom
8. Life at SHS
9. Trust & Achievements
10. Admission Journey
11. Admission Timeline
12. School Visit
13. FAQ
14. Start Your SHS Journey
15. Final CTA
16. Footer
```

This structure should become the baseline for UI design.

---

# 47. Next Stage

After UX / wireframe approval:

# Tahap 04 — SHS PSB Creative Direction & UI Design System V1

Tahap berikutnya menentukan:

1. visual concept;
2. art direction;
3. brand color application;
4. typography;
5. image treatment;
6. grid;
7. spacing;
8. button style;
9. form style;
10. section styling;
11. icon strategy;
12. motion direction;
13. anti-AI visual rules;
14. desktop visual rules;
15. mobile visual rules.

Recommended direction from Tahap 01:

> **Bright Editorial School Life**

The goal of Tahap 04 is to ensure the landing page feels:

```text
DESIGNED
NOT GENERATED
```

---

# 48. Final UX Principle

The landing page should never force every visitor into:

```text
REGISTER NOW
```

Instead, it should allow users to move naturally through:

```text
EXPLORE
↓
TRUST
↓
TALK
↓
VISIT
↓
APPLY
```

Core principle:

> **Give parents enough clarity to make the next decision, not every decision at once.**

And for students:

> **Make SHS feel like a school they can imagine themselves being part of.**
