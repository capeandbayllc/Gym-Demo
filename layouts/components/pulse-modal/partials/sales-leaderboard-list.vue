<template>
  <div class="sales-leaderboard px-4 relative max-h-72 overflow-auto z-[1]">
    <div class="sticky top-0 bg-black z-[1]">
      <div class="flex items-center gap-4">
        <span class="text-secondary text-xl font-semibold"
          >Leaderboard for</span
        >
        <select v-model="selectedPeriod">
          <option :value="1">Day</option>
          <option :value="7">Week</option>
          <option :value="30">Month</option>
          <option :value="365">Year</option>
        </select>
      </div>
      <div
        class="w-full sticky top-0 bg-black grid grid-cols-[3rem_0.6fr_1fr_0.6fr_3rem] text-white/50 border-b-2 pb-2 mt-4 border-white"
      >
        <span>Place</span>
        <span class="col-start-3">Name</span>
        <span>Points</span>
        <span></span>
      </div>
    </div>

    <ul class="-z-[1]">
      <li
        class="leaderboard-person w-full grid grid-cols-[3rem_0.6fr_1fr_0.6fr_3rem] items-center py-4"
        v-for="(item, ix) in data"
        :key="`${item.rank}_${ix}`"
      >
        <span>{{ getRankStr(item.rank) }}</span>
        <span>
          <trend-visualization :direction="item.trending" />
        </span>

        <span class="">{{ item.name }}</span>

        <span>{{ item.points * selectedPeriod }} PTS</span>

        <button class="place-self-center">
          <ArrowIcon direction="up" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sales-leaderboard {
  select {
    @apply bg-neutral border border-secondary p-2 rounded-xl;
  }

  li.leaderboard-person:not(:first-of-type) {
    @apply border-t border-white/50;
  }
}

::-webkit-scrollbar {
  @apply hidden;
}
</style>

<script setup>
import TrendVisualization from "~~/layouts/components/leader-board/partials/trend-visualization.vue";
import { ArrowIcon } from "~~/components/icons";

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

const selectedPeriod = ref(1);

/** @param {Number} rank  */
function getRankStr(rank = 1) {
  let result;

  switch (rank) {
    case 1:
      result = "1st";
      break;
    case 2:
      result = "2nd";
      break;
    case 3:
      result = "3rd";
      break;
    default:
      result = `${rank}th`;
      break;
  }

  return result;
}
</script>
