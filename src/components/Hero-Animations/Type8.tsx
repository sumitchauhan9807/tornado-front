const Type8 = () => {
  return (
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
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[hsl(var(--success))]" /> live
              </span>
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
  );
};
export default Type8
