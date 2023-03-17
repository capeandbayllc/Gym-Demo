<template>
    <card title="Reporting Widget 2" class="bg-neutral"
        :options="{
            'collapse': false,
            'favorite': false,
            'add': true,
        }"
    >
        <template #content>
            <div class="card-content px-4 pb-3">
                <div class="grid grid-cols-5 mt-2 font-semibold text-lg -xl:text-sm -lg:text-xs text-center">
                    <div class="cursor-pointer" :class="{'text-secondary': activeFilter === index}" v-for="(item, index) in filterList" :key="index" @click="setFilter(index)">{{ item }}</div>
                </div>
                <div class="grid grid-cols-1 mt-2 text-base -xl:text-xs font-normal">
                    <div>
                        <span>
                            Compare:
                        </span>
                        <span class="ml-1 cursor-pointer" @click="reportBy('Previous Month')" :class="{'text-secondary': compareReport === 'Previous Month'}">Previous Month</span>
                        <span class="mx-2">or</span>
                        <span class="cursor-pointer" @click="reportBy('Previous Year')" :class="{'text-secondary': compareReport === 'Previous Year'}">Previous Year</span>
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
                        <span class="ml-1 cursor-pointer" @click="reportBy('Index')" :class="{'text-secondary': compareReport === 'Index'}">Index</span>
                        <span class="mx-2">or</span>
                        <span class="ml-1 cursor-pointer" @click="reportBy('Straight Line')" :class="{'text-secondary': compareReport === 'Straight Line'}">Straight Line</span>
                    </div>
                </div>
            </div>
        </template>
    </card>
</template>
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
    if(type !== compareReport.value) {
        const result = compareBy.find(item => {
            return item.variation === type;
        });
        compareReport.value = type;
        comparedByReportData.value = result.data;
    }else {
        compareReport.value = null; 
        comparedByReportData.value = [];
    }
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
    {
        variation: 'Previous Month',
        data: [
            {
                type: 'Nov - 21',
                value: '1,550',
                status: 'danger'
            },
            {
                type: 'Nov - 22',
                value: '1,561',
                status: ''
            },
            {
                type: 'Change %',
                value: '0.70%',
                status: 'info'
            },
        ]
    },
    {
        variation: 'Previous Year',
        data: [
            {
                type: '2021',
                value: '1,550',
                status: 'danger'
            },
            {
                type: '2022',
                value: '1,561',
                status: ''
            },
            {
                type: 'Change %',
                value: '0.70%',
                status: 'info'
            },
        ]
    },
];
</script>

