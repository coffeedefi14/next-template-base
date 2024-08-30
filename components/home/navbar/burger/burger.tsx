"use client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import styles from "./burger.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

interface MainNavProps {
  items?: NavItem[]
}


export function Burger ({ items }: MainNavProps)  {
  const [open, setOpen] = useState(false);

  //code this to get authentiucation flag
  const status  = "unauthenticated";

  return (
    <>
      
      <div className={`${styles.burger} ${open ? styles.open : ''}`} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
       
      {open && (
        <div className={styles.responsiveMenu}>
        {items?.length ? (
          <>
          {items.map((item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={`${item.disabled ? "cursor-not-allowed opacity-80" : ""} `}

              >
                {item.title}
              </Link>
            )
          )}
       </>
      ) : null}
          {status === "unauthenticated" && (
            <>
          
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline", size:"sm" })}
            >
                Login
            </Link>
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "default", size:"sm" })}
            >
             
                Sign up
              
            </Link>
            </>
          )}
          {status === "authenticated" && (
            <>
          
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "default", size:"sm" })}
            >
             
               Log out
              
            </Link>
            </>
          )}
         </div>
      )}
       
    </>
  )
}


