<template>
  <div class="label-box cursor-pointer">
    <div class="flex flex-col justify-center items-center h-full text-center">
      <h2 class="text-[73px] font-bold leading-[65px]">{{ value }}</h2>
      <h3 class="text-[13px] capitalize leading-[13px] mt-2">{{ label }}</h3>
    </div>
  </div>
</template>
<script setup>
defineProps({
  label: {
    default: "pending",
    type: String,
  },
  value: {
    default: 10,
    type: String || Number,
  },
});
</script>
<style>
.label-box {
  @apply h-[133px] w-[133px] border-[3px] border-[#0075c9] hover:bg-[#0075c9] transition-all rounded-[19px] m-4;
}
</style>
