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
      }
    }
  }

  ${ANIMATION_CONTENT_FRAGMENT}
`;
