# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure
✅ Astro project structure (src/, public/, layouts, components)
✅ Reusable components (Header.astro, Footer.astro, InsuranceFAQ.astro, InsuranceNav.astro)
✅ Markdown content collections (src/content/...)
✅ Bilingual routing (src/pages/bn/...)
✅ Dynamic blog pages (src/pages/blog/[slug].astro)
✅ Separate health and life insurance content
✅ Existing JavaScript for insurance functionality
✅ Project documentation (README.md, Project_Blueprint.txt)
Inside of your Astro project, you'll see the following folders and files:

```text
src/
├── components/
│   ├── Header.astro              <-- Shared header with language toggle
│   ├── Footer.astro              <-- Shared footer
│   ├── InsuranceFAQ.astro        <-- Interactive accordion
│   └── InsuranceNav.astro        <-- Quick navigation bar for insurance sub-pages
│
├── layouts/
│   └── BaseLayout.astro          <-- Master layout (includes <ClientRouter />)
│
├── utils/
│   └── i18n.js                   <-- Central translation dictionary
│
└── pages/                        <-- ENGLISH (DEFAULT) ROUTES
    ├── index.astro               <-- Home Page (/)
    ├── about.astro               <-- About Page (/about)
    ├── contact.astro             <-- Contact Page (/contact)
    ├── insurance.astro           <-- Main Insurance Hub (/insurance)
    │
    ├── life-insurance/           <-- LIFE INSURANCE SPOKES
    │   ├── index.astro           <-- Life Hub (/life-insurance)
    │   ├── term-life.astro       <-- Pure Protection (/life-insurance/term-life)
    │   ├── endowment-savings.astro<-- Savings & LIC Plans (/life-insurance/endowment-savings)
    │   └── ulip-investments.astro<-- Market Linked (/life-insurance/ulip-investments)
    │
    ├── health-insurance/         <-- HEALTH INSURANCE SPOKES
    │   ├── index.astro           <-- Health Hub (/health-insurance)
    │   ├── family-floater.astro  <-- Coverage & Mediclaim (/health-insurance/family-floater)
    │   └── riders-topups.astro   <-- Super Top-Up & Riders (/health-insurance/riders-topups)
    │
    └── bn/                       <-- BENGALI ROUTES (MIRROR IMAGE)
        ├── index.astro           <-- Home (/bn)
        ├── about.astro           <-- About (/bn/about) [REPLACING about.md]
        ├── contact.astro         <-- Contact (/bn/contact)
        ├── insurance.astro       <-- Insurance Hub (/bn/insurance)
        │
        ├── life-insurance/
        │   ├── index.astro
        │   ├── term-life.astro
        │   ├── endowment-savings.astro
        │   └── ulip-investments.astro
        │
        └── health-insurance/
            ├── index.astro
            ├── family-floater.astro
            └── riders-topups.astro
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
