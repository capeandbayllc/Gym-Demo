<template>
  <div class="people-lead-table">
    <data-table
      :columns="columns"
      :data="items"
      :row-component="PeopleSearchTableRow"
      :no-data-message="noDataMessage"
      class="h-56 overflow-y-auto"
    />
  </div>
</template>
<script setup>
import PeopleSearchTableRow from "./people-search-table-row.vue";
const props = defineProps({
  columns: {
    type: Array,
    default: [],
  },
  items: {
    type: Array,
    default: [],
  },
  noDataMessage: {
    type: String,
    dafault: "There is currently no available data.",
  },
});
</script>
