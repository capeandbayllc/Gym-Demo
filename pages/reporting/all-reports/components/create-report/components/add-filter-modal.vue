<template>
  <div class="modal-container relative">
    <div class="modal-content">
      <div class="pb-5">
        <h3 class="text-left text-xl font-semibold">Add Filter</h3>
      </div>

      <div>
        <div class="py-3 border-b border-neutral-content/40">
          <h5>Date</h5>
          <div class="flex flex-wrap gap-3 mt-3">
            <select-dropdown
              value=""
              grayContent
              :scrollable="true"
              :items="timeOptions"
              label="Converted Date and Time"
              class="select-dropdown bg-neutral z-[50]"
            />
            <select-dropdown
              value=""
              grayContent
              :scrollable="true"
              :items="timeOptions"
              label="Between"
              class="select-dropdown bg-neutral z-[48]"
            />
            <Datepicker
              class="custom-date-input"
              dark
              v-model="data.startDate"
              :enable-time-picker="false"
              auto-apply
            ></Datepicker>
            <Datepicker
              class="custom-date-input"
              dark
              v-model="data.endDate"
              :enable-time-picker="false"
              auto-apply
            ></Datepicker>
            <div
              class="h-[36px] flex items-center overflow-auto text-secondary"
            >
              <button class="!h-[36px] mb-1">
                <plus-icon />
              </button>
            </div>
          </div>
        </div>

        <div class="py-3 border-b border-neutral-content/40">
          <div class="flex flex-wrap gap-3">
            <select-dropdown
              value=""
              grayContent
              :scrollable="true"
              :items="timeOptions"
              label="None"
              class="select-dropdown bg-neutral z-[46]"
            />
            <select-dropdown
              value=""
              grayContent
              :scrollable="true"
              :items="timeOptions"
              label="None"
              class="select-dropdown bg-neutral z-[44]"
            />
            <div
              class="h-[36px] flex items-center overflow-auto text-secondary"
            >
              <button class="!h-[36px] mb-1">
                <plus-icon />
              </button>
            </div>
          </div>
        </div>

        <div class="py-3 border-b border-neutral-content/40">
          <h5>Advanced Filter</h5>
          <div class="flex flex-wrap gap-3 mt-3">
            <select-dropdown
              value=""
              grayContent
              :scrollable="true"
              :items="filterOption"
              label="Annual Revenue"
              class="select-dropdown bg-neutral z-[42]"
            />
            <select-dropdown
              value=""
              grayContent
              :scrollable="true"
              :items="filterOption"
              label="="
              class="select-dropdown bg-neutral z-[40]"
            />
            <select-dropdown
              value=""
              grayContent
              :scrollable="true"
              :items="filterOption"
              label="Value"
              class="select-dropdown bg-neutral z-[38]"
            />
            <input type="text" value="USD" class="dark-input max-w-[60px]" />
            <input
              type="number"
              value="25000"
              class="dark-input max-w-[180px]"
            />

            <div
              class="h-[36px] flex items-center overflow-auto text-secondary"
            >
              <button class="!h-[36px] mb-1">
                <plus-icon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center sm:justify-end gap-4 pt-10">
        <Button
          size="sm"
          outline
          class="normal-case rounded-lg hover:text-secondary"
          @click="emit('close')"
        >
          Cancel
        </Button>
        <Button size="sm" secondary class="normal-case rounded-lg">
          Save
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal-container {
  @apply border-secondary text-base-content px-5 py-4 border-2 bg-base-300 rounded-2xl max-w-[960px] max-h-[85vh] overflow-y-visible gap-5 w-[90vw];
  ::-webkit-scrollbar {
    @apply hidden;
  }
  .modal-content {
    @apply border-secondary text-base-content p-4 sm:px-8 sm:py-10 bg-gradient-to-b from-secondary-focus to-base-300 border-2 rounded-2xl;
    .select-dropdown {
      @apply h-9 !w-[170px] rounded-xl px-1;
    }
    .dark-input {
      @apply rounded-xl h-9 bg-neutral px-3;
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
import { PlusIcon } from "~/components/icons";

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

const filterOption = [
  "begins with",
  "does not begin with",
  "ends with",
  "does not begin with",
  "contains",
  "does not contain",
];
</script>
