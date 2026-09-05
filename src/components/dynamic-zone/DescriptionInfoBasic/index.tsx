import React, { lazy, Suspense } from 'react';
const layouts = {
  BASIC: lazy(() => import('./Basic')),
  LISTS_ON_RIGHT: lazy(() => import('./ListsOnRight')),
};

const DescriptionInfoBasic = (props) => {
  const LayoutComponent = layouts[props.descriptionLayoutType];
  if (!LayoutComponent) {
    return null;
  }
  return (
    <Suspense fallback={null}>
      {' '}
      <LayoutComponent data={props} />
    </Suspense>
  );
};

export default DescriptionInfoBasic
