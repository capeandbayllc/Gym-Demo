<template>
  <div class="modal-container relative">
    <div class="modal-content">
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <div class="pb-5">
            <h3 class="text-left text-xl font-semibold">Basic Information</h3>
          </div>

          <div>
            <div class="flex flex-col gap-4">
              <div>
                <h5>Report</h5>
                <div class="relative" @click="openSelectReportModal">
                  <input
                    type="text"
                    class="input-text cursor-pointer"
                    :value="selectedReport?.report_name"
                    disabled
                    value=""
                  />
                  <button class="input-text-icon">
                    <search-icon />
                  </button>
                </div>
              </div>
              <div>
                <h5>Export Files As</h5>
                <select-dropdown
                  value=""
                  grayContent
                  :scrollable="true"
                  :items="fileOptions"
                  :label="
                    selectedExportFilesAs ? selectedExportFilesAs : 'Select'
                  "
                  class="select-dropdown bg-neutral z-[60]"
                  @on-change="selectedExportFilesAs = $event"
                />
              </div>
              <div class="flex justify-between gap-2">
                <div>
                  <h5>Start date</h5>
                  <Datepicker
                    class="custom-date-input"
                    dark
                    v-model="data.startDate"
                    :enable-time-picker="false"
                    auto-apply
                  ></Datepicker>
                </div>
                <div>
                  <h5>Time</h5>
                  <Datepicker
                    class="custom-date-input"
                    dark
                    v-model="data.endDate"
                    time-picker
                    auto-apply
                  ></Datepicker>
                </div>
              </div>
              <div>
                <h5>Repeat Type</h5>
                <select-dropdown
                  value=""
                  grayContent
                  :scrollable="true"
                  :items="repeatTypeOptions"
                  :label="selectedRepeatType ? selectedRepeatType : 'Select'"
                  class="select-dropdown bg-neutral z-[55]"
                  @on-change="selectedRepeatType = $event"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="pb-5">
            <h3 class="text-left text-xl font-semibold">
              Recipient Information
            </h3>
          </div>

          <div>
            <div class="flex flex-col gap-4">
              <div>
                <h5>Send Report Via</h5>
                <select-dropdown
                  value=""
                  grayContent
                  :scrollable="true"
                  :items="sendOptions"
                  :label="
                    selectedSendReportVia ? selectedSendReportVia : 'Select'
                  "
                  class="select-dropdown bg-neutral z-[50]"
                  @on-change="selectedSendReportVia = $event"
                />
              </div>

              <div>
                <h5>Recipients</h5>
                <div class="relative">
                  <input type="text" class="input-text" value="" />
                  <button
                    class="input-text-icon"
                    @click.stop="toggleRecipientDropdown"
                  >
                    <recipient-search-icon />
                  </button>
                  <recipient-dropdown
                    @close="toggleRecipientDropdown"
                    v-show="showRecipientDropdown"
                  />
                </div>
              </div>

              <div>
                <h5>Message to Recipients</h5>
                <textarea
                  class="w-full h-[114px] rounded-xl bg-neutral h-28 p-2 focus:outline-none resize-none p-4"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-4 pt-10">
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
          secondary
          class="normal-case rounded-lg"
          @click="emit('close')"
        >
          Schedule
        </Button>
      </div>
    </div>
  </div>
  <daisy-modal
    :overlay="true"
    id="selectReportModal"
    ref="selectReportModal"
    @close="createReportScreenIndex = 0"
  >
    <div class="modal-container !p-3">
      <div class="modal-content !p-3">
        <div class="grid grid-cols-1 md:grid-cols-4 md:gap-3 mt-2">
          <reports-folders-card
            :actual-folder="actualFolder"
            :actual-sub-folder="actualSubFolder"
            @changeActualFolder="
              actualFolder = $event;
              actualSubFolder = null;
            "
            @changeActualSubFolder="actualSubFolder = $event"
            :folders="folders"
          />
          <reports-table
            :data="folderSelected.data"
            :active-report-details-modal="false"
            :columns="folderSelected.columns"
            :show-favorite-button="false"
            :show-select-button="false"
            @row-clicked="closeSelectReportModal"
            class="col-span-3 mt-3 md:mt-0"
          />
        </div>
      </div>
    </div>
  </daisy-modal>
</template>

<style scoped lang="postcss">
.modal-container {
  @apply border-secondary text-base-content px-5 py-4 border-2 bg-base-300 rounded-2xl max-w-[960px] w-[90vw] gap-5;
  ::-webkit-scrollbar {
    @apply hidden;
  }
  .modal-content {
    @apply border-secondary max-h-[90vh] overflow-y-auto text-base-content p-4 sm:px-8 sm:py-10 bg-gradient-to-b from-secondary-focus to-base-300 border-2 rounded-2xl;
    .select-dropdown {
      @apply h-9 rounded-xl px-1;
    }
    .input-text {
      @apply bg-neutral text-base-content !h-10 px-3 !pr-10 rounded-lg !text-left w-full focus:outline-none;
    }
    .input-text-icon {
      @apply absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer;
    }
    h5 {
      @apply mb-2;
    }
  }
}
</style>
<style lang="postcss">
.select-box {
  .select-box-btn {
    @apply !h-10 rounded-lg;
  }
  .select-box-content {
    @apply top-[8px];
  }
}
.custom-date-input {
  .dp__input {
    @apply h-9 w-full rounded-xl bg-neutral border-0;
  }
}
</style>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import selectDropdown from "../../report-details-modal/components/select-dropdown.vue";
const showRecipientDropdown = ref(false);
import { RecipientSearchIcon, SearchIcon } from "~/components/icons";
import RecipientDropdown from "~/pages/reporting/all-reports/components/edit-report/components/recipient-dropdown.vue";
import ReportsFoldersCard from "~/pages/reporting/all-reports/components/reports-folders-card/index.vue";
import ReportsTable from "~/pages/reporting/all-reports/components/reports-table/index.vue";

const props = defineProps({
  folders: {
    type: Array,
    default: [""],
  },
});

const selectedExportFilesAs = ref("XLS");
const selectedRepeatType = ref("Daily");
const selectedSendReportVia = ref("Email");

const selectedReport = ref(null);

const selectReportModal = ref(null);
const openSelectReportModal = () => {
  selectReportModal.value.open();
};
const closeSelectReportModal = (report) => {
  selectedReport.value = report;
  selectReportModal.value.close();
};

const actualFolder = ref(props?.folders[0]);
const actualSubFolder = ref(null);

const folderSelected = computed(() => {
  if (actualSubFolder.value != null) {
    return actualSubFolder.value;
  }
  if (actualFolder.value.getData)
    actualFolder.value.data = actualFolder.value.getData();
  return actualFolder.value;
});

const toggleRecipientDropdown = () => {
  showRecipientDropdown.value = !showRecipientDropdown.value;
};

const data = ref({
  startDate: "",
  endDate: "",
});

const emit = defineEmits(["close"]);

const timeOptions = [
  { value: "between", label: "Between" },
  { value: "is_before", label: "is before" },
  { value: "is_after", label: "is after" },
  { value: "yesterday", label: "Yesterday" },
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "last_week", label: "Last Week" },
  { value: "current_week", label: "Current Week" },
  { value: "next_week", label: "Next Week" },
  { value: "last_month", label: "Last Month" },
  { value: "current_month", label: "Current Month" },
  { value: "next_month", label: "Next Month" },
  { value: "last_3_months", label: "Last 3 Months" },
  { value: "last_6_months", label: "Last 6 Months" },
  { value: "last_12_months", label: "Last 12 Months" },
  { value: "next_3_months", label: "Next 3 Months" },
  { value: "next_6_months", label: "Next 6 Months" },
  { value: "next_12_month", label: "Next 12 Month" },
  { value: "age_in_days", label: "Age in Days" },
  { value: "age_in_months", label: "Age in Months" },
  { value: "age_in_years", label: "Age in Years" },
  { value: "due_in_days", label: "Due in Days" },
  { value: "current_quarter", label: "Current Quarter" },
  { value: "current_year", label: "Current Year" },
  { value: "previous_querter", label: "Previous Querter" },
  { value: "previous_year", label: "Previous Year" },
  { value: "next_quarter", label: "Next Quarter" },
  { value: "next_year", label: "Next Year" },
  { value: "1st_quarter", label: "1st Quarter" },
  { value: "2nd_quarter", label: "2nd Quarter" },
  { value: "3rd_quarter", label: "3rd Quarter" },
  { value: "4th_quarter", label: "4th Quarter" },
];

const repeatTypeOptions = [
  { value: "none", label: "None" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

const fileOptions = [
  { value: "pdf", label: "PDF" },
  { value: "xls", label: "XLS" },
  { value: "csv", label: "CSV" },
];

const sendOptions = [
  { value: "sms", label: "Sms" },
  { value: "email", label: "Email" },
];
</script>
