<template>
    <div class="border border-secondary rounded p-3 bg-black">
        <div class="engage-sales-funnel-container">
            <div class="engage-sales-funnel-header">
                <h3>Acquisition & Sales Funnel</h3>
                <Button class="text-base-content" size="sm" secondary @click="showEditSalesFunnelModal">Edit</Button>
            </div>
            <funnel-chart
                :data="data" class="h-72 w-full custom-funnel-chart"
                :content-item="ChartContent"
            />
        </div>
        <engage-call-list />
    </div>
    <daisy-modal id="editSalesFunnelModal" ref="editSalesFunnelModal" class="w-full !min-w-0 max-w-fit h-[600px]">
        <edit-sales-funnel-modal class="h-[600px] overflow-auto"/>
    </daisy-modal>
</template>
<style scoped>
.engage-sales-funnel-container {
    @apply col-span-2 h-[23rem] -md:col-span-3;
    .engage-sales-funnel-header {
        @apply flex justify-between items-center pb-3;
        h3 {
            @apply text-base font-semibold;
        }
    }
    .funnel-chart {
        /* @apply w-[502px] mx-auto; */
    }
}
</style>
<script setup>
import ChartContent from './chart-content.vue';
import EditSalesFunnelModal from "./edit-sales-funnel/index.vue";
import EngageCallList from './engage-call-list.vue';

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

const editSalesFunnelModal = ref(null);

const showEditSalesFunnelModal = () => {
    editSalesFunnelModal.value.open();
};
</script>
