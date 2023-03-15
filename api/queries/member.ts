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
 
export const GET_SINGLE_MEMBER = gql`
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