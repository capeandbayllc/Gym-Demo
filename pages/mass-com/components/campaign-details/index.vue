<template>
  <simple-card :title="header ? 'Campaign Details' : ''" class="mb-4">
    <div
      class="pt-4 px-4 bg-transparent items-center w-full overflow-y-scroll max-h-[40vw]"
    >
      <div class="flex flex-row justify-between px-6">
        <div class="text-2xl items-end">July 2022</div>

        <CampaignFilter :data="data" />
      </div>
      <CampaignRecentSummary :data="data" />
      <ConversionData :data="data" />
    </div>
  </simple-card>
</template>

<script setup>
import CampaignFilter from "./campaign-filter.vue";
import CampaignRecentSummary from "./campaign-recent-summary.vue";
import ConversionData from "./../conversion-data/index.vue";

const props = defineProps({
  data: Object,
  header: {
    type: Boolean,
    default: true,
  },
});
</script>
