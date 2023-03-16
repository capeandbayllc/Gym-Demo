<template>
  <div class="grid grid-cols-[repeat(3,_32%)] w-full justify-between mt-4">
    <div class="card-item-container">
      <div class="absolute top-0 left-0 py-4 px-4 flex flex-col justify-end">
        <span class="text-sm">Today</span>
        <span class="text-2xl">
          85%
          <span class="text-xs text-secondary">+0.8%</span>
        </span>
      </div>
      <PulseLineChart />
    </div>
    <div class="card-item-container">
      <div class="absolute top-0 left-0 py-4 px-4 flex flex-col justify-end">
        <span class="text-sm">MTD</span>
        <span class="text-2xl">
          2.309
          <span class="text-xs text-secondary">+0.8%</span>
        </span>
        <span class="text-xs text-secondary"> 56 New </span>
      </div>
      <PulseBarChart />
    </div>
    <div class="card-item-container">
      <div class="absolute top-0 left-0 py-4 px-4 flex flex-col justify-end">
        <span class="text-sm">% Collected</span>
        <span class="text-2xl"> 20 </span>
        <span class="text-xs text-secondary"> +0.8% </span>
      </div>
      <div class="graph-container">
        <PulseRadialChart />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
div.card-item-container {
  @apply grid justify-end items-end;
  @apply bg-black p-2 rounded-3xl border-2 border-secondary aspect-square max-w-xs relative;
}

div.graph-container {
  @apply pt-4 pl-4;
}
</style>

<script setup>
/** for now it's static for the demo we can make it dynamic with actual data when time allows */
import PulseLineChart from "./charts/pulse-line-chart.vue";
import PulseBarChart from "./charts/pulse-bar-chart.vue";
import PulseRadialChart from "./charts/pulse-radialbar-chart.vue";
</script>
