
import { lazy, Suspense } from "react";
import { PageSkeleton } from "../Skeletons";
const Hero1 = lazy(() => import("../dynamic-zone/Hero/Hero1"));
const DescriptionInfo = lazy(() => import("../dynamic-zone/DescriptionInfo"));
const DescriptionInfoBasic = lazy(() => import("../dynamic-zone/DescriptionInfoBasic"));
const FAQ = lazy(() => import("./FAQ"));
const CounterUp = lazy(() => import("./CountUp"));




const componentMap = {
  'ComponentHeroHero1': Hero1,
  'ComponentCommonServicesLists1': DescriptionInfo,
  "ComponentCommonDescriptionListsBasic":DescriptionInfoBasic,
  "ComponentCommonFaq":FAQ,
  "ComponentCommonCounterUp":CounterUp
  
  // add others here
};


const DynamicZoneProducts = ({ data }) => {
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

export default DynamicZoneProducts;