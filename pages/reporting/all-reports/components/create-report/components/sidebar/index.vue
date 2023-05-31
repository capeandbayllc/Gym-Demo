<template>
  <div class="card-container">
    <div>
      <column-columns
        v-if="actualSection == 'Columns'"
        :columnsContent="columnsContent"
        class="section"
        @changeActualSection="emit('changeActualSection', $event)"
      />
      <column-filters
        @changeActualSection="emit('changeActualSection', $event)"
        v-if="actualSection == 'Filters'"
        class="section"
      />
      <select-columns v-if="actualSection == 'SelectColumns'" class="section" />
    </div>
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
  const columnsLabels = props.columns.map((column) => column.label);
  columnsContent.value.find((content) => content.title === "Columns").items =
    columnsLabels;
});

const selectColumns = ref(null);

var columnsContent = ref([
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
    items: ["Locations", "Security Roles", "User"],
  },
]);
</script>
