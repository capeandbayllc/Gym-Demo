<template>
  <div class="card-container">
    <div class="max-w-full rounded-xl overflow-auto max-h-[70vh] min-h-[102%]">
      <table class="rounded-2xl">
        <head-reports-table :columns="columns" />
        <body-reports-table
          :data="data"
          :columns="columns"
          @row-clicked="openReportDetailsModal"
        />
      </table>
      <daisy-modal
        :overlay="true"
        id="reportDetailsModal"
        ref="reportDetailsModal"
      >
        <report-details-modal
          v-if="selectedReport"
          @close="closeReportDetailsModal"
          :report="selectedReport"
        />
      </daisy-modal>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.card-container {
  @apply w-full pb-[8px] h-[70vh] overflow-visible border border-secondary rounded-2xl bg-base-300 text-left max-w-full overflow-auto mx-auto;

  .card-title-container {
    @apply flex justify-between items-center;
  }

  .card-content {
    @apply h-full mx-3;
  }
}

table {
  @apply w-[99.5%];
}
</style>
<script setup>
import HeadReportsTable from "./components/head-reports-table.vue";
import BodyReportsTable from "./components/body-reports-table.vue";
import ReportDetailsModal from "../report-details-modal/index.vue";
const reportDetailsModal = ref(false);

const selectedReport = ref();

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
  columns: {
    type: Array,
    default: [],
  },
});

const openReportDetailsModal = (report) => {
  selectedReport.value = report;
  reportDetailsModal.value.open();
};

const closeReportDetailsModal = () => {
  reportDetailsModal.value.close();
};
</script>
