/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Cloudflare Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize for production
  poweredByHeader: false,
  
  // Compress responses
  compress: true,
  
  // Trailing slash for Cloudflare Pages
  trailingSlash: true,
};

module.exports = nextConfig;
