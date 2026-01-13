# Sagar Shah Portfolio - Next.js

A modern, enterprise-grade portfolio website for **Sagar Shah** - Serial Entrepreneur, Global Consultant, and Business Strategist.

## 🚀 Overview

This project is a complete migration from a Django template-based website to a modern Next.js application, featuring:

- **Next.js 14** with App Router
- **React 18** functional components
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **SEO optimized** with Next.js Metadata API

## 📁 Project Structure

```
nextjs-portfolio/
├── app/                          # Next.js App Router
│   ├── layout.jsx               # Root layout (replaces base.html)
│   ├── page.jsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── achievements/            # Certifications page
│   │   └── page.jsx
│   └── corporate-highlights/    # Corporate gallery page
│       └── page.jsx
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── home/                    # Homepage sections
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── WorkWithMeSection.jsx
│   │   ├── VisionSection.jsx
│   │   ├── SocialMediaSection.jsx
│   │   ├── StartupInvestmentsSection.jsx
│   │   ├── CoreValuesSection.jsx
│   │   ├── GroupCompaniesSection.jsx
│   │   ├── TrustedBySection.jsx
│   │   ├── LocationsSection.jsx
│   │   └── ContactSection.jsx
│   ├── achievements/            # Achievements page components
│   │   ├── CertificationsGallery.jsx
│   │   └── LinkedInCard.jsx
│   ├── corporate/               # Corporate page components
│   │   └── CorporateGallery.jsx
│   └── ui/                      # Reusable UI components
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── SectionHeading.jsx
│       ├── IconBox.jsx
│       └── AnimatedSection.jsx
├── lib/                         # Utilities and constants
│   ├── constants.js             # Site data and content
│   └── utils.js                 # Helper functions
├── public/                      # Static assets
│   └── images/                  # Images from Django static folder
└── Configuration files
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   cd nextjs-portfolio
   npm install
   ```

2. **Copy static assets:**
   Copy the contents of the Django `static/img/` folder to `public/images/`

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 📋 Migration Notes

### Django to Next.js Mapping

| Django                          | Next.js                          |
|---------------------------------|----------------------------------|
| `{% extends "base.html" %}`     | `app/layout.jsx`                |
| `{% block content %}`           | `{children}` prop               |
| `{% include "partial.html" %}`  | React components                |
| `{{ variable }}`                | Props or constants              |
| `{% static 'path' %}`           | `/images/path` or next/image    |
| `{% url 'name' %}`              | Next.js `Link` component        |

### Content Preserved

All original content from the Django site has been preserved:
- Hero section with introduction
- Services/Expertises section
- About me section
- Experience/Companies section
- Social media presence
- Startup investments
- Group of companies
- Locations
- Contact form
- Certifications gallery
- Corporate highlights gallery

### New Professional Sections Added

- **Vision & Leadership Philosophy** - Leadership principles
- **Core Values & Ethics** - Company values
- **Trusted By Stats** - Credibility metrics

## 🔧 TODO - Backend Integration

The following features require backend API integration:

1. **Contact Form** (`components/home/ContactSection.jsx`)
   - Line 30-35: Implement actual form submission
   - Connect to email service or CRM

2. **Social Media Stats** (`lib/constants.js`)
   - `SOCIAL_MEDIA_STATS`: Connect to real-time follower counts API

3. **Dynamic Content** (Optional)
   - Convert static data to CMS or database-driven content

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:
- `primary`: Brand blue colors
- `neutral`: Gray scale
- Social media colors (twitter, linkedin, etc.)

### Content

Edit `lib/constants.js` to update:
- Site configuration
- Navigation links
- Services
- Companies
- Certifications
- And all other content

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO Features

- Metadata API for all pages
- Open Graph tags
- Twitter cards
- Structured data (JSON-LD)
- Semantic HTML
- Optimized images with next/image

## 📦 Dependencies

- `next`: ^14.2.0
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `framer-motion`: ^11.0.0
- `lucide-react`: ^0.400.0
- `clsx`: ^2.1.0
- `tailwind-merge`: ^2.2.0
- `tailwindcss`: ^3.4.1

## 📄 License

Private - All rights reserved.

---

Built with ❤️ for Sagar Shah | Evol Group
