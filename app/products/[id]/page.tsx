"use client"
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import {PRODUCTS_QUERY} from '@/src/graphql/products'
import { useQuery } from "@apollo/client/react";
import { useParams } from "next/navigation";
import { PageSkeleton } from '@/src/components/Skeletons';
import DynamicZone from '@/src/components/dynamic-zone/product';

export default function Home() {
   const params = useParams();

  const id = params.id;
  const { data, loading, error } = useQuery(PRODUCTS_QUERY,{
     variables: {
      slug: id,
    },
  });

  if (loading) return <PageSkeleton/>;
  if (error) return <p>Error</p>;
  // console.log(data?.home.content[0].)
  // console.log(data)
  // console.log(data?.products[0],"data?.products[0]")
  // return null
  if(data?.products.length == 0) return <h1>{id} product not found</h1>

  if(!data?.products[0]) return <PageSkeleton/>

  return (
    <>
      <div>
        <div className="min-h-screen bg-background text-ink reveal-ready">
          <Header />
          <main>
            <DynamicZone data={data?.products[0]?.content}/>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
