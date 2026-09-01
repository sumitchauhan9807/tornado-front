'use client';
import { useEffect, useState } from 'react';
import Navigation from '@/src/layout/Navigation/Navigation'
import { useQuery } from "@apollo/client/react";
import {NAVIGATION_QUERY} from '@/src/graphql/naigation'
import { PageSkeleton } from '@/src/components/Skeletons'


function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { data, loading, error } = useQuery(NAVIGATION_QUERY);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 0);
      };
  
      handleScroll(); // Set initial state
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const navClass = `
      sticky top-0 z-40 w-full
      transition-[background-color,backdrop-filter,border-color]
      duration-300
      ${scrolled
        ? "border-b border-border bg-paper/85 backdrop-blur-md"
        : "border-b border-transparent bg-transparent"
      }
    `;

    if (loading) return <PageSkeleton/>;
  if (error) return <p>Error</p>;

  const preHeader = data.navigation.preHeader
  return (
    <>
      <header className={`${navClass}`}>
        <div className="border-b border-border bg-paper-warm/60">
          <div className="container-wide flex min-h-9 items-center justify-between gap-3 py-1 font-mono text-[12px] text-ink-muted sm:text-[12.5px]">
            <div className="flex min-w-0 items-center gap-3">
              <span className="h-1.5 w-1.5 flex-none rounded-full bg-ink-strong" />
              <span className="truncate">
                <span className="font-semibold uppercase tracking-[0.16em] text-ink-strong">{preHeader.leftText1}</span>
                <span className="text-ink-subtle"> · </span>
                <span className="font-medium uppercase tracking-[0.14em] text-ink-strong">{preHeader.leftText2}</span>
                <span className="hidden text-ink-subtle md:inline"> · </span>
                <span className="hidden text-ink-muted md:inline">{preHeader.leftText3}</span>
              </span>
            </div>
            <div className="flex flex-none items-center gap-4">
              <a href="tel:18009221341" className="hidden text-[13px] font-medium hover:text-ink-strong sm:inline sm:text-[13.5px]">
                {preHeader.Phonenumber}
              </a>
              <div role="group" aria-label="Select region" className="inline-flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5">
                <span aria-current="page" className="inline-flex items-center gap-1.5 rounded-full bg-ink-strong font-semibold uppercase tracking-[0.1em] text-white px-2 py-1 text-[11px]">
                  <span role="img" aria-label="United States flag" className="fi fi-us inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] " style={{ width: '13px', height: '10px', backgroundSize: 'cover' }} />
                  Global{' '}
                </span>
                <a className="inline-flex items-center gap-1.5 rounded-full font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink-strong px-2 py-1 text-[11px]" href="/india">
                  <span role="img" aria-label="India flag" className="fi fi-in inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] opacity-70" style={{ width: '13px', height: '10px', backgroundSize: 'cover' }} />
                  India{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
        <Navigation data={data} />
      </header>
    </>
  );
}

export default Header;
