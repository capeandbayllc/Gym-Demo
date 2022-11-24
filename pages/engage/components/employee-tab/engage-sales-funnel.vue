<template>
    <div class="engage-sales-funnel-container">
        <div class="engage-sales-funnel-header">
            <h3>Acquisition & Sales Funnel</h3>
            <Button class="text-base-content" size="sm" secondary @click="showEditSalesFunnelModal">Edit</Button>
        </div>
        <funnel-chart
            :data="data" class="h-36"
            :content-item="ChartContent"
        />
    </div>
    <daisy-modal id="editSalesFunnelModal" ref="editSalesFunnelModal">
        <edit-sales-funnel-modal />
    </daisy-modal>
</template>
<style scoped>
.engage-sales-funnel-container {
    @apply col-span-2 h-56 border border-secondary rounded p-3;
    .engage-sales-funnel-header {
        @apply flex justify-between items-center pb-3;
        h3 {
            @apply text-base font-semibold;
        }
    }
}
</style>
<script setup>
import ChartContent from './chart-content.vue';
import EditSalesFunnelModal from "./edit-sales-funnel/index.vue";
const data = [{
    id: 1,
    start: 80,
    end: 60,
    label: "Leads",
    value: 327,
    percent: 43
}, {
    id: 2,
    start: 60,
    end: 75,
    label: "Calls Attempt",
    value: 25,
    percent: 16
}, {
    id: 3,
    start: 75,
    end: 55,
    label: "Calls Completed",
    value: 78,
    percent: 34
}, {
    id: 4,
    start: 55,
    end: 85,
    label: "Scheduled Appts",
    value: 32,
    percent: 24
}, {
    id: 5,
    start: 85,
    end: 60,
    label: "Appt Show",
    value: 22,
    percent: 33
}]

const editSalesFunnelModal = ref(null);

const showEditSalesFunnelModal = () => {
    editSalesFunnelModal.value.open();
};
</script>
