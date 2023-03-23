<template>
    <card
        title="Sales Funnels" class="edit-funnel-card"
        :options="{
            'collapse': false,
            'favorite': false,
        }"
    >
        <template #content>
            <div class="edit-funnel-container flex flex-col">
                <div class="grid grid-cols-12 gap-6">
                    <div id="chart" class="col-span-4">
                        <ClientOnly>
                            <apexchart
                            type="bar"
                            height="320"
                            :options="chartOptions"
                            :series="series"
                            ></apexchart>
                        </ClientOnly>
                        </div>
                        <div class="col-span-3">
                            <radialChart />
                            <!-- <leads-card  @editSalesFunnelTableSelected="getTableList"/> -->
                        </div>
                        <div class="col-span-5">
                            <DataGraphAnalysis  />
                        </div>
                </div>
                <div class="flex flex-row bg-black mt-4">
                    <leads-table :table-selected="tableSelected"/>
                    <funnel-chart
                        :data="data" class="h-80 w-full"
                        :content-item="ChartContent"
                    />
                </div>
            </div>
        </template>
    </card>
</template>
<style scoped>
.edit-funnel-container {
	@apply pl-2 pr-2 pt-6 pb-6;
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
import radialChart from './radial-chart.vue'
const tableSelected = ref('Callbacks');
const series = [{
            name: 'Servings',
            data: [44, 55, 41, 67, 22, 43, 21]
          }]
    const chartOptions = {
        annotations: {
            yaxis: [{
                strokeDashArray: 10,
            }]
        },
            chart: {
              height: 350,
              type: 'bar',
              toolbar: {
                show: false,
              }
            },
            plotOptions: {
              bar: {
                borderRadius: 15,
                columnWidth: '80px',
              }
            },
            dataLabels: {
              enabled: false
            },
            
            
            xaxis: {
              labels: {
                rotate: -45
              },
              categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              tickPlacement: 'on',
              axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
              title: {
                text: 'Servings',
              },
            },
            fill: {
              type: 'solid',
              colors: ['#89ceff'],
              opacity: 0.30,
        //       gradient:{
		// 	shade : 'dark',
		// 	type: 'vertical',
		// 	shadeIntensity : 0,
		// 	gradientToColors: ['#042137', '#042137'],
		// 	inverseColors : false,
		// 	opacityTo : 1,
		// 	opacityFrom : 1,
		// },
            }
          }
          
          

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