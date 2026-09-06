import { COUNTRIES_QUERY } from '@/src/graphql/countries';
import { PageSkeleton } from '@/src/components/Skeletons';
import { appendBaseUrl } from '@/src/helpers/common';
import { gqlClient } from '@/src/http-client/apollo';
import { useMemo, useState } from 'react';
import Link from 'next/link';

const Countries = async () => {
  const { data } = await gqlClient.query({
    query: COUNTRIES_QUERY,
  });

  if (!data?.countries) {
    return <PageSkeleton />;
  }

  return <CountriesSection data={data.countries} />;
};

const CountriesSection = ({ data }) => {
  const [search,setSearch] = useState("")

  const filteredCountries = useMemo(() => {
  const countries = data?.length ? data : []
    // console.log(data,"countriescountries")
    const query = search.trim().toLowerCase();

    if (!query) return countries;

    return countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(query) ||
        // country.CountryCode.toLowerCase().includes(query) ||
        country.callingCode.replace("+", "").includes(query.replace("+", ""))
      );
    });
  }, [search,data]);

  return (
    <>
      <div className="mt-2">
        <div className="relative ">
          <div className="relative text-center">
            <input value={search} onChange={(e)=>{ setSearch(e.target.value)}} placeholder="Search a country, dial code or city…" className="w-1/2 rounded-lg border border-border bg-surface px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20" aria-invalid="false" style={{ paddingRight: '110px' }} />
            <button style={{ right: '27%', top: '78%' }} type="button" disabled className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11.5px] font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-ink-strong text-white hover:bg-ink" aria-label="Verify email">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-3 w-3">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {filteredCountries.map((country,index) => (
          <Link href={'/countries/'+country.name} key={index} className="reveal pp-card group flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3.5 transition-all hover:border-accent hover:-translate-y-0.5 is-visible">
            <img style={{ height: '20px' }} src={appendBaseUrl(country.flag.url)} alt={country.name} />

            <span className="min-w-0 flex-1">
              <span className="block truncate font-display text-[15px] font-semibold text-ink-strong">{country.name}</span>

              <span className="block font-mono text-[11px] text-ink-subtle">{country.callingCode}</span>
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-ink-subtle transition-all group-hover:text-accent">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Countries;
