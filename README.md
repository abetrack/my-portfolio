# Abhinav Sharma — portfolio

Personal site: React 18, Vite and Tailwind 3. Deployed on Netlify.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Where things live

- `src/data.js` — every role, span, skill group and link. Edit this to update the site; the career trace and the
  experience section both read from `spans` and `roles`.
- `src/components/Trace.jsx` — the career waterfall in the hero, drawn to scale from the dates in `data.js`.
- `src/index.css` — design tokens live in `tailwind.config.js`; bespoke motion (trace, merge demo, reveals) is here.
- `public/Resume.pdf` — the résumé linked from the nav, hero and contact section.
- `src/projects.jsx` — the content of each project sheet. `src/components/Tour.jsx` drives the animated CareerOS tour.

## Contact form

Netlify Forms. The static `contact` form in `index.html` is what Netlify detects at build time; `Contact.jsx` posts to it
with `fetch`. The form does not work under `npm run dev`, only on Netlify.
