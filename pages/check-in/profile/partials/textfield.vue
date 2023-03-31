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
});
</script>
