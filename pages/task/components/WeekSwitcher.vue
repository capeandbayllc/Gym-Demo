<template>
    <div
        class="switch-week"
        @click="$emit('onUpdate', direction === 'left' ? -1 : 1)"
    >
        <arrow-icon :direction="direction" size="xs" />
    </div>
</template>
<style scoped>
.switch-week {
    @apply w-6 h-6 flex items-center justify-center border border-secondary rounded-full text-secondary cursor-pointer;
}
</style>
<script setup>
import ArrowIcon from "@/Components/Icons/Arrow.vue";
const props = defineProps({
    direction: {
        type: String,
        default: "left",
    },
});
</script>
