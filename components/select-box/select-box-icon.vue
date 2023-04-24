<template>
  <span class="transform transition-transform ml-2" :class="classList">
    <ArrowIcon
      :direction="isCollapsed ? 'down' : 'up'"
      :class="{
        color,
        'fill-base-content': !isCollapsed,
      }"
    />
  </span>
</template>

<script setup>
import { ArrowIcon } from "@/components/icons";

const props = defineProps({
  isCollapsed: {
    type: Boolean,
  },
  color: {
    type: String,
    default: "text-base-content",
  },
  classList: {
    type: String,
    default: "mt-0.5",
  },
});
</script>
