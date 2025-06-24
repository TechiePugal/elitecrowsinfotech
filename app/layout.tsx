import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EliteCrows Infotech | Edge Computing | AI | Cloud Solutions | Custom Software India",
  description:
    "EliteCrows Infotech delivers cutting-edge Edge Computing, AI automation, Cloud solutions, and custom enterprise software for startups and enterprises. Transform your business with innovative technology solutions.",
  keywords: [
    "edge computing for startups",
    "AI business automation",
    "cloud migration India",
    "custom software development",
    "predictive analytics",
    "IoT edge AI",
    "cloud cost optimization",
    "enterprise app development",
    "machine learning solutions",
    "digital transformation",
    "technology consulting",
    "scalable cloud architecture",
  ].join(", "),
  authors: [{ name: "EliteCrows Infotech", url: "https://www.elitecrows.com" }],
  creator: "EliteCrows Infotech",
  publisher: "EliteCrows Infotech",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.elitecrows.com",
    title: "EliteCrows Infotech | Next-Gen Technology Solutions",
    description:
      "Innovative Edge Computing, AI, Cloud, and Custom Software solutions for ambitious businesses. Transform your digital future with cutting-edge technology.",
    siteName: "EliteCrows Infotech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EliteCrows Infotech - Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EliteCrows Infotech | Technology Solutions",
    description: "Edge Computing, AI, Cloud & Custom Software solutions for startups and enterprises.",
    images: ["/twitter-image.jpg"],
    creator: "@elitecrows",
  },
  alternates: {
    canonical: "https://www.elitecrows.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href="https://www.elitecrows.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EliteCrows Infotech",
              url: "https://www.elitecrows.com",
              logo: "https://www.elitecrows.com/logo.png",
              description:
                "EliteCrows Infotech delivers cutting-edge technology solutions including Edge Computing, AI, Cloud, and Custom Software development.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "100, Aththipalaya",
                addressLocality: "Coimbatore",
                addressRegion: "Tamil Nadu",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-63831-06107",
                contactType: "customer service",
                email: "elitecrowsindia@gmail.com",
              },
              sameAs: [
                "https://www.linkedin.com/company/elitecrows-infotech",
                "https://twitter.com/elitecrows",
                "https://github.com/elitecrows",
                "https://www.elitecrows.com/about",
                "https://www.elitecrows.com/portfolio",
                "https://www.elitecrows.com/careers",
              ],
              foundingDate: "2020",
              numberOfEmployees: "15",
              serviceArea: {
                "@type": "Place",
                name: "Global",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Technology Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Edge Computing Solutions",
                      description: "Real-time IoT data processing and edge AI solutions",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI & Machine Learning",
                      description: "Business process automation and predictive analytics",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cloud Solutions",
                      description: "Cloud migration, integration, and optimization services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Software Development",
                      description: "Tailored business applications and enterprise software",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}

        {/* Analytics Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              
              ga('create', 'UA-XXXXXXXXX-X', 'auto');
              ga('send', 'pageview');
            `,
          }}
        />
      </body>
    </html>
  )
}
