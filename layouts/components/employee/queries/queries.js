import gql from "graphql-tag";

export const query = gql`
query CalendarEventsQuery {
    calendarEvents {
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
          entity { 
            profile_photo_path
          }
      }
    }
  }
`;
