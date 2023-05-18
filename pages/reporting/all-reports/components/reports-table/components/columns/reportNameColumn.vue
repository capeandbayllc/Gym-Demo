<template>
  <div class="flex items-center gap-2">
    <input type="checkbox" name="agree" id="agree" />
    <star-icon clear class="text-secondary text-2xl mb-1" />
    <button class="whitespace-nowrap cursor-pointer" @click="rowClicked(item)">
      {{ item[column.value] ? item[column.value] : "-" }}
    </button>
  </div>
</template>

<style scoped lang="postcss">
input[type="checkbox"] {
  @apply rounded-[6px] bg-base-content appearance-none m-0 h-5 w-5 border border-neutral-content outline-none focus:border;
}
input[type="checkbox"]:checked {
  @apply bg-secondary border-primary;
}
</style>

<script setup>
import { StarIcon } from "~/components/icons";
const props = defineProps({
  item: {
    type: Array,
    default: {},
  },
  column: {
    type: Array,
    default: {},
  },
});
</script>
