<template>
  <div class="page-sales-funnel-container">
    <div class="page-content">
      <h3 class="text-base-content text-xl slim-text">Sales Funnel</h3>
      <div class="sales-funnel-fields">
        <statistic1-card />
        <funnel-chart
          :data="data"
          class="h-72 w-full rounded-3xl overflow-hidden col-span-2"
          :content-item="ChartContent"
        />
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
.page-sales-funnel-container {
  @apply py-4 pr-5 w-full;
  .page-content {
    @apply border border-secondary rounded-2xl bg-base-300 px-8 py-5 text-left w-full max-w-[1600px];
    .sales-funnel-fields-container {
      @apply bg-neutral;
    }

    .sales-funnel-fields {
      @apply grid grid-cols-3 4xl:grid-cols-4 -md:grid-cols-1 -xl:grid-cols-2 gap-y-8 gap-x-5 py-8;
    }
  }
}
</style>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Statistic1Card from "./components/statistic1-card/index.vue";
import ChartContent from "./components/chart-content.vue";

const data = [
  {
    id: 1,
    start: 60 * 4,
    end: 45 * 4,
    label: "10 loss:",
    value: 45,
    percent: 6,
    activeContent: false,
    borderWidth: 137,
  },
  {
    id: 2,
    start: 45 * 4,
    end: 35 * 4,
    label: "22 loss:",
    value: 12,
    percent: 18,
    activeContent: false,
    borderWidth: 137,
  },
  {
    id: 3,
    start: 35 * 4,
    end: 35 * 4,
    label: "33 loss:",
    value: 45,
    percent: 48,
    activeContent: false,
    borderWidth: 137,
  },
  {
    id: 4,
    start: 35 * 4,
    end: 40 * 4,
    label: "67 loss:",
    value: 55,
    percent: 6,
    activeContent: false,
    borderWidth: 137,
  },
  {
    id: 5,
    start: 40 * 4,
    end: 35 * 4,
    label: "67 loss:",
    value: 55,
    percent: 72,
    activeContent: false,
    disable: true,
    borderWidth: 137,
  },
];
</script>
