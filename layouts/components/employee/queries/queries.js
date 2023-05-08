import gql from "graphql-tag";

export const query = gql`
  query QueryEmployeeEvents {
    calendarEvents {
      id
      owner_id
      start
      end
      full_day_event
      location_id
      location {
        id
        name
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
