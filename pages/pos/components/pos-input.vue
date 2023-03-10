<template>
    <div class="flex flex-col gap-1 w-[calc(50%-1.25rem/2)]">
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
});
</script>
