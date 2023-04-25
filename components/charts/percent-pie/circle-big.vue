<template>
  <div class="circle-big">
    <div class="progress-bar">
      <div class="overlay">
        <div class="text relative z-10">{{ item.percent }}%</div>
      </div>
      <svg class="prog relative">
        <circle class="bg" cx="45" cy="45" r="37"></circle>
        <circle
          :stroke="item.color"
          :stroke-dashoffset="(230.56 / 100) * (-item.percent - 100)"
          class="progress"
          cx="45"
          cy="45"
          r="37"
        ></circle>
      </svg>
    </div>
    <div :style="{ backgroundImage: item.gradient }" class="gradient"></div>
  </div>
</template>
<script setup>
const props = defineProps({
  item: {
    default: {},
    type: Object,
  },
});
</script>
<style lang="postcss">
.circle-big {
  @apply relative;
}

.circle-big .gradient {
  @apply absolute top-[5px] left-[6px] z-0 w-[79px] h-[79px] rounded-[50%];
}

.circle-big .overlay {
  @apply absolute w-full h-full flex justify-center items-center;
}

.circle-big .text {
  @apply text-[20px] font-bold text-white;
}

.circle-big .prog {
  @apply w-[90px] h-[90px] relative z-20;
}

.circle-big .bg {
  @apply fill-transparent stroke-1 stroke-white;
}

.circle-big .progress {
  @apply fill-none stroke-[6px] transform -rotate-90;
  stroke-linecap: round;
  stroke-dasharray: 230.56;
  transform-origin: 50% 50%;
  animation: big 1.5s ease-in-out;
}
</style>
