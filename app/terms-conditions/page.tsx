
import { fetchMarkdownContent } from '@/utils/fetchmarkdown';
import { MDXRemote } from 'next-mdx-remote/rsc'


export default async function Page() {
  const filename = 'terms-conditions';
  
  const mdcontent = await fetchMarkdownContent(filename);

  

  try {
    
    return (
      <section id="home" className="mb-8 mx-auto w-full scroll-mt-17 overflow-hidden p-10 pt-6.5 lg:pt-7.5 xl:pt-9.5">
      <div className="w-full text-foreground text-justify prose mt-12 mb-12">
        <MDXRemote source={mdcontent} components={{
          h1: (props) => <h1 className="text-2xl font-bold text-foreground" {...props} />,
          h2: (props) => <h2 className="text-xl font-semibold text-foreground" {...props} />,
          h3: (props) => <h3 className="text-lg font-medium text-foreground" {...props} />,
          strong: (props) => <strong className="font-bold text-foreground" {...props} />,
          b: (props) => <b className="font-bold text-foreground" {...props} />,
          p: (props) => <p className="text-sm text-foreground" {...props} />,
          // Add custom styles for other elements as needed
        }} />
      </div>
      </section>
    );
} catch (error) {
  return (
    <div>
    <h1>Error </h1>
    < p > Failed to load content.</p>
      </div>
    );
}
}
