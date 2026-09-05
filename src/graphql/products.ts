import { gql } from '@apollo/client';
import { ANIMATION_CONTENT_FRAGMENT } from './animations';

export const PRODUCTS_QUERY = gql`
  query Products($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
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
          servicesLayoutType: layoutType
          listsPerRow
        }

        ... on ComponentCommonDescriptionListsBasic {
          blockHeading {
            SubHeading
            description
            heading
          }
          descriptionLayoutType: layoutType
          lists {
            text
          }
        }

        ... on ComponentCommonFaq {
          blockHeading {
            SubHeading
            description
            heading
          }
          qna {
            answer
            question
          }
        }
        ... on ComponentCommonCounterUp {
          counterItem {
            afterCountText
            beforeCountText
            countTextColored
            countValue
            heading
            subText
          }
        }
      }
    }
  }

  ${ANIMATION_CONTENT_FRAGMENT}
`;
