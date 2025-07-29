import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Sketch2Code - Website Building Service",
  description:
    "Modern, responsive website building service. Sketch it. Code it. Launch it — with us.",
  keywords: [
    "website builder",
    "Next.js",
    "Tailwind CSS",
    "GSAP",
    "UI design",
    "landing pages",
    "business websites",
    "responsive web design",
  ],
  openGraph: {
    title: "Sketch2Code - Website Building Service",
    description:
      "Modern, responsive website building service. Sketch it. Code it. Launch it — with us.",
    url: "https://yourdomain.com",
    siteName: "Sketch2Code",
    images: [],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins bg-black text-white min-h-screen">
        <main className="relative overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
