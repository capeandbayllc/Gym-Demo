import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";
import {GraphQLObject} from "~/api/queries/GraphQLObject";

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
                updated_at
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

export interface MemberQuery {
    browse: DocumentNode
}

const member: GraphQLObject<MemberQuery, object> = {
    query: {
        browse: GET_MEMBERS,
    },
    mutation: {
    }
}

export default member;
