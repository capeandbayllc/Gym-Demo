<template>
  <slot />
</template>

<script setup>
import { createGraphQLHandler } from "@miragejs/graphql";
import { parse } from "graphql/language";
import { createServer } from "miragejs";
import data from "~/api/data/data";
import { NotificationFactory } from "~/api/data/notifications/NotificationFactory";
import createAdminAndKioskUser from "~/api/data/users/UserFactory";
import registerResolver from "~/api/queries/utils/resolver";
import graphQLSchema from "~/api/schema.gql?raw";
import { getRandomInt } from "~/api/utils/number";
import { UUIDManager } from "~/api/utils/UUIDManager";
// Mirage GraphQL README:
// https://github.com/miragejs/graphql

const server = createServer({
  routes() {
    const parsed = parse(graphQLSchema);
    const graphQLHandler = createGraphQLHandler(parsed, this.schema, {
      resolvers: registerResolver(parsed, this),
    });

    this.post("/graphql", graphQLHandler);
  },
  fixtures: data,
  identityManagers: {
    application: UUIDManager,
  },
  factories: {
    notification: NotificationFactory,
  },
  seeds(server) {
    createAdminAndKioskUser(server);
    server.loadFixtures(); //loads our json data
   server.db.users.forEach(u => server.createList("notification", getRandomInt(10), { user_id: u.id }));
  },
});

console.log({ server });
</script>
