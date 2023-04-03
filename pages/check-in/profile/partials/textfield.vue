<template>
  <div class="block w-full group">
    <slot name="label">
      <label
        class="gr-base-label"
        :class="{ 'is-required': required }"
        :for="id"
        >{{ label }}</label
      >
    </slot>

    <slot name="input">
      <input
        :id="id"
        class="group-hover:bg-secondary gr-base-textfield gr-neutral-textfield"
        :type="inputType"
        :required="required"
        :placeholder="placeholder"
        v-model="localValue"
      />
    </slot>
  </div>
</template>

<style scoped lang="postcss">
.is-required {
  @apply after:content-['*'] after:ml-0.5 after:text-secondary;
}
</style>

<script setup>
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  label: {
    type: String,
    default: "default label",
  },
  required: {
    type: Boolean,
    default: false,
  },
  id: {
    type: [String, Number, null],
    default: null,
  },
  inputType: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: [String, null],
    default: null,
  },
  modelValue: {
    type: [String, Number, null, undefined],
    default: "",
  },
});

const localValue = ref(props.modelValue);

watch(localValue, () => emit("update:modelValue", localValue.value));
</script>
