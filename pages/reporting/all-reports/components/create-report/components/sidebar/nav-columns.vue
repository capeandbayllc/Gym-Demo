<template>
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
</template>

<style scoped lang="postcss">
.card-header {
  @apply bg-secondary-focus border border-secondary rounded flex flex-wrap mx-5 gap-3 justify-center px-5 py-1;
  .card-button {
    @apply rounded px-3 py-1 font-semibold;
  }
  .card-button-selected {
    @apply bg-secondary  rounded font-semibold;
  }
}
</style>

<script setup>
const emit = defineEmits(["changeActualSection"]);

const props = defineProps({
  actualSection: {
    type: String,
    default: "",
  },
});
</script>
