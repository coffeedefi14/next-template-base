import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import Image from 'next/image';



export function Logo() {
  return (
   
    <div>
      <Link href="/" className="flex items-center space-x-2">
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
