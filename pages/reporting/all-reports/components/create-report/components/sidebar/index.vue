<template>
  <div class="card-container">
    <div class="flex justify-center">
      <div class="card-header">
        <button
          @click="emit('changeActualSection', 'Columns')"
          class="card-button"
          :class="{ 'card-button-selected': actualSection == 'Columns' }"
        >
          Columns
        </button>
        <button
          @click="emit('changeActualSection', 'Filters')"
          class="card-button"
          :class="{ 'card-button-selected': actualSection == 'Filters' }"
        >
          Filters
        </button>
      </div>
    </div>
    <div class="card-content">
      <column-columns
        v-if="actualSection == 'Columns'"
        :columnsContent="columnsContent"
        class="section"
      />
      <column-filters v-if="actualSection == 'Filters'" class="section" />
    </div>
  </div>
</template>
<style scoped lang="postcss">
.card-container {
  @apply overflow-y-auto w-full py-[20px] h-[70vh] overflow-visible border border-secondary rounded-2xl bg-base-300 text-left;
  .card-header {
    @apply bg-secondary-focus border border-secondary rounded flex flex-wrap mx-5 gap-3 justify-center px-5 py-1;
    .card-button {
      @apply rounded px-3 py-1 font-semibold;
    }
    .card-button-selected {
      @apply bg-secondary  rounded font-semibold;
    }
  }
  .card-content {
    @apply mt-5;
    .section {
      @apply pb-5 px-5;
    }
  }
}
</style>
<script setup>
// import SelectColumns from "./select-columns.vue";
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
    // selectColumns: SelectColumns,
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
