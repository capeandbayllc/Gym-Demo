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
                    <div>TODAY</div>
                    <div>MTD</div>
                    <div>QTD</div>
                    <div>YTD</div>
                    <div class="text-secondary">RANGE</div>
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
                <div class="text-secondary flex mt-2 text-xl -xl:text-sm font-semibold justify-center">
                    {{ title }}
                </div>
                <reporting-conversion-chart :data="chartValue"/>
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
<script setup>
import ReportingConversionChart from './reporting-conversion-chart.vue';
const title = ref('CONVERSIONS');
const totalCount = ref('35');
const chartValue = [
    {
        name: "series1",
        data: [2, 1.65, 1.75, 1.90, 2, 1.70],
    },
];
</script>

