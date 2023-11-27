/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "**.staticflickr.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
}

module.exports = nextConfig
