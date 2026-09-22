# Divine — Video Editing Portfolio

A responsive, cinematic portfolio for **Divine Chukwudebelu Ugochukwu**, built with React and Vite. Warm editorial styling, locally hosted typography and optimized WebP images.

## Run locally

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Vercel

The project includes `vercel.json` and is ready to import into Vercel:

- Framework: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- No environment variables or backend required.

In Vercel, import `eaglefavor/divine-video-portfolio` and select the session branch `arena/01a0c8ce-divine-video-portfolio` after changes have been pushed. Alternatively, deploy this working directory using an authenticated Vercel connector or CLI. **The current session has not deployed the site to Vercel; no Vercel MCP connector was available.**

## Features

- Responsive navigation and keyboard-accessible dialogs
- Filterable concept gallery with creative-direction details
- Expandable expertise descriptions
- Biography and portrait placeholder
- Client-side project-brief builder with copy and text-file download
- Reduced-motion support, focus styles and a skip link
- Local image assets and fonts; no tracking or form-data transmission

## Content still needed

1. **Portrait:** No attachment was accessible in the session. Replace the `.about-portrait` monogram in `src/main.jsx` with the owner's supplied image, retaining descriptive alt text.
2. **Real work:** The three gallery images were generated for this website and are explicitly labeled as concepts, not completed client projects. Replace the `projects` array with approved real work, descriptions and video URLs when supplied.
3. **Contact details:** No email or social handles were provided. The brief builder only creates a downloadable document and clearly tells users that nothing has been sent. Add verified contact details and a real delivery integration before enabling submissions.
4. **Showreel:** The “Behind the process” button opens the creative process, not an unavailable showreel.

Primary content is in `src/main.jsx`; responsive styling is in `src/styles.css`.
