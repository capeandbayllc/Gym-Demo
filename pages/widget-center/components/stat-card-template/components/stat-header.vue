<template>
  <div v-if="!hideStatValue" class="w-full">
    <div class="stat-title-container" v-if="icon">
      <component :is="icon" class="statistic-icon" />
      <span class="my-auto text-[1.5rem] font-normal tracking-wide text-white">
        {{ statValue }}
      </span>
    </div>
    <div class="stat-title-container" v-else-if="statValue">
      <span
        class="p-2 rounded-full bg-white/20 w-[40px] h-[40px] flex flex-row justify-center"
      >
        <DocumentIcon class="text-white fill-white" />
      </span>
      <span class="my-auto text-[1.5rem] font-normal tracking-wide text-white">
        {{ statValue }}
      </span>
    </div>
    <div
      class="stat-title-container !to-rose-700/50 !via-rose-700/50"
      v-else-if="isSummaryHeader"
    >
      <span
        class="p-2 rounded-full bg-white/20 w-[40px] h-[40px] bg-rose-700 flex flex-row justify-center"
      >
      </span>
      <span class="my-auto text-[0.8rem] font-normal tracking-wide text-white">
        No Data to Display
      </span>
    </div>
    <div v-else class="h-[40px]"></div>
  </div>
</template>

<style scoped lang="postcss">
.stat-title-container {
  @apply flex flex-row justify-between gap-3 rounded-full pr-3 w-full bg-gradient-to-r from-gray-900 to-gray-600/50 via-gray-600/50;
}
</style>

<script setup>
import { DocumentIcon } from "~~/layouts/components/circular-menu/menu-icons";
const props = defineProps({
  statValue: {
    type: String,
  },
  icon: {
    type: Object,
  },
  hideStatValue: {
    type: Boolean,
  },
  isSummaryHeader: {
    type: Boolean,
  },
});
</script>
