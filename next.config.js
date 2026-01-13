/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization for external domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/thumbnail/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.licdn.com',
        pathname: '/**',
      },
    ],
    // Fallback for unoptimized images
    unoptimized: false,
  },
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize for production
  poweredByHeader: false,
  
  // Compress responses
  compress: true,
};

module.exports = nextConfig;
