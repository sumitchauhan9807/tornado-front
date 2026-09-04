const HomeMarquee = (props) => {
  // console.log(props, 'marqueee');
  return (
    <div className="border-y border-border bg-surface-muted/40 py-6">
      <div className="container mb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle">{props.heading}</span>
      </div>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max gap-12 animate-[home-marquee_38s_linear_infinite] group-hover:[animation-play-state:paused]">
          {props.lists.map((list, index) => {
            return (
              <span key={index} className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-medium text-ink-subtle">
                <span className="h-2 w-2 rounded-sm bg-accent/40" />
                {list.text}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HomeMarquee;
