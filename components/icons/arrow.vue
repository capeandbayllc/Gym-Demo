<template>
    <span
        :class="{
            'rotate-[-270deg]': direction === 'right',
            'rotate-0': direction === 'down',
            'rotate-90': direction === 'left',
            '-rotate-180': direction === 'up',
        }"
    >
		<svg xmlns="http://www.w3.org/2000/svg" width="13.04" height="7.846" viewBox="0 0 13.04 7.846">
		  <g id="Group_4650" data-name="Group 4650" transform="translate(-820.071 1255.86) rotate(-90)">
			<path id="Path_3005" data-name="Path 3005" d="M5.838,0,0,5.375l5.838,5.685" transform="translate(1254.842 832.121) rotate(-180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.4"/>
		  </g>
		</svg>
    </span>
</template>
<script setup>
import { computed } from "@vue/reactivity"
const props = defineProps({
    direction: {
        type: String,
        default: "right",
    },
    size: {
        type: String,
        default: "sm",
    },
})

const transform = computed({
    get() {
        return props.size === "xs" ? "scale(0.7)" : "scale(1)"
    },
})
</script>
