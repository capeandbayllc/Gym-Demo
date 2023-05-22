<template>
  <div class="flex gap-3 items-center mr-5">
    <span class="inline-block whitespace-nowrap text-center">
      {{ selectedReports?.length }} report selected
    </span>
    <button class="text-secondary">Clear</button>
    <select-box label="Move to folder" secondary class="!w-[120px]">
    </select-box>
    <button class="border rounded px-3 h-[29px]">Delete</button>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedReports: {
    type: Array,
    default: [],
  },
});
</script>
