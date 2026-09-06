import { strapiRichTextToText } from '@/src/helpers/common';

const Hero2 = ({ data }) => {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[120%] bg-[radial-gradient(ellipse_120%_60%_at_50%_-10%,hsl(var(--accent)/0.10),transparent_60%)]" />
      <div className="container pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="reveal font-mono text-[11px] uppercase tracking-[0.22em] text-accent is-visible">
            <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-accent align-middle animate-pulse" />
            {data.topHeading}
          </p>
          <h1 className="reveal mt-6 font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.025em] text-ink-strong text-balance is-visible" data-delay={60}>
            {data.fancyHeading.map((text, index) => {
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
          <p className="reveal mx-auto mt-6 max-w-2xl text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.6] text-ink-muted text-pretty is-visible">{strapiRichTextToText(data.content)}</p>
          <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-3 is-visible">
            {data.heroButtons.map((button, index) => {
              if (index + 1 == data.heroButtons.length) {
                return (
                  <a key={index} className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[14.5px] font-medium text-accent-foreground shadow-[0_8px_24px_-8px_hsl(var(--accent)/0.6)] transition-all hover:bg-accent-strong hover:shadow-[0_12px_32px_-8px_hsl(var(--accent)/0.7)] active:scale-[0.98]" href="/contact?intent=test-route">
                    {button.button.text}
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                );
              }
              return (
                <a key={index} className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-[14.5px] font-medium text-ink transition-all hover:bg-surface-muted active:scale-[0.98]" href="/pricing">
                  {button.button.text}
                </a>
              );
            })}
          </div>
          <ul className="reveal mt-10 mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-[12.5px] text-ink-muted is-visible">
            {data.bottomLists.map((list, index) => {
              return (
                <li key={index} className="inline-flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3.5 w-3.5 text-accent">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{list.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
