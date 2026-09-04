
import { lazy, Suspense } from "react";
import { PageSkeleton } from "../Skeletons";
const Hero1 = lazy(() => import("../dynamic-zone/Hero/Hero1"));

const CTA = lazy(() => import("./CTA/CTA"));
const CTA2 = lazy(() => import("./CTA/CTA2"));
const CTA3 = lazy(() => import("./CTA/CTA3"));
const DescriptionInfo = lazy(() => import("../dynamic-zone/DescriptionInfo"));
const HomeMarquee = lazy(() => import("../dynamic-zone/HomeMarquee"));

const componentMap = {
  'ComponentHeroHero1': Hero1,
  'ComponentHomeFaq': CTA,
  'ComponentCommonServicesLists1': DescriptionInfo,
  'ComponentHomeCta2':CTA2,
  'ComponentHomeCta3':CTA3,
  "ComponentHomeMarquee":HomeMarquee
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