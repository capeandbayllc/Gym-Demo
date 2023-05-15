<template>
  <card
    title="Statistic Title"
    class="bg-gradient-to-tr from-base-300 via-base-300/70 slim-text text-base-content text-left"
    :options="{ favorite: false, collapse: false }"
  >
    <template #content>
      <div class="px-5 pl-3" style="width: 100%">
        <div class="py-7">
          <div class="px-4 flex flex-col justify-end">
            <span class="text-sm">Total Clients</span>
            <span class="text-2xl">
              $2,309
              <span class="text-xs text-secondary">+0.8%</span>
            </span>
            <span class="text-xs text-secondary"> 56 New </span>
          </div>
          <PulseBarChart class="mt-[-25px]" />
        </div>
      </div>
    </template>
  </card>
</template>
<script setup>
import PulseBarChart from "~/layouts/components/pulse-modal/partials/charts/pulse-bar-chart.vue";
</script>
