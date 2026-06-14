# Resource Pages — how they work

Resource pages are **normal pages edited in code** (not the CMS), since they
rarely change. They live in `src/pages/resources/` — one `.astro` file each.

They all share one layout component, `src/components/ResourcePage.astro`, which
renders the page header and the two-column body (main article + sidebar). So
each page file only contains its own content.

## The fully-built example

`src/pages/resources/adhd-resources.astro` is complete (converted from your
original ADHD page). Use it as the reference.

## The 6 boilerplate pages

The other six (`anxiety-resources.astro`, `depression-resources.astro`, etc.)
are stubs with `PASTE ... HERE` placeholders. Open each, drop in your real
copy where marked, and you're done. The structure to fill:

- `<h2>` headings + `<p>` paragraphs in the `resource-main-content` article.
- A `resource-list` `<ul>` for symptoms/bullet points.
- Sidebar cards: "Trusted Organizations" (a list of links), "Local & Crisis
  Support", and "When To Seek Help".

## Adding a brand-new resource topic

1. Create `src/pages/resources/my-topic.astro` (copy an existing one as a
   starting point).
2. Add it to the `resourceTopics` array in `src/data/site.js` with a matching
   `slug: "my-topic"`. That makes it appear in the nav dropdown and the
   resources grid automatically.

That's it — the URL becomes `/resources/my-topic`.

## A note on the original files' links

Your old resource HTML had a couple of broken links (e.g. the footer "Home"
link pointed to `index.html` from inside the `/resources/` folder, and the
About link pointed to `about.html` instead of `../about.html`). The shared
Nav/Footer components fix this — every link is now an absolute path like
`/about`, so it works correctly from any page depth.
EOF... 2>/dev/null || true
cat > /home/claude/empower/RESOURCE-PAGES.md <<'EOF'
# Resource Pages — how they work

Resource pages are **normal pages edited in code** (not the CMS), since they
rarely change. They live in `src/pages/resources/` — one `.astro` file each.

They all share one layout component, `src/components/ResourcePage.astro`, which
renders the page header and the two-column body (main article + sidebar). So
each page file only contains its own content.

## The fully-built example

`src/pages/resources/adhd-resources.astro` is complete (converted from your
original ADHD page). Use it as the reference for what finished content looks
like.

## The 6 boilerplate pages

The other six (`anxiety-resources.astro`, `depression-resources.astro`, etc.)
are stubs with `PASTE ... HERE` placeholders. Open each, drop in your real
copy where marked, and you're done. The structure to fill:

- `<h2>` headings + `<p>` paragraphs in the `resource-main-content` article.
- A `resource-list` `<ul>` for symptoms / bullet points.
- Sidebar cards: "Trusted Organizations" (a list of links), "Local & Crisis
  Support", and "When To Seek Help".

You only edit the part between the `<ResourcePage ...>` and `</ResourcePage>`
tags, plus the title/description/jsonLd at the top.

## Adding a brand-new resource topic

1. Create `src/pages/resources/my-topic.astro` (copy an existing one as a
   starting point).
2. Add it to the `resourceTopics` array in `src/data/site.js` with a matching
   `slug: "my-topic"`. That makes it appear in the nav dropdown and the
   resources grid automatically.

The URL becomes `/resources/my-topic`.

## A note on the original files' links

Your old resource HTML had a couple of broken links (e.g. the footer "Home"
link pointed to `index.html` from inside the `/resources/` folder, and the
About link pointed to `about.html` instead of `../about.html`). The shared
Nav/Footer components fix this — every link is now an absolute path like
`/about`, so it works correctly from any page depth.
EOF
echo "RESOURCE-PAGES.md written"