import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import Image from 'next/image';
import styles from "./navbar.module.css"


export function Logo() {
  return (
   
    <div>
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo-min.svg"
          alt={siteConfig.name}
          width={24}
          height={24}
        />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
    </div>
    
  
  )
}
