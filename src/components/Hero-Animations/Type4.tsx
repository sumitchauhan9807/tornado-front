const Type4 = () => {
  return (
    <div className="reveal relative mx-auto aspect-square w-full max-w-[460px] is-visible">
      <div aria-hidden="true" className="pp-aura absolute inset-[14%] rounded-full opacity-70 blur-2xl" />
      <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 h-full w-full">
        <line x1={50} y1={50} x2={50} y2={10} stroke="hsl(var(--accent))" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 3">
          <animate attributeName="stroke-dashoffset" from={0} to={-20} dur="1.6s" repeatCount="indefinite" />
        </line>
        <line x1={50} y1={50} x2={90} y2={50} stroke="hsl(var(--accent))" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 3">
          <animate attributeName="stroke-dashoffset" from={0} to={-20} dur="1.8s" repeatCount="indefinite" />
        </line>
        <line x1={50} y1={50} x2={50} y2={90} stroke="hsl(var(--accent))" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 3">
          <animate attributeName="stroke-dashoffset" from={0} to={-20} dur="2s" repeatCount="indefinite" />
        </line>
        <line x1={50} y1={50} x2={10} y2="50.00000000000001" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 3">
          <animate attributeName="stroke-dashoffset" from={0} to={-20} dur="2.2s" repeatCount="indefinite" />
        </line>
      </svg>
      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: '50%', top: '10%' }}>
        <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-2.5 py-1.5 shadow-md pp-float">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone h-3 w-3 text-accent">
            <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
            <path d="M12 18h.01" />
          </svg>
          <span className="text-[10px] font-medium text-ink-strong">Mobile</span>
        </span>
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: '90%', top: '50%' }}>
        <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-2.5 py-1.5 shadow-md pp-float-2">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor h-3 w-3 text-accent">
            <rect width={20} height={14} x={2} y={3} rx={2} />
            <line x1={8} x2={16} y1={21} y2={21} />
            <line x1={12} x2={12} y1={17} y2={21} />
          </svg>
          <span className="text-[10px] font-medium text-ink-strong">Browser</span>
        </span>
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: '50%', top: '90%' }}>
        <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-2.5 py-1.5 shadow-md pp-float-3">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset h-3 w-3 text-accent">
            <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
            <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
          </svg>
          <span className="text-[10px] font-medium text-ink-strong">Softphone</span>
        </span>
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: '10%', top: '50%' }}>
        <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-2.5 py-1.5 shadow-md pp-float">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-3 w-3 text-accent">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="text-[10px] font-medium text-ink-strong">Desk SIP</span>
        </span>
      </div>
      <div className="absolute left-1/2 top-1/2 w-[42%] -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden rounded-2xl border border-border bg-[hsl(230_55%_7%)] p-4 text-center shadow-[0_30px_70px_-30px_hsl(var(--accent)/0.6)]">
          <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-[hsl(var(--accent-on-dark))]">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-forwarded h-5 w-5">
              <polyline points="18 2 22 6 18 10" />
              <line x1={14} x2={22} y1={6} y2={6} />
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          <div className="mt-2 font-display text-sm font-semibold text-white tabular-nums">+1 415 ···</div>
          <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/45">virtual number</div>
          <div className="mt-2 inline-flex items-center gap-1 font-mono text-[8px] text-[hsl(var(--success))]">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--success))]" /> ringing everywhere
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type4
