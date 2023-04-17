<template>
    <div class="border border-secondary p-4 rounded-[20px] summury-wrap card-gradient-bg w-full">
        <div class="flex justify-between mb-4 mr-2">
            <p class="text-lg">Summary</p>
            <p>
                <span class="border-r-[2px] border-secondary pr-3 py-2 mr-2 h-full text-[13px]">Gym</span>
                <span class="text-[17px]">Tampa, Florida</span>
            </p>
        </div>
        <div class="border border-secondary rounded-[14px] bg-black">
            <div class="px-[10px] py-[1px]">
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
            <EffectiveDateAndPricing />
        </div>
    </div>
</template>

<script setup>

import EffectiveDateAndPricing from '../components/EffectiveDateAndPricing.vue';

</script>