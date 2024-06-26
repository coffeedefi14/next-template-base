import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui/lucideicons"

import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {

  


  return (
    <footer className="bg-background fixed bottom-0 z-40 w-full">
      <div className="mr-4 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.facebook className="h-5 w-5 fill-current" />
                <span className="sr-only">Facebook</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </footer>
  )
}
