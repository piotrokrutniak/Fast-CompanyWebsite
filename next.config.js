/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      loader: "akamai",
      path: "/",
    },
  };

module.exports = {
  images: {
    domains: ['localhost', 'media.graphassets.com']
  }
}