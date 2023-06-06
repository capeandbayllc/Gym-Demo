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
              grayContent
              :scrollable="true"
              :items="fieldOptions"
              label="None"
              class="select-dropdown bg-neutral z-[50]"
              :value="data.dateFilter.field.value"
              @on-change="
                data.dateFilter.field = searchItem(fieldOptions, $event)
              "
            />
            <select-dropdown
              grayContent
              :scrollable="true"
              :items="timeRangeOptions"
              label="None"
              class="select-dropdown bg-neutral z-[48]"
              :value="data.dateFilter.timeRange.value"
              @on-change="
                data.dateFilter.timeRange = searchItem(timeRangeOptions, $event)
              "
            />
            <select-dropdown
              grayContent
              :scrollable="true"
              :items="operatorOptions"
              label="Select"
              class="select-dropdown bg-neutral z-[48]"
              :value="data.dateFilter.operator.value"
              @on-change="
                data.dateFilter.operator = searchItem(operatorOptions, $event)
              "
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
              grayContent
              :scrollable="true"
              :items="filterOptions"
              label="Select"
              class="select-dropdown bg-neutral z-[42]"
              :value="data.advancedFilters.annualRevenue.value"
              @on-change="
                data.advancedFilters.annualRevenue = searchItem(
                  filterOptions,
                  $event
                )
              "
            />
            <select-dropdown
              grayContent
              :scrollable="true"
              :items="filterOptions"
              label="Select"
              class="select-dropdown bg-neutral z-[40]"
              :value="data.advancedFilters.advancedOperator1.value"
              @on-change="
                data.advancedFilters.advancedOperator1 = searchItem(
                  filterOptions,
                  $event
                )
              "
            />
            <select-dropdown
              grayContent
              :scrollable="true"
              :items="filterOptions"
              label="Select"
              class="select-dropdown bg-neutral z-[38]"
              :value="data.advancedFilters.advancedOperator2.value"
              @on-change="
                data.advancedFilters.advancedOperator2 = searchItem(
                  filterOptions,
                  $event
                )
              "
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
      @apply rounded-lg h-9 bg-neutral placeholder:text-base-content/40 px-3 w-full disabled:text-base-content/50 outline-none;
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
import selectDropdown from "../../../report-details-modal/components/select-dropdown.vue";
import { PlusIcon } from "~/components/icons";

const data = ref({
  dateFilter: {
    field: { value: "", label: "" },
    timeRange: { value: "", label: "" },
    operator: "=",
    value: "",
  },
  advancedFilters: {
    annualRevenue: { value: "", label: "" },
    advancedOperator1: { value: "", label: "" },
    advancedOperator2: { value: "", label: "" },
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

const searchItem = (options, selected) => {
  return options.find((item) => item.value == selected);
};

const fieldOptions = [
  { value: "", label: "None" },
  { value: "converted_date_time", label: "Converted Date Time" },
  { value: "created_time", label: "Created Time" },
  { value: "desired_decision_date", label: "Desired Decision Date" },
  { value: "desired_go_live_date", label: "Desired Go-Live Date" },
  { value: "discovery_date", label: "Discovery Date" },
  { value: "last_activity_time", label: "Last Activity Time" },
];

const timeRangeOptions = [
  { value: "", label: "None" },
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

const operatorOptions = [
  { value: "=", label: "=" },
  { value: "<>", label: "<>" },
  { value: ">", label: ">" },
  { value: ">=", label: ">=" },
  { value: "<", label: "<" },
  { value: "<=", label: "<=" },
  { value: "starts_with", label: "Starts with" },
  { value: "does_not_start_with", label: "Does not start with" },
  { value: "ends_with", label: "Ends with" },
  { value: "does_not_end_with", label: "Does not end with" },
  { value: "contains", label: "Contains" },
  { value: "does_not_contain", label: "Does not contain" },
  { value: "is_empty", label: "Is empty" },
  { value: "is_not_empty", label: "Is not empty" },
  { value: "in", label: "In" },
  { value: "not_in", label: "Not in" },
  { value: "between", label: "Between" },
  { value: "not_between", label: "Not between" },
];

const filterOptions = [
  { value: "begins_with", label: "begins with" },
  { value: "does_not_begin_with", label: "does not begin with" },
  { value: "ends_with", label: "ends with" },
  { value: "does_not_end_with", label: "does not begin with" },
  { value: "contains", label: "contains" },
  { value: "does_not_contain", label: "does not contain" },
];
</script>
