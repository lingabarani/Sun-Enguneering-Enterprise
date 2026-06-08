# Sun Engineering Premium Industrial Website

A complete React + Vite website for Sun Engineering, Coimbatore. Includes dark/light theme toggle, products, services, gallery, product detail pages, 5-step order/enquiry flow, request quote form, WhatsApp integration, click-to-call links, SunBot chatbot, ratings and reviews.

## Run
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Build
```bash
npm run build
npm run preview
```

## Project Structure
```text
sun-engineering/
+-- public/              Static assets, brochures, product images, logos
+-- src/                 React source code
|   +-- components/      Reusable UI components
|   +-- context/         App-level React context
|   +-- data/            Product, image, company and content data
|   +-- pages/           Route-level page components
|   +-- utils/           Shared helpers
+-- docs/                Project notes and setup documentation
|   +-- screenshots/     UI reference screenshots
+-- logs/                Local development logs
+-- index.html           Vite HTML entry
+-- package.json         Scripts and dependencies
+-- vite.config.js       Vite configuration
```

## Important Files
- `src/data/products.js` - product database, company details, FAQs and reviews
- `src/data/siteImages.js` - page image mapping from `public/assets/New Assets`
- `src/utils/whatsappHelper.js` - WhatsApp message builder and redirect helpers
- `src/context/ThemeContext.jsx` - dark/light theme with localStorage
- `src/components/OrderFlow.jsx` - 5-step order enquiry flow

## Pages
Home, About Us, Products & Services, Product Detail, Services, Gallery, Connect With Us, Login, Request Quote, FAQs/Ratings & Reviews, Order/Enquiry.

## WhatsApp
All enquiry, order and quote forms generate a pre-filled WhatsApp message and redirect to `+91 93601 70110` using `https://wa.me/919360170110?text=...`.
