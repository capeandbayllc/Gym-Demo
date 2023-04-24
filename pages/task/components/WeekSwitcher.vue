<template>
    <div
        class="switch-week"
        @click="$emit('onUpdate', direction === 'left' ? -1 : 1)"
    >
        <ArrowIcon :direction="direction" size="xs" />
    </div>
</template>
<style scoped>
.switch-week {
    @apply w-6 h-6 flex items-center justify-center border border-secondary rounded-full text-secondary cursor-pointer hover:border-[#fff] hover:fill-white;
}
</style>
<script setup>
import {ArrowIcon } from "@/components/icons";
const props = defineProps({
    direction: {
        type: String,
        default: "left",
    },
});
</script>
