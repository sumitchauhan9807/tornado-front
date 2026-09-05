const BlackBackground = ({ data }) => {
  return (
    <section className="bg-[hsl(230_55%_7%)] py-20 text-[hsl(220_30%_98%)] md:py-28">
      <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--accent-on-dark))]">
            <span className="h-px w-4 bg-[hsl(var(--accent-on-dark))]" />
            {data.blockHeading.SubHeading}
          </span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-white text-balance">{data.blockHeading.heading}</h2>
          <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-[hsl(220_18%_78%)]">{data.blockHeading.description}</p>
        </div>
        <div className="reveal grid gap-5 sm:grid-cols-2 is-visible" data-delay={80}>
          {data.descriptionLists.map((list, index) => {
            return (
              <div key={index} className="rounded-2xl border border-[hsl(230_25%_20%)] bg-[hsl(230_40%_11%)] p-6">
                <span dangerouslySetInnerHTML={{ __html: list.svg }} className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-[hsl(var(--accent-on-dark))]"></span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{list.heading}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-[hsl(220_16%_64%)]">{list.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BlackBackground;
