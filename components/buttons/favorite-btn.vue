<template>
    <span
        class="favorite-btn"
        :class="{
            'text-secondary': modelValue,
            'text-neutral-content': !modelValue,
        }"
        @click="$emit('update:modelValue', !modelValue)"
    >
        &#9733;
    </span>
</template>
<style scoped>
.favorite-btn {
    @apply text-2xl select-none;
}
</style>
<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: true,
    },
});
</script>
