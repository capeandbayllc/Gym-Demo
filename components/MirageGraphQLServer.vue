<template>
  <slot />
</template>

<script setup>
import {createServer } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";
import graphQLSchema from "~/api/schema.gql?raw";
import { UUIDManager } from "~/api/utils/UUIDManager";
import data from "~/api/data/data";
import { parse } from "graphql/language";
import registerResolver from "~/api/queries/utils/resolver";
import createAdminAndKioskUser from "~/api/data/users/UserFactory";
import { MembersNoteFactory } from "../api/data/membersNote/MembersNoteFactory";
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
    membersNote: MembersNoteFactory,
  },
  seeds(server) {
    createAdminAndKioskUser(server);
    server.loadFixtures(); //loads our json data
    server.createList("membersNote", 10);
  },
});

console.log({ server });
</script>
