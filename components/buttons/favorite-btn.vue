<template>
    <span
        class="favorite-btn"
        :class="{
            'text-secondary': modelValue,
            'text-neutral-content': !modelValue,
        }"
        @click="$emit('update:modelValue', !modelValue)"
    >
    <star-icon clear />
    </span>
</template>
<style scoped lang="postcss">
.favorite-btn {
    @apply text-2xl select-none;
}
</style>
<script setup>
import { StarIcon } from "~/components/icons";
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: true,
    },
});
</script>
