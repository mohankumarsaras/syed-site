# Industrial Machinery B2B Website

A high-performance B2B commercial platform built for industrial mineral processing, aggregate crushing, and milling machinery sales.

---

## 1. Technologies

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS v4 using `@tailwindcss/vite`
- **Routing**: `react-router-dom` v7
- **Icons**: Standard lightweight inline SVGs (no external icon dependencies)
- **Deployment**: Cloudflare Pages via GitHub Actions (`dev` branch)

---

## 2. Cloudflare Pages Deployment (Direct Git Integration)

This repository is configured for native Cloudflare Pages Git Integration connected to your GitHub repository.

### Cloudflare Dashboard Configuration:
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the navigation, go to **Compute (Workers & Pages)** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select your repository `mohankumarsaras/syed-site`.
4. Configure the build settings:
   - **Project name**: `syed-site`
   - **Production branch**: `dev`
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty or default)
5. Click **Save and Deploy**.

Cloudflare Pages automatically serves `index.html` for single-page application client-side routes (`/about`, `/industries`, `/contact`) on refresh. Every push to `dev` will trigger an automated build and deploy.
