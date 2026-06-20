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
    ];
  },
};

export default nextConfig;
