const ListsOnRight = ({ data }) => {
  return (
    <section className="container-wide section-y-lg">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-4 bg-accent" />
            {data.blockHeading.SubHeading}
          </span>
          <h2 className="mt-5 font-display text-[clamp(1.7rem,3vw,2.6rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink-strong text-balance">{data.blockHeading.heading}</h2>
          <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-ink-muted">{data.blockHeading.description}</p>
        </div>
        <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-4 is-visible" data-delay={80}>
          {data.lists.map((list, index) => {
            return (
              <div key={index} className="pp-card flex items-center justify-center rounded-xl border border-border bg-surface px-3 py-5 text-center font-display text-[15px] font-semibold text-ink">
                {list.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ListsOnRight;
