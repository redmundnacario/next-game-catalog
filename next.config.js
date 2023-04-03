/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    RAWG_KEY: process.env.RAWG_KEY,
  },
  images: { domains: ['media.rawg.io'], formats: ['image/avif', 'image/webp'] },
};

module.exports = nextConfig;
