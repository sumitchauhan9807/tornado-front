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
      logo {
        height
        width
        logo {
          url
        }
      }
      preHeader {
        Phonenumber
        leftText1
        leftText2
        leftText3
      }
    }
  }
`;
