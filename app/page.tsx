"use client"
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import {HOME_QUERY} from '@/src/graphql/home'
import { useQuery } from "@apollo/client/react";
import { PageSkeleton } from '@/src/components/Skeletons';
import DynamicZoneProducts from '@/src/components/dynamic-zone/product';

export default function Home() {
  const { data, loading, error } = useQuery(HOME_QUERY);

  if (loading) return <PageSkeleton/>;
  if (error) return <p>Error</p>;
  // console.log(data?.home.content[0].)
  // console.log(data)

  // return null
  if(!data?.home) return <PageSkeleton/>
  return (
    <>
      <div>
        <GetTouch/>
        <div className="min-h-screen bg-background text-ink reveal-ready">
          <Header />
          <main>
            <DynamicZoneProducts data={data?.home?.content}/>
            
            
            
           
            {/* <section className="bg-surface-muted/40 py-14 md:py-16 lg:py-20" id="pricing">
              <div className="container">
                <div className="reveal mx-auto max-w-2xl text-center is-visible">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    <span className="h-px w-4 bg-accent" />
                    Pricing{' '}
                  </span>
                  <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">Pay for minutes. Or pay per seat.</h2>
                  <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-ink-muted">Wholesale buyers get transparent A-Z rate decks. Retail teams get simple per-user plans. Switch and see.</p>
                  <div className="mt-7 inline-flex rounded-full border border-border bg-surface p-1">
                    <button type="button" aria-pressed="true" className="rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors bg-accent text-accent-foreground">
                      Retail · per seat
                    </button>
                    <button type="button" aria-pressed="false" className="rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors text-ink-muted hover:text-ink">
                      Wholesale · per minute
                    </button>
                  </div>
                </div>
                <div className="mx-auto mt-10 max-w-4xl animate-in fade-in duration-300 rounded-3xl border border-border bg-surface p-7 shadow-[0_20px_60px_-40px_hsl(var(--ink)/0.45)] sm:p-9 md:p-11">
                  <div className="relative grid gap-9 md:grid-cols-2 md:gap-0">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-y-2 left-1/2 hidden w-px -translate-x-1/2 bg-border md:block" />
                    <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-subtle md:block">And</span>
                    <div className="text-center md:pr-10">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Retail plan</p>
                      <p className="mt-4 text-[13px] text-ink-muted">Starting at</p>
                      <div className="mt-1.5 flex items-end justify-center gap-1.5">
                        <span className="font-display text-[clamp(2.4rem,6vw,3.25rem)] font-medium leading-none tracking-[-0.02em] text-ink-strong">$15</span>
                        <span className="pb-1 text-[14px] text-ink-muted">/ month</span>
                      </div>
                      <p className="mx-auto mt-3 max-w-[19rem] text-[13.5px] leading-[1.6] text-ink-muted">Perfect for teams that need complete, reliable call management.</p>
                      <ul className="mx-auto mt-6 max-w-[19rem] space-y-2.5 border-t border-border pt-6 text-left text-[13.5px] text-ink">
                        <li className="flex items-start gap-2.5">
                          <span className="mt-[1px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-accent-soft">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3 w-3 text-accent-strong">
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          <span>All calling features included</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="mt-[1px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-accent-soft">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3 w-3 text-accent-strong">
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          <span>Mobile &amp; desktop apps</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="mt-[1px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-accent-soft">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3 w-3 text-accent-strong">
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          <span>Ideal for small &amp; growing teams</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center md:pl-10">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Numbers</p>
                      <p className="mt-4 text-[13px] text-ink-muted">Starting at</p>
                      <div className="mt-1.5 flex items-end justify-center gap-1.5">
                        <span className="font-display text-[clamp(2.4rem,6vw,3.25rem)] font-medium leading-none tracking-[-0.02em] text-ink-strong">$3</span>
                        <span className="pb-1 text-[14px] text-ink-muted">/ month</span>
                      </div>
                      <p className="mx-auto mt-3 max-w-[19rem] text-[13.5px] leading-[1.6] text-ink-muted">Toll-free and local numbers, live in 40+ countries.</p>
                      <ul className="mx-auto mt-6 max-w-[19rem] space-y-2.5 border-t border-border pt-6 text-left text-[13.5px] text-ink">
                        <li className="flex items-start gap-2.5">
                          <span className="mt-[1px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-accent-soft">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3 w-3 text-accent-strong">
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          <span>Toll-free &amp; local numbers</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="mt-[1px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-accent-soft">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3 w-3 text-accent-strong">
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          <span>Pay only for what you use</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="mt-[1px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-accent-soft">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3 w-3 text-accent-strong">
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          </span>
                          <span>Volume based discounts available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-[14.5px] font-medium text-accent-foreground transition-all hover:bg-accent-strong active:scale-[0.98] sm:min-w-[15rem]" href="/pricing">
                      Explore Full Pricing{' '}
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                    <a className="inline-flex items-center justify-center rounded-xl border border-border-strong bg-surface px-6 py-3 text-[14.5px] font-medium text-ink transition-all hover:border-ink active:scale-[0.98] sm:min-w-[15rem]" href="/demo">
                      Book a Demo
                    </a>
                  </div>
                </div>
                <p className="mt-6 text-center text-[13px] text-ink-subtle">All retail plans include unlimited extensions, mobile &amp; desktop apps, and pay-as-you-go calling on our own routes.</p>
                <div className="mx-auto mt-8 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex items-start gap-3 bg-surface px-5 py-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-4 w-4 text-accent-strong">
                        <circle cx={12} cy={12} r={10} />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13.5px] font-medium text-ink-strong">40+ countries</p>
                      <p className="mt-0.5 text-[12.5px] leading-[1.5] text-ink-muted">Local &amp; toll-free numbers worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-surface px-5 py-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-4 w-4 text-accent-strong">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13.5px] font-medium text-ink-strong">No hidden fees</p>
                      <p className="mt-0.5 text-[12.5px] leading-[1.5] text-ink-muted">Transparent pricing you can rely on</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-surface px-5 py-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset h-4 w-4 text-accent-strong">
                        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                        <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13.5px] font-medium text-ink-strong">24×7 support</p>
                      <p className="mt-0.5 text-[12.5px] leading-[1.5] text-ink-muted">Real humans. Real support.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-surface px-5 py-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-4 w-4 text-accent-strong">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13.5px] font-medium text-ink-strong">1000+ businesses</p>
                      <p className="mt-0.5 text-[12.5px] leading-[1.5] text-ink-muted">Trusted across BPO, BFSI &amp; SaaS</p>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

const GetTouch = () => {
  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 print:hidden md:bottom-6 md:right-6">
        <button type="button" aria-label="Chat with Sara" className="group flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_12px_32px_-8px_hsl(var(--accent)/0.65)] ring-1 ring-inset ring-white/30 transition-all hover:bg-accent-strong active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-6 w-6">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        </button>
      </div>
      <div className="fixed bottom-[5.5rem] right-4 z-40 print:hidden md:bottom-24 md:right-6">
        <button type="button" aria-label="Request a callback" className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-surface text-accent shadow-[0_12px_32px_-8px_hsl(var(--accent)/0.45)] ring-1 ring-inset ring-white/40 transition-all hover:bg-accent/5 hover:scale-105 active:scale-95" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:" data-state="closed">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-6 w-6">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
          </span>
        </button>
      </div>
    </>
  );
};
