<template>
  <div
    class="border border-base-content/60 py-2 px-3 rounded-xl w-full flex flex-wrap items-center gap-3"
  >
    <div class="flex flex-nowrap">
      <font-awesome-icon
        :icon="['far', 'filter']"
        size="md"
        class="mr-1 mt-[4px] focus:outline-none"
        tabindex="0"
        @click.prevent.stop
      />
      <span>Filters</span>
    </div>
    <div class="flex gap-2">
      <select-dropdown
        grayContent
        :scrollable="true"
        :items="filterOptions"
        label="None"
        class="select-dropdown"
        :value="filters.first"
        @onChange="filters.first = $event"
      />
      <select-dropdown
        grayContent
        :disabled="!filters.first"
        :scrollable="true"
        :items="filterTypes"
        label="None"
        class="select-dropdown"
        :value="filters.second"
        @onChange="filters.second = $event"
      />

      <select-dropdown
        v-if="showComparisonOperatorsWith.includes(filters.second)"
        grayContent
        :scrollable="true"
        :items="comparisonOperators"
        label="None"
        class="select-dropdown"
        :value="filters.operator"
        @onChange="filters.operator = $event"
      />
      <input
        type="number"
        class="dark-input"
        v-model="filters.text"
        :disabled="!showComparisonOperatorsWith.includes(filters.second)"
        v-if="!showStartDateWith.includes(filters.second)"
      />

      <Datepicker
        v-if="showStartDateWith.includes(filters.second)"
        class="custom-date-input"
        v-model="filters.dateStart"
        :enable-time-picker="false"
        auto-apply
      ></Datepicker>
      <Datepicker
        v-if="showEndDateWith.includes(filters.second)"
        class="custom-date-input"
        v-model="filters.dateEnd"
        :enable-time-picker="false"
        auto-apply
      ></Datepicker>
    </div>

    <button
      class="bg-secondary rounded-xl px-4 h-8 disabled:bg-secondary/50 disabled:text-base-content/70"
      :disabled="!isAppliedFilters"
      @click="applyFilters"
    >
      Apply
    </button>
  </div>
</template>

<style scoped lang="postcss">
.select-dropdown {
  @apply !w-[170px] bg-neutral h-9 rounded-xl;
}
.dark-input {
  @apply rounded-xl h-9 bg-neutral px-3 placeholder:text-base-content/40 w-[180px] max-w-full disabled:text-base-content/50 outline-none;
}
.dark-input::-webkit-outer-spin-button,
.dark-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>

<style lang="postcss">
.custom-date-input {
  @apply w-[155px];
  input {
    @apply !text-base-content;
  }
}
</style>

<script setup>
import "@vuepic/vue-datepicker/dist/main.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Datepicker from "@vuepic/vue-datepicker";
import selectDropdown from "./report-details-modal/components/select-dropdown.vue";

library.add(faFilter);

const showComparisonOperatorsWith = ["age_in_days", "due_in_days"];
const showStartDateWith = ["between", "is_before"];
const showEndDateWith = ["between"];

const emit = defineEmits(["applyFilters"]);

const filters = ref({
  first: "",
  second: "",
  dateStart: "",
  dateEnd: "",
  text: "",
  operator: "=",
});

watch(
  filters,
  (val) => {
    if (!val.first) {
      val.second = "";
    }

    if (!val.second) {
      val.dateStart = "";
      val.dateEnd = "";
      val.text = "";
      val.operator = "=";
    }

    if (!showComparisonOperatorsWith.includes(val.second)) {
      val.text = "";
      val.operator = "=";
    }

    if (!showStartDateWith.includes(val.second)) {
      val.dateStart = "";
    }

    if (!showEndDateWith.includes(val.second)) {
      val.dateEnd = "";
    }
  },
  { deep: true }
);

const appliedFilters = ref({
  first: "",
  second: "",
  dateStart: "",
  dateEnd: "",
  text: "",
});

const isAppliedFilters = computed(() => {
  for (const key in filters.value) {
    if (filters.value[key] !== appliedFilters.value[key]) {
      return true;
    }
  }
  return false;
});

const applyFilters = () => {
  appliedFilters.value = { ...toRaw(filters.value) };
  emit("applyFilters", toRaw(appliedFilters.value));
};

const filterOptions = [
  {
    value: "",
    label: "None",
  },
  {
    value: "converted_date_time",
    label: "Converted Date Time",
  },
  {
    value: "created_time",
    label: "Created Time",
  },
  {
    value: "desired_decision_date",
    label: "Desired Decision Date",
  },
  {
    value: "desired_go_live_date",
    label: "Desired Go-Live Date",
  },
];

const filterTypes = [
  {
    value: "",
    label: "None",
  },
  {
    value: "age_in_days",
    label: "Age in Days",
  },
  {
    value: "due_in_days",
    label: "Due in Days",
  },
  {
    value: "between",
    label: "Between",
  },
  {
    value: "is_before",
    label: "Is before",
  },
];

const comparisonOperators = [
  {
    value: "=",
    label: "=",
  },
  {
    value: "!=",
    label: "!=",
  },
  {
    value: "<",
    label: "<",
  },
  {
    value: "<=",
    label: "<=",
  },
  {
    value: ">",
    label: ">",
  },
  {
    value: ">=",
    label: ">=",
  },
];
</script>
