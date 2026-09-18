import { gql } from '@apollo/client';

export const TIMEZONES_QUERY = gql`
  query Timezones($slug: String!) {
    timezones(filters: { slug: { eq: $slug } }) {
      name
      schedule
    }
  }
`;
