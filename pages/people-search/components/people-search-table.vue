<template>
  <div class="people-lead-table">
    <PeopleSearchTableHeader :columns="columns" class="min-w-[1050px]" />
    <div class="max-h-96 overflow-y-scroll min-w-[1050px]">
      <PeopleSearchTableRow
        v-for="item in items"
        :key="item.id"
        :is="rowComponent"
        :columns="columns"
        :data="item"
      />
      <!-- @click="rowClicked(item)" -->
    </div>
    <!-- <data-table
            :columns="columns"
            :data="items"
            :header-component="PeopleSearchTableHeader"
            :row-component="PeopleSearchTableRow"
            :sticky-header="true"
            class=""
            @row-clicked="clickRow"
        /> -->
  </div>
</template>
<style>
.people-lead-table {
  @apply max-w-[100%] xl:overflow-x-hidden overflow-x-scroll;
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

const clickRow = (data) => {
  emit("row-clicked", data);
};
</script>
