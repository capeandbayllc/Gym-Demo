import gql from "graphql-tag";
import {DocumentNode} from "graphql/language";
import {GraphQLQueryInterface} from "~/api/queries/GraphQLQueryInterface";

const GET_AGREEMENTS: DocumentNode = gql`
    query Agreements($page: Int, $first: Int, $filter: Filter) {
        agreements(page: $page, first: $first, filter: $filter) {
            data {
                id
                user {
                    id
                    first_name
                    last_name
                    email
                }
                category {
                    id
                    name
                }
                location {
                    id
                    name
                    address
                    city
                    state
                    country
                    zip_code
                }
                agreement_template_id
                template {
                    id
                    name
                    content
                }
                billing_schedule_id
                billingSchedule {
                    id
                    name
                    description
                }
                contract {
                    id
                    name
                }
                contract_file_url
                active
                terms_completed
                last_billed_on
                signed_at
                template_name
                user_email
                payment_status
                status
                next_billable_on
                created_at
                updated_at

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

export interface LeadQuery {
    browse: DocumentNode
}

const agreement: GraphQLQueryInterface<LeadQuery> = {
    query: {
        browse: GET_AGREEMENTS,
    },
}

export default agreement;
