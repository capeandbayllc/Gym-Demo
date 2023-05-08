<template>
  <div class="leader-pop-input">
    <div class="input-emoticon">
      <smile-icon /> <span class="flex">&#8942;</span>
    </div>
    <input placeholder="Type your message" />
    <div class="input-send-btn"><skype-icon /></div>
  </div>
</template>
<style scoped>
.leader-pop-input {
  @apply relative mx-4 py-4;
  .input-emoticon {
    @apply absolute left-0 top-4 flex flex-row text-base-100 items-center space-x-2;
  }
  .input-send-btn {
    @apply text-secondary absolute right-0 top-4;
  }
  input {
    @apply border-b border-secondary w-full h-7 text-neutral px-8 text-base font-normal pb-1;
  }
  input:active,
  input:focus {
    @apply outline-none;
  }
}
</style>
<script setup>
import { SkypeIcon, SmileIcon } from "~~/components/icons";
</script>
