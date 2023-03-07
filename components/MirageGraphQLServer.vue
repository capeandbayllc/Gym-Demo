<template>
  <slot />
</template>

<script setup>
import { createGraphQLHandler } from "@miragejs/graphql";
import { createServer } from "miragejs";
import { LocationFactory } from "../api/data/locations/LocationFactory";
import { MembersNoteFactory } from "../api/data/membersNote/MembersNoteFactory";
import { UserFactory } from "../api/data/users/UserFactory";
import graphQLSchema from "../api/schema.gql?raw";
import { getPageInfo } from "../api/utils/getPageInfo";
import { UUIDManager } from "../api/utils/UUIDManager";

// Mirage GraphQL README:
// https://github.com/miragejs/graphql

// queries that are paginated via the @paginate directive
const paginatedQueries = ["users", "membersNotes"];

//setup object to hold resolvers
const resolvers = {
  Query: {},
};

// create a resolver for each paginated query
paginatedQueries.forEach((query) => {
  resolvers.Query[query] = (obj, args, context, info) => {
    //grab pagination params
    const { first } = args;
    // delete pagination params from args so it doesnt get added to where clause
    delete args.first;

    // seems unnecessary but it's how the miragejs graphql package does it
    const collectionName = context.mirageSchema.toCollectionName(query);

    const allRecords = context.mirageSchema[collectionName].where(args).models;

    // limit records at first X elements
    const records = [...allRecords].splice(0, first);
    // TODO: the rest of the Laravel pagination params

    return {
      data: records,
      paginatorInfo: getPageInfo(server, records, { first }),
    };
  };
});

const server = createServer({
  routes() {
    const graphQLHandler = createGraphQLHandler(graphQLSchema, this.schema, {
      resolvers,
    });

    this.post("/graphql", graphQLHandler);
  },
  factories: {
    user: UserFactory,
    location: LocationFactory,
    membersNote: MembersNoteFactory,
  },
  identityManagers: {
    application: UUIDManager,
  },
  seeds(server) {
    server.createList("user", 25);
    server.createList("location", 7);
    server.createList("membersNote", 5);
  },
});

console.log({ server });
</script>
