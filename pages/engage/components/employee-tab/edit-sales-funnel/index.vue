<template>
    <card
        title="Sales Funnels" class="edit-funnel-card"
        id="editFunnelCard"
        :show-title-container="false"
        bgBlack
        :options="{
            'collapse': false,
            'favorite': false,
        }"
    >
        <template #content>
            <div class="pt-4 px-8">
                <h2 class="text-xl font-semibold">Sales Funnel</h2>
            </div>
            <div class="edit-funnel-container flex flex-col">
                <div class="grid grid-cols-12 gap-3 px-4">
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
                <div class="grid grid-cols-12 gap-x-6 mt-4 border-2 border-white p-4 rounded-[14px] mx-4">
                    <div class="col-span-12">
                        <p class="text-[#0075c9] pb-2">September 2022 Membership Sales</p>
                    </div>
                    <div class="col-span-4">
                        <Statistics1 />
                    </div>
                    <div class="col-span-8">
                    <funnel-chart
                            :data="data" class="h-72 w-full py-4"
                            :content-item="ChartContent"
                        />
                    </div>
                    <div class="w-full col-span-12 flex justify-end">
                        <button class="bg-[#0075c9] rounded-md px-3 py-1 mt-2 text-sm">
                            + Add to page
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </card>
</template>
<style>
#editFunnelCard .edit-funnel-container {
	@apply pl-2 pr-2 pt-2 pb-6;
    .card-title {
        @apply border-b pb-2 border-base-content/50;
    }
    
    .chart-content{
        @apply bg-black rounded w-full text-3xl font-bold border-white border-2 text-center;
    }
   
}
#editFunnelCard.edit-funnel-card {
    background-color: hsl(var(--n) / var(--tw-bg-opacity));
}
#editFunnelCard.edit-funnel-card {
    .funnel-chart .funnel-chart-item:first-child .chart-content{
        @apply hidden;
    }
    .chart-content .label{
        @apply hidden;
    }
    .chart-content {
        @apply bg-transparent border-none;
        .leading-none{
           @apply absolute -bottom-3 -left-6 flex flex-row-reverse items-center space-x-2 ;
           .value, .percent {
            @apply text-[10px] font-normal;
           }
           .value {
            @apply ml-2 text-secondary;
           }
           .percent {
            @apply block leading-[32px] w-[32px] h-[32px] border border-white bg-black rounded-full;
           }
        }
    }
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
    color: '#006bbc',
    start: 220,
    end: 160,
    label: "Leads",
    value: 327,
    percent: 43,
    activeContent: true,
    borderWidth: 140
}, {
    id: 2,
    color: '#009ffa',
    start: 160,
    end: 175,
    label: "Calls Attempt",
    value: '10 loss: 6%',
    percent: 16,
    activeContent: false,
    borderWidth: 140
}, {
    id: 3,
    color: '#49bcfd',
    start: 175,
    end: 155,
    label: "Calls Completed",
    value: '22 loss: 18%',
    percent: 34,
    activeContent: false,
    borderWidth: 140
}, {
    id: 4,
    color: '#7dd0fc',
    start: 155,
    end: 185,
    label: "Scheduled Appts",
    value: '45 loss: 48%',
    percent: 24,
    activeContent: false,
    borderWidth: 140
}, {
    id: 5,
    color: '#acddf7',
    start: 185,
    end: 160,
    label: "Appt Show",
    value: '67 loss: 72%',
    percent: 33,
    activeContent: false,
    borderWidth: 140
}];
</script>