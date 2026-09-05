import { gql } from '@apollo/client';
import { ANIMATION_CONTENT_FRAGMENT } from './animations';

export const HOME_QUERY = gql`
  query Home {
    home {
      content {
        ... on ComponentHeroHero1 {
          bottomLists {
            text
          }

          content

          fancyHeading {
            text
            type
          }

          topHeading

          heroButtons {
            button {
              text
              link
            }
          }

          animation {
            content {
              ...AnimationContentFields
              ...AnimationType2Fields
            }
          }
        }
        ... on ComponentHomeFaq {
          blockHeading {
            SubHeading
            description
            heading
          }
          ctaLists {
            blockHeading {
              SubHeading
              description
              heading
            }
            buttons {
              link
              text
            }
            lists {
              text
            }
            type
          }
        }
        ... on ComponentCommonServicesLists1 {
          blockHeading {
            SubHeading
            description
            heading
          }
          descriptionLists {
            content
            heading
            svg
            tags_link
          }
          servicesLayoutType:layoutType
          listsPerRow
        }
        ... on ComponentHomeCta2 {
          blockHeading {
            description
            heading
            SubHeading
          }
          cta2Left {
            blockHeading {
              SubHeading
              description
              heading
            }
            lists {
              text
            }
          }
          counterUp {
            counterItem {
              afterCountText
              beforeCountText
              countTextColored
              countValue
              heading
              subText
            }
          }
          cta2Lists {
            SubHeading
            heading
            svg
          }
        }
        ... on ComponentHomeCta3 {
          blockHeading {
            SubHeading
            description
            heading
          }
          buttons {
            link
            text
          }
        }
        ... on ComponentHomeMarquee {
          heading
          lists {
            text
          }
        }
      }
    }
  }

  ${ANIMATION_CONTENT_FRAGMENT}
`;
