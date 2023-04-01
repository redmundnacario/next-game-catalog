/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    RAWG_KEY: process.env.RAWG_KEY,
  },
};

module.exports = nextConfig;
