import gql from "graphql-tag";
import { DocumentNode } from "graphql/language";
import { GraphQLQueryInterface } from "~/api/queries/GraphQLQueryInterface";

const GET_CALENDAR_EVENTS_BY_USER: DocumentNode = gql`
  query calendarEvents($param: CalendarEventInput) {
      calendarEventTypes {
          data {
              id
              name
              description
              color
              type
          }
      }
      calendarEvents(param: $param) {
          id
          title
          owner_id
          color
          start
          end
          title
          description
          full_day_event
          event_type_id
          location_id
          location {
              id
              name
          }
          type {
              id
              name
              description
              color
              type
          }
          attendees {
              id
              entity_id
          }
      }
      employee {
      data {
          id
          user_id
          first_name
          last_name
          email
      }
      }
      members {
          data {
              id
              first_name
              last_name
              email
              profile_photo_path
          }
      }
  }
`;

export interface CalendarEventQuery {
  browse_by_user: DocumentNode;
}

const calendarEvent: GraphQLQueryInterface<CalendarEventQuery> = {
  query: {
      browse_by_user: GET_CALENDAR_EVENTS_BY_USER
  }
};

export default calendarEvent;
