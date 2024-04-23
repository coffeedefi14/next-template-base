import React from 'react'
import Image from "next/image"

export function Explain () {
    return (
        <>
        <section id="explain" className="pt-17.5 lg:pt-22.5 xl:pt-32.5 scroll-mt-17 mb-8 overflow-hidden">
          
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-12 lg:py-16">
            <div className="items-center justify-center text-center">
              <span className="hero-subtitle-gradient  relative mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <Image src="/images/explain/im-02.png" height={20} width={20} alt="icon" />
                <span className="text-foreground">
                What does the Tool do!
              </span>
              </span>
            </div>
            <div className="gap-7.5 grid sm:grid-cols-12" data-highlighter>
              
              <div className="sm:col-span-12">
            <div className="border-muted relative mb-6 rounded-3xl border">
              <div className="relative overflow-hidden rounded-3xl p-10 xl:p-10">
                <div className="relative z-20 flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between">
                  <div className="mb-6 w-full lg:mb-0 lg:mr-6 " >
                    {/*<span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">*/}
                    {/*  <Image src="/images/explain/icon-title.svg" height={20} width={20} alt="icon" />*/}
                    {/*  <span className="text-muted-foreground text-xs ">*/}
                    {/*    What does the Tool do!*/}
                    {/*  </span>*/}
                    {/*</span>*/}
                    <div className="flex flex-row items-start">
                      <div className="flex flex-col">
                        <h3 className="text-foreground mb-2 text-xl font-bold">Compatibility Assessment</h3>
                        <p className="text-foreground font-medium">Get useful insights about your financial preferences, attitudes, and goals. Compatibility score with your partner and analysis to identify areas of compatibility and potential conflicts.</p>
                      </div>
                      <span className="z-25 ml-4">
                        <Image src="/images/explain/im-01.png" height={200} width={400} alt="image" />
                      </span>
                    </div>

                  </div>
                </div>
              </div>



              
            </div>
            

          </div>
          <div className="mr-2 sm:col-span-6">
            <div className="border-muted relative rounded-3xl border">
                  <div className="pt-12.5 relative overflow-hidden rounded-3xl p-8 xl:p-10">
                <div className="relative z-20">
                      <span className="z-25 ml-4">
                        <Image src="/images/explain/im-01.png" height={20} width={40} alt="image" />
                      </span>

                      <h3 className="text-foreground mb-2 font-semibold">
                        Personalized Recommendations
                  </h3>
                      <p className="text-foreground font-medium">
                        Guidance to foster open communication and mutual understanding
                  </p>
                </div>


              </div>
            </div>
              </div>


              <div className="ml-2 sm:col-span-6">
                <div className="border-muted relative rounded-3xl border">
                  <div className="pt-12.5 relative overflow-hidden rounded-3xl p-8 xl:p-10">
                    <div className="relative z-20">
                      <span className="z-25 ml-4">
                        <Image src="/images/explain/im-01.png" height={20} width={40} alt="image" />
                      </span>

                      <h3 className="text-foreground mb-2 font-semibold">
                        Conflict Resolutions
                      </h3>
                      <p className="text-foreground font-medium">
                        Identify potential areas of conflict and ways to arrive at agreement
                      </p>
                    </div>

                    
                  </div>
                </div>
              </div>











            </div>
          </div>
        </section>

            </>
            )
            }
