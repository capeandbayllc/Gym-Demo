import gql from "graphql-tag";

export const query = gql`
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
