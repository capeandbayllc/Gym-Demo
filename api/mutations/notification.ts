import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";
import {GraphQLMutationInterface} from "~/api/mutations/GraphQLMutationInterface";

const UPDATE_NOTIFICATION = gql`
    mutation UpdateNotification($input: NotificationInput) {
        updateNotification(input: $input) {
            id
            state
            text
            entity_type
            entity_id
            entity
            misc
        }
    }
`;

export interface NotificationMutation {
    updateNotification: DocumentNode;
}

const notification: GraphQLMutationInterface<NotificationMutation> = {
    mutation: {
        updateNotification: UPDATE_NOTIFICATION,
    },
};

export default notification;


