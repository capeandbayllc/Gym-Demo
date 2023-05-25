<template>
  <div class="modal-container">
    <div class="modal-header relative">
      <div class="font-semibold text-2xl flex">
        <div class="relative flex items-center gap-5">
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
      </div>
      <div class="text-right pt-6 pb-4 flex justify-between gap-4 flex-wrap">
        <div class="flex gap-4 items-center flex-wrap">
          <div class="text-[18px] flex items-center gap-2 font-semibold">
            <filters-reporting-icon class="w-7" />
            Filters
          </div>
          <select-dropdown
            value=""
            grayContent
            :scrollable="true"
            :items="timeOptions"
            label="None"
            class="select-dropdown bg-neutral z-[50]"
          />
          <equal-to-icon class="!z-[55]" />
          <select-dropdown
            value=""
            grayContent
            :items="timeOptions"
            :scrollable="true"
            label="Created Time"
            class="select-dropdown bg-neutral z-[45]"
          />
          <select-dropdown
            value=""
            :items="totalRecordsOptions"
            :countCircle="data?.length"
            label="Total records"
            class="select-dropdown bg-secondary z-[40]"
          />
          <Button
            size="sm"
            outline
            error
            class="normal-case rounded-lg !text-base-content border-error"
          >
            Clear
          </Button>
          <Button
            size="sm"
            outline
            success
            class="normal-case rounded-lg !text-base-content border-success"
          >
            Apply
          </Button>
        </div>
        <div class="flex gap-4 items-center">
          <Button
            size="sm"
            outline
            class="normal-case rounded-lg hover:text-secondary"
            @click="emit('close')"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            outline
            class="normal-case rounded-lg hover:text-secondary"
          >
            Run
          </Button>
          <edit-report></edit-report>
        </div>
      </div>
    </div>
    <div class="modal-content">
      <div class="max-w-full rounded-xl overflow-auto max-h-full min-h-[102%]">
        <table class="rounded-2xl">
          <head-report-details-table />
          <body-report-details-table
            :data="data"
            @row-clicked="openReportDetailsModal"
          />
        </table>
      </div>
    </div>
  </div>
  <daisy-modal :overlay="true" :show-close-button="false" ref="renameModal">
    <rename-modal
      @changeName="emit('changeReportName', $event)"
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
import selectDropdown from "./components/select-dropdown.vue";
import equalToIcon from "./components/equal-to-icon.vue";
import HeadReportDetailsTable from "./components/head-reports-details-table.vue";
import BodyReportDetailsTable from "./components/body-report-details-table.vue";
import EditReport from "../edit-report/index.vue";
import RenameModal from "../rename-modal.vue";
import { getRandomInt } from "~/api/utils/number";

import {
  VerticalEllipsis,
  ArrowLeft,
  FiltersReportingIcon,
} from "~/components/icons";

const emit = defineEmits(["close", "changeReportName"]);

const props = defineProps({
  report: {
    type: Object,
  },
});

const showTitleDropdown = ref(false);

const toggleTitleDropdown = () => {
  showTitleDropdown.value = !showTitleDropdown.value;
};

const data = computed(() => {
  let array = [];
  for (
    let i = 0;
    i < getRandomInt(props.report?.report_name?.length * 30, 0);
    i++
  ) {
    array.push({
      id: 1,
      name: "Kelly Price",
      annual_revenue: "",
      brand_category: "",
      city: "",
      company: "HydraMassage",
    });
  }
  return array;
});

const renameModal = ref(null);

const openRenameModal = () => {
  toggleTitleDropdown();
  renameModal.value.open();
};
const closeRenameModal = () => {
  renameModal.value.close();
};

const totalRecordsOptions = [
  "Total records",
  "Total records",
  "Total records",
  "Total records",
];

const timeOptions = [
  "Between",
  "is before",
  "is after",
  "Yesterday",
  "Today",
  "Tomorrow",
  "Last Week",
  "Current Week",
  "Next Week",
  "Lost Month",
  "Current Month",
  "Next Month",
  "Lost 3 Months",
  "Lost 6 Months",
  "Lost 12 Months",
  "Next 3 Months",
  "Next 6 Months",
  "Next 12 Month",
  "Age in Days",
  "Age in Months",
  "Age in Years",
  "Due in Days",
  "Current Quarter",
  "Current Year",
  "Previous Querter",
  "Previous Year",
  "Next Quarter",
  "Next Year",
  "1st Quarter",
  "2nd Quarter",
  "3rd Quarter",
  "4th Quarter",
];
</script>
