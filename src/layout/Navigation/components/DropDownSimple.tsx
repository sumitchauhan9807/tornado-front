function DropDownSimple({ data }) {
  return (
    <div className="group relative">
      <a className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors text-ink-muted hover:text-ink-strong" href="/pricing">
        {data.name}{' '}
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform group-hover:rotate-180">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
      <div className="invisible absolute right-0 top-full z-50 pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="w-60 rounded-2xl border border-border bg-paper p-2 shadow-[0_24px_60px_-24px_hsl(var(--ink)/0.35)]">
          {data.dropdowns.map((item, index) => {
            return (
              <a key={index} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13.5px] text-ink hover:bg-surface-muted" href="/pricing#plans">
                <span dangerouslySetInnerHTML={{__html: item.svg}}></span>
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DropDownSimple;
