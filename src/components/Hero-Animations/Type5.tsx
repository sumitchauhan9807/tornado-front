const Type5 = (props) => {
  const numbersArray = String(props.number).split('').map(Number);
  return (
    <div className="reveal relative mx-auto aspect-square w-full max-w-[440px] is-visible">
      <div aria-hidden="true" className="pp-aura absolute inset-[16%] rounded-full opacity-70 blur-2xl" />
      <div style={{ left: '100%', top: '75%' }} className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden rounded-[1.6rem] border border-border bg-[hsl(230_55%_7%)] p-5 shadow-[0_30px_70px_-30px_hsl(var(--accent)/0.6)]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/50">{props.subText}</span>
            <span dangerouslySetInnerHTML={{ __html: props.svg }}></span>
          </div>
          <div className="mt-3 rounded-xl bg-white/5 px-3 py-2.5 text-center">
            <div className="font-display text-sm font-semibold text-white">{props.heading}</div>
            <div className="mt-1 flex justify-center gap-1">
              <span className="font-mono text-[10px] text-white/40">→</span>
              {numbersArray.map((num, index) => {
                return (
                  <span key={index} className="pp-otp-digit inline-flex h-6 w-5 items-center justify-center rounded bg-accent/20 font-display text-[12px] font-semibold text-[hsl(var(--accent-on-dark))] tabular-nums" style={{ animationDelay: `${index * 160}ms` }}>
                    {num}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-1.5">
            {props.dialerGrid.map((item, index) => {
              return (
                <div key={index} className="rounded-lg bg-white/5 py-1.5 text-center">
                  <div className="font-display text-sm font-semibold text-white tabular-nums">{item.number}</div>
                  <div className="font-mono text-[7px] tracking-[0.12em] text-white/40">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type5;
