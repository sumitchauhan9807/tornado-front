import Countries from '@/src/components/Countries'
const CountriesSection = (props) => {
  // console.log(props, 'contriesss');
  return (
    <section className="container-wide section-y-lg">
      <div className="reveal mx-auto max-w-2xl text-center is-visible">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-4 bg-accent" />
          {props.blockHeading.heading}
        </span>
        <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance"> {props.blockHeading.SubHeading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-ink-muted"> {props.blockHeading.description}</p>
      </div>
      <Countries/>
      <p className="reveal mt-7 text-center text-[13.5px] text-ink-muted is-visible">{props.subText}</p>
    </section>
  );
};
export default CountriesSection;
