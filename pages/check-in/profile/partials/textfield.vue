<template>
  <div class="block w-full group">
    <slot name="label">
      <label
        class="capitalize"
        :class="{ 'is-required': required }"
        :for="id"
        >{{ label }}</label
      >
    </slot>

    <slot name="input">
      <input
        :id="id"
        class="bg-base-content/20 border-2 border-transparent rounded-xl p-2 w-full group-hover:bg-secondary transition-all duration-75 mt-2 focus-within:bg-base-content/30 outline-none focus-within:border-secondary"
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
