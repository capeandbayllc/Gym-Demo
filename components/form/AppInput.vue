<template>
  <input
    :ref="ref"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    class="app-input p-2 bg-[#0075c9] bg-opacity-[0.41] pl-[13px] hover:bg-[#0075c9] focus-visible:outline-none rounded-xl placeholder-white placeholder-opacity-[0.52] placeholder:text-[14px]"
    :class="[height ? height : 'h-[38px]', width ? width : 'w-[306px]']"
  />
</template>

<script setup>
  const props = defineProps({
    ref: String,
    placeholder: String,
    modelValue: String,
    width: String,
    height: String
  })
</script>