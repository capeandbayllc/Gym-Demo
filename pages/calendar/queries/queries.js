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
        locations(page: 0) {
            data {
                id
                name
            }
        }
        employee {
            data {
                id
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
            ownerId
            start
            end
            title
            description
            full_day_event
            eventTypeId
            locationId
            # location {
            #     id
            #     name
            # }
            # type {
            #     id
            #     name
            #     description
            #     color
            #     type
            # }
            # attendees {
            #     id
            #     entity_type
            #     entity_data {
            #         name
            #         profile_photo_url
            #         email
            #     }
            # }
        }
    }
`;