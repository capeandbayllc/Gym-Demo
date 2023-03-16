import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";
import {GraphQLMutationInterface} from "~/api/mutations/GraphQLMutationInterface";

const UPDATE_USER = gql`
    mutation UpdateUser($input: UserInput) {
        updateUser(input: $input) {
            id
            first_name
            last_name
            email
            profile_photo_path
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


