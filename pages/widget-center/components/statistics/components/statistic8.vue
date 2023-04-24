<template>
    <card title="Statistic 1" class="bg-base-300" :options="{ favorite: false, collapse: false }">
        <template #content>
            <div>
                <ReportingsCard class="!border-0"></ReportingsCard>
            </div>
        </template>
    </card>
</template>

<script setup>
import ReportingsCard from '~/pages/fitness/components/reportings-card/draft-reporting-chart.vue'
</script>