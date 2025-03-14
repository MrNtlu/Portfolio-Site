/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn-images-1.medium.com',
      'miro.medium.com',
      'images.unsplash.com',
    ],
  },
}

module.exports = nextConfig
