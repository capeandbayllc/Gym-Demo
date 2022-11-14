<template>
    <div
        class="book-checker-container"
        :class="{
            'checked': modelValue
        }"
        @click="$emit('update:modelValue', !modelValue)"
    >
        <div class="checker">
            <plus-circle-icon v-if="!modelValue"/>
            <check-circle-icon v-else/>
        </div>
        <div>
            {{ modelValue ? "Booked" : "Book Event" }}
        </div>
    </div>
</template>
<style scoped>
.book-checker-container {
    @apply flex flex-row items-center space-x-2 w-28 cursor-pointer;
    .checker {
        @apply p-1 bg-accent-focus rounded-full;
    }
}
.book-checker-container.checked {
    @apply rounded-full bg-accent-focus;
}
</style>
<script setup>
    import { PlusCircleIcon, CheckCircleIcon } from "~~/components/icons"
    const props = defineProps({
        modelValue: Boolean
    })
</script>
