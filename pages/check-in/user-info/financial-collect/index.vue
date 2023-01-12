<template>
  <div class="flex w-[900px] gap-4">
    <div class="w-7/12 border border-secondary rounded-md p-4 card-details gradient-bg">
        <div class="flex justify-between mb-4">
            <p>Due Today*</p>
            <div class="w-[200px]">
                <label class="text-sm font-bold mb-2 inline-block">Add Promo Code</label>
                <input class="white-input w-full p-1 rounded-sm" placeholder="Add Promo"/>
            </div>
        </div>
        <div class="flex justify-between items-center">
          <Button size="sm" class="border-gray-400 bg-transparent text-sm normal-case hover:!bg-secondary hover:text-white hover:!border-white" :class="{'!bg-secondary text-white !border-white': payWith == 'checking'}" @click="payWith = 'checking'">Pay with Checking</Button>
          <Button size="sm" class="border-gray-400 bg-transparent text-sm normal-case hover:!bg-secondary hover:text-white hover:!border-white" :class="{'!bg-secondary text-white !border-white': payWith == 'card'}" @click="payWith = 'card'">Pay with Card</Button>
          <input type="checkbox" class="toggle toggle-info" checked />
          <p class="text-sm w-[150px]">Make this my default membership payment.</p>
        </div>
        <PayWithChecking v-if="payWith == 'checking'"/>
        <PayWithCard v-if="payWith == 'card'"/>
    </div>
    <div class="border border-secondary p-4 rounded-md flex-1">
      <div class="border border-secondary p-4 rounded-md summury-wrap gradient-bg">
        <div class="flex justify-between mb-4">
          <p>Summary</p>
          <p><span class="text-xs border-r border-secondary pr-2 mr-2 h-full">Gym</span> Tampa, Florida</p>
        </div>
        <div class="border border-secondary rounded-md bg-black">
          <p class="p-2 text-lg mb-1">Primary Member</p>
          <div class="px-8 mb-4">
            <div class="flex justify-between mb-1"><p>Enrollment Fee</p> <span class="font-bold"> <i class="bg-secondary px-2 mr-2 rounded-full">i</i> $0.00</span> </div>
            <div class="flex justify-between mb-1"><p>Taxes</p> <span class="font-bold">$0.00</span> </div>
            <div class="flex justify-between mb-1"><p>Monthly Dues</p> <span class="font-bold"><i class="bg-secondary px-2 mr-2 rounded-full">i</i> $0.00</span> </div>
            <div class="flex justify-between mb-1">
              <p>Pro-rated</p>
              <div>
                <i class="bg-secondary px-2 mr-2 rounded-full">i</i>
                <s class="font-bold">$18.96</s>
                <p class="font-bold text-right mt-1">$9.48</p>
              </div>
            </div>
            <div class="flex justify-between mb-1"><p>Taxes</p> <span class="font-bold">$0.00</span> </div>
            <div class="flex justify-between mb-1"><p>Annual Fee</p> <span class="font-bold">$0.00</span> </div>
          </div>
          <p class="text-xs px-2 mb-2">Annual fee will be billed on January 20th. <br/> Taxes may apply.</p>
          <div class="bg-secondary text-center mb-2">
            <p>Effective Date</p>
            <p class="text-lg font-bold">22 Dec 2022</p>
          </div>
          <div class="px-8 mb-2">
            <div class="flex justify-between mb-1"><p>Enrollment Fee</p> <span class="text-secondary"> $0.00</span> </div>
            <div class="flex justify-between mb-1"><p>This Month's Dues</p> <span class="text-secondary"> $0.00</span> </div>
            <div class="flex justify-between mb-1"><p>Taxes</p> <span class="text-secondary"> $0.00</span> </div>
            <div class="flex justify-between mb-1"><p>Original Total Due</p> <span class="text-secondary"> $18.96</span> </div>
            <div class="flex justify-between mb-1"><p class="text-secondary">Total Due Today</p> <span class="text-secondary">$9.48</span> </div>
          </div>
          <div class="bg-secondary text-center">
            <p>PROMO CODE</p>
            <p class="text-lg font-bold">XMAS DAY <span class="ml-10">-$9.48</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PayWithCard from './pay-with-card.vue';
import PayWithChecking from './pay-with-checking.vue';

const payWith = ref("checking")

</script>