import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://blog-wedodare.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://blog-wedodare.vercel.app/blog/:path*",
      },
      {
        source: "/capture-billing",
        destination: "https://billing-capturetoquestion.wedodare.com/capture-billing",
      },
      {
        source: "/capture-billing/:path*",
        destination: "https://billing-capturetoquestion.wedodare.com/capture-billing/:path*",
      },
    ];
  },
};

export default nextConfig;
