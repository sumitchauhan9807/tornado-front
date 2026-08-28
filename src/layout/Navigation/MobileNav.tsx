import { PRODUCTS, FEATURES, INDUSTRIES, RESOURCES, COMAPNY, PRICING } from './Links';

function MobileLinkSingle({ data }) {
  return (
    <details className="group border-b border-border last:border-0">
      <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 text-base font-semibold text-ink hover:bg-surface-muted">
        {data.name}
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 text-ink-muted transition-transform group-open:rotate-180">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <div className="pb-2 pl-1">
        {data.dropdowns.map((item, index) => {
          return (
            <a key={index} className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/insurance-contact-center-software">
              <span dangerouslySetInnerHTML={{ __html: item.svg }}></span>
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    </details>
  );
}

function MobileLinkMulti({ data }) {
  return (
    <details className="group border-b border-border last:border-0">
      <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 text-base font-semibold text-ink hover:bg-surface-muted">
        {data.name}
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 text-ink-muted transition-transform group-open:rotate-180">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <div className="pb-2 pl-1">
        {data.dropdowns.map((item, index) => {
          return (
            <div key={index} className="mb-2">
              <p className="px-3 pb-1 pt-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-subtle">{item.name}</p>
              {item.subDropdowns.map((link, index) => {
                return (
                  <a key={index} className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/toll-free-numbers">
                    <span dangerouslySetInnerHTML={{ __html: link.svg }}></span>
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          );
        })}
        <a className="flex items-center gap-2.5 rounded-md px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-surface-muted" href="/products">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-4 w-4 flex-none text-ink-muted" aria-hidden="true">
            <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
            <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
            <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
          </svg>
          <span>View all {data.name}</span>
        </a>
      </div>
    </details>
  );
}

function MobileNav({ data, setShowMobileNav }) {
  return (
    <>
      <div
        onClick={() => {
          setShowMobileNav(false);
        }}
        className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        data-aria-hidden="true"
        aria-hidden="true"
        style={{ pointerEvents: 'auto' }}
      />
      <div
        role="dialog"
        id="radix-:r3:"
        aria-describedby="radix-:r5:"
        aria-labelledby="radix-:r4:"
        data-state="open"
        className="fixed z-50 gap-4 bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm w-[90vw] max-w-sm p-0"
        tabIndex={-1}
        style={{
          pointerEvents: 'auto',
        }}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
            <a className="inline-flex items-center " aria-label="The Telephony Co — Every call matters" href="/">
              <img src="https://tornadodialer.net/assets/images/Logo.svg" alt="The Telephony Co" className="h-10 w-auto md:h-11 " loading="eager" decoding="async" />
            </a>
            <div role="group" aria-label="Select region" className="inline-flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5">
              <span aria-current="page" className="inline-flex items-center gap-1.5 rounded-full bg-ink-strong font-semibold uppercase tracking-[0.1em] text-white px-2 py-1 text-[11px]">
                <span
                  role="img"
                  aria-label="United States flag"
                  className="fi fi-us inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] "
                  style={{
                    width: '13px',
                    height: '10px',
                    backgroundSize: 'cover',
                  }}
                />
                Global
              </span>
              <a className="inline-flex items-center gap-1.5 rounded-full font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink-strong px-2 py-1 text-[11px]" href="/india">
                <span
                  role="img"
                  aria-label="India flag"
                  className="fi fi-in inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] opacity-70"
                  style={{
                    width: '13px',
                    height: '10px',
                    backgroundSize: 'cover',
                  }}
                />
                India
              </a>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-3">
            {data.navigation.links.map((navLink, index) => {
              return (
                <span key={index}>
                  {navLink.type == 'multi' ? <MobileLinkMulti data={navLink} /> : null}
                  {navLink.type == 'single' ? <MobileLinkSingle data={navLink} /> : null}
                  {navLink.type == 'simple' ? <MobileLinkSingle data={navLink} /> : null}
                  {navLink.type == 'link' ? (
                    <a className="block rounded-md px-4 py-3 text-base font-semibold text-ink hover:bg-surface-muted" href="/partners">
                      {navLink.name}
                    </a>
                  ) : null}
                </span>
              );
            })}
          </nav>
          <div className="space-y-2 border-t border-border p-4">
            <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full bg-accent text-accent-foreground hover:bg-accent-strong" href="/demo">
              Book a free demo
            </a>
            <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full" href="/talk-to-sales">
              Talk to sales
            </a>
            <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground [&_svg]:transition-colors h-10 px-4 py-2 w-full" href="/login">
              Sign in
            </a>
            <a href="tel:18009221341" className="block pt-1 text-center font-mono text-[12px] text-ink-muted">
              +1 800 922 1341
            </a>
          </div>
        </div>
        <button
          onClick={() => {
            setShowMobileNav(false);
          }}
          type="button"
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  );
}

export default MobileNav;
