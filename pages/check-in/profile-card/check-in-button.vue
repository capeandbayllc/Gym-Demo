<template>
    <div
        class="alert-container transition-all duration-150 ease-linear"
        :class="{
            checked: modelValue,
        }"
        @click="$emit('update:modelValue', !modelValue)"
    >
        <div
            class="checker"
            :class="{
                checked: modelValue,
            }"
        >
            <check-circle-icon class="checkin-icon" />
        </div>
        <div class="text-xs my-auto">CHECK IN</div>
        <span></span>
    </div>
</template>
<style scoped>
.alert-container {
    @apply flex flex-row w-fit items-center gap-3 mx-auto h-8 px-1 py-1 cursor-pointer rounded-full bg-accent-focus hover:bg-secondary text-base-300 hover:text-base-content;
    &.checked {
        @apply w-28;
    }
    .checker {
        @apply rounded-full w-0 h-0 overflow-hidden transition-all duration-150 ease-linear;

        &.checked {
            @apply w-[22px] h-[22px];
        }
        .checkin-icon {
            @apply border-2 border-base-300 rounded-full text-transparent transition-all duration-150 ease-linear;
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
import { PlusCircleIcon, CheckCircleIcon } from "~~/components/icons";
const props = defineProps({
    modelValue: Boolean,
});
</script>
