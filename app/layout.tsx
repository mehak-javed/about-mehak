import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mehak Javed — Front-End Developer",
  description:
    "Front-End Developer specialising in React, Next.js and TypeScript. 2+ years building responsive, accessible, high-performance web apps. Open to relocating to Glasgow, UK.",
  keywords: [
    "Mehak Javed",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Glasgow",
    "Web Developer",
  ],
  authors: [{ name: "Mehak Javed" }],
  openGraph: {
    title: "Mehak Javed — Front-End Developer",
    description:
      "React · Next.js · TypeScript. Building accessible, high-performance web experiences. Open to relocating to Glasgow, UK.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
