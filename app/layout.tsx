import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://golter.sametcc.me"),
  title: {
    default: "Golter - Terminal Based File Converter",
    template: "%s | Golter",
  },
  description:
    "A file converter developed with Go, featuring a modern TUI interface. Batch convert your images, videos, audio, and documents.",
  keywords: [
    "file converter",
    "terminal",
    "TUI",
    "Go",
    "batch conversion",
    "ffmpeg",
    "image converter",
    "video converter",
    "audio converter",
    "open source",
  ],
  authors: [{ name: "sametcn99", url: "https://github.com/sametcn99" }],
  creator: "sametcn99",
  publisher: "sametcn99",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Golter - Terminal Based File Converter",
    description:
      "A file converter developed with Go, featuring a modern TUI interface. Batch convert your images, videos, audio, and documents.",
    url: "https://golter.sametcc.me",
    siteName: "Golter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golter - Terminal Based File Converter",
    description:
      "A file converter developed with Go, featuring a modern TUI interface. Batch convert your images, videos, audio, and documents.",
    creator: "@sametcn99",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.sametcc.me/script.js"
          data-website-id="8bd6302d-0e73-4bcf-a6b5-dec2d6f23ec1"
        ></script>
      </head>
      <body className={`font-sans antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
