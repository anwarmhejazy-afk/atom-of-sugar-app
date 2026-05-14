import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atom-of-sugar-app.vercel.app"),
  title: "Atom of Sugar | ذرة سكر",
  description:
    "حلويات عربية منزلية فاخرة في دبي | Luxury homemade Arabic sweets in Dubai",
  applicationName: "Atom of Sugar",
  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Atom of Sugar",
  },

  openGraph: {
    title: "Atom of Sugar | ذرة سكر",
    description: "حلويات عربية منزلية فاخرة في دبي",
    url: "https://atom-of-sugar-app.vercel.app",
    siteName: "Atom of Sugar",
    images: [
      {
        url: "/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Atom of Sugar",
      },
    ],
    locale: "ar_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Atom of Sugar | ذرة سكر",
    description: "حلويات عربية منزلية فاخرة في دبي",
    images: ["/social-preview.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e9e5e1",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}