<template>
    <div
        class="profile-option-item"
        :class="{
            'selected': modelValue
        }"
        @click="$emit('update:modelValue', !modelValue)"
    >
        <div class="checker" v-if="!modelValue"></div>
        <div>{{label}}</div>
    </div>
</template>
<style scoped>
.profile-option-item {
    @apply flex flex-row cursor-pointer text-lg font-semibold;
    .checker {
        @apply w-6 h-6 bg-secondary rounded-full mr-4;
        box-shadow: 0 0 0 4px hsl(var(--bc));
    }
}
.profile-option-item.selected {
    @apply px-4 bg-secondary h-7 rounded rounded-full w-fit;
    box-shadow: 0 0 0 4px hsl(var(--bc));
}
</style>
<script setup>
    const props = defineProps({
        modelValue: Boolean,
        label: String
    })
</script>
