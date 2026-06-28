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
        destination: "https://billing-page-capture-to-question.vercel.app/capture-billing",
      },
      {
        source: "/capture-billing/:path*",
        destination: "https://billing-page-capture-to-question.vercel.app/capture-billing/:path*",
      },
      {
        source: "/G2Thumbnail",
        destination: "https://g2thumbnail.vercel.app/G2Thumbnail",
      },
      {
        source: "/G2Thumbnail/:path*",
        destination: "https://g2thumbnail.vercel.app/G2Thumbnail/:path*",
      },
    ];
  },
};

export default nextConfig;
