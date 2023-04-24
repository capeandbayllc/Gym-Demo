<template>
    <div class="flex items-center space-x-6">
        <circle-big :item="item"></circle-big>
        <div class="content flex items-center justify-between w-full">
            <div class="text-left">
                <div class="statistics">
                    <span class="text-[#0075c9] text-[13px] font-bold">{{ item.head }}</span>
                </div>
                <div class="amount">
                    <span class="text-[25px] text-white font-bold">$ {{ item.amount.toFixed(2) }}</span>
                </div>
                <div class="percent-sm">
                    <span class="text-[#5bc600] text-[11px] flex items-center">
                        <Up class="mr-2" />
                        {{ item.progress }}%
                    </span>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center">
                <span class="bg-[#2f6301] p-2.5 rounded-lg inline-block">
                    <ArrowUp class="text-[#5cc600]" />
                </span>
                <span class="text-[#5cc600] inline-block text-[13px] mt-2">
                    +{{ item.progress2 }}%
                </span>
            </div>
        </div>
    </div>
</template>
<script setup>

import { Up } from "~/components/icons/index";
import { ArrowUp } from "~/components/icons/index";
import CircleBig from "./circle-big.vue"

const props = defineProps({
    item: {
        default: {},
        type: Object
    }
})

const options = {
    chart: {
        height: 280,
        type: "radialBar",
    },
    series: [70],
    chartOptions: {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        }
    },
};

</script>