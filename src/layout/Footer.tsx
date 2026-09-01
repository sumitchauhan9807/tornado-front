'use client';

import { useQuery } from '@apollo/client/react';
import { FOOTER_QUERY } from '@/src/graphql/footer';
import { PageSkeleton } from '@/src/components/Skeletons';
import { appendBaseUrl, strapiRichTextToText } from '@/src/helpers/common';

function Footer() {
  const { data, loading, error } = useQuery(FOOTER_QUERY);

  if (loading) return <PageSkeleton />;
  if (error) return <p>Error</p>;

  const logo = data?.footer.logo;
  const subFooter = data?.footer.subFooter;
  const companyInfo = data?.footer.companyInfo;
  const footerBottom = data?.footer.footerBottom;

  console.log(companyInfo, 'companyInfo');
  return (
    <footer className="mt-10 border-t border-border bg-surface-muted/60 md:mt-12 lg:mt-14">
      <div className="container-wide py-12 md:py-16">
        <div className="flex flex-col gap-6 border-b border-border pb-10 sm:flex-row sm:items-center sm:justify-between">
          <a className="inline-flex items-center " aria-label="The Telephony Co — Every call matters" href="/">
            <img  style={{
                  width: `${logo.width}px`,
                  height: `${logo.height}px`,
                }} src={appendBaseUrl(logo.logo.url)} alt="The Telephony Co" className="h-10 w-auto md:h-11 " loading="eager" decoding="async" />
          </a>
          <div className="flex items-center gap-2 text-sm">
            <span className="eyebrow mr-1">Region</span>
            <a className="rounded-lg border px-3 py-1.5 transition-colors border-border text-ink-muted hover:border-ink hover:text-ink-strong" href="/india">
              India
            </a>
            <a className="rounded-lg border px-3 py-1.5 transition-colors border-ink bg-ink text-paper" href="/">
              Global
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-12 sm:grid-cols-3 lg:grid-cols-6">
          {subFooter.map((data, index) => {
            return (
              <div key={index}>
                <p className="eyebrow mb-4">{data.heading}</p>
                <ul className="space-y-2.5 text-sm">
                  {data.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <a className="text-ink-muted transition-colors hover:text-ink-strong" target="_blank" href={link.link}>
                          {link.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                {/* <a className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink-strong transition-colors hover:text-ink" href="/products">
                  Explore more products <span aria-hidden="true">→</span>
                </a> */}
              </div>
            );
          })}
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-8 border-t border-border pt-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1">
            <p className="eyebrow mb-4">{companyInfo.main.heading}</p>
            <div className="flex items-start gap-3 text-sm text-ink-muted">
              <span aria-hidden="true" className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-ink text-paper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                  <path d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" strokeLinejoin="round" />
                  <circle cx={12} cy={10} r="2.5" />
                </svg>
              </span>
              <p className="leading-relaxed">{strapiRichTextToText(companyInfo.main.address)}</p>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <p className="eyebrow mb-4">Call Us</p>
            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {companyInfo.countriesSection.countries.map((country, index) => {
                return (
                  <li key={index} className="relative flex items-start">
                    {/* <img src={appendBaseUrl(country.flag.url)} alt={`${country.name} flag`} className="absolute  flex-none rounded-[3px] object-cover" style={{ left: '-40px', top: '5px', height: '20px', width: '32px' }} /> */}
                    <img
                      src={appendBaseUrl(country.flag.url)}
                      alt={`${country.name} flag`}
                      className="absolute flex-none rounded-[3px] object-cover lg:left-[-40px]"
                      style={{ top: '5px', height: '20px', width: '32px' }}
                    />

                    <span className="text-sm">
                      <a href={`tel:${country.number}`} className="font-medium text-ink-strong transition-colors hover:text-ink">
                        {country.number}
                      </a>

                      <span className="mt-0.5 block text-xs text-ink-muted">{country.name}</span>
                    </span>
                  </li>
                );
              })}
              {/* <li className="flex items-start gap-3">
                <span role="img" aria-label="United Kingdom flag" className="fi fi-gb inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{ width: '24px', height: '18px', backgroundSize: 'cover' }} />
                <span className="text-sm">
                  <a href="tel:448002294882" className="font-medium text-ink-strong transition-colors hover:text-ink">
                    +44 800 229 4882
                  </a>
                  <span className="mt-0.5 block text-xs text-ink-muted">United Kingdom</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span role="img" aria-label="Australia flag" className="fi fi-au inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{ width: '24px', height: '18px', backgroundSize: 'cover' }} />
                <span className="text-sm">
                  <a href="tel:611800716800" className="font-medium text-ink-strong transition-colors hover:text-ink">
                    +61 1800 716 800
                  </a>
                  <span className="mt-0.5 block text-xs text-ink-muted">Australia</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span role="img" aria-label="India flag" className="fi fi-in inline-block flex-none rounded-[3px] shadow-[inset_0_0_0_1px_hsl(var(--border))] mt-0.5" style={{ width: '24px', height: '18px', backgroundSize: 'cover' }} />
                <span className="text-sm">
                  <a href="tel:18002122006" className="font-medium text-ink-strong transition-colors hover:text-ink">
                    1800 212 2006
                  </a>
                  <span className="mt-0.5 block text-xs text-ink-muted">India</span>
                </span>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-ink-muted md:flex-row md:items-center">
          <p>{footerBottom.Copyright}</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footerBottom.socialMedia.map((data, index) => {
              return (
                <li key={index}>
                  <a href={data.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
                    {data.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
