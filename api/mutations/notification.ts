import gql from "graphql-tag";
import { DocumentNode } from "graphql/language";
import { GraphQLMutationInterface } from "~/api/mutations/GraphQLMutationInterface";

const UPDATE_NOTIFICATION_STATE = gql`
  mutation UpdateNotificationState($input: NotificationInput) {
    updateNotification(input: $input) {
      id
      user_id
      state
    }
  }
`;

export interface NotificationMutation {
  updateNotificationState: DocumentNode;
}

const notification: GraphQLMutationInterface<NotificationMutation> = {
  mutation: {
    updateNotificationState: UPDATE_NOTIFICATION_STATE,
  },
};

export default notification;
