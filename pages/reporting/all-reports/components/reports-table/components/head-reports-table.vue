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
            :options="options"
            :sort-options="sortOptions"
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
  @apply bg-secondary !h-[50px] sticky top-[-1px];

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

const columns = [
  {
    label: "Report Name",
    class: "w-full",
  },
  {
    label: "Description",
    class: "w-full",
  },
  {
    label: "Report Type",
    class: "!w-[146px]",
  },
  {
    label: "Date Created",
    class: "!w-[146px]",
  },
  {
    label: "Last Run Date",
    class: "!w-[146px]",
  },
  {
    label: "Created By",
    class: "!w-[146px]",
  },
  {
    label: " Last Edited By",
    class: "w-full",
  },
];

const options = [
  {
    label: "Title 1",
    value: "1",
  },
  {
    label: "Title 2",
    value: "2",
  },
  {
    label: "Title 3",
    value: "3",
  },
  {
    label: "Title 4",
    value: "4",
  },
];
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
