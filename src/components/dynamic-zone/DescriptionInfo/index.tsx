const DescriptionInfo = (props) => {
  // console.log(props, 'DescriptionInfo');
  return (
    <section className="bg-surface-muted/40 py-14 md:py-16 lg:py-20">
      <div className="container">
        <div className="reveal max-w-3xl is-visible">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-4 bg-accent" />
            {props.blockHeading.SubHeading}
          </span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">{props.blockHeading.heading}</h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-ink-muted">{props.blockHeading.description}</p>
        </div>
        <div className="reveal mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 is-visible">
          {props.descriptionLists.map((list, index) => {
            return (
              <a key={index} className="cursor-pointer group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_hsl(var(--ink-strong)/0.3)]">
                <span dangerouslySetInnerHTML={{ __html: list.svg }} className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                </span>
                <h4 className="mt-4 flex items-center gap-2 font-display text-lg font-medium tracking-[-0.01em] text-ink-strong">{list.heading}</h4>
                <p className="mt-2 flex-1 text-[13.5px] leading-[1.55] text-ink-muted">{list.content}</p>
                <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">{list.tags_link}</span>
              </a>
            );
          })}

          {/* <a className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_hsl(var(--ink-strong)/0.3)]" href="/sip-trunk-service">
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
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default DescriptionInfo;
