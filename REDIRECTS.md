# Redirects from old `.html` URLs

Your old site used `/about.html`, `/services.html`, etc. The Astro site uses
clean URLs (`/about`, `/services`). To preserve bookmarks, inbound links, and
SEO, redirect the old paths to the new ones.

## Netlify / Cloudflare Pages

Create a file named `_redirects` in the `public/` folder with:

```
/index.html        /            301
/about.html        /about       301
/blog.html         /blog        301
/services.html     /services    301
/feedback.html     /feedback    301
/resources.html    /resources   301
/contact.html      /contact     301
/resources/anxiety-resources.html       /resources/anxiety-resources       301
/resources/depression-resources.html    /resources/depression-resources    301
/resources/adhd-resources.html          /resources/adhd-resources          301
/resources/ocd-ptsd-resources.html      /resources/ocd-ptsd-resources      301
/resources/autism-resources.html        /resources/autism-resources        301
/resources/child-family-resources.html  /resources/child-family-resources  301
/resources/dementia-resources.html      /resources/dementia-resources      301
```

(Anything in `public/` is copied as-is into the built site.)

## Other hosts

Most static hosts have an equivalent redirects mechanism (e.g. `vercel.json`
for Vercel, `.htaccess` for Apache). The mapping above is what you need.
