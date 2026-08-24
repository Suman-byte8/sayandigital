# শারদ সম্মান ২০২৬ — Sayan Digital

Durga Puja award online application portal, rebuilt as a **React + Vite** single-page app with **Tailwind CSS** (arbitrary-value utility syntax, no external CSS file) and a component-based architecture.

## Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (utility-first, inline classes)
- Config-driven form (all Bengali copy & field definitions live in `src/data/content.js`)

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Folder structure

```
sharod-samman-2026/
├── index.html                 # Vite HTML entry (loads Bengali fonts)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx               # React entry
    ├── App.jsx                # Page composition
    ├── index.css              # Tailwind directives + a few gradient utilities
    ├── data/
    │   └── content.js         # ALL content + form field config (single source of truth)
    ├── utils/
    │   └── helpers.js         # escapeHtml, id generation, printable acknowledgement
    ├── hooks/
    │   ├── useApplicationForm.js   # form state, validation, progress
    │   └── useBodyScrollLock.js    # modal scroll lock
    └── components/
        ├── layout/            # Header, Footer
        ├── sections/          # Hero, StatsStrip, ProcessSection, NoticeSection, ApplicationSection
        ├── form/              # ApplicationForm, ProgressBar, Field, FormSection,
        │                      #   AwardsSection, DocumentsSection, PhotoUpload, Declaration
        ├── modals/            # Modal (base), ReviewModal, SuccessModal
        └── ui/                # Button
```

## How it works

- **Content is data-driven.** Editing text or form fields rarely means touching a component — update `src/data/content.js`. Each form section (`COMMITTEE_SECTION`, `APPLICANT_SECTION`, `PUJA_SECTION`) is an array of field configs rendered by a single `<Field />` component.
- **Form logic lives in a hook.** `useApplicationForm` owns values, award selection, validation (mobile `^[6-9]\d{9}$`, PIN `^\d{6}$`, required fields, at least one award) and the live progress percentage / active step.
- **Validation → Review → Success.** Submitting validates, opens the review modal, then generates an `SS2026-XXXXXX` id and shows the success modal with a printable acknowledgement sheet.
- **Photos & documents** are handled client-side with object URLs, a 5 MB size cap, and a max of 8 photos.

## Notes

- Fonts (Noto Sans/Serif Bengali) are loaded in `index.html`.
- The design keeps the original maroon-and-gold festival palette.
- Everything is responsive down to ~360px via Tailwind's `max-[...]` variants.
