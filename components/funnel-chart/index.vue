<template>
  <div class="funnel-chart">
    <div v-for="item in data" :key="item.id" class="funnel-chart-item">
      <div class="item-content relative">
        <component
          :is="contentItem"
          :label="item.label"
          :value="item.value"
          :percent="item.percent"
          :class="{ 'active-chart-section': item.activeContent }"
        />
      </div>
      <div
        class="item-shadow"
        :style="{
          ...getStyle(item, 144),
        }"
      ></div>
      <div
        class="item-chart"
        :style="{
          ...getStyle(item, 120),
        }"
      ></div>
    </div>
  </div>
</template>
<style scoped>
.funnel-chart {
  @apply grid grid-cols-5 border rounded-3xl overflow-hidden;
  .funnel-chart-item {
    @apply flex items-center justify-center relative;
    .item-shadow {
      @apply absolute border-secondary/50 border-y-transparent;
    }
    .item-chart {
      @apply absolute border-secondary border-y-transparent;
    }
    .item-content {
      @apply flex w-full h-full z-10 items-center justify-center;
      .active-chart-section {
        @apply bg-primary text-lg pl-6 pr-6 rounded border-white border-2;
      }
    }
  }
  .funnel-chart-item:not(:last-child) {
    .item-content {
      @apply border-r;
    }
  }
}
</style>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
  contentItem: Object,
});

const getStyle = (item, size) => {
  let height = (size * Math.max(item.start, item.end)) / 100;
  let borderY =
    (size * (item.start + item.end - 2 * Math.min(item.start, item.end))) / 200;
  let borderL = item.start > item.end ? item.borderWidth || 100 : 0;
  let borderR = (item.borderWidth || 100) - borderL;

  return {
    "border-width": `${borderY}px ${borderR}px ${borderY}px ${borderL}px`,
    height: `${height}px`,
  };
};
</script>
