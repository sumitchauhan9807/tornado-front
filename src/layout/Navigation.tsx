"use client"
import { useState } from "react"

const BUSINESS_LINKS = [
  {
    title: "Toll-Free Numbers",
    desc: "1800 numbers customers call for free.",
    href: "/toll-free-numbers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-phone-call h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.05 2a9 9 0 0 1 8 7.94" />
        <path d="M14.05 6A5 5 0 0 1 18 10" />
      </svg>
    ),
  },
  {
    title: "Local Numbers",
    desc: "City & country DIDs in 70+ markets.",
    href: "/local-numbers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-map-pin h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx={12} cy={10} r={3} />
      </svg>
    ),
  },
  {
    title: "Virtual Phone Number",
    desc: "Cloud numbers that ring any device.",
    href: "/virtual-phone-number",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-smartphone h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Vanity Numbers",
    desc: "Memorable, brandable phone numbers.",
    href: "/vanity-numbers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-sparkles h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
        <path d="M4 17v2" />
        <path d="M5 18H3" />
      </svg>
    ),
  },
];

const CLOUD_LINKS = [
  {
    title: "3CX Phone System",
    desc: "Gold-Partner 3CX, fully managed.",
    href: "/3cx",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-server h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <rect width={20} height={8} x={2} y={2} rx={2} ry={2} />
        <rect width={20} height={8} x={2} y={14} rx={2} ry={2} />
        <line x1={6} x2={6.01} y1={6} y2={6} />
        <line x1={6} x2={6.01} y1={18} y2={18} />
      </svg>
    ),
  },
  {
    title: "PBX Phone System",
    desc: "Feature-rich IP PBX, cloud or on-prem.",
    href: "/pbx-phone-system",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-network h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <rect x={16} y={16} width={6} height={6} rx={1} />
        <rect x={2} y={16} width={6} height={6} rx={1} />
        <rect x={9} y={2} width={6} height={6} rx={1} />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </svg>
    ),
  },
  {
    title: "Cloud Phone System",
    desc: "Run your whole phone system in the cloud.",
    href: "/cloud-phone-system",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-cloud h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    title: "VoIP Phone System",
    desc: "Cloud calling for any device, no hardware.",
    href: "/voip-phone-system",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-wifi h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M12 20h.01" />
        <path d="M2 8.82a15 15 0 0 1 20 0" />
        <path d="M5 12.859a10 10 0 0 1 14 0" />
        <path d="M8.5 16.429a5 5 0 0 1 7 0" />
      </svg>
    ),
  },
  {
    title: "Contact Center",
    desc: "Omnichannel voice, chat & email routing.",
    href: "/contact-center",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-headset h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
        <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
      </svg>
    ),
  },
  {
    title: "Multi-Level IVR",
    desc: "Layered voice menus that route every caller.",
    href: "/multi-level-ivr",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-git-branch h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <line x1={6} x2={6} y1={3} y2={15} />
        <circle cx={18} cy={6} r={3} />
        <circle cx={6} cy={18} r={3} />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
  },
  {
    title: "SIP Trunk Service",
    desc: "Carrier-grade SIP trunks for your PBX.",
    href: "/sip-trunk-service",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-cable h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
        <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
        <path d="M21 21v-2h-4" />
        <path d="M3 5h4V3" />
        <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
      </svg>
    ),
  },
];

const MESSAGING_LINKS = [
  {
    title: "Promotional Bulk SMS",
    desc: "Marketing SMS that clears carrier filters.",
    href: "/promotional-bulk-sms",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-megaphone h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
  },
  {
    title: "Transactional SMS",
    desc: "Order updates & alerts on dedicated routes.",
    href: "/transactional-sms",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-receipt h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 17.5v-11" />
      </svg>
    ),
  },
  {
    title: "OTP SMS",
    desc: "One-time passwords with route failover.",
    href: "/otp-sms",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-key-round h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
        <circle cx={16.5} cy={7.5} r={0.5} fill="currentColor" />
      </svg>
    ),
  },
];

const OTHER_LINKS = [
  {
    title: "Call Tracking Software",
    desc: "Attribute every call to the campaign that drove it.",
    href: "/call-tracking-software",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chart-line h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "AgentFlow",
    desc: "Workflow automation for agent teams.",
    href: "/agentflow",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-workflow h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <rect width={8} height={8} x={3} y={3} rx={2} />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width={8} height={8} x={13} y={13} rx={2} />
      </svg>
    ),
  },
  {
    title: "Vora AI Contact Center",
    desc: "AI agents that resolve calls end to end.",
    href: "/vora",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-sparkles h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
        <path d="M4 17v2" />
        <path d="M5 18H3" />
      </svg>
    ),
  },
  {
    title: "Bulk Message Service",
    desc: "One platform & API for every kind of SMS.",
    href: "/bulk-message-service",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-send h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
        <path d="m21.854 2.147-10.94 10.939" />
      </svg>
    ),
  },
];

function Products() {

  const [active,setActive] = useState('business')
  let navLinks = []
  let gridCol = 1
  console.log(active)
  if(active == 'business') {
    navLinks = BUSINESS_LINKS
  }
  if(active == 'cloud') {
    navLinks = CLOUD_LINKS
  }
  if(active == 'messaging') {
    navLinks = MESSAGING_LINKS
  }
  if(active == 'other') {
    navLinks = OTHER_LINKS
  }
  if(navLinks.length > 4){
    gridCol = 2
  }
  

  return (
    <div className="group relative">
      <button type="button" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-strong">Products &amp; Services <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform group-hover:rotate-180">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className="invisible absolute top-full z-50 left-0 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100" style={{width: '840px', maxWidth: 'calc(-2rem + 100vw)'}}>
        <div className="rounded-2xl border border-border bg-paper p-2.5 shadow-[0_24px_60px_-24px_hsl(var(--ink)/0.35)]">
          <div className="flex gap-2">
            <div className="w-[272px] flex-none border-r border-border pr-2">
              <button onMouseEnter={()=>{setActive('business')}} className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors bg-surface-muted" href="/business-phone-number">
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
              </button>
              <button onMouseEnter={()=>{setActive('cloud')}} type="button" className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60">
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
              <button onMouseEnter={()=>{setActive('messaging')}} type="button" className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60">
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
              <button onMouseEnter={()=>{setActive('other')}} type="button" className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-surface-muted/60">
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
              <div className={`grid gap-0.5 grid-cols-${gridCol}`}>
                {navLinks.map((link,index)=>{
                  return (
                    <a key={index} className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted" href="/toll-free-numbers">
                      <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-surface-muted text-ink-strong transition-colors group-hover/item:bg-accent-soft group-hover/item:text-accent">
                        {link.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-ink-strong">{link.title}</span>
                        <span className="mt-0.5 block line-clamp-2 text-[12px] leading-snug text-ink-muted">{link.desc}</span>
                      </span>
                    </a>
                  )
                })}
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
  )
}

function Features() {
  return (
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
  )
} 


const Navigation = () =>{ 
  return (
    <div className="container-wide flex h-16 items-center justify-between md:h-20">
      <a className="inline-flex items-center " aria-label="The Telephony Co — Every call matters" href="/">
        <img src="https://tornadodialer.net/assets/images/Logo.svg" alt="The Telephony Co" style={{height:"60px"}} className="h-10 w-auto md:h-11 " loading="eager" decoding="async" />
      </a>
      <nav className="hidden items-center gap-0.5 lg:flex">
        <Products/>
        <Features/>
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
  )
}

export default Navigation