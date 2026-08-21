import Image from "next/image";
import Header from "@/src/layout/Header";
import Navigation from '@/src/layout/Navigation/Navigation'

export default function Home() {
  return (
    <>
    <HomeTwo/>
    </>
  );
}






const HomeTwo = () =>{ 
  return (
    <>
     <div id="asdasdasdasdasdasdasd">
        <div role="region" aria-label="Notifications (F8)" tabIndex={-1} style={{pointerEvents: 'none'}}>
          <ol tabIndex={-1} className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
        </div>
        {/* <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" /> */}
        <div className="sticky top-0 z-[60] w-full border-b border-accent-strong/20 bg-gradient-to-r from-accent via-accent-strong to-accent text-accent-foreground print:hidden">
          <div className="container-prose flex items-center gap-3 py-2 text-[13px] leading-tight">
            <span className="hidden sm:inline-flex h-1.5 w-1.5 flex-none rounded-full bg-accent-foreground/90 animate-pulse" />
            <p className="flex-1 truncate">
              <span className="font-semibold">Test 10,000 minutes free</span>
              <span className="hidden sm:inline"> · sandbox API keys in 4 minutes · 180+ countries</span>
            </p>
            <a className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-accent-foreground/15 px-3 py-1 text-[12.5px] font-medium ring-1 ring-inset ring-accent-foreground/30 transition-colors hover:bg-accent-foreground/25" href="/quote">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-3.5 w-3.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>Get a quote </a>
            <a className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[12.5px] font-semibold text-accent-strong transition-colors hover:bg-white/90" href="/global/demo">Book demo <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-3.5 w-3.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <button type="button" aria-label="Dismiss" className="ml-1 rounded-md p-1 text-accent-foreground/80 transition-colors hover:bg-accent-foreground/15 hover:text-accent-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-3.5 w-3.5">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
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
        <div role="dialog" aria-label="Cookie preferences" className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-border bg-surface/95 p-5 shadow-2xl backdrop-blur-md md:inset-x-auto md:right-6 md:bottom-6 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm leading-relaxed text-ink-muted">
              <p className="font-medium text-ink-strong">We use cookies.</p>
              <p className="mt-1">Necessary cookies keep the site working. Analytics and marketing cookies help us improve and reach the right businesses. You can change this anytime. See our <a href="/legal/privacy" className="underline underline-offset-2">privacy policy</a>. </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-2">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground [&_svg]:transition-colors h-9 rounded-md px-3">Preferences</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Reject</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">Accept all</button>
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-background text-ink reveal-ready">
          <header className="sticky top-0 z-40 w-full transition-[background-color,backdrop-filter,border-color] duration-300 border-b border-transparent bg-transparent">
            <div className="border-b border-border bg-paper-warm/60">
              <div className="container-wide flex min-h-9 items-center justify-between gap-3 py-1 font-mono text-[12px] text-ink-muted sm:text-[12.5px]">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-ink-strong" />
                  <span className="truncate">
                    <span className="font-semibold uppercase tracking-[0.16em] text-ink-strong">Global</span>
                    <span className="text-ink-subtle"> · </span>
                    <span className="font-medium uppercase tracking-[0.14em] text-ink-strong">Team IHA INC</span>
                    <span className="hidden text-ink-subtle md:inline"> · </span>
                    <span className="hidden text-ink-muted md:inline">Global wholesale voice &amp; messaging</span>
                  </span>
                </div>
                <div className="flex flex-none items-center gap-4">
                  <a href="tel:18009221341" className="hidden text-[13px] font-medium hover:text-ink-strong sm:inline sm:text-[13.5px]">+1 800 922 1341</a>
                  <div role="group" aria-label="Select region" className="inline-flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5">
                    <span aria-current="page" className="inline-flex items-center gap-1.5 rounded-full bg-ink-strong font-semibold uppercase tracking-[0.1em] text-white px-2 py-1 text-[11px]">
                      <span role="img" aria-label="United States flag" className="fi fi-us inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] " style={{width: '13px', height: '10px', backgroundSize: 'cover'}} />Global </span>
                    <a className="inline-flex items-center gap-1.5 rounded-full font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink-strong px-2 py-1 text-[11px]" href="/india">
                      <span role="img" aria-label="India flag" className="fi fi-in inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] opacity-70" style={{width: '13px', height: '10px', backgroundSize: 'cover'}} />India </a>
                  </div>
                </div>
              </div>
            </div>
            <Navigation/>
          </header>
          <main>
            <section className="relative overflow-hidden">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[120%] bg-[radial-gradient(ellipse_110%_60%_at_70%_-10%,hsl(var(--accent)/0.10),transparent_60%)]" />
              <div className="container grid items-center gap-12 pt-12 pb-12 md:pt-16 md:pb-16 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="reveal is-visible">
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      <span className="h-px w-4 bg-accent" />One platform · wholesale + retail voice </span>
                  </div>
                  <h1 className="reveal mt-6 font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.025em] text-ink-strong text-balance is-visible" data-delay={60}>The voice network behind your <span className="text-accent">numbers</span>, minutes &amp; apps. </h1>
                  <p className="reveal mt-6 max-w-xl text-[clamp(1rem,1.3vw,1.18rem)] leading-[1.6] text-ink-muted text-pretty is-visible" data-delay={120}>Carrier-grade A-Z termination, SIP trunking and a programmable voice API for builders — plus a ready-to-run cloud phone system and contact centre for teams. <strong className="font-semibold text-ink-strong">Born in India. Routing the world.</strong>
                  </p>
                  <div className="reveal mt-9 flex flex-wrap items-center gap-3 is-visible" data-delay={180}>
                    <a className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[15px] font-medium text-accent-foreground shadow-[0_10px_30px_-12px_hsl(var(--accent)/0.7)] transition-all hover:bg-accent-strong active:scale-[0.98]" href="/contact?intent=test-route">Request a test route <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                    <a className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface px-6 py-3 text-[15px] font-medium text-ink hover:border-ink active:scale-[0.98] transition-all" href="/pricing">See live rates</a>
                  </div>
                  <div className="reveal mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-muted is-visible" data-delay={240}>
                    <span className="inline-flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg> No setup fees </span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg> Go live in minutes </span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg> STIR/SHAKEN ready </span>
                  </div>
                </div>
                <div className="reveal overflow-hidden rounded-[18px] border border-border bg-surface shadow-[0_30px_70px_-30px_hsl(var(--ink-strong)/0.25)] is-visible">
                  <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <span className="font-mono text-[11px] tracking-[0.04em] text-ink-muted">tc.network · live</span>
                    <div className="flex gap-1 rounded-full bg-surface-muted p-0.5">
                      <button type="button" className="rounded-full px-3 py-1 text-[11px] font-medium capitalize transition-colors bg-surface text-ink-strong shadow-sm">routes</button>
                      <button type="button" className="rounded-full px-3 py-1 text-[11px] font-medium capitalize transition-colors text-ink-muted hover:text-ink">status</button>
                    </div>
                  </div>
                  <div className="relative bg-[hsl(230_55%_7%)]">
                    <svg viewBox="0 0 460 188" preserveAspectRatio="xMidYMid slice" className="h-[188px] w-full">
                      <defs>
                        <radialGradient id="lnp-hub" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                        </radialGradient>
                      </defs>
                      <line x1={0} y1={0} x2={0} y2={188} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <line x1={57} y1={0} x2={57} y2={188} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <line x1={114} y1={0} x2={114} y2={188} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <line x1={171} y1={0} x2={171} y2={188} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <line x1={228} y1={0} x2={228} y2={188} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <line x1={285} y1={0} x2={285} y2={188} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <line x1={342} y1={0} x2={342} y2={188} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <line x1={399} y1={0} x2={399} y2={188} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <line x1={456} y1={0} x2={456} y2={188} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <line x1={0} y1={24} x2={460} y2={24} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <line x1={0} y1={71} x2={460} y2={71} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <line x1={0} y1={118} x2={460} y2={118} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <line x1={0} y1={165} x2={460} y2={165} stroke="hsl(230 30% 16%)" strokeWidth={1} />
                      <path d="M250 110 C 180 30, 90 40, 60 70" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.4" strokeOpacity="0.6" strokeDasharray="3 5">
                        <animate attributeName="stroke-dashoffset" from={0} to={-32} dur="1.6s" repeatCount="indefinite" />
                      </path>
                      <path d="M250 110 C 300 40, 360 50, 410 60" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.4" strokeOpacity="0.6" strokeDasharray="3 5">
                        <animate attributeName="stroke-dashoffset" from={0} to={-32} dur="1.9000000000000001s" repeatCount="indefinite" />
                      </path>
                      <path d="M250 110 C 200 150, 130 150, 95 130" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.4" strokeOpacity="0.6" strokeDasharray="3 5">
                        <animate attributeName="stroke-dashoffset" from={0} to={-32} dur="2.2s" repeatCount="indefinite" />
                      </path>
                      <path d="M250 110 C 320 150, 380 140, 405 120" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.4" strokeOpacity="0.6" strokeDasharray="3 5">
                        <animate attributeName="stroke-dashoffset" from={0} to={-32} dur="2.5s" repeatCount="indefinite" />
                      </path>
                      <circle cx={60} cy={70} r={3} fill="hsl(var(--success))" />
                      <circle cx={410} cy={60} r={3} fill="hsl(var(--success))" />
                      <circle cx={95} cy={130} r={3} fill="hsl(var(--success))" />
                      <circle cx={405} cy={120} r={3} fill="hsl(var(--success))" />
                      <circle cx={250} cy={110} r={34} fill="url(#lnp-hub)" />
                      <circle cx={250} cy={110} r={5} fill="#fff" />
                      <circle cx={250} cy={110} r={5} fill="none" stroke="hsl(var(--accent))">
                        <animate attributeName="r" from={5} to={22} dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.8" to={0} dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      <text x={250} y={132} fill="hsl(220 22% 64%)" fontSize={9} fontFamily="'JetBrains Mono', monospace" textAnchor="middle">MUM · CORE</text>
                    </svg>
                  </div>
                  <div className="divide-y divide-border">
                    <div className="grid grid-cols-[44px_1fr_auto_auto] items-center gap-3 px-4 py-2.5 text-[13px]">
                      <span className="font-mono font-medium text-accent">+1</span>
                      <span className="text-ink">US · Tier-1</span>
                      <span className="font-mono text-ink-strong">$0.0042/min</span>
                      <span className="font-mono text-ink-subtle">38ms</span>
                    </div>
                    <div className="grid grid-cols-[44px_1fr_auto_auto] items-center gap-3 px-4 py-2.5 text-[13px]">
                      <span className="font-mono font-medium text-accent">+44</span>
                      <span className="text-ink">UK · CLI</span>
                      <span className="font-mono text-ink-strong">$0.0061/min</span>
                      <span className="font-mono text-ink-subtle">44ms</span>
                    </div>
                    <div className="grid grid-cols-[44px_1fr_auto_auto] items-center gap-3 px-4 py-2.5 text-[13px]">
                      <span className="font-mono font-medium text-accent">+91</span>
                      <span className="text-ink">IN · Direct</span>
                      <span className="font-mono text-ink-strong">$0.0089/min</span>
                      <span className="font-mono text-ink-subtle">52ms</span>
                    </div>
                    <div className="grid grid-cols-[44px_1fr_auto_auto] items-center gap-3 px-4 py-2.5 text-[13px]">
                      <span className="font-mono font-medium text-accent">+971</span>
                      <span className="text-ink">AE · CLI</span>
                      <span className="font-mono text-ink-strong">$0.1120/min</span>
                      <span className="font-mono text-ink-subtle">61ms</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-border bg-surface-muted/60 px-4 py-2.5 text-[11px] text-ink-muted">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />4 of 240+ routes shown </span>
                    <span className="font-mono">99.994% uptime</span>
                  </div>
                </div>
              </div>
              <div className="border-y border-border bg-surface-muted/40 py-6">
                <div className="container mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle">Trusted by carriers &amp; teams routing on our network</span>
                </div>
                <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
                  <div className="flex w-max gap-12 animate-[home-marquee_38s_linear_infinite] group-hover:[animation-play-state:paused]">
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />IATA (India) </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Northeast Support Services </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />ANS Software Solution </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Avyukta Intellicall </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />In Technologies </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Transway Transport </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Globilinks Cloud Services </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Career Plus Immigration </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Book Asia Travels </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Target Tours (India) </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />TechBridge Consultancy </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Piezel LLC </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />IATA (India) </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Northeast Support Services </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />ANS Software Solution </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Avyukta Intellicall </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />In Technologies </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Transway Transport </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Globilinks Cloud Services </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Career Plus Immigration </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Book Asia Travels </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Target Tours (India) </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />TechBridge Consultancy </span>
                    <span className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                      <span className="h-2 w-2 rounded-sm bg-accent/40" />Piezel LLC </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="container py-14 md:py-16 lg:py-20">
              <div className="reveal mx-auto max-w-3xl text-center is-visible">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  <span className="h-px w-4 bg-accent" />Two doors, one platform </span>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">Buy minutes wholesale. Or run your whole business on us.</h2>
                <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.65] text-ink-muted">Most providers pick a side. We give carriers and developers raw, programmable infrastructure — and give businesses a polished product on top of the exact same network.</p>
              </div>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <article className="reveal relative flex flex-col rounded-3xl border p-8 md:p-10 border-transparent bg-[hsl(230_55%_7%)] text-[hsl(220_30%_98%)] is-visible" data-delay={0}>
                  <span className="font-mono text-sm text-[hsl(220_22%_55%)]">01</span>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-success">
                      <span className="h-px w-4 bg-success" />Wholesale &amp; developers </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.01em] md:text-3xl text-white">Infrastructure to build &amp; route on</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-[hsl(220_18%_78%)]">Direct interconnects, intelligent least-cost routing and a clean API. Buy and sell minutes, spin up SIP trunks, and embed calling into your product.</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-2.5 text-[14.5px] text-[hsl(220_22%_88%)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg> A-Z termination with CLI &amp; standard routes
                    </li>
                    <li className="flex items-start gap-2.5 text-[14.5px] text-[hsl(220_22%_88%)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg> Elastic SIP trunking, per-second billing
                    </li>
                    <li className="flex items-start gap-2.5 text-[14.5px] text-[hsl(220_22%_88%)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg> Programmable Voice API &amp; webhooks
                    </li>
                    <li className="flex items-start gap-2.5 text-[14.5px] text-[hsl(220_22%_88%)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg> Real-time CDRs, rate decks &amp; LCR
                    </li>
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
                    <a className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14.5px] font-medium transition-all active:scale-[0.98] bg-white text-ink-strong hover:bg-white/90" href="/pricing">View the rate deck <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                    <a className="group inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-success" href="/contact?intent=test-route">Request a test route <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5">
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
                      <span className="h-px w-4 bg-accent" />Retail &amp; business </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.01em] md:text-3xl text-ink-strong">A phone system that just works</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-ink-muted">Replace legacy lines and clunky PBXs with a cloud phone system, contact centre and numbers your team can use today — on web, desktop and mobile.</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-2.5 text-[14.5px] text-ink">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg> Cloud phone system &amp; smart IVR
                    </li>
                    <li className="flex items-start gap-2.5 text-[14.5px] text-ink">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg> Contact centre: queues &amp; dialers
                    </li>
                    <li className="flex items-start gap-2.5 text-[14.5px] text-ink">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg> Local &amp; toll-free numbers worldwide
                    </li>
                    <li className="flex items-start gap-2.5 text-[14.5px] text-ink">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                        <path d="M20 6 9 17l-5-5" />
                      </svg> CRM &amp; 3CX integrations built in
                    </li>
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
                    <a className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14.5px] font-medium transition-all active:scale-[0.98] bg-accent text-accent-foreground hover:bg-accent-strong" href="/products">See products <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                    <a className="group inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-accent" href="/demo">Book a demo <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5">
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
                    <span className="h-px w-4 bg-accent" />The product line </span>
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
                    <h4 className="mt-4 flex items-center gap-2 font-display text-lg font-medium tracking-[-0.01em] text-ink-strong">3CX Add-ons <span className="rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-success">New</span>
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
                    <span className="h-px w-4 bg-success" />The network </span>
                  <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-white text-balance">Carrier-grade reach, engineered in India.</h2>
                  <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-[hsl(220_18%_78%)]">Direct interconnects across continents, intelligent routing and a core built for five-nines. The same network powers a single startup call and a billion-minute carrier.</p>
                </div>
                <div className="reveal mt-12 grid gap-px overflow-hidden rounded-2xl border border-[hsl(230_25%_20%)] bg-[hsl(230_25%_20%)] sm:grid-cols-2 lg:grid-cols-4 is-visible">
                  <div className="bg-[hsl(230_55%_7%)] p-7">
                    <div className="font-display text-[clamp(2rem,3.4vw,3rem)] font-medium tracking-[-0.02em] text-white">
                      <span className="tabular-nums">70 <span className="text-accent">+</span>
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Countries with numbers</div>
                    <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">local · toll-free · mobile</div>
                  </div>
                  <div className="bg-[hsl(230_55%_7%)] p-7">
                    <div className="font-display text-[clamp(2rem,3.4vw,3rem)] font-medium tracking-[-0.02em] text-white">
                      <span className="tabular-nums">14 <span className="text-accent" />
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Live PoPs</div>
                    <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">direct, not resold</div>
                  </div>
                  <div className="bg-[hsl(230_55%_7%)] p-7">
                    <div className="font-display text-[clamp(2rem,3.4vw,3rem)] font-medium tracking-[-0.02em] text-white">
                      <span className="tabular-nums">3.2 <span className="text-accent">B</span>
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Minutes routed / year</div>
                    <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">and climbing</div>
                  </div>
                  <div className="bg-[hsl(230_55%_7%)] p-7">
                    <div className="font-display text-[clamp(2rem,3.4vw,3rem)] font-medium tracking-[-0.02em] text-white">
                      <span className="tabular-nums">99.994 <span className="text-accent">%</span>
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Network uptime</div>
                    <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">measured, not promised</div>
                  </div>
                </div>
                <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
                  <div className="reveal is-visible">
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-success">
                      <span className="h-px w-4 bg-success" />Global advantage </span>
                    <h3 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-medium tracking-[-0.02em] text-white">One network. Every continent.</h3>
                    <p className="mt-3 text-[15px] leading-[1.6] text-[hsl(220_18%_78%)]">Direct interconnects, intelligent least-cost routing and a five-nines core — with local number inventory in 70+ countries and billing in your currency.</p>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(230_25%_24%)] bg-[hsl(230_40%_11%)] px-3.5 py-1.5 text-[13px] text-[hsl(220_22%_88%)]">
                        <span>🌐</span> Numbers in 70+ countries </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(230_25%_24%)] bg-[hsl(230_40%_11%)] px-3.5 py-1.5 text-[13px] text-[hsl(220_22%_88%)]">
                        <span>💳</span> Multi-currency billing </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(230_25%_24%)] bg-[hsl(230_40%_11%)] px-3.5 py-1.5 text-[13px] text-[hsl(220_22%_88%)]">
                        <span>🛡️</span> STIR/SHAKEN &amp; CNAM </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(230_25%_24%)] bg-[hsl(230_40%_11%)] px-3.5 py-1.5 text-[13px] text-[hsl(220_22%_88%)]">
                        <span>⚡</span> Direct Tier-1 interconnects </span>
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
                    <span className="h-px w-4 bg-accent" />Pricing </span>
                  <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">Pay for minutes. Or pay per seat.</h2>
                  <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-ink-muted">Wholesale buyers get transparent A-Z rate decks. Retail teams get simple per-user plans. Switch and see.</p>
                  <div className="mt-7 inline-flex rounded-full border border-border bg-surface p-1">
                    <button type="button" aria-pressed="true" className="rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors bg-accent text-accent-foreground">Retail · per seat</button>
                    <button type="button" aria-pressed="false" className="rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors text-ink-muted hover:text-ink">Wholesale · per minute</button>
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
                    <a className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-[14.5px] font-medium text-accent-foreground transition-all hover:bg-accent-strong active:scale-[0.98] sm:min-w-[15rem]" href="/pricing">Explore Full Pricing <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                    <a className="inline-flex items-center justify-center rounded-xl border border-border-strong bg-surface px-6 py-3 text-[14.5px] font-medium text-ink transition-all hover:border-ink active:scale-[0.98] sm:min-w-[15rem]" href="/demo">Book a Demo</a>
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
                    <span className="h-px w-4 bg-white/60" />Get started </span>
                  <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-medium leading-[1.06] tracking-[-0.02em] text-white text-balance">Wholesale or retail — you're live the same day.</h2>
                  <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.6] text-white/85">Create an account and route a test call in minutes, or talk to our team about dedicated routes, number porting and global compliance.</p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <a className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[15px] font-medium text-accent shadow-lg transition-all hover:shadow-xl active:scale-[0.98]" href="/contact?intent=test-route">Request test minutes <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                    <a className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-[15px] font-medium text-white hover:bg-white/10 active:scale-[0.98] transition-all" href="/contact">Talk to sales</a>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="mt-10 border-t border-border bg-surface-muted/60 md:mt-12 lg:mt-14">
            <div className="container-wide py-12 md:py-16">
              <div className="flex flex-col gap-6 border-b border-border pb-10 sm:flex-row sm:items-center sm:justify-between">
                <a className="inline-flex items-center " aria-label="The Telephony Co — Every call matters" href="/">
                  <img src="https://tornadodialer.net/assets/images/Logo.svg" alt="The Telephony Co" className="h-10 w-auto md:h-11 " loading="eager" decoding="async" />
                </a>
                <div className="flex items-center gap-2 text-sm">
                  <span className="eyebrow mr-1">Region</span>
                  <a className="rounded-lg border px-3 py-1.5 transition-colors border-border text-ink-muted hover:border-ink hover:text-ink-strong" href="/india">India</a>
                  <a className="rounded-lg border px-3 py-1.5 transition-colors border-ink bg-ink text-paper" href="/">Global</a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-12 sm:grid-cols-3 lg:grid-cols-6">
                <div>
                  <p className="eyebrow mb-4">Products</p>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact-center">Contact Center</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/call-tracking-software">Call Tracking Software</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/agentflow">AgentFlow</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/vora">Vora AI Contact Center</a>
                    </li>
                  </ul>
                  <a className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink-strong transition-colors hover:text-ink" href="/products">Explore more products <span aria-hidden="true">→</span>
                  </a>
                </div>
                <div>
                  <p className="eyebrow mb-4">Phone Numbers</p>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/business-phone-number">Business Phone Number</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/toll-free-numbers">Toll-Free Numbers</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/local-numbers">Local Numbers</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/virtual-phone-number">Virtual Phone Number</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/vanity-numbers">Vanity Numbers</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-4">Industries</p>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/industries">All Industries</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/insurance-contact-center-software">Insurance</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/banking-and-finance-contact-center-software">Banking &amp; Finance</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact-center-software-for-healthcare-industry">Healthcare</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/e-commerce-industry-contact-center-software">E-Commerce</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact-center-software-for-enterprise">Enterprise</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact-center-software-for-bpo">BPO</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/pbx-software-for-enterprise">PBX Enterprise</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-4">Resources</p>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/blog">Blog</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/features">Features</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/industries">Industries</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/case-study">Case Studies</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/voip-glossary">VoIP Glossary</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/pay-invoice">Pay Your Invoice</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-4">Company</p>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/about">About Us</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/our-team">Our Team</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/awards">Awards</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/careers">Careers</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/coverage">Coverage</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/customers">Customers</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/partners">Partners</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-4">Policy Center</p>
                  <ul className="space-y-2.5 text-sm">
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/terms-conditions">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/refund-and-cancelation-policy">Refund &amp; Cancelation Policy</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/fair-usage-policy">Fair Usage Policy</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/robocall-mitigation-plan">Robocall Mitigation Plan</a>
                    </li>
                    <li>
                      <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/report-abuse">Report Abuse</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-14 grid gap-x-8 gap-y-8 border-t border-border pt-12 md:grid-cols-3 lg:grid-cols-4">
                <div className="md:col-span-1">
                  <p className="eyebrow mb-4">Head Office</p>
                  <div className="flex items-start gap-3 text-sm text-ink-muted">
                    <span aria-hidden="true" className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-ink text-paper">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                        <path d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" strokeLinejoin="round" />
                        <circle cx={12} cy={10} r="2.5" />
                      </svg>
                    </span>
                    <p className="leading-relaxed">The Telephony Co <br />1201 North Market Street, Suite 111-L91, <br />Wilmington, DE 19801 </p>
                  </div>
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                  <p className="eyebrow mb-4">Call Us</p>
                  <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                    <li className="flex items-start gap-3">
                      <span role="img" aria-label="United States flag" className="fi fi-us inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{width: '24px', height: '18px', backgroundSize: 'cover'}} />
                      <span className="text-sm">
                        <a href="tel:18009221341" className="font-medium text-ink-strong transition-colors hover:text-ink">1800 922 1341</a>
                        <span className="mt-0.5 block text-xs text-ink-muted">Toll Free Customer Service (24×7)</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span role="img" aria-label="United States flag" className="fi fi-us inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{width: '24px', height: '18px', backgroundSize: 'cover'}} />
                      <span className="text-sm">
                        <a href="tel:13322060666" className="font-medium text-ink-strong transition-colors hover:text-ink">+1 332 206 0666</a>
                        <span className="mt-0.5 block text-xs text-ink-muted">Office (9:00 AM to 6:00 PM)</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span role="img" aria-label="United Kingdom flag" className="fi fi-gb inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{width: '24px', height: '18px', backgroundSize: 'cover'}} />
                      <span className="text-sm">
                        <a href="tel:448002294882" className="font-medium text-ink-strong transition-colors hover:text-ink">+44 800 229 4882</a>
                        <span className="mt-0.5 block text-xs text-ink-muted">United Kingdom</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span role="img" aria-label="Australia flag" className="fi fi-au inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{width: '24px', height: '18px', backgroundSize: 'cover'}} />
                      <span className="text-sm">
                        <a href="tel:611800716800" className="font-medium text-ink-strong transition-colors hover:text-ink">+61 1800 716 800</a>
                        <span className="mt-0.5 block text-xs text-ink-muted">Australia</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span role="img" aria-label="India flag" className="fi fi-in inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{width: '24px', height: '18px', backgroundSize: 'cover'}} />
                      <span className="text-sm">
                        <a href="tel:18002122006" className="font-medium text-ink-strong transition-colors hover:text-ink">1800 212 2006</a>
                        <span className="mt-0.5 block text-xs text-ink-muted">India</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-ink-muted md:flex-row md:items-center">
                <p>© 2026 The Telephony Co. All rights reserved.</p>
                <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <li>
                    <a href="https://www.facebook.com/thetelephony.co/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">Facebook</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/thetelephonyco" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">Twitter / X</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/thetelephonyco/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/thetelephonyco/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

const HomeOne = () => {
  return (
    <>
    <div role="region" aria-label="Notifications (F8)" tabIndex={-1} style={{pointerEvents: 'none'}}>
    <ol tabIndex={-1} className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]" />
  </div>
  <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" />
  <div className="sticky top-0 z-[60] w-full border-b border-accent-strong/20 bg-gradient-to-r from-accent via-accent-strong to-accent text-accent-foreground print:hidden">
    <div className="container-prose flex items-center gap-3 py-2 text-[13px] leading-tight">
      <span className="hidden sm:inline-flex h-1.5 w-1.5 flex-none rounded-full bg-accent-foreground/90 animate-pulse" />
      <p className="flex-1 truncate">
        <span className="font-semibold">Test 10,000 minutes free</span>
        <span className="hidden sm:inline"> · sandbox API keys in 4 minutes · 180+ countries</span>
      </p>
      <a className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-accent-foreground/15 px-3 py-1 text-[12.5px] font-medium ring-1 ring-inset ring-accent-foreground/30 transition-colors hover:bg-accent-foreground/25" href="/quote">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-3.5 w-3.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>Get a quote </a>
      <a className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[12.5px] font-semibold text-accent-strong transition-colors hover:bg-white/90" href="/global/demo">Book demo <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-3.5 w-3.5">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
      <button type="button" aria-label="Dismiss" className="ml-1 rounded-md p-1 text-accent-foreground/80 transition-colors hover:bg-accent-foreground/15 hover:text-accent-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-3.5 w-3.5">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  </div>
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
        <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" /></span>
    </button>
  </div>
  <div role="dialog" aria-label="Cookie preferences" className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-border bg-surface/95 p-5 shadow-2xl backdrop-blur-md md:inset-x-auto md:right-6 md:bottom-6 md:p-6">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="text-sm leading-relaxed text-ink-muted">
        <p className="font-medium text-ink-strong">We use cookies.</p>
        <p className="mt-1">Necessary cookies keep the site working. Analytics and marketing cookies help us improve and reach the right businesses. You can change this anytime. See our <a href="/legal/privacy" className="underline underline-offset-2">privacy policy</a>. </p>
      </div>
      <div className="flex flex-shrink-0 flex-wrap gap-2">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground [&_svg]:transition-colors h-9 rounded-md px-3">Preferences</button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Reject</button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">Accept all</button>
      </div>
    </div>
  </div>
  <div className="min-h-screen bg-background reveal-ready">
    <header className="sticky top-0 z-40 w-full transition-[background-color,backdrop-filter,border-color] duration-300 border-b border-transparent bg-transparent">
      <div className="border-b border-border bg-paper-warm/60">
        <div className="container-wide flex min-h-9 items-center justify-between gap-3 py-1 font-mono text-[12px] text-ink-muted sm:text-[12.5px]">
          <div className="flex min-w-0 items-center gap-3">
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-ink-strong" />
            <span className="truncate">
              <span className="font-semibold uppercase tracking-[0.16em] text-ink-strong">Global</span>
              <span className="text-ink-subtle"> · </span>
              <span className="font-medium uppercase tracking-[0.14em] text-ink-strong">Team IHA INC</span>
              <span className="hidden text-ink-subtle md:inline"> · </span>
              <span className="hidden text-ink-muted md:inline">Global wholesale voice &amp; messaging</span>
            </span>
          </div>
          <div className="flex flex-none items-center gap-4">
            <a href="tel:18009221341" className="hidden text-[13px] font-medium hover:text-ink-strong sm:inline sm:text-[13.5px]">+1 800 922 1341</a>
            <div role="group" aria-label="Select region" className="inline-flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5">
              <span aria-current="page" className="inline-flex items-center gap-1.5 rounded-full bg-ink-strong font-semibold uppercase tracking-[0.1em] text-white px-2 py-1 text-[11px]">
                <span role="img" aria-label="United States flag" className="fi fi-us inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] " style={{width: '13px', height: '10px', backgroundSize: 'cover'}} />Global</span>
              <a className="inline-flex items-center gap-1.5 rounded-full font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink-strong px-2 py-1 text-[11px]" href="/india">
                <span role="img" aria-label="India flag" className="fi fi-in inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] opacity-70" style={{width: '13px', height: '10px', backgroundSize: 'cover'}} />India </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <a className="inline-flex items-center " aria-label="The Telephony Co — Every call matters" href="/">
          <img src="https://tornadodialer.net/assets/images/Logo.svg" alt="The Telephony Co" className="h-10 w-auto md:h-11 " loading="eager" decoding="async" />
        </a>
        <nav className="hidden items-center gap-0.5 lg:flex">
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-strong">Products &amp; Services <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="invisible absolute top-full z-50 left-0 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100" style={{width: '840px', maxWidth: 'calc(-2rem + 100vw)'}}>
              <div className="rounded-2xl border border-border bg-paper p-2.5 shadow-[0_24px_60px_-24px_hsl(var(--ink)/0.35)]">
                <div className="flex gap-2">
                  <div className="w-[272px] flex-none border-r border-border pr-2">
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors bg-surface-muted" href="/business-phone-number">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-accent-soft text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hash h-[17px] w-[17px]" aria-hidden="true">
                          <line x1={4} x2={20} y1={9} y2={9} />
                          <line x1={4} x2={20} y1={15} y2={15} />
                          <line x1={10} x2={8} y1={3} y2={21} />
                          <line x1={16} x2={14} y1={3} y2={21} />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Business Phone Numbers</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-accent">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <button type="button" className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Cloud Telephony</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                    <button type="button" className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Messaging Services</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                    <button type="button" className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-[17px] w-[17px]" aria-hidden="true">
                          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Other Products &amp; Services</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="grid gap-0.5 grid-cols-1">
                      <a className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted" href="/toll-free-numbers">
                        <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-surface-muted text-ink-strong transition-colors group-hover/item:bg-accent-soft group-hover/item:text-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call h-[18px] w-[18px]" aria-hidden="true">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                            <path d="M14.05 6A5 5 0 0 1 18 10" />
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink-strong">Toll-Free Numbers</span>
                          <span className="mt-0.5 block line-clamp-2 text-[12px] leading-snug text-ink-muted">1800 numbers customers call for free.</span>
                        </span>
                      </a>
                      <a className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted" href="/local-numbers">
                        <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-surface-muted text-ink-strong transition-colors group-hover/item:bg-accent-soft group-hover/item:text-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-[18px] w-[18px]" aria-hidden="true">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                            <circle cx={12} cy={10} r={3} />
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink-strong">Local Numbers</span>
                          <span className="mt-0.5 block line-clamp-2 text-[12px] leading-snug text-ink-muted">City &amp; country DIDs in 70+ markets.</span>
                        </span>
                      </a>
                      <a className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted" href="/virtual-phone-number">
                        <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-surface-muted text-ink-strong transition-colors group-hover/item:bg-accent-soft group-hover/item:text-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone h-[18px] w-[18px]" aria-hidden="true">
                            <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
                            <path d="M12 18h.01" />
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink-strong">Virtual Phone Number</span>
                          <span className="mt-0.5 block line-clamp-2 text-[12px] leading-snug text-ink-muted">Cloud numbers that ring any device.</span>
                        </span>
                      </a>
                      <a className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted" href="/vanity-numbers">
                        <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-surface-muted text-ink-strong transition-colors group-hover/item:bg-accent-soft group-hover/item:text-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-[18px] w-[18px]" aria-hidden="true">
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                            <path d="M20 3v4" />
                            <path d="M22 5h-4" />
                            <path d="M4 17v2" />
                            <path d="M5 18H3" />
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink-strong">Vanity Numbers</span>
                          <span className="mt-0.5 block line-clamp-2 text-[12px] leading-snug text-ink-muted">Memorable, brandable phone numbers.</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <a className="mt-2 flex items-center justify-between rounded-xl bg-surface-muted px-4 py-3 text-sm font-semibold text-ink-strong transition-colors hover:bg-accent-soft hover:text-accent" href="/products">View all products &amp; services <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-strong">Features <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="invisible absolute top-full z-50 left-0 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100" style={{width: '800px', maxWidth: 'calc(-2rem + 100vw)'}}>
              <div className="rounded-2xl border border-border bg-paper p-2.5 shadow-[0_24px_60px_-24px_hsl(var(--ink)/0.35)]">
                <div className="flex gap-2">
                  <div className="w-[272px] flex-none border-r border-border pr-2">
                    <button type="button" className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors bg-surface-muted">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-accent-soft text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-vertical h-[17px] w-[17px]" aria-hidden="true">
                          <line x1={4} x2={4} y1={21} y2={14} />
                          <line x1={4} x2={4} y1={10} y2={3} />
                          <line x1={12} x2={12} y1={21} y2={12} />
                          <line x1={12} x2={12} y1={8} y2={3} />
                          <line x1={20} x2={20} y1={21} y2={16} />
                          <line x1={20} x2={20} y1={12} y2={3} />
                          <line x1={2} x2={6} y1={14} y2={14} />
                          <line x1={10} x2={14} y1={8} y2={8} />
                          <line x1={18} x2={22} y1={16} y2={16} />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Call Management</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-accent">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                    <button type="button" className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Supervision &amp; Coaching</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                    <button type="button" className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Routing &amp; Privacy</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                    <button type="button" className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M14 4.1 12 6" />
                          <path d="m5.1 8-2.9-.8" />
                          <path d="m6 12-1.9 2" />
                          <path d="M7.2 2.2 8 5.1" />
                          <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Engagement</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="grid gap-0.5 grid-cols-1">
                      <a className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted" href="/call-management-software">
                        <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-surface-muted text-ink-strong transition-colors group-hover/item:bg-accent-soft group-hover/item:text-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-vertical h-[18px] w-[18px]" aria-hidden="true">
                            <line x1={4} x2={4} y1={21} y2={14} />
                            <line x1={4} x2={4} y1={10} y2={3} />
                            <line x1={12} x2={12} y1={21} y2={12} />
                            <line x1={12} x2={12} y1={8} y2={3} />
                            <line x1={20} x2={20} y1={21} y2={16} />
                            <line x1={20} x2={20} y1={12} y2={3} />
                            <line x1={2} x2={6} y1={14} y2={14} />
                            <line x1={10} x2={14} y1={8} y2={8} />
                            <line x1={18} x2={22} y1={16} y2={16} />
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink-strong">Call Management Software</span>
                          <span className="mt-0.5 block line-clamp-2 text-[12px] leading-snug text-ink-muted">Route, record, monitor and report on every call from one unified control panel.</span>
                        </span>
                      </a>
                      <a className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted" href="/call-recording-software">
                        <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-surface-muted text-ink-strong transition-colors group-hover/item:bg-accent-soft group-hover/item:text-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-disc h-[18px] w-[18px]" aria-hidden="true">
                            <circle cx={12} cy={12} r={10} />
                            <circle cx={12} cy={12} r={2} />
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink-strong">Call Recording Software</span>
                          <span className="mt-0.5 block line-clamp-2 text-[12px] leading-snug text-ink-muted">Record 100% of calls with searchable transcripts, tagging and compliant retention.</span>
                        </span>
                      </a>
                      <a className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted" href="/call-log-monitor">
                        <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-surface-muted text-ink-strong transition-colors group-hover/item:bg-accent-soft group-hover/item:text-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list h-[18px] w-[18px]" aria-hidden="true">
                            <path d="M3 12h.01" />
                            <path d="M3 18h.01" />
                            <path d="M3 6h.01" />
                            <path d="M8 12h13" />
                            <path d="M8 18h13" />
                            <path d="M8 6h13" />
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink-strong">Call Log Monitor</span>
                          <span className="mt-0.5 block line-clamp-2 text-[12px] leading-snug text-ink-muted">Every inbound and outbound call logged, searchable and reportable in real time.</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <a className="mt-2 flex items-center justify-between rounded-xl bg-surface-muted px-4 py-3 text-sm font-semibold text-ink-strong transition-colors hover:bg-accent-soft hover:text-accent" href="/features">View all features <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-strong">Industries <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="invisible absolute top-full z-50 left-0 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100" style={{width: '640px', maxWidth: 'calc(-2rem + 100vw)'}}>
              <div className="rounded-2xl border border-border bg-paper p-2.5 shadow-[0_24px_60px_-24px_hsl(var(--ink)/0.35)]">
                <div className="flex gap-2">
                  <div className="w-[272px] flex-none border-r border-border pr-2">
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors bg-surface-muted" href="/insurance-contact-center-software">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-accent-soft text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Insurance</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-accent">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/banking-and-finance-contact-center-software">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark h-[17px] w-[17px]" aria-hidden="true">
                          <line x1={3} x2={21} y1={22} y2={22} />
                          <line x1={6} x2={6} y1={18} y2={11} />
                          <line x1={10} x2={10} y1={18} y2={11} />
                          <line x1={14} x2={14} y1={18} y2={11} />
                          <line x1={18} x2={18} y1={18} y2={11} />
                          <polygon points="12 2 20 7 4 7" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Banking &amp; Finance</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/contact-center-software-for-healthcare-industry">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Healthcare</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/e-commerce-industry-contact-center-software">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart h-[17px] w-[17px]" aria-hidden="true">
                          <circle cx={8} cy={21} r={1} />
                          <circle cx={19} cy={21} r={1} />
                          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">E-Commerce</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/contact-center-software-for-enterprise">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                          <path d="M10 6h4" />
                          <path d="M10 10h4" />
                          <path d="M10 14h4" />
                          <path d="M10 18h4" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Enterprise</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/contact-center-software-for-bpo">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                          <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">BPO</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/pbx-software-for-enterprise">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network h-[17px] w-[17px]" aria-hidden="true">
                          <rect x={16} y={16} width={6} height={6} rx={1} />
                          <rect x={2} y={16} width={6} height={6} rx={1} />
                          <rect x={9} y={2} width={6} height={6} rx={1} />
                          <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                          <path d="M12 12V8" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">PBX Enterprise</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex h-full flex-col justify-center px-4 py-6">
                      <span className="text-base font-semibold text-ink-strong">Insurance</span>
                      <span className="mt-1.5 block max-w-[40ch] text-sm leading-relaxed text-ink-muted">Claims IVR, instant lead routing and compliant recording for insurers and brokers.</span>
                      <a className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg bg-surface-muted px-3.5 py-2 text-sm font-semibold text-ink-strong transition-colors hover:bg-accent-soft hover:text-accent" href="/insurance-contact-center-software">Explore Insurance <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4">
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <a className="mt-2 flex items-center justify-between rounded-xl bg-surface-muted px-4 py-3 text-sm font-semibold text-ink-strong transition-colors hover:bg-accent-soft hover:text-accent" href="/industries">All industries <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-strong">Resources <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="invisible absolute top-full z-50 right-0 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100" style={{width: '560px', maxWidth: 'calc(-2rem + 100vw)'}}>
              <div className="rounded-2xl border border-border bg-paper p-2.5 shadow-[0_24px_60px_-24px_hsl(var(--ink)/0.35)]">
                <div className="flex gap-2">
                  <div className="w-[272px] flex-none border-r border-border pr-2">
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors bg-surface-muted" href="/blog">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-accent-soft text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                          <path d="M18 14h-8" />
                          <path d="M15 18h-5" />
                          <path d="M10 6h8v4h-8V6Z" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Blog</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-accent">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/industries">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-[17px] w-[17px]" aria-hidden="true">
                          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Industries</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/case-study">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                          <path d="M4 22h16" />
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Case Studies</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/expos-conference-webinar">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M8 2v4" />
                          <path d="M16 2v4" />
                          <rect width={18} height={18} x={3} y={4} rx={2} />
                          <path d="M3 10h18" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Expos-Conference / Webinar</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/voip-glossary">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M12 7v14" />
                          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">VoIP Glossary</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex h-full flex-col justify-center px-4 py-6">
                      <span className="text-base font-semibold text-ink-strong">Blog</span>
                      <span className="mt-1.5 block max-w-[40ch] text-sm leading-relaxed text-ink-muted">Guides, playbooks and product deep-dives.</span>
                      <a className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg bg-surface-muted px-3.5 py-2 text-sm font-semibold text-ink-strong transition-colors hover:bg-accent-soft hover:text-accent" href="/blog">Explore Blog <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4">
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="rounded-md px-3 py-2 text-sm font-medium transition-colors text-ink-muted hover:text-ink-strong" href="/partners">Partners</a>
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-strong">Company <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="invisible absolute top-full z-50 right-0 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100" style={{width: '560px', maxWidth: 'calc(-2rem + 100vw)'}}>
              <div className="rounded-2xl border border-border bg-paper p-2.5 shadow-[0_24px_60px_-24px_hsl(var(--ink)/0.35)]">
                <div className="flex gap-2">
                  <div className="w-[272px] flex-none border-r border-border pr-2">
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors bg-surface-muted" href="/about">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-accent-soft text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                          <path d="M10 6h4" />
                          <path d="M10 10h4" />
                          <path d="M10 14h4" />
                          <path d="M10 18h4" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">About</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-accent">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/awards">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-[17px] w-[17px]" aria-hidden="true">
                          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                          <circle cx={12} cy={8} r={6} />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Awards</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/careers">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          <rect width={20} height={14} x={2} y={6} rx={2} />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Careers</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/our-team">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx={9} cy={7} r={4} />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Our Team</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/coverage">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-[17px] w-[17px]" aria-hidden="true">
                          <circle cx={12} cy={12} r={10} />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Coverage</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/customers">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-[17px] w-[17px]" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx={9} cy={7} r={4} />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Customers</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                    <a className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60" href="/contact">
                      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-colors bg-surface-muted text-ink-strong">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-[17px] w-[17px]" aria-hidden="true">
                          <rect width={20} height={16} x={2} y={4} rx={2} />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold leading-tight text-ink-strong">Contact</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-4 w-4 flex-none transition-colors text-ink-subtle">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex h-full flex-col justify-center px-4 py-6">
                      <span className="text-base font-semibold text-ink-strong">About</span>
                      <span className="mt-1.5 block max-w-[40ch] text-sm leading-relaxed text-ink-muted">Who we are and the network we run.</span>
                      <a className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg bg-surface-muted px-3.5 py-2 text-sm font-semibold text-ink-strong transition-colors hover:bg-accent-soft hover:text-accent" href="/about">Explore About <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4">
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative">
            <a className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors text-ink-muted hover:text-ink-strong" href="/pricing">Pricing <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
            <div className="invisible absolute right-0 top-full z-50 pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-60 rounded-2xl border border-border bg-paper p-2 shadow-[0_24px_60px_-24px_hsl(var(--ink)/0.35)]">
                <a className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13.5px] text-ink hover:bg-surface-muted" href="/pricing#plans">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-4 w-4 text-ink-subtle" aria-hidden="true">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                  </svg>PBX Plans </a>
                <a className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13.5px] text-ink hover:bg-surface-muted" href="/pricing#features">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-vertical h-4 w-4 text-ink-subtle" aria-hidden="true">
                    <line x1={4} x2={4} y1={21} y2={14} />
                    <line x1={4} x2={4} y1={10} y2={3} />
                    <line x1={12} x2={12} y1={21} y2={12} />
                    <line x1={12} x2={12} y1={8} y2={3} />
                    <line x1={20} x2={20} y1={21} y2={16} />
                    <line x1={20} x2={20} y1={12} y2={3} />
                    <line x1={2} x2={6} y1={14} y2={14} />
                    <line x1={10} x2={14} y1={8} y2={8} />
                    <line x1={18} x2={22} y1={16} y2={16} />
                  </svg>Features </a>
                <a className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13.5px] text-ink hover:bg-surface-muted" href="/pricing#wholesale">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-4 w-4 text-ink-subtle" aria-hidden="true">
                    <circle cx={12} cy={12} r={10} />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>Wholesale Routes </a>
                <a className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13.5px] text-ink hover:bg-surface-muted" href="/pricing#did-pricing">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4 text-ink-subtle" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>DID Pricing </a>
                <a className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13.5px] text-ink hover:bg-surface-muted" href="/pricing#toll-free-pricing">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call h-4 w-4 text-ink-subtle" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                    <path d="M14.05 6A5 5 0 0 1 18 10" />
                  </svg>Toll-Free Pricing </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <a className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground [&_svg]:transition-colors h-9 rounded-md px-3 hidden text-ink-muted sm:inline-flex" href="/login">Sign in</a>
          <a className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md hidden h-10 bg-ink-strong px-4 text-white hover:bg-ink lg:inline-flex" href="/talk-to-sales">Talk to sales <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-1 h-3.5 w-3.5">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
          <button type="button" aria-label="Open menu" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-ink-strong lg:hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r3:" data-state="closed">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-5 w-5">
              <line x1={4} x2={20} y1={12} y2={12} />
              <line x1={4} x2={20} y1={6} y2={6} />
              <line x1={4} x2={20} y1={18} y2={18} />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <section className="relative overflow-hidden bg-paper">
      <div className="absolute inset-0 bg-grid-soft opacity-50" aria-hidden="true" />
      <div className="container-wide relative grid items-center gap-12 pt-12 pb-16 md:pt-16 md:pb-24 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="reveal is-visible">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              <span className="h-px w-4 bg-accent" />Hosted Contact Center</span>
          </div>
          <h1 className="reveal mt-6 font-display text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink-strong text-balance is-visible" data-delay={60}>Every customer conversation, <span className="accent-mark text-accent">one console.</span>
          </h1>
          <p className="reveal mt-6 max-w-xl text-[clamp(1rem,1.3vw,1.18rem)] leading-[1.6] text-ink-muted text-pretty is-visible" data-delay={120}>Phone, email, live chat and social — unified into a single agent workspace running on a network we own and operate. Resolve faster, route smarter, and see everything live. Deploy in the cloud or on-premise.</p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-3 is-visible" data-delay={180}>
            <a className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[15px] font-medium text-accent-foreground shadow-[0_10px_30px_-12px_hsl(var(--accent)/0.7)] transition-all hover:bg-accent-strong active:scale-[0.98]" href="/demo">Book a free demo <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface px-6 py-3 text-[15px] font-medium text-ink hover:border-ink active:scale-[0.98] transition-all" href="/contact?intent=contact-center">Talk to an engineer</a>
          </div>
          <div className="reveal mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-muted is-visible" data-delay={240}>
            <span className="inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4 text-success">
                <path d="M20 6 9 17l-5-5" />
              </svg> Omnichannel inbox </span>
            <span className="inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4 text-success">
                <path d="M20 6 9 17l-5-5" />
              </svg> Cloud or on-prem </span>
            <span className="inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4 text-success">
                <path d="M20 6 9 17l-5-5" />
              </svg> Live wallboards </span>
            <span className="inline-flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4 text-success">
                <path d="M20 6 9 17l-5-5" />
              </svg> Scales to 2,500+ seats </span>
          </div>
        </div>
        <div className="reveal relative mx-auto w-full max-w-[480px] is-visible">
          <div className="relative grid grid-cols-[auto_1fr] items-center gap-3 sm:gap-5">
            <div className="flex flex-col gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 shadow-sm pp-float">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4 text-accent">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-[12px] font-medium text-ink-strong">Voice</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 shadow-sm pp-float-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-4 w-4 text-accent">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span className="text-[12px] font-medium text-ink-strong">WhatsApp</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 shadow-sm pp-float-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4 text-accent">
                  <rect width={20} height={16} x={2} y={4} rx={2} />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-[12px] font-medium text-ink-strong">Email</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 shadow-sm pp-float">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square h-4 w-4 text-accent">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="text-[12px] font-medium text-ink-strong">Chat</span>
              </span>
            </div>
            <svg viewBox="0 0 120 200" preserveAspectRatio="none" aria-hidden="true" className="pointer-events-none absolute left-[88px] top-0 hidden h-full w-[120px] sm:block">
              <path d="M0 26 C 50 26, 60 100, 118 100" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.4" strokeOpacity="0.5" strokeDasharray="3 5">
                <animate attributeName="stroke-dashoffset" from={0} to={-32} dur="1.4s" repeatCount="indefinite" />
              </path>
              <path d="M0 76 C 50 76, 60 100, 118 100" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.4" strokeOpacity="0.5" strokeDasharray="3 5">
                <animate attributeName="stroke-dashoffset" from={0} to={-32} dur="1.65s" repeatCount="indefinite" />
              </path>
              <path d="M0 126 C 50 126, 60 100, 118 100" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.4" strokeOpacity="0.5" strokeDasharray="3 5">
                <animate attributeName="stroke-dashoffset" from={0} to={-32} dur="1.9s" repeatCount="indefinite" />
              </path>
              <path d="M0 176 C 50 176, 60 100, 118 100" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.4" strokeOpacity="0.5" strokeDasharray="3 5">
                <animate attributeName="stroke-dashoffset" from={0} to={-32} dur="2.15s" repeatCount="indefinite" />
              </path>
            </svg>
            <div className="relative ml-auto w-full max-w-[260px]">
              <div aria-hidden="true" className="pp-aura absolute -inset-4 rounded-3xl opacity-60 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-[hsl(230_55%_7%)] shadow-[0_30px_70px_-30px_hsl(var(--accent)/0.6)]">
                <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-white/50">Live wallboard</span>
                  <span className="inline-flex items-center gap-1 font-mono text-[8px] text-[hsl(var(--success))]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[hsl(var(--success))]" /> live</span>
                </div>
                <div className="grid grid-cols-3 gap-px bg-white/10">
                  <div className="bg-[hsl(230_55%_7%)] px-2 py-2.5 text-center">
                    <div className="font-display text-lg font-semibold text-white tabular-nums">48</div>
                    <div className="font-mono text-[7px] uppercase tracking-wide text-white/40">Online</div>
                  </div>
                  <div className="bg-[hsl(230_55%_7%)] px-2 py-2.5 text-center">
                    <div className="font-display text-lg font-semibold text-white tabular-nums">31</div>
                    <div className="font-mono text-[7px] uppercase tracking-wide text-white/40">In call</div>
                  </div>
                  <div className="bg-[hsl(230_55%_7%)] px-2 py-2.5 text-center">
                    <div className="font-display text-lg font-semibold text-white tabular-nums">06</div>
                    <div className="font-mono text-[7px] uppercase tracking-wide text-white/40">Queue</div>
                  </div>
                </div>
                <div className="space-y-1.5 p-3">
                  <div className="flex items-center gap-2 pp-float">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-[hsl(var(--accent-on-dark))]">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-3 w-3">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <div className="h-1.5 w-3/4 rounded-full bg-white/20" />
                    </div>
                    <span className="font-mono text-[7px] text-[hsl(var(--success))]">●</span>
                  </div>
                  <div className="flex items-center gap-2 pp-float-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-[hsl(var(--accent-on-dark))]">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-3 w-3">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <div className="h-1.5 w-3/4 rounded-full bg-white/20" />
                    </div>
                    <span className="font-mono text-[7px] text-[hsl(var(--success))]">●</span>
                  </div>
                  <div className="flex items-center gap-2 pp-float-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-[hsl(var(--accent-on-dark))]">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-3 w-3">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <div className="h-1.5 w-3/4 rounded-full bg-white/20" />
                    </div>
                    <span className="font-mono text-[7px] text-[hsl(var(--success))]">●</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[hsl(230_55%_7%)] py-12 text-[hsl(220_30%_98%)] md:py-16">
      <div className="container-wide grid gap-px overflow-hidden rounded-2xl border border-[hsl(230_25%_20%)] bg-[hsl(230_25%_20%)] sm:grid-cols-2 lg:grid-cols-4">
        <div className="reveal bg-[hsl(230_55%_7%)] p-7 is-visible">
          <div className="font-display text-[clamp(1.9rem,3.2vw,2.9rem)] font-semibold tracking-[-0.02em] text-white">
            <span className="tabular-nums">5,000 <span className="text-accent">+</span>
            </span>
          </div>
          <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Concurrent calls</div>
          <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">Carrier-grade capacity</div>
        </div>
        <div className="reveal bg-[hsl(230_55%_7%)] p-7 is-visible">
          <div className="font-display text-[clamp(1.9rem,3.2vw,2.9rem)] font-semibold tracking-[-0.02em] text-white">
            <span className="tabular-nums">2,500 <span className="text-accent">+</span>
            </span>
          </div>
          <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Agent seats</div>
          <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">Single tenant ceiling</div>
        </div>
        <div className="reveal bg-[hsl(230_55%_7%)] p-7 is-visible">
          <div className="font-display text-[clamp(1.9rem,3.2vw,2.9rem)] font-semibold tracking-[-0.02em] text-white">
            <span className="tabular-nums">100 <span className="text-accent">K+</span>
            </span>
          </div>
          <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Calls / day</div>
          <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">Already in production</div>
        </div>
        <div className="reveal bg-[hsl(230_55%_7%)] p-7 is-visible">
          <div className="font-display text-[clamp(1.9rem,3.2vw,2.9rem)] font-semibold tracking-[-0.02em] text-white">
            <span className="tabular-nums">99.99 <span className="text-accent">%</span>
            </span>
          </div>
          <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Uptime</div>
          <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">Scalable, failover-ready</div>
        </div>
      </div>
    </section>
    <section className="container-wide section-y-lg">
      <div className="reveal mx-auto max-w-3xl text-center is-visible">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-4 bg-accent" />What it is</span>
        <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">Turn every call into a business opportunity.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.7] text-ink-muted">Our hosted contact center optimises customer interactions using cloud telephony — consistent, personalised experiences across every channel. Built by Team IHA on 3CX and our own add-ons, it's a secure, adaptable platform you can deploy on the cloud or on-premise to match your business.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> User-friendly</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Omnichannel</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Secure &amp; compliant</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Cloud or on-prem</span>
        </div>
      </div>
    </section>
    <section className="bg-surface-muted/40 py-20 md:py-28">
      <div className="container-wide">
        <div className="reveal max-w-3xl is-visible">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-4 bg-accent" />Highlights</span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">A full contact-center toolkit, out of the box.</h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-ink-muted">Everything your agents and supervisors need — dialers, routing, QA and analytics — in one console you don't have to stitch together.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="reveal pp-card flex flex-col rounded-2xl border border-border bg-surface p-6 is-visible" data-delay={0}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 h-[21px] w-[21px]">
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                <path d="M10 6h4" />
                <path d="M10 10h4" />
                <path d="M10 14h4" />
                <path d="M10 18h4" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-ink-strong">Single &amp; multi-tenant</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Run one team or resell a branded platform to many — same console, isolated data.</p>
          </div>
          <div className="reveal pp-card flex flex-col rounded-2xl border border-border bg-surface p-6 is-visible" data-delay={70}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route h-[21px] w-[21px]">
                <circle cx={6} cy={19} r={3} />
                <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                <circle cx={18} cy={5} r={3} />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-ink-strong">Multi-level IVR</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Smart menus and time-of-day routing that get callers to the right agent fast.</p>
          </div>
          <div className="reveal pp-card flex flex-col rounded-2xl border border-border bg-surface p-6 is-visible" data-delay={140}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-[21px] w-[21px]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-ink-strong">Advanced dialers</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Predictive, progressive and preview modes with answering-machine detection.</p>
          </div>
          <div className="reveal pp-card flex flex-col rounded-2xl border border-border bg-surface p-6 is-visible" data-delay={0}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-[21px] w-[21px]">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-ink-strong">Mini CRM</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Lead, disposition and follow-up tracking built in — no separate tool to wire up.</p>
          </div>
          <div className="reveal pp-card flex flex-col rounded-2xl border border-border bg-surface p-6 is-visible" data-delay={70}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset h-[21px] w-[21px]">
                <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-ink-strong">In-built webphone</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Agents log in from a browser. No softphone installs, no desk hardware.</p>
          </div>
          <div className="reveal pp-card flex flex-col rounded-2xl border border-border bg-surface p-6 is-visible" data-delay={140}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ticket h-[21px] w-[21px]">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M13 5v2" />
                <path d="M13 17v2" />
                <path d="M13 11v2" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-ink-strong">Ticketing system</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Turn any interaction into a trackable ticket with SLAs and ownership.</p>
          </div>
          <div className="reveal pp-card flex flex-col rounded-2xl border border-border bg-surface p-6 is-visible" data-delay={0}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gauge h-[21px] w-[21px]">
                <path d="m12 14 4-4" />
                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-ink-strong">Real-time analytics</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Live wallboards plus historical reports on queues, agents and outcomes.</p>
          </div>
          <div className="reveal pp-card flex flex-col rounded-2xl border border-border bg-surface p-6 is-visible" data-delay={70}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye h-[21px] w-[21px]">
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx={12} cy={12} r={3} />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-ink-strong">100% voice logging</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Every call recorded, searchable and exportable for QA and compliance.</p>
          </div>
          <div className="reveal pp-card flex flex-col rounded-2xl border border-border bg-surface p-6 is-visible" data-delay={140}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-horizontal h-[21px] w-[21px]">
                <line x1={21} x2={14} y1={4} y2={4} />
                <line x1={10} x2={3} y1={4} y2={4} />
                <line x1={21} x2={12} y1={12} y2={12} />
                <line x1={8} x2={3} y1={12} y2={12} />
                <line x1={21} x2={16} y1={20} y2={20} />
                <line x1={12} x2={3} y1={20} y2={20} />
                <line x1={14} x2={14} y1={2} y2={6} />
                <line x1={8} x2={8} y1={10} y2={14} />
                <line x1={16} x2={16} y1={18} y2={22} />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-ink-strong">Skill-based mapping</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Route by language, product or expertise so the right agent always answers.</p>
          </div>
          <div className="reveal pp-card flex flex-col rounded-2xl border border-border bg-surface p-6 is-visible" data-delay={0}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-[21px] w-[21px]">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-ink-strong">Live monitoring + SSO</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Listen, whisper, barge in real time. Single sign-on for clean access control.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="container-wide section-y-lg">
      <div className="reveal mx-auto max-w-2xl text-center is-visible">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-4 bg-accent" />Omnichannel</span>
        <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">Meet customers wherever they are.</h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-ink-muted">Centralise voice and digital channels on one platform so every interaction shares the same history and context.</p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="reveal pp-card rounded-2xl border border-border bg-surface p-6 text-center is-visible" data-delay={0}>
          <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-5 w-5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          <h3 className="mt-4 font-display text-base font-semibold text-ink-strong">Voice</h3>
          <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-muted">Inbound queues, outbound dialers and IVR on tier-1 routes.</p>
        </div>
        <div className="reveal pp-card rounded-2xl border border-border bg-surface p-6 text-center is-visible" data-delay={70}>
          <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-5 w-5">
              <rect width={20} height={16} x={2} y={4} rx={2} />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
          <h3 className="mt-4 font-display text-base font-semibold text-ink-strong">Email</h3>
          <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-muted">Shared inboxes with assignment, SLAs and templated replies.</p>
        </div>
        <div className="reveal pp-card rounded-2xl border border-border bg-surface p-6 text-center is-visible" data-delay={140}>
          <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square h-5 w-5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </span>
          <h3 className="mt-4 font-display text-base font-semibold text-ink-strong">Live chat</h3>
          <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-muted">Website chat that escalates to call or video in a click.</p>
        </div>
        <div className="reveal pp-card rounded-2xl border border-border bg-surface p-6 text-center is-visible" data-delay={210}>
          <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-5 w-5">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </span>
          <h3 className="mt-4 font-display text-base font-semibold text-ink-strong">Social &amp; messaging</h3>
          <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-muted">WhatsApp, Facebook and Instagram threads in the same workspace.</p>
        </div>
      </div>
    </section>
    <section className="container-wide section-y-lg">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-4 bg-accent" />Integrations</span>
          <h2 className="mt-5 font-display text-[clamp(1.7rem,3vw,2.6rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink-strong text-balance">Works with your CRM and helpdesk.</h2>
          <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-ink-muted">Sync contacts, log interactions and trigger workflows across the tools your team already lives in.</p>
        </div>
        <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-4 is-visible" data-delay={80}>
          <div className="pp-card flex items-center justify-center rounded-xl border border-border bg-surface px-3 py-5 text-center font-display text-[15px] font-semibold text-ink">Zoho</div>
          <div className="pp-card flex items-center justify-center rounded-xl border border-border bg-surface px-3 py-5 text-center font-display text-[15px] font-semibold text-ink">Salesforce</div>
          <div className="pp-card flex items-center justify-center rounded-xl border border-border bg-surface px-3 py-5 text-center font-display text-[15px] font-semibold text-ink">Zendesk</div>
          <div className="pp-card flex items-center justify-center rounded-xl border border-border bg-surface px-3 py-5 text-center font-display text-[15px] font-semibold text-ink">Freshdesk</div>
          <div className="pp-card flex items-center justify-center rounded-xl border border-border bg-surface px-3 py-5 text-center font-display text-[15px] font-semibold text-ink">HubSpot</div>
          <div className="pp-card flex items-center justify-center rounded-xl border border-border bg-surface px-3 py-5 text-center font-display text-[15px] font-semibold text-ink">Bitrix24</div>
          <div className="pp-card flex items-center justify-center rounded-xl border border-border bg-surface px-3 py-5 text-center font-display text-[15px] font-semibold text-ink">Odoo</div>
          <div className="pp-card flex items-center justify-center rounded-xl border border-border bg-surface px-3 py-5 text-center font-display text-[15px] font-semibold text-ink">WhatsApp</div>
        </div>
      </div>
    </section>
    <section className="bg-surface-muted/40 py-20 md:py-28">
      <div className="container-wide">
        <div className="reveal max-w-2xl is-visible">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-4 bg-accent" />Industries</span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">Built for high-volume customer operations.</h2>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-ink-muted">Teams that live and die by response time run on our platform.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          <div className="reveal bg-surface p-7 is-visible" data-delay={0}>
            <span className="font-mono text-xs text-ink-subtle">01</span>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink-strong">Healthcare</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Patient interactions for hospitals and providers with secure, compliant tooling.</p>
          </div>
          <div className="reveal bg-surface p-7 is-visible" data-delay={70}>
            <span className="font-mono text-xs text-ink-subtle">02</span>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink-strong">Telecom &amp; IT</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">MSPs, ISPs and system integrators handling support at scale.</p>
          </div>
          <div className="reveal bg-surface p-7 is-visible" data-delay={140}>
            <span className="font-mono text-xs text-ink-subtle">03</span>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink-strong">BPOs</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Streamlined contact management and dialer efficiency for outsourcers.</p>
          </div>
          <div className="reveal bg-surface p-7 is-visible" data-delay={0}>
            <span className="font-mono text-xs text-ink-subtle">04</span>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink-strong">Banking &amp; finance</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Secure, recorded interactions that meet audit requirements.</p>
          </div>
          <div className="reveal bg-surface p-7 is-visible" data-delay={70}>
            <span className="font-mono text-xs text-ink-subtle">05</span>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink-strong">Government</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Scalable, secure contact solutions for public service lines.</p>
          </div>
          <div className="reveal bg-surface p-7 is-visible" data-delay={140}>
            <span className="font-mono text-xs text-ink-subtle">06</span>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink-strong">Insurance</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Optimised customer journeys from first notice to resolution.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[hsl(230_55%_7%)] py-20 text-[hsl(220_30%_98%)] md:py-28">
      <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--accent-on-dark))]">
            <span className="h-px w-4 bg-[hsl(var(--accent-on-dark))]" />Why us</span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-white text-balance">We own the network your contact center rides on.</h2>
          <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-[hsl(220_18%_78%)]">Most vendors resell someone else's voice. We're the carrier and the software team — one throat to choke.</p>
        </div>
        <div className="reveal grid gap-5 sm:grid-cols-2 is-visible" data-delay={80}>
          <div className="rounded-2xl border border-[hsl(230_25%_20%)] bg-[hsl(230_40%_11%)] p-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-[hsl(var(--accent-on-dark))]">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network h-[19px] w-[19px]">
                <rect x={16} y={16} width={6} height={6} rx={1} />
                <rect x={2} y={16} width={6} height={6} rx={1} />
                <rect x={9} y={2} width={6} height={6} rx={1} />
                <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                <path d="M12 12V8" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-white">Carrier-grade backbone</h3>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-[hsl(220_16%_64%)]">RespOrg-managed toll-free and tier-1 origination on the same network handling 100K+ calls a day.</p>
          </div>
          <div className="rounded-2xl border border-[hsl(230_25%_20%)] bg-[hsl(230_40%_11%)] p-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-[hsl(var(--accent-on-dark))]">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-[19px] w-[19px]">
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                <circle cx={12} cy={8} r={6} />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-white">3CX Gold Partner, 7 years</h3>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-[hsl(220_16%_64%)]">The hosted contact center is built on 3CX plus add-ons we engineered — not a black box.</p>
          </div>
          <div className="rounded-2xl border border-[hsl(230_25%_20%)] bg-[hsl(230_40%_11%)] p-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-[hsl(var(--accent-on-dark))]">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-[19px] w-[19px]">
                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-white">Scalable architecture</h3>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-[hsl(220_16%_64%)]">Failover-ready and built to grow from a handful of agents to 2,500+ seats.</p>
          </div>
          <div className="rounded-2xl border border-[hsl(230_25%_20%)] bg-[hsl(230_40%_11%)] p-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-[hsl(var(--accent-on-dark))]">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset h-[19px] w-[19px]">
                <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-white">24×7 support, price challenge</h3>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-[hsl(220_16%_64%)]">A real NOC, real engineers, and a pledge to match any like-for-like quote.</p>
          </div>
        </div>
      </div>
    </section>
    <div className="pt-16 md:pt-24">
      <section className="container py-10 md:py-14 lg:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent to-[hsl(258_75%_38%)] p-8 md:p-14">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(0_0%_100%/0.18),transparent_60%)]" />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="mt-4 font-display text-[clamp(1.75rem,3.4vw,3rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white text-balance">Set up a contact center that actually scales.</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-white/85">Book a free demo and we'll show you the console live, then design a rollout — cloud or on-prem — around your team.</p>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-3">
                <form className="space-y-2.5">
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <input name="name" required placeholder="Full name" aria-label="Full name" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"  />
                    <div className="relative ">
                      <div className="relative">
                        <input id="email" name="email" type="email" required placeholder="Work email" className="w-full rounded-lg border border-white/25 bg-white/10 px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/55 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20" aria-invalid="false"  style={{paddingRight: '110px'}} />
                        <button type="button" disabled className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11.5px] font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white text-accent hover:bg-white/90" aria-label="Verify email">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-3 w-3">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>Verify </button>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-2.5 sm:grid-cols-[1fr_auto]">
                    <div className="ttc-phone-field ttc-phone-field--accent " data-required="true">
                      <div className="PhoneInput">
                        <div className="PhoneInputCountry">
                          <select aria-label="Phone number country" className="PhoneInputCountrySelect">
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AC">Ascension Island</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">Congo, Democratic Republic of the</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Cote d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands</option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FM">Federated States of Micronesia</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="XK">Kosovo</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Laos</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="MD">Moldova</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="KP">North Korea</option>
                            <option value="MK">North Macedonia</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestine</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russia</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH">Saint Helena</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin (French Part)</option>
                            <option value="PM">Saint Pierre and Miquelon</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">Sint Maarten</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="KR">South Korea</option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syria</option>
                            <option value="TW">Taiwan</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania</option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TA">Tristan da Cunha</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Vietnam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select>
                          <div aria-hidden="true" className="PhoneInputCountryIcon PhoneInputCountryIcon--border">
                            <img className="PhoneInputCountryIconImg" alt="India" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg" />
                          </div>
                          <div className="PhoneInputCountrySelectArrow" />
                        </div>
                        <input type="tel" autoComplete="tel" placeholder="Phone number" aria-label="Phone number" className="PhoneInputInput" defaultValue={+91} />
                      </div>
                    </div>
                    <button type="submit" disabled className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[14px] font-medium text-accent shadow-md transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed" title="Verify your email first">Book a free demo <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </button>
                  </div>
                </form>
                <p className="text-[12.5px] text-white/75">Or <a className="underline decoration-white/40 underline-offset-2 hover:decoration-white" href="/products">see all products</a>. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer className="mt-10 border-t border-border bg-surface-muted/60 md:mt-12 lg:mt-14">
      <div className="container-wide py-12 md:py-16">
        <div className="flex flex-col gap-6 border-b border-border pb-10 sm:flex-row sm:items-center sm:justify-between">
          <a className="inline-flex items-center " aria-label="The Telephony Co — Every call matters" href="/">
            <img src="https://tornadodialer.net/assets/images/Logo.svg" alt="The Telephony Co" className="h-10 w-auto md:h-11 " loading="eager" decoding="async" />
          </a>
          <div className="flex items-center gap-2 text-sm">
            <span className="eyebrow mr-1">Region</span>
            <a className="rounded-lg border px-3 py-1.5 transition-colors border-border text-ink-muted hover:border-ink hover:text-ink-strong" href="/india">India</a>
            <a className="rounded-lg border px-3 py-1.5 transition-colors border-ink bg-ink text-paper" href="/">Global</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-12 sm:grid-cols-3 lg:grid-cols-6">
          <div>
            <p className="eyebrow mb-4">Products</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact-center">Contact Center</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/call-tracking-software">Call Tracking Software</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/agentflow">AgentFlow</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/vora">Vora AI Contact Center</a>
              </li>
            </ul>
            <a className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink-strong transition-colors hover:text-ink" href="/products">Explore more products <span aria-hidden="true">→</span>
            </a>
          </div>
          <div>
            <p className="eyebrow mb-4">Phone Numbers</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/business-phone-number">Business Phone Number</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/toll-free-numbers">Toll-Free Numbers</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/local-numbers">Local Numbers</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/virtual-phone-number">Virtual Phone Number</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/vanity-numbers">Vanity Numbers</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Industries</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/industries">All Industries</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/insurance-contact-center-software">Insurance</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/banking-and-finance-contact-center-software">Banking &amp; Finance</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact-center-software-for-healthcare-industry">Healthcare</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/e-commerce-industry-contact-center-software">E-Commerce</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact-center-software-for-enterprise">Enterprise</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact-center-software-for-bpo">BPO</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/pbx-software-for-enterprise">PBX Enterprise</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Resources</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/blog">Blog</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/features">Features</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/industries">Industries</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/case-study">Case Studies</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/voip-glossary">VoIP Glossary</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/pay-invoice">Pay Your Invoice</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Company</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/about">About Us</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/our-team">Our Team</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/awards">Awards</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/careers">Careers</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/coverage">Coverage</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/customers">Customers</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/partners">Partners</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Policy Center</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/terms-conditions">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/refund-and-cancelation-policy">Refund &amp; Cancelation Policy</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/fair-usage-policy">Fair Usage Policy</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/robocall-mitigation-plan">Robocall Mitigation Plan</a>
              </li>
              <li>
                <a className="text-ink-muted transition-colors hover:text-ink-strong" href="/report-abuse">Report Abuse</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-8 border-t border-border pt-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1">
            <p className="eyebrow mb-4">Head Office</p>
            <div className="flex items-start gap-3 text-sm text-ink-muted">
              <span aria-hidden="true" className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-ink text-paper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                  <path d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" strokeLinejoin="round" />
                  <circle cx={12} cy={10} r="2.5" />
                </svg>
              </span>
              <p className="leading-relaxed">The Telephony Co <br />1201 North Market Street, Suite 111-L91, <br />Wilmington, DE 19801 </p>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <p className="eyebrow mb-4">Call Us</p>
            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              <li className="flex items-start gap-3">
                <span role="img" aria-label="United States flag" className="fi fi-us inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{width: '24px', height: '18px', backgroundSize: 'cover'}} />
                <span className="text-sm">
                  <a href="tel:18009221341" className="font-medium text-ink-strong transition-colors hover:text-ink">1800 922 1341</a>
                  <span className="mt-0.5 block text-xs text-ink-muted">Toll Free Customer Service (24×7)</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span role="img" aria-label="United States flag" className="fi fi-us inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{width: '24px', height: '18px', backgroundSize: 'cover'}} />
                <span className="text-sm">
                  <a href="tel:13322060666" className="font-medium text-ink-strong transition-colors hover:text-ink">+1 332 206 0666</a>
                  <span className="mt-0.5 block text-xs text-ink-muted">Office (9:00 AM to 6:00 PM)</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span role="img" aria-label="United Kingdom flag" className="fi fi-gb inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{width: '24px', height: '18px', backgroundSize: 'cover'}} />
                <span className="text-sm">
                  <a href="tel:448002294882" className="font-medium text-ink-strong transition-colors hover:text-ink">+44 800 229 4882</a>
                  <span className="mt-0.5 block text-xs text-ink-muted">United Kingdom</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span role="img" aria-label="Australia flag" className="fi fi-au inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{width: '24px', height: '18px', backgroundSize: 'cover'}} />
                <span className="text-sm">
                  <a href="tel:611800716800" className="font-medium text-ink-strong transition-colors hover:text-ink">+61 1800 716 800</a>
                  <span className="mt-0.5 block text-xs text-ink-muted">Australia</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span role="img" aria-label="India flag" className="fi fi-in inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{width: '24px', height: '18px', backgroundSize: 'cover'}} />
                <span className="text-sm">
                  <a href="tel:18002122006" className="font-medium text-ink-strong transition-colors hover:text-ink">1800 212 2006</a>
                  <span className="mt-0.5 block text-xs text-ink-muted">India</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-ink-muted md:flex-row md:items-center">
          <p>© 2026 The Telephony Co. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <a href="https://www.facebook.com/thetelephony.co/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com/thetelephonyco" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">Twitter / X</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/thetelephonyco/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com/thetelephonyco/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
    </>
  )
}
