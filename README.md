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

## 2. Cloudflare Pages Deployment via GitHub Actions (`dev` branch)

This repository includes a preconfigured GitHub Actions workflow: [`.github/workflows/deploy-cloudflare.yml`](file:///.github/workflows/deploy-cloudflare.yml).

### Step 1: Create a Project in Cloudflare Pages
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, go to **Workers & Pages** -> **Create application** -> **Pages**.
3. Choose **Direct Upload** (or connect git) and name your project, e.g. `syed-site`.

### Step 2: Obtain Cloudflare API Token & Account ID
1. **Account ID**: Available on the right sidebar of the Cloudflare Dashboard overview page.
2. **API Token**:
   - Go to **My Profile** -> **API Tokens** -> **Create Token**.
   - Use the **Cloudflare Pages** template (Permissions: `Cloudflare Pages:Edit`, `Account:Read`).
   - Copy the generated token.

### Step 3: Add GitHub Repository Secrets
In your GitHub repository, navigate to **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**:
- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API Token.
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID.
- `CLOUDFLARE_PROJECT_NAME`: (Optional) Your Cloudflare Pages project name (defaults to `syed-site`).

### Step 4: SPA Routing Support (`_redirects`)
To support React Router client-side routing on Cloudflare Pages, a [`public/_redirects`](file:///public/_redirects) file is already in place:
```
/* /index.html 200
```
When `npm run build` runs, Vite copies this file directly into `dist/`, ensuring subpages (like `/about`, `/industries`, `/contact`) resolve without 404 errors on page refresh.

### Step 5: Push to the `dev` Branch
```bash
git add .
git commit -m "feat: setup cloudflare pages deployment via github actions"
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin dev
```
GitHub Actions will automatically trigger, build the production bundle, and publish to Cloudflare Pages.
