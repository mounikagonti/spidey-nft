/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "i.seadn.io",
      "images.pexels.com",
      "encrypted-tbn0.gstatic.com",
      "opensea.io",
      "static.opensea.io",
      "lh3.googleusercontent.com",
      "play-lh.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
