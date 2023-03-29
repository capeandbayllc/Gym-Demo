import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";
import {GraphQLQueryInterface} from "~/api/queries/GraphQLQueryInterface";

const GET_LOCATION: DocumentNode = gql`
    query Locations($page: Int, $first: Int, $filter: Filter) {
        locations(page: $page, first: $first, filter: $filter) {
            data {
                id
                gymrevenue_id
                location_no
                location_type
                name
                city
                state
                active
                zip
                address1
                address2
                phone
                open_date
                close_date
                latitude
                longitude
                poc_first
                poc_last
                poc_phone
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

const GET_SINGLE_LOCATION: DocumentNode = gql`
    query SingleLocation($id: ID) {
        location(id: $id) {
            id
            gymrevenue_id
            location_no
            location_type
            name
            city
            state
            active
            zip
            address1
            address2
            phone
            open_date
            close_date
            latitude
            longitude
            poc_first
            poc_last
            poc_phone
        }
    }
`;

export interface LocationQuery {
    browse: DocumentNode
    get: DocumentNode
}

const location: GraphQLQueryInterface<LocationQuery> = {
    query: {
        browse: GET_LOCATION,
        get: GET_SINGLE_LOCATION
    },
}

export default location;
