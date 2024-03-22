import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/navbar/main-nav"
import { Logo } from "@/components/navbar/logo"
import { Signup } from "@/components/navbar/signup"


export function SiteHeader() {

  const mainNav = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "/",
    },
    {
      title: "Blog",
      href: "/",
    },
  ];


  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Logo />
        <MainNav items={mainNav} />
        <Signup/>
       
      </div>
    </header>
  )
}
