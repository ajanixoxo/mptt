import type { Metadata } from "next"

// Base metadata configuration
export const siteConfig = {
  name: "Hack-A-Path",
  description:
    "A community platform for tech enthusiasts to connect, learn, and grow together through events and resources.",
  url: "https://www.mypath2tech.ca/", // Replace with your actual domain
  ogImage: "/images/og-image.jpg", // Path to your Open Graph image
  links: {
    twitter: "https://twitter.com/mypath2tech", // Replace with your actual Twitter handle
    github: "https://github.com/mypath2tech", // Replace with your actual GitHub organization
  },
  keywords: [
    "tech community",
    "programming",
    "coding events",
    "tech meetups",
    "developer community",
    "tech workshops",
    "learn to code",
    "tech networking",
    "hackathons",
    "tech community in canada",
    "tech community in ontairo ",
  ],
  authors: [
    {
      name: "Hack-A-Path Team",
      url: "https://www.mypath2tech.ca/",
    },
    {
      name: "Saka Moshood",
      url: "https://www.mypath2tech.ca/",
    },
    {
      name: "Richard Nonso",
      url: "https://www.mypath2tech.ca/",
    },
    {
      name: "Atere Favour",
      url: "https://www.mypath2tech.ca/"
    },
  ],
}

// Default metadata for the site
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: "Hack-A-Path",
  publisher: "Hack-A-Path",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_Uk",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@hackapath", // Replace with your actual Twitter handle
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
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
}

// Helper function to generate metadata for specific pages
export function generateMetadata({
  title,
  description,
  image,
  path = "",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  path?: string
  noIndex?: boolean
}): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    ...defaultMetadata,
    title: title,
    description: description || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title || defaultMetadata.openGraph?.title,
      description: description || defaultMetadata.openGraph?.description,
      url,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title || siteConfig.name,
            },
          ]
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title || defaultMetadata.twitter?.title,
      description: description || defaultMetadata.twitter?.description,
      images: image ? [image] : defaultMetadata.twitter?.images,
    },
    robots: noIndex ? { index: false, follow: false } : defaultMetadata.robots,
    alternates: {
      canonical: url,
    },
  }
}

