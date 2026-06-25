# Animated Assignment

This project is a React web application built with Vite, Tailwind CSS, and GSAP. The main work centers around an animated About section inspired by the Quantara reference site: https://sign-quantara.webflow.io/.

## Tech Stack

- **React 19** for the frontend UI
- **Vite** for development and production builds
- **Tailwind CSS** for utility-first styling
- **GSAP** for animations and scroll-based transitions
- **@gsap/react** to integrate GSAP with React components
- **React Hook Form** installed for forms in the app
- **ESLint** for linting and code quality

## Dependencies

- `react@19.2.7`
- `react-dom@19.2.7`
- `vite@8.1.0`
- `@vitejs/plugin-react@6.0.2`
- `tailwindcss@4.3.1`
- `@tailwindcss/vite@4.3.1`
- `gsap@3.15.0`
- `@gsap/react@2.1.2`
- `react-hook-form@7.80.0`

## Dev Dependencies

- `eslint@10.5.0`
- `@eslint/js@10.0.1`
- `eslint-plugin-react-hooks@7.1.1`
- `eslint-plugin-react-refresh@0.5.3`
- `@types/react@19.2.17`
- `@types/react-dom@19.2.3`

## Project Structure

- `index.html` — Vite application shell
- `src/main.jsx` — React entry point
- `src/App.jsx` — application root component
- `src/components/About.jsx` — animated About section logic and layout
- `src/index.css` — global styles
- `src/App.css` — application-level styles
- `vite.config.js` — Vite config with Tailwind and React plugins
- `package.json` — dependency and script definitions

## About Section Details

The About page implementation includes:

- **GSAP ScrollTrigger pinning** for the section
- **Sequential timeline animations** for text, labels, and icons
- **Central card layout** with animated blocks on a platform image
- **Animated active icon highlighting** using filters and motion
- **Top-left plus-icon grid animation** matching the reference style
- **Text flip animation** for label updates

## Current State

- The key About section animation is implemented inside `src/components/About.jsx`.
- The scroll interaction uses pinning and scrubbed timeline movement.
- Animated parts include the hero title, item numbers, card groups, icon glow, and label text.
- The project is set up with Tailwind utilities and Vite’s fast refresh.

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Running the Project

1. Install dependencies: `npm install`
2. Start development: `npm run dev`
3. Open the local Vite URL shown in the terminal

## Notes

- `react-hook-form` is currently installed and available for use when building forms.
- The project uses Tailwind via Vite plugin configuration.
- The About section attempts to match the Quantara reference with pinning and rich motion.