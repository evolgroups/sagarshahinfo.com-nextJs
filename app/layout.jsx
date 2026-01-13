import './globals.css';
import { SITE_CONFIG } from '@/lib/constants';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';

/**
 * Root layout component - Replaces Django base.html
 * Provides consistent header, footer, and metadata across all pages
 */

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Sagar Shah',
    'Evol Group',
    'Business Consultant',
    'Serial Entrepreneur',
    'Immigration Services',
    'IT Services',
    'CRM Solutions',
    'Blockchain',
    'Australia',
    'India',
    'UAE',
    'Global Business Leader',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Logo`,
      },
    ],
  },
  
  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    site: SITE_CONFIG.twitter,
    creator: SITE_CONFIG.twitter,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: '/images/Logo_SS-14.png',
    shortcut: '/images/Logo_SS-14.png',
    apple: '/images/Logo_SS-14.png',
  },
  
  // Verification (TODO: Add actual verification codes)
  verification: {
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

// Viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#6366f1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://drive.google.com" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sagar Shah',
              jobTitle: 'Serial Entrepreneur & Business Strategist',
              description: 'Director of Evol Group - A multinational business conglomerate with interests in IT, Immigration, Finance, and CRM Solutions.',
              url: SITE_CONFIG.url,
              image: `${SITE_CONFIG.url}/images/main-photo.webp`,
              email: SITE_CONFIG.email,
              sameAs: [
                'https://twitter.com/sagarshah07',
                'https://www.facebook.com/sagarshah1979',
                'https://au.linkedin.com/in/sagar-shah-082b74b8',
                'https://www.instagram.com/sagar0703/',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Evol Group',
                url: 'https://sagarshahinfo.com',
              },
              knowsAbout: [
                'Business Strategy',
                'Immigration Consulting',
                'Information Technology',
                'Blockchain',
                'CRM Solutions',
                'Investment',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        
        {/* Back to top button */}
        <BackToTop />
      </body>
    </html>
  );
}

