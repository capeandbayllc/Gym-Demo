<template>
  <div class="alarm-btn">
    <span v-if="count > 0" class="notification">{{ count }}</span>
    <alarm-icon />
  </div>
</template>
<style scoped>
.alarm-btn {
  @apply relative cursor-pointer;
  .notification {
    @apply badge-error rounded-full flex w-4 h-4 text-xs items-center justify-center absolute;
    left: -0.5rem;
    top: -0.375rem;
  }
}
</style>
<script setup>
import { AlarmIcon } from "@/components/icons";

defineProps({
  count: {
    Type: Number,
    default: 0,
  },
});
</script>
