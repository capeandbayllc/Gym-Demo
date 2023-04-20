<template>
    <div class="reporting-page-content">
        <div class="reporting-container">
            <div class="col-span-1">
                <reporting-widget-leads></reporting-widget-leads>
            </div>
            <div class="col-span-1">
                <reporting-widget-conversion></reporting-widget-conversion>
            </div>
            <div class="row-span-2">
                <reporting-widget-member></reporting-widget-member>
            </div>
            <div class="col-span-2">
                <!-- <create-report-card></create-report-card> -->
                <reporting-widget-clients></reporting-widget-clients>
            </div>
        </div>
    </div>
</template>
<style scoped lang="postcss">
.reporting-page-content {
    @apply pb-5 pt-4 mx-auto w-full px-10;
}
.reporting-page-content .reporting-container { 
    @apply grid grid-cols-3 gap-4;
}
.reporting-page-content .reporting-container .card-title  {
    @apply text-base font-medium !important;
}
@media (max-width:1300px){
    /* .reporting-page-content {width:90% !important} */
}
</style>
<script setup>
import ReportingWidgetLeads from './components/reporting-widget-leads.vue';
import ReportingWidgetConversion from './components/reporting-widget-conversion.vue'
import ReportingWidgetMember from './components/reporting-widget-member.vue'
import ReportingWidgetClients from './components/reporting-widget-clients.vue'
import CreateReportCard from './components/create-report-card.vue';
onMounted(async () => {
    await nextTick();
    window.dispatchEvent(new Event('resize'))
});
</script>
