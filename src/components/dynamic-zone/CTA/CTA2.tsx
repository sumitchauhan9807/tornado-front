import CountUp from 'react-countup';

const CTA2 = (props) => {
  // console.log(props, 'CTA2');
  return (
    <section className="bg-[hsl(230_55%_7%)] py-14 text-[hsl(220_30%_98%)] md:py-16 lg:py-20">
      <div className="container">
        <div className="reveal max-w-3xl is-visible">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-success">
            <span className="h-px w-4 bg-success" />
            {props.blockHeading.SubHeading}
          </span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-white text-balance">{props.blockHeading.heading}</h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.65] text-[hsl(220_18%_78%)]">{props.blockHeading.description}</p>
        </div>
        <div className="reveal mt-12 grid gap-px overflow-hidden rounded-2xl border border-[hsl(230_25%_20%)] bg-[hsl(230_25%_20%)] sm:grid-cols-2 lg:grid-cols-4 is-visible">
          {props.counterUp.counterItem.map((item, index) => {
            return (
              <div key={index} className="bg-[hsl(230_55%_7%)] p-7">
                <div className="font-display text-[clamp(2rem,3.4vw,3rem)] font-medium tracking-[-0.02em] text-white">
                  <span className="tabular-nums">
                    <span className="text-accent">{item.beforeCountText}</span> <CountUp decimals={item.countValue.toString().split('.')[1]?.length || 0} start={0} end={item.countValue} duration={2} enableScrollSpy scrollSpyOnce /> <span className="text-accent">{item.afterCountText}</span>
                  </span>
                </div>
                <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">{item.heading}</div>
                <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">{item.subText}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="reveal is-visible">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-success">
              <span className="h-px w-4 bg-success" />
              {props.cta2Left.blockHeading.SubHeading}
            </span>
            <h3 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-medium tracking-[-0.02em] text-white">{props.cta2Left.blockHeading.heading}</h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-[hsl(220_18%_78%)]">{props.cta2Left.blockHeading.description}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {props.cta2Left.lists.map((list, index) => {
                return (
                  <span key={index} className="inline-flex items-center gap-2 rounded-full border border-[hsl(230_25%_24%)] bg-[hsl(230_40%_11%)] px-3.5 py-1.5 text-[13px] text-[hsl(220_22%_88%)]">
                    <span>{list.text}</span>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="reveal space-y-5 is-visible" data-delay={80}>
            {props.cta2Lists.map((list, index) => {
              return (
                <div key={index} className="flex gap-4">
                  <span dangerouslySetInnerHTML={{ __html: list.svg }} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-on-dark"></span>
                  <div>
                    <b className="font-display text-[15px] font-medium text-white">{list.heading}</b>
                    <p className="mt-1 text-[13.5px] leading-[1.55] text-[hsl(220_16%_64%)]">{list.SubHeading}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA2;
