<img width="1918" height="915" alt="Screenshot 2026-05-09 170825" src="https://github.com/user-attachments/assets/99155cb2-091f-41f2-96a2-7f42848f1332" />


# Agance Creative Experience

A React 19 + Vite site that blends pinned hero shots, marquee typography, and section-based storytelling. GSAP ScrollTrigger drives parallax image swaps while Framer Motion animates team spotlights and hover previews. React Router keeps the multi-page feel lightweight, and Tailwind 4 helps with rapid layout experimentation.

## Features
- Scroll-bound hero that pins and swaps photography with GSAP + ScrollTrigger.
- Modular sections for home, agency, and projects views, each with bespoke animations.
- Full-screen navigation overlay powered by React Context for shared state.
- Hover-reactive talent list where Framer Motion reveals imagery inline.
- Tailwind-first styles with custom CSS for marquees, loaders, and sticky panels.

## Tech Stack
- Vite 7 for bundling and lightning-fast HMR.
- React 19 with React Router DOM 7 for page composition.
- GSAP 3 (plus `@gsap/react`) for scroll-driven timelines.
- Framer Motion 12 (`motion`) for UI micro-interactions.
- Tailwind CSS 4 via `@tailwindcss/vite` and Remix Icon assets.

## Getting Started
1. **Install dependencies**
	```bash
	npm install
	```
2. **Run the dev server**
	```bash
	npm run dev
	```
	Vite prints a local URL (typically http://localhost:5173) with hot reloading.
3. **Create a production build**
	```bash
	npm run build
	```
4. **Preview the production build**
	```bash
	npm run preview
	```

## Project Structure
```text
vite-project/
├─ public/                   # Static assets served as-is
├─ src/
│  ├─ App.jsx                # Route shell and layout
│  ├─ Pages/                 # Home, Agance, Projects screens
│  ├─ components/
│  │  ├─ Nav/                # Navbar, full-screen menu, footer
│  │  ├─ agance/             # Section2–4 stacks, loaders, panels
│  │  ├─ home/               # Hero, video, bottom sections
│  │  └─ projects/           # Cards and project footer
│  ├─ context/NavContext.jsx # Global nav visibility + scroll locking
│  ├─ assets/ | fonts/ | images/
│  ├─ index.css              # Tailwind layers + custom animations
│  └─ main.jsx               # Entry point and router mounting
├─ package.json
└─ vite.config.js
```

## Animation Notes
- **ScrollTrigger pin**: The Agance page keeps a hero image pinned while swapping sources on scroll. When adding new sections below, call `ScrollTrigger.refresh()` after layout changes to keep the pin aligned.
- **Framer Motion panels**: Section 3 panels animate into view and drive hover previews. Keep their containers non-sticky so they do not disrupt Screen pinning.
- **Navigation overlay**: Global state in `NavContext` toggles the full-screen navigation. When navigating via the logo or other links, ensure you reset the overlay state to avoid leaving it mounted across routes.

## Deployment
- Any static host (Netlify, Vercel, GitHub Pages) can serve the production `dist/` output.
- If you rely on custom domains or SPA routing, configure fallback rewrites to `index.html`.

## Scripts
- `npm run dev` – start Vite in development with HMR.
- `npm run build` – create an optimized production bundle.
- `npm run preview` – serve the built bundle locally for smoke tests.
- `npm run lint` – run ESLint with the provided config.

## License
No license has been declared yet. Add one before distributing the code.
