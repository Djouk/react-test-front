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
