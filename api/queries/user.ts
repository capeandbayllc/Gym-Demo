import gql from "graphql-tag";
import { DocumentNode } from "graphql/language";
import { GraphQLQueryInterface } from "~/api/queries/GraphQLQueryInterface";

const FIND_BY_MAIL: DocumentNode = gql`
  query User($email: String!) {
    user(email: $email) {
      id
      first_name
      last_name
      email
      profile_photo_path
      phone
    }
  }
`;

const FIND_BY_ID: DocumentNode = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      first_name
      last_name
      email
      profile_photo_path
      phone
    }
  }
`;

export interface UserQuery {
  findByMail: DocumentNode;
  findById: DocumentNode;
}

const user: GraphQLQueryInterface<UserQuery> = {
  query: {
    findByMail: FIND_BY_MAIL,
    findById: FIND_BY_ID,
  },
};

export default user;
