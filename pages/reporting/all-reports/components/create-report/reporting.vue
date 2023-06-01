<template>
  <div class="modal-content">
    <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-2">
      <reporting-actions
        :report="report"
        :actualSection="actualSection"
        @changeReport="emit('changeReport', $event)"
      />
      <sidebar
        :actualSection="actualSection"
        :columns="columnColumns"
        @changeActualSection="actualSection = $event"
        class="sm:col-span-4 md:col-span-4 xl:col-span-3"
      />
      <reporting-table
        :data="actualData"
        :columns="actualColumns"
        class="mt-3 sm:mt-0 sm:col-span-8 md:col-span-8 xl:col-span-9"
      />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal-content {
  @apply border-secondary text-base-content px-5 py-4 bg-gradient-to-b from-secondary-focus to-base-300 border-2 rounded-2xl max-w-[1500px] w-[90vw] max-h-[85vh] overflow-y-auto gap-5;
  ::-webkit-scrollbar {
    @apply hidden;
  }
}
</style>

<script setup>
import Sidebar from "./components/sidebar/index.vue";
import ReportingTable from "./components/reporting-table.vue";
import { getRandomInt } from "~/api/utils/number";
import ReportingActions from "./components/reporting/reporting-actions.vue";

const props = defineProps({
  report: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["close", "back", "next", "changeReport"]);

const actualSection = ref("Columns");

const actualData = computed(() => {
  if (["Columns", "SelectColumns"].includes(actualSection.value)) {
    return dataColumns.value;
  } else if (actualSection.value == "Filters") {
    return dataFilters.value;
  }
});

const dataColumns = computed(() => {
  let array = [];
  for (let i = 0; i < getRandomInt(20 * 3, 0); i++) {
    array.push({
      id: i,
      name: "Kelly Price",
      annual_revenue: "",
      brand_category: "",
      city: "",
      last_saved: "",
      company: "HydraMassage",
    });
  }
  return array;
});

const dataFilters = computed(() => {
  let array = [];
  for (let i = 0; i < getRandomInt(20 * 3, 0); i++) {
    array.push({
      id: i,
      full_name: "Kelly Price",
      annual_revenue: "",
      bi_contract_expiration: "",
      bi_monthly_cost: "",
      bi_notes: "",
    });
  }
  return array;
});

const actualColumns = computed(() => {
  if (["Columns", "SelectColumns"].includes(actualSection.value)) {
    return columnColumns.value?.filter((column) => column.active);
  } else if (actualSection.value == "Filters") {
    return columnsFilters.value?.filter((column) => column.active);
  }
});

const columnColumns = ref([
  {
    label: "Full Name",
    value: "full_name",
    active: true,
    class: "!w-[150px]",
  },
  {
    label: "Annual Revenue",
    value: "annual_revenue",
    active: true,
    class: "!w-[150px]",
  },
  {
    label: "Area",
    value: "area",
    active: false,
    class: "!w-[150px]",
  },
  {
    label: "BI Contract Expiration",
    value: "bi_contract_expiration",
    active: true,
    class: "!w-[150px]",
  },
  {
    label: "BI Monthly Cost",
    value: "bi_monthly_cost",
    active: true,
    class: "!w-[150px]",
  },
  {
    label: "BI Notes",
    value: "bi_notes",
    active: true,
    class: "!w-[150px]",
  },
]);

const columnsFilters = ref([
  {
    label: "Name",
    value: "name",
    active: true,
    class: "!w-[150px]",
  },
  {
    label: "Annual Revenue",
    value: "annual_revenue",
    active: true,
    class: "!w-[150px]",
  },
  {
    label: "BI Conctract Expiration",
    value: "bi_conctract_expiration",
    active: true,
    class: "!w-[150px]",
  },
  {
    label: "BI Monthly Cost",
    value: "bi_monthly_cost",
    active: true,
    class: "!w-[150px]",
  },
  {
    label: "BI Notes",
    value: "bi_notes",
    active: true,
    class: "!w-[150px]",
  },
]);
</script>
