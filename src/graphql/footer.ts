import { gql } from '@apollo/client';

export const FOOTER_QUERY = gql`
  query Footer {
    footer {
      companyInfo {
        main {
          heading
          address
        }
        countriesSection {
          heading
          countries {
            flag {
              url
            }
            name
            number
          }
        }
      }
      footerBottom {
        socialMedia {
          name
          link
        }
        Copyright
      }

      subFooter {
        heading
        links {
          link
          name
        }
      }
      logo {
        height
        width
        logo {
          url
        }
      }
    }
  }
`;
