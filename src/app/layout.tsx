import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GlobalHeader } from "@/components/GlobalHeader";
import Script from "next/script";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wedodare.com"),
  title: "WeDoDare",
  description: "WeDoDare - Dare to dream, Dare to do.",
  alternates: {
    canonical: "/",
  },
  other: {
    "google-adsense-account": "ca-pub-9849199172217987",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9849199172217987"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <GlobalHeader />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
