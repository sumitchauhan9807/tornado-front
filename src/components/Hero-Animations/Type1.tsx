import { useState } from "react";

const Type1 = (props) => {
  const [active,setActive] = useState('routes')
  return (
    <div className="reveal overflow-hidden rounded-[18px] border border-border bg-surface shadow-[0_30px_70px_-30px_hsl(var(--ink-strong)/0.25)] is-visible">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-mono text-[11px] tracking-[0.04em] text-ink-muted">{props.topHeading}</span>
        <div className="flex gap-1 rounded-full bg-surface-muted p-0.5">
          <button onClick={() =>{ setActive('routes')}} type="button" className={`rounded-full px-3 py-1 text-[11px] font-medium capitalize transition-colors ${active == 'routes' ? 'bg-surface text-ink-strong shadow-sm' : 'text-ink-muted hover:text-ink'}`}>
            {props.button1Text}
          </button>
          <button onClick={() =>{ setActive('status')}} type="button" className={`rounded-full px-3 py-1 text-[11px] font-medium capitalize transition-colors ${active == 'status' ? 'bg-surface text-ink-strong shadow-sm' : 'text-ink-muted hover:text-ink'}`}>
            {props.button2Text}
          </button>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.svg }} className="relative bg-[hsl(230_55%_7%)]"></div>
      {active == 'status' && <div className="divide-y divide-border">
        {props.statusValues.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-between px-4 py-2.5 text-[13px]">
              <span className="text-ink">{item.text}</span>
              <span className="inline-flex items-center gap-2 font-medium text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                {item.type}
              </span>
            </div>
          );
        })}
      </div>}
      {active == 'routes' && <div className="divide-y divide-border">
        {props.routes.map((item,index)=>{
        return (
          <div key={index} className="grid grid-cols-[44px_1fr_auto_auto] items-center gap-3 px-4 py-2.5 text-[13px]">
          <span className="font-mono font-medium text-accent">{item.code}</span>
          <span className="text-ink">{item.text}</span>
          <span className="font-mono text-ink-strong">{item.rate}</span>
          <span className="font-mono text-ink-subtle">{item.time}</span>
        </div>
        )
      })}
      </div>}
      <div className="flex items-center justify-between border-t border-border bg-surface-muted/60 px-4 py-2.5 text-[11px] text-ink-muted">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          {props.bottomLeftText}
        </span>
        <span className="font-mono">{props.bottomRightText}</span>
      </div>
    </div>
  );
};

export default Type1;
