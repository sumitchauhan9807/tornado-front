import { appendBaseUrl } from '@/src/helpers/common';

const CountriesSection = (props) => {
  console.log(props, 'contriesss');
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
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {props.countries.map((country, index) => {
          return (
            <a key={index} className="reveal pp-card group flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3.5 transition-all hover:border-accent hover:-translate-y-0.5 is-visible" data-delay={0} href={`/${country.name}`}>
              <img style={{height:"20px"}} src={appendBaseUrl(country.flag.url)}/>
              {/* <span  className="fi fi-in inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] " style={{ width: '26px', height: '20px', backgroundSize: 'cover' }} /> */}
              <span className="min-w-0 flex-1">
                <span className="block truncate font-display text-[15px] font-semibold text-ink-strong">{country.name}</span>
                <span className="block font-mono text-[11px] text-ink-subtle">{country.CountryCode}</span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 shrink-0 text-ink-subtle transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          );
        })}
      </div>
      <p className="reveal mt-7 text-center text-[13.5px] text-ink-muted is-visible">{props.subText}</p>
    </section>
  );
};
export default CountriesSection;
