import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Young Leaders Career Discovery",
  description: "Where students explore careers, leadership, and their real potential.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png" }, // optional backup if you add this later
    ],
  },
  openGraph: {
    title: "Young Leaders Career Discovery",
    description: "Where students explore careers, leadership, and their real potential.",
    url: "https://youngleaderscareerdiscovery.com",
    siteName: "YLCD",
    images: [
      {
        url: "/preview.png",
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
    images: ["/preview.png"],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
