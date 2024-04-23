"use client"
import React, { useState } from 'react'
import Image from "next/image"

export function Faq() {

  const [selected, setSelected] = useState<number | null>(null);

    return (
        <>
        <section className="pb-17.5 lg:pb-22.5 xl:pb-27.5 lg:pt-25 relative mb-8 overflow-hidden pt-20">
        
        <div className="about-divider-gradient absolute left-1/2 top-0 h-px w-full max-w-[1170px] -translate-x-1/2">
        </div>

        <div className="mx-auto max-w-[770px] px-4 sm:px-8 xl:px-0">
         
          <div className="wow fadeInUp mb-20 text-center">
            <span
              className="hero-subtitle-gradient px-8 relative mb-4 inline-flex items-center gap-2 rounded-full py-2 text-sm font-medium">
                <Image src="/images/explain/im-02.png" height={20} width={20} alt="icon" />

                <span className="text-muted-foreground">
                  Questions About our AI Tool?
                </span>
            </span>
              <h2 className="mb-4.5 xl:text-heading-2 mb-5 text-2xl font-extrabold text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[714px] font-medium">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities, making the writing process more efficient,
              accurate, and enjoyable.
            </p>
          </div>

          <div className="wow fadeInUp">
            <div >
             
              <div className="flex flex-col border-b border-border">
                  <h4 onClick={() => setSelected(selected !== 0 ? 0 : null)}
                    className={`flex cursor-pointer items-center justify-between py-5 text-[22px] font-semibold leading-[28px] lg:py-7
                ${selected == 0 ? 'text-muted-foreground' : 'text-foreground'}`}>
                What Is AI Tool Content Writing Tool?
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
                    <p className="pb-7 font-medium">
                      Our AI writing tool is designed to empower you with
                      exceptional writing capabilities, making the writing process
                      more efficient, accurate, and enjoyable.
                    </p>
                  )}
        </div>

      
                <div className="flex flex-col border-b border-border">
                  <h4 onClick={() => setSelected(selected !== 1 ? 1 : null)}
                    className={`flex cursor-pointer items-center justify-between py-5 text-[22px] font-semibold leading-[28px] lg:py-7
                ${selected == 1 ? 'text-muted-foreground' : 'text-foreground'}`}>
          Is there a limit on how much content I can generate?
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
              <p className="pb-7 font-medium">
                Our AI writing tool is designed to empower you with
                exceptional writing capabilities, making the writing process
                more efficient, accurate, and enjoyable.
              </p>)}
            </div >

           
                <div className="flex flex-col border-b border-border">
            <h4 onClick={() => setSelected(selected !== 2 ? 2 : null)}
                    className={`flex cursor-pointer items-center justify-between py-5 text-[22px] font-semibold leading-[28px] lg:py-7
                ${selected == 2 ? 'text-muted-foreground' : 'text-foreground'}`} >
                Is it helpful for Digital Marketer or Content Writer?
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
                    <p className="pb-7 font-medium">
                      Our AI writing tool is designed to empower you with
                      exceptional writing capabilities, making the writing process
                      more efficient, accurate, and enjoyable.
                    </p>)}
            </div >

           
                <div className="flex flex-col border-b border-border">
                <h4 onClick={() => setSelected(selected !== 3 ? 3 : null)}
                  className={`flex cursor-pointer items-center justify-between py-5 text-[22px] font-semibold leading-[28px] lg:py-7
                ${selected == 3 ? 'text-muted-foreground' : 'text-foreground'}`}>
                What Languages does it supports?
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
                    <p className="pb-7 font-medium">
                      Our AI writing tool is designed to empower you with
                      exceptional writing capabilities, making the writing process
                      more efficient, accurate, and enjoyable.
                    </p>)}
            </div >

          
            <div className="flex flex-col">
              <h4 onClick={() => setSelected(selected !== 4 ? 4 : null)}
                className={`flex cursor-pointer items-center justify-between py-5 text-[22px] font-semibold leading-[28px] lg:py-7
                ${selected == 4 ? 'text-muted-foreground' : 'text-foreground'}`}>
                What is SEO Writing AI and how do I use it?
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
                    <p className="pb-7 font-medium">
                      Our AI writing tool is designed to empower you with
                      exceptional writing capabilities, making the writing process
                      more efficient, accurate, and enjoyable.
                    </p>)}
            </div >
          </div >
        </div >
      </div >
    </section >
            </>
            )
            }
