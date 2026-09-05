import CountUp from 'react-countup';
const CountUpComponent = (props) => {
  return (
    <section className="bg-[hsl(230_55%_7%)] py-12 text-[hsl(220_30%_98%)] md:py-16">
      <div className="container-wide grid gap-px overflow-hidden rounded-2xl border border-[hsl(230_25%_20%)] bg-[hsl(230_25%_20%)] sm:grid-cols-2 lg:grid-cols-4">
        {props.counterItem.map((item, index) => {
          const countTextColored = item.countTextColored == 'yes' ? true : false;
          return (
            <div key={index} className="reveal bg-[hsl(230_55%_7%)] p-7 is-visible">
              <div className="font-display text-[clamp(1.9rem,3.2vw,2.9rem)] font-semibold tracking-[-0.02em] text-white">
                <span className="tabular-nums">
                  <span className={` ${countTextColored ? 'text-accent' : ''}`}>{item.beforeCountText}</span>
                  <CountUp decimals={item.countValue.toString().split('.')[1]?.length || 0} start={0} end={item.countValue} duration={2} enableScrollSpy scrollSpyOnce />
                  <span className={` ${countTextColored ? 'text-accent' : ''}`}>{item.afterCountText}</span>
                </span>
              </div>
              <div className="mt-2 text-sm font-medium text-[hsl(220_22%_88%)]">{item.heading}</div>
              <div className="mt-0.5 text-[12.5px] text-[hsl(220_16%_56%)]">{item.subText}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CountUpComponent;
