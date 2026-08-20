# react-test-front

Vite, React, and TypeScript frontend for the `diogodeandrade.com.br` personal profile site.

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file:

   ```bash
   cp .env.example .env
   ```

3. Start the Vite development server:

   ```bash
   npm run dev
   ```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite dev server. |
| `npm run build` | Type-check and create the production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run typecheck` | Run TypeScript project validation. |
| `npm run lint` | Run ESLint across the project. |

## Environment Variables

| Name | Purpose |
| --- | --- |
| `VITE_API_BASE_URL` | Base URL for the AdonisJS backend API. |

## Deployment Notes

The production build is static and compatible with Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`

## Cloudflare Pages

Use these settings when creating the Cloudflare Pages project:

| Setting | Value |
| --- | --- |
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | repository root |
| Node.js version | `20.6.0` or newer |

Required Cloudflare Pages environment variables:

| Name | Example | Purpose |
| --- | --- | --- |
| `VITE_API_BASE_URL` | `https://api.diogodeandrade.com.br` | Base URL for the AdonisJS backend API. |

Static deployment behavior:

- `public/_redirects` keeps the React app compatible with direct navigation to frontend routes.
- `public/_headers` applies basic browser security headers to static responses.
