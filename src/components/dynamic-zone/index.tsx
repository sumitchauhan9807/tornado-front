
import { lazy, Suspense } from "react";
import { PageSkeleton } from "../Skeletons";
const Hero1 = lazy(() => import("../dynamic-zone/Hero/Hero1"));

const componentMap = {
  'ComponentHeroHero1': Hero1,
  
  // add others here
};


const DynamicZone = ({ data }) => {
  if (!data?.length) return null;
  return (
    <Suspense fallback={<PageSkeleton/>}>
      {data.map((component, index) => {
        const Component = componentMap[component.__typename];

        if (!Component) return null;

        return <Component key={index} {...component} />;
      })}
    </Suspense>
  );
};

export default DynamicZone;