/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.refabry.com",
      },
    ],
  },
};

export default nextConfig;
