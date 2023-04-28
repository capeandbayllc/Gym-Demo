<template>
  <div class="multi-select">
    <multiselect
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :options="options"
      :mode="isSingleSelect ? 'single' : 'multiple'"
      :placeholder="label"
      :can-deselect="!isSingleSelect"
      :classes="getDefaultMultiselectTWClasses()"
      :caret="isSingleSelect"
      :close-on-select="isSingleSelect"
    />
    <div v-if="!isSingleSelect" class="multi-select-tags">
      <div
        v-for="value in modelValue"
        :key="value"
        @click="removeOption(value)"
      >
        {{ getLabel(value) }}
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.multi-select {
  @apply flex flex-col gap-2;
  .multi-select-tags {
    @apply grid grid-cols-3 gap-2;
    > div {
      @apply h-9 flex items-center justify-center rounded bg-secondary cursor-pointer;
    }
  }
}
</style>
<script setup>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import { getDefaultMultiselectTWClasses } from "./getDefaultMultiselectTWClasses.js";

const props = defineProps({
  modelValue: {
    type: [Array, String],
    default: [],
  },
  label: String,
  options: {
    type: Array,
    default: [],
  },
  isSingleSelect: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
const getLabel = (value) => {
  let label = props.options.filter((item) => item.value === value)[0].label;
  if (label.length > 10) {
    label = label.substr(0, 7) + "...";
  }
  return label;
};
const removeOption = (value) => {
  let updated = props.modelValue.filter((item) => item != value);
  emit("update:modelValue", updated);
};
</script>
