
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/home/navbar/main-nav"
import { Logo } from "@/components/home/navbar/logo"
import { Signup } from "@/components/home/navbar/signup"
import   { Burger }  from "@/components/home/navbar/burger/burger"

import styles from "./navbar.module.css"


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
      <div className={styles.container}>
        <Logo />
        <MainNav items={mainNav} />
        <Signup/>
        <Burger items={mainNav}/>
       
      </div>
    </header>
  )
}
