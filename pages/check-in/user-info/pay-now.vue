<template>
  <div :class="modalClass">
    <div>
      <div class="border border-secondary p-4 rounded-md summury-wrap gradient-bg">
        <div class="flex justify-start mb-4">
          <p>Summary</p>
          <p class="ml-[70px]">
            <span class="border-r-[2px] border-secondary pr-3 py-2 mr-2 h-full text-[13px]">Gym</span>
            <span class="text-[17px]">Tampa, Florida</span>
          </p>
        </div>
        <div class="border border-secondary rounded-[14px] flex items-start bg-black px-[10px] py-[1px] pb-[20px]">
          <div class="flex-1 pr-12">
            <div class="mb-3">
                <p class="p-2 text-lg mb-1 font-semibold">Primary Member</p>
                <div class="px-8 mb-4">
                    <div class="flex justify-between mb-1"><p>Enrollment Fee</p><span class="font-bold w-[90px] flex justify-between"><i class="bg-secondary px-2 mr-2 rounded-full font-normal">i</i> $0.00</span></div>
                    <div class="flex justify-between mb-1"><p>Taxes</p> <span class="font-bold">$0.00</span> </div>
                    <div class="flex justify-between mb-1"><p>Monthly Dues</p> <span class="font-bold w-[90px] flex justify-between"><i class="bg-secondary px-2 mr-2 rounded-full font-normal">i</i> $0.00</span> </div>
                    <div class="flex justify-between mb-1">
                    <p>Pro-rated</p>
                    <div>
                        <div class="w-[90px] flex justify-between">
                        <i class="bg-secondary px-2 mr-2 rounded-full">i</i>
                        <s class="font-bold">$18.96</s>
                        </div>
                        <p class="font-bold text-right mt-1">$9.48</p>
                    </div>
                    </div>
                    <div class="flex justify-between mb-1"><p>Taxes</p> <span class="font-bold">$0.00</span> </div>
                    <div class="flex justify-between mb-1"><p>Annual Fee</p> <span class="font-bold">$0.00</span> </div>
                </div>
                <p class="text-xs px-2 mb-5 font-light">Annual fee will be billed on January 20th. <br/> Taxes may apply.</p>
            </div>
          </div>
          <EffectiveDateAndPricing class="mt-12" />
        </div>
        <div class="flex items-center justify-around my-4">
          <div class="flex items-center mr-6">
            <div class="toggle-custom mr-2 mt-[2px]" :class="{ 'toggle-active': promotionalsTextsCheck }">
                <div @click="changePromotionalsTextsCheck" class="circle"></div>
                <div @click="changePromotionalsTextsCheck" class="line"></div>
            </div>
            <span>Send me promotional texts</span>
          </div>
          <div class="flex items-center">
            <div class="toggle-custom mr-2 mt-[2px]" :class="{ 'toggle-active': promotionalsEmailsCheck }">
                <div @click="changePromotionalsEmailsCheck" class="circle"></div>
                <div @click="changePromotionalsEmailsCheck" class="line"></div>
            </div>
            <span>Send me promotional emails</span>
          </div>
        </div>
        <button class="border-2 py-2 px-10 rounded-[16px] mx-auto block text-[22px] font-semibold" @click="openThankYou"> Pay Now </button>
      </div>
      <daisy-modal id="thankYouPopUp" ref="thankYouPopUp" class="w-fit">
        <div class="bg-black rounded-md p-6 border border-secondary">
          Thank you for your purchase and Welcome to Fitness Plus.
          <div class="flex justify-center" @click="thankYouPopUp.close()">
            <button class="text-[#6d6d6d] hover:text-secondary mt-3 mr-3 -mb-">Close</button>
          </div>
        </div>
        
      </daisy-modal>
    </div>
    <!-- <slot></slot> -->
  </div>
</template>
<script setup>
import {ref} from 'vue';
import EffectiveDateAndPricing from './components/EffectiveDateAndPricing.vue';

const props = defineProps({
    modalClass:{
        type: String
    }
})

const thankYouPopUp = ref(null);
const openThankYou = ()=>{
  thankYouPopUp.value.open()
}

const promotionalsTextsCheck = ref(false);
const changePromotionalsTextsCheck = ()=>{
  promotionalsTextsCheck.value = !promotionalsTextsCheck.value;
};

const promotionalsEmailsCheck = ref(false);
const changePromotionalsEmailsCheck = ()=>{
  promotionalsEmailsCheck.value = !promotionalsEmailsCheck.value;
};


</script>