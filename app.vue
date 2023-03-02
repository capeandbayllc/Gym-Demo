<template>
  <ApolloClientProvider>
    <MirageGraphQLServer>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </MirageGraphQLServer>
  </ApolloClientProvider>
</template>

<script setup>
import MirageGraphQLServer from "./components/MirageGraphQLServer.vue";
import ApolloClientProvider from "./components/ApolloClientProvider.vue";
</script>
