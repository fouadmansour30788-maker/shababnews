# Shabab News — Web

An immersive, parallax-3D website for **Shabab News**, Lebanon's youth platform for
students. It reuses the same content and Firebase backend as the mobile app, with a
completely new design language: deep space-black surfaces, brand-teal glow, smooth
scroll, scroll-triggered reveals and cursor-tilting 3D cards.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **Framer Motion** for animation / parallax + **Lenis** for smooth scroll
- **Firebase** (Firestore + Auth) — the same `shabab-news-79e57` project as the app
- **Google Generative AI** (`gemini-1.5-flash`) for the "Farah" assistant

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

### Environment

Copy your keys into `.env.local`:

```
GEMINI_API_KEY=...             # server-side, used by /api/chat (preferred)
NEXT_PUBLIC_GEMINI_API_KEY=... # optional fallback
```

Without a key, the chatbot still loads and shows a friendly "add a key" message.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Immersive parallax home (hero, news, universities, events, tools, offers) |
| `/news`, `/news/[id]` | Filterable news feed + parallax article pages |
| `/events` | Event grid with live countdowns + detail modal + Google Calendar export |
| `/universities`, `/schools` | Filterable directories with rich detail modals |
| `/jobs`, `/offers` | Careers board and student-deal cards |
| `/chatbot` | "Farah" AI assistant (Gemini via `/api/chat`) |
| `/grade-calculator`, `/career-simulator`, `/cv-builder`, `/portfolio-builder`, `/learning` | Student tools |
| `/calendar`, `/map` | Month calendar + GPS campus explorer |
| `/login`, `/register`, `/profile` | Firebase auth |
| `/about`, `/privacy` | Static pages |

## Project structure

```
app/            Routes (App Router)
components/     UI + layout + motion primitives (Reveal, Parallax, Tilt, SmoothScroll)
lib/            Firebase, auth, data services, types, and ported content
```

Content falls back to bundled static data (`lib/content.ts`, `lib/universities.ts`,
`lib/schools.ts`, `lib/campuses.ts`) whenever the matching Firestore collection is empty.
