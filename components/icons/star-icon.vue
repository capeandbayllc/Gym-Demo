<template>
  <span :class="clear ? '' : 'text-yellow-500 text-xl'"> &#9733; </span>
</template>
<script setup>
const props = defineProps({
  clear: {
    type: Boolean,
    default: false,
  },
});
</script>
