<template>
  <div class="card-container">
    <div
      class="max-w-full rounded-xl overflow-auto max-h-[70vh] min-h-[102%]"
      :class="tableClass"
    >
      <table class="rounded-2xl">
        <head-reporting-table :columns="columns" />
        <body-reporting-table :columns="columns" :data="data" />
      </table>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.card-container {
  @apply w-full pb-[8px] h-[70vh] overflow-visible border border-secondary rounded-2xl bg-base-300 text-left max-w-full overflow-auto mx-auto;

  .card-title-container {
    @apply flex justify-between items-center;
  }

  .card-content {
    @apply h-full mx-3;
  }
}

table {
  @apply w-[99.5%];
}
</style>
<script setup>
import HeadReportingTable from "./head-reporting-table.vue";
import BodyReportingTable from "./body-reporting-table.vue";

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
  columns: {
    type: Array,
    default: [],
  },
  tableClass: {
    type: String,
    default: "",
  },
});
</script>
