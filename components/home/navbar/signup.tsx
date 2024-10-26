import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import styles from "./navbar.module.css"



export function Signup() {

   //code this to get authentiucation flag
  let status  = "unauthenticated";
 
  return (
    <>
     {status === "unauthenticated" && (
        <div className={styles.signup}>
          
            <Link
              href="/login"
              //target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "ghost", size:"sm" })}
            >
                Login
            </Link>
            <Link
              href="/signup"
             // target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "default", size:"sm" })}
            >
             
                Sign up
              
            </Link>
            </div>
            )}
           
         {status === "authenticated" && (
            <div className={styles.signup}>
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "default", size:"sm" })}
            >
             
                Log out
              
            </Link>
            </div>
         )}
          
   
     </>
    
  )
}
