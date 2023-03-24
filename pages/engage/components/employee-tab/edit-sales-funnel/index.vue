<template>
    <card
        title="Sales Funnels" class="edit-funnel-card bg-black"
        :show-title-container="false"
        :options="{
            'collapse': false,
            'favorite': false,
        }"
    >
        <template #content>
            <div class="pt-4 px-4">
                <h2 class="text-xl font-semibold">Sales Funnel</h2>
            </div>
            <div class="edit-funnel-container flex flex-col">
                <div class="grid grid-cols-12 gap-3">
                    <div class="col-span-4">
                        <NewSales />
                    </div>
                    <div class="col-span-3 ">
                        <Statistics />
                    </div>
                    <div class="col-span-5">
                        <DataGraphAnalysis  />
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-4 mt-2 border-2 border-white p-4 rounded-[14px]">
                    <div class="col-span-12">
                        <p class="text-[#0075c9]">September 2022 Membership Sales</p>
                    </div>
                    <div class="col-span-5">
                        <Statistics1 />
                    </div>
                    <div class="col-span-7">
                        <funnel-chart
                            :data="data" class="h-72 w-full"
                            :content-item="ChartContent"
                        />
                    </div>
                    
                </div>
            </div>
        </template>
    </card>
</template>
<style scoped>
.edit-funnel-container {
	@apply pl-2 pr-2 pt-2 pb-6;
    .card-title {
        @apply border-b pb-2 border-base-content/50;
    }
    
    .chart-content{
        @apply bg-black rounded w-full text-3xl font-bold border-white border-2 text-center;
    }
   
}
.edit-funnel-card {
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
}
</style>

<script setup>
import {ref} from 'vue';
import LeadsCard from "./leads-card.vue"
import LeadsTable from "./leads-table.vue"
import ChartContent from '../chart-content.vue';
import DataGraphAnalysis from './data-graph-analysis.vue'
import NewSales from './new-sales.vue'
import Statistics from './statistics.vue'
import Statistics1 from './statistics-1.vue'
const tableSelected = ref('Callbacks');

          
          

const getTableList = (name) => {
    tableSelected.value = name;
}
const data = [{
    id: 1,
    start: 180,
    end: 160,
    label: "Leads",
    value: 327,
    percent: 43,
    activeContent: true,
    borderWidth: 137
}, {
    id: 2,
    start: 160,
    end: 175,
    label: "Calls Attempt",
    value: 25,
    percent: 16,
    activeContent: false,
    borderWidth: 137
}, {
    id: 3,
    start: 175,
    end: 155,
    label: "Calls Completed",
    value: 78,
    percent: 34,
    activeContent: false,
    borderWidth: 137
}, {
    id: 4,
    start: 155,
    end: 185,
    label: "Scheduled Appts",
    value: 32,
    percent: 24,
    activeContent: false,
    borderWidth: 137
}, {
    id: 5,
    start: 185,
    end: 160,
    label: "Appt Show",
    value: 22,
    percent: 33,
    activeContent: false,
    borderWidth: 137
}];
</script>