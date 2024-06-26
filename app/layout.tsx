import "@/styles/globals.css"
import '@/styles/style.css';
import '@/styles/star.css';

import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/navbar/site-header"
import { SiteFooter } from "@/components/site-footer"
import ContextProvider  from "@/components/context-provider"
import { ThemeProvider } from "@/components/theme-provider"
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
            <ContextProvider>
            <div className="bodyContainer">
              <SiteHeader />

              <div className="wrapper">
              
              {children}
              </div>
              <SiteFooter/>
            </div>
            </ContextProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
