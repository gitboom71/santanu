PROJECT NAME: Santanu's Space / The Santanu Mukherjee Initiative
EMAIL: santanu.inquiries@gmail.com
HOSTING & FORMS: Netlify with native Netlify Forms

NAME SPELLING CONVENTIONS:
- English: Santanu Mukherjee
- Bengali: শান্তনু মুখার্জ্জী

CORE DESIGN PRINCIPLES:
1. Hub & Spoke Architecture: Main /insurance page leads to dedicated sub-folders (/life-insurance, /health-insurance).
2. Strict File Symmetry: Every English .astro page in src/pages/ has a matching Bengali .astro page in src/pages/bn/.
3. No raw .md files in routing (e.g., about.md replaced by bn/about.astro).
4. Single-Frame Navigation: BaseLayout.astro uses Astro's <ClientRouter /> for smooth, non-reloading page transitions.

DIRECTORY STRUCTURE:
src/pages/
├── index.astro                 <-- Home (EN)
├── about.astro                 <-- About (EN)
├── contact.astro               <-- Contact (EN)
├── insurance.astro             <-- Main Insurance Hub (EN)
│   ├── life-insurance/         <-- Life Insurance Hub & Spokes
│   └── health-insurance/       <-- Health Insurance Hub & Spokes
└── bn/                         <-- BENGALI MIRROR
    ├── index.astro             <-- Home (BN)
    ├── about.astro             <-- About (BN)
    ├── contact.astro           <-- Contact (BN)
    └── insurance.astro         <-- Insurance Hub (BN)