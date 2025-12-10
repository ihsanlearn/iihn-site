import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Script from "next/script";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
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
        url: "https://www.iihn.fun/opengraph-image.jpg",
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
    images: "https://www.iihn.fun/opengraph-image.jpg",
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
       <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.iihn.fun/#about",
                  "name": "Ihsan Restu Adi",
                  "alternateName": "Ihsan",
                  "description": "Cyber Security Enthusiast, Ethical Hacker, Bug Bounty Hunter, Undergraduate Computer Science Student, and Developer.",
                  "url": "https://www.iihn.fun",
                  "image": "https://www.iihn.fun/opengraph-image.jpg",
                  "sameAs": [
                    "https://github.com/ihsanlearn",
                    "https://www.linkedin.com/in/ihsan-restu-adi/",
                    "https://x.com/Ihsan0958761111"
                  ],
                  "jobTitle": "Cyber Security Enthusiast",
                  "affiliation": {
                    "@type": "CollegeOrUniversity",
                    "name": "Universitas Sebelas Maret",
                    "description": "Undergraduate Informatics Student"
                  },
                  "knowsAbout": [
                    "Web Application Penetration Testing",
                    "Vulnerability Assessment",
                    "Exploit Research",
                    "Bug Bounty Hunting",
                    "Next.js",
                    "TypeScript",
                    "Python",
                    "Go (Golang)",
                    "Docker",
                    "Linux System Administration",
                    "Burp Suite"
                  ]
                },

                {
                  "@type": "Organization",
                  "@id": "https://www.iihn.fun/#hero",
                  "name": "iihn",
                  "url": "https://www.iihn.fun",
                  "logo": "https://www.iihn.fun/opengraph-image.jpg",
                  "founder": { "@id": "https://www.iihn.fun/#about" },
                  "foundingDate": "2024",
                  "description": "Personal portfolio and cyber security research platform.",
                  "sameAs": [
                    "https://github.com/ihsanlearn",
                    "https://x.com/Ihsan0958761111"
                  ]
                },

                {
                  "@type": "WebSite",
                  "@id": "https://www.iihn.fun/#hero",
                  "url": "https://www.iihn.fun",
                  "name": "iihn | Ihsan Restu Adi",
                  "description":
                    "Portfolio and research website of Ihsan Restu Adi, Cyber Security Enthusiast and Developer.",
                  "publisher": {
                    "@id": "https://www.iihn.fun/#hero"
                  },
                  "inLanguage": "en-US"
                },

                {
                  "@type": "WebPage",
                  "@id": "https://www.iihn.fun/#hero",
                  "url": "https://www.iihn.fun",
                  "name": "iihn | Ihsan Restu Adi",
                  "description":
                    "Personal website and portfolio of Ihsan Restu Adi, Ethical Hacking and Cyber Security Enthusiast.",
                  "isPartOf": {
                    "@id": "https://www.iihn.fun/#hero"
                  },
                  "about": {
                    "@id": "https://www.iihn.fun/#about"
                  },
                  "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.iihn.fun"
                      }
                    ]
                  },
                  "inLanguage": "en-US"
                },

                {
                  "@type": "Blog",
                  "@id": "https://www.iihn.fun/#writing",
                  "url": "https://www.iihn.fun/#writing",
                  "name": "Ihsan's Security Research & Writings",
                  "description":
                    "Collection of thoughts and writings related to cyber security research, digital safety, engineering, and personal studies.",
                  "publisher": { "@id": "https://www.iihn.fun/#hero" },
                  "author": { "@id": "https://www.iihn.fun/#about" },
                  "blogPost": [
                    {
                      "@type": "BlogPosting",
                      "headline": "Building My Own Recon Automation Lab",
                      "datePublished": "2025-12-02",
                      "description":
                        "A personal journey documenting how I built my private lab for ethical hacking.",
                      "author": { "@id": "https://www.iihn.fun/#about" },
                      "mainEntityOfPage": "https://www.iihn.fun/#writing"
                    },
                    {
                      "@type": "BlogPosting",
                      "headline":
                        "Why Strong Fundamentals Matter More Than Tools in Cybersecurity",
                      "datePublished": "2025-11-18",
                      "description":
                        "Reflecting on the importance of networking, Linux fundamentals, and protocol understanding.",
                      "author": { "@id": "https://www.iihn.fun/#about" },
                      "mainEntityOfPage": "https://www.iihn.fun/#writing"
                    },
                    {
                      "@type": "BlogPosting",
                      "headline":
                        "Experimenting with Custom Burp Extensions using Python",
                      "datePublished": "2025-10-22",
                      "description":
                        "Documenting early experiments scripting Burp Suite extensions using Python.",
                      "author": { "@id": "https://www.iihn.fun/#about" },
                      "mainEntityOfPage": "https://www.iihn.fun/#writing"
                    }
                  ]
                },

                {
                  "@type": "ItemList",
                  "@id": "https://www.iihn.fun/#case-studies",
                  "name": "Security Case Studies",
                  "description":
                    "Deep dives into security challenges, architectural decisions, and outcomes.",
                  "itemListElement": [
                    {
                      "@type": "CreativeWork",
                      "position": 1,
                      "name": "Internal Penetration Testing Lab Development",
                      "description":
                        "Configured a multi-VM lab environment using Kali Linux and intentionally vulnerable applications."
                    },
                    {
                      "@type": "CreativeWork",
                      "position": 2,
                      "name": "Automated Recon & Enumeration Workflow",
                      "description":
                        "Built a modular CLI tool to automate subdomain discovery and HTTP probing."
                    },
                    {
                      "@type": "CreativeWork",
                      "position": 3,
                      "name": "Secure Authentication & Role-Based Access Web App",
                      "description":
                        "Developed a multi-role system with secure authentication and database RLS policies."
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased bg-background text-foreground font-body`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
