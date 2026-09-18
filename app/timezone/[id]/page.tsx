'use client';
import { TIMEZONES_QUERY } from '@/src/graphql/timezones';
import { useQuery } from '@apollo/client/react';
import { useParams } from 'next/navigation';
import { PageSkeleton } from '@/src/components/Skeletons';
import ScheduleEditor from './components/ScheduleEditor';

export default function Timezone({ year = 2026 }: { year?: number }) {
  const params = useParams();
  
    const id = params.id;
    const { data, loading, error } = useQuery(TIMEZONES_QUERY,{
       variables: {
        slug: id,
      },
    });
  
    if (loading) return <PageSkeleton/>;
    if (error) return <p>Error</p>;
    // console.log(data?.home.content[0].)
    // console.log(data)
    // console.log(data?.timezones[0],"data?.products[0]")
    // return null
    if(data?.timezones.length == 0) return <h1>{id} timezone not found</h1>
  
    if(!data?.timezones[0]) return <PageSkeleton/>
  return <ScheduleEditor data={data?.timezones[0]} />;
}
