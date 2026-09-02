
import { lazy, Suspense } from "react";
import { PageSkeleton } from "../Skeletons";
const Type1 = lazy(() => import("./Type1"));
const Type2 = lazy(() => import("./Type2"));
const Type3 = lazy(() => import("./Type3"));
const Type4 = lazy(() => import("./Type4"));
const Type5 = lazy(() => import("./Type5"));


const componentMap = {
  'ComponentHeroAnimationComponentsType1': Type1,
  "ComponentHeroAnimationComponentsAnimationType2":Type2
  
  // add others here
};


const HeroAnimations = ({ data }) => {
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

export default HeroAnimations;