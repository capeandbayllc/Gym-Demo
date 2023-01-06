<template>
  <div class="border border-secondary p-4 rounded-md summury-wrap">
    <div class="flex justify-between mb-4">
      <p>Summary</p>
      <p><span class="text-xs border-r border-secondary pr-2 mr-2 h-full">Gym</span> Tampa, Florida</p>
    </div>
    <div class="border border-secondary rounded-md flex items-center">
      <div class="flex-1">
        <p class="p-2 text-lg mb-2">Primary Member</p>
        <div class="px-8 mb-4">
          <div class="flex justify-between mb-2"><p>Enrollment Fee</p> <span class="font-bold"> <i class="bg-secondary px-2 mr-2 rounded-full">i</i> $0.00</span> </div>
          <div class="flex justify-between mb-2"><p>Taxes</p> <span class="font-bold">$0.00</span> </div>
          <div class="flex justify-between mb-2"><p>Monthly Dues</p> <span class="font-bold"><i class="bg-secondary px-2 mr-2 rounded-full">i</i> $0.00</span> </div>
          <div class="flex justify-between mb-2">
            <p>Pro-rated</p>
            <div>
              <i class="bg-secondary px-2 mr-2 rounded-full">i</i>
              <s class="font-bold">$18.96</s>
              <p class="font-bold text-right mt-2">$9.48</p>
            </div>
          </div>
          <div class="flex justify-between mb-2"><p>Taxes</p> <span class="font-bold">$0.00</span> </div>
          <div class="flex justify-between mb-2"><p>Annual Fee</p> <span class="font-bold">$0.00</span> </div>
        </div>
        <p class="text-xs px-2 mb-4">Annual fee will be billed on January 20th. <br/> Taxes may apply.</p>
      </div>
      <div class="flex-1">
        <div class="bg-secondary text-center mb-2">
          <p>Effective Date</p>
          <p class="text-lg font-bold">22 Dec 2022</p>
        </div>
        <div class="px-8 mb-4">
          <div class="flex justify-between mb-2"><p>Enrollment Fee</p> <span class="text-secondary"> $0.00</span> </div>
          <div class="flex justify-between mb-2"><p>This Month's Dues</p> <span class="text-secondary"> $0.00</span> </div>
          <div class="flex justify-between mb-2"><p>Taxes</p> <span class="text-secondary"> $0.00</span> </div>
          <div class="flex justify-between mb-2"><p>Original Total Due</p> <span class="text-secondary"> $18.96</span> </div>
          <div class="flex justify-between mb-2"><p class="text-secondary">Total Due Today</p> <span class="text-secondary">$9.48</span> </div>
        </div>
        <div class="bg-secondary text-center">
          <p>PROMO CODE</p>
          <p class="text-lg font-bold">XMAS DAY <span class="ml-10">-$9.48</span></p>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-around my-4">
      <div class="flex items-center mr-6">
        <input type="checkbox" class="toggle toggle-info mr-4"/> <span>Send me promotional texts</span>
      </div>
      <div class="flex items-center">
        <input type="checkbox" class="toggle toggle-info mr-4" checked /> <span>Send me promotional emails</span>
      </div>
    </div>
    <Button outline size="xl" class="mx-auto block !px-12 normal-case text-xl rounded-lg" @click="openThankYou"> Pay Now </Button>
  </div>
  <daisy-modal id="thankYouPopUp" ref="thankYouPopUp" class="w-fit">
    <div class="bg-black rounded-md p-6 border border-secondary">
      Thank you for your purchase and Welcome to Fitness Plus.
    </div>
  </daisy-modal>
</template>
<script setup>
import {ref} from 'vue';
const thankYouPopUp = ref(null);
const openThankYou = ()=>{
  thankYouPopUp.value.open()
}

</script>