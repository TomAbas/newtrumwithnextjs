/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "pagesmanagementapi.com",
      "s3-alpha-sig.figma.com",
      "firebasestorage.googleapis.com",
      "picsum.photos",
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
