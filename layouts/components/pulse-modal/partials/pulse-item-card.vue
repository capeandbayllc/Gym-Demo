<template>
  <div>
    <h4>{{ title }}</h4>
    <div class="bg-black border-2 border-secondary p-4 rounded-2xl mt-4">
      <slot name="card-content">
        <p>Add some content to the slot</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Default Card Prop Title",
  },
});
</script>

<style lang="postcss" scoped>
h4 {
  @apply text-2xl font-semibold;
}
</style>
