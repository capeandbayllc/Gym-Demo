<template>
  <tbody>
    <tr
      class="reports-table-row"
      v-for="item in data"
      :key="item.id"
      @handle="eventHandle"
      :data="item"
    >
      <td
        class="min-w-[250px]"
        v-for="column in columns"
        @click="rowClicked(item)"
      >
        <component
          v-if="column.component"
          :is="column.component"
          @row-clicked="emit('openReportDetailsModal', item)"
          @toggle-is-favorite="emit('toggleIsFavorite', item)"
          @toggle-select-report="emit('toggleSelectReport', item)"
          :column="column"
          :item="item"
        />
        <span v-else>
          {{ item[column.value] ? item[column.value] : "-" }}
        </span>
      </td>
    </tr>
  </tbody>
  <p class="pl-3 mt-3" v-show="!data.length">No data available at the moment</p>
</template>

<style scoped lang="postcss">
.reports-table-row {
  @apply bg-base-300 h-12;
  td {
    @apply border-y-2 border-secondary pl-2 border-r;
  }
  td:first-child {
    @apply border-l-2 rounded-l px-4;
  }
  td:last-child {
    @apply border-r-2 rounded-r capitalize px-4;
  }
}
</style>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
  columns: {
    type: Array,
    default: [],
  },
});

const emit = defineEmits([
  "row-clicked",
  "openReportDetailsModal",
  "handle",
  "toggleIsFavorite",
  "toggleSelectReport",
]);

const rowClicked = (data) => {
  emit("row-clicked", data);
};

const eventHandle = (event) => {
  emit("handle", event);
};
</script>
