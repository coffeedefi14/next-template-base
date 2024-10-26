import * as React from "react";
import Link from "next/link";
import { NavItem } from "@/components/home/types/nav";
import styles from "./navbar.module.css";

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    
    
    <div>
       
     {items?.length ? (
        <nav className={styles.links}>
          {items.map((item, index) =>
            item.href && item.show && (
              <Link
                key={index}
                href={item.href}
                className={`${item.disabled ? "cursor-not-allowed opacity-80" : ""} `}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.title}
              </Link>
            )
          )}
        </nav>
      ) : null}
    </div>
  
  )
}
