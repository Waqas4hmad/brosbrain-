/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '' // Keep empty for custom domain brosbrain.co.uk
};
module.exports = nextConfig;