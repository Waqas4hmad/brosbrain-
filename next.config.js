/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // basePath: '/YOUR-REPO-NAME' // UNCOMMENT & EDIT if NOT username.github.io
};
module.exports = nextConfig;