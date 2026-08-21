function MobileNav() {
  return (
    <>
      <div data-state="open" className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" data-aria-hidden="true" aria-hidden="true" style={{ pointerEvents: 'auto' }} />
      <div
        role="dialog"
        id="radix-:r3:"
        aria-describedby="radix-:r5:"
        aria-labelledby="radix-:r4:"
        data-state="open"
        className="fixed z-50 gap-4 bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm w-[90vw] max-w-sm p-0"
        tabIndex={-1}
        style={{
          pointerEvents: 'auto',
        }}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
            <a className="inline-flex items-center " aria-label="The Telephony Co — Every call matters" href="/">
              <img src="/assets/ttc-logo-ClMu3afQ.png" alt="The Telephony Co" className="h-10 w-auto md:h-11 " loading="eager" decoding="async" />
            </a>
            <div role="group" aria-label="Select region" className="inline-flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5">
              <span aria-current="page" className="inline-flex items-center gap-1.5 rounded-full bg-ink-strong font-semibold uppercase tracking-[0.1em] text-white px-2 py-1 text-[11px]">
                <span
                  role="img"
                  aria-label="United States flag"
                  className="fi fi-us inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] "
                  style={{
                    width: '13px',
                    height: '10px',
                    backgroundSize: 'cover',
                  }}
                />
                Global
              </span>
              <a className="inline-flex items-center gap-1.5 rounded-full font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink-strong px-2 py-1 text-[11px]" href="/india">
                <span
                  role="img"
                  aria-label="India flag"
                  className="fi fi-in inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] opacity-70"
                  style={{
                    width: '13px',
                    height: '10px',
                    backgroundSize: 'cover',
                  }}
                />
                India
              </a>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-3">
            <details open className="group border-b border-border last:border-0">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 text-base font-semibold text-ink hover:bg-surface-muted">
                Products &amp; Services
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 text-ink-muted transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="pb-2 pl-1">
                <div className="mb-2">
                  <p className="px-3 pb-1 pt-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-subtle">Business Phone Numbers</p>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/toll-free-numbers">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                      <path d="M14.05 6A5 5 0 0 1 18 10" />
                    </svg>
                    <span>Toll-Free Numbers</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/local-numbers">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx={12} cy={10} r={3} />
                    </svg>
                    <span>Local Numbers</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/virtual-phone-number">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
                      <path d="M12 18h.01" />
                    </svg>
                    <span>Virtual Phone Number</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/vanity-numbers">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                      <path d="M20 3v4" />
                      <path d="M22 5h-4" />
                      <path d="M4 17v2" />
                      <path d="M5 18H3" />
                    </svg>
                    <span>Vanity Numbers</span>
                  </a>
                </div>
                <div className="mb-2">
                  <p className="px-3 pb-1 pt-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-subtle">Cloud Telephony</p>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/3cx">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <rect width={20} height={8} x={2} y={2} rx={2} ry={2} />
                      <rect width={20} height={8} x={2} y={14} rx={2} ry={2} />
                      <line x1={6} x2="6.01" y1={6} y2={6} />
                      <line x1={6} x2="6.01" y1={18} y2={18} />
                    </svg>
                    <span>3CX Phone System</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/pbx-phone-system">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <rect x={16} y={16} width={6} height={6} rx={1} />
                      <rect x={2} y={16} width={6} height={6} rx={1} />
                      <rect x={9} y={2} width={6} height={6} rx={1} />
                      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                      <path d="M12 12V8" />
                    </svg>
                    <span>PBX Phone System</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/cloud-phone-system">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                    <span>Cloud Phone System</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/voip-phone-system">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="M12 20h.01" />
                      <path d="M2 8.82a15 15 0 0 1 20 0" />
                      <path d="M5 12.859a10 10 0 0 1 14 0" />
                      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
                    </svg>
                    <span>VoIP Phone System</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/contact-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                    </svg>
                    <span>Contact Center</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/multi-level-ivr">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-branch h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <line x1={6} x2={6} y1={3} y2={15} />
                      <circle cx={18} cy={6} r={3} />
                      <circle cx={6} cy={18} r={3} />
                      <path d="M18 9a9 9 0 0 1-9 9" />
                    </svg>
                    <span>Multi-Level IVR</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/sip-trunk-service">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cable h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
                      <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
                      <path d="M21 21v-2h-4" />
                      <path d="M3 5h4V3" />
                      <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
                    </svg>
                    <span>SIP Trunk Service</span>
                  </a>
                </div>
                <div className="mb-2">
                  <p className="px-3 pb-1 pt-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-subtle">Messaging Services</p>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/promotional-bulk-sms">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="m3 11 18-5v12L3 14v-3z" />
                      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                    </svg>
                    <span>Promotional Bulk SMS</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/transactional-sms">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-receipt h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                      <path d="M12 17.5v-11" />
                    </svg>
                    <span>Transactional SMS</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/otp-sms">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key-round h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                    <span>OTP SMS</span>
                  </a>
                </div>
                <div className="mb-2">
                  <p className="px-3 pb-1 pt-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-subtle">Other Products &amp; Services</p>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/call-tracking-software">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-line h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                    <span>Call Tracking Software</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/agentflow">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-workflow h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <rect width={8} height={8} x={3} y={3} rx={2} />
                      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                      <rect width={8} height={8} x={13} y={13} rx={2} />
                    </svg>
                    <span>AgentFlow</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/vora">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                      <path d="M20 3v4" />
                      <path d="M22 5h-4" />
                      <path d="M4 17v2" />
                      <path d="M5 18H3" />
                    </svg>
                    <span>Vora AI Contact Center</span>
                  </a>
                  <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/bulk-message-service">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                      <path d="m21.854 2.147-10.94 10.939" />
                    </svg>
                    <span>Bulk Message Service</span>
                  </a>
                </div>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/products">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                  </svg>
                  <span>View all products &amp; services</span>
                </a>
              </div>
            </details>
            <details className="group border-b border-border last:border-0">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 text-base font-semibold text-ink hover:bg-surface-muted">
                Features
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 text-ink-muted transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="pb-2 pl-1">
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/call-management-software">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-vertical h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
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
                  <span>Call Management Software</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/call-recording-software">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-disc h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <circle cx={12} cy={12} r={10} />
                    <circle cx={12} cy={12} r={2} />
                  </svg>
                  <span>Call Recording Software</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/call-log-monitor">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M3 12h.01" />
                    <path d="M3 18h.01" />
                    <path d="M3 6h.01" />
                    <path d="M8 12h13" />
                    <path d="M8 18h13" />
                    <path d="M8 6h13" />
                  </svg>
                  <span>Call Log Monitor</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/call-monitoring">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                  </svg>
                  <span>Call Monitoring</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/call-barging">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                  <span>Call Barging</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/call-forwarding">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-forward h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <polyline points="15 17 20 12 15 7" />
                    <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
                  </svg>
                  <span>Call Forwarding</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/call-masking">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                  <span>Call Masking</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/click-to-call">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M14 4.1 12 6" />
                    <path d="m5.1 8-2.9-.8" />
                    <path d="m6 12-1.9 2" />
                    <path d="M7.2 2.2 8 5.1" />
                    <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
                  </svg>
                  <span>Click-to-Call</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/missed-call-services">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-missed h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <line x1={22} x2={16} y1={2} y2={8} />
                    <line x1={16} x2={22} y1={2} y2={8} />
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Missed Call Services</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/features">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                  </svg>
                  <span>View all features</span>
                </a>
              </div>
            </details>
            <details className="group border-b border-border last:border-0">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 text-base font-semibold text-ink hover:bg-surface-muted">
                Industries
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 text-ink-muted transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="pb-2 pl-1">
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/industries">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                  </svg>
                  <span>All industries</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/insurance-contact-center-software">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Insurance</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/banking-and-finance-contact-center-software">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <line x1={3} x2={21} y1={22} y2={22} />
                    <line x1={6} x2={6} y1={18} y2={11} />
                    <line x1={10} x2={10} y1={18} y2={11} />
                    <line x1={14} x2={14} y1={18} y2={11} />
                    <line x1={18} x2={18} y1={18} y2={11} />
                    <polygon points="12 2 20 7 4 7" />
                  </svg>
                  <span>Banking &amp; Finance</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/contact-center-software-for-healthcare-industry">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                  </svg>
                  <span>Healthcare</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/e-commerce-industry-contact-center-software">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <circle cx={8} cy={21} r={1} />
                    <circle cx={19} cy={21} r={1} />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                  <span>E-Commerce</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/contact-center-software-for-enterprise">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                  <span>Enterprise</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/contact-center-software-for-bpo">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                  </svg>
                  <span>BPO</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/pbx-software-for-enterprise">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <rect x={16} y={16} width={6} height={6} rx={1} />
                    <rect x={2} y={16} width={6} height={6} rx={1} />
                    <rect x={9} y={2} width={6} height={6} rx={1} />
                    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                    <path d="M12 12V8" />
                  </svg>
                  <span>PBX Enterprise</span>
                </a>
              </div>
            </details>
            <details className="group border-b border-border last:border-0">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 text-base font-semibold text-ink hover:bg-surface-muted">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 text-ink-muted transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="pb-2 pl-1">
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/blog">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8" />
                    <path d="M15 18h-5" />
                    <path d="M10 6h8v4h-8V6Z" />
                  </svg>
                  <span>Blog</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/industries">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                  </svg>
                  <span>Industries</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/case-study">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                  <span>Case Studies</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/expos-conference-webinar">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width={18} height={18} x={3} y={4} rx={2} />
                    <path d="M3 10h18" />
                  </svg>
                  <span>Expos-Conference / Webinar</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/voip-glossary">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                  <span>VoIP Glossary</span>
                </a>
              </div>
            </details>
            <a className="block rounded-md px-4 py-3 text-base font-semibold text-ink hover:bg-surface-muted" href="/partners">
              Partners
            </a>
            <details className="group border-b border-border last:border-0">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 text-base font-semibold text-ink hover:bg-surface-muted">
                Company
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 text-ink-muted transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="pb-2 pl-1">
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/about">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                  <span>About</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/awards">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx={12} cy={8} r={6} />
                  </svg>
                  <span>Awards</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/careers">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <rect width={20} height={14} x={2} y={6} rx={2} />
                  </svg>
                  <span>Careers</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/our-team">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Our Team</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/coverage">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <circle cx={12} cy={12} r={10} />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                  <span>Coverage</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/customers">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Customers</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/contact">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <rect width={20} height={16} x={2} y={4} rx={2} />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Contact</span>
                </a>
              </div>
            </details>
            <details className="group border-b border-border last:border-0">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 text-base font-semibold text-ink hover:bg-surface-muted">
                Pricing
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 text-ink-muted transition-transform group-open:rotate-180">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="pb-2 pl-1">
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/pricing#plans">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                  </svg>
                  <span>PBX Plans</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/pricing#features">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-vertical h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
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
                  <span>Features</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/pricing#wholesale">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <circle cx={12} cy={12} r={10} />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                  <span>Wholesale Routes</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/pricing#did-pricing">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>DID Pricing</span>
                </a>
                <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/pricing#toll-free-pricing">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                    <path d="M14.05 6A5 5 0 0 1 18 10" />
                  </svg>
                  <span>Toll-Free Pricing</span>
                </a>
              </div>
            </details>
          </nav>
          <div className="space-y-2 border-t border-border p-4">
            <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full bg-accent text-accent-foreground hover:bg-accent-strong" href="/demo">
              Book a free demo
            </a>
            <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full" href="/talk-to-sales">
              Talk to sales
            </a>
            <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground [&_svg]:transition-colors h-10 px-4 py-2 w-full" href="/login">
              Sign in
            </a>
            <a href="tel:18009221341" className="block pt-1 text-center font-mono text-[12px] text-ink-muted">
              +1 800 922 1341
            </a>
          </div>
        </div>
        <button type="button" className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  );
}

export default MobileNav;
