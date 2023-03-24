<template>
   <card title="Statistics 1" class="leads-content-card h-full" smallHeader
        :options="{
            'collapse': true,
            'favorite': false,
        }"
    >
        <template #content>
          <div class="flex flex-col w-full h-full mt-12 items-center justify-center">
            <DonutChart />
            <div class="flex w-full justify-end px-6">
              <button class="bg-[#0075c9] rounded-md px-3 py-1 text-sm">
                Go
              </button>
            </div>
          </div>
        </template>
        </card>
</template>
<script setup>
import DonutChart from './components/donut-chart.vue'
</script>