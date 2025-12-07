import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import ThemeInit from "@/components/utils/ThemeInit";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iihn.fun"),
  title: {
    default: "iihn | Ihsan Restu Adi",
    template: "%s | Ihsan Restu Adi"
  },
  description:
    "Portfolio Ihsan Restu Adi - Cyber Security Enthusiast, Ethical Hacker, Bug Bounty Hunter, Developer. Sharing knowledge and building secure systems.",
  keywords: [
    "Ihsan Restu Adi",
    "Cyber Security",
    "Ethical Hacker",
    "Bug Bounty",
    "Portfolio",
    "Developer"
  ],
  authors: [{ name: "Ihsan Restu Adi" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "iihn | Ihsan Restu Adi",
    description:
      "Portfolio and personal website of Ihsan Restu Adi, Ethical Hacker & Cyber Security Enthusiast.",
    url: "https://www.iihn.fun",
    siteName: "iihn",
    images: [
      {
        url: "https://www.iihn.fun/opengraph-image.png",
        width: 1200,
        height: 630
      }
    ],
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://www.iihn.fun"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ihsan Restu Adi — Ethical Hacker",
    description: "Cyber Security Enthusiast and Bug Bounty Hunter",
    images: "https://www.iihn.fun/opengraph-image.png",
  },
  verification: {
    google: "UPKAQQYkH1hUNYYGd4YFZZtGdEMAcvbLp1lRCa_htqQ",
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ihsan Restu Adi",
              alternateName: "Ihsan",
              description:
                "Cyber Security Enthusiast, Ethical Hacker, Bug Bounty Hunter, and Developer",
              url: "https://www.iihn.fun",
              image: "https://www.iihn.fun/opengraph-image.png",
              sameAs: [
                "https://github.com/ihsanlearn",
                "https://www.linkedin.com/in/ihsan-restu-adi/",
                "https://x.com/Ihsan0958761111",
              ],
              jobTitle: "Ethical Hacker",
              worksFor: {
                "@type": "Organization",
                name: "Independent Researcher"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text dark:bg-background dark:text-text transition-colors flex justify-center`}
      >
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
