const SvgOnLeft = ({ data }) => {
  return (
    <section className="bg-surface-muted/40 py-20 md:py-28">
      <div className="container-wide">
        <div className="reveal max-w-3xl is-visible">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-4 bg-accent" />
            {data.blockHeading.SubHeading}
          </span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">{data.blockHeading.heading}</h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-ink-muted">{data.blockHeading.description}</p>
        </div>
        <div className={`mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-${data.listsPerRow}`}>
          {data.descriptionLists.map((list, index) => {
            return (
              <div key={index} className="reveal pp-card flex gap-4 rounded-2xl border border-border bg-surface p-6 is-visible" data-delay={0}>
                <span dangerouslySetInnerHTML={{ __html: list.svg }} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold tracking-[-0.01em] text-ink-strong">{list.heading}</h3>
                  <p className="mt-1.5 text-[14px] leading-[1.6] text-ink-muted">{list.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SvgOnLeft;
