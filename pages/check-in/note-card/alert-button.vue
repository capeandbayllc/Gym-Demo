<template>
  <button
    class="alert-container"
    :class="{
      checked: modelValue,
      '!bg-base-200 !text-base-content border border-base-content':
        alertOutline && !modelValue,
    }"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <div class="checker">
      <check-circle-icon v-if="modelValue" />
    </div>
    <div class="font-normal text-xs">
      {{
        modelValue
          ? alertCreatedLabel
            ? alertCreatedLabel
            : "Alert"
          : "Create an Alert"
      }}
    </div>
  </button>
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
  alertCreatedLabel: String,
  alertOutline: Boolean,
});
</script>
