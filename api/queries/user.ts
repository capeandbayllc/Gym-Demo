import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";
import {GraphQLObject} from "~/api/queries/GraphQLObject";

const FIND_BY_MAIL: DocumentNode = gql`
    query User($email: String!) {
        user(email: $email) {
            id
            first_name
            last_name
            email
            phone
            notifications {
                id
                state
                text
                type
                entity_type
                entity_id
                entity
                misc
            }
        }
    }
`;

const user: GraphQLObject = {
    query: {
        findByMail: FIND_BY_MAIL,
    },
    mutation: {
    }
}

export default user;
