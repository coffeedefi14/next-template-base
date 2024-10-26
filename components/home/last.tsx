
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { DashboardTwo, } from '@/components/ui/othericons';

export function Last() {

 

    return (
        <>
        <section id="last" className="relative mb-8 overflow-hidden pt-16 lg:pt-25 ">
          <div className="about-divider-gradient absolute left-1/2 top-0 h-px w-full max-w-[770px] -translate-x-1/2">
        </div>

        <div className="mx-auto max-w-screen-xl  ">
            <div className="cta-box-gradient relative overflow-hidden rounded-[30px] px-4 py-10 lg:py-25">
           
              <span className="absolute bottom-0 left-0 -z-10">
                <Image  src="/images/last/grid.svg" height={100} width={700} alt="grid" style={{ color: `var(--foreground)` }} /></span>
              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <span className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
                  <Image src="/images/last/blur-22.svg" height={400} width={1500} alt="blur"  className="max-w-none"/>
                </span>
                <span className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
                  <Image src="/images/last/blur-23.svg" height={200} width={600} alt="blur" className="max-w-none"/>
                </span>
                <span className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
                  <Image src="/images/last/blur-24.svg" height={100} width={600} alt="blur" className="max-w-none"/>
                </span>
              </div>

             
              <div className="absolute -bottom-25 left-1/2 -z-10 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
                <div className="stars"></div>
                <div className="stars2"></div>
              </div>

              <div className="text-center ">
                <span
                  className="hero-subtitle-gradient relative z-9 mb-4 inline-flex items-center gap-2 rounded-full px-8 py-2 text-sm font-medium">
                  <DashboardTwo className="text-foreground" />

                  <span className="text-foreground">
                      Try our tool for Free
                    </span>
                </span>
                <h2 className="xl:text-heading-2 mb-5 text-2xl font-extrabold text-foreground sm:text-4xl">
                  What are you waiting for?
                </h2>
                <p className="mx-auto mb-9 max-w-[714px] font-medium">
                  Build FIRE plans that align with your preferences. <br/>
                  Visualize your future and map out a path towards your desired life.
                </p>
                <Link
                  href="/signup"
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
