<template>
  <div
    class="chart-content text-base-content flex absolute right-[-83px] bottom-[10px] min-w-[100px] w-0 overflow-visible"
  >
    <div
      class="relative bg-base-300 min-w-[35px] min-h-[35px] text-[12px] rounded-full"
    >
      <span
        class="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-secondary rounded-full"
      >
        <span>{{ value }}%</span>
      </span>
      <div
        class="absolute inset-0 border border-base-content rounded-full"
      ></div>
    </div>
    <div class="text-[12px] text-secondary label min-w-[120px] ml-1">
      {{ label }} {{ percent }}%
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  value: Number,
  percent: Number,
});
</script>
