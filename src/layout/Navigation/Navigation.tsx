'use client';
import { useState } from 'react';
import MobileNavigation from './MobileNav';
import { PRODUCTS, FEATURES, INDUSTRIES, RESOURCES, COMAPNY, PRICING } from './Links';
import DropDownMulti from './components/DropDownMulti';
import DropDownSingle from './components/DropDownSingle';
import DropDownSimple from './components/DropDownSimple';

const Navigation = () => {
  const [showMobileNav,setShowMobileNav] = useState(false)
  // const showMobileNav = () => {};
  // return <MobileNavigation/>
  return (
    <>
    {showMobileNav && <MobileNavigation setShowMobileNav={setShowMobileNav}/>}
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <a className="inline-flex items-center " aria-label="The Telephony Co — Every call matters" href="/">
          <img src="https://tornadodialer.net/assets/images/Logo.svg" alt="The Telephony Co" style={{ height: '60px' }} className="h-10 w-auto md:h-11 " loading="eager" decoding="async" />
        </a>
        <nav className="hidden items-center gap-0.5 lg:flex">
          <DropDownMulti data={PRODUCTS} />
          <DropDownMulti data={FEATURES} />
          <DropDownSingle data={INDUSTRIES} />
          <DropDownSingle data={RESOURCES} />
          <DropDownSingle data={COMAPNY} />
          <a className="rounded-md px-3 py-2 text-sm font-medium transition-colors text-ink-muted hover:text-ink-strong" href="/partners">
            Partners
          </a>
          <DropDownSimple data={PRICING} />
        </nav>
        <div className="flex items-center gap-2">
          <a className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground [&_svg]:transition-colors h-9 rounded-md px-3 hidden text-ink-muted sm:inline-flex" href="/login">
            Sign in
          </a>
          <a className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md hidden h-10 bg-ink-strong px-4 text-white hover:bg-ink lg:inline-flex" href="/talk-to-sales">
            Talk to sales{' '}
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-1 h-3.5 w-3.5">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
          <button
            onClick={() => {
              setShowMobileNav(true);
            }}
            type="button"
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-ink-strong lg:hidden"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r3:"
            data-state="closed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-5 w-5">
              <line x1={4} x2={20} y1={12} y2={12} />
              <line x1={4} x2={20} y1={6} y2={6} />
              <line x1={4} x2={20} y1={18} y2={18} />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
