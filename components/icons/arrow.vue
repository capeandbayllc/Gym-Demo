<template>
  <div
      class="w-fit h-fit"
      :class="{
          'rotate-90': direction === 'right',
          'rotate-0': direction === 'down',
          'rotate-[-90deg]': direction === 'left',
          '-rotate-180': direction === 'up',
      }"
  >
  <svg xmlns="http://www.w3.org/2000/svg" :width="sizeFull?'auto':'13.04'" :height="sizeFull?'auto':'7.846'" viewBox="0 0 13.04 7.846">
    <g id="Group_4650" data-name="Group 4650" transform="translate(-820.071 1255.86) rotate(-90)">
    <path id="Path_3005" data-name="Path 3005" d="M5.838,0,0,5.375l5.838,5.685" transform="translate(1254.842 832.121) rotate(-180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.4"/>
    </g>
  </svg>
  </div>
</template>
<script setup>
import { computed } from "@vue/reactivity"
const props = defineProps({
  direction: {
      type: String,
      default: "right",
  },
  sizeFull: {
      type: Boolean,
      default: false,
  }
})
</script>
