<template>
  <div class="engege-table">
    <data-table
      :columns="columns"
      :data="items"
      :row-component="EngageHistoryTableRow"
      class="h-56 overflow-y-auto"
    />
  </div>
</template>
<script setup>
import EngageHistoryTableRow from "./engage-history-table-row.vue";
const props = defineProps({
  columns: {
    type: Array,
    default: [],
  },
  items: {
    type: Array,
    default: [],
  },
});
</script>
