import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Dashboard, PeopleLikeYouIcon, SignalIcon, HomeIcon, MilestonesIcon, Charts, PartyPopperIcon } from '@/components/ui/othericons';


export function Features () {
    return (
        <>
        <section id="features" className="relative mb-8 overflow-hidden pt-16 lg:pt-25">
        <div className="about-divider-gradient absolute left-1/2 top-0 h-px w-full max-w-[1170px] -translate-x-1/2">
        </div>
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-12 lg:py-16">
               
            <div className="items-center justify-center text-center">
                  <span
                className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-8 py-2 text-sm font-medium">
                  
                <Dashboard className="text-foreground" />
                <span className="text-foreground"> Key Features of the Tool </span>
                  </span>
              <h2 className="xl:text-heading-2 mb-5 text-2xl font-extrabold text-foreground sm:text-4xl">
                Enriching Your Financial Journey
                  </h2>
              <p className="mx-auto max-w-[714px] font-medium">
                    Our mission is to help you feel more confident and less stressed about your FIRE journey.
                  </p>
                </div>

            <div className="relative">
                  
                 
              <div className="flex flex-wrap justify-center">
                   
                <div className="w-full sm:w-1/2 lg:w-1/3">
                  <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
                        <span
                      className="features-bg absolute left-0 top-0 -z-1 size-full opacity-0 group-hover:opacity-100"></span>
                        <span
                      className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
                      <PeopleLikeYouIcon className="text-foreground" />
                        </span>
                    <h4 className="mb-4 text-lg font-semibold text-foreground">
                          People Like U
                        </h4>
                    <p className="font-medium">
                      Get to know how people like you are planning for lifestyle and family expenses
                        </p>
                      </div>
                    </div>

                <div className="w-full sm:w-1/2 lg:w-1/3">
                  <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
                        <span
                      className="features-bg absolute left-0 top-0 -z-1 size-full opacity-0 group-hover:opacity-100"></span>
                        <span
                      className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
                      <SignalIcon className="text-foreground" />
                        </span>
                    <h4 className="mb-4 text-lg font-semibold text-foreground">
                          Lifestyle Growth
                          </h4>
                    <p className="font-medium">
                      Design your roadmap for the lifestyle growth you aspire to achieve while meeting other goals
                        </p>
                      </div>
                    </div>

                   
                <div className="w-full sm:w-1/2 lg:w-1/3">
                  <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
                        <span
                      className="features-bg absolute left-0 top-0 -z-1 size-full opacity-0 group-hover:opacity-100"></span>
                        <span
                      className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
                      <HomeIcon className="text-foreground" />
                        </span>
                    <h4 className="mb-4 text-lg font-semibold text-foreground">
                      Property Purchase
                        </h4>
                    <p className="font-medium">
                      Analyze and discover the optimal budget and timing for purchasing your dream home
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="features-row-border h-px w-full"></div>

                  
                  <div className="flex flex-wrap justify-center">
                    
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                      <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
                        <span
                          className="features-bg absolute left-0 top-0 -z-1 size-full rotate-180 opacity-0 group-hover:opacity-100"></span>
                        <span
                          className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
                      <MilestonesIcon className="text-foreground" />
                        </span>
                    <h4 className="mb-4 text-lg font-semibold text-foreground">
                      Milestones and Goals
                        </h4>
                        <p className="font-medium">
                      Plan for your goals and discover key milestones towards independence and fulfillment
                        </p>
                      </div>
                    </div>

                   
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                      <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
                        <span
                          className="features-bg absolute left-0 top-0 -z-1 size-full rotate-180 opacity-0 group-hover:opacity-100"></span>
                        <span
                          className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
                      <Charts className="text-foreground" />
                        </span>
                    <h4 className="mb-4 text-lg font-semibold text-foreground">
                      Investment Planning
                        </h4>
                        <p className="font-medium">
                      Simulate how volatility impacts your networth to make informed investing decisions
                        </p>
                      </div>
                    </div>

                   
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                      <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
                        <span
                          className="features-bg absolute left-0 top-0 -z-1 size-full rotate-180 opacity-0 group-hover:opacity-100"></span>
                        <span
                          className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
                      <PartyPopperIcon className="text-foreground" />
                        </span>
                    <h4 className="mb-4 text-lg font-semibold text-foreground">
                          Have some Fun
                        </h4>
                        <p className="font-medium">
                          Change risk, retirement details, expenses, goals etc to discover new possibilities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
          <div className="relative mt-20 mb-20">
            <Image
              className="absolute -top-15 right-20 z-40 nav-gradient hidden lg:block  h-auto"
              src="/images/features/features2.png"
              height={0}
              width={400}
              alt="features2"
            />
            <Image
              className="absolute -top-30 left-0 z-40 nav-gradient hidden lg:block  h-auto"
              src="/images/features/features4.png"
              height={0}
              width={470}
              alt="features4"
            />
            <Image
              className="relative mx-auto nav-gradient"
              src="/images/features/features.png"
              height={0}
              width={900}
              alt="features"
            />
            <Image
              className="absolute -bottom-10 right-0 z-40 nav-gradient hidden lg:block  h-auto"
              src="/images/features/features3.png"
              height={0}
              width={450}
              alt="features3"
            />
            <Image
              className="absolute -bottom-20 left-20 z-10 nav-gradient hidden lg:block  h-auto"
              src="/images/features/output.jpg"
              height={0}
              width={150}
              alt="featurescon"
            />
          </div>

          <div className="mt-6 flex justify-center items-center text-center">
            <Link
              href="/signup"
              className={buttonVariants({ variant: "default", size: "lg" })}>
              Build My Personalised Plan
              <svg className="-mr-1 ml-2 size-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
          </div>
            </section>
            </>
            )
            }
