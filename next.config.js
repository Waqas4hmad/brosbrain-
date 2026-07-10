/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname, // Force root to your project folder
  },
  outputFileTracingRoot: __dirname, // Fix tracing too
};

module.exports = nextConfig;