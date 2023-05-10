<template>
  <div class="people-lead-table">
    <PeopleSearchTableHeader :columns="columns" />
    <div class="max-h-96 overflow-y-scroll w-full">
      <PeopleSearchTableRow
        v-for="item in items"
        :key="item.id"
        :columns="columns"
        :data="item"
        @click="clickRow(item)"
      />
    </div>
  </div>
</template>
<style>
.people-lead-table {
  @apply max-w-[100%] xl:overflow-x-hidden overflow-x-auto;
}
</style>
<script setup>
import PeopleSearchTableHeader from "./people-search-table-header.vue";
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
  filter: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["row-clicked"]);

const clickRow = (item) => {
  emit("row-clicked", item);
};
</script>
