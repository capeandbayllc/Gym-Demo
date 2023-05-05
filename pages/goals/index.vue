<template>
  <div class="pb-5 pt-4 mx-auto w-full px-10 max-w-[1600px]">
    <div class="pl-10 pr-4 mb-2 flex justify-content">
      <div class="flex flex-auto">Goals</div>
    </div>
    <div class="page-content gap-5">
      <report-fields />
      <goals />
    </div>
  </div>
</template>
<style scoped lang="postcss">
.page-content {
  @apply text-center p-6 border-secondary border-2 rounded-[26px] bg-secondary-focus max-w-[85vw];
}
</style>
<script setup>
import ReportFields from "./components/reports-fields/index.vue";
import Goals from "./components/goals/index.vue";
</script>
