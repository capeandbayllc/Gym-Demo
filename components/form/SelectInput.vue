<template>
  <div class="relative">
    <span
      class="absolute left-0 bg-[#0075C9] h-full px-4 rounded-tl-[19px] rounded-bl-[19px] flex items-center justify-center"
    >
      <ArrowLeft class="rotate-0 left-0 text-white" />
    </span>
    <span
      class="absolute right-0 bg-[#0075C9] h-full px-4 rounded-tr-[19px] rounded-br-[19px] flex items-center justify-center"
    >
      <ArrowLeft class="rotate-180 text-white" />
    </span>
    <select
      :value="value"
      @change="updateValue($event.target.value)"
      name=""
      id=""
      class="w-[375px] text-base-content h-[45px] bg-transparent border-2 border-[#0075c9] rounded-[19px] px-12 focus-visible:outline-none"
    >
      <option
        class="text-base-300"
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label ?? option.value }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { ArrowLeft } from "@/components/icons";
defineProps({
  options: Array,
  value: String,
});
const emit = defineEmits(["update"]);
const updateValue = (value) => {
  emit("update", value);
};
</script>
