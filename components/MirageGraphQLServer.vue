<template>
  <slot />
</template>

<script setup>
import {createServer} from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";
import { parse } from "graphql/language";
import data from "~/api/data/data";
import { NoteFactory } from "~/api/data/notes/NoteFactory";
import createAdminAndKioskUser from "~/api/data/users/UserFactory";
import { NotificationFactory } from "~/api/data/notifications/NotificationFactory";
import { getRandomInt } from "~/api/utils/number";
import registerResolver from "~/api/utils/resolver";
import graphQLSchema from "~/api/schema.gql?raw";
import { UUIDManager } from "~/api/utils/UUIDManager";
import {underscore} from "miragejs/lib/utils/inflector";


// Mirage GraphQL README:
// https://github.com/miragejs/graphql

const server = createServer({
  routes() {
    // make relationships use snake_case.
    const registerModel = this.schema.registerModel;
    this.schema.registerModel = function (type, ModelClass) {
      for (let associationProperty in ModelClass.prototype) {
        ModelClass.prototype[associationProperty].getForeignKey = function () {
          return `${underscore(this.name)}_id`;
        }
      }

      return registerModel.bind(this)(type, ModelClass);
    }

    const parsed = parse(graphQLSchema);
    const graphQLHandler = createGraphQLHandler(parsed, this.schema, {
      resolvers: registerResolver(parsed, this),
    });

    this.post("/graphql", graphQLHandler);
  },
  identityManagers: {
    application: UUIDManager,
  },
  factories: {
    notification: NotificationFactory,
    note: NoteFactory,
  },
  seeds(server) {
    createAdminAndKioskUser(server);
    server.db.loadData(data);
    server.db.users.forEach((u) =>
      server.createList("notification", getRandomInt(10), { user_id: u.id })
    );
    server.db.members.forEach(m => server.createList("note", getRandomInt(10), { entity_id: m.id }));
  },
});

console.log({ server });

onUnmounted(() => server.shutdown());
</script>
