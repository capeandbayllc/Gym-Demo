<template>
  <div class="modal-wrapper" :class="compWidth ?? 'w-[721px]'">
    <div class="border relative border-[#0075c9] bg-black px-4 py-6 rounded-[19px]">
      <div class="header pt-4 pb-6 text-center">
        <h4 class="text-[20px] font-bold">{{ title }}</h4>
        <div class="close cursor-pointer w-8 h-8" @click="$emit('close')">
          <span></span>
          <span></span>
        </div>
      </div>
      <div>
        <slot name="body"></slot>
      </div>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  compWidth: String
})
</script>
<style scoped>
  .modal-wrapper {
    .header {
      .close {
        @apply absolute right-3 top-3 rotate-45 border border-white rounded-full;
        span {
          @apply absolute right-[7px] top-[14px] h-0.5 w-4 bg-white rounded-lg rotate-0 transition-all;
        }
        span:last-child {
          @apply absolute right-[7px] top-[14px] h-0.5 w-4 bg-white rounded-lg rotate-90 transition-all;
        }
      }
      .close:hover {
        @apply bg-[#0075c9];
        span:first-child {
          @apply rotate-90;
        }
      }
    }
  }
</style>