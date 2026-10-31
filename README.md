# Delaware Valley Veterans — website

Skeleton site for **Delaware Valley Veterans**, a 501(c)(19) veterans organization
(`delawarevalleyveterans.org`).

Stack: Next.js 16 (App Router, TypeScript, Turbopack), React 19, Tailwind CSS v4,
shadcn/ui (base-nova style), react-hook-form + zod.

The site is a **fully static export** (`output: "export"` in `next.config.ts`):
`npm run build` writes plain HTML/CSS/JS to `./out`, ready for GitHub Pages or
any static host. There is no server, no API routes, and no server actions.

## Pages

| Route          | Contents |
| -------------- | -------- |
| `/`            | Hero, short intro (placeholder), links to all pages |
| `/mission`     | Draft mission statement, "Our Pillars" (4 pillars), 501(c)(19) note |
| `/membership`  | Placeholder sections: Dues Structure, Eligibility Requirements, Member Benefits, How to Join |
| `/donate`      | Placeholder (disabled) donate button with Stripe TODO, "How to Donate" (card / mail a check), cautious tax note |
| `/contact`     | shadcn form (name, email, message) with client-side validation only; shows a placeholder success message (TODO: wire to Formspree or similar) |

Highlighted (amber) text on the site marks placeholders that must be replaced
before launch. Shared placeholders (EIN, email, phone, mailing address) live in
`src/lib/site.ts`.

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npx serve out    # preview the static build locally (optional)
npm run lint
```

Requires Node.js 20.9+ (developed on Node 24).

## Environment variables

None are required right now.

Planned (not yet used):

- **Stripe donations** — see the `TODO(stripe)` comment in `src/app/donate/page.tsx`.
  Simplest path: create a Stripe Payment Link and either hard-code it or read it
  from e.g. `NEXT_PUBLIC_STRIPE_DONATION_LINK`, rendering the button as a link.
- `NEXT_PUBLIC_BASE_PATH` — URL prefix for GitHub Pages project sites (default
  empty). See "Deploying to GitHub Pages" below.
- **Contact form delivery** — the site is static, so see `TODO(contact)` in
  `src/components/site/contact-form.tsx`: POST the form to a third-party form
  service (Formspree, Basin, Getform, Web3Forms) using its public endpoint ID
  (e.g. `NEXT_PUBLIC_FORMSPREE_ID`). Add spam protection (honeypot/captcha).

When you add variables, set them locally in `.env.local` (git-ignored) and in
Vercel under Project → Settings → Environment Variables.

## Deploying to GitHub Pages (primary)

A workflow is included at `.github/workflows/deploy.yml`. On every push to `main`
(or a manual run) it runs `npm ci && npm run build` and publishes `./out` to Pages.

1. Push this project to a GitHub repo (`package-lock.json` must be committed — `npm ci` needs it).
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. **basePath** (`NEXT_PUBLIC_BASE_PATH`, set as a repository *variable* under
   Settings → Secrets and variables → Actions → Variables):
   - Using the custom domain `delawarevalleyveterans.org` (or a `<user>.github.io` repo):
     leave it **unset**. No basePath is needed.
   - Serving from a project URL like `https://<user>.github.io/<repo-name>/` without a
     custom domain: set it to `/<repo-name>`.
4. **Custom domain:** `public/CNAME` contains `delawarevalleyveterans.org` and is copied
   into `out/` on build. In Settings → Pages, enter the same custom domain and tick
   **Enforce HTTPS** once the certificate is issued. At your DNS host add:
   - Apex `@` → `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (optionally `AAAA` to `2606:50c0:8000::153` … `8003::153`)
   - `www` → `CNAME` to `<user-or-org>.github.io`
   Verify the domain under your GitHub account/org Pages settings to prevent takeover.
   If you deploy to a different domain, edit or delete `public/CNAME`.
5. `public/.nojekyll` is included so GitHub Pages serves the `_next/` folder
   (Jekyll would otherwise ignore folders starting with `_`).

## Deploying to Vercel (alternative)

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. In Vercel, **Add New → Project**, import the repo. Framework preset: Next.js
   (defaults are fine: build `next build`, output handled automatically).
3. Add any environment variables, then deploy. (Vercel serves the static export
   as-is; if you move to Vercel permanently you can drop `output: "export"` to
   regain server features such as API routes.)
4. Remove `public/CNAME` if it's not needed there.

### Pointing `delawarevalleyveterans.org` at Vercel

1. Vercel → Project → **Settings → Domains** → add `delawarevalleyveterans.org`
   and `www.delawarevalleyveterans.org` (choose one to redirect to the other).
2. At your domain registrar / DNS host, either:
   - **Use Vercel nameservers** (simplest): set the nameservers Vercel shows you, or
   - **Keep your DNS host** and add the records Vercel displays, typically:
     - Apex `@` → `A` record to Vercel's IP (shown in the dashboard, commonly `76.76.21.21`)
     - `www` → `CNAME` to the value shown (e.g. `cname.vercel-dns.com`)
3. Wait for DNS to propagate; Vercel issues HTTPS certificates automatically.

Always copy the exact record values from the Vercel dashboard, as they can change.

## Before launch checklist

- Replace every `[... TBD]` / `PLACEHOLDER` value (search the repo for `TBD` and `PLACEHOLDER`).
- Have leadership approve the draft mission statement and pillar text.
- Confirm tax-deductibility wording with a tax advisor.
- Wire up Stripe and the contact form service.
