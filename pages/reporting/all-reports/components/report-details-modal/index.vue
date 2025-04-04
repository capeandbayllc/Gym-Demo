<template>
  <div class="modal-container">
    <div class="modal-header relative">
      <div class="font-semibold flex justify-between">
        <div class="relative flex items-center gap-5 text-2xl">
          <arrow-left
            class="pt-1 h-12 cursor-pointer"
            @click="emit('close')"
          ></arrow-left>
          {{ report.report_name }}
          <div class="dropdown">
            <button @click.stop="showTitleDropdown = true">
              <vertical-ellipsis
                class="h-6 fill-base-content transform rotate-90 mt-[9px]"
              />
            </button>
            <div
              class="dropdown-report dropdown-content"
              @click="toggleTitleDropdown"
              v-show="showTitleDropdown"
            >
              <div class="dropdown-container">
                <button
                  class="dropdown-item"
                  @click="
                    toggleTitleDropdown();
                    openRenameModal();
                  "
                >
                  Rename
                </button>
                <div class="dropdown-item">Delete</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <Button
            size="sm"
            outline
            class="normal-case rounded-lg hover:text-secondary h-8"
            @click="emit('close')"
          >
            Cancel
          </Button>
          <edit-report
            @edit-button="true"
            :report="report"
            @saveClonedReport="
              emit('saveClonedReport', $event);
              emit('close');
            "
          >
            <button
              class="bg-secondary rounded-l-lg px-5 h-8"
              @click="emit('next')"
            >
              Edit
            </button>
          </edit-report>
        </div>
      </div>
      <report-filters @apply-filters="appliedFilters = $event" class="my-4" />
    </div>
    <div class="modal-content">
      <div class="max-w-full rounded-xl overflow-auto max-h-full min-h-[102%]">
        <table class="rounded-2xl">
          <head-report-details-table :columns="report.report_details.columns" />
          <body-report-details-table
            :columns="report.report_details.columns"
            :data="dataFiltered"
            @row-clicked="openReportDetailsModal"
          />
        </table>
      </div>
    </div>
  </div>
  <daisy-modal :overlay="true" :show-close-button="false" ref="renameModal">
    <rename-modal
      @changeName="emit('updateReportName', $event)"
      :report-name="report.report_name"
      @close="closeRenameModal"
      :open="renameModal?.isOpen"
    />
  </daisy-modal>
</template>

<style scoped lang="postcss">
.modal-container {
  @apply py-4 px-6 md:px-8 w-[90vw] max-w-[1465px] bg-base-300 border-2 rounded-3xl text-[0.9rem] flex flex-col border-secondary relative bg-gradient-to-b from-secondary-focus to-base-300/30;
  .modal-header {
    .dropdown-report {
      @apply absolute top-[28px] right-[0px] h-auto z-[60];
      .dropdown-container {
        @apply bg-base-300 border-secondary border text-base font-normal rounded-2xl p-3 px-5 w-[120px];
        .dropdown-item {
          @apply mb-2 cursor-pointer;
        }
      }
    }
    .select-dropdown {
      @apply h-9 !w-[170px] rounded-xl px-1 !max-h-[350px];
    }
  }
  .modal-content {
    @apply w-full pb-[8px] h-[50vh] lg:h-[60vh] xl:h-[65vh] overflow-visible border border-secondary rounded-2xl bg-base-300 text-left max-w-full overflow-auto mx-auto;
    .select-container {
      @apply mb-7;
      .select-title {
        @apply pb-2 text-[15px];
      }
      .select-box {
        @apply bg-neutral-content text-base-content font-semibold rounded-lg !text-left;
      }
    }
  }
}
</style>

<script setup>
import HeadReportDetailsTable from "./components/head-reports-details-table.vue";
import BodyReportDetailsTable from "./components/body-report-details-table.vue";
import EditReport from "../edit-report/index.vue";
import RenameModal from "../rename-modal.vue";
import ReportFilters from "../report-filters.vue";

import { VerticalEllipsis, ArrowLeft } from "~/components/icons";

const emit = defineEmits(["close", "updateReportName"]);

const props = defineProps({
  report: {
    type: Object,
  },
});

const showTitleDropdown = ref(false);

const toggleTitleDropdown = () => {
  showTitleDropdown.value = !showTitleDropdown.value;
};

const defaultFilters = ref({
  first: "",
  second: "",
  dateStart: "",
  dateEnd: "",
  text: "",
  operator: "=",
});

const appliedFilters = ref({
  first: "",
  second: "",
  dateStart: "",
  dateEnd: "",
  text: "",
  operator: "=",
});

const isAppliedFilters = computed(() => {
  for (const key in defaultFilters.value) {
    if (defaultFilters.value[key] !== appliedFilters.value[key]) {
      return true;
    }
  }
  return false;
});

const dataFiltered = computed(() => {
  console.log(isAppliedFilters.value);
  if (isAppliedFilters.value) {
    return [];
  } else {
    return props.report.report_details.data;
  }
});

const renameModal = ref(null);

const openRenameModal = () => {
  toggleTitleDropdown();
  renameModal.value.open();
};
const closeRenameModal = () => {
  renameModal.value.close();
};
</script>
