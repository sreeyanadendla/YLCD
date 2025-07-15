import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // ← make sure this is imported
import Image from "next/image"; // ← this too

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "YLCD",
  description: "Where students explore careers, leadership, and their real potential.",
  icons: {
    icon: [
      { url: "/ylcd-logo.png", type: "image/png" }
    ],
    apple: "/ylcd-logo.png",
  },
  
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Young Leaders Career Discovery",
    description: "Where students explore careers, leadership, and their real potential.",
    url: "https://youngleaderscareerdiscovery.com",
    siteName: "YLCD",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "YLCD Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Young Leaders Career Discovery",
    description: "Where students explore careers, leadership, and their real potential.",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
