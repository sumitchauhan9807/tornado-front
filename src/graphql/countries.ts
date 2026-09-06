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

export const COUNTRY_QUERY = gql`
  query Country($filters: CountryFiltersInput) {
    countries(pagination: { limit: 1 }, filters: $filters) {
      CountryCode
      callingCode
      name
      flag {
        url
      }
    }
  }
`;
