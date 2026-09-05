const SvgWithTags = ({data}) => {
  return (
    <section className="bg-surface-muted/40 py-14 md:py-16 lg:py-20">
      <div className="container">
        <div className="reveal max-w-3xl is-visible">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-4 bg-accent" />
            {data.blockHeading.SubHeading}
          </span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">{data.blockHeading.heading}</h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-ink-muted">{data.blockHeading.description}</p>
        </div>
        <div className={`reveal mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-${data.listsPerRow} is-visible`}>
          {data.descriptionLists.map((list, index) => {
            return (
              <a key={index} className="cursor-pointer group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_18px_40px_-24px_hsl(var(--ink-strong)/0.3)]">
                <span dangerouslySetInnerHTML={{ __html: list.svg }} className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent"></span>
                <h4 className="mt-4 flex items-center gap-2 font-display text-lg font-medium tracking-[-0.01em] text-ink-strong">{list.heading}</h4>
                <p className="mt-2 flex-1 text-[13.5px] leading-[1.55] text-ink-muted">{list.content}</p>
                <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">{list.tags_link}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SvgWithTags