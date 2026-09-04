const CountUpComponent = () => {
  return null
}

export default CountUpComponent

const CountUp = () => {
  return (
    <section className="bg-[hsl(230_55%_7%)] py-12 text-[hsl(220_30%_98%)] md:py-16">
      <div className="container-wide grid gap-px overflow-hidden rounded-2xl border border-[hsl(230_25%_20%)] bg-[hsl(230_25%_20%)] sm:grid-cols-2 lg:grid-cols-4">
        <div className="reveal bg-[hsl(230_55%_7%)] p-7 is-visible">
          <div className="font-display text-[clamp(1.9rem,3.2vw,2.9rem)] font-semibold tracking-[-0.02em] text-white">
            <span className="tabular-nums">
              30<span className="text-accent">+</span>
            </span>
          </div>
          <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Countries</div>
          <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">All major toll-free codes</div>
        </div>
        <div className="reveal bg-[hsl(230_55%_7%)] p-7 is-visible">
          <div className="font-display text-[clamp(1.9rem,3.2vw,2.9rem)] font-semibold tracking-[-0.02em] text-white">
            <span className="tabular-nums">
              $0
              <span className="text-accent" />
            </span>
          </div>
          <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Port-in fee</div>
          <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">We pay it for you</div>
        </div>
        <div className="reveal bg-[hsl(230_55%_7%)] p-7 is-visible">
          <div className="font-display text-[clamp(1.9rem,3.2vw,2.9rem)] font-semibold tracking-[-0.02em] text-white">
            <span className="tabular-nums">
              5<span className="text-accent">–10d</span>
            </span>
          </div>
          <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Port lead time</div>
          <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">Business days, project-managed</div>
        </div>
        <div className="reveal bg-[hsl(230_55%_7%)] p-7 is-visible">
          <div className="font-display text-[clamp(1.9rem,3.2vw,2.9rem)] font-semibold tracking-[-0.02em] text-white">
            <span className="tabular-nums">
              100<span className="text-accent">%</span>
            </span>
          </div>
          <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">Call analytics</div>
          <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">Geo, time-of-day, abandon</div>
        </div>
      </div>
    </section>
  );
};