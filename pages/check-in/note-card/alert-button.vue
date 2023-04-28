<template>
  <div
    class="alert-container"
    :class="{
      checked: modelValue,
    }"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <div class="checker">
      <!-- <plus-circle-icon v-if="!modelValue"/> -->
      <check-circle-icon v-if="modelValue" />
    </div>
    <div class="font-normal text-xs">
      {{ modelValue ? "Alert" : "Create an Alert" }}
    </div>
  </div>
</template>
<style scoped lang="postcss">
.alert-container {
  @apply flex flex-row items-center space-x-2 h-[30px] w-fit pr-4 py-1 cursor-pointer bg-base-content rounded-full text-base-300;
  .checker {
    @apply p-1 rounded-full;
  }
  &.checked {
    @apply bg-error border border-base-content !text-base-content;
  }
}
</style>
<script setup>
import { PlusCircleIcon, CheckCircleIcon } from "~~/components/icons";
const props = defineProps({
  modelValue: Boolean,
});
</script>
