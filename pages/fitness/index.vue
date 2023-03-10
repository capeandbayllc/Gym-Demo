<template>
    <div class="page-fitness-container">
        <div class="page-content grid grid-cols-1 gap-5">
            <assessments-card/>
            <waivers-card />
            <questionnaires-card />
            <reportings-card />

        </div>
    </div>
</template>
<style scoped>
.page-fitness-container {
    @apply py-4 pr-5 w-full h-fit;
    .page-content {
        @apply text-center text-secondary p-6 border-[#1b70b1] border-2 rounded-[] bg-[#054171] ;
    }
}
</style>
<script setup>
import AssessmentsCard from './components/assessments-card/index.vue';
import WaiversCard from './components/waivers-card/index.vue';
import ReportingsCard from './components/reportings-card/index.vue';
import QuestionnairesCard from './components/questionnaires-card/index.vue';
</script>
