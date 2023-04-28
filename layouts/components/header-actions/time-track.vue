<template>
  <button class="time-tracking-btn">
    <ClockIcon />
  </button>
</template>
<style scoped>
.time-tracking-btn {
  @apply relative cursor-pointer bg-[#0075c9] h-8 w-8 flex justify-center items-center rounded-lg border-2 border-primary-content p-1;
}
</style>
<script setup>
import { ClockIcon } from "@/components/icons";

defineProps({});
</script>
