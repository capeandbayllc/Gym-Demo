<template>
    <card title="Reporting Widget 1" class="bg-neutral"
        :options="{
            'collapse': false,
            'favorite': false,
            'add': true,
        }"
    >
        <template #content>
            <div class="card-content  px-4 pb-3">
                <div class="grid grid-cols-5 mt-2 font-semibold text-lg -xl:text-sm -lg:text-xs text-center">
                    <filter-list
                        @setFilter="setFilter($event)"
                        :active-filter="activeFilter"
                    />
                </div>

                <comparison-selector
                    label="Compare"
                    :items="['Previous Month', 'Previous Year']"
                    @change="reportBy($event)"
                    :compareReport="compareReport"
                />

                <div class="relative">
                    <div v-if="showTable">
                        <div class="text-secondary flex mt-2 text-xl -xl:text-sm font-semibold justify-center">
                            {{ title }}
                        </div>
                        <reporting-leads-line-chart />
                    </div>
                    <total-card :title="title" :total-count="filteredValue[activeFilter]" v-else></total-card>
                    <filtered-report-card class="absolute top-12 -lg:left-1 bg-neutral" :title="compareReport" :report-data="comparedByReportData" v-if="compareReport"></filtered-report-card>
                </div>
                <comparison-selector
                    label="Forecast"
                    :items="['Index', 'Straight Line']"
                    @change="reportBy($event)"
                    :compareReport="compareReport"
                />
            </div>
        </template>
    </card>
</template>
<script setup>
import FilterList from '../components/filter-list.vue';
import ComparisonSelector from '../components/comparison-selector.vue';
import TotalCard from './total-card.vue';
import FilteredReportCard from './filtered-report-card.vue';
import ReportingLeadsLineChart from './reporting-leads-line-chart.vue'
const title = ref('NEW LEADS');
const activeFilter = ref(0);
const filteredValue = ['1,567','3,241','5,678','8,324']
const showTable = ref(false);
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
}

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
]
</script>

