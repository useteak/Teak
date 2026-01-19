# Teak

Teak is a headless feedback platform: a public API to collect feedback from your product, plus an authenticated dashboard to manage it.

## Overview

Teak lets you create organizations and projects, then exposes a simple endpoint that your app can call to submit feedback. The dashboard groups incoming feedback, supports team invites, and sends notification emails to members who opt in.

## Features

- Public feedback API with per-project rate limiting
- Organizations, projects, and team member invites
- Feedback dashboard with daily grouping and type tags
- Email/password auth plus GitHub and Linear OAuth
- Password reset flow and invite acceptance pages
- Resend-powered confirmation and notification emails

## API quickstart

Submit feedback to a project:

```shell
curl -X POST "https://your-app-url/api/v1/{organizationId}/projects/{projectId}/feedback" \
  -H "Content-Type: application/json" \
  -d '{
    "description": "I would really love to be able to copy this page as markdown.",
    "type": "FEATURE_REQUEST",
    "email": "jane@doe.com",
    "metadata": { "page": "Docs" }
  }'
```

Valid `type` values: `BUG`, `FEATURE_REQUEST`, `IMPROVEMENT`, `QUESTION`, `PRAISE`, `OTHER`.

## Local development

1. Install dependencies: `bun install`
2. Create a `.env` file (see required variables below)
3. Start the dev server: `bun run dev`

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `DATABASE_URL` | Yes | Postgres connection string for Prisma |
| `VITE_APP_URL` | Yes | Public base URL used in API examples and links |
| `RESEND_API_KEY` | Yes | Resend API key for transactional email |
| `RESEND_FROM_EMAIL` | No | Sender address for outgoing email |
| `GITHUB_CLIENT_ID` | Yes | GitHub OAuth app client ID |
| `GITHUB_CLIENT_SECRET` | Yes | GitHub OAuth app client secret |
| `LINEAR_CLIENT_ID` | Yes | Linear OAuth app client ID |
| `LINEAR_CLIENT_SECRET` | Yes | Linear OAuth app client secret |

## Tech stack

- TanStack Start + TanStack Router
- React + TypeScript
- Tailwind CSS + shadcn/ui
- Prisma + Postgres
- Better Auth for session and OAuth
- Resend for email

## Project structure

- `src/routes/`: app routes and API handlers (including `/api/v1/...`)
- `src/components/`: UI components and primitives
- `src/helpers/`: integration code helpers
- `src/lib/`: auth, database, email, and communication modules
- `src/prisma/`: Prisma schema and migrations
- `src/utils/`: env, rate limiting, and server helpers

## Scripts

- `bun run dev`: start dev server
- `bun run build`: production build
- `bun run preview`: preview build
- `bun run test`: run tests
- `bun run lint`: lint
