# the stars that attract me 🌟

A handmade interactive birthday website for a very special someone, built with React + Framer Motion.

## What it does
- **Intro page**: "the stars that attract me" → click to open the sky
- **Interactive starfield**: the actual stars visible on May 4, 2006 (Arcturus, Spica, Regulus, Vega, Polaris, Sirius, Antares) rendered as glowing clickable dots
- **Star cards**: each star opens a card with a real astronomy fact + a personal message
- **Spotify playlist player**: floating in the corner — "songs i think of u to"
- **Final letter**: after all 7 stars are discovered, a personal love letter reveals itself

## Run locally
```bash
cd frontend
yarn install
yarn start
```
Opens at http://localhost:3000

## Customize
- **Final letter**: edit `frontend/src/components/FinalMessage.jsx`
- **Star personal messages / facts**: edit `frontend/src/data/stars.js`
- **Spotify playlist**: change `PLAYLIST_ID` in `frontend/src/components/SpotifyPlayer.jsx`
- **Intro text**: edit `frontend/src/components/Intro.jsx`

## Deploy to GitHub Pages / Vercel / Netlify
Any static host works:
```bash
cd frontend
yarn build
```
Drop the resulting `build/` folder on Netlify, or connect the repo to Vercel.

## Tech
React 19, Framer Motion, Tailwind, Lucide Icons, Fraunces + Outfit (Google Fonts).
