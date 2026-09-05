const Basic = ({ data }) => {
  return (
    <section className="container-wide section-y-lg">
      <div className="reveal mx-auto max-w-3xl text-center is-visible">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-4 bg-accent" />
          {data.blockHeading.SubHeading}
        </span>
        <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">{data.blockHeading.heading}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.7] text-ink-muted">{data.blockHeading.description}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          {data.lists.map((list, index) => {
            return (
              <span key={index} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {list.text}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Basic;
