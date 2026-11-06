"use client"
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import {INDUSTRIES_QUERY} from '@/src/graphql/industries'
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { PageSkeleton } from '@/src/components/Skeletons';
import DynamicZone from '@/src/components/dynamic-zone/product';

export default function Features() {
   const params = useParams();

  const id = params.id;
  const { data, loading, error } = useQuery(INDUSTRIES_QUERY,{
     variables: {
      slug: id,
    },
  });

  if (loading) return <PageSkeleton/>;
  if (error) return <p>Error</p>;
  // console.log(data?.home.content[0].)
  // console.log(data)
  // console.log(data?.industries[0],"data?.features[0]")
  // return null
  if(data?.industries.length == 0) return <h1>{id} industries not found</h1>

  if(!data?.industries[0]) return <PageSkeleton/>

  return (
    <>
      <div>
        <div className="min-h-screen bg-background text-ink reveal-ready">
          <Header />
          <main>
            <DynamicZone data={data?.industries[0]?.content}/>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
