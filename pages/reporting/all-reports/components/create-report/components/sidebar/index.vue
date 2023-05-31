<template>
  <div class="card-container">
    <component
      v-for="(column, i) in columnComponents"
      :key="i"
      @changeActualSection="emit('changeActualSection', $event)"
      @changeActualSubSection="actualSubSection = $event"
      :actualSubSection="actualSubSection"
      :columnsContent="columnsContent"
      v-show="actualSection == column.name"
      :is="column.component"
    />
  </div>
</template>
<style scoped lang="postcss">
.card-container {
  @apply overflow-y-auto w-full py-[20px] h-[70vh] overflow-visible border border-secondary rounded-2xl bg-base-300 text-left;
}
</style>
<script setup>
import SelectColumns from "./select-columns.vue";
import ColumnFilters from "./column-filters.vue";
import ColumnColumns from "./column-columns.vue";

const columnComponents = ref([
  {
    name: "Columns",
    component: ColumnColumns,
  },
  {
    name: "Filters",
    component: ColumnFilters,
  },
  {
    name: "SelectColumns",
    component: SelectColumns,
  },
]);

const emit = defineEmits(["changeActualSection"]);

const props = defineProps({
  actualSection: {
    type: String,
    default: "",
  },
  columns: {
    type: Array,
    default: [],
  },
});

onMounted(() => {
  columnsContent.value.find((content) => content.title === "Columns").items =
    props.columns;

  columnsContent.value.find((content) => content.title === "Row Groups").items =
    props.columns.map((column) => ({ ...column, active: false }));

  columnsContent.value.find(
    (content) => content.title === "Column Groups"
  ).items = props.columns.map((column) => ({ ...column, active: false }));
});

const actualSubSection = ref(null);

const columnsContent = ref([
  {
    title: "Columns",
    selectColumns: SelectColumns,
    items: [],
  },
  {
    title: "Row Groups",
    items: [],
  },
  {
    title: "Column Groups",
    items: [],
  },
  {
    title: "Aggregate Columns",
    items: [],
  },
  {
    title: "Visability",
    items: [
      { label: "Locations" },
      { label: "Security Roles" },
      { label: "User" },
    ],
  },
]);
</script>
