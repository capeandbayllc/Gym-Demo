<template>
    <card title="Reporting Widget 2" class="bg-neutral"
        :options="{
            'collapse': false,
            'favorite': true,
        }"
    >
        <template #content>
            <div class="card-content">
                <div class="grid grid-cols-5 mt-2 font-semibold text-lg -xl:text-sm -lg:text-xs  text-center">
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
                <div class="chart-wrapper relative">
                    <div v-if="showTable">
                        <div class="text-secondary flex mt-2 text-xl -xl:text-sm font-semibold justify-center">
                            {{ title }}
                        </div>
                        <reporting-conversion-chart :data="chartValue"/>
                    </div>
                    <total-card :title="title" :total-count="filteredValue[activeFilter]" v-else></total-card>
                    <filtered-report-card class="absolute top-12 bg-neutral" :title="compareReport" :report-data="comparedByReportData" v-if="compareReport"></filtered-report-card>
                </div>
                <div class="grid grid-cols-1 mt-2 text-base -xl:text-xs font-normal">
                    <div>
                        <span>
                            Forecast:
                        </span>
                        <span class="ml-1 filter-list" @click="reportBy('Index')" :class="{'text-secondary': compareReport === 'Index'}">Index</span>
                        <span class="mx-2">or</span>
                        <span class="ml-1 filter-list" @click="reportBy('Straight Line')" :class="{'text-secondary': compareReport === 'Straight Line'}">Straight Line</span>
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
import ReportingConversionChart from './reporting-conversion-chart.vue';
import TotalCard from './total-card.vue';
import FilteredReportCard from './filtered-report-card.vue';
const title = ref('CONVERSIONS');
const totalCount = ref('35');
const activeFilter = ref(4);
const filteredValue = ['35','42','21','74']
const filterList = ['TODAY', 'MTD', 'QTD', 'YTD', 'RANGE'];
const showTable = ref(true);
const chartValue = [
    {
        name: "series1",
        data: [2, 1.65, 1.75, 1.90, 2, 1.70],
    },
];
const setFilter = (index)  => {
    compareReport.value = null;
    activeFilter.value = index;
    showTable.value = index === 4 ? true : false;
}
const compareReport = ref(null);
const comparedByReportData = ref([]);
const reportBy = (type) => {
    const result = compareBy.find(item => {
        return item.variation === type;
    });
    compareReport.value = type;
    comparedByReportData.value = result.data;
};

const compareBy = [
    {
        variation: 'Index',
        data: [
            {
                type: 'Forcast',
                value: '2,342',
                status: 'danger'
            },
            {
                type: 'Goal',
                value: '2,250',
                status: ''
            },
            {
                type: 'Forcast %',
                value: '104.0%',
                status: 'info'
            },
        ]
    },
    {
        variation: 'Straight Line',
        data: [
            {
                type: 'Forcast',
                value: '2,342',
                status: 'danger'
            },
            {
                type: 'Goal',
                value: '2,250',
                status: ''
            },
            {
                type: 'Forcast %',
                value: '104.0%',
                status: 'info'
            },
        ]
    },
];
</script>

