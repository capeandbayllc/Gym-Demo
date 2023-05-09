<template>
  <div class="line-clamp-3 text-[0.5rem]" v-if="end - start > 5.4e6">
    {{ description }}
  </div>
</template>
<script setup>
const props = defineProps({
  description: {
    type: String,
    default: "",
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
});
</script>
