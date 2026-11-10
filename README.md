# Maya's Bakery Website

A responsive multi-page bakery website built for the WEDE5020 Web Development coursework.

## Overview
Maya's Bakery is a fictional neighbourhood bakery website designed to showcase a small business that has grown from a home kitchen into a local shop. The project includes a homepage, story page, menu, custom cake enquiry form, and contact page.

## Project goals
- Present the bakery's story, mission, and vision
- Showcase sample bakery items with prices and descriptions
- Provide contact details and opening hours
- Include a front-end custom cake enquiry form with browser validation
- Support responsive layouts across desktop, tablet, and mobile devices
- Demonstrate semantic HTML, CSS, and JavaScript best practices

## Target audience
- Local customers
- Families and students
- People looking for everyday bakery goods or celebration cakes

## Pages
| File | Purpose |
| --- | --- |
| `index.html` | Homepage with hero section, featured products, and calls to action |
| `about.html` | Bakery background, mission, vision, and brand story |
| `products.html` | Product menu with search and category filtering |
| `enquiry.html` | Custom cake enquiry form with required-field validation |
| `contact.html` | Contact details, opening hours, and message form |

## Features
- Shared navigation across all pages
- Mobile-friendly hamburger menu
- Expandable FAQ section on the homepage
- Responsive card layouts and form styling
- Search and category filtering on the products page
- Page-specific search titles and descriptions, Open Graph and Twitter metadata
- Search engine crawling rules and a page sitemap (replace the example domain before publishing)
- Descriptive, locally stored WebP product images with alternative text and lazy loading
- Accessible form labels and validation feedback
- Embedded location map for context
- Use of Google Fonts and Unsplash imagery

## Technology stack
- HTML5
- CSS3
- JavaScript
- Google Fonts
- Unsplash image sources

## Project structure
```text
Mayas_Bakery/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── README.md
├── CHANGELOG.md
├── REFERENCES.md
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── artisan-bread.webp
│   ├── blueberry-muffin.webp
│   ├── butter-croissant.webp
│   ├── chocolate-celebration-cake.webp
│   ├── seasonal-fruit-tart.webp
│   └── vanilla-cupcake.webp
├── css/
│   └── style.css
├── js/
│   └── script.js
```

## SEO and social sharing
- Each page has a distinct title and meta description, plus Open Graph and Twitter summary metadata.
- Product and featured images have descriptive filenames and `alt` text for accessibility and image search.
- Replace every `https://replace-with-your-domain.example` URL in `robots.txt` and `sitemap.xml` with the final HTTPS domain before publishing. Add canonical and absolute social-image URLs after the domain and social image are known.
- Submit the published sitemap URL to Google Search Console and Bing Webmaster Tools, and check indexed pages and search snippets after launch.

## Social media and backlink plan
- Create and complete the bakery's own Instagram and Facebook business profiles; use the same verified name, contact details, hours and website URL on every profile.
- Share original product photos, seasonal menus, baking updates and links to relevant menu or enquiry pages. Add descriptive captions and alt text where the platform supports them.
- Ask real local suppliers, community organisations, event venues and satisfied customers who independently recommend the bakery to link to its website.
- Keep business listings accurate on suitable local directories and map services. Pursue relevant editorial mentions, not paid link schemes, automated link exchanges or unrelated backlinks.
- Track referral visits and search performance, and keep public business details consistent. Do not publish illustrative coursework contact details as real business information.

## Performance, security and form validation
- Product images are locally stored, resized WebP files with descriptive filenames, explicit dimensions, `loading="lazy"` and `decoding="async"` to reduce transfer size and layout shifts.
- Google Fonts uses `display=swap` and only the font weights used by the styles; JavaScript is loaded with `defer`.
- The contact and custom-cake forms use native browser validation (`required`, email input type, length limits and serving bounds). Client-side checks are for user experience only and are not a security boundary.
- These static demonstration forms do not send or store information. If a backend is added, validate and constrain every field on the server, encode output, use HTTPS, protect state-changing requests against CSRF, and add appropriate abuse/rate controls before accepting real data.
- Form feedback is inserted as text, not interpreted as HTML. Do not collect sensitive personal or payment information through this demo.

## How to run
1. Open the project folder in Visual Studio Code.
2. Open `index.html` in your browser, or use the Live Server extension.
3. Navigate through the website using the menu.
4. Test the menu filters and form validation on the relevant pages.

## Notes
- This is a coursework demo website.
- The business details used in the project are illustrative and should be confirmed before real-world publication.
- The enquiry and contact forms validate input in the browser only; they do not send data to a server.
- Replace the example domain in the sitemap and robots file before deployment; the public domain has not yet been provided.
- The map is a general Cape Town city-centre example, not a verified real bakery location.

## Git workflow
Use meaningful commit messages when updating the project:

```bash
git status
git add .
git commit -m "Improve website structure and content"
git push
```

Suggested commit topics:
- Responsive navigation updates
- Form layout improvements
- Menu filtering and search
- Documentation and references

## Author
Inocencio Nanga — WEDE5020 Web Development coursework
