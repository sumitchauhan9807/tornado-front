import React, { lazy, Suspense } from 'react';
const layouts = {
  SVG_WITH_TAGS: lazy(() => import('./SvgWithTags')),
  SVG_ON_TOP: lazy(() => import('./SvgOnTop')),
  SVG_ON_LEFT: lazy(() => import('./SvgOnLeft')),
  BLACK_BACKGROUND: lazy(() => import('./BlackBackground')),
  NUMBERED_LISTS: lazy(() => import('./NumberedLists')),
  LISTS_IN_GRID: lazy(() => import('./ListsInGrid')),
  HEADING_and_CONTENT: lazy(() => import('./HeadingAndContent')),
};

const DescriptionInfo = (props) => {
  const getListsPerRow = (props) => {
    if (!props.listsPerRow) return 3;
    if (props.listsPerRow === 'THREE') return 3;
    if (props.listsPerRow === 'FOUR') return 4;
    return 3;
  };
  const data = { ...props, listsPerRow: getListsPerRow(props) };
  const LayoutComponent = layouts[props.servicesLayoutType];
  if (!LayoutComponent) {
    return null;
  }
  return (
    <Suspense fallback={null}>
      <LayoutComponent data={data} />
    </Suspense>
  );
};
export default DescriptionInfo;
