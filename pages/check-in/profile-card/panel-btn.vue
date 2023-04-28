<template>
  <button
    @click="$emit(action)"
    class="w-12 h-12 aspect-square rounded-lg group grid grid-cols-[3rem] grid-rows-[3rem] items-center justify-items-center"
  >
    <span
      class="text-xl font-bold rounded-2xl transition-all opacity-100 duration-200 group-hover:scale-0 group-hover:opacity-0"
      >{{ label }}</span
    >
    <span
      class="opacity-0 group-hover:opacity-100 transition-all duration-200 scale-50 group-hover:scale-100"
    >
      <EditIcon />
    </span>
  </button>
</template>

<style scoped lang="postcss">
span {
  grid-column: 1;
  grid-row: 1;
}
</style>

<script setup lang="ts">
import { EditIcon } from "~~/components/icons";

interface Props {
  label: string;
  action: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  action: "click",
});
</script>
