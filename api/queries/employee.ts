import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";
import {GraphQLQueryInterface} from "~/api/queries/GraphQLQueryInterface";

const GET_EMPLOYEES: DocumentNode = gql`
    query Employees($page: Int, $first: Int, $filter: Filter) {
        employee(page: $page, first: $first, filter: $filter) {
            data {
                id
                first_name
                last_name
                email
                gender
                profile_photo_path
                created_at
                updated_at
                locations {
                    name
                }
#                homeLocation {
#                    name
#                }
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

// const GET_SINGLE_EMPLOYEE: DocumentNode = gql`
//     query Employee($id: ID) {
//         employee(id: $id) {
//             id
//             user_id
//             first_name
//             middle_name
//             last_name
//             date_of_birth
//             gender
//             email
//             primary_phone
//             profile_photo_path
//             homeLocation {
//                 name,
//                 address1
//                 address2
//                 city
//                 state
//                 zip
//             }
//             created_at
//         }
//     }
// `;

export interface EmployeeQuery {
    browse: DocumentNode
    get: DocumentNode
}

const employee: GraphQLQueryInterface<EmployeeQuery> = {
    query: {
        browse: GET_EMPLOYEES,
        // get: GET_SINGLE_EMPLOYEE
    },
}

export default employee;
