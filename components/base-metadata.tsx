import { Metadata } from 'next'; // Ensure the correct import path
import { siteConfig } from "@/config/site";

//console.log('in base metadata', siteConfig.links.home);
export const basemetadata: Metadata = {
  metadataBase: new URL(`${siteConfig.links.home}`),
  alternates: {
    canonical: '/',
  },
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,

    // Icons
    icons: {
        icon: "/favicon.ico",
    },

    // Robots directives
    robots: 'index, follow',

    // Open Graph (OG) meta tags
    openGraph: {
        type: 'website',
        title: {
            default: siteConfig.name,
            template: `%s - ${siteConfig.name}`,
        },
        description: siteConfig.description,
        images: [
            {
            url: "/twitter.jpg", // Provide a default OG image URL
                alt: siteConfig.name, // Alt text for the image
            },
        ],
        url: siteConfig.links.home, // Default URL
        siteName: siteConfig.name,
    },

    // Twitter Card meta tags
    twitter: {
        card: 'summary_large_image', // Use 'summary_large_image' for richer card formats
        title: {
            default: siteConfig.name,
            template: `%s - ${siteConfig.name}`,
        },
        description: siteConfig.description,
        images: "/twitter.jpg", // Provide a default Twitter image URL
      site: '@wishh_in', // Your Twitter handle
    },

   
};
