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

  fragment AnimationType3Fields on ComponentHeroAnimationComponentsAnimationType3 {
    SubHeading
    heading
    svg
    bottomItems {
      value
      name
    }
    OrbitalItems {
      svg
      text
    }
  }

  fragment AnimationType4Fields on ComponentHeroAnimationComponentsAnimationType4 {
    bottomText
    heading
    subHeading
    svg
    OrbitalItems {
      svg
      text
    }
  }

  fragment AnimationType5Fields on ComponentHeroAnimationComponentsAnimationType5 {
    svg
    subText
    number
    heading
    dialerGrid {
      number
      text
    }
  }
  fragment AnimationType6Fields on ComponentHeroAnimationComponentsAnimationType6 {
    svg
    subHeading
    bottomText2
    bottomText1
    OuterItems {
      svg
      text
    }
    OrbitalItems {
      svg
      text
    }
  }

  fragment AnimationType7Fields on ComponentHeroAnimationComponentsAnimationType7 {
    svg
    subHeading
    heading
    OrbitalItems {
      svg
      text
    }
  }
  fragment AnimationType8Fields on ComponentHeroAnimationComponentsAnimationType8 {
    heading2
    heading1
    statsValues {
      text
      type
    }
    OrbitalItems {
      svg
      text
    }
  }
`;
