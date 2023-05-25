<template>
  <thead class="report-table-header">
    <tr>
      <th
        v-for="(column, ndx) in columns"
        :key="column.field ? column.field : ndx"
        class="px-3 capitalize font-normal whitespace-nowrap"
        :class="column.class"
      >
        <div class="text-white text-center">
          <select-box-report
            value=""
            :disable-search="column.disableSearch"
            :disable-sort="column.disableSort"
            :disable-confirm="column.disableConfirm"
            :options="getOptions(column)"
            :sort-options="sortOptions"
            @applyFilter="
              emit('applyFilter', { type: column.label, values: $event })
            "
            :label="column.label"
            class="bg-secondary select-box-filter-size w-full"
            :class="column.class"
          />
        </div>
      </th>
    </tr>
  </thead>
</template>

<style scoped lang="postcss">
.report-table-header {
  @apply bg-secondary !h-[50px] sticky top-[-1px] z-[20];

  th {
    @apply border-y-2 border-secondary text-center;
  }
  th:first-child {
    @apply border-l-2 px-4;
  }
  th:last-child {
    @apply border-r-2 capitalize px-4;
  }
}
</style>

<script setup>
import selectBoxReport from "./select-box-report.vue";

const emit = defineEmits(["applyFilter"]);

const props = defineProps({
  columns: {
    type: Array,
    default: [],
  },
});

const getOptions = (column) => {
  if (column.options) {
    return column.options;
  }

  let array = [];
  for (let i = 1; i <= 4; i++) {
    array.push({
      label: column.label,
      value: i,
    });
  }
  return array;
};

const sortOptions = [
  {
    value: "A",
    label: "A to Z",
  },
  {
    value: "Z",
    label: "Z to A",
  },
];
</script>
