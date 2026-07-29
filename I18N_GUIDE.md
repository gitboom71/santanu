# I18N_GUIDE.md

# Internationalization (i18n) Guide

## Overview

Santanu's Space supports two languages using route-based localization:

-   English: `/`
-   Bengali: `/bn/`

Translations are centralized in `src/utils/i18n.ts`.

## Translation Flow

``` text
Request
  │
  ├── /
  │     └── English dictionary
  │
  └── /bn/
        └── Bengali dictionary
```

## Adding a Translation Key

``` ts
export const translations = {
  en: { services: "Services" },
  bn: { services: "সেবা" }
};
```

Use in Astro:

``` astro
{t(lang, "services")}
```

## Best Practices

-   Keep identical keys in both languages.
-   Store only UI strings in `i18n.ts`.
-   Keep Markdown content translated separately.
-   Avoid hard-coded UI text.

## Checklist

-   [ ] English updated
-   [ ] Bengali updated
-   [ ] Links tested
-   [ ] Build passes
