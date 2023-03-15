<template>
    <div class="flex flex-col gap-1" :class="width">
        <label for="name" class="text-[0.8rem]">
            <span>{{ name }}</span>
            <sup v-if="required" class="text-secondary text-[0.8rem]">*</sup>
        </label>
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
    },
    required: {
        type: Boolean,
    },
    width: {
        type: String,
    },
});
</script>
