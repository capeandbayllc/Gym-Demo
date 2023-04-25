import gql from "graphql-tag";

export const GET_NOTES = gql`
  query Notes {
    notes(first: 5) {
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

export const ADD_NOTE = gql`
  mutation CreateNote($input: CreateNoteInput) {
    createNote(input: $input) {
      id
      title
      note
      active
      read
      entity_type
    }
  }
`;
