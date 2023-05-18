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
                <div class="relative">
                  <input type="text" class="input-text" value="" />
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
                  label="XLS"
                  class="select-dropdown bg-neutral z-[50]"
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
                  label="Daily"
                  class="select-dropdown bg-neutral z-[9]"
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
                  label="Email"
                  class="select-dropdown bg-neutral z-[50]"
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
    @apply h-9 max-w-[150px] rounded-xl bg-neutral border-0;
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

const toggleRecipientDropdown = () => {
  showRecipientDropdown.value = !showRecipientDropdown.value;
};

const data = ref({
  startDate: "",
  endDate: "",
});

const emit = defineEmits(["close"]);

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

const repeatTypeOptions = ["None", "Daily", "Weekly", "Monthly", "Yearly"];

const fileOptions = ["PDF", "XLS", "CSV"];

const sendOptions = ["Sms", "Email"];
</script>
