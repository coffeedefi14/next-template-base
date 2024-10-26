import Link from "next/link"
import { siteConfig } from '@/config/site';




export function SiteFooter() {

  const BACKEND_URL = siteConfig.links.home;
  const blog_url = siteConfig.links.blog;

  return (
    <>
   
    <footer className="bg-interaction-2 text-foreground p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            {/*<MountainIcon className="h-6 w-6" />*/}
            <span className="font-semibold">Wishh</span>
          </Link>
            <p className="text-sm">Personalise your FIRE journey. Connect with the FIRE community.</p>
            <p className="text-xs">Copyright © 2024 Iceberg Tribe LLP</p>
          </div>
          <div className="flex flex-col sm:col-span-3 sm:grid sm:grid-cols-4 gap-8">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">Contact</h3>
              <Link href="https://icebergtribe.com" target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Improves security
                prefetch={false} className="text-xs">
            Home
          </Link>
              <Link href="/about" target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Improves security
                prefetch={false} className="text-xs">
            About
          </Link>
          {/*    <Link href="#" target="_blank" // Opens in a new tab*/}
          {/*      rel="noopener noreferrer" // Improves security*/}
          {/*      prefetch={false} className="text-xs">*/}
          {/*  Team*/}
          {/*</Link>*/}
          {/*    <Link href="#" target="_blank" // Opens in a new tab*/}
          {/*      rel="noopener noreferrer" // Improves security*/}
          {/*      prefetch={false} className="text-xs">*/}
          {/*  Careers*/}
          {/*</Link>*/}
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">Products</h3>
              <Link href="https://alpha.wishh.in" target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Improves security
                prefetch={false} className="text-xs">
            Web
          </Link>
          {/*    <Link href="#" target="_blank" // Opens in a new tab*/}
          {/*      rel="noopener noreferrer" // Improves security*/}
          {/*      prefetch={false} className="text-xs">*/}
          {/*  Mobile*/}
          {/*</Link>*/}
          {/*    <Link href="#" target="_blank" // Opens in a new tab*/}
          {/*      rel="noopener noreferrer" // Improves security*/}
          {/*      prefetch={false} className="text-xs">*/}
          {/*  Enterprise*/}
          {/*</Link>*/}
          {/*    <Link href="#" target="_blank" // Opens in a new tab*/}
          {/*      rel="noopener noreferrer" // Improves security*/}
          {/*      prefetch={false} className="text-xs">*/}
          {/*  Integrations*/}
          {/*</Link>*/}
        </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Resources</h3>
              <Link href={blog_url} target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Improves security
                prefetch={false} className="text-xs">
            Blog
          </Link>
          {/*    <Link href="#" target="_blank" // Opens in a new tab*/}
          {/*      rel="noopener noreferrer" // Improves security*/}
          {/*      prefetch={false} className="text-xs">*/}
          {/*  Documentation*/}
          {/*</Link>*/}
          {/*    <Link href="#" target="_blank" // Opens in a new tab*/}
          {/*      rel="noopener noreferrer" // Improves security*/}
          {/*      prefetch={false} className="text-xs">*/}
          {/*  Support*/}
          {/*</Link>*/}
          {/*    <Link href="#" target="_blank" // Opens in a new tab*/}
          {/*      rel="noopener noreferrer" // Improves security*/}
          {/*      prefetch={false} className="text-xs">*/}
          {/*  Webinars*/}
          {/*</Link>*/}
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
              <Link href={`${BACKEND_URL}/privacy-policy`} target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Improves security
                prefetch={false} className="text-xs">
            Privacy Policy
          </Link>
              <Link href={`${BACKEND_URL}/terms-conditions`} target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Improves security
                prefetch={false} className="text-xs">
            Terms of Service
          </Link>
              <Link href={`${BACKEND_URL}/cookie-policy`} target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Improves security
                prefetch={false} className="text-xs">
            Cookie Policy
          </Link>
          {/*    <Link href="https://alpha.wishh.in/privacy-policy" target="_blank" // Opens in a new tab*/}
          {/*      rel="noopener noreferrer" // Improves security*/}
          {/*      prefetch={false} className="text-xs">*/}
          {/*  Acceptable Use*/}
          {/*</Link>*/}
            </div>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 text-xs text-grey-2 text-justify">
          <p>
            Disclaimer: The information, tools, and resources found on wishh.in are for educational and informational purposes only. They should not be considered as professional financial or investment advice. Our materials provide general guidance based on the information users provide. We cannot guarantee that this content is always accurate, complete, or suitable for your personal situation.

            Good financial planning and investment require looking at many personal financial factors. The tools and resources on wishh.in are designed to help you understand your financial journey. However, they should not be the only thing you use to create a full financial plan.

            We do our best to keep the information on wishh.in up-to-date and accurate, but it might not always match what you find on other financial websites, service providers, or specific product sites. All content and tools on wishh.in are provided without any guarantees or warranties.
          </p>
        </div>
      </footer>
    </>
  )
}
