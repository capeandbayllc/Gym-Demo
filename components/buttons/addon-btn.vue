<template>
  <button
    @click="$emit(action)"
    class="border bg-accent-focus group flex flelx-row items-center justify-center rounded-full aspect-square w-8 relative mx-auto"
    :class="{
      'add-ons-active': value,
    }"
  >
    <span
      class="group-hover:scale-0 group-hover:opacity-0 scale-100 opacity-100 transition-all duration-300 absolute h-full flex items-center"
      >PT</span
    >
    <span
      class="group-hover:scale-100 group-hover:opacity-100 opacity-0 scale-0 transition-all duration-300 absolute h-full flex items-center"
      ><edit-icon class="aspect-square h-4"
    /></span>
  </button>
</template>

<style scoped lang="postcss">
.add-ons-active {
  @apply bg-accent-focus border-accent-focus;
}
</style>

<script setup>
import { EditIcon } from "~~/components/icons";

/** emit 'action' on click */
const props = defineProps({
  value: Boolean,
  action: {
    type: String,
    default: "click",
  },
});
</script>
