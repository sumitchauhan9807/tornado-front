const Type6 = (props) => {
  const orbitalPositions = [
    { left: '101%', top: '50%' },
    { left: '73%', top: '95.8372%' },
    { left: '30%', top: '89.8372%' },
    { left: '13%', top: '50%' },
    { left: '36%', top: '10.1628%' },
    { left: '73%', top: '10.1628%' },
  ];

  const outerPositions = [
    {
      position: 'left-2 top-6',
      floatClass: 'pp-float',
    },
    {
      position: 'right-3 top-3',
      floatClass: 'pp-float-2',
    },
    {
      position: 'left-4 bottom-8',
      floatClass: 'pp-float-3',
    },
    {
      position: 'right-4 bottom-5',
      floatClass: 'pp-float',
    },
  ];

  return (
    <div className="reveal relative mx-auto aspect-square w-full max-w-[460px] is-visible">
      {/* Aura */}
      <div aria-hidden="true" className="pp-aura absolute inset-[12%] rounded-full opacity-70 blur-2xl" />

      {/* Orbit */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="pp-orbit absolute inset-[6%]">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle cx={50} cy={50} r={46} fill="none" stroke="hsl(var(--border-strong))" strokeWidth="0.4" strokeDasharray="1.5 2.5" />
          </svg>

          {/* Dynamic Orbital Items */}
          {props.OrbitalItems.map((item, index) => {
            const position = orbitalPositions[index % orbitalPositions.length];

            return (
              <div key={index} className="absolute -translate-x-1/2 -translate-y-1/2" style={position}>
                <span className="pp-counter-spin inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] font-medium text-ink shadow-sm">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Card */}
      <div style={{ left: '79%', top: '65%' }} className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden rounded-2xl border border-border bg-[hsl(230_55%_7%)] shadow-[0_30px_70px_-30px_hsl(var(--accent)/0.6)]">
          {/* Header */}
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />

            <span className="ml-auto font-mono text-[8px] uppercase tracking-widest text-white/40">{props.subHeading}</span>
          </div>

          <div className="space-y-2 p-3">
            {/* Main Row */}
            <div className="flex items-center gap-2">
              <span dangerouslySetInnerHTML={{ __html: props.svg }} className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent/20 text-[hsl(var(--accent-on-dark))]" />

              <div className="flex-1">
                <div className="h-1.5 w-3/4 rounded-full bg-white/20" />
                <div className="mt-1 h-1.5 w-1/2 rounded-full bg-white/10" />
              </div>

              <span className="font-mono text-[8px] text-[hsl(var(--success))]">●</span>
            </div>

            {/* Animated Bars */}
            <div className="flex h-9 items-end gap-[3px]">
              <div className="pp-bars h-full w-full">
                {Array.from({ length: 14 }).map((_, index) => (
                  <span
                    key={index}
                    style={{
                      animationDelay: `${index * 90}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Text */}
            <div className="flex items-center justify-between font-mono text-[8px] text-white/40">
              <span>{props.bottomText1}</span>

              <span className="text-[hsl(var(--success))]">{props.bottomText2}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Outer Items */}
      {props.OuterItems.map((item, index) => {
        const style = outerPositions[index % outerPositions.length];

        return (
          <div key={index} className={`absolute ${style.position} ${style.floatClass}`}>
            <span className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-2.5 py-1.5 shadow-md">
              <span dangerouslySetInnerHTML={{ __html: item.svg }} className="h-3.5 w-3.5 text-accent" />

              <span className="text-[11px] font-medium text-ink-strong">{item.text}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Type6;
