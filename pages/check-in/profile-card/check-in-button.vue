<template>
    <div
        class="alert-container"
        :class="{
            'checked': modelValue
        }"
        @click="$emit('update:modelValue', !modelValue)"
    >
        <div class="checker" v-if="modelValue">
            <check-circle-icon class="checkin-icon"/>
        </div>
        <div class="text-xs font-semibold">
            CHECK IN
        </div>
    </div>
</template>
<style scoped>
.alert-container {
    @apply flex flex-row w-fit hover:flex-row-reverse items-center justify-between h-8 p-2 py-1 cursor-pointer rounded-full bg-accent-focus hover:bg-secondary text-base-300 hover:text-base-content;
    &.checked {
        @apply w-28 pr-3 pl-1 hover:pr-1 hover:pl-3;
    }
    .checker {
        @apply p-1 rounded-full;
        .checkin-icon {
            @apply border-2 border-base-300 rounded-full text-transparent;
        }
    }
    &:hover {
        .checker {
            .checkin-icon {
                @apply border-base-content;
            }
        }
    }
}

</style>
<script setup>
    import { PlusCircleIcon, CheckCircleIcon } from "~~/components/icons"
    const props = defineProps({
        modelValue: Boolean
    })
</script>
