/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure trailing slash behavior is consistent
  trailingSlash: false,
  // Configure Turbopack to use the current directory as root
  experimental: {
    // Remove invalid turbopack configuration
  },
  // Ensure proper asset handling
  assetPrefix: '',
};

module.exports = nextConfig;