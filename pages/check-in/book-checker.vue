<template>
    <div
        class="book-checker-container"
        :class="{
            checked: modelValue,
        }"
        @click="$emit('update:modelValue', !modelValue)"
    >
        <div class="checker">
            <span class="w-[18px] h-[18px] flex flex-col justify-center">
                <plus-circle-icon v-if="!modelValue" />
                <check-circle-icon v-else />
            </span>
        </div>
        <div class="font-normal" :class="{ 'text-black': modelValue }">
            {{ modelValue ? "Booked" : "Book Event" }}
        </div>
    </div>
</template>
<style scoped>
.book-checker-container {
    @apply flex flex-row items-center p-1 rounded-full space-x-2 w-28 cursor-pointer transition-all duration-300 ease-linear;
    .checker {
        @apply bg-accent-focus rounded-full;
    }
}
.book-checker-container.checked {
    @apply bg-accent-focus;
}
</style>
<script setup>
import { PlusCircleIcon, CheckCircleIcon } from "~~/components/icons";
const props = defineProps({
    modelValue: Boolean,
});
</script>
