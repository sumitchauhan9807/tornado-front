const HeadingAndContent = ({ data }) => {
  return (
    <section className="container-wide section-y-lg">
      <div className="reveal mx-auto max-w-2xl text-center is-visible">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-4 bg-accent" />
          {data.blockHeading.SubHeading}
        </span>
        <h2 className="mt-5 font-display text-[clamp(1.7rem,3vw,2.6rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink-strong text-balance">{data.blockHeading.heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-ink-muted">{data.blockHeading.description}</p>
      </div>
      <div className={`mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-${data.listsPerRow}`}>
        {data.descriptionLists.map((list, index) => {
          return (
            <a key={index} className="reveal pp-card group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent hover:-translate-y-0.5 is-visible" data-delay={0} href={list.tags_link}>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-ink-strong">{list.heading}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 shrink-0 text-ink-subtle transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{list.content}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default HeadingAndContent;
