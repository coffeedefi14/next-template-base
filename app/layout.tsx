import "@/styles/globals.css"
import '@/styles/style.css';
import '@/styles/star.css';

import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { AppContextProvider } from '@/components/providers/AppContext'; // Import the context

import { ThemeProvider } from "@/components/providers/theme-provider"
import type { Viewport } from 'next'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  
  icons: {
    icon: "/favicon.ico",
    
  },
}
//to avoid default caching of fetch api in nextjs server
export const fetchCache = 'default-no-store';

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
       
        <body
          className={cn(fontSans.variable)}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AppContextProvider>
         


             
              
              {children}
             
       
         
              </AppContextProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
