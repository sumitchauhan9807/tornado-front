import { useState } from "react";

const FAQ = (props) => {
  const [active,setActive] = useState(null)


  const setActiveQuestion = (index) => {
    console.log(active,index)
    if(active == index) {
      setActive(null)
      return
    }
    setActive(index)
  }
  return (
    <section className="container-prose py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="reveal eyebrow is-visible">{props.blockHeading.SubHeading}</p>
          <h2 className="reveal mt-3 font-display text-3xl font-semibold md:text-4xl is-visible">{props.blockHeading.heading}</h2>
          <p className="reveal mt-4 text-ink-muted is-visible">{props.blockHeading.description}</p>
        </div>
        <div className="md:col-span-8">
          <div className="reveal divide-y divide-border rounded-xl border border-border bg-surface is-visible" data-orientation="vertical">
            {props.qna.map((list, index) => {
              return (
                <div onClick={()=>{setActiveQuestion(index)}} key={index} data-orientation="vertical" className="border-0 px-5">
                  <h3 data-orientation="vertical" data-state="closed" className="flex">
                    <button type="button" aria-controls="radix-:r3n:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r3m:" className="flex flex-1 items-center justify-between transition-all [&[data-state=open]>svg]:rotate-180 py-5 text-left text-base font-semibold text-ink-strong hover:no-underline" data-radix-collection-item>
                      How fast can I get a US toll-free?
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </h3>
                  <div  role="region" aria-labelledby="radix-:r3m:" data-orientation="vertical" className={`overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down ${active == index ? '' : "hidden"}`}>
                    <div className="pt-0 pb-5 text-[15px] leading-relaxed text-ink-muted">Standard 1-8XX numbers can be live in minutes via API. Vanity 1-800 patterns depend on availability — we search inventory and reserve the same day.</div>
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
export default FAQ;
