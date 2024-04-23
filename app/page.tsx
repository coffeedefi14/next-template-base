
import { Hero } from '@/components/home/hero'
import { Explain } from '@/components/home/explain'
import { Features } from '@/components/home/features'
import { Faq } from '@/components/home/faq'
import { Last } from '@/components/home/last'

export default function IndexPage() {
  return (
    <main className="grid items-center gap-6">
      
      <Hero />
      <Explain/>
      <Features />
      <Faq />
      <Last/>
    </main>
  )
}
