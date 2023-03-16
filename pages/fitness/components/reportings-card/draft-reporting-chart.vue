<template>
  <div class="percentage-container p-4">
      <div class="flex items-center justify-between mb-4">
        <label class="header block text-[14px] py-2 whitespace-nowrap mr-2">Drafting Report</label>
        <FormFilterButton>
          <template v-slot:filters>
            <Switch v-model="enabled" class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-[#0275c9] focus:ring-offset-2">
              <span class="">Use setting</span>
              <span aria-hidden="true" class="pointer-events-none absolute h-full w-full rounded-md bg-white" />
              <span aria-hidden="true" :class="[enabled ? 'bg-[#0275c9]' : 'bg-gray-200', 'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out']" />
              <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out']" />
            </Switch>
          </template>
        </FormFilterButton>
      </div>
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
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import AreaChart from './area-chart.vue';
const enabled = ref(false)
</script>
