<template>
  <div class="stat-title-container" v-if="icon">
    <component :is="icon" class="statistic-icon" />
    <span class="my-auto text-[1.5rem] font-normal tracking-wide text-white">
      {{ statValue }}
    </span>
  </div>
  <div class="stat-title-container !justify-end" v-else>
    <span class="my-auto text-[1.5rem] font-normal tracking-wide text-white">
      {{ statValue }}
    </span>
  </div>
</template>

<style scoped lang="postcss">
.stat-title-container {
  @apply flex flex-row justify-between gap-3 rounded-full pr-3 w-full bg-gradient-to-r from-gray-900 to-gray-600/50 via-gray-600/50;
}
</style>

<script setup>
const props = defineProps({
  statValue: {
    type: String,
  },
  icon: {
    type: Object,
  },
});
</script>
