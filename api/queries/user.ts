import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";

const FIND_BY_MAIL: DocumentNode = gql`
    query User($email: String!) {
        user(email: $email) {
            id
            first_name
            last_name
            email
            phone
        }
    }
`;

export default {
    user: {
        findByMail: FIND_BY_MAIL,
    },
}
