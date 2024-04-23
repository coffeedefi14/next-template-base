
import React from 'react';
import Link from 'next/link'; // Import Link from Next.js



export function Signup() {

  return (
    <>
      <section id="login" className="pt-17.5 lg:pt-22.5 xl:pt-32.5 scroll-mt-17 mb-8 overflow-hidden">
        <div className="absolute top-10 left-0 w-full flex flex-col gap-3 -z-10 opacity-50">
          <div className="w-full h-[1.24px] footer-bg-gradient"></div>
          <div className="w-full h-[2.47px] footer-bg-gradient"></div>
          <div className="w-full h-[3.71px] footer-bg-gradient"></div>
          <div className="w-full h-[4.99px] footer-bg-gradient"></div>
          <div className="w-full h-[6.19px] footer-bg-gradient"></div>
          <div className="w-full h-[7.42px] footer-bg-gradient"></div>
          <div className="w-full h-[8.66px] footer-bg-gradient"></div>
          <div className="w-full h-[9.90px] footer-bg-gradient"></div>
          <div className="w-full h-[13px] footer-bg-gradient"></div>
        </div>
     
        

        <div className="text-center px-4 pt-10">
          <h1 className="font-extrabold text-3xl text-foreground mb-5">
            Sign up
          </h1>
          <ul className="flex items-center justify-center gap-2">
            <li className="font-medium text-xs text-muted-foreground">
              <Link
                href="/">
                Home
              </Link>
            </li>
            <li className="font-medium text-xs text-muted-foreground">/ Sign up</li>
          </ul>
        </div>
      </section>






    </>
      )
}
