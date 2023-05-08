<template>
  <card
    title="Statistic Title"
    class="bg-base-300 text-base-content text-left"
    :options="{ favorite: false, collapse: false }"
  >
    <template #content>
      <div class="px-5 pl-3" style="width: 100%">
        <div class="py-7">
          <div class="px-4 flex flex-col justify-end">
            <span class="text-sm">Today</span>
            <span class="text-2xl">
              85%
              <span class="text-xs text-secondary">+0.8%</span>
            </span>
          </div>
          <PulseLineChart />
        </div>
      </div>
    </template>
  </card>
</template>
<script setup>
import PulseLineChart from "~/layouts/components/pulse-modal/partials/charts/pulse-line-chart.vue";
</script>
