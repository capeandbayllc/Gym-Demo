<template>
  <div
    class="font-medium text-sm hover:neutral hover:bg-base-content px-4 py-2"
    :class="{
      'bg-secondary text-base-content hover:bg-secondary': selected,
    }"
    @click="handleClick"
  >
    {{ label }}
  </div>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function,
    default: () => null,
  },
});
const handleClick = (e) => {
  props.onClick(props.value);
};
</script>
