import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import ThemeInit from "@/components/utils/ThemeInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iihn",
  description: "Portfolio Ihsan Restu Adi - Cyber Security Enthusiast, Ethical Hacker, and Developer",
  keywords: ["Ihsan Restu Adi", "Cyber Security", "Ethical Hacker", "Portfolio", "Bug Bounty Hunter"],
  authors: [{ name: "Ihsan Restu Adi" }],
  openGraph: {
    title: "Ihsan Restu Adi",
    url: "https://iihn.fun",
    siteName: "Ihsan Restu Adi",
    images: "/og-image.png",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text dark:bg-background dark:text-text transition-colors flex justify-center`}
      >
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
