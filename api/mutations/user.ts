import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";
import {GraphQLMutationInterface} from "~/api/mutations/GraphQLMutationInterface";

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

const CREATE_USER = gql`
    mutation CreateUser($input: UserInput) {
        createUser(input: $input) {
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
            homeLocation{
                id
            }
            address1
            address2
            city
            state
            phone
            created_at
            updated_at
        }
    }
`;

export interface UserMutation {
    updateUser: DocumentNode;
    createUser: DocumentNode;
}

const user: GraphQLMutationInterface<UserMutation> = {
    mutation: {
        updateUser: UPDATE_USER,
        createUser: CREATE_USER,
    },
};

export default user;