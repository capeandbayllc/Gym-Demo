<template>
    <simple-card class="mb-8">
        <div class="py-4 px-10">
            <h2 class="text-center leading-10 text-lg">Salary/Banking Information</h2>
            <div class="flex -md:block">
                <div class="chart w-[60%] -md:w-full -md:mb-4">
                    <banking-info-cahrt :width="350" class="mx-auto"/>
                </div>
                <div class="w-[40%] -md:w-full">
                    <div v-for="(item, index) in bankingInfo" :key="item.key" class="mx-auto w-fit mb-4 -md:w-full">
                        <div class="mb-2">{{item.label}}</div>
                        <input :class="item.class" class="w-full p-1 rounded-sm w-[250px] -md:w-full" v-model="bankingInfoObj[item.key]"/>
                    </div>
                </div>
            </div>
        </div>
    </simple-card>
</template>

<script setup>
import {ref} from 'vue';
import bankingInfoCahrt from './banking-info-cahrt.vue';
const bankingInfoObj = ref({})
const bankingInfo = [{
    key: "gross-pay",
    label: "Gross Pay",
    class: "neutral-input"
},{
    key: "class-rates",
    label: "Class Rates",
    class: "neutral-input"
},{
    key: "Bonuses",
    label: "Bonuses",
    class: "neutral-input"
}]
</script>
<style scoped>
    .secondary-input {
        @apply bg-secondary;
    }
    .neutral-input {
        @apply bg-base-content/20;
    }
    .readonly-input {
        @apply bg-transparent text-base-content/50;
    }
    .outline-input {
        @apply bg-transparent border border-secondary;
    }
    .divider {
        @apply border-b h-0 border-secondary col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-auto;
    }
</style>