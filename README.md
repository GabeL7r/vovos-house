# Vovo's House — Landing Page

Waitlist landing page for Vovo's House, built with Next.js (App Router). Visitors submit their email, then a follow-up
modal collects the city they'd like us to launch in, how many kids they have, and each kid's age. Submissions are
posted to a Slack channel via an Incoming Webhook, and a `sign_up` conversion event is sent to Google Analytics 4.
After joining, visitors see one-tap share buttons to invite friends ("the more people who sign up, the faster we
launch").

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in SLACK_WEBHOOK_URL and NEXT_PUBLIC_GA_MEASUREMENT_ID
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Slack setup

1. Go to <https://api.slack.com/apps> and create an app (or reuse one) "From scratch".
2. Under **Features → Incoming Webhooks**, toggle it on and click **Add New Webhook to Workspace**, then pick the
   channel that should receive signups.
3. Copy the generated webhook URL into `SLACK_WEBHOOK_URL` in `.env.local` (and in your hosting provider's
   environment variables for production).

Each waitlist submission posts a message with the email, requested city, number of kids, and their ages.

## Google Analytics setup

1. Create a GA4 property at <https://analytics.google.com> (Admin → Create Property), then add a **Web** data stream.
2. Copy the stream's **Measurement ID** (format `G-XXXXXXXXXX`) into `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`
   (and in your hosting provider's environment variables for production).
3. Leave it unset to disable GA locally — `src/components/GoogleAnalytics.tsx` renders nothing without an ID.

Page views are tracked automatically. On a successful waitlist submission the app also fires a `sign_up` event
(`method: "waitlist"`, plus non-PII `city` / `num_kids` params — no email is ever sent to GA). Each share button
click fires a `share` event with a `method` param (`native_share`, `copy_link`, `whatsapp`, `x`, `facebook`,
`email`) so you can see which channel drives the most referrals.

## Project structure

- `src/app/page.tsx` — landing page composition
- `src/components/` — page sections (`Hero`, `WaitlistSection`, `FaqSection`, etc.) and `ui/` primitives (`Button`,
  `Input`, `Select`, `Stepper`, `Modal`, `Checkbox`, `Icon`) mirroring the source design system's components/tokens
- `src/components/ShareButtons.tsx` — post-signup share row (native share sheet, copy link, WhatsApp, X, Facebook,
  email), each firing a GA `share` event
- `src/components/GoogleAnalytics.tsx` — loads gtag.js and configures GA4 when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- `src/lib/gtag.ts` — thin `gaEvent()` helper around `window.gtag`
- `src/app/api/waitlist/route.ts` — validates and forwards submissions to Slack
- `src/lib/slack.ts` — Slack webhook payload builder
- `src/app/globals.css` — design tokens (colors, type, spacing, radius, shadows) ported from the design system

## Deploy

Any Next.js host works (e.g. Vercel). Set `SLACK_WEBHOOK_URL` and `NEXT_PUBLIC_GA_MEASUREMENT_ID` as environment
variables on the host before deploying.

## Docker

The `Dockerfile` is a multi-stage build producing a minimal production image via Next.js's `output: "standalone"`
mode (see `next.config.ts`).

```bash
# NEXT_PUBLIC_GA_MEASUREMENT_ID is inlined into the client bundle at build time (it's public by
# design), so pass it as a build arg if you want GA enabled in the image. SLACK_WEBHOOK_URL is
# read at runtime, so it's supplied with -e instead.
docker build --build-arg NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX -t vovos-house .

docker run -p 3000:3000 \
  -e SLACK_WEBHOOK_URL=https://hooks.slack.com/services/... \
  vovos-house
```

Open [http://localhost:3000](http://localhost:3000).
