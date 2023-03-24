<template>
   <card title="Statistics 1" class="leads-content-card h-full"
        :options="{
            'collapse': true,
            'favorite': false,
        }"
    >
        <template #content>
  <DonutChart />

        </template>
        </card>
</template>
<script setup>
import DonutChart from './components/donut-chart.vue'
</script>