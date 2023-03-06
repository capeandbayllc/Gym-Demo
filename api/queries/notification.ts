import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";
import {GraphQLObject} from "~/api/queries/GraphQLObject";

const GET_ALL_NOTIFICATIONS: DocumentNode = gql`
    query Notifications($user_id: String!, $page: Int, $first: Int) {
        notifications(user_id: $user_id, page: $page, first: $first) {
            data {
                id,
                state
                text
                entity_type
                entity_id
                entity
                misc
            }
            paginatorInfo {
                currentPage
                lastPage
                firstItem
                lastItem
                perPage
                total
            }
        }
    }
`;

export interface NotificationQuery {
    browse: DocumentNode
}


const notification: GraphQLObject<NotificationQuery, object> = {
    query: {
        browse: GET_ALL_NOTIFICATIONS,
    },
    mutation: {}
}

export default notification;
