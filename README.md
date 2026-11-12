# ⚡ Thunder Athletics - Official Web Application

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.9-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-6.14.2-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Welcome to the official repository for **Thunder Athletics**, a modern, responsive web application engineered for a high-performance gym, fitness club, and athletic training center. Designed with an energetic athletic aesthetic, sleek typography, dynamic animations, and an intuitive user experience.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Branding & Design System](#-branding--design-system)
- [Official Contact & Alternative Channels](#-official-contact--alternative-channels)
- [Project Architecture](#-project-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Pages & Routes](#-pages--routes)
- [License](#-license)

---

## 🏋️ Overview

**Thunder Athletics** empowers athletes and fitness enthusiasts of all skill levels to push beyond their boundaries. The web application serves as a digital hub where prospective members can explore specialized athletic programs, review tiered membership plans, meet certified performance coaches, browse club facilities, and connect via multiple direct and alternative communication channels.

---

## ✨ Key Features

- **⚡ Branded Navigation**:
  - Interactive header featuring the Thunder Athletics brand mark and lightning badge.
  - Smooth desktop navigation with animated active route indicators.
  - Fully responsive slide-down 3D perspective menu for tablet and mobile viewports.

- **🔥 High-Impact Hero & Programs**:
  - Engaging hero section with call-to-action routing to membership plans.
  - Structured athletic programs (Thunder Strength, Athletic Conditioning, Power & Speed, Mobility & Recovery).

- **💎 Core Club Values**:
  - Four pillars of training: Relentless Grit, Elite Guidance, Dynamic Community, and Proven Results.

- **💬 Interactive FAQ & Testimonials**:
  - Expandable accordion for common questions regarding training, workout duration, and warm-ups.
  - Testimonial slider showcasing real member transformations and experiences.

- **💳 Tiered Membership Plans**:
  - Transparent pricing breakdown for Silver, Gold, and Platinum tiers.
  - Interactive feature checklist highlighting included and excluded amenities per tier.

- **🏆 Certified Trainers Roster**:
  - Coach profiles showcasing credentials and specializations (Aerobic, Speed, Flexibility, Body Composition, Circuit Training).
  - One-click direct WhatsApp connection to chat with coaches.

- **🖼️ Asynchronous Facility Gallery**:
  - High-resolution club photo gallery loaded asynchronously with a modern `@uiball/loaders` waveform spinner.

- **📬 Comprehensive Contact Hub (Primary & Alternative Details)**:
  - **Quick Action Badges**: Instant links for Email, WhatsApp, Direct Call, and Messenger.
  - **4-Card Contact Grid**: Clearly separates **Primary** and **Alternative** communication options for maximum accessibility.
  - **Interactive Message Form**: Inquiry form with real-time feedback for prospective members to submit fitness goals and schedule consultations.

- **🦶 Branded Footer**:
  - Quick links, program links, social media handles, full primary/alternative contact summary, and copyright note.

---

## 🎨 Branding & Design System

- **Brand Name**: **Thunder Athletics**
- **Brand Identity**: High-performance, bold, motivational, and community-driven.
- **Color Palette**:
  - **Primary Blue**: `hsl(210, 100%, 50%)`
  - **Primary Variant**: `hsl(210, 100%, 65%)`
  - **Thunder Gold / Accent**: `#ffb116`
  - **Deep Slate Background**: `hsl(240, 48%, 15%)`
  - **Card Surface**: `hsl(240, 44%, 25%)`
  - **Text Contrast**: Light gray (`hsl(240, 47%, 94%)`) and silver (`hsl(240, 26%, 75%)`)
- **Typography**: Google Fonts — `'Montserrat', sans-serif` paired with energetic heading weights.

---

## 📞 Official Contact & Alternative Channels

Thunder Athletics provides primary and alternative communication channels to ensure members and visitors can always reach support:

| Channel | Primary Detail | Alternative / Support Detail |
| :--- | :--- | :--- |
| **Email** | [contact@thunderathletics.com](mailto:contact@thunderathletics.com) | [support@thunderathletics.com](mailto:support@thunderathletics.com) |
| **Telephone** | [+1 (800) 848-6337](tel:+18008486337) *(Toll-Free)* | [+1 (555) 848-6337](tel:+15558486337) |
| **WhatsApp** | [Chat via WhatsApp (+1 555-848-6337)](https://wa.me/15558486337) | Direct trainer chat on Trainers page |
| **Messenger** | [m.me/ThunderAthletics](https://m.me/ThunderAthletics) | Social direct messages on Facebook / Instagram |
| **Headquarters** | 742 Thunderbolt Blvd, Suite 100, New York, NY 10001 | — |
| **Downtown Annex** | — | 120 Velocity Way, West Wing, New York, NY 10012 |
| **Training Hours** | Mon – Fri: 5:00 AM – 11:00 PM | Sat – Sun: 7:00 AM – 9:00 PM |

---

## 📁 Project Architecture

```plaintext
Thunder-Athletics/
├── index.html                 # Main HTML entry with Thunder Athletics metadata & SEO
├── index.jsx                  # React DOM rendering root
├── index.css                  # Global design tokens, CSS reset, and utility classes
├── App.jsx                    # Root component with BrowserRouter and route switch
├── data.jsx                   # Central data store (links, programs, plans, values, trainers, FAQs)
├── package.json               # Project manifest, dependencies, and scripts
├── README.md                  # Comprehensive project documentation
├── images/                    # Asset library (trainers, gallery, banners, textures)
└── src/
    ├── components/            # Reusable core components
    │   ├── Navbar.jsx         # Header navigation bar with Thunder Athletics branding
    │   ├── navbar.css         # Navigation styling and responsive mobile drawer
    │   ├── MainHeader.jsx     # Home page hero banner
    │   ├── Header.jsx         # Reusable interior page banner header
    │   ├── Programs.jsx       # Athletic training programs section
    │   ├── Values.jsx         # Core gym values and diamond features
    │   ├── FAQs.jsx           # FAQ container component
    │   ├── FAQ.jsx            # Individual interactive toggle FAQ item
    │   ├── Testimonials.jsx   # Member testimonial review card slider
    │   ├── Footer.jsx         # Branded footer with contacts, links, and copyright
    │   ├── ScrollToTop.jsx    # Automatically scrolls viewport to top on route change
    │   └── Section.jsx        # Standardized section heading component
    ├── pages/                 # Route view pages
    │   ├── home/              # Home landing page (home.jsx, home.css)
    │   ├── about/             # About Us: Our Story, Vision & Mission (about.jsx, about.css)
    │   ├── plans/             # Membership packages & pricing (plans.jsx, plans.css)
    │   ├── trainers/          # Trainer showcase with WhatsApp links (Trainers.jsx, trainers.css)
    │   ├── gallary/           # Dynamic photo gallery with loader (gallary.jsx, gallary.css)
    │   ├── contact/           # Contact hub with primary & alt info + form (contact.jsx, contact.css)
    │   └── notFount/          # 404 error page (notFound.jsx, notFound.css)
    └── UI/
        └── card.jsx           # Reusable styled Card wrapper component
```

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool & Dev Server**: [Vite 4](https://vitejs.dev/) with `@vitejs/plugin-react-swc`
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, Material Design, Bootstrap Icons, Ionicons, Simple Icons)
- **Loaders**: [@uiball/loaders](https://uiball.com/loaders/) for fluid asynchronous component loading
- **Styling**: Vanilla CSS3 using custom CSS variables, Flexbox, and CSS Grid

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 16 or newer recommended) and `npm` installed on your machine.

```bash
node -v
npm -v
```

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd Thunder-Athletics
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

---

## 💻 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode with Hot Module Replacement (HMR).  
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### `npm run build`
Compiles and bundles the application for production to the `dist/` folder with optimized and minified assets.

### `npm run preview`
Locally previews the production build created by `npm run build`.

### `npm run lint`
Runs ESLint across `.js` and `.jsx` files to ensure code quality and identify syntax errors.

---

## 🌐 Pages & Routes

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Landing page with Hero, Programs, Values, FAQs, and Member Testimonials |
| `/about` | **About** | Story, Vision, and Mission of Thunder Athletics |
| `/plans` | **Plans** | Membership packages (Silver, Gold, Platinum) and feature lists |
| `/trainers`| **Trainers**| Expert trainers roster with direct WhatsApp chat links |
| `/gallery` | **Gallery** | Dynamic asynchronous image showcase of gym facilities |
| `/contact` | **Contact** | Hub featuring primary & alternative contact details and message form |
| `*` | **404** | Not Found fallback page with return-home navigation |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

&copy; 2026 **Thunder Athletics**. All rights reserved.
