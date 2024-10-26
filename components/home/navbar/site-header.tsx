"use client";
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "./main-nav"
import { Logo } from "./logo"
import { Signup } from "./signup"
import   { Burger }  from "./burger/burger"
import { ThemeToggle } from "@/components/theme-toggle";
import { NavItem } from '@/components/home/types/nav';
import { usePathname } from 'next/navigation';
import styles from "./navbar.module.css"


export function SiteHeader() {

  const pathname = usePathname();
  //console.log(pathname)
  const mainNav: NavItem[] = [
    {
      title: 'Home',
      href: "/",
      show:true,
    },
    {
      title: 'Features',
      href: "#features",
       show:pathname === "/",
    },
    {
      title: 'Pricing',
      href: "#pricing",
       show:pathname === "/",

    },
    
    {
      title: 'Blog',
      href: siteConfig.links.blog ,
      external:true,
       show:true,
    },
    {
      title: 'About',
      href: "/about",
      external:true,
       show:pathname !== "/about",
    },

  ];


  return (
    <header className="sticky top-0 w-full bg-background-1 drop-shadow-4 z-9999">
      <div className={styles.container}>
        <Logo />
        <MainNav items={mainNav} />
        <div className="flex flex-row items-center gap-4">
        {/*<ThemeToggle />*/}
        <Signup/>
        <Burger items={mainNav}/>
       </div>
      </div>
    </header>
  )
}
