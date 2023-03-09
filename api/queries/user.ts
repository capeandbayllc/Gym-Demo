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
        }
    }
`;

export interface UserQuery {
    findByMail: DocumentNode
}

const user: GraphQLObject<UserQuery, object> = {
    query: {
        findByMail: FIND_BY_MAIL,
    },
    mutation: {
    }
}

export default user;
