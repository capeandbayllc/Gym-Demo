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
              :items="fieldOptions"
              :label="
                data.dateFilter.field
                  ? data.dateFilter.field
                  : 'Converted Date and Time'
              "
              class="select-dropdown bg-neutral z-[50]"
              @on-change="data.dateFilter.field = $event"
            />
            <select-dropdown
              value=""
              grayContent
              :scrollable="true"
              :items="timeRangeOptions"
              :label="
                data.dateFilter.timeRange ? data.dateFilter.timeRange : 'Select'
              "
              class="select-dropdown bg-neutral z-[48]"
              @on-change="data.dateFilter.timeRange = $event"
            />
            <select-dropdown
              value=""
              grayContent
              :scrollable="true"
              :items="operatorOptions"
              :label="
                data.dateFilter.operator ? data.dateFilter.operator : 'Select'
              "
              class="select-dropdown bg-neutral z-[48]"
              @on-change="data.dateFilter.operator = $event"
            />
            <input
              v-model="data.dateFilter.value"
              type="text"
              class="dark-input max-w-[120px]"
            />
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
              :label="
                data.advancedFilters.annualRevenue
                  ? data.advancedFilters.annualRevenue
                  : 'Select'
              "
              class="select-dropdown bg-neutral z-[42]"
              @on-change="data.advancedFilters.annualRevenue = $event"
            />
            <select-dropdown
              value=""
              grayContent
              :scrollable="true"
              :items="filterOption"
              :label="
                data.advancedFilters.advancedOperator1
                  ? data.advancedFilters.advancedOperator1
                  : 'Select'
              "
              class="select-dropdown bg-neutral z-[40]"
              @on-change="data.advancedFilters.advancedOperator1 = $event"
            />
            <select-dropdown
              value=""
              grayContent
              :scrollable="true"
              :items="filterOption"
              :label="
                data.advancedFilters.advancedOperator2
                  ? data.advancedFilters.advancedOperator2
                  : 'Select'
              "
              class="select-dropdown bg-neutral z-[38]"
              @on-change="data.advancedFilters.advancedOperator2 = $event"
            />
            <input
              v-model="data.advancedFilters.currecy"
              type="text"
              class="dark-input max-w-[60px]"
            />
            <input
              type="number"
              v-model="data.advancedFilters.price"
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
        <Button
          size="sm"
          secondary
          class="normal-case rounded-lg"
          @click="saveFilter"
        >
          Save
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal-container {
  @apply border-secondary text-base-content px-5 py-4 border-2 bg-base-300 rounded-2xl max-w-[1000px] max-h-[85vh] overflow-y-visible gap-5 w-[90vw];
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
.custom-date-input-dark {
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
  dateFilter: {
    field: "None",
    timeRange: "None",
    operator: "=",
    value: "",
  },
  advancedFilters: {
    annualRevenue: "Annual Revenue",
    advancedOperator1: "=",
    advancedOperator2: "Value",
    currecy: "USD",
    price: "25000",
  },
});

const resetData = ref(null);
onMounted(() => {
  resetData.value = JSON.parse(JSON.stringify(data.value));
});

const saveFilter = () => {
  emit("save", data.value);
  data.value = JSON.parse(JSON.stringify(resetData.value));
};

const emit = defineEmits(["close"]);

const fieldOptions = [
  "None",
  "Converted Date Time",
  "Created Time",
  "Desired Decision Date",
  "Desired Go-Live Date",
  "Discovery Date",
  "Last Activity Time",
];

const timeRangeOptions = [
  "None",
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

const operatorOptions = [
  "=",
  "<>",
  ">",
  ">=",
  "<",
  "<=",
  "Starts with",
  "Does not start with",
  "Ends with",
  "Does not end with",
  "Contains",
  "Does not contain",
  "Is empty",
  "Is not empty",
  "In",
  "Not in",
  "Between",
  "Not between",
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
