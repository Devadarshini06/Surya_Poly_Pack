# Surya Poly Pack — Official Business Website

A professional, modern, responsive bilingual business website for **Surya Poly Pack**, a flexible packaging and poly packaging manufacturing company specializing in printed packaging covers, flexible packaging products, bags, pouches, flexographic printing, and packaging conversion services.

---

## 🚀 Key Features

- **Frontend-Only Architecture**: Pure React + Vite frontend without backend or database dependencies.
- **Bilingual Support (English & தமிழ்)**:
  - Centralized translation dictionary system (`src/locales/en.js` & `src/locales/ta.js`).
  - Native Tamil typography integration with Google Fonts (`Noto Sans Tamil`).
  - Language preference persisted across browser refreshes via `localStorage`.
  - Comprehensive translation across all 6 pages, navigation, forms, validation messages, and footer.
- **Brand Identity**:
  - Industrial manufacturing aesthetic built using corporate colors: Deep Violet (`#5B2A86`), Primary Purple (`#6F42C1`), Dark Charcoal (`#231F20`), Warm White (`#FAF9F6`), and Light Grey (`#F2F0F4`).
- **Complete Page Suite**:
  1. **Home (`/`)**: Hero with industrial visuals, company overview, featured product categories, manufacturing capabilities, machinery highlights, "Why Choose Us" feature grid, and bilingual call to action.
  2. **About Us (`/about`)**: Company profile, manufacturing pillars, applications served, and quality commitments.
  3. **Products (`/products`)**: Filterable catalogue across Food Packaging, Bags & General, Special Packaging, and Industrial/Consumer, with live search, technical detail modals, and separate designation for non-plastic alternatives.
  4. **Machinery & Manufacturing (`/machinery`)**: Technical cards for Bison Flexographic (2025), Marshal Six-Colour (2018), PP conversion, PE lines, bottom/side sealing machines, plus an in-depth Flexographic Printing Process breakdown.
  5. **Gallery (`/gallery`)**: Filterable photo showcase with keyboard-accessible image lightbox modal (zoom, previous/next, escape to exit).
  6. **Contact Us (`/contact`)**: Centralized contact placeholders, WhatsApp direct link, and an interactive client-side enquiry form with validation and realistic demo feedback.
  7. **404 Page**: Custom bilingual not found page.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Navigation**: React Router DOM v7
- **Icons**: Lucide React
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Outfit*, *Noto Sans Tamil*)

---

## 📁 Project Structure

```text
src/
├── assets/             # Brand logos and vector graphics
├── components/         # Reusable presentation components
│   ├── EnquiryForm.jsx      # Client-side enquiry form with validation
│   ├── Footer.jsx           # Corporate footer with placeholders and quick links
│   ├── Header.jsx           # Sticky responsive navbar and mobile menu drawer
│   ├── LanguageSwitcher.jsx # English / தமிழ் toggle pill
│   ├── MachineCard.jsx      # Technical machine specs card with verification flag
│   ├── ProductCard.jsx      # Product card with specs modal and enquiry action
│   ├── SectionHeading.jsx   # Standardized section headings
│   ├── SEO.jsx              # Dynamic page title and meta description updater
│   └── WhatsAppButton.jsx   # Floating WhatsApp quick-action button
├── context/
│   └── LanguageContext.jsx  # Bilingual context provider with localStorage persistence
├── data/
│   ├── company.js           # Centralized company information, placeholders, WhatsApp generator
│   ├── products.js          # Complete 16+ products catalogue across 4 categories
│   ├── machines.js          # Machinery specifications and flexographic process data
│   └── gallery.js           # Visual gallery highlights and categories
├── locales/
│   ├── en.js                # English translation dictionary
│   └── ta.js                # Tamil translation dictionary (தமிழ்)
├── pages/
│   ├── Home.jsx             # Homepage (Sections A – H)
│   ├── About.jsx            # About Us page
│   ├── Products.jsx         # Product catalogue with search and category filters
│   ├── Machinery.jsx        # Machinery and flexographic printing page
│   ├── Gallery.jsx          # Filterable photo gallery with modal lightbox
│   ├── Contact.jsx          # Contact page and enquiry form
│   └── NotFound.jsx         # 404 page
├── App.jsx                  # React Router configuration & scroll restoration
├── index.css                # Tailwind CSS v4 design tokens and brand styling
└── main.jsx                 # Application entry point
```

---

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The application will start locally at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🏢 Updating Official Company Assets & Details

All contact information, placeholders, and phone numbers are managed centrally in a single configuration file:

👉 `src/data/company.js`

When the company provides official details:
- **Phone Numbers**: Update `COMPANY_INFO.phone.primary` and `COMPANY_INFO.phone.primaryRaw`.
- **WhatsApp Number**: Update `COMPANY_INFO.whatsapp.number`.
- **Email**: Update `COMPANY_INFO.email.sales`.
- **Address**: Update `COMPANY_INFO.address`.
- **Official Photographs**: Place high-resolution photos into `public/images/` and update paths in `src/data/products.js`, `src/data/machines.js`, and `src/data/gallery.js`.

---

## 📄 License
Private commercial website for Surya Poly Pack. All rights reserved.
