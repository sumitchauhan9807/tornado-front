import { gql } from '@apollo/client';

export const ANIMATION_CONTENT_FRAGMENT = gql`
  fragment AnimationContentFields on ComponentHeroAnimationComponentsType1 {
    bottomLeftText
    bottomRightText
    button1Text
    button2Text
    id
    svg
    topHeading

    routes {
      rate
      text
      time
      code
    }
    statusValues {
      text
      type
    }
  }

  fragment AnimationType2Fields on ComponentHeroAnimationComponentsAnimationType2 {
    bottomLeft
    bottomRight
    boxText1
    boxText2
    boxText3
    boxText4
    topLeft
    topRight
  }
`;
