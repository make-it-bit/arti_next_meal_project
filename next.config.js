/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.buttercms.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
