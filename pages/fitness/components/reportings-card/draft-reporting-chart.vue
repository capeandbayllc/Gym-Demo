<template>
  <div class="percentage-container p-4">
      <label class="header block text-[14px] py-2">Drafting Report</label>
      <div class="percent-item grid grid-cols-1">
        <AreaChart class="w-full" />
      </div>
  </div>
</template>
<style scoped>
.percentage-container{
  padding: 10px 20px;
  border : 2px solid #0077ac;
  border-radius: 15px;
}
.header{
  color : white;
  text-align: left;
}
</style>
<script setup>
import AreaChart from './area-chart.vue';
</script>