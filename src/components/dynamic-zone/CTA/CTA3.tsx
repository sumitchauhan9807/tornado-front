const CTA3 = (props) => {
  // console.log(props, 'CTA3');
  return (
    <section  className="container py-10 md:py-14 lg:py-16">
      <div style={{backgroundColor:"#7A17F4"}} className="reveal relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-accent to-accent-strong p-10 text-center md:p-16 is-visible">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(0_0%_100%/0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            <span className="h-px w-4 bg-white/60" />
            {props.blockHeading.SubHeading}
          </span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-medium leading-[1.06] tracking-[-0.02em] text-white text-balance">{props.blockHeading.heading}</h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.6] text-white/85">{props.blockHeading.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {props.buttons.map((button, index) => {
              if (index == 0) {
                return (
                  <a key={index} className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[15px] font-medium text-accent shadow-lg transition-all hover:shadow-xl active:scale-[0.98]" href={button.link}>
                    {button.text}
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                );
              } else {
                return (
                  <a key={index} className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-[15px] font-medium text-white hover:bg-white/10 active:scale-[0.98] transition-all" href={button.link}>
                    {button.text}
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA3;
