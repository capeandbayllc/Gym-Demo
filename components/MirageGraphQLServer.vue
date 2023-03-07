<template>
  <slot />
</template>

<script setup>
import { createServer } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";
import graphQLSchema from "~/api/schema.gql?raw";
import { UUIDManager } from "~/api/utils/UUIDManager";
import data from "~/api/data/data";
import {NotificationFactory} from "~/api/data/notifications/NotificationFactory";
import {getRandomInt} from "~/api/utils/number";
import notification from "~/api/queries/notification";
import {parse} from "graphql/language";
import registerResolver from "~/api/queries/utils/resolver";
// Mirage GraphQL README:
// https://github.com/miragejs/graphql

const server = createServer({
  routes() {
    const parsed = parse(graphQLSchema);
    const resolvers = registerResolver(parsed, this);
    const graphQLHandler = createGraphQLHandler(parsed, this.schema, {
      resolvers,
    });

    this.post("/graphql", graphQLHandler);
  },
  fixtures: data,
  factories: {
    user: UserFactory,
  },
  identityManagers: {
    application: UUIDManager,
  },
  seeds(server) {
    server.createList("user", 2);
    server.loadFixtures(); //loads our json data
  },
});

console.log({ server });
</script>
