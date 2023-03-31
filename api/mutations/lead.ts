import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";
import {GraphQLMutationInterface} from "~/api/mutations/GraphQLMutationInterface";

const CREATE_LEAD: DocumentNode = gql`
    mutation CreateLead($input: LeadInput) {
        createLead(input: $input) {
            id
            user_id
            first_name
            status
            type{
                id
            }
            middle_name
            last_name
            date_of_birth
            phone
            gender
            drivers_license_number
            occupation
            employer
            barcode
            email
            primary_phone
            profile_photo_path
            location {
                id
            }
            homeLocation {
                id
            }
            created_at
            updated_at
        }
    }
`;

export interface UserMutation {
    createLead: DocumentNode;
}

const lead: GraphQLMutationInterface<UserMutation> = {
    mutation: {
        createLead: CREATE_LEAD,
    },
};

export default lead;


