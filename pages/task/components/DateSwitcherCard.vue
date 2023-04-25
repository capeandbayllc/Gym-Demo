<template>
  <div
    class="date-switcher-card"
    :class="{
      active: active,
    }"
  >
    <div class="switcher-date">{{ date }}</div>
    <div class="switcher-week">{{ dayOfWeek }}</div>
  </div>
</template>
<style scoped>
.date-switcher-card {
  &.active {
    @apply bg-secondary text-base-content;
  }

  @apply flex flex-col w-24 rounded border border-secondary text-base-content font-bold text-center cursor-pointer hover:bg-secondary;
  background-color: #191919;
}
.switcher-date {
  @apply text-5xl pt-2.5;
}
.switcher-week {
  @apply text-lg pb-2.5;
}
</style>
<script setup>
import { computed } from "vue";

const props = defineProps({
  date: {
    type: Number,
  },
  ndx: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const dayOfWeek = computed({
  get() {
    return ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"][props.ndx];
  },
});
</script>
