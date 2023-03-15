import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";
import {GraphQLQueryInterface} from "~/api/queries/GraphQLQueryInterface";

const GET_MEMBERS: DocumentNode = gql`
    query Members($page: Int, $first: Int, $filter: Filter) {
        members(page: $page, first: $first, filter: $filter) {
            data {
                id
                first_name
                last_name
                email
                phone
                gender
                profile_photo_path
                created_at
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

const GET_SINGLE_MEMBER: DocumentNode = gql`
    query SingleMember($id: ID) {
        member(id: $id) {
            id
            first_name
            last_name
            email
            primary_phone
            locations {
                id
                name
            }
            homeLocation {
                name
            }
            created_at
        }
    }
`;

export interface MemberQuery {
    browse: DocumentNode
    get: DocumentNode
}

const member: GraphQLQueryInterface<MemberQuery> = {
    query: {
        browse: GET_MEMBERS,
        get: GET_SINGLE_MEMBER
    },
}

export default member;
