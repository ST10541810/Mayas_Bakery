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
- Responsive card layouts and form styling
- Search and category filtering on the products page
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
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/ (if added later)
```

## How to run
1. Open the project folder in Visual Studio Code.
2. Open `index.html` in your browser, or use the Live Server extension.
3. Navigate through the website using the menu.
4. Test the menu filters and form validation on the relevant pages.

## Notes
- This is a coursework demo website.
- The business details used in the project are illustrative and should be confirmed before real-world publication.
- The enquiry and contact forms validate input in the browser only; they do not send data to a server.
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
