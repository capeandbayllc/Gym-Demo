<template>
  <div class="page-dashboard-container slim-text">
    <div class="page-content">
      <h3 class="text-base-content text-xl slim-text">Dashboard</h3>
      <div>
        <div class="dashboard-fields">
          <statistic1-card />
          <statistic2-card />
          <statistic3-card />
          <statistic4-card />
        </div>
        <div class="flex justify-end">
          <Button
            secondary=""
            size="xs"
            class="hover:border-2 hover:bg-base-300 rounded-full slim-text"
          >
            <font-awesome-icon
              :icon="['fas', 'plus']"
              size="md"
              class="mr-1 focus:outline-none"
              tabindex="0"
              @click.prevent.stop
            />
            Add to page
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.page-dashboard-container {
  @apply w-full;
  .page-content {
    @apply border border-secondary rounded-2xl bg-base-300 px-8 py-5 text-left w-full max-w-[1600px];
    .dashboard-fields-container {
      @apply bg-neutral;
    }

    .dashboard-fields {
      @apply grid grid-cols-4 4xl:grid-cols-4 -md:grid-cols-1 -xl:grid-cols-2 gap-y-8 gap-x-4 py-8;
    }
  }
}

.slim-text {
  @apply tracking-wider !font-light;
}
</style>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Statistic1Card from "./components/statistic1-card/index.vue";
import Statistic2Card from "./components/statistic2-card/index.vue";
import Statistic3Card from "./components/statistic3-card/index.vue";
import Statistic4Card from "./components/statistic4-card/index.vue";
</script>
