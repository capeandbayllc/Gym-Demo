import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";
import {GraphQLQueryInterface} from "~/api/queries/GraphQLQueryInterface";

const GET_LEAD: DocumentNode = gql`
    query Leads($page: Int, $first: Int, $filter: Filter) {
        leads(page: $page, first: $first, filter: $filter) {
            data {
                id
                first_name
                last_name
                email
                status
                type
                gender
                phone,
                profile_photo_path
                created_at
                updated_at
                opportunity
                location {
                    name
                }
                homeLocation {
                    name
                }
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

const GET_SINGLE_LEAD: DocumentNode = gql`
    query SingleLead($id: ID) {
        lead(id: $id) {
            id
            user_id
            first_name
            status
            type
            middle_name
            last_name
            date_of_birth
            gender
            drivers_license_number
            occupation
            employer
            barcode
            email
            primary_phone
            profile_photo_path
            home
            location {
                name,
                address1
                address2
                city
                state
                zip
            }
            homeLocation {
                name,
                address1
                address2
                city
                state
                zip
            }
            created_at
        }
    }
`;

export interface LeadQuery {
    browse: DocumentNode
    get: DocumentNode
}

const lead: GraphQLQueryInterface<LeadQuery> = {
    query: {
        browse: GET_LEAD,
        get: GET_SINGLE_LEAD
    },
}

export default lead;
