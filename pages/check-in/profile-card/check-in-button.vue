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
            <check-circle-icon v-if="modelValue" class="text-accent-focus border border-black rounded-full"/>
        </div>
        <div class="text-xs font-semibold">
            CHECK IN
        </div>
    </div>
</template>
<style scoped>
.alert-container {
    @apply flex flex-row items-center space-x-2 h-[30px] w-fit pr-4 py-1 cursor-pointer bg-accent-focus rounded-full text-black;
    .checker {
        @apply p-1 rounded-full !bg-accent-focus;
    }
    &.checked {
        @apply bg-accent-focus text-black;
    }
}

</style>
<script setup>
    import { PlusCircleIcon, CheckCircleIcon } from "~~/components/icons"
    const props = defineProps({
        modelValue: Boolean
    })
</script>
