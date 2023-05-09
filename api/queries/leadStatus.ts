import gql from "graphql-tag";
import { DocumentNode } from "graphql/language";
import { GraphQLQueryInterface } from "~/api/queries/GraphQLQueryInterface";

const GET_STATUS: DocumentNode = gql`
  query LeadStatusQuery {
    lead_statuses {
      id
      status
      order
      active
    }
  }
`;
export interface LeadStatusQuery {
  browse: DocumentNode;
}

const LeadStatus: GraphQLQueryInterface<LeadStatusQuery> = {
  query: {
    browse: GET_STATUS,
  },
};

export default LeadStatus;
