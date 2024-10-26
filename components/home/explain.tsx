"use client"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { AlignCenterHorizontalIcon } from '@/components/ui/othericons';
import { Button } from '@/components/ui/button';
import { useHomeContextData } from '@/components/providers/HomePageContext'; // Import the context
import { useRouter } from 'next/navigation';


export function Explain() {
  const router = useRouter();

  const handleClick = () => {

    router.push('/signup');


  }

    const { switcher } = useHomeContextData();
    return (
        <>
        <section id="explain" className="relative overflow-hidden pt-16 lg:pt-25 ">
          <div className="about-divider-gradient absolute left-1/2 top-0 h-px w-full max-w-[1170px] -translate-x-1/2">
        </div>
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-12 lg:py-16">
            <div className="items-center justify-center text-center">
              <span className="hero-subtitle-gradient  relative mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                <AlignCenterHorizontalIcon className="text-foreground" />
                <span className="text-foreground">
                What does the Tool do!
              </span>
              </span>
            </div>
            <div className="grid gap-7.5 sm:grid-cols-12" data-highlighter>
              
              <div className="sm:col-span-12">
            <div className="border-muted relative mb-6 rounded-3xl border">
              <div className="relative overflow-hidden rounded-3xl p-10 xl:p-10">
                <div className="relative z-20 flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between">
                  <div className="mb-6 w-full lg:mb-0 lg:mr-6 " >
                    
                    <div className="flex flex-row items-start">
                      <div className="flex flex-col">
                        <h3 className="mb-2 text-xl font-bold text-foreground">Unlock Financial Clarity</h3>
                        <p className="font-medium text-foreground">Wishh goes beyond typical financial calculators that miss essential details. You will find it easy and enjoyable to create plans that reflect your unique aspirations, and the journey you envision.</p>
                            <ul className="list-disc ml-6 mt-4 space-y-2 text-foreground">
                              <li>Analyse milestones and their effect on FIRE journey</li>
                              <li>See how changing lifestyle affects you finances</li>
                              <li>Change inflation, returns, etc to gauge their effect</li>
                              <li>Interactive journey mapping for a holistic view</li>
                            </ul>
                          </div>
                      <span className="z-25 ml-4 h-auto">
                                                    <Image className=" relative mx-auto nav-gradient " src="/images/explain/output.jpg" height={0} width={400} alt="image" />
                      </span>
                        </div>
                        <div className="mt-6">
                        <Link
                          href="/signup"
                          className={buttonVariants({ variant: "default", size: "lg" })}>
                         Calculate My FIRE Number
                          <svg className="-mr-1 ml-2 size-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                          </Link>
                        </div>
                  </div>
                </div>
              </div>



              
            </div>
            

          </div>
          <div className="mr-2 sm:col-span-6">
            <div className="border-muted relative rounded-3xl border">
                  <div className="relative overflow-hidden rounded-3xl p-8 pt-12.5 xl:p-10">
                <div className="relative z-20">
                      <span className="z-25 ml-4  h-auto">
                        <Image className=" relative rounded-full mb-3" src="/images/explain/output.jpg" height={20} width={40} alt="image" />
                      </span>

                      <h3 className="mb-2 text-xl font-bold text-foreground ">
                        Visualise your life
                  </h3>
                      <p className="font-medium text-foreground text-justify">
                        Gain a comprehensive view of your entire life, explore numerous potential outcomes, analyze trade-offs, and experiment with different investment strategies.
                  </p>
                </div>


              </div>
            </div>
              </div>


              <div className="ml-2 sm:col-span-6">
                <div className="border-muted relative rounded-3xl border">
                  <div className="relative overflow-hidden rounded-3xl p-8 pt-12.5 xl:p-10">
                    <div className="relative z-20">
                      <span className="z-25 ml-4">
                        <Image className=" relative rounded-full mb-3  h-auto" src="/images/explain/output.jpg" height={20} width={40} alt="image" />
                      </span>

                      <h3 className="mb-2 text-xl font-bold text-foreground">
                        Safe, Secure, No Spam
                      </h3>
                      <p className="font-medium text-foreground text-justify">
                        Rest assured, Wishh ensures your privacy and security. We never link to your actual financial accounts, and the data you input remains confidential and is never shared with any third parties.
                      </p>
                    </div>

                    
                  </div>
                </div>
              </div>











            </div>
          </div>
          <div className="" >
            

                    <Image className=" relative mx-auto nav-gradient " src="/images/explain/explain.png" height={0} width={800} alt="hero" />
          

          </div>
                <div className="mt-14 mb-6 flex justify-center items-center text-center">
            <Link
              href="/signup"
              className={buttonVariants({ variant: "default", size: "lg" })}>
              {switcher ? 'Calculate My FIRE Number' :

                'Build My Personalised Plan'}
              <svg className="-mr-1 ml-2 size-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
            </div>
        </section>

            </>
            )
            }
