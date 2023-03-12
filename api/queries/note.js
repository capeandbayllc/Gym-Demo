import gql from "graphql-tag";

export const GET_NOTES = gql`
    query Notes {
      notes(first: 10) {
        data {
          id
          title
          note
          active
          read
          entity_type
        }
        paginatorInfo {
          count
          perPage
          total
        }
      }
    }
  `;
