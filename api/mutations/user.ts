import gql from "graphql-tag";
import { DocumentNode } from "graphql/language";
import { GraphQLMutationInterface } from "~/api/mutations/GraphQLMutationInterface";

const UPDATE_USER = gql`
  mutation UpdateUser($input: UserInput) {
    updateUser(input: $input) {
      id
      first_name
      middle_name
      last_name
      date_of_birth
      gender
      drivers_license_number
      occupation
      employer
      barcode
      email
      alternate_phone
      address1
      address2
      city
      state
      phone
    }
  }
`;

export interface UserMutation {
  updateUser: DocumentNode;
}

const user: GraphQLMutationInterface<UserMutation> = {
  mutation: {
    updateUser: UPDATE_USER,
  },
};

export default user;
