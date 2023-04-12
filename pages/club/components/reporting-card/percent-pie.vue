<template>
  <div class="flex items-center space-x-12">
    <div class="circle-big">
      <div class="progress-bar">
        <div class="overlay">
          <div class="text relative z-10">
            {{item.percent}}%
          </div>
        </div>
        <svg class="prog relative">
          <circle class="bg" cx="45" cy="45" r="37"></circle>
          <circle :stroke="item.color" :stroke-dashoffset="230.56/100*(-item.percent-100)" class="progress" cx="45" cy="45"
                  r="37"></circle>
        </svg>
      </div>
      <div :style="{backgroundImage: item.gradient}" class="gradient"></div>
    </div>
    <div class="content flex items-center justify-between w-full">
      <div class="text-left">
        <div class="statistics">
          <span class="text-secondary text-[13px] font-bold">{{item.head}}</span>
        </div>
        <div class="amount">
          <span class="text-[30px] text-white font-bold">$ {{item.amount.toFixed(2)}}</span>
        </div>
        <div class="percent-sm">
            <span class="text-success text-[11px] flex items-center">
              <Up class="mr-2"/>
              {{item.progress}}%
            </span>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
          <span class="bg-success p-2.5 rounded-lg inline-block">
            <ArrowUp class="text-success"/>
          </span>
        <span class="text-success inline-block text-[13px] mt-2">
            +{{ item.progress2 }}%
          </span>
      </div>
    </div>
  </div>
</template>
<script setup>

import { Up } from "~/components/icons/index";
import { ArrowUp } from "~/components/icons/index";
const props = defineProps({
  item: {
    default: {},
    type: Object
  }
})

const options = {
  chart: {
    height: 280,
    type: "radialBar",
  },
  series: [70],
  chartOptions: {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        }
      },
    }
  },
};

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
/* @keyframes big {
  from {
    stroke-dashoffset: 100;
  }
  to {
    stroke-dashoffset: 160;
  }
} */
</style>
