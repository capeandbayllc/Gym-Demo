<template>
  <slot />
</template>

<script setup>
import { provide } from "vue";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { ApolloClients, provideApolloClient } from "@vue/apollo-composable";

// HTTP connection to the API
const httpLink = createHttpLink({
  //TODO: use an absolute URL (pull from env)
  uri: "/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

//TODO: doubt we need both. use provideApolloClient, this one doesn't work
provide(ApolloClients, {
  default: apolloClient,
});

provideApolloClient(apolloClient);
</script>
