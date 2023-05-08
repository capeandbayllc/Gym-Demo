<template>
  <div v-show="message">
    <p class="text-sm text-error">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
  },
});
</script>
