const Type3 = (props) => {
  console.log(props);

  const positions = [
    { left: '102%', top: '50%' }, // 0 - right
    { left: '73%', top: '96.8%' }, // 1 - bottom-right
    { left: '27%', top: '85.8372%' }, // 2 - bottom-left
    { left: '13%', top: '50%' }, // 3 - left
    { left: '37%', top: '10.1628%' }, // 4 - top-left
    { left: '73%', top: '10.1628%' }, // 5 - top-right
  ];

  return (
    <div className="reveal relative mx-auto aspect-square w-full max-w-[460px] is-visible">
      {/* Aura */}
      <div aria-hidden="true" className="pp-aura absolute inset-[12%] rounded-full opacity-70 blur-2xl" />

      {/* Orbit */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="pp-orbit absolute inset-[5%]">
          {/* Orbit Circle */}
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle cx={50} cy={50} r={46} fill="none" stroke="hsl(var(--border-strong))" strokeWidth="0.4" strokeDasharray="1.5 2.5" />
          </svg>

          {/* Orbital Items */}
          {props.OrbitalItems?.map((item, index) => {
            // Use the position for this index.
            // % positions are repeated if there are more items than positions.
            const position = positions[index % positions.length];

            return (
              <div
                key={index}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: position.left,
                  top: position.top,
                }}
              >
                <span className="pp-counter-spin inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] font-medium text-ink shadow-sm">
                  {/* Map Pin Icon */}
                  <span dangerouslySetInnerHTML={{ __html: item.svg }}></span>

                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Card */}
      <div
        style={{
          left: '73%',
          top: '70%',
        }}
        className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-[hsl(230_55%_7%)] p-4 text-center shadow-[0_30px_70px_-30px_hsl(var(--accent)/0.6)]">
          {/* Earth Icon */}
          <span dangerouslySetInnerHTML={{ __html: props.svg }} className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-[hsl(var(--accent-on-dark))]"></span>

          {/* Title */}
          <div className="mt-2 font-display text-sm font-semibold text-white">{props.SubHeading}</div>

          {/* Subtitle */}
          <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/45">{props.heading}</div>

          {/* Location List */}
          <div className="mt-2 space-y-1">
            {props.bottomItems.map((item, index) => {
              return (
                <div key={index} className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1 pp-float">
                  <span className="font-mono text-[8px] text-white/55">{item.name}</span>

                  <span className="font-mono text-[8px] text-[hsl(var(--accent-on-dark))]">{item.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type3;
