<template>
    <simple-card class="gradient-bg grid grid-cols-12 p-4 gap-4 w-[500px] text-sm max-h-[75vh] overflow-auto">
        <div class="col-span-12 w-full">
            <div class="mb-2 font-semibold text-lg">Scheduled Billing</div>
        </div>
        <div class="col-span-3 w-full">
            <div class="mb-2">Schedule Type </div>
        </div>
        <div class="col-span-5 w-full">
            <div class="mb-2">GD Profit Center</div>
        </div>
        <div class="col-span-4 w-full">
            <div class="mb-2 ml-4">Pre Tax Amount</div>
        </div>
        <!-- Item -->
    <div class="col-span-3 w-full flex">
      <p class="pl-4">Primary</p>
    </div>
    <div class="col-span-5 mx-auto w-full">
      <select-box
          :items="[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' }
          ]"
          label="Dues" 
          labelOpened="Limited Availability"
          :showSearch="false"
          :showClearList="false"
          @onChange="posPaymentAmounts.primary.grProfitCenter = $event"
          class="bg-white text-black rounded border border-white w-full">
      </select-box>
    </div>
    <div class="col-span-4 w-full flex items-center">
      <p class="mr-2">$</p>
      <input type="number" class="white-input w-full p-1 rounded-sm" v-model="posPaymentAmounts.primary.preTaxAmount" />
    </div>
    <!-- More items -->
    <template v-for="(n, i) in 5">
      <div class="col-span-3 w-full flex">
        <p class="pl-4">Add On</p>
      </div>
      <div class="col-span-5 mx-auto w-full">
        <select-box
            :items="[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' }
            ]"
            :label="posPaymentAmounts[`addOn${n}`].grProfitCenter == '' ? 'Select One' : (posPaymentAmounts[`addOn${n}`].grProfitCenter == 'yes' ? 'Yes' : 'No')" 
            :labelOpened="posPaymentAmounts[`addOn${n}`].grProfitCenter == '' ? 'Select One' : (posPaymentAmounts[`addOn${n}`].grProfitCenter == 'yes' ? 'Yes' : 'No')"
            :showSearch="false"
            :showClearList="false"
            @onChange="posPaymentAmounts[`addOn${n}`].grProfitCenter= $event"
            class="bg-white text-black rounded border border-white w-full">
        </select-box>
      </div>
      <div class="col-span-4 w-full flex items-center">
        <p class="mr-2">$</p>
        <input type="number" class="white-input w-full p-1 rounded-sm" v-model="posPaymentAmounts[`addOn${n}`].preTaxAmount" />
      </div>
    </template>
  </simple-card>
</template>

<script setup>
const posPaymentAmounts = ref({
  primary: {
    grProfitCenter: 'dues',
    preTaxAmount: 15.0,
  },
  addOn1: {
    grProfitCenter: '',
    preTaxAmount: 0.0,
  },
  addOn2: {
    grProfitCenter: '',
    preTaxAmount: 0.0,
  },
  addOn3: {
    grProfitCenter: '',
    preTaxAmount: 0.0,
  },
  addOn4: {
    grProfitCenter: '',
    preTaxAmount: 0.0,
  },
  addOn5: {
    grProfitCenter: '',
    preTaxAmount: 0.0,
  },
})
</script>
<style scoped>
    .white-input {
        @apply bg-white text-black;
    }
</style>