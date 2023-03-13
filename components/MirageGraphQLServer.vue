<template>
  <slot />
</template>

<script setup>
import { createServer } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";
import graphQLSchema from "~/api/schema.gql?raw";
import { UUIDManager } from "~/api/utils/UUIDManager";
import data from "~/api/data/data";
import { parse } from "graphql/language";
import registerResolver from "~/api/queries/utils/resolver";
import createAdminAndKioskUser from "~/api/data/users/UserFactory";
import { NotificationFactory } from "~/api/data/notifications/NotificationFactory";
import { getRandomInt } from "~/api/utils/number";
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
    server.db.users.forEach((u) =>
      server.createList("notification", getRandomInt(10), { user_id: u.id })
    );
  },
});

console.log({ server });
</script>
