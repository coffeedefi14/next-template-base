
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/home/navbar/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { MailCheck, Twitter,  Linkedin,} from 'lucide-react';
import {RedditIcon} from '@/components/ui/othericons';

export default function About() {
  return (
     <div className="bodyContainer dark">
              <SiteHeader />

              <div className="wrapper ">
    <div className="flex flex-col items-center justify-center min-h-[100dvh]">
      <main className="container max-w-4xl px-4 py-12">
      <section className="flex flex-col items-center justify-center gap-12 py-12 bg-background">

      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
       Hi, I&apos;m <span className="pricing-gradient-text">Dhruv</span>
     </h1>

      <div className="flex flex-col items-center justify-center">

   

   <Image
       src="/dhruv.jpg"
       width={300}
       height={300}
       alt="Founder"
       className="rounded-full object-cover"
     />
   </div>
   <div className="space-y-10 text-center max-w-xl flex flex-col items-center justify-center">
     
     <h2 className="max-w-lg text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-foreground">
       I created <span className="pricing-gradient-text">wishh</span> to help people make better decisions.
     </h2>
     <h2 className="text-center text-foreground md:text-2xl">
       Back in 2016, I founded  <span className="pricing-gradient-text">Finpin</span> in search of a better way to make financial plans. </h2>
     <p className="text-center text-foreground md:text-2xl">
      We saw some early success, but not many were actively seeking financial plans at the time.
     </p>
     <p className="text-center text-foreground md:text-3xl">
       Fast forward to today, and I see a vibrant community of  <span className="pricing-gradient-text">FIRE aspirants.</span>  </p>
     <p className="text-center text-foreground md:text-3xl">
       I created <span className="pricing-gradient-text">wishh</span> as a way to contribute meaningfully and help  <span className="pricing-gradient-text">FIRE aspirants</span> move forward on their journey.
     </p>
   </div>
</section>


        <section className="mt-12 md:mt-24 space-y-8">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold  sm:text-3xl">My vision for <span className="pricing-gradient-text">wishh</span> platform</h2>
            <p className="text-foreground text-justify md:text-lg">
              How should you divide your free income (the money left after monthly expenses) between hobbies, lifestyle, property, investments, and savings?
              Every financial decision involves trade-offs between different benefits, and finding the optimal balance can be challenging.
            </p>
            <div className="p-2 flex flex-col space-y-6 px-4 py-4 text-center bg-interaction-2">
            <p className="text-foreground text-justify md:text-lg">
              For example, consider the choice between:
            </p>
             <p className="text-foreground text-justify md:text-lg">
           A. Buying a big house now but taking fewer holidays for the next 10 years..
            </p>
             <p className="text-foreground text-justify md:text-lg">
               OR 
            </p>
             <p className="text-foreground text-justify md:text-lg">
              B. Buying a smaller house and taking more lavish holidays for the next decade.
            
            </p>
             <p className="text-foreground text-justify md:text-xl">
              
              Which option would give you more happiness?
            </p>
            </div>
             <p className="text-foreground text-justify md:text-lg">
              Making these decisions is not easy for most people, especially when the choices are spread out over time.
              </p>
              <p className="pricing-gradient-text text-justify md:text-2xl">
              
              I am creating wishh to help you navigate these trade-offs.  </p>
          </div>
          
        </section>
        <section className="mt-12 md:mt-24 space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Contact</h2>
            <p className="text-foreground md:text-lg">
              If you&apos;d like to get in  <span className="pricing-gradient-text">touch with me</span> or learn more about <span className="pricing-gradient-text">wishh</span>, you can reach out to me through the
              following channels:
            </p>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl">Dhruv</h2>
            <div className="flex flex-row gap-24 justify-center md:justify-start">
              <Link href="mailto:dhruv@icebergtribe.com" target="_blank" rel="noopener noreferrer" prefetch={false}>
                <MailCheck className="w-6 h-6 text-foreground" />
              </Link>
              <Link href="https://www.linkedin.com/in/dhruvaroratnl" target="_blank" rel="noopener noreferrer" prefetch={false}>
                <Linkedin className="w-6 h-6 text-foreground" />
              </Link>
              
            </div>
             <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl">Wishh</h2>
            <div className="flex flex-row gap-24 justify-center md:justify-start">
              
              <Link href="https://www.reddit.com/r/FIRE_wishhin/" target="_blank" rel="noopener noreferrer" prefetch={false}>
                <RedditIcon className="w-6 h-6 text-foreground" />
              </Link>
              <Link href="https://x.com/wishh_in" target="_blank" rel="noopener noreferrer" prefetch={false}>
                <Twitter className="w-6 h-6 text-foreground" />
              </Link>
              <Link href="https://www.linkedin.com/company/wishhin" target="_blank" rel="noopener noreferrer" prefetch={false}>
                <Linkedin className="w-6 h-6 text-foreground" />
              </Link>
            </div>
          </div>
        </section>
        {/*<section className="mt-12 md:mt-24 space-y-8 overflow-auto max-h-[400px]">*/}
        {/*  <div className="space-y-4">*/}
        {/*    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Coverage</h2>*/}
        {/*    <div className="grid gap-4">*/}
        {/*      <div className="bg-interaction-1 p-4 rounded-md">*/}
        {/*        <h3 className="text-lg font-medium">Featured in TechCrunch</h3>*/}
        {/*        <p className="text-foreground">*/}
        {/*          Acme Inc. was featured in TechCrunch for its innovative approach to product development.*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*      <div className="bg-interaction-1 p-4 rounded-md">*/}
        {/*        <h3 className="text-lg font-medium">Awarded Best Startup</h3>*/}
        {/*        <p className="text-foreground">*/}
        {/*          Acme Inc. was awarded the Best Startup award at the annual industry conference.*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*      <div className="bg-interaction-1 p-4 rounded-md">*/}
        {/*        <h3 className="text-lg font-medium">Recognized by Forbes</h3>*/}
        {/*        <p className="text-foreground">*/}
        {/*          Acme Inc. was recognized by Forbes as one of the top 100 innovative companies to watch.*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*      <div className="bg-interaction-1 p-4 rounded-md">*/}
        {/*        <h3 className="text-lg font-medium">Mentioned in Wired</h3>*/}
        {/*        <p className="text-foreground">*/}
        {/*          Acme Inc. was mentioned in Wired magazine for its groundbreaking work in the industry.*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*      <div className="bg-interaction-1 p-4 rounded-md">*/}
        {/*        <h3 className="text-lg font-medium">Highlighted in The Verge</h3>*/}
        {/*        <p className="text-foreground">*/}
        {/*          Acme Inc. was highlighted in The Verge for its innovative approach to product development.*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </main>
    </div>
     </div>
              <SiteFooter/>
            </div>
  )
}
