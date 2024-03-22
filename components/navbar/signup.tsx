import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"



export function Signup() {

 
  return (
  
        <div className="flex gap-4">
          
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
         
          
        </div>
     
    
  )
}
