# Elena Valencia Vilches — React Portfolio

A bilingual (ES/EN) React + TypeScript portfolio with a retro pastel pixel aesthetic, modern layout, and modular components.

## Tech

- React 18, TypeScript, Vite
- TailwindCSS (custom pastel palette + pixel accents)
- i18next + react-i18next (Spanish/English)
- TanStack Query baseline

## Quick Start (Windows PowerShell)

```powershell
# From the project root
npm install
npm run dev
```

Visit the URL printed by Vite (usually http://localhost:5173).

## Build

```powershell
npm run build
npm run preview
```

## Customize

- Update social links in `src/components/ContactCard.tsx`.
- Adjust accent theme options in `src/App.tsx`.
- Add more projects under `src/components/Projects.tsx` and translations in `src/translations/*.json`.

## Structure

- `src/App.tsx`: Layout, language + accent switcher
- `src/services/i18n.ts`: i18n setup
- `src/components/*`: Sections (Skills, Experience, Projects, Education, Contact)
- `src/translations/en.json`, `src/translations/es.json`: Copy and edit translations
- `tailwind.config.js`: Pastel palette and pixel theme extensions

## Notes

- Default language is Spanish (`lng: 'es'`). Switch with the header buttons.
- Designed to be lightweight, accessible, and easy to extend.
