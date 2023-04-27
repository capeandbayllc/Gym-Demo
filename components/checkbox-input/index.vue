<template>
  <div class="flex flex-row gap-2 cursor-pointer" @click="onChange">
    <span
      class="w-[25px] h-[25px] rounded-md flex flex-col justify-center"
      :class="{
        'bg-white': !isChecked,
        'bg-[#2F72C4]': isChecked,
      }"
    >
      <CheckInIcon class="w-[20px] h-[20px] mx-auto" v-if="isChecked" />
    </span>
    <span class="my-auto">{{ label }}</span>
  </div>
</template>

<script setup>
import { CheckInIcon } from "../icons";
const props = defineProps({
  label: String,
  onChange: Function,
  isChecked: {
    type: Boolean,
    default: false,
  },
});
</script>
