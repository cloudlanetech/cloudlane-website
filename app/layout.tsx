import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CloudLane - Innovating Tomorrow, Building Today",
  description:
    "Empowering businesses with cloud technology solutions from custom software to AI-Driven platforms. We engineer your digital success.",
  keywords: [
    "cloud solutions",
    "IT consulting",
    "AWS",
    "AI automation",
    "web applications",
    "mobile applications",
    "CloudLane",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
