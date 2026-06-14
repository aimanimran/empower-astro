# CMS Setup (Decap CMS)

The site includes a browser-based content editor at `/admin/` so non-technical
staff can manage the **blog** without touching code. It's [Decap
CMS](https://decapcms.org) (free, open-source). When someone clicks "Publish",
it commits the change to your Git repo, which triggers a rebuild and redeploy.

## What's editable

- **Blog posts** — create, edit, and delete posts. Each post has a title,
  description, date, author, optional hero image, a draft toggle, and the body
  (written in a rich-text editor). Each published post automatically appears on
  the Blog page (newest first) and gets its own page at `/blog/<post-name>`.

Everything else (home, about, services, resources, contact, feedback) is a
normal page edited in code. Only the blog needs frequent updates, so that's
what's wired to the CMS.

## Step 1 — Put the project in a Git repo

Decap is git-based. Push this project to GitHub (or GitLab).

## Step 2 — Point the CMS at your repo

Edit `public/admin/config.yml` and set:

```yaml
backend:
  name: github
  repo: your-username/your-repo   # <-- your actual repo
  branch: main
```

## Step 3 — Set up login (authentication)

Staff need to log in to edit. Two common options:

### Option A — Netlify Identity (easiest if hosting on Netlify)
1. Deploy the site to Netlify.
2. In the Netlify dashboard: **Site settings → Identity → Enable Identity**.
3. Enable **Git Gateway** (Identity → Services → Git Gateway).
4. Invite staff via **Identity → Invite users**.
5. Add this line to `public/admin/index.html`, right before the decap-cms
   script tag:
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   ```
6. Change the backend in `config.yml` to:
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```

### Option B — GitHub OAuth
Use a hosted OAuth provider (e.g. a small Netlify/Cloudflare function, or a
service like Sveltia auth). Decap's docs cover this under "GitHub backend".

## Step 4 — Test locally first (optional, recommended)

1. In `config.yml`, uncomment `local_backend: true`.
2. In one terminal: `npx decap-server`
3. In another: `npm run dev`
4. Open http://localhost:4321/admin/ — you can edit without any login.
5. Re-comment `local_backend: true` before deploying.

---

## How a staff member writes a post (once login is set up)

1. Go to `yourdomain.com/admin/` and log in.
2. Click **Blog Posts → New Blog Post**.
3. Fill in the title, date, and write the body.
4. (Optional) Upload a hero image and add a short description.
5. Click **Publish**. The post is live after the site rebuilds (usually a
   minute or two on Netlify/Cloudflare).

To unpublish without deleting, open the post and turn **Draft** on.
