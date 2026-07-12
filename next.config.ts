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
        source: "/product/capture-billing",
        destination: "https://billing-page-capture-to-question.vercel.app/product/capture-billing",
      },
      {
        source: "/product/capture-billing/:path*",
        destination: "https://billing-page-capture-to-question.vercel.app/product/capture-billing/:path*",
      },
      {
        source: "/function/G2Thumbnail",
        destination: "https://g2thumbnail.vercel.app/function/G2Thumbnail",
      },
      {
        source: "/function/G2Thumbnail/:path*",
        destination: "https://g2thumbnail.vercel.app/function/G2Thumbnail/:path*",
      },
      {
        source: "/function/ImageRandomPresentation",
        destination: "https://imagerandompresentation.vercel.app/function/ImageRandomPresentation",
      },
      {
        source: "/function/ImageRandomPresentation/:path*",
        destination: "https://imagerandompresentation.vercel.app/function/ImageRandomPresentation/:path*",
      },
      {
        source: "/function/PromptArchive",
        destination: "https://promptarchive-wedodare.vercel.app/function/PromptArchive",
      },
      {
        source: "/function/PromptArchive/:path*",
        destination: "https://promptarchive-wedodare.vercel.app/function/PromptArchive/:path*",
      },
      {
        source: "/feed/OpinionOnAP",
        destination: "https://opinion-on-ap.vercel.app/feed/OpinionOnAP",
      },
      {
        source: "/feed/OpinionOnAP/:path*",
        destination: "https://opinion-on-ap.vercel.app/feed/OpinionOnAP/:path*",
      },
    ];
  },
};

export default nextConfig;
