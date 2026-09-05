import HeroAnimations from '../../Hero-Animations';
import { strapiRichTextToText } from '@/src/helpers/common';

const Hero1 = (props) => {
  // console.log(props, 'Asdasdasdasd');
  //relative overflow-hidden bg-paper
  return (
    <section className="relative overflow-hidden bg-paper">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[120%] bg-[radial-gradient(ellipse_110%_60%_at_70%_-10%,hsl(var(--accent)/0.10),transparent_60%)]" />
      <div className="container grid items-center gap-12 pt-12 pb-12 md:pt-16 md:pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="reveal is-visible">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              <span className="h-px w-4 bg-accent" />
              {props.topHeading}
            </span>
          </div>
          <h1 className="reveal mt-6 font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.025em] text-ink-strong text-balance is-visible" data-delay={60}>
            {props.fancyHeading.map((text, index) => {
              if (text.type == 'simple') return text.text;
              if (text.type == 'fancy')
                return (
                  <span key={index} className="text-accent">
                    {text.text}
                  </span>
                );
              if (text.type == 'underlined')
                return (
                  <span key={index} className="accent-mark text-accent">
                    {text.text}
                  </span>
                );
            })}
            {/* The voice network behind your <span className="text-accent">numbers</span>, minutes &amp; apps */}
          </h1>
          <p className="reveal mt-6 max-w-xl text-[clamp(1rem,1.3vw,1.18rem)] leading-[1.6] text-ink-muted text-pretty is-visible" data-delay={120}>
            {strapiRichTextToText(props.content)}
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-3 is-visible" data-delay={180}>
            {props.heroButtons.map((button, index) => {
              if (index + 1 == props.heroButtons.length) {
                return (
                  <a target="_blank" href={button.button.link} key={index} className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface px-6 py-3 text-[15px] font-medium text-ink hover:border-ink active:scale-[0.98] transition-all">
                    {button.button.text}
                  </a>
                );
              }
              return (
                <a target="_blank" key={index} href={button.button.link} className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[15px] font-medium text-accent-foreground shadow-[0_10px_30px_-12px_hsl(var(--accent)/0.7)] transition-all hover:bg-accent-strong active:scale-[0.98]">
                  {button.button.text}
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              );
            })}
          </div>
          <div className="reveal mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-muted is-visible" data-delay={240}>
            {props.bottomLists.map((list, index) => {
              return (
                <span key={index} className="inline-flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4 text-success">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{' '}
                  {list.text}
                </span>
              );
            })}
          </div>
        </div>
        <HeroAnimations data={props.animation.content} />
      </div>
    </section>
  );
};

export default Hero1;
