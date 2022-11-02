import gql from "graphql-tag";

export const GET_MEMBERS = gql`
    query getMembers {
        members {
            id
            created
            first_name
            last_name
            phone
            email
            location
            type
            addOns
        }
    }
`;