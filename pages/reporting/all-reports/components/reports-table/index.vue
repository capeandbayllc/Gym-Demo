<template>
  <div class="card-container">
    <div class="max-w-full rounded-xl overflow-auto max-h-[70vh] min-h-[102%]">
      <table class="rounded-2xl">
        <head-reports-table :columns="columns" @applyFilter="applyFilter" />
        <body-reports-table
          :data="dataFiltered"
          :columns="columns"
          :show-favorite-button="showFavoriteButton"
          :show-select-button="showSelectButton"
          @toggle-is-favorite="emit('toggleIsFavorite', $event)"
          @toggle-select-report="emit('toggleSelectReport', $event)"
          @row-clicked="emit('row-clicked', $event)"
          @openReportDetailsModal="openReportDetailsModal"
        />
      </table>
      <daisy-modal
        :overlay="true"
        id="reportDetailsModal"
        ref="reportDetailsModal"
      >
        <component
          v-if="selectedReport"
          :is="reportDetailsScreens[reportDetailsScreenIndex]"
          @back="reportDetailsScreenIndex--"
          @next="reportDetailsScreenIndex++"
          @close="closeReportDetailsModal"
          @changeReportName="changeReportName"
          @saveClonedReport="emit('saveClonedReport', $event)"
          :report="selectedReport"
        />
        {{ reportDetailsModal.isOpen }}
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
import Reporting from "~/pages/reporting/all-reports/components/create-report/reporting.vue";

const emit = defineEmits([
  "row-clicked",
  "handle",
  "toggleIsFavorite",
  "toggleSelectReport",
  "saveClonedReport",
  "changeSelectedReport",
]);

const reportDetailsModal = ref(false);
const reportDetailsScreens = ref([ReportDetailsModal, Reporting]);
const reportDetailsScreenIndex = ref(0);
const openReportDetailsModal = (report) => {
  if (props.activeReportDetailsModal) {
    selectedReport.value = report;
    reportDetailsModal.value.open();
  } else {
    emit("row-clicked", report);
  }
};

watchEffect(() => {
  if (reportDetailsModal.value.isOpen) {
    reportDetailsScreenIndex.value = 0;
  }
});

const closeReportDetailsModal = () => {
  reportDetailsModal.value.close();
};

const selectedReport = ref();
watchEffect(() => {
  emit("changeSelectedReport", selectedReport.value);
});

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
  columns: {
    type: Array,
    default: [],
  },
  activeReportDetailsModal: {
    type: Boolean,
    default: true,
  },
  showFavoriteButton: {
    type: Boolean,
    default: true,
  },
  showSelectButton: {
    type: Boolean,
    default: true,
  },
});

const dataFiltered = computed(() => {
  const statusFilterActive = filters.value.status
    ? filters.value.status.some((statusItem) => statusItem.checked === true)
    : false;

  if (statusFilterActive) {
    return props.data.filter((item) => {
      return filters.value.status.some((statusItem) => {
        return statusItem.checked && statusItem.label === item.status;
      });
    });
  }

  return props.data;
});

const filters = ref({});

const applyFilter = (filter) => {
  filters.value[filter.type.toLowerCase().replace(/\s/g, "_")] = filter.values;
};

const changeReportName = (name) => {
  selectedReport.value.report_name = name;
};
</script>
