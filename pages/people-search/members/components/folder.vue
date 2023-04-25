<template>
  <div
    class="flex justify-between bg-secondary p-2 px-3 mb-10 rounded-md cursor-pointer border-2 border-transparent hover:border-secondary"
    v-if="shared"
  >
    <p>Shared</p>
    <p>21</p>
  </div>

  <div
    class="flex justify-between bg-base-300 p-2 px-3 mb-3 rounded-md border-2 border-primary-content cursor-pointer hover:border-secondary"
    v-else
  >
    <p>Folder</p>
    <p>12</p>
  </div>
</template>

<script setup>
const props = defineProps({
  shared: {
    type: Boolean,
    default: false,
  },
});
</script>
