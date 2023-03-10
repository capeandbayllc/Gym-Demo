<template>
    <div class="conversion-data-wrapper">
        <div class="conversion-data-header">
            <div class="conversion-data-title">Conversion Data</div>
            <ConversionFilters />
        </div>
        <div class="conversion-data-body">
            <div class="conversion-data-details lg:w-2/3 w-full">
                <div class="conversion-data-date">April</div>
                <div
                    class="flex flex-col items-center md:flex-row md:justify-between mb-4"
                >
                    <!-- <div
                        v-for="item in conversions"
                        :key="item.label"
                        class="flex flex-col items-center w-fit"
                    >
                        <progress-chart :data="[item.progress]" class="w-56" />
                        <span class="mt-[-16px]">{{ item.label }}</span>
                    </div> -->
                </div>
                <ConversionTable />
            </div>
            <div class="mt-4 lg:mt-0 lg:w-1/3 w-fit self-center lg:pl-6">
                <ConversionSummary />
            </div>
        </div>
    </div>
</template>

<script setup>
import ConversionFilters from "./conversion-filters.vue";
import ConversionTable from "./conversion-table.vue";
import ConversionSummary from "./conversion-summary.vue";

let conversions = [
    { label: "Success", progress: 65 },
    { label: "Bounced", progress: 25 },
    { label: "Rescheduled", progress: 10 },
];
</script>

<style scoped>
.conversion-data-wrapper {
    @apply flex flex-col mt-12;
}
.conversion-data-header {
    @apply flex flex-row flex-wrap justify-between pb-3;
}
.conversion-data-title {
    @apply text-xl font-bold;
}
.conversion-data-body {
    @apply flex flex-col lg:flex-row border border-secondary justify-between rounded p-3;
}
.conversion-data-details {
    @apply flex flex-col;
}
.conversion-data-date {
    @apply text-xl;
}
</style>
