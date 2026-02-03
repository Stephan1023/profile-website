# Profile Website For my own profile

A modern, single-page profile website built with Angular. It includes sections for a hero intro, about, skills, projects, and contact.

## ✨ What’s inside

- Hero section with call-to-action buttons
- About section with metrics
- Skills pill grid
- Project highlights
- Contact card and social links

## Development server

```bash
ng serve
```

Then visit `http://localhost:4200/`.

## Build

```bash
ng build
```

Build outputs are written to `dist/`.

## Hosting on GitHub Pages

This repo includes a GitHub Actions workflow that builds the site and publishes it to GitHub Pages on every push to `main`.

1. In your GitHub repo, go to **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Push a commit to `main` and wait for the **Deploy to GitHub Pages** workflow to finish.

The site will be available at `https://<your-username>.github.io/<your-repo>/`.

> Note: The workflow builds with `--base-href "/<repo>/"`. If you use a custom domain or want to host at the root, update the build step in `.github/workflows/deploy-pages.yml` to use `--base-href "/"`.

### Other hosting options

Any static host (Netlify, Vercel, Cloudflare Pages, S3) works by uploading the `dist/profile-website` folder after running `ng build`.

### Troubleshooting GitHub Pages

If the deploy workflow fails with a "Get Pages site" or "Not Found" error, double-check that **Settings → Pages → Build and deployment** is set to **GitHub Actions**. The workflow now attempts to enable Pages automatically, but organization policies can still require you to enable it manually first.

## Customize the content

- Update the layout and copy in `src/app/app.html`.
- Adjust colors and typography in `src/styles.css`.
- Replace the avatar initials and social links with your own details.

## Testing

```bash
ng test
```

## Angular CLI reference

See the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
