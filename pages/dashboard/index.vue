<template>
  <div class="page-dashboard-container">
    <div
      class="page-content grid grid-cols-3 gap-5 -lg:grid-cols-2 -sm:grid-cols-1 -sm:!mx-2"
    >
      <statistic-card />
      <campaign-card />
      <calendar-card />
      <transaction-card />
      <history-card class="col-span-2 -sm:col-span-1" />
    </div>
  </div>
</template>
<style scoped lang="postcss">
.page-dashboard-container {
  @apply py-4 pr-5 w-full h-fit -xl:pr-6;
  .page-content {
    @apply m-auto;
  }
}
</style>
<script setup>
import StatisticCard from "./components/statistic-card/index.vue";
import CampaignCard from "./components/campaign-card/index.vue";
import CalendarCard from "./components/calendar-card/index.vue";
import TransactionCard from "./components/transaction-card/index.vue";
import HistoryCard from "./components/history-card/index.vue";
</script>
