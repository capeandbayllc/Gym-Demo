<template>
  <select multiple class="rounded-md bg-blue-500 text-white">
    <option :value="value" class="bg-white text-gray-900">{{ value }}</option>
  </select>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  value: {
    type: String,
    required: true,
  }
});

</script>

<style scoped>
/* your styles here */
</style>
