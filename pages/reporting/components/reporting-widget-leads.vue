<template>
    <card title="Reporting Widget 1" class="bg-neutral"
        :options="{
            'collapse': false,
            'favorite': true,
        }"
    >
        <template #content>
            <div class="card-content">
                <div class="grid grid-cols-5 mt-2 font-semibold text-lg -xl:text-sm -lg:text-xs text-center">
                    <div class="filter-list" :class="{'text-secondary': activeFilter === index}" v-for="(item, index) in filterList" :key="index" @click="setFilter(index)">{{ item }}</div>
                </div>
                <div class="grid grid-cols-1 mt-2 text-base -xl:text-xs font-normal">
                    <div>
                        <span>
                            Compare:
                        </span>
                        <span class="ml-1">Previous Month</span>
                        <span class="mx-2">or</span>
                        <span class="ml-1">Previous Year</span>
                    </div>
                </div>
                <total-card :title="title" :total-count="filteredValue[activeFilter]"></total-card>
                <div class="grid grid-cols-1 mt-2 text-base -xl:text-xs font-normal">
                    <div>
                        <span>
                            Forecast:
                        </span>
                        <span class="ml-1">Index</span>
                        <span class="mx-2">or</span>
                        <span class="ml-1">Straignt Line</span>
                    </div>
                </div>
            </div>
        </template>
    </card>
</template>
<style scoped>
.filter-list{
    cursor: pointer;
}
</style>
<script setup>
import TotalCard from './total-card.vue';
const title = ref('NEW LEADS');
const totalCount = ref('1,567');
const filterList = ['TODAY', 'MTD', 'QTD', 'YTD', 'RANGE'];
const activeFilter = ref(0);
const filteredValue = ['1,567','3,241','5,678','8,324']
const setFilter = (index)  => {
    if(index !== 4) {
        activeFilter.value = index;
    }
}
</script>

