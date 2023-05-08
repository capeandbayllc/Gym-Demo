<template>
  <div class="flex flex-row gap-2 px-2 py-1.5 w-full" @click="onClick(value)">
    <span
      class="border-2 w-[17px] h-[17px] rounded-full flex flex-col justify-center"
      :class="{
        'border-[#292929]': !selected,
        'border-secondary': selected,
      }"
    >
      <span
        class="w-[10px] h-[10px] rounded-full inline-block mx-auto"
        :class="{
          'bg-secondary': selected,
          'bg-white': !selected,
        }"
      ></span>
    </span>
    <span class="line-clamp-1">{{ label ?? value }}</span>
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
