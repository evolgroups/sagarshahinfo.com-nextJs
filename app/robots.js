/**
 * Robots.txt configuration for SEO
 */
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://sagarshahinfo.com/sitemap.xml',
  };
}
