# Tahap 02 — SHS PSB Content Audit & Content Inventory V1

**Project:** Suria Harapan School — Penerimaan Siswa Baru  
**Document Version:** V1  
**Document Type:** Content Audit / Content Inventory / Launch Readiness  
**Primary Output:** Verified-content checklist dan master content inventory untuk PSB Landing Page  
**Language:** Bahasa Indonesia & English  
**Target Delivery:** Mendukung launch landing page dalam 3 hari  
**Status:** Working Document — Requires Internal SHS Verification  

---

# 1. Purpose

Dokumen ini merupakan kelanjutan dari:

> **Tahap 01 — SHS PSB Landing Page Blueprint V1**

Tujuan Tahap 02 adalah memastikan bahwa seluruh konten yang akan digunakan pada landing page PSB:

1. relevan dengan kondisi SHS saat ini;
2. tidak mengambil informasi lama secara otomatis;
3. tidak mengandung klaim yang saling bertentangan;
4. dapat digunakan dalam Bahasa Indonesia dan English;
5. memiliki source of truth yang jelas;
6. mendukung conversion PSB;
7. dapat dikunci sebelum development;
8. realistis untuk diselesaikan dalam target 3 hari.

Dokumen ini **belum merupakan final copywriting**.

Tahap ini berfungsi untuk menentukan:

> **Apa yang boleh dipakai, apa yang harus diverifikasi, apa yang harus diperbarui, dan apa yang belum tersedia.**

---

# 2. Audit Principle

Website SHS yang saat ini tersedia digunakan sebagai:

> **reference source / candidate source**

bukan otomatis sebagai:

> **verified source of truth**

Setiap informasi penting harus mendapatkan konfirmasi dari pihak SHS sebelum landing page PSB diluncurkan.

Prinsip utama:

```text
FOUND
↓
CHECK
↓
VERIFY
↓
REWRITE
↓
APPROVE
↓
PUBLISH
```

---

# 3. Public Sources Audited

Audit awal menggunakan halaman publik SHS berikut:

1. Homepage  
   https://www.suriaharapanschool.sch.id/

2. About Us  
   https://www.suriaharapanschool.sch.id/about-us/

3. Message from Director  
   https://www.suriaharapanschool.sch.id/about-us/message-from-director/

4. Vision, Mission, and Values  
   https://www.suriaharapanschool.sch.id/about-us/vision-mission-values/

5. Primary Education  
   https://www.suriaharapanschool.sch.id/primary-education/

6. Special Programmes  
   https://www.suriaharapanschool.sch.id/special-programmes/

7. Contact Us  
   https://www.suriaharapanschool.sch.id/contact-us/

8. Public Gallery / Student Gallery pages where available.

Catatan:

Audit ini hanya menilai **informasi yang terlihat secara publik**.

Dokumen internal, brosur PSB terbaru, price list, SOP admission, kalender akademik, data siswa, data prestasi, dan data internal lainnya belum dianggap tersedia sampai diberikan atau dikonfirmasi SHS.

---

# 4. Audit Status Legend

Gunakan status berikut selama proses content freeze.

| Status | Meaning |
|---|---|
| `VERIFIED` | Sudah dikonfirmasi oleh PIC SHS dan boleh dipublikasikan |
| `FOUND_ON_SITE` | Ditemukan di website saat ini tetapi belum dikonfirmasi ulang |
| `NEEDS_VERIFICATION` | Informasi masuk akal tetapi harus dikonfirmasi sebelum digunakan |
| `CONFLICT` | Ada informasi berbeda pada dua atau lebih sumber |
| `OUTDATED` | Jelas merujuk periode lama atau tidak layak digunakan |
| `MISSING` | Belum ditemukan / belum tersedia |
| `OPTIONAL` | Tidak wajib untuk launch V1 |
| `DO_NOT_USE` | Jangan digunakan pada landing page V1 |

---

# 5. Priority Legend

Agar target 3 hari tetap realistis, semua konten dibagi menjadi:

| Priority | Meaning |
|---|---|
| `P0` | Wajib tersedia sebelum launch |
| `P1` | Sangat dianjurkan, tetapi launch masih mungkin tanpa data ini |
| `P2` | Enhancement / dapat dilengkapi setelah launch |

---

# 6. Executive Audit Findings

Audit awal menunjukkan bahwa SHS memiliki fondasi konten yang cukup kuat mengenai:

- student growth;
- character development;
- passion and talent;
- active learning;
- parent partnership;
- safe and caring environment;
- language;
- science;
- technology;
- student activities;
- sports;
- facilities;
- school values.

Namun terdapat beberapa masalah yang perlu ditutup sebelum content freeze.

## 6.1 Curriculum Conflict

Homepage saat ini menyebut SHS menggunakan pendekatan / pendidikan **International Baccalaureate** dari Kindergarten sampai Year 12.

Di sisi lain, halaman Primary menyebut:

- National Curriculum;
- Singapore Curriculum untuk Math, Science, dan English;
- Dual Curriculum;
- Trilingual.

Status:

> `CONFLICT`

Tindakan:

> Jangan menggunakan klaim IB, Singapore Curriculum, Dual Curriculum, atau istilah kurikulum lain pada landing page sebelum SHS menentukan wording resmi yang benar untuk tahun akademik yang sedang dipasarkan.

Priority:

> `P0`

---

## 6.2 Secondary Information Is Outdated

Halaman Special Programmes masih menampilkan:

> Secondary — Coming Soon — 2021/2022 Academic Year.

Status:

> `OUTDATED`

Tindakan:

> Jangan digunakan. Diperlukan data Secondary terbaru langsung dari SHS.

Priority:

> `P0`

---

## 6.3 Contact Email Inconsistency

Halaman Contact menampilkan:

```text
info@suriaharapanschool.sch.id
```

sedangkan footer pada beberapa halaman menampilkan:

```text
info@suriaharapanschool.com
```

Status:

> `CONFLICT`

Tindakan:

> Tentukan satu email resmi untuk PSB.

Priority:

> `P0`

---

## 6.4 Admission Information Is Not Sufficient

Website publik belum memberikan struktur PSB yang memadai untuk kebutuhan landing page baru, seperti:

- academic year;
- registration period;
- admission stages;
- school tour process;
- assessment;
- required documents;
- tuition information;
- admission PIC;
- SLA follow-up;
- intake availability.

Status:

> `MISSING`

Priority:

> `P0`

---

## 6.5 Existing Content Is Too Institutional

Sebagian besar konten lama menjelaskan institusi dari perspektif sekolah.

Landing page baru harus mengubahnya menjadi:

> **benefit-oriented content dari perspektif orang tua dan siswa.**

Contoh:

Old style:

> SHS provides various programmes.

New content principle:

> Apa yang akan siswa alami, pelajari, dan kembangkan dari program tersebut?

Status:

> `REWRITE REQUIRED`

---

# 7. Source of Truth Hierarchy

Jika terdapat perbedaan informasi, gunakan urutan sumber berikut:

```text
1. Official current SHS management decision
2. Current PSB / Admission official document
3. Current academic / curriculum official document
4. Current school programme document
5. Current official brochure
6. Current official social-media announcement
7. Existing website
8. Old promotional materials
```

Website lama berada pada posisi referensi, bukan sumber final.

---

# 8. Master Content Inventory

---

# 8.1 Brand Identity

| Content | Current Finding | Status | Priority | Action |
|---|---|---:|---:|---|
| Official School Name | Suria Harapan School | `FOUND_ON_SITE` | P0 | Confirm official writing |
| Abbreviation | SHS | `FOUND_ON_SITE` | P0 | Confirm |
| Official Logo | Present on website | `NEEDS_VERIFICATION` | P0 | Obtain SVG / PNG official |
| Brand Colors | Visible visually | `NEEDS_VERIFICATION` | P0 | Obtain exact color codes |
| Brand Font | Not confirmed | `MISSING` | P1 | Confirm if guideline exists |
| Motto | Shine and Be a Blessing | `FOUND_ON_SITE` | P0 | Confirm current official motto |
| Brand Guideline | Not found publicly | `MISSING` | P1 | Request from SHS |
| School Foundation Name | Suria Harapan Foundation mentioned | `NEEDS_VERIFICATION` | P1 | Confirm official legal naming |

---

# 8.2 School Profile

| Content | Current Finding | Status | Priority | Action |
|---|---|---:|---:|---|
| Founded | 2013 | `FOUND_ON_SITE` | P1 | Verify |
| Location | Jambi | `FOUND_ON_SITE` | P0 | Verify official address |
| School Character | Active, caring, student growth | `FOUND_ON_SITE` | P0 | Rewrite |
| Parent Partnership | Mentioned | `FOUND_ON_SITE` | P1 | Retain as messaging candidate |
| Safe Environment | Mentioned | `FOUND_ON_SITE` | P1 | Verify current policy / framing |
| Whole-child Development | Mentioned | `FOUND_ON_SITE` | P0 | Candidate differentiator |
| Passion & Talent | Mentioned | `FOUND_ON_SITE` | P0 | Candidate differentiator |

---

# 8.3 Vision

Current public meaning:

> SHS aims to become an internationally minded school with strength in language, science, technology, and character.

Status:

> `FOUND_ON_SITE`

Priority:

> `P1`

Action:

- confirm current official Vision;
- do not rewrite the legal / official wording without approval;
- marketing copy may paraphrase its meaning separately.

---

# 8.4 Mission

Current public themes include:

- comfortable learning;
- fun learning;
- challenging learning;
- professional human resources;
- global perspective;
- creativity;
- innovation;
- student potential.

Status:

> `FOUND_ON_SITE`

Priority:

> `P1`

Action:

- verify official mission;
- do not place full mission prominently on landing page;
- use selected ideas as content foundation.

---

# 8.5 Values

Current website lists nine values:

1. Integrity
2. Compassion
3. Trustworthiness
4. Fairness
5. Respect
6. Responsibility
7. Cooperation
8. Resilience
9. Loyalty

Status:

> `FOUND_ON_SITE`

Priority:

> `P1`

Required action:

- confirm whether all nine values are still officially used;
- confirm spelling / official English form;
- decide whether landing page displays all values or only references character development.

Recommendation for V1:

> Do not display nine values as nine separate cards.

Better:

> incorporate them naturally into character / learning narrative.

---

# 9. Education Level Inventory

---

# 9.1 Early Learning / Preschool / Kindergarten

Current public content includes:

- Nursery 1;
- Nursery 2;
- Kindergarten 1;
- Kindergarten 2;
- Art and Phonics;
- Language Experience;
- English learning;
- Investigative Math;
- Inquiry Science;
- Multimedia Learning;
- Music and Movement.

Current age references on existing page:

```text
Nursery 1: 2–3 years
Nursery 2: 3–4 years
Kindergarten 1: 4–5 years
Kindergarten 2: 5–6 years
```

Status:

> `NEEDS_VERIFICATION`

Priority:

> `P0`

Must confirm:

- official current naming;
- minimum age;
- cutoff date;
- class naming;
- curriculum;
- teaching language;
- programme list;
- daily schedule;
- available intake.

---

# 9.2 Primary

Current public content includes claims around:

- accreditation A;
- national curriculum;
- Singapore Curriculum;
- Math;
- Science;
- English;
- trilingual learning;
- active learning;
- moving class;
- life skills;
- violin;
- taekwondo;
- SHS Garden;
- scouting / leadership;
- basketball.

Status:

> `NEEDS_VERIFICATION`

Priority:

> `P0`

Important:

Curriculum claims must not be published until the curriculum conflict is resolved.

Must confirm:

- Grade 1–6 availability;
- current official curriculum wording;
- teaching languages;
- subject language;
- compulsory programmes;
- optional programmes;
- extracurricular programmes;
- school hours;
- assessment approach;
- distinctive Primary proposition.

---

# 9.3 Secondary

Public content is insufficient and partially outdated.

Status:

> `MISSING / OUTDATED`

Priority:

> `P0`

Required directly from SHS:

- official Secondary level naming;
- grades / year levels;
- curriculum;
- academic pathways;
- language programme;
- science;
- technology;
- student development;
- extracurricular;
- university / career preparation if applicable;
- assessment;
- achievements;
- student life;
- latest photos.

Do not use:

> “Coming Soon 2021/2022”.

---

# 10. Curriculum Audit

This is the highest-risk content area.

Current public claims are not sufficiently consistent.

## Questions to Resolve

- Is SHS currently an IB school?
- Is SHS an IB candidate school, former IB school, IB-inspired school, or neither?
- Which programme / level, if any, relates to IB?
- Does Primary officially use Singapore Curriculum?
- Which subjects use Singapore Curriculum?
- What is meant by Dual Curriculum?
- What national curriculum is currently used?
- Is the term “Trilingual” still formally used?
- Which languages are instructional languages versus subjects?
- Does curriculum differ by level?

Until resolved:

```text
CURRICULUM CLAIMS = DO NOT PUBLISH
```

except wording that has received current internal approval.

---

# 11. Learning Approach Inventory

Existing public content supports possible themes around:

- inquiry;
- active learning;
- fun learning;
- independent learning;
- collaborative learning;
- curiosity;
- creative learning;
- student responsibility.

Status:

> `NEEDS_VERIFICATION`

Priority:

> `P0`

Recommended output after verification:

Maximum 3–5 learning principles.

Example content categories:

```text
Explore
Ask
Create
Collaborate
Reflect
```

These are content categories only and not yet approved marketing copy.

---

# 12. Programme Inventory

All programmes below require current confirmation.

| Programme / Topic | Found Publicly | Current Status | Priority |
|---|---:|---:|---:|
| Art & Phonics | Yes | `NEEDS_VERIFICATION` | P1 |
| Language Experience | Yes | `NEEDS_VERIFICATION` | P1 |
| English programme | Yes | `NEEDS_VERIFICATION` | P0 |
| Mandarin | Yes | `NEEDS_VERIFICATION` | P0 |
| Investigative Math | Yes | `NEEDS_VERIFICATION` | P1 |
| Inquiry Science | Yes | `NEEDS_VERIFICATION` | P1 |
| Multimedia Learning | Yes | `NEEDS_VERIFICATION` | P1 |
| Music & Movement | Yes | `NEEDS_VERIFICATION` | P1 |
| Life Skills | Yes | `NEEDS_VERIFICATION` | P0 |
| Violin | Yes | `NEEDS_VERIFICATION` | P1 |
| Taekwondo | Yes | `NEEDS_VERIFICATION` | P1 |
| SHS Garden | Yes | `NEEDS_VERIFICATION` | P1 |
| Scout / Leadership | Yes | `NEEDS_VERIFICATION` | P1 |
| Basketball Academy | Yes | `NEEDS_VERIFICATION` | P1 |
| Technology | Vision level | `NEEDS_VERIFICATION` | P1 |
| Secondary programmes | Insufficient | `MISSING` | P0 |

---

# 13. Facilities Inventory

Public website mentions facilities such as:

- classrooms;
- library;
- computer lab;
- basketball court;
- badminton court;
- athletics court;
- multifunction hall;
- canteen;
- meeting room;
- school health clinic;
- camping area;
- large field;
- parking area.

Status:

> `NEEDS_VERIFICATION`

Priority:

> `P1`

Required before publishing:

- confirm each facility still exists;
- identify renamed / renovated facilities;
- obtain current photos;
- select only facilities relevant to parent decision.

Recommendation:

Do not create an exhaustive facility catalog on the landing page.

Use:

> **4–6 strongest facilities with real photography.**

---

# 14. Trust & Proof Inventory

---

## 14.1 Accreditation

Public website states accreditation A.

Status:

> `NEEDS_VERIFICATION`

Priority:

> `P0`

Required:

- verify current accreditation status;
- verify accreditation level;
- verify institution / level covered;
- verify validity period if relevant.

Do not publish an old accreditation claim without current confirmation.

---

## 14.2 Student Numbers

Not sufficiently established from public site.

Status:

> `MISSING`

Priority:

> `P1`

Potential use:

```text
XXX+ Students
```

Only if current data is available and useful.

---

## 14.3 Teacher Numbers

Not sufficiently available.

Status:

> `MISSING`

Priority:

> `P2`

Potential use only if it supports a meaningful proof point.

---

## 14.4 Achievements

Current audit did not identify a reliable, structured, up-to-date achievement inventory suitable for immediate landing-page use.

Status:

> `MISSING`

Priority:

> `P1`

Request:

- latest 5–10 strong achievements;
- achievement year;
- competition name;
- level;
- student/team;
- organizer;
- photo;
- permission to publish.

Prefer:

> recent + meaningful + verifiable

rather than:

> a very long trophy list.

---

## 14.5 Alumni / Graduate Outcomes

Not established in current public audit.

Status:

> `MISSING`

Priority:

> `P2`

Can be deferred from V1.

---

## 14.6 University Destinations

Not established.

Status:

> `MISSING`

Priority:

> `P2`

Use only if Secondary has reliable current data.

---

# 15. Parent Partnership

The existing About page emphasizes parent partnership.

Status:

> `FOUND_ON_SITE`

Priority:

> `P1`

Potential landing-page use:

- communication with parents;
- partnership in student growth;
- parent-school collaboration.

Need internal confirmation of:

- communication channels;
- parent meetings;
- school reports;
- consultation;
- parent activities.

Avoid vague claims without operational support.

---

# 16. Student Support

Existing website suggests a caring and safe environment but does not provide enough structured details.

Status:

> `NEEDS_VERIFICATION`

Priority:

> `P1`

Questions:

- Is there counselor / student wellbeing support?
- Is there homeroom support?
- Is there pastoral care?
- Is there learning support?
- Is there clinic / health support?
- What safeguarding / safety information may be publicly communicated?

Only communicate services that actually exist.

---

# 17. Admission / PSB Content Inventory

This is the most important missing content group.

---

# 17.1 Academic Year

Required field:

```text
Academic Year: ______ / ______
```

Status:

> `MISSING`

Priority:

> `P0`

---

# 17.2 Levels Open for Admission

Required:

```text
Early Learning
Primary
Secondary
```

For each level:

- grade;
- age;
- seat availability if publishable;
- entry requirements.

Status:

> `MISSING`

Priority:

> `P0`

---

# 17.3 Admission Opening Date

Status:

> `MISSING`

Priority:

> `P0`

Required:

```text
Registration Opens:
Date:
```

---

# 17.4 Admission Closing Date

Status:

> `MISSING`

Priority:

> `P0`

If rolling admissions:

> explicitly confirm “subject to seat availability”.

---

# 17.5 Early Admission

Need confirmation:

- whether Early Admission exists;
- dates;
- benefits;
- discount / fee;
- quota;
- terms.

Status:

> `MISSING`

Priority:

> `P1`

---

# 17.6 Admission Flow

Required official flow.

Working template:

```text
Inquiry
↓
School Consultation / Visit
↓
Application
↓
Assessment / Observation
↓
Admission Decision
↓
Administrative Completion
↓
Enrollment
```

Status:

> `MISSING`

Priority:

> `P0`

Must confirm which steps actually apply.

---

# 17.7 Assessment / Observation

Need confirmation:

- required or not;
- applicable levels;
- format;
- duration;
- schedule;
- result process.

Status:

> `MISSING`

Priority:

> `P0`

---

# 17.8 Admission Documents

Need official checklist.

Possible categories:

- birth certificate;
- family card;
- previous report;
- student photo;
- parent ID;
- transfer documents.

Do not publish assumptions.

Status:

> `MISSING`

Priority:

> `P1`

---

# 17.9 Tuition / Fee Information

Decision required:

### Option A — Public Price

Display tuition / admission fee directly.

### Option B — Request Tuition Information

User submits contact details.

### Option C — Hybrid

Display starting price / selected fee and provide detailed fee consultation.

Status:

> `DECISION REQUIRED`

Priority:

> `P0`

---

# 17.10 Promotion / Scholarship

Need confirmation:

- active promotion;
- scholarship;
- discount;
- sibling benefit;
- early bird;
- referral;
- special conditions.

Status:

> `MISSING`

Priority:

> `P1`

Only current offers may be displayed.

---

# 17.11 School Tour

Required:

- available days;
- available hours;
- appointment required or walk-in;
- PIC;
- maximum / minimum notice;
- booking channel.

Status:

> `MISSING`

Priority:

> `P0`

---

# 17.12 Admission Consultation

Required:

- WhatsApp number;
- person / team name;
- operating hours;
- response SLA.

Status:

> `MISSING`

Priority:

> `P0`

---

# 18. Contact Information Audit

## Address

Publicly listed:

```text
Suria Harapan School
Jalan Hayam Wuruk No.171
Talang Jauh
Jambi 36133
Indonesia
```

Status:

> `NEEDS_VERIFICATION`

Priority:

> `P0`

Confirm exact official formatting for:

- website;
- Google Maps;
- structured data.

---

## Phone

Publicly listed:

```text
+62 741 306 1101
```

Status:

> `NEEDS_VERIFICATION`

Priority:

> `P1`

---

## Mobile

Publicly listed:

```text
+62 811 742 2558
```

Status:

> `NEEDS_VERIFICATION`

Priority:

> `P0`

Need confirmation whether this is:

- general contact;
- Admission WhatsApp;
- active WhatsApp number.

---

## Email

Current public sources show more than one email domain.

Status:

> `CONFLICT`

Priority:

> `P0`

Must select one official PSB contact email.

---

# 19. FAQ Content Inventory

FAQ V1 should answer actual admission friction.

Required minimum:

1. What levels are currently open for admission?
2. What age / grade can my child enter?
3. What curriculum does SHS use?
4. What languages are used?
5. Is an assessment required?
6. What documents are required?
7. How can we visit the school?
8. How can we get tuition information?
9. How long does the admission process take?
10. How can we contact Admission?

Status:

> `MISSING / NEEDS ANSWERS`

Priority:

> `P0`

Recommendation:

Use 6–10 questions only.

---

# 20. Photography Inventory

Photography is a core part of the new landing page.

Minimum launch requirement:

| Asset | Minimum | Priority |
|---|---:|---:|
| Hero | 1 video OR 3–5 strong photos | P0 |
| Early Learning | 4–6 photos | P0 |
| Primary | 4–6 photos | P0 |
| Secondary | 4–6 photos | P0 |
| Student Life | 8–12 photos | P0 |
| Teachers | 3–5 photos | P1 |
| Facilities | 4–6 photos | P1 |
| Sports | 3–5 photos | P1 |
| Art / Music | 3–5 photos | P1 |
| Science / Project | 3–5 photos | P1 |
| Achievements | 3–5 photos | P1 |
| School Exterior | 2–3 photos | P0 |

---

# 21. Photo Selection Rules

Prefer:

- real SHS students;
- real SHS teachers;
- current uniforms;
- current campus;
- recent activities;
- candid moments;
- authentic interaction;
- mixed portrait and landscape;
- visible student activity.

Avoid:

- stock photos;
- AI-generated children;
- photos from outdated uniforms / facilities;
- excessive group posing;
- low-resolution screenshots;
- heavily filtered images;
- images with uncertain publication permission.

---

# 22. Hero Media Audit

Preferred order:

```text
1. Real short video
2. Strong real photo sequence
3. Editorial photo collage
```

Hero content should ideally represent multiple dimensions:

```text
Learning
+
Friendship
+
Activity
+
Teacher Interaction
+
Confidence
```

Do not make the school building the only emotional hero.

---

# 23. Video Inventory

If available, collect:

- class discussion;
- science experiment;
- sports;
- music / performance;
- students walking;
- student-teacher interaction;
- outdoor activity;
- student laughter / friendship.

Recommended:

```text
5–12 sec hero loop
Muted
Compressed
Mobile friendly
```

Long promotional video is not required for V1.

---

# 24. Testimonials Inventory

Testimonials are optional for 3-day launch.

Potential sources:

- parent;
- student;
- alumnus;
- teacher.

Status:

> `OPTIONAL`

Priority:

> `P2`

Rules:

- real person;
- explicit permission;
- real quote;
- short;
- no fabricated quote;
- no generic anonymous testimonial if avoidable.

---

# 25. Bilingual Content Inventory

Every visible content item must have:

```text
ID
EN
```

Minimum bilingual content groups:

- navigation;
- hero;
- key message;
- Why SHS;
- levels;
- learning approach;
- programmes;
- student life;
- trust;
- admission journey;
- admission timeline;
- school tour;
- FAQ;
- form;
- thank you page;
- footer;
- validation / error messages.

---

# 26. Bilingual Translation Rule

Do not use word-for-word translation.

Use:

> **Equivalent meaning + natural communication.**

Example:

ID:

> Temukan ruang untuk bertumbuh, mencoba, dan bersinar.

EN may become:

> Discover where you can grow, explore, and shine.

Final translation should prioritize:

- natural language;
- consistent tone;
- simple English;
- parent readability;
- student friendliness.

---

# 27. Content Length Rules

To preserve modern editorial design:

## Hero Headline

Recommended:

```text
3–9 words
```

## Hero Supporting Text

Recommended:

```text
15–35 words
```

## Section Headline

Recommended:

```text
2–8 words
```

## Section Introduction

Recommended:

```text
20–50 words
```

## Programme Description

Recommended:

```text
15–35 words
```

## FAQ Answer

Recommended:

```text
30–100 words
```

Avoid long institutional paragraphs.

---

# 28. Content Tone

Content should feel:

- warm;
- confident;
- clear;
- active;
- youthful;
- trustworthy;
- human.

Avoid:

- bureaucratic wording;
- exaggerated claims;
- corporate clichés;
- overuse of superlatives;
- excessive “best” claims;
- unsupported global / international claims.

---

# 29. Anti-AI Copy Rules

Avoid phrases such as:

- Unlock your full potential.
- Empowering future leaders.
- Shaping tomorrow.
- Excellence in education.
- Where dreams take flight.
- A world of endless possibilities.
- Nurturing tomorrow's leaders.

unless a phrase is part of SHS's established identity.

Prefer:

- specific action;
- real programme;
- real student experience;
- real outcomes;
- short human language.

---

# 30. Proposed Content Pillars

Based on the audit, four candidate pillars appear promising.

These are **working categories**, not final claims.

## Pillar 1 — Learning

Questions answered:

> How does my child learn?

Potential themes:

- active;
- inquiry;
- exploration;
- creativity;
- collaboration.

---

## Pillar 2 — Character

Questions answered:

> Who will my child become?

Potential themes:

- responsibility;
- respect;
- resilience;
- integrity;
- confidence.

---

## Pillar 3 — Talent & Experience

Questions answered:

> Will my child have space to discover strengths and interests?

Potential themes:

- sport;
- music;
- art;
- science;
- technology;
- life skills.

---

## Pillar 4 — Community

Questions answered:

> Will my child feel supported?

Potential themes:

- teacher support;
- parent partnership;
- friendships;
- safe school environment.

All pillars require internal confirmation before becoming final copy.

---

# 31. Homepage-to-Landing-Page Mapping

Existing content should not simply be copied.

Use mapping:

```text
OLD WEBSITE CONTENT
↓
AUDIT
↓
VERIFY
↓
EXTRACT MEANING
↓
REWRITE FOR PSB
↓
BILINGUAL COPY
↓
LANDING PAGE
```

Example:

```text
Old:
Long paragraph about caring environment

New:
1 short proof statement
+
1 real photo
+
1 parent-relevant benefit
```

---

# 32. P0 — Mandatory Content Pack

The following must be obtained before launch.

## Brand

- [ ] Official logo
- [ ] Current brand color
- [ ] Motto confirmation

## School

- [ ] Current education levels
- [ ] Current class / grade structure
- [ ] Current curriculum wording
- [ ] Current language programme

## Admission

- [ ] Academic year
- [ ] Registration period
- [ ] Levels / grades open
- [ ] Admission flow
- [ ] Assessment policy
- [ ] School tour flow
- [ ] Admission WhatsApp
- [ ] Admission email
- [ ] Contact hours
- [ ] Tuition communication decision

## Trust

- [ ] Current accreditation
- [ ] 3–4 verified SHS differentiators

## Media

- [ ] Hero asset
- [ ] Early Learning photos
- [ ] Primary photos
- [ ] Secondary photos
- [ ] Student life photos
- [ ] Campus photo

Without these items, launch quality will be materially reduced.

---

# 33. P1 — Recommended Content Pack

- [ ] 5–10 recent achievements
- [ ] Facility photos
- [ ] Teacher photos
- [ ] Programme photos
- [ ] Current extracurricular list
- [ ] School statistics
- [ ] Early admission / promotion
- [ ] Detailed FAQ
- [ ] Current school events
- [ ] School values confirmation

---

# 34. P2 — Post-Launch Enhancement

Can be added later:

- alumni stories;
- university destinations;
- detailed teacher profiles;
- parent testimonials;
- student testimonials;
- interactive programme explorer;
- detailed gallery;
- article / news section;
- long-form academic content;
- downloadable prospectus.

---

# 35. Minimum Viable Content for 3-Day Launch

If content collection is constrained, V1 may launch with:

```text
Hero
↓
3–4 Why SHS points
↓
3 Education Levels
↓
Learning Experience
↓
Student Life Gallery
↓
3–5 Proof Points
↓
Admission Journey
↓
Admission Timeline
↓
School Tour
↓
6–8 FAQ
↓
Lead Form
↓
Contact
```

Everything must still be verified.

---

# 36. Suggested Internal SHS Content Collection Form

SHS PIC should provide the following in one document or spreadsheet.

## General

```text
Official School Name:
Official Motto:
Founded:
Official Address:
Phone:
WhatsApp Admission:
Email Admission:
Admission Operating Hours:
```

## Early Learning

```text
Official Level Name:
Age:
Classes:
Curriculum:
Languages:
Main Programmes:
School Hours:
Assessment:
```

## Primary

```text
Grades:
Curriculum:
Languages:
Main Programmes:
School Hours:
Assessment:
```

## Secondary

```text
Grades:
Curriculum:
Languages:
Main Programmes:
School Hours:
Academic Pathway:
Assessment:
```

## PSB

```text
Academic Year:
Open Date:
Close Date:
Early Admission:
Admission Steps:
Assessment:
Required Documents:
Tuition Publication:
Promotion:
School Tour:
```

---

# 37. Content Ownership

To avoid revision confusion, assign content ownership.

| Content Domain | Suggested Owner |
|---|---|
| Brand | Management / Marketing |
| Admission | Admission / Administration |
| Curriculum | Academic Leadership |
| Early Learning | Early Learning Leadership |
| Primary | Primary Leadership |
| Secondary | Secondary Leadership |
| Accreditation | Management / Academic |
| Fees | Finance / Admission |
| Photos | Marketing / Communication |
| Website Copy | Project Content Team |
| English Review | Qualified English Reviewer |
| Final Approval | Assigned SHS Decision Maker |

---

# 38. Content Approval Rule

Only one final approver should freeze landing-page content.

Recommended status flow:

```text
DRAFT
↓
REVIEW
↓
CORRECTION
↓
APPROVED
↓
FROZEN
↓
PUBLISHED
```

Avoid multiple uncoordinated approvers editing copy during development.

---

# 39. Content Freeze Deadline

For 3-day delivery:

## Day 1

By the end of Day 1, freeze:

- school levels;
- curriculum language;
- key differentiators;
- PSB timeline;
- admission flow;
- contact details;
- CTA;
- navigation;
- hero direction.

## Day 2

Allowed:

- typo correction;
- photo replacement;
- copy polishing;
- English refinement.

Not allowed:

- major new section;
- new programme architecture;
- admission flow redesign.

## Day 3

Only:

- critical factual corrections;
- QA corrections;
- legal / factual fixes.

---

# 40. Risk Register

| Risk | Impact | Priority | Mitigation |
|---|---|---:|---|
| Curriculum claim incorrect | Very High | P0 | Obtain written confirmation |
| Outdated Secondary content | High | P0 | Replace completely |
| Wrong PSB dates | Very High | P0 | Admission PIC approval |
| Wrong fee / promo | Very High | P0 | Finance / Admission approval |
| Wrong contact | High | P0 | Test WhatsApp / email |
| Old accreditation | High | P0 | Verify current certificate/status |
| Old programme list | Medium | P1 | Academic verification |
| Poor photo quality | Medium | P1 | Curated current photo set |
| English feels translated | Medium | P1 | Human bilingual review |
| Too much content | Medium | P1 | Enforce content-length rules |

---

# 41. Content Decision Log

Use this table during development.

| Date | Content | Old Information | Decision | Final Source | Approver |
|---|---|---|---|---|---|
| | Curriculum | | | | |
| | Secondary | | | | |
| | Accreditation | | | | |
| | Admission Timeline | | | | |
| | Tuition | | | | |
| | Contact | | | | |

---

# 42. Content File Structure Recommendation

Recommended project structure:

```text
/content
    /id
        hero.md
        why-shs.md
        levels.md
        learning.md
        student-life.md
        admission.md
        faq.md

    /en
        hero.md
        why-shs.md
        levels.md
        learning.md
        student-life.md
        admission.md
        faq.md

/data
    admission.json
    programmes.json
    achievements.json
    contact.json

/media
    /hero
    /early-learning
    /primary
    /secondary
    /student-life
    /facilities
    /achievements
```

This makes bilingual maintenance easier.

---

# 43. Suggested Content Keys

If development uses structured content:

```text
nav.why_shs
nav.levels
nav.student_life
nav.admissions
nav.faq

hero.eyebrow
hero.title
hero.description
hero.primary_cta
hero.secondary_cta

why.title
why.description

levels.early_learning
levels.primary
levels.secondary

admission.title
admission.timeline
admission.steps

form.parent_name
form.whatsapp
form.email
form.student_name
form.level
form.grade
form.academic_year
form.interest

footer.address
footer.phone
footer.whatsapp
footer.email
```

Do not hard-code bilingual text repeatedly across components.

---

# 44. Content Readiness Score

Before moving to final UI, check:

| Domain | Target |
|---|---:|
| Brand | 100% P0 complete |
| Curriculum | 100% P0 complete |
| Levels | 100% P0 complete |
| Admission | 100% P0 complete |
| Contact | 100% P0 complete |
| Photos | ≥80% P0 complete |
| FAQ | ≥80% complete |
| English | Can follow after ID master copy |
| Achievements | Optional for initial design if data pending |

---

# 45. Gate to Tahap 03

Tahap 03 — User Flow & Wireframe may proceed when:

- [ ] education levels confirmed;
- [ ] curriculum conflict resolved;
- [ ] Secondary information obtained;
- [ ] key differentiators chosen;
- [ ] admission flow confirmed;
- [ ] admission timeline confirmed;
- [ ] primary CTA confirmed;
- [ ] contact channel confirmed;
- [ ] hero media direction known.

If some media or achievements are still missing, wireframe may use **labeled placeholders**.

Factual content should not use invented placeholders.

---

# 46. Current Audit Summary

## Potentially Strong Existing Content

- Shine and Be a Blessing.
- student growth.
- academic + character.
- passion and talent.
- active / inquiry learning.
- parent partnership.
- safe and caring environment.
- language.
- science.
- technology.
- sport.
- music.
- life skills.

## High-Risk / Must Verify

- IB claim.
- Singapore Curriculum claim.
- Dual Curriculum wording.
- Trilingual implementation.
- accreditation.
- current programme list.
- current facilities.
- current contact details.

## Clearly Outdated

- Secondary “Coming Soon — 2021/2022”.

## Missing for PSB Landing Page

- academic year;
- admission timeline;
- admission stages;
- grade intake;
- assessment;
- documents;
- tuition communication;
- promotion;
- school tour flow;
- admission WhatsApp;
- admission SLA;
- structured current achievements;
- current Secondary content.

---

# 47. Output of Tahap 02

Tahap 02 dinyatakan selesai ketika tersedia:

```text
1. Content Audit
2. Verified Fact Sheet
3. Missing Content List
4. Admission Data Sheet
5. Programme Inventory
6. Photo / Video Inventory
7. Bilingual Content Matrix
8. Content Approval Status
```

Setelah itu semua konten P0 dapat ditandai:

```text
CONTENT READY FOR WIREFRAME
```

---

# 48. Next Stage

Setelah Tahap 02:

# Tahap 03 — SHS PSB User Flow & Wireframe V1

Tahap 03 akan menerjemahkan blueprint dan content inventory menjadi:

1. user entry points;
2. parent journey;
3. student-oriented browsing path;
4. CTA flow;
5. admission conversion flow;
6. mobile-first wireframe;
7. desktop wireframe;
8. section-by-section content placement;
9. interaction notes;
10. bilingual behavior;
11. lead-form flow;
12. thank-you flow.

Tahap 03 belum masuk ke final visual design.

Urutannya:

```text
BLUEPRINT
↓
CONTENT AUDIT
↓
CONTENT FREEZE
↓
USER FLOW
↓
WIREFRAME
↓
CREATIVE DIRECTION
↓
UI
↓
DEVELOPMENT
↓
QA
↓
LAUNCH
```

---

# 49. Final Principle

> **Do not redesign outdated information. Fix the information first.**

Website baru tidak boleh terlihat modern secara visual tetapi masih membawa:

- data lama;
- program lama;
- proses PSB yang tidak jelas;
- kurikulum yang tidak konsisten;
- kontak yang salah.

Untuk launch tiga hari, prioritas adalah:

```text
ACCURATE
+
CLEAR
+
HUMAN
+
CONVERSION-READY
```

lebih dahulu daripada:

```text
MORE CONTENT
+
MORE FEATURES
+
MORE ANIMATION
```
