<template>
  <ul
    class="max-w-xs border-secondary border-2 p-4 whitespace-nowrap mx-auto rounded-3xl mb-4 flex gap-8 overflow-x-scroll z-[1]"
  >
    <li v-for="(btn, idx) in panelButtons" class="inline-block">
      <PanelBtn
        :key="`btn_${idx}`"
        :class="btn.class"
        :label="btn.label"
        :action="btn.action"
        @click="$emit(btn.action)"
      />
    </li>
  </ul>
</template>

<style scoped lang="postcss">
::-webkit-scrollbar {
  @apply hidden;
}
</style>

<script setup lang="ts">
import PanelBtn from "./panel-btn.vue";

interface IPanelButton {
  class: string;
  label: string;
  action: string;
}

const panelButtons: IPanelButton[] = [
  {
    class: "bg-warning/80",
    label: "P",
    action: "P",
  },
  {
    class: "bg-success",
    label: "PT",
    action: "PT",
  },
  {
    class: "bg-secondary",
    label: "FM",
    action: "FM",
  },
  {
    class: "bg-warning/80",
    label: "P",
    action: "P",
  },
  {
    class: "bg-success",
    label: "PT",
    action: "PT",
  },
  {
    class: "bg-secondary",
    label: "FM",
    action: "FM",
  },
];
</script>
