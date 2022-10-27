<template>
    <div
        :class="{
            'flex w-fit': true,
            'rotate-0': direction === 'right',
            'rotate-90': direction === 'down',
            'rotate-180': direction === 'left',
            '-rotate-90': direction === 'up',
        }"
    >
        <svg
            id="arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="11.949"
            height="21.668"
            viewBox="0 0 11.949 21.668"
            :transform="transform"
        >
            <rect
                width="1.5"
                height="15"
                rx="1"
                transform="translate(1.061 21.668) rotate(-135)"
                fill="currentColor"
            />
            <rect
                width="1.5"
                height="15"
                rx="1"
                transform="translate(0.281 1.061) rotate(-45)"
                fill="currentColor"
            />
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
