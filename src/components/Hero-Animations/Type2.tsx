const Type2 = (props) => {
  return (
    <div className="reveal relative mx-auto aspect-square w-full max-w-[460px] is-visible">
      <div aria-hidden="true" className="pp-aura absolute inset-[16%] rounded-full opacity-70 blur-2xl" />
      <div aria-hidden="true" className="absolute left-[68%] top-[60%] -translate-x-1/2 -translate-y-1/2">
        <span className="pp-ping absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40" style={{ animationDelay: '0s' }} />
        <span className="pp-ping absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40" style={{ animationDelay: '1.1s' }} />
        <span className="pp-ping absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40" style={{ animationDelay: '2.2s' }} />
      </div>
      <div className="absolute left-[70%] top-[60%] w-[44%] -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-2xl border border-border bg-[hsl(230_55%_7%)] p-4 text-center shadow-[0_30px_70px_-30px_hsl(var(--accent)/0.6)]">
          <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-[hsl(var(--accent-on-dark))]">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call h-5 w-5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              <path d="M14.05 2a9 9 0 0 1 8 7.94" />
              <path d="M14.05 6A5 5 0 0 1 18 10" />
            </svg>
          </span>
          <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/50">{props.boxText1}</div>
          <div className="mt-1 font-display text-lg font-semibold tracking-[-0.02em] text-white tabular-nums">{props.boxText2}</div>
          <div className="mt-2 font-display text-xs font-semibold text-white tabular-nums">
            <span className="pp-tick">{props.boxText3}</span>
          </div>
          <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-[hsl(var(--success))]">{props.boxText4}</div>
        </div>
      </div>
      <div className="absolute left-1 top-5 pp-float">
        <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-2.5 py-1.5 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-3 w-3 text-accent">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="font-mono text-[10px] font-medium text-ink-strong">{props.topLeft}</span>
        </span>
      </div>
      <div className="absolute right-2 top-2 pp-float-2">
        <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-2.5 py-1.5 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-3 w-3 text-accent">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="font-mono text-[10px] font-medium text-ink-strong">{props.topRight}</span>
        </span>
      </div>
      <div className="absolute left-4 bottom-10 pp-float-3">
        <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-2.5 py-1.5 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-3 w-3 text-accent">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="font-mono text-[10px] font-medium text-ink-strong">{props.bottomLeft}</span>
        </span>
      </div>
      <div className="absolute right-3 bottom-6 pp-float">
        <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-2.5 py-1.5 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-3 w-3 text-accent">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="font-mono text-[10px] font-medium text-ink-strong">{props.bottomRight}</span>
        </span>
      </div>
    </div>
  );
};

export default Type2
