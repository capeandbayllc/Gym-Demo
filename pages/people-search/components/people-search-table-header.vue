<template>
  <div class="border-b-4 border-secondary mb-4 px-4 pb-4">
    <div
      class="grid grid-cols-[repeat(2,_14%),repeat(2,_1fr),_repeat(2,_12%),_7%] items-center pr-4"
    >
      <div
        v-for="(column, ndx) in columns"
        :key="column.field ? column.field : ndx"
        class="capitalize font-normal whitespace-nowrap text-secondary w-full"
      >
        <div v-if="column.label === 'Alerts'" class="flex items-center w-full">
          <AlertIcon class="mr-2 text-secondary" />
          {{ column.label ? column.label : column }}
        </div>
        <div v-else-if="column.label === 'Segment'" class="flex items-center">
          <input
            type="checkbox"
            class="checkbox checkbox-secondary bg-white mr-2"
          />
          {{ column.label ? column.label : column }}
        </div>
        <div v-else>
          {{ column.label ? column.label : column }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
thead {
  @apply z-50 sticky;
}

thead th {
  @apply py-3;
}
</style>
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { AlertIcon } from "~~/components/icons";

library.add(faAlignLeft);
const props = defineProps({
  columns: {
    type: Array,
    default: [],
  },
});
</script>
