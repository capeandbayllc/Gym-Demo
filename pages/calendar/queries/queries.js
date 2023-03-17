import gql from "graphql-tag";

export const query = gql`
    query CalendarEventsQuery {
        calendarEventTypes {
            data {
                id
                name
                description
                color
                type
            }
        }
        locations {
            data {
                id
                name
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
        users {
            data {
                id
                first_name
                last_name
                email
                profile_photo_path
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
        leads {
            data {
                id
                first_name
                last_name
                email
                profile_photo_path
            }
        }
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
            attendees {
                id
                entity_type
                entity_data {
                    name
                }
            }
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
                entity_type
                entity_data {
                    name
                    profile_photo_url
                    email
                }
            }
            owner {
                id
                name
                profile_photo_path
            }
        }
    }
`;