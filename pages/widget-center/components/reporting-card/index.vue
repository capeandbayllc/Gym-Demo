<template>
  <div class="page-reporting-container slim-text">
    <div class="page-content">
      <h3 class="text-base-content text-xl slim-text">Reporting</h3>
      <div class="reporting-fields">
        <reporting1-card />
        <reporting2-card />
        <reporting3-card />
        <reporting4-card />

        <reporting5-card />
        <reporting6-card />
        <reporting7-card />
        <reporting8-card />
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
</template>
<style scoped lang="postcss">
.page-reporting-container {
  @apply w-full;
  .page-content {
    @apply border border-secondary rounded-2xl bg-base-300/80 px-8 py-5 text-left w-full max-w-[1600px];
    .reporting-fields-container {
      @apply bg-neutral;
    }

    .reporting-fields {
      @apply grid grid-cols-4 4xl:grid-cols-4 -md:grid-cols-1 -xl:grid-cols-2 gap-y-8 gap-x-5 py-8;
    }
  }
}

.slim-text {
  @apply tracking-wider font-light;
}
</style>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Reporting1Card from "./components/reporting1-card/index.vue";
import Reporting2Card from "./components/reporting2-card/index.vue";
import Reporting3Card from "./components/reporting3-card/index.vue";
import Reporting4Card from "./components/reporting4-card/index.vue";

import Reporting5Card from "./components/reporting5-card/index.vue";
import Reporting6Card from "./components/reporting6-card/index.vue";
import Reporting7Card from "./components/reporting7-card/index.vue";
import Reporting8Card from "./components/reporting8-card/index.vue";
</script>
