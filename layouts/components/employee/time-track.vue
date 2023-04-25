<template>
  <simple-card class="text-center">
    <ul class="options-wrap relative overflow-auto flex gap-8 mx-auto pb-8">
      <li
        class="shrink-0 mx-3 cursor-pointer text-center text-gray-600 hover:text-white"
        :class="
          ({ selected: option.selected },
          option.selected ? 'text-white' : 'text-gray-600 scale-[0.8]')
        "
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
      >
        <div
          :class="option.selected ? 'border-opacity-100' : 'border-opacity-50'"
          class="h-40 w-40 p-8 border-8 border-[#0075c9] rounded-full m-6"
        >
          <InIcon v-if="option.title == 'In'" class="h-full w-full" />
          <OutIcon v-if="option.title == 'Out'" class="h-full w-full" />
          <AdjustIcon v-if="option.title == 'Adjust'" class="h-full w-full" />
          <PauseIcon v-if="option.title == 'Break'" class="h-full w-full" />
        </div>
        <span class="w-40 inline-block">{{ option.title }}</span>
      </li>
    </ul>
  </simple-card>
</template>
<script setup>
import { PauseIcon, InIcon, OutIcon, AdjustIcon } from "@/components/icons";
const emit = defineEmits(["break"]);
const options = ref([
  {
    title: "In",
    selected: false,
  },
  {
    title: "Break",
    selected: true,
  },
  {
    title: "Out",
    selected: false,
  },
  {
    title: "Adjust",
    selected: false,
  },
]);

const selectOption = (opt) => {
  options.value.forEach((o) => {
    o.selected = false;
  });
  opt.selected = true;
  if (opt.title == "Break") {
    emit("break");
  }
};
</script>
<style scoped>
.options-wrap li > div {
  transition: all 0.3s;
}
.selected > div {
  transform: scale(1.2);
}
</style>
