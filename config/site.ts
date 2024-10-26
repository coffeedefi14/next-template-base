export type SiteConfig = typeof siteConfig


const home = process.env.NEXT_PUBLIC_SITE_BASEURL;
const api = process.env.NEXT_PUBLIC_SITE_API;
const blog = process.env.NEXT_PUBLIC_SITE_BLOG;

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
 links: {
    linkedin:"https://www.linkedin.com/company/wishhin",
    facebook:"https://twitter.com/shadcn",
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    api: api as string,
    app_name:"wishh/2.0",
     home: home as string,
    logo: `${home}/logo.png`,
    blog: blog as string,
  },
}
