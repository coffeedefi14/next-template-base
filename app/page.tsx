import { HomePageContext } from '@/components/providers/HomePageContext'; // Import the page context
import { SiteHeader } from "@/components/home/navbar/site-header"
import { SiteFooter } from "@/components/home/site-footer"

import { Hero } from '@/components/home/hero'
import { Explain } from '@/components/home/explain'
import { Features } from '@/components/home/features'
import { Faq } from '@/components/home/faq'
import { Last } from '@/components/home/last'
import { Pricing } from '@/components/home/pricing'

export default function IndexPage() {
  return (
    <>
      <HomePageContext>
        <div className="bodyContainer">
          <SiteHeader />

          <div className="wrapper">
            <main className="grid items-center gap-6">

              <Hero />
              <Explain />
              <Features />
              <Faq />
              <Pricing />
              <Last />
            </main>
          </div>
          <SiteFooter />
        </div>
      </HomePageContext>
    </>
  )
}
