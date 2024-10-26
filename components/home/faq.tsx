"use client"
import React, { useState } from 'react';
import { SparklesIcon,} from '@/components/ui/othericons';

export function Faq() {

  const [selected, setSelected] = useState<number | null>(null);

    return (
        <>
        <section id="faq" className="relative mb-8 overflow-hidden pt-16 lg:pt-25">
        
        <div className="about-divider-gradient absolute left-1/2 top-0 h-px w-full max-w-[1170px] -translate-x-1/2">
        </div>

        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-12 ">
         
          <div className="mb-10 text-center">
            <span
              className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-8 py-2 text-sm font-medium">
                <SparklesIcon className="text-foreground" />

                <span className="text-foreground">
                  Questions About our FIRE Tool?
                </span>
            </span>
              <h2 className="xl:text-heading-2 mb-5 text-2xl font-extrabold text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
              <p className="mx-auto max-w-[714px] font-medium text-foreground">
              Our FIRE tool is designed to empower you with exceptional
              financial capabilities, making the planning process more efficient,
              accurate, and enjoyable.
            </p>
          </div>

          <div className="wow fadeInUp">
            <div >
             
              <div className="flex flex-col border-b border-border">
                  <h4 onClick={() => setSelected(selected !== 0 ? 0 : null)}
                    className={`flex cursor-pointer items-center justify-between py-5 text-[22px] font-semibold leading-[28px] lg:py-7
                ${selected == 0 ? 'text-primary-1' : 'text-foreground'}`}>
                What Is this FIRE Tool ?
                    <span className={selected === 0 ? 'hidden' : 'block'}>
                <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.5 11.1752H12.8625V1.5002C12.8625 1.0502 12.4875 0.637695 12 0.637695C11.55 0.637695 11.1375 1.0127 11.1375 1.5002V11.1752H1.50001C1.05001 11.1752 0.637512 11.5502 0.637512 12.0377C0.637512 12.4877 1.01251 12.9002 1.50001 12.9002H11.175V22.5002C11.175 22.9502 11.55 23.3627 12.0375 23.3627C12.4875 23.3627 12.9 22.9877 12.9 22.5002V12.8627H22.5C22.95 12.8627 23.3625 12.4877 23.3625 12.0002C23.3625 11.5502 22.95 11.1752 22.5 11.1752Z"
                    fill="" />
                </svg>
              </span>

                    <span className={selected === 0 ? 'block' : 'hidden'}>
              <svg width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.125 1.86263H0.875012C0.425012 1.86263 0.0125122 1.48763 0.0125122 1.00013C0.0125122 0.550134 0.387512 0.137634 0.875012 0.137634H21.125C21.575 0.137634 21.9875 0.512634 21.9875 1.00013C21.9875 1.45013 21.575 1.86263 21.125 1.86263Z"
                          fill="currentColor" />
              </svg>
            </span>
          </h4>
                  {selected === 0 && (
                    <p className="pb-7 font-medium text-foreground">
                      If you too are like us, your journey to financial independence must have started with a vision and a spreadsheet.
                      From watching videos to listening to podcasts and browsing blogs, it&apos;s a journey of constant learning. While planning for the future can feel daunting,
                      having the right tools and guidance can make it easier. This is where wishh comes in.
                    </p>
                  )}
        </div>

      
                <div className="flex flex-col border-b border-border">
                  <h4 onClick={() => setSelected(selected !== 1 ? 1 : null)}
                    className={`flex cursor-pointer items-center justify-between py-5 text-[22px] font-semibold leading-[28px] lg:py-7
                ${selected == 1 ? 'text-primary-1' : 'text-foreground'}`}>
          Why are we building this tool?
                    <span className={selected === 1 ? 'hidden' : 'block'}>
          <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.5 11.1752H12.8625V1.5002C12.8625 1.0502 12.4875 0.637695 12 0.637695C11.55 0.637695 11.1375 1.0127 11.1375 1.5002V11.1752H1.50001C1.05001 11.1752 0.637512 11.5502 0.637512 12.0377C0.637512 12.4877 1.01251 12.9002 1.50001 12.9002H11.175V22.5002C11.175 22.9502 11.55 23.3627 12.0375 23.3627C12.4875 23.3627 12.9 22.9877 12.9 22.5002V12.8627H22.5C22.95 12.8627 23.3625 12.4877 23.3625 12.0002C23.3625 11.5502 22.95 11.1752 22.5 11.1752Z"
              fill="" />
          </svg>
        </span>

                    <span className={selected === 1 ? 'block' : 'hidden'}>
                      <svg className="fill-current" width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.125 1.86263H0.875012C0.425012 1.86263 0.0125122 1.48763 0.0125122 1.00013C0.0125122 0.550134 0.387512 0.137634 0.875012 0.137634H21.125C21.575 0.137634 21.9875 0.512634 21.9875 1.00013C21.9875 1.45013 21.575 1.86263 21.125 1.86263Z"
            fill="" />
        </svg>
      </span>
            </h4 >
            {selected === 1 && (
                    <p className="pb-7 font-medium text-foreground">
                This tool is a result of many years of thinking put into practice. We started with excels and when it became too much to manage, we decided there has got to be a tool. We wanted to give like-minded people a platform to build clarity about their desired financial future in a secure and enjoyable manner. 
              </p>)}
            </div >

           
                <div className="flex flex-col border-b border-border">
            <h4 onClick={() => setSelected(selected !== 2 ? 2 : null)}
                    className={`flex cursor-pointer items-center justify-between py-5 text-[22px] font-semibold leading-[28px] lg:py-7
                ${selected == 2 ? 'text-primary-1' : 'text-foreground'}`} >
                Is this one more goal calculator?
                  <span className={selected === 2 ? 'hidden' : 'block'}>
                  <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.5 11.1752H12.8625V1.5002C12.8625 1.0502 12.4875 0.637695 12 0.637695C11.55 0.637695 11.1375 1.0127 11.1375 1.5002V11.1752H1.50001C1.05001 11.1752 0.637512 11.5502 0.637512 12.0377C0.637512 12.4877 1.01251 12.9002 1.50001 12.9002H11.175V22.5002C11.175 22.9502 11.55 23.3627 12.0375 23.3627C12.4875 23.3627 12.9 22.9877 12.9 22.5002V12.8627H22.5C22.95 12.8627 23.3625 12.4877 23.3625 12.0002C23.3625 11.5502 22.95 11.1752 22.5 11.1752Z"
                      fill="" />
                  </svg>
                </span>

                    <span className={selected === 2 ? 'block' : 'hidden'} >
                      <svg className="fill-current" width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.125 1.86263H0.875012C0.425012 1.86263 0.0125122 1.48763 0.0125122 1.00013C0.0125122 0.550134 0.387512 0.137634 0.875012 0.137634H21.125C21.575 0.137634 21.9875 0.512634 21.9875 1.00013C21.9875 1.45013 21.575 1.86263 21.125 1.86263Z"
        fill="" />
    </svg>
                </span >
                  </h4 >
                  {selected === 2 && (
                    <p className="pb-7 font-medium text-foreground">
                      Yes there are some cool apps and calculators available but honestly we were surprised to see them missing many critical details. And on top of that, some sell your data for ads, and others want you to invest through them. We just want to build a tool that makes it easy for anyone to learn and plan their finanical decisions.
                    </p>)}
            </div >

           
                <div className="flex flex-col border-b border-border">
                <h4 onClick={() => setSelected(selected !== 3 ? 3 : null)}
                  className={`flex cursor-pointer items-center justify-between py-5 text-[22px] font-semibold leading-[28px] lg:py-7
                ${selected == 3 ? 'text-primary-1' : 'text-foreground'}`}>
                What is something that others missed?
                <span className={selected === 3 ? 'hidden' : 'block'}>
                  <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.5 11.1752H12.8625V1.5002C12.8625 1.0502 12.4875 0.637695 12 0.637695C11.55 0.637695 11.1375 1.0127 11.1375 1.5002V11.1752H1.50001C1.05001 11.1752 0.637512 11.5502 0.637512 12.0377C0.637512 12.4877 1.01251 12.9002 1.50001 12.9002H11.175V22.5002C11.175 22.9502 11.55 23.3627 12.0375 23.3627C12.4875 23.3627 12.9 22.9877 12.9 22.5002V12.8627H22.5C22.95 12.8627 23.3625 12.4877 23.3625 12.0002C23.3625 11.5502 22.95 11.1752 22.5 11.1752Z"
                      fill="" />
                  </svg>
                </span>

                    <span className={selected === 3 ? 'block' : 'hidden'}>
                      <svg className="fill-current" width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.125 1.86263H0.875012C0.425012 1.86263 0.0125122 1.48763 0.0125122 1.00013C0.0125122 0.550134 0.387512 0.137634 0.875012 0.137634H21.125C21.575 0.137634 21.9875 0.512634 21.9875 1.00013C21.9875 1.45013 21.575 1.86263 21.125 1.86263Z"
        fill="" />
    </svg>
                </span >
                  </h4 >
                  {selected === 3 && (
                    <p className="pb-7 font-medium text-foreground">
                      One of the most common approach is to have mutiple calculators: retirement, crorepati, goals etc. For most of us, its impractical to use these many calculators as they miss the interaction effects. How can one plan for retirement independent of other goals? This is just lazy calculation. In contrast, we begin by guiding you to explore various possibilities, test multiple scenarios, and weigh the trade-offs. For creating the right path towards your financial future, we help you discover the possibilities before you finalize. 
                    </p>)}
            </div >

          
                <div className="flex flex-col border-b border-border">
              <h4 onClick={() => setSelected(selected !== 4 ? 4 : null)}
                className={`flex cursor-pointer items-center justify-between py-5 text-[22px] font-semibold leading-[28px] lg:py-7
                ${selected == 4 ? 'text-primary-1' : 'text-foreground'}`}>
                What happens to the data I enter?
              <span className={selected === 4 ? 'hidden' : 'block'}>
                  <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.5 11.1752H12.8625V1.5002C12.8625 1.0502 12.4875 0.637695 12 0.637695C11.55 0.637695 11.1375 1.0127 11.1375 1.5002V11.1752H1.50001C1.05001 11.1752 0.637512 11.5502 0.637512 12.0377C0.637512 12.4877 1.01251 12.9002 1.50001 12.9002H11.175V22.5002C11.175 22.9502 11.55 23.3627 12.0375 23.3627C12.4875 23.3627 12.9 22.9877 12.9 22.5002V12.8627H22.5C22.95 12.8627 23.3625 12.4877 23.3625 12.0002C23.3625 11.5502 22.95 11.1752 22.5 11.1752Z"
                      fill="" />
                  </svg>
                </span>

                    <span className={selected === 4 ? 'block' : 'hidden'} >
                      <svg className="fill-current" width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.125 1.86263H0.875012C0.425012 1.86263 0.0125122 1.48763 0.0125122 1.00013C0.0125122 0.550134 0.387512 0.137634 0.875012 0.137634H21.125C21.575 0.137634 21.9875 0.512634 21.9875 1.00013C21.9875 1.45013 21.575 1.86263 21.125 1.86263Z"
        fill="" />
    </svg>
                </span >
                  </h4 >
                  {selected === 4 && (
                    <p className="pb-7 font-medium text-foreground">
                      Your data is kept private and secure. Unlike other apps, we don&apos;t ask you to link various accounts or read gmail data. Our aim is to provide you with a secure and privacy-focused platform to analyze, plan, and track your financial milestones. Our goal is to establish a sustainable business with this simple objective. If you&apos;d like to support us in this vision, consider upgrading to the premium tier that will be launched shortly. Alternatively, you are welcome to continue using our services for free to check in as often as you&apos;d like. Either option works for us.             </p>)}
                </div >
                <div className="flex flex-col">
                  <h4 onClick={() => setSelected(selected !== 5 ? 5 : null)}
                    className={`flex cursor-pointer items-center justify-between py-5 text-[22px] font-semibold leading-[28px] lg:py-7
                ${selected == 5 ? 'text-primary-1' : 'text-foreground'}`}>
                    Why did we make a website and not an app for our FIRE calculator?
                    <span className={selected === 5 ? 'hidden' : 'block'}>
                      <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M22.5 11.1752H12.8625V1.5002C12.8625 1.0502 12.4875 0.637695 12 0.637695C11.55 0.637695 11.1375 1.0127 11.1375 1.5002V11.1752H1.50001C1.05001 11.1752 0.637512 11.5502 0.637512 12.0377C0.637512 12.4877 1.01251 12.9002 1.50001 12.9002H11.175V22.5002C11.175 22.9502 11.55 23.3627 12.0375 23.3627C12.4875 23.3627 12.9 22.9877 12.9 22.5002V12.8627H22.5C22.95 12.8627 23.3625 12.4877 23.3625 12.0002C23.3625 11.5502 22.95 11.1752 22.5 11.1752Z"
                          fill="" />
                      </svg>
                    </span>

                    <span className={selected === 5 ? 'block' : 'hidden'} >
                      <svg className="fill-current" width="22" height="2" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21.125 1.86263H0.875012C0.425012 1.86263 0.0125122 1.48763 0.0125122 1.00013C0.0125122 0.550134 0.387512 0.137634 0.875012 0.137634H21.125C21.575 0.137634 21.9875 0.512634 21.9875 1.00013C21.9875 1.45013 21.575 1.86263 21.125 1.86263Z"
                          fill="" />
                      </svg>
                    </span >
                  </h4 >
                  {selected ===5 && (
                    <p className="pb-7 font-medium text-foreground">
                      We chose a website over an app for our FIRE (Financial Independence, Retire Early) calculator for several key reasons:
                      <br></br>
                        1. <strong>Better Visualizations</strong>: A web version provides superior visualizations for the complex calculations and scenarios needed to confidently plan your FIRE journey.
                        <br></br>
                          2. <strong>Comprehensive Analysis</strong>: Our website offers more in-depth analytical tools and interactive features than a typical mobile app.
                          <br></br>
                            
                                Plus, a web-based approach works on any device, gets updated automatically, and lets you easily share your results. Our goal is to provide a secure and flexible tool that helps you plan your finances while keeping your data safe. </p>
                  )}


                </div>
          </div >
        </div >
      </div >
    </section >
            </>
            )
            }
