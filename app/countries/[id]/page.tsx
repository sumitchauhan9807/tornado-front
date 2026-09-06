'use client';
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import { COUNTRY_QUERY } from '@/src/graphql/countries';
import { useQuery } from '@apollo/client/react';
import { useParams } from 'next/navigation';
import { PageSkeleton } from '@/src/components/Skeletons';
import DynamicZone from '@/src/components/dynamic-zone/product';
import { GERMANY_CITIES } from '@/src/de';
import { useState } from 'react';

export default function Countries() {
  const params = useParams()
  const id = params.id;
  const cleanId = decodeURIComponent(id);
  return (
    <>
      <div>
        <div className="min-h-screen bg-background text-ink reveal-ready">
          <Header />
          <main>
            <CountriesHtml cleanId={cleanId} />
            <CitiesSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

const CountriesHtml = ({cleanId}) => {
  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[120%] bg-[radial-gradient(ellipse_110%_60%_at_70%_-10%,hsl(var(--accent)/0.10),transparent_60%)]" />
        <div className="container grid items-center gap-12 pt-12 pb-12 md:pt-16 md:pb-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="reveal is-visible">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="h-px w-4 bg-accent" />
                Country Coverage . Europe
              </span>
            </div>
            <h1 className="reveal mt-6 font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.025em] text-ink-strong text-balance is-visible" data-delay={60}>
              SIP trunking and <span className='accent-mark text-accent'>{cleanId} </span>business phone numbers
            </h1>
            <p className="reveal mt-6 max-w-xl text-[clamp(1rem,1.3vw,1.18rem)] leading-[1.6] text-ink-muted text-pretty is-visible" data-delay={120}>
              Carrier-grade A-Z termination, SIP trunking and a programmable voice API for builders — plus a ready-to-run cloud phone system and contact centre for teams. Born in {cleanId}. Routing the world.
            </p>
            <div className="reveal mt-9 flex flex-wrap items-center gap-3 is-visible" data-delay={180}>
              <a target="_blank" href="/" className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[15px] font-medium text-accent-foreground shadow-[0_10px_30px_-12px_hsl(var(--accent)/0.7)] transition-all hover:bg-accent-strong active:scale-[0.98]">
                Request a test route
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a target="_blank" href="/" className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface px-6 py-3 text-[15px] font-medium text-ink hover:border-ink active:scale-[0.98] transition-all">
                See live rates
              </a>
            </div>
          </div>
          <div className="reveal overflow-hidden rounded-[18px] border border-border bg-surface shadow-[0_30px_70px_-30px_hsl(var(--ink-strong)/0.25)] is-visible">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVcqbHuG6BXw5NE_uzEuVhLCx3f90k_oH09iU9WwZ7g&s=10" />
          </div>
        </div>
      </section>
    </>
  );
};

const CitiesSection = () => {
  const params = useParams();
  const [citiesSize, setCitiesSize] = useState(10);
  const [showBtn, setShowBtn] = useState(true);
  const [cities, setCities] = useState([]);
  const id = params.id;
  const cleanId = decodeURIComponent(id);
  console.log(cleanId);
  const { data, loading, error } = useQuery(COUNTRY_QUERY, {
    variables: {
      filters: {
        name: {
          eq: cleanId,
        },
      },
      citiesPagination: {
        page: 1,
        pageSize: citiesSize,
      },
    },
  });

  // if (loading) return <PageSkeleton />;
  // if (error) return <p>Error</p>;
  // console.log(data?.home.content[0].)
  // console.log(data)
  console.log(data?.countries[0], 'data?.products[0]');
  // return null
  // if (data?.countries.length == 0) return <h1>{id} countries not found</h1>;

  return (
    <section className="container-wide section-y-lg">
      <div className="r  is-visible">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-4 bg-accent" />
          Local coverage
        </span>
        <h2 className="mt-5 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-ink-strong text-balance">Cities we serve in {cleanId}</h2>
        <p className=" mt-5 max-w-xl text-[15px] leading-[1.65] text-ink-muted">Local presence in 625+ cities — pick yours to see area codes and services.</p>
      </div>
      {data?.countries[0].cities.length ? <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {data?.countries[0].cities.map((city, index) => {
          return (
            <a key={index} className="cursor-pointer reveal pp-card group flex items-center gap-3  border border-border bg-surface px-4 py-3.5 transition-all hover:border-accent hover:-translate-y-0.5 is-visible" >
              {/* <img alt="Albania" src="https://strapi.tornadodialer.net/uploads/Albania_93c16cae31.jpg" style={{ height: '20px' }} /> */}
              <span className="min-w-0 flex-1">
                <span className="block truncate font-display text-[15px] font-semibold text-ink-strong">{city.name}</span>
                <span className="block font-mono text-[11px] text-ink-subtle">+49 {city?.areaCodes[0].text}</span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-ink-subtle transition-all group-hover:text-accent">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          );
        })}
      </div> : loading ? <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 text-center">Loading cities</div> : <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 text-center">No cities found</div> }
      
      {showBtn && (
        <center>
          <a
          href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowBtn(false);
              setCitiesSize(10000000);
            }}
            className="mt-4 mx-auto inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface px-6 py-3 text-[15px] font-medium text-ink hover:border-ink active:scale-[0.98] transition-all"
          >
            View all cities
          </a>
        </center>
      )}
      {/* <p className="reveal mt-7  text-[13.5px] text-ink-muted is-visible">And 55+ more destinations — ask us for any country.</p> */}
    </section>
  );
};
