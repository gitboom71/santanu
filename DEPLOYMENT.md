# DEPLOYMENT.md

# Deployment Guide

## Overview

Santanu's Space is deployed automatically using GitHub and Vercel.

## Pipeline

``` text
Local Development
      │
git add / commit
      │
git push
      │
GitHub Repository
      │
Webhook
      │
Vercel
      │
Install Dependencies
      │
Astro Build
      │
Deploy
      │
Production Website
```

## Local Commands

``` bash
npm install
npm run dev
npm run build
npm run preview
npm run test:site
```

## Deployment Steps

1.  Commit changes.
2.  Push to GitHub.
3.  Vercel detects the commit.
4.  Build starts automatically.
5.  Static files are published.

## Troubleshooting

-   Check build logs.
-   Run `npm run build` locally.
-   Verify Node version (\>=22.12.0).
-   Fix broken links using `npm run test:site`.

## Best Practices

-   Keep main branch deployable.
-   Test locally before pushing.
-   Use meaningful commit messages.
