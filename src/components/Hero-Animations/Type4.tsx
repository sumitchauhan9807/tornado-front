const Type4 = (props) => {
  const orbitalStyles = [
    {
      position: { left: '57%', top: '10%' },
      floatClass: 'pp-float',
    },
    {
      position: { left: '107%', top: '54%' },
      floatClass: 'pp-float-2',
    },
    {
      position: { left: '59%', top: '98%' },
      floatClass: 'pp-float-3',
    },
    {
      position: { left: '10%', top: '53%' },
      floatClass: 'pp-float-4',
    },
  ];

  return (
    <div className="reveal relative mx-auto aspect-square w-full max-w-[460px] is-visible">
      {/* Aura */}
      <div aria-hidden="true" className="pp-aura absolute inset-[14%] rounded-full opacity-70 blur-2xl" />

      {/* Orbital Lines */}
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

        <line x1={50} y1={50} x2={10} y2={50} stroke="hsl(var(--accent))" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 3">
          <animate attributeName="stroke-dashoffset" from={0} to={-20} dur="2.2s" repeatCount="indefinite" />
        </line>
      </svg>

      {/* Orbital Items */}
      {props.OrbitalItems.map((item, index) => {
        const style = orbitalStyles[index % orbitalStyles.length];

        return (
          <div key={index} className="absolute -translate-x-1/2 -translate-y-1/2" style={style.position}>
            <span className={`inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-2.5 py-1.5 shadow-md ${style.floatClass}`}>
              <span dangerouslySetInnerHTML={{ __html: item.svg }}></span>

              <span className="text-[10px] font-medium text-ink-strong">{item.text}</span>
            </span>
          </div>
        );
      })}

      <div style={{ left: '71%', top: '65%' }} className="absolute left-1/2 top-1/2 w-[42%] -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden rounded-2xl border border-border bg-[hsl(230_55%_7%)] p-4 text-center shadow-[0_30px_70px_-30px_hsl(var(--accent)/0.6)]">
          <span dangerouslySetInnerHTML={{ __html: props.svg }} className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-[hsl(var(--accent-on-dark))]" />

          <div className="mt-2 font-display text-sm font-semibold text-white tabular-nums">{props.subHeading}</div>

          <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/45">{props.heading}</div>

          <div className="mt-2 inline-flex items-center gap-1 font-mono text-[8px] text-[hsl(var(--success))]">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--success))]" />
            {props.bottomText}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Type4;
