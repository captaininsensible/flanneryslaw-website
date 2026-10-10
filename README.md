# Flannery's Law Website

A single-page, mobile-responsive business website for Flannery's Law.

## Files
- `index.html` – page structure and content
- `styles.css` – styling (colours are CSS variables at the top)
- `script.js` – smooth scrolling, mobile menu, active nav highlighting

## Customisation
- **Text**: edit the sections in `index.html` (About, Services, Contact).
- **Maxim**: edit the `<p class="maxim">` in the hero section.
- **Email**: replace `info@flanneryslaw.co.uk` in the Contact section.
- **Photo**: save your headshot as `shane-flannery.jpg` in the repository root (use an image you have permission to use, e.g. from your CJ Law profile), then replace the `photo-placeholder` div in `index.html` with `<img src="shane-flannery.jpg" alt="Shane Flannery">`.
- **Logo**: save your crest image as `logo.png` in the repository root and replace the `.logo-mark` span with `<img src="logo.png" alt="Flannery's Law crest" height="40">`. Until then the logo is the "FL" mark and text in the header; replace the `.logo-mark` span with an `<img>` to use your own.
- **Colours**: change the variables in `:root` in `styles.css`.

## Deploying to GitHub Pages
1. Push the files to the `main` branch.
2. In the repository go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
4. The site will be live at `https://<username>.github.io/flanneryslaw-website/`.

### Custom domain (flanneryslaw.co.uk)
1. In **Settings → Pages**, enter `flanneryslaw.co.uk` under Custom domain.
2. At your DNS provider add `A` records for the apex domain pointing to GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and a `CNAME` for `www` pointing to `<username>.github.io`.
3. Enable **Enforce HTTPS** once the certificate is issued.
