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
    </div>
</template>
<style scoped>
.alert-container {
    @apply flex flex-row w-fit items-center gap-3 mx-auto h-8 px-2 py-1 cursor-pointer rounded-full bg-accent-focus text-base-300;
    .checker {
        @apply rounded-full overflow-hidden transition-all duration-150 ease-linear;
        .checkin-icon {
            @apply border-2 border-base-300 rounded-full text-transparent transition-all duration-150 ease-linear;
        }
    }
    &:hover, &.checked {
       @apply flex-row-reverse text-base-content bg-secondary;
        .checker {
            .checkin-icon {
               @apply border-base-content;
               :deep(path) {
                 stroke: white !important;
               }
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
