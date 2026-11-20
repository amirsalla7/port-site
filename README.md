# Amir Salah, portfolio site

Static site, no build step: `index.html`, `assets/` (CSS, JS, favicon), `404.html`, `robots.txt`.
English and Arabic in one page; the language button switches between them and remembers the choice.

## Security
- Strict Content Security Policy: only this site's own scripts and styles, plus Google Fonts. No inline scripts or styles.
- No server, database or third-party trackers. The enquiry form only opens the visitor's email app.
- External links open with `noopener noreferrer`.

## Publish on GitHub Pages
Settings > Pages > Source: Deploy from a branch > `main`, `/ (root)`.

## Custom domain
1. Verify the domain first: GitHub profile Settings > Pages > Add a domain (stops anyone else claiming it).
2. At the domain registrar, add these DNS records:
   - `A` records for the root (`@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records for the root (`@`): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` for `www`: `amirsalla7.github.io`
3. Repo Settings > Pages > Custom domain: enter the domain, save, wait for the DNS check, then tick "Enforce HTTPS".
