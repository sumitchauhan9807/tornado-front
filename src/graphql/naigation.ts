import { gql } from '@apollo/client';

export const NAVIGATION_QUERY = gql`
  query Navigation {
    navigation {
      links {
        type
        name
        dropdowns {
          svg
          id
          desc
          name
          link
          subDropdowns {
            svg
            name
            link
            desc
          }
        }
      }
    }
  }
`;
