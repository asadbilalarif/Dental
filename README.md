# Capline Dental Services — Website Clone

A modern, responsive React clone of [Capline Dental Services](https://www.caplinedentalservices.com), built with React 19, Vite, Tailwind CSS, Framer Motion, and React Router.

## Tech Stack

- **React 19** + **Vite**
- **React Router DOM** — client-side routing
- **Tailwind CSS v4** — styling
- **Framer Motion** — animations
- **Axios** — API layer (contact forms with graceful fallback)
- **React Icons** — iconography

## Requirements

- **Node.js 18+** (tested on 20.16). Vite 5 is used for broad compatibility; Vite 8+ requires Node 20.19+.

## Install & Run

```bash
# Install dependencies
npm install

# If you see rolldown/native binding errors, clean install:
# Remove-Item -Recurse -Force node_modules; Remove-Item package-lock.json; npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/              # Static images & media
├── components/
│   ├── common/          # Button, Logo, SectionHeading, ContactForm, CTA
│   ├── layout/          # Header, Footer, MegaMenu, FloatingWidget
│   ├── home/            # Home page sections
│   ├── services/        # ServiceCard
│   └── blog/            # BlogCard
├── pages/               # Route pages
├── routes/              # React Router config
├── hooks/               # useCounter, useScrollPosition
├── services/            # Axios API
├── constants/           # Routes, site config
├── data/                # Services, blogs, testimonials
└── layouts/             # MainLayout, PageHero
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home (all 13 sections) |
| `/about-us` | About Us |
| `/services` | Services Listing |
| `/services/:slug` | Service Detail |
| `/blog` | Blog Listing |
| `/blog/:slug` | Blog Detail |
| `/contact-us` | Contact Us |

## Environment

Copy `.env.example` to `.env` and set `VITE_API_URL` when connecting to a real backend. Contact and audit forms simulate success when the API is unavailable.

## License

Private / educational clone project.
