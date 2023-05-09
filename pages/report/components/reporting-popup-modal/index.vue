<template>
  <card
    title="Sales"
    class="reporting-popup-card"
    :options="{
      collapse: false,
      favorite: false,
    }"
  >
    <template #content>
      <div class="reporting-popup-container grid grid-cols-2 gap-4">
        <annual-fees-card />
        <percentage-goal-card />
      </div>
    </template>
  </card>
</template>
<style scoped>
.reporting-popup-container {
  @apply pl-2 pr-2 pt-6 pb-6;
  .card-title {
    @apply border-b pb-2 border-base-content/50;
  }
}

.reporting-popup-card {
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
}
</style>
<script setup>
import AnnualFeesCard from "./annual-fees-card.vue";
import PercentageGoalCard from "./percentage-goal-card.vue";
</script>
