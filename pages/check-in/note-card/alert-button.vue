<template>
    <div
        class="alert-container"
        :class="{
            'checked': modelValue
        }"
        @click="$emit('update:modelValue', !modelValue)"
    >
        <div class="checker">
            <!-- <plus-circle-icon v-if="!modelValue"/> -->
            <check-circle-icon v-if="modelValue"/>
        </div>
        <div class="font-normal text-xs">
            {{ modelValue ? "Alert" : "Create Alert" }}
        </div>
    </div>
</template>
<style scoped>
.alert-container {
    @apply flex flex-row items-center space-x-2 w-fit pr-4 cursor-pointer bg-white rounded-full text-black;
    .checker {
        @apply p-1 rounded-full;
        /* bg-accent-focus */
    }
    &.checked {
        @apply bg-[#ff0000] border border-white !text-white;
    }
}

</style>
<script setup>
    import { PlusCircleIcon, CheckCircleIcon } from "~~/components/icons"
    const props = defineProps({
        modelValue: Boolean
    })
</script>
