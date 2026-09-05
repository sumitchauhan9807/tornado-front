const ListsInGrid = ({ data }) => {
  
  let listsPerRow = data.listsPerRow
  if(data.descriptionLists.length < 3) {
    listsPerRow = data.descriptionLists.length
  }
  return (
    <section className="bg-surface-muted/40 py-20 md:py-28">
      <div className="container-wide">
        <div className="reveal max-w-2xl is-visible">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-4 bg-accent" />
            {data.blockHeading.SubHeading}
          </span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">{data.blockHeading.heading}</h2>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-ink-muted">{data.blockHeading.description}</p>
        </div>
        <div className={`mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-${listsPerRow}`}>
          {data.descriptionLists.map((list, index) => {
            return (
              <div key={index} className="reveal bg-surface p-7 is-visible">
                <span className="font-mono text-xs text-ink-subtle">0{index+1}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink-strong">{list.heading}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{list.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ListsInGrid;
