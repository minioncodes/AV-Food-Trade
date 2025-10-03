import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },   
          {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
          {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
