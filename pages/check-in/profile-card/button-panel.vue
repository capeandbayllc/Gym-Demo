<template>
  <div class="slide-buttons-container">
    <div class="slide-buttons">
      <arrow-icon
        v-show="!hideLeftArrow"
        direction="left"
        class="arrow-icon"
        @click="LeftArrowClick"
      />
      <div class="button-panel-list">
        <div v-for="(btn, idx) in panelButtons" class="inline-block">
          <PanelBtn
            :key="`btn_${idx}`"
            :class="btn.class"
            :label="btn.label"
            :action="btn.action"
            @click="$emit(btn.action)"
          />
        </div>
      </div>
      <arrow-icon
        v-show="!hideRightArrow"
        direction="right"
        class="arrow-icon"
        @click="RightArrowClick"
      />
    </div>
  </div>
</template>

<style scoped lang="postcss">
::-webkit-scrollbar {
  @apply hidden;
}
.slide-buttons-container {
  @apply flex justify-center;
  .slide-buttons {
    @apply flex items-center justify-center rounded-3xl border-secondary border-2 px-2 mb-2 mb-4 z-[1];
    .button-panel-list {
      @apply max-w-xs p-4 whitespace-nowrap flex gap-8 overflow-x-scroll;
    }
    .arrow-icon {
      @apply h-fit cursor-pointer;
    }
  }
}
</style>

<script setup lang="ts">
import PanelBtn from "./panel-btn.vue";
import { ArrowIcon } from "~~/components/icons";

const props = defineProps({
  hideLeftArrow: {
    type: Boolean,
    default: false,
  },
  hideRightArrow: {
    type: Boolean,
    default: false,
  },
});

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

const LeftArrowClick = (event: any) => {
  var scroll_doc = event.srcElement;
  while (!scroll_doc.classList.contains("slide-buttons")) {
    scroll_doc = scroll_doc.parentNode;
  }
  var doc_list = scroll_doc.querySelector(".button-panel-list");
  doc_list.scrollBy({ left: -100, behavior: "smooth" });
};

const RightArrowClick = (event: any) => {
  var scroll_doc = event.srcElement;
  while (!scroll_doc.classList.contains("slide-buttons")) {
    scroll_doc = scroll_doc.parentNode;
  }
  var doc_list = scroll_doc.querySelector(".button-panel-list");
  doc_list.scrollBy({ left: 100, behavior: "smooth" });
};
</script>
