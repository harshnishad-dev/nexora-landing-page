# Nexora - Modern Business & Technology Landing Page

A responsive, high-performance web application built with React and Vite. This project implements the Nexora homepage based on the provided design mockup and functional requirements.

## Live Demo & Preview

- **Dev Server**: `http://localhost:5174/`
- **Build Output**: Clean static bundle via Vite

## Technologies Used

- **React 19**: Modern component architecture, functional components, and hooks (`useState`, `useMemo`, `useRef`, `useEffect`).
- **Vite 6**: Fast development build tool and bundling.
- **Vanilla CSS**: Clean, responsive layout using Flexbox, CSS Grid, custom properties (CSS variables), and micro-animations.
- **Lucide React**: Clean SVG icons for UI actions, statistics, and product categories.
- **Google Fonts**: Plus Jakarta Sans and Inter for modern typography.

## Project Structure

```text
src/
├── assets/
│   ├── hero-bg.jpg
│   ├── why-choose-us.jpg
│   ├── blog-1.jpg
│   ├── blog-2.jpg
│   └── blog-3.jpg
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── StatCard.jsx
│   ├── ProductCard.jsx
│   ├── ProductModal.jsx
│   ├── BlogCard.jsx
│   ├── SectionTitle.jsx
│   └── Footer.jsx
├── data/
│   └── homeData.js
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Features Implemented

### 1. Header & Navigation
- Sticky navbar with backdrop blur and scroll detection.
- Navigation links with active indicator state and smooth section scrolling.
- Interactive search icon that scrolls to and focuses the product search bar.
- Responsive mobile hamburger menu controlled with React state.

### 2. Hero Section
- Clean visual layout matching the design reference with a panoramic background and gradient overlay.
- Headline with highlighted keyword styling.
- Primary CTA button (`Explore Our Products`) with smooth scroll to products.
- Secondary CTA button (`Watch Video`) with interactive video modal preview.

### 3. Statistics Section
- 4 data-driven metric cards using the reusable `StatCard` component.
- Icons, values, and labels rendered dynamically from `statsData`.

### 4. Products Section & Filtering
- Dynamic rendering of product cards from `productsData`.
- Live search input: filters products by title, description, or category without page reload.
- Category tabs: allows filtering by `All`, `Productivity`, `Collaboration`, `Analytics`, or `Cloud`.
- Empty state: displays a friendly no-results message with a quick reset button when no products match.
- Detail Modal: clicking `Learn More` opens `ProductModal` with full feature lists, pricing, rating, and Escape key / backdrop click support.

### 5. Why Choose Us Section
- Two-column responsive layout.
- Dynamic feature checklist with custom checkmark icons.
- Modern workspace image featuring 3 floating badges (`Faster Performance`, `Enterprise Grade Security`, `Dedicated Support`).

### 6. Blog & News Section
- Reusable `BlogCard` components populated dynamically from `blogPostsData`.
- Includes publish dates, article excerpts, and interactive read previews.

### 7. Full-Width CTA Banner & Footer
- Gradient CTA banner with call-to-action button.
- Comprehensive dark footer with company branding, page links, social icons, and copyright details.

## Bonus Features Added

- **URL Query Sync**: Selected category and search query persist in the browser URL (`?category=...&q=...`) using `URLSearchParams` and `history.replaceState`.
- **Skeleton Loading**: Simulated loading state placeholders before dynamic content mounts.
- **Keyboard & Click-Outside Accessibility**: Modals close on `Escape` key press or when clicking the backdrop overlay, with `body` scroll lock enabled.
- **Clean Component Separation**: Zero code duplication across repeated elements.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd westonk
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview the production build:
```bash
npm run preview
```
