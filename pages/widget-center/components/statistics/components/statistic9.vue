<template>
  <card
    title="Statistic 1"
    class="bg-gradient-to-tr from-base-300 via-base-300/70 slim-text text-base-content text-left"
    :options="{ favorite: false, collapse: false }"
  >
    <template #content>
      <div class="statistic-chart-container">
        <statistic-chart height="170" />
      </div>
      <div class="statistic-data-list max-h-40 overflow-y-scroll no-scrollbar">
        <div class="statistic-data-row" v-for="item in mock" :key="item.id">
          <div class="item-description">
            <div class="w-10 h-10 rounded bg-secondary/50"></div>
            <div class="flex flex-col">
              <span>{{ item.title }}</span>
              <span class="text-secondary text-sm"
                >{{ item.tx_count }} transactions</span
              >
            </div>
          </div>
          <div class="item-value">
            <span class="text-sm"> ${{ item.amount }}</span>
            <span class="text-base-content/60 text-xs"
              >{{ item.percent }}%</span
            >
          </div>
        </div>
      </div>
      <div class="absolute bottom-3 left-4 text-sm">View full details</div>
    </template>
  </card>
</template>

<style scoped lang="postcss">
.statistic-chart-container {
  @apply ml-[-10px] mb-[-30px];
}
.statistic-data-list {
  @apply flex flex-col border-t-4 border-secondary px-5 mb-7 -lg:px-5;
  .statistic-data-row {
    @apply flex flex-row justify-between pb-3 pt-6 w-full;
    .item-description {
      @apply flex flex-row space-x-3 items-center;
    }
    .item-value {
      @apply flex flex-col justify-center items-end bg-secondary/30 px-3 rounded;
    }
  }
}
</style>
<script setup>
import DashboardCard from "~/pages/dashboard/components/dashboard-card.vue";
import MembersIcon from "~/pages/dashboard/components/statistic-card/members-icon.vue";
import StatisticChart from "~/pages/dashboard/components/statistic-card/statistic-chart.vue";

const mock = [
  {
    id: 1,
    title: "Membership Upgrades",
    tx_count: 16,
    amount: 69.65,
    percent: 14,
  },
  {
    id: 2,
    title: "Pt Classes",
    tx_count: 48,
    amount: 69.65,
    percent: 14,
  },
  {
    id: 1,
    title: "Membership Upgrades",
    tx_count: 16,
    amount: 69.65,
    percent: 14,
  },
];
</script>
