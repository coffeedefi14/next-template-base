
import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
export function Last() {

 

    return (
        <>
        <section className="t-17.5 lg:pt-22.5 xl:pt-32.5 scroll-mt-17 mb-8 overflow-hidden">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
            <div className="cta-box-gradient rounded-[30px] relative overflow-hidden px-4 py-10 lg:py-25 z-999">
           
              <span className="absolute bottom-0 left-0 -z-10">
                <Image src="/images/last/grid.svg" height={100} width={700} alt="grid" style={{ color: `var(--foreground)` }} /></span>
              <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-10">
                  <Image src="/images/last/blur-22.svg" height={400} width={900} alt="blur" className="max-w-none"/>
                </span>
                <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-10">
                  <Image src="/images/last/blur-23.svg" height={200} width={600} alt="blur" className="max-w-none"/>
                </span>
                <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -z-10">
                  <Image src="/images/last/blur-24.svg" height={100} width={600} alt="blur" className="max-w-none"/>
                </span>
              </div>

             
              <div className="max-w-[482px] w-full h-60 overflow-hidden absolute -z-10 -bottom-25 left-1/2 -translate-x-1/2">
                <div className="stars"></div>
                <div className="stars2"></div>
              </div>

              <div className="text-center">
                <span
                  className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-8 rounded-full">
                  <Image src="/images/hero/icon-title.svg" height={20} width={20} alt="icon"/>

                  <span className="text-muted-foreground">
                      Try our tool for Free
                    </span>
                </span>
                <h2 className="text-foreground mb-5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
                  What are you waiting for?
                </h2>
                <p className="max-w-[714px] mx-auto font-medium mb-9">
                  Our AI writing tool is designed to empower you with exceptional
                  writing capabilities, making the writing process more efficient,
                  accurate, and enjoyable.
                </p>
                <Link
                  href="#"
                  className={buttonVariants({ variant: "default", size: "lg" })}>
                  Get Started for Free
                    
                  <svg className="-mr-1 ml-2 size-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </Link>
                
              </div>
            </div>
          </div>
        </section>
    

        
            </>
            )
            }
