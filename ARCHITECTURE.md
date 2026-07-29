# ARCHITECTURE.md

# Santanu's Space --- Architecture Guide

## Overview

Santanu's Space is a bilingual static website built with **Astro 7**. It
follows a component-based architecture with route-based
internationalization and Markdown-powered content collections.

## High-Level Architecture

``` text
Browser
   │
   ▼
Astro Routing
   │
   ├── Pages
   ├── Layouts
   ├── Components
   └── Content Collections
          │
          ▼
      Static HTML
          │
          ▼
        Vercel
```

## Source Structure

``` text
src/
├── assets/        # Images
├── components/    # Reusable UI
├── config/        # Global configuration
├── content/       # Markdown collections
├── layouts/       # Shared layouts
├── pages/         # Routes
├── styles/        # CSS
└── utils/         # Utilities including i18n
```

## Internationalization

-   English routes live under `/`
-   Bengali routes live under `/bn/`
-   Shared translations are centralized in `src/utils/i18n.ts`.

## Content Collections

Articles are stored as Markdown files under:

-   `content/blog`
-   `content/health`
-   `content/life`

Each article has English (`-en.md`) and Bengali (`-bn.md`) versions.

## Deployment

GitHub is connected to Vercel. Every push to the production branch
triggers an automatic build and deployment.

## Design Principles

-   Static-first
-   Performance-first
-   Modular components
-   Clean separation of content and presentation
-   Maintainable bilingual architecture
