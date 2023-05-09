<template>
  <div class="border border-secondary rounded-3xl p-3 pt-6 bg-base-300">
    <div class="engage-sales-funnel-container px-2">
      <div class="engage-sales-funnel-header">
        <h3>Acquisition & Sales Funnel</h3>
        <button
          class="bg-secondary hover:bg-primary transition-colors text-sm px-3 py-1 rounded-lg"
          @click="showEditSalesFunnelModal"
        >
          Edit
        </button>
      </div>
      <funnel-chart
        :data="data"
        class="h-72 w-full rounded-3xl overflow-hidden"
        :content-item="ChartContent"
      />
    </div>
    <engage-call-list />
  </div>
  <daisy-modal id="editSalesFunnelModal" ref="editSalesFunnelModal" class="">
    <div class="modal-bg">
      <edit-sales-funnel-modal class="max-w-[1152px]" />
    </div>
  </daisy-modal>
</template>
<style scoped lang="postcss">
.modal-bg {
  @apply p-[18px] rounded-[18px] border-2 border-secondary bg-opacity-40 bg-primary;
}
.engage-sales-funnel-container {
  @apply col-span-2 -md:col-span-3 mb-10;
  .engage-sales-funnel-header {
    @apply flex justify-between items-center pb-3;
    h3 {
      @apply text-base font-semibold;
    }
  }
}
</style>
<script setup>
import { ref } from "vue";
import ChartContent from "./chart-content.vue";
import EditSalesFunnelModal from "./edit-sales-funnel/index.vue";
import EngageCallList from "./engage-call-list.vue";

const data = [
  {
    id: 1,
    start: 180,
    end: 160,
    label: "Leads",
    value: 327,
    percent: 43,
    activeContent: true,
    borderWidth: 137,
  },
  {
    id: 2,
    start: 160,
    end: 175,
    label: "Calls Attempt",
    value: 200,
    percent: 16,
    activeContent: false,
    borderWidth: 137,
  },
  {
    id: 3,
    start: 175,
    end: 155,
    label: "Calls Completed",
    value: 78,
    percent: 34,
    activeContent: false,
    borderWidth: 137,
  },
  {
    id: 4,
    start: 155,
    end: 185,
    label: "Scheduled Appts",
    value: 32,
    percent: 34,
    activeContent: false,
    borderWidth: 137,
  },
  {
    id: 5,
    start: 185,
    end: 160,
    label: "Appt Show",
    value: 22,
    percent: 30,
    activeContent: false,
    borderWidth: 137,
  },
];

const editSalesFunnelModal = ref(null);

const showEditSalesFunnelModal = () => {
  editSalesFunnelModal.value.open();
};
</script>
