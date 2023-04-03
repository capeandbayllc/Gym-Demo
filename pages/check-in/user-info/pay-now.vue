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
          <div class="flex-1 mt-12">
            <div class="bg-gradient-to-b from-secondary to-[#003255] rounded-t-[14px] text-center py-1">
                <p class="font-light text-sm -mb-1">Effective Date</p>
                <p class="text-xl font-semibold">22 Dec 2022</p>
            </div>
            <div class="px-12 py-3">
            <div class="mb-2 w-full flex">
                <p class="w-9/12">Enrollment Fee</p>
                <span class="text-secondary font-semibold w-3/12"> $0.00</span>
            </div>
            <div class="mb-2 w-full flex">
                <p class="w-9/12">This Month's Dues</p>
                <span class="text-secondary font-semibold w-3/12"> $0.00</span>
            </div>
            <div class="mb-2 w-full flex">
                <p class="w-9/12">Taxes</p>
                <span class="text-secondary font-semibold w-3/12"> $0.00</span>
            </div>
            <div class="mb-2 w-full flex">
                <p class="w-9/12">Original Total Due</p>
                <span class="text-secondary font-semibold w-3/12"> $18.96</span>
            </div>
            <div class="mb-2 font-semibold w-full flex">
                <p class="text-secondary w-9/12">Total Due Today</p>
                <span class="text-secondary font-semibold w-3/12">$9.48</span>
            </div>
            </div>
            <div class="bg-gradient-to-b from-secondary to-[#003255] rounded-b-[14px] text-center py-3">
                <p class="font-light text-sm -mb-1">PROMO CODE</p>
                <p class="text-xl font-semibold">XMAS DAY <span class="ml-10">-$9.48</span></p>
            </div>
          </div>
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