<template>
  <card class="sales-show-ratio-card" title="Show Ratio">
    <template #content>
      <div class="card-content">
        <show-ratio-chart :data="barMock" />
        <div class="text-center mt-3 mb-7">First Appointment Status</div>
        <Button secondary size="xs" class="view-btn">view</Button>
      </div>
    </template>
  </card>
</template>
<style scoped>
.sales-show-ratio-card {
  @apply h-full bg-black;
  .card-content {
    @apply flex flex-col border-t border-base-content/50 mt-2;
    .view-btn {
      @apply absolute bottom-4 right-4 text-base-content;
    }
  }
}
</style>
<script setup>
import ShowRatioChart from "./show-ratio-chart.vue";
const barMock = [
  {
    name: "Show Ratio",
    data: [68.4, 29.5, 2.1, 44.3],
  },
];
</script>
