/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Critical: generates static files
  trailingSlash: true, // Fixes path/case issues
  images: { unoptimized: true } // Required for static export
};

module.exports = nextConfig;