<template>
  <div class="circle-progress">
    <div class="flex flex-col justify-center items-center h-full">
      <h3 class="text-[21px]">{{ label }}:</h3>
      <h2 class="text-[73px] font-bold leading-[73px]">{{ value }}</h2>
    </div>
  </div>
</template>
<script setup>
defineProps({
  label: {
    default: "Hours",
    type: String,
  },
  value: {
    default: 38,
    type: String || Number,
  },
});
</script>
<style>
.circle-progress {
  @apply h-[210px] w-[210px] p-8 border-[20px] border-[#0075c9] rounded-full m-6;
  background: conic-gradient(
    from 360deg at 50% 50%,
    #0074c8 0deg,
    rgba(6, 83, 139, 0) 360deg
  );
}
</style>
