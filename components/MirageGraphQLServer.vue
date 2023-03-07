<template>
  <slot />
</template>

<script setup>
import { createServer, JSONAPISerializer, Serializer } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";
import graphQLSchema from "~/api/schema.gql?raw";
import { UUIDManager } from "~/api/utils/UUIDManager";
import { getPageInfo } from "~/api/utils/getPageInfo";
import data from "~/api/data/data";
import {NotificationFactory} from "~/api/data/notifications/NotificationFactory";
import {getRandomInt} from "~/api/utils/number";

// Mirage GraphQL README:
// https://github.com/miragejs/graphql

// queries that are paginated via the @paginate directive
const paginatedQueries = ["users", "members", "locations", "locations", "notifications"];

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
    const records = [...allRecords].splice(0, first); //TODO: fix for other pages
    // TODO: the rest of the Laravel pagination params

    return {
      data: records,
      paginatorInfo: getPageInfo(server, records, { first }),
    };
  };
});

const server = createServer({
  routes() {
    console.log("Mirage Schema", this.schema);
    const graphQLHandler = createGraphQLHandler(graphQLSchema, this.schema, {
      resolvers,
    });

    this.post("/graphql", graphQLHandler);
  },
  fixtures: data,
  factories: {
    notification: NotificationFactory,
  },
  identityManagers: {
    application: UUIDManager,
  },
  seeds(server) {
    server.createList("user", 2);
    server.loadFixtures(); //loads our json data
    server.db.users.forEach(u => server.createList("notification", getRandomInt(10), { user_id: u.id }));
  },
});

console.log({ server });
</script>
