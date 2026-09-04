const CTA = (props) => {
  // console.log(props, 'CTA');
  return (
    <section className="container py-14 md:py-16 lg:py-20">
      <div className="reveal mx-auto max-w-3xl text-center is-visible">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-4 bg-accent" />
          {props.blockHeading.SubHeading}
        </span>
        <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">{props.blockHeading.heading}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.65] text-ink-muted">{props.blockHeading.description}</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {props.ctaLists.map((list, index) => {
          if (list.type == 'dark')
            return (
              <span key={index}>
                <DarkArticle data={list} />
              </span>
            );
          if (list.type == 'light')
            return (
              <span key={index}>
                <LightArticle data={list} />
              </span>
            );
        })}
      </div>
    </section>
  );
};

export default CTA;

const DarkArticle = ({ data }) => {
  return (
    <article className="reveal relative flex flex-col rounded-3xl border p-8 md:p-10 border-transparent bg-[hsl(230_55%_7%)] text-[hsl(220_30%_98%)] is-visible" data-delay={0}>
      <span className="font-mono text-sm text-[hsl(220_22%_55%)]">01</span>
      <div className="mt-3">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-success">
          <span className="h-px w-4 bg-success" />
          {data.blockHeading.SubHeading}
        </span>
      </div>
      <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.01em] md:text-3xl text-white">{data.blockHeading.heading}</h3>
      <p className="mt-3 text-[15px] leading-[1.6] text-[hsl(220_18%_78%)]">{data.blockHeading.description}</p>
      <ul className="mt-6 space-y-3">
        {data.lists.map((list, index) => {
          return (
            <li key={index} className="flex items-start gap-2.5 text-[14.5px] text-[hsl(220_22%_88%)]">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                <path d="M20 6 9 17l-5-5" />
              </svg>{' '}
              {list.text}
            </li>
          );
        })}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
        {data.buttons.map((button, index) => {
          if (index == 0) {
            return (
              <a key={index} className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14.5px] font-medium transition-all active:scale-[0.98] bg-white text-ink-strong hover:bg-white/90" href={button.link}>
                {button.text}
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            );
          } else {
            return (
              <a key={index} className="group inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-success" href={button.link}>
                {button.text}
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            );
          }
        })}
      </div>
    </article>
  );
};

const LightArticle = ({ data }) => {
  return (
    <article className="reveal relative flex flex-col rounded-3xl border p-8 md:p-10 border-border bg-surface is-visible" data-delay={80}>
      <span className="font-mono text-sm text-ink-subtle">02</span>
      <div className="mt-3">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-4 bg-accent" />
          {data.blockHeading.SubHeading}
        </span>
      </div>
      <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.01em] md:text-3xl text-ink-strong">{data.blockHeading.heading}</h3>
      <p className="mt-3 text-[15px] leading-[1.6] text-ink-muted">{data.blockHeading.description}</p>
      <ul className="mt-6 space-y-3">
        {data.lists.map((list, index) => {
          return (
            <li key={index} className="flex items-start gap-2.5 text-[14.5px] text-ink">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-[18px] w-[18px] shrink-0 text-success">
                <path d="M20 6 9 17l-5-5" />
              </svg>{' '}
              {list.text}
            </li>
          );
        })}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
        {data.buttons.map((button, index) => {
          if (index == 0) {
            return (
              <a key={index} className="group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14.5px] font-medium transition-all active:scale-[0.98] bg-accent text-accent-foreground hover:bg-accent-strong" href={button.link}>
                {button.text}
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            );
          } else {
            return (
              <a key={index} className="group inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-accent" href={button.link}>
                {button.text}
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            );
          }
        })}
      </div>
    </article>
  );
};
