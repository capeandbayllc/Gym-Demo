<template>
  <label class="block font-medium text-sm">
    <span v-if="value">{{ value }}</span>
    <span v-else><slot></slot></span>
  </label>
</template>

<script setup>
const props = defineProps({
  value: {
    type: String,
  },
});
</script>
