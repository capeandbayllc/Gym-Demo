<template>
  <div class="relative">
    <span class="absolute h-full bg-[#0075C9] rounded-tl-[19px] rounded-bl-[19px] w-10 flex items-center justify-center">
      <CalendarIcon />
    </span>
    <input type="text" placeholder="00.00.0000" name="time" class="input-time" onfocus="this.type='time'">
  </div>
</template>
<script setup>
import { CalendarIcon } from "@/components/icons";

</script>

<style scoped>
  .input-time {
    @apply w-[187px] h-[45px] bg-transparent border border-[#0075C9] pl-16 rounded-[19px];
  }
  .input-time::placeholder {
    @apply text-white;
  }
</style>