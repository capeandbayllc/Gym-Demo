<template>
  <arrow-icon
    :direction="modelValue ? 'up' : 'down'"
    @click="$emit('update:modelValue', !modelValue)"
    :size-full="sizeFull"
    class="collapse-btn"
  />
</template>
<style scoped lang="postcss">
.collapse-btn:hover {
  @apply text-secondary;
}
</style>
<script setup>
import { ArrowIcon } from "~~/components/icons";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  sizeFull: {
    type: Boolean,
    default: false,
  },
});
</script>
