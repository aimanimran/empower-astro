import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: change this to your real production domain.
  // It is used to generate absolute URLs for sitemaps and SEO.
  site: 'https://empowerpsychiatryil.com',

  // Output plain static HTML — perfect for this site and easy to host
  // on Netlify, Cloudflare Pages, GitHub Pages, etc.
  output: 'static',
});
