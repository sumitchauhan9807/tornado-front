import { gql } from '@apollo/client';

export const COUNTRIES_QUERY = gql`
  query Countries {
    countries(pagination: { limit: 200 }, sort: ["name:asc"]) {
      name
      callingCode
      CountryCode
      flag {
        url
      }
    }
  }
`;
