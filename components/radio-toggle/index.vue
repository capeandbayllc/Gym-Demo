<template>
  <div
    class="flex flex-row gap-2 cursor-pointer"
    @click="onChange"
    :class="className"
  >
    <span
      class="inline-block w-[33px] h-[19px] relative rounded-full transitioner my-auto"
      :class="{
        'bg-[#ccc]': !isChecked,
        'bg-[#82D300]': isChecked,
      }"
    >
      <span
        class="absolute w-[19px] pb-[100%] transitioner"
        :class="{
          'left-0': !isChecked,
          'left-[calc(100%-19px)]': isChecked,
        }"
      >
        <HollowedCheckCircleIcon
          class="rounded-full transitioner"
          :class="{
            'fill-[#666] bg-[#666]': !isChecked,
            'fill-[#fff]': isChecked,
          }"
        />
      </span>
    </span>
    <span class="my-auto" :class="labelClass">{{ label }}</span>
  </div>
</template>

<script setup>
import { HollowedCheckCircleIcon } from "../icons";
const props = defineProps({
  isChecked: {
    type: Boolean,
    default: false,
  },
  onChange: Function,
  label: String,
  class: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.transitioner {
  @apply transition-all duration-200 ease-linear;
}
</style>
