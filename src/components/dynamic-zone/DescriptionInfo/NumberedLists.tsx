const NumberedLists = ({ data }) => {
  return (
    <section className="container-wide section-y-lg">
      <div className="reveal mx-auto max-w-2xl text-center is-visible">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-4 bg-accent" />
          {data.blockHeading.SubHeading}
        </span>
        <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">{data.blockHeading.heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-ink-muted">{data.blockHeading.description}</p>
      </div>
      <div className={`mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-${data.listsPerRow}`}>
        {data.descriptionLists.map((list, index) => {
          return (
            <div key={index} className="reveal relative is-visible">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground font-display text-lg font-semibold shadow-[0_10px_30px_-12px_hsl(var(--accent)/0.7)]">{index+1}</span>
                {index+1 != data.descriptionLists.length && <span className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent lg:block" aria-hidden="true" />}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.01em] text-ink-strong">{list.heading}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{list.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default NumberedLists;
