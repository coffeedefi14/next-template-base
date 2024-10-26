import React from 'react';
import Image from "next/image";
import { Gem } from 'lucide-react';

export function Pricing () {
    return (
        <>
        <section id="pricing" className="relative mb-8 overflow-hidden pt-16 lg:pt-25">

        <div className="about-divider-gradient absolute left-1/2 top-0 h-px w-full max-w-[1170px] -translate-x-1/2">
        </div>
          <div className="relative top-18">
          
          <div
            className="bg-transparent -z-1 pricing-circle absolute left-1/2 -top-10 h-[830px] w-full max-w-[830px] -translate-x-1/2 rounded-full">
          </div>

          <div className="absolute -top-30 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>
        </div>
       <div className="mx-auto max-w-screen-xl px-4 py-8 pt-20 ">
      
        <div className=" mb-10 items-center justify-center text-center">
          <span
                className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                <Gem className="text-foreground w-6 h-5" />

            <span className="text-foreground"> Get access </span>
          </span>
          <h2 className="xl:text-heading-2 mb-4 text-2xl font-extrabold text-foreground sm:text-4xl">
                 Our Pricing Plan
          </h2>
              <p className="mx-auto max-w-[600px] font-medium text-foreground">
                Our FIRE calculator access plans are crafted to provide you with efficient, precise, and user-friendly tools for planning your FIRE journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 ">
          
          <div
                className="pricing-item-border relative z-20 overflow-hidden rounded-3xl px-10 pb-10 pt-12">
            <span className="absolute right-9 top-9"><Image src="/images/pricing/pricing-icon-01.svg" className="dark:invert" height={20} width={60} alt="icon" /></span>

            <h3 className="mb-5 text-[24px] font-semibold text-foreground">
              Foundation
                </h3>
                <p className="text-xs text-foreground py-2 mb-5 max-w-[300px]"> Get access to essential tools to kickstart. Perfect for those starting their financial independence journey.</p>
            <div className="flex items-center gap-4">
              <h2 className="pricing-gradient-text text-[34px] font-bold text-foreground">
                FREE
              </h2>

              <p className="text-foreground font-medium">
                 <br />
                
              </p>
            </div>

            <div className="pricing-gradient-divider my-10 h-px w-full"></div>

            <ul className="flex flex-col gap-4 text-sm text-foreground">
              <li className="flex items-center gap-5">
                <Image src="/images/pricing/pricing-icon-04.svg"  className="dark:invert" height={20} width={20} alt="icon" />
                <span className="font-medium">Enter any kind of cash flows incl. loans</span>
              </li>
              <li className="flex items-center gap-5">
                <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                <span className="font-medium">Analyse retirement year for self and/or spouse</span>
                  </li>

                  <li className="flex items-center gap-5">
                    <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                    <span className="font-medium">Get People Like U insights</span>
                  </li>
                  <li className="flex items-center gap-5">
                    <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                    <span className="font-medium">Set and analyse multiple financial milestones</span>
                  </li>
              <li className="flex items-center gap-5">
                <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                    <span className="font-medium">Model different investment return scenarios</span>
              </li>
              <li className="flex items-center gap-5">
                <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                <span className="font-medium">Easy expense categorisation</span>
              </li>
             
              <li className="flex items-center gap-5">
                <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                    <span className="font-medium">Account for inflation in FIRE projections</span>
                  </li>
                  <li className="flex items-center gap-5">
                    <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                    <span className="font-medium">Record and track historical Networth</span>
                  </li>
            </ul>

            <a href="/#"
              className="pricing-button-gradient hover:shadow-button relative mt-11 flex items-center justify-center gap-1.5 rounded-lg p-3 font-medium text-white transition-all duration-300 ease-in-out">
              Get started
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z"
                  fill="white" />
              </svg>
            </a>

            <p className="mt-4 text-center text-sm">
              No payment info needed
            </p>

         
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <span className="absolute bottom-0 right-0 -z-1">
                <Image src="/images/pricing/blur-16.svg" className="dark:invert" height={20} width={700} alt="blur" />
              </span>
              <span className="absolute left-0 top-0 -z-1">
                <Image src="/images/pricing/blur-17.svg" className="dark:invert" height={20} width={700} alt="blur" />
              </span>
            </div>
          </div>

         
          <div
            className="pricing-item-border relative z-20 overflow-hidden rounded-3xl px-10 pb-10 pt-12">
            <span className="absolute right-9 top-9"><Image src="/images/pricing/pricing-icon-02.svg" className="dark:invert" height={20} width={60} alt="icon" /></span>

            <h3 className="mb-5 text-[24px] font-semibold text-foreground">
              Enhanced
            </h3>
                <p className="text-xs text-foreground py-2 mb-5 max-w-[300px]"> Unlock advanced features & recommendations. Ideal for those seeking more-depth in analysis.</p>

             <div className="flex items-center gap-4">
              <h2 className="pricing-gradient-text text-[34px] font-bold text-foreground">
                &#8377;199
              </h2>

                  <p className="font-medium text-foreground">
                /month <br />
                (billed annually)
              </p>
            </div>

            <div className="pricing-gradient-divider my-10 h-px w-full"></div>

                <ul className="flex flex-col gap-4 text-foreground">
              <li className="flex items-center gap-5">
                <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                <span className="font-medium">All features of Foundation tier +</span>
              </li>
              <li className="flex items-center gap-5">
                <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                    <span className="font-medium">Create and compare multiple FIRE scenarios</span>
              </li>
              <li className="flex items-center gap-5">
                <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                    <span className="font-medium">Simulate FIRE success probability</span>
                  </li>
                  <li className="flex items-center gap-5">
                    <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                    <span className="font-medium">Discover and incorporate financial preferences</span>
                  </li>
              <li className="flex items-center gap-5">
                <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                <span className="font-medium">Upload and download FIRE details in excel</span>
              </li>
              <li className="flex items-center gap-5">
                <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                <span className="font-medium">Community to take anonymous feedbacks</span>
              </li>
              <li className="flex items-center gap-5">
                <Image src="/images/pricing/pricing-icon-04.svg" className="dark:invert" height={20} width={20} alt="icon" />
                <span className="font-medium">Priority customer support</span>
              </li>
            </ul>

            <a href="#"
              className="pricing-button-gradient hover:shadow-button relative mt-11 flex items-center justify-center gap-1.5 rounded-lg p-3 font-medium text-white transition-all duration-300 ease-in-out">
              Coming soon
              {/*<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
              {/*  <path*/}
              {/*    d="M14.8992 7.5999L9.72422 2.3499C9.49922 2.1249 9.14922 2.1249 8.92422 2.3499C8.69922 2.5749 8.69922 2.9249 8.92422 3.1499L13.1242 7.4249H2.49922C2.19922 7.4249 1.94922 7.6749 1.94922 7.9749C1.94922 8.2749 2.19922 8.5499 2.49922 8.5499H13.1742L8.92422 12.8749C8.69922 13.0999 8.69922 13.4499 8.92422 13.6749C9.02422 13.7749 9.17422 13.8249 9.32422 13.8249C9.47422 13.8249 9.62422 13.7749 9.72422 13.6499L14.8992 8.3999C15.1242 8.1749 15.1242 7.8249 14.8992 7.5999Z"*/}
              {/*    fill="white" />*/}
              {/*</svg>*/}
            </a>

            <p className="mt-4 text-center text-sm">
              No extra hidden charge
            </p>

           
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <span className="absolute bottom-0 right-0 -z-1">
                <Image src="/images/pricing/blur-16.svg" className="dark:invert" height={20} width={700} alt="blur" />
              </span>
              <span className="absolute left-0 top-0 -z-1">
                <Image src="/images/pricing/blur-17.svg" className="dark:invert" height={20} width={700} alt="blur" />
              </span>
            </div>
          </div>

         
          
        </div>
      </div>
    </section>
            </>
            )
            }
