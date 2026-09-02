"use client"
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import {HOME_QUERY} from '@/src/graphql/home'
import { useQuery } from "@apollo/client/react";
import { PageSkeleton } from '@/src/components/Skeletons';
import DynamicZone from '@/src/components/dynamic-zone';

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
            <DynamicZone data={data?.home?.content}/>
            
            <section className="container py-14 md:py-16 lg:py-20">
              <div className="reveal mx-auto max-w-3xl text-center is-visible">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  <span className="h-px w-4 bg-accent" />
                  Two doors, one platform{' '}
                </span>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">Buy minutes wholesale. Or run your whole business on us.</h2>
                <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.65] text-ink-muted">Most providers pick a side. We give carriers and developers raw, programmable infrastructure — and give businesses a polished product on top of the exact same network.</p>
              </div>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <article className="reveal relative flex flex-col rounded-3xl border p-8 md:p-10 border-transparent bg-[hsl(230_55%_7%)] text-[hsl(220_30%_98%)] is-visible" data-delay={0}>
                  <span className="font-mono text-sm text-[hsl(220_22%_55%)]">01</span>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-success">
                      <span className="h-px w-4 bg-success" />
                      Wholesale &amp; developers{' '}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.01em] md:text-3xl text-white">Infrastructure to build &amp; route on</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-[hsl(220_18%_78%)]">Direct interconnects, intelligent least-cost routing and a clean API. Buy and sell minutes, spin up SIP trunks, and embed calling into your product.</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-2.5 text-[14.5px] text-[hsl(220_22%_88%)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>{' '}
                      A-Z termination with CLI &amp; standard routes
                    </li>
                    <li className="flex items-start gap-2.5 text-[14.5px] text-[hsl(220_22%_88%)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>{' '}
                      Elastic SIP trunking, per-second billing
                    </li>
                    <li className="flex items-start gap-2.5 text-[14.5px] text-[hsl(220_22%_88%)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>{' '}
                      Programmable Voice API &amp; webhooks
                    </li>
                    <li className="flex items-start gap-2.5 text-[14.5px] text-[hsl(220_22%_88%)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>{' '}
                      Real-time CDRs, rate decks &amp; LCR
                    </li>
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
                    <a className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14.5px] font-medium transition-all active:scale-[0.98] bg-white text-ink-strong hover:bg-white/90" href="/pricing">
                      View the rate deck{' '}
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                    <a className="group inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-success" href="/contact?intent=test-route">
                      Request a test route{' '}
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
                <article className="reveal relative flex flex-col rounded-3xl border p-8 md:p-10 border-border bg-surface is-visible" data-delay={80}>
                  <span className="font-mono text-sm text-ink-subtle">02</span>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      <span className="h-px w-4 bg-accent" />
                      Retail &amp; business{' '}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.01em] md:text-3xl text-ink-strong">A phone system that just works</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-ink-muted">Replace legacy lines and clunky PBXs with a cloud phone system, contact centre and numbers your team can use today — on web, desktop and mobile.</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-2.5 text-[14.5px] text-ink">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>{' '}
                      Cloud phone system &amp; smart IVR
                    </li>
                    <li className="flex items-start gap-2.5 text-[14.5px] text-ink">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>{' '}
                      Contact centre: queues &amp; dialers
                    </li>
                    <li className="flex items-start gap-2.5 text-[14.5px] text-ink">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>{' '}
                      Local &amp; toll-free numbers worldwide
                    </li>
                    <li className="flex items-start gap-2.5 text-[14.5px] text-ink">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>{' '}
                      CRM &amp; 3CX integrations built in
                    </li>
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
                    <a className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14.5px] font-medium transition-all active:scale-[0.98] bg-accent text-accent-foreground hover:bg-accent-strong" href="/products">
                      See products{' '}
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                    <a className="group inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-accent" href="/demo">
                      Book a demo{' '}
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              </div>
            </section>
            <section className="bg-surface-muted/40 py-14 md:py-16 lg:py-20">
              <div className="container">
                <div className="reveal max-w-3xl is-visible">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    <span className="h-px w-4 bg-accent" />
                    The product line{' '}
                  </span>
                  <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">Everything voice, under one roof</h2>
                  <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-ink-muted">Eight building blocks — mix the wholesale infrastructure with the retail products, or take the whole stack. Violet is what you build on; green is what you run your business on.</p>
                </div>
                <div className="reveal mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 is-visible">
                  <a className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_hsl(var(--ink-strong)/0.3)]" href="/sip-trunk-service">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right absolute right-5 top-5 h-[18px] w-[18px] text-ink-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route h-[21px] w-[21px]">
                        <circle cx={6} cy={19} r={3} />
                        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                        <circle cx={18} cy={5} r={3} />
                      </svg>
                    </span>
                    <h4 className="mt-4 flex items-center gap-2 font-display text-lg font-medium tracking-[-0.01em] text-ink-strong">Wholesale Voice Termination</h4>
                    <p className="mt-2 flex-1 text-[13.5px] leading-[1.55] text-ink-muted">Carrier-grade A-Z termination with direct interconnects, real-time LCR and transparent DIDs.</p>
                    <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">A-Z routes · CLI &amp; standard</span>
                  </a>
                  <a className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_hsl(var(--ink-strong)/0.3)]" href="/sip-trunk-service">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right absolute right-5 top-5 h-[18px] w-[18px] text-ink-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network h-[21px] w-[21px]">
                        <rect x={16} y={16} width={6} height={6} rx={1} />
                        <rect x={2} y={16} width={6} height={6} rx={1} />
                        <rect x={9} y={2} width={6} height={6} rx={1} />
                        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                        <path d="M12 12V8" />
                      </svg>
                    </span>
                    <h4 className="mt-4 flex items-center gap-2 font-display text-lg font-medium tracking-[-0.01em] text-ink-strong">SIP Trunking</h4>
                    <p className="mt-2 flex-1 text-[13.5px] leading-[1.55] text-ink-muted">Production-ready SIP trunks with instant provisioning, failover and per-second billing.</p>
                    <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">Elastic · burstable channels</span>
                  </a>
                  <a className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_hsl(var(--ink-strong)/0.3)]" href="/agentflow">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right absolute right-5 top-5 h-[18px] w-[18px] text-ink-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml h-[21px] w-[21px]">
                        <path d="m18 16 4-4-4-4" />
                        <path d="m6 8-4 4 4 4" />
                        <path d="m14.5 4-5 16" />
                      </svg>
                    </span>
                    <h4 className="mt-4 flex items-center gap-2 font-display text-lg font-medium tracking-[-0.01em] text-ink-strong">Voice API</h4>
                    <p className="mt-2 flex-1 text-[13.5px] leading-[1.55] text-ink-muted">Build calling into any app — IVR, recording, conferencing and call control via clean APIs.</p>
                    <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">Programmable · REST + webhooks</span>
                  </a>
                  <a className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_hsl(var(--ink-strong)/0.3)]" href="/voip-setu">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right absolute right-5 top-5 h-[18px] w-[18px] text-ink-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-[21px] w-[21px]">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <h4 className="mt-4 flex items-center gap-2 font-display text-lg font-medium tracking-[-0.01em] text-ink-strong">Cloud Phone System</h4>
                    <p className="mt-2 flex-1 text-[13.5px] leading-[1.55] text-ink-muted">A full business phone system in the cloud. Extensions, IVR, voicemail-to-email, anywhere.</p>
                    <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-success">UCaaS · web · mobile · desk</span>
                  </a>
                  <a className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_hsl(var(--ink-strong)/0.3)]" href="/vora">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right absolute right-5 top-5 h-[18px] w-[18px] text-ink-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset h-[21px] w-[21px]">
                        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                        <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                      </svg>
                    </span>
                    <h4 className="mt-4 flex items-center gap-2 font-display text-lg font-medium tracking-[-0.01em] text-ink-strong">Contact Center</h4>
                    <p className="mt-2 flex-1 text-[13.5px] leading-[1.55] text-ink-muted">Queues, dialers, live wallboards, call scoring and CRM integrations your agents will use.</p>
                    <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-success">CCaaS · inbound + outbound</span>
                  </a>
                  <a className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_hsl(var(--ink-strong)/0.3)]" href="/numbers">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right absolute right-5 top-5 h-[18px] w-[18px] text-ink-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hash h-[21px] w-[21px]">
                        <line x1={4} x2={20} y1={9} y2={9} />
                        <line x1={4} x2={20} y1={15} y2={15} />
                        <line x1={10} x2={8} y1={3} y2={21} />
                        <line x1={16} x2={14} y1={3} y2={21} />
                      </svg>
                    </span>
                    <h4 className="mt-4 flex items-center gap-2 font-display text-lg font-medium tracking-[-0.01em] text-ink-strong">Virtual &amp; DID Numbers</h4>
                    <p className="mt-2 flex-1 text-[13.5px] leading-[1.55] text-ink-muted">Local, national and toll-free numbers worldwide — provisioned in minutes, portable in.</p>
                    <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-success">70+ countries · toll-free</span>
                  </a>
                  <a className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_hsl(var(--ink-strong)/0.3)]" href="/bulk-message-service">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right absolute right-5 top-5 h-[18px] w-[18px] text-ink-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square h-[21px] w-[21px]">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </span>
                    <h4 className="mt-4 flex items-center gap-2 font-display text-lg font-medium tracking-[-0.01em] text-ink-strong">Messaging &amp; SMS</h4>
                    <p className="mt-2 flex-1 text-[13.5px] leading-[1.55] text-ink-muted">Transactional and conversational messaging with high-deliverability A2P routes.</p>
                    <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-success">A2P · two-way · OTP</span>
                  </a>
                  <a className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_hsl(var(--ink-strong)/0.3)]" href="/products/threecx">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right absolute right-5 top-5 h-[18px] w-[18px] text-ink-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-puzzle h-[21px] w-[21px]">
                        <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
                      </svg>
                    </span>
                    <h4 className="mt-4 flex items-center gap-2 font-display text-lg font-medium tracking-[-0.01em] text-ink-strong">
                      3CX Add-ons <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-success">New</span>
                    </h4>
                    <p className="mt-2 flex-1 text-[13.5px] leading-[1.55] text-ink-muted">Bring-your-own-PBX? We're a 3CX Gold + Silver partner with billing, CRM bridges &amp; dashboards.</p>
                    <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-success">Certified SIP · click-to-call</span>
                  </a>
                </div>
              </div>
            </section>
            <section className="bg-[hsl(230_55%_7%)] py-14 text-[hsl(220_30%_98%)] md:py-16 lg:py-20">
              <div className="container">
                <div className="reveal max-w-3xl is-visible">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-success">
                    <span className="h-px w-4 bg-success" />
                    The network{' '}
                  </span>
                  <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-white text-balance">Carrier-grade reach, engineered in India.</h2>
                  <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-[hsl(220_18%_78%)]">Direct interconnects across continents, intelligent routing and a core built for five-nines. The same network powers a single startup call and a billion-minute carrier.</p>
                </div>
                <div className="reveal mt-12 grid gap-px overflow-hidden rounded-2xl border border-[hsl(230_25%_20%)] bg-[hsl(230_25%_20%)] sm:grid-cols-2 lg:grid-cols-4 is-visible">
                  <div className="bg-[hsl(230_55%_7%)] p-7">
                    <div className="font-display text-[clamp(2rem,3.4vw,3rem)] font-medium tracking-[-0.02em] text-white">
                      <span className="tabular-nums">
                        70 <span className="text-accent">+</span>
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Countries with numbers</div>
                    <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">local · toll-free · mobile</div>
                  </div>
                  <div className="bg-[hsl(230_55%_7%)] p-7">
                    <div className="font-display text-[clamp(2rem,3.4vw,3rem)] font-medium tracking-[-0.02em] text-white">
                      <span className="tabular-nums">
                        14 <span className="text-accent" />
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Live PoPs</div>
                    <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">direct, not resold</div>
                  </div>
                  <div className="bg-[hsl(230_55%_7%)] p-7">
                    <div className="font-display text-[clamp(2rem,3.4vw,3rem)] font-medium tracking-[-0.02em] text-white">
                      <span className="tabular-nums">
                        3.2 <span className="text-accent">B</span>
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Minutes routed / year</div>
                    <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">and climbing</div>
                  </div>
                  <div className="bg-[hsl(230_55%_7%)] p-7">
                    <div className="font-display text-[clamp(2rem,3.4vw,3rem)] font-medium tracking-[-0.02em] text-white">
                      <span className="tabular-nums">
                        99.994 <span className="text-accent">%</span>
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Network uptime</div>
                    <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">measured, not promised</div>
                  </div>
                </div>
                <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
                  <div className="reveal is-visible">
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-success">
                      <span className="h-px w-4 bg-success" />
                      Global advantage{' '}
                    </span>
                    <h3 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-medium tracking-[-0.02em] text-white">One network. Every continent.</h3>
                    <p className="mt-3 text-[15px] leading-[1.6] text-[hsl(220_18%_78%)]">Direct interconnects, intelligent least-cost routing and a five-nines core — with local number inventory in 70+ countries and billing in your currency.</p>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(230_25%_24%)] bg-[hsl(230_40%_11%)] px-3.5 py-1.5 text-[13px] text-[hsl(220_22%_88%)]">
                        <span>🌐</span> Numbers in 70+ countries{' '}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(230_25%_24%)] bg-[hsl(230_40%_11%)] px-3.5 py-1.5 text-[13px] text-[hsl(220_22%_88%)]">
                        <span>💳</span> Multi-currency billing{' '}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(230_25%_24%)] bg-[hsl(230_40%_11%)] px-3.5 py-1.5 text-[13px] text-[hsl(220_22%_88%)]">
                        <span>🛡️</span> STIR/SHAKEN &amp; CNAM{' '}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(230_25%_24%)] bg-[hsl(230_40%_11%)] px-3.5 py-1.5 text-[13px] text-[hsl(220_22%_88%)]">
                        <span>⚡</span> Direct Tier-1 interconnects{' '}
                      </span>
                    </div>
                  </div>
                  <div className="reveal space-y-5 is-visible" data-delay={80}>
                    <div className="flex gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-on-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-[19px] w-[19px]">
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                        </svg>
                      </span>
                      <div>
                        <b className="font-display text-[15px] font-medium text-white">vs. Twilio &amp; Vonage</b>
                        <p className="mt-1 text-[13.5px] leading-[1.55] text-[hsl(220_16%_64%)]">The same programmable infrastructure — without the portal-only support or the opaque markup on every leg.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-on-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-[19px] w-[19px]">
                          <circle cx={12} cy={12} r={10} />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                        </svg>
                      </span>
                      <div>
                        <b className="font-display text-[15px] font-medium text-white">vs. Telnyx &amp; Bandwidth</b>
                        <p className="mt-1 text-[13.5px] leading-[1.55] text-[hsl(220_16%_64%)]">Carrier reach and clean APIs, plus a retail product on top of the very same routes you build on.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-on-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset h-[19px] w-[19px]">
                          <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                          <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                        </svg>
                      </span>
                      <div>
                        <b className="font-display text-[15px] font-medium text-white">vs. RingCentral &amp; 8x8</b>
                        <p className="mt-1 text-[13.5px] leading-[1.55] text-[hsl(220_16%_64%)]">A full cloud phone system and contact centre, priced for teams that actually watch their voice bill.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-surface-muted/40 py-14 md:py-16 lg:py-20" id="pricing">
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
            </section>
            <section className="container py-10 md:py-14 lg:py-16">
              <div className="reveal relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-accent to-accent-strong p-10 text-center md:p-16 is-visible">
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(0_0%_100%/0.18),transparent_60%)]" />
                <div className="relative mx-auto max-w-2xl">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                    <span className="h-px w-4 bg-white/60" />
                    Get started{' '}
                  </span>
                  <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-medium leading-[1.06] tracking-[-0.02em] text-white text-balance">Wholesale or retail — you're live the same day.</h2>
                  <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.6] text-white/85">Create an account and route a test call in minutes, or talk to our team about dedicated routes, number porting and global compliance.</p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <a className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[15px] font-medium text-accent shadow-lg transition-all hover:shadow-xl active:scale-[0.98]" href="/contact?intent=test-route">
                      Request test minutes{' '}
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                    <a className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-[15px] font-medium text-white hover:bg-white/10 active:scale-[0.98] transition-all" href="/contact">
                      Talk to sales
                    </a>
                  </div>
                </div>
              </div>
            </section>
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
