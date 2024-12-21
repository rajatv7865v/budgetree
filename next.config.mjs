/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable ESLint during builds to prevent linting errors from blocking production
    eslint: {
      ignoreDuringBuilds: true,  // This will allow the build to proceed even with ESLint issues
    },
  
    // Optional: If you're using the image optimization plugin and want to disable img warnings,
    // you can also configure Next.js to disable the `<img>` tag warning.
    images: {
      // Add any image domains if you're using external image URLs
      domains: ['example.com'],
    },
  
    // Disable React Strict Mode in production (optional, only if necessary)
    reactStrictMode: process.env.NODE_ENV !== 'production',  // This ensures Strict Mode is enabled in development, but off in production.
  
    // You can also enable other Next.js production optimizations if needed
    webpack(config, { isServer }) {
      if (isServer) {
        // If you want to suppress some warnings related to specific packages, you can modify Webpack settings here
      }
      return config;
    },
  };
  
  module.exports = nextConfig;
  