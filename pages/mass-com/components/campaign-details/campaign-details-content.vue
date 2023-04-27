<template>
  <div
    class="pt-4 px-4 items-center w-full border border-secondary rounded-3xl overflow-y-scroll card-gradient-bg"
    :class="{
      'max-h-[40vw]': fixedHeight,
    }"
  >
    <div class="flex flex-row justify-between px-6">
      <div class="text-2xl flex items-end">July 2022</div>

      <CampaignFilter :data="data" />
    </div>
    <CampaignRecentSummary :data="data" />
    <ConversionData :data="data" />
  </div>
</template>

<script setup>
import CampaignFilter from "./campaign-filter.vue";
import CampaignRecentSummary from "./campaign-recent-summary.vue";
import ConversionData from "./../conversion-data/index.vue";

const props = defineProps({
  data: Object,
  fixedHeight: {
    type: Boolean,
    default: false,
  },
});
</script>
