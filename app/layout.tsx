import "@/styles/globals.css"
import '@/styles/style.css';
import '@/styles/star.css';

import { Metadata } from "next";

import { siteConfig } from "@/config/site"
import { fontSans,} from "@/lib/fonts/fonts"
import { cn } from "@/lib/utils"
import { AppContextProvider } from '@/components/providers/AppContext'; // Import the context
import { basemetadata } from '@/components/base-metadata';

import { ThemeProvider } from "@/components/providers/theme-provider"

//to avoid default caching of fetch api in nextjs server
export const fetchCache = 'default-no-store';

export const metadata: Metadata = basemetadata;


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
