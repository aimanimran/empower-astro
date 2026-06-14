# Empower Psychiatry — Astro Site

Your site rebuilt in [Astro](https://astro.build). Same look, same CSS, same
behavior — but now the header, footer, and shared content live in **one place
each** and cascade across every page, and the resource pages are editable
through a friendly CMS.

---

## Quick start

```bash
npm install      # one time
npm run dev      # local dev server at http://localhost:4321
npm run build    # produces the static site in dist/
npm run preview  # preview the built site
```

You need [Node.js](https://nodejs.org) 18.17+ installed.

---

## How it's organized

```
src/
  data/
    site.js          ← Contact info, nav menu, footer links, resource list.
                       EDIT HERE and it updates everywhere.
    testimonials.js  ← Patient reviews on the Feedback page.
  components/
    Nav.astro        ← The header. Built once, used on every page.
    Footer.astro     ← The footer. Built once, used on every page.
  layouts/
    Base.astro       ← The page shell: <head>, fonts, CSS, nav, footer, script.
                       Every page wraps itself in this.
  components/
    ResourcePage.astro   ← Shared two-column layout for resource topic pages.
  pages/
    index.astro          → /            (home)
    about.astro          → /about
    services.astro       → /services
    feedback.astro       → /feedback
    contact.astro        → /contact
    blog/
      index.astro        → /blog              (lists all posts, newest first)
      [slug].astro       → /blog/<post>       (renders each post from markdown)
    resources/
      index.astro        → /resources         (the topic grid)
      adhd-resources.astro      → /resources/adhd-resources  (worked example)
      anxiety-resources.astro   → ... (+ 5 more boilerplate stubs to fill in)
  content/
    blog/*.md        ← One Markdown file per blog post. THIS is what the
                       CMS creates and edits. (See CMS-SETUP.md.)

public/
  assets/css/styles.css  ← Your original stylesheet, untouched.
  assets/js/main.js      ← Your original JS, untouched.
  assets/images/         ← PUT YOUR IMAGES HERE (see IMAGES-TODO.md).
  admin/                 ← The CMS (Decap). See CMS-SETUP.md.
```

### The key win: change once, cascade everywhere

- **Phone number, address, email, hours-related contact info** → edit
  `src/data/site.js`. The footer (on all pages) and the contact page update
  together.
- **Nav menu items / dropdowns** → edit the `navItems` array in
  `src/data/site.js`. Header updates on every page.
- **Add a resource topic** → add one entry to `resourceTopics` in
  `src/data/site.js` and a matching page file. See `RESOURCE-PAGES.md`.

### Blog (the part that changes often)

The blog is wired to a **CMS** so non-technical staff can add posts in a
browser — no code. Each post is one Markdown file in `src/content/blog/`, and
new posts appear on `/blog` and get their own page automatically. See
`CMS-SETUP.md`.

### Resource pages

These are normal code pages (they rarely change). One is fully built as an
example; the rest are boilerplate to paste content into. See
`RESOURCE-PAGES.md`.

---

## URLs changed from `.html` to clean paths

Old: `/about.html` → New: `/about`. Astro builds these as folders
(`/about/index.html`) so they work on any host. **Set up redirects** from the
old `.html` URLs so existing links and search rankings don't break — see
`REDIRECTS.md`.

---

## Before you deploy

1. Add your images — see **IMAGES-TODO.md**.
2. Set up the CMS backend — see **CMS-SETUP.md**.
3. Add redirects from old `.html` URLs — see **REDIRECTS.md**.
4. Replace the placeholder resource page content (in the CMS or the `.md`
   files).
5. Update `site:` in `astro.config.mjs` if your domain differs.

---

## Deploying

This is a static site. Easiest path is **Netlify** or **Cloudflare Pages**:
connect your Git repo, set build command `npm run build`, publish directory
`dist`. Every push (or CMS publish) rebuilds and deploys automatically.
