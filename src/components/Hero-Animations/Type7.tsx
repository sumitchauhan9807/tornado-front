const extensions = [
  {
    id: 101,
    left: "59%",
    top: "10%",
    float: 'pp-float',
  },
  {
    id: 102,
    left: '96%',
    top: '35%',
    float: 'pp-float-2',
  },
  {
    id: 103,
    left: '98%',
    top: '77%',
    float: 'pp-float-3',
  },
  {
    id: 104,
    left: '59%',
    top: '97%',
    float: 'pp-float',
  },
  {
    id: 105,
    left: '18%',
    top: '74%',
    float: 'pp-float-2',
  },
  {
    id: 106,
    left: '15.359%',
    top: '30%',
    float: 'pp-float-3',
  },
];

const Type7 = (props) => {
  const OrbitalItems = props.OrbitalItems;
  return (
    <div className="reveal relative mx-auto aspect-square w-full max-w-[460px] is-visible">
      {/* Aura */}
      <div aria-hidden="true" className="pp-aura absolute inset-[14%] rounded-full opacity-70 blur-2xl" />

      {/* Connection Lines */}
      <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 h-full w-full">
        {/* Top */}
        <line x1={50} y1={50} x2={50} y2={10} stroke="hsl(var(--accent))" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 3">
          <animate attributeName="stroke-dashoffset" from={0} to={-20} dur="1.6s" repeatCount="indefinite" />
        </line>

        {/* Top Right */}
        <line x1={50} y1={50} x2="84.64101615137754" y2={30} stroke="hsl(var(--accent))" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 3">
          <animate attributeName="stroke-dashoffset" from={0} to={-20} dur="1.8s" repeatCount="indefinite" />
        </line>

        {/* Bottom Right */}
        <line x1={50} y1={50} x2="84.64101615137756" y2={70} stroke="hsl(var(--accent))" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 3">
          <animate attributeName="stroke-dashoffset" from={0} to={-20} dur="2s" repeatCount="indefinite" />
        </line>

        {/* Bottom */}
        <line x1={50} y1={50} x2={50} y2={90} stroke="hsl(var(--accent))" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 3">
          <animate attributeName="stroke-dashoffset" from={0} to={-20} dur="2.2s" repeatCount="indefinite" />
        </line>

        {/* Bottom Left */}
        <line x1={50} y1={50} x2="15.358983848622458" y2="70.00000000000001" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 3">
          <animate attributeName="stroke-dashoffset" from={0} to={-20} dur="2.4s" repeatCount="indefinite" />
        </line>

        {/* Top Left */}
        <line x1={50} y1={50} x2="15.358983848622458" y2="29.999999999999996" stroke="hsl(var(--accent))" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="2 3">
          <animate attributeName="stroke-dashoffset" from={0} to={-20} dur="2.6s" repeatCount="indefinite" />
        </line>
      </svg>

      {/* Extension Nodes */}
      {OrbitalItems.map((item,index) => {
        const  extension = extensions[index]
        return (
          <div
            key={index}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: extension.left,
              top: extension.top,
            }}
          >
            <span className={`inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-2.5 py-1.5 shadow-md ${extension.float}`}>
              <span dangerouslySetInnerHTML={{ __html: item.svg }}></span>
              <span className="font-mono text-[10px] font-medium text-ink-strong">{item.text}</span>
            </span>
          </div>
        );
      })}

      {/* PBX Center Card */}
      <div
        style={{
          left: '70%',
          top: '66%',
        }}
        className="absolute left-1/2 top-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-[hsl(230_55%_7%)] p-4 text-center shadow-[0_30px_70px_-30px_hsl(var(--accent)/0.6)]">
          {/* Building Icon */}
          <span dangerouslySetInnerHTML={{ __html: props.svg }} className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-[hsl(var(--accent-on-dark))]">
            
          </span>

          {/* PBX Label */}
          <div className="mt-2 font-display text-sm font-semibold text-white">{props.heading}</div>

          <div className="font-mono text-[8px] uppercase tracking-widest text-white/45">{props.subHeading}</div>

          {/* Animated Bars */}
          <div className="mt-2 flex h-6 items-end justify-center gap-[3px]">
            <div className="pp-bars h-full w-3/4">
              <span style={{ animationDelay: '0ms' }} />
              <span style={{ animationDelay: '110ms' }} />
              <span style={{ animationDelay: '220ms' }} />
              <span style={{ animationDelay: '330ms' }} />
              <span style={{ animationDelay: '440ms' }} />
              <span style={{ animationDelay: '550ms' }} />
              <span style={{ animationDelay: '660ms' }} />
              <span style={{ animationDelay: '770ms' }} />
              <span style={{ animationDelay: '880ms' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type7;
