<template>
  <div class="percentage-container">
    <label class="header block text-[14px] py-2">Percentages</label>
    <div class="percentages overflow-auto h-[288px] py-4">
      <div
        v-for="(item, index) in percentages"
        :key="index"
        class="percent-item grid grid-cols-1"
      >
        <PercentPie class="" :item="item" />
        <hr class="border-base-content border-opacity-50 my-3" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.percentage-container {
  @apply py-[10px] px-[20px] border-[2px] border-solid border-info-content rounded-[15px];
}
.header {
  @apply text-base-content text-left;
}
.percentages::-webkit-scrollbar {
  @apply hidden;
}
.percentages .percent-item:last-child hr {
  @apply hidden;
}
</style>
<script setup>
import { ref } from "vue";
import PercentPie from "~/components/charts/percent-pie/index.vue";
const percentages = ref([
  {
    head: "Statistics",
    color: "#3fc0ff",
    percent: 86,
    amount: 332.1,
    progress: 9.32,
    progress2: 12.32,
    gradient:
      "conic-gradient(from 360deg at 50% 50%, #3fc0ff 0deg, rgba(6,83,139,0 ) 360deg)",
  },
  {
    head: "Statistics",
    color: "#005490",
    percent: 56,
    amount: 282.1,
    progress: 10.32,
    progress2: 20.32,
    gradient:
      "conic-gradient(from 360deg at 50% 50%, #005490 0deg, rgba(6,83,139,0 ) 360deg)",
  },
  {
    head: "Statistics",
    color: "#04365c",
    percent: 76,
    amount: 432.1,
    progress: 9.32,
    progress2: 11.32,
    gradient:
      "conic-gradient(from 360deg at 50% 50%, rgba(4,54,92,0.85) 0deg, rgba(6,83,139,0 ) 360deg)",
  },
]);
</script>
