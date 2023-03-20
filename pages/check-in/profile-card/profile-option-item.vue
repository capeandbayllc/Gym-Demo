<template>
    <div
        class="profile-option-item"
        :class="{
            selected: modelValue,
        }"
        @click="$emit('update:modelValue', !modelValue)"
    >
        <div class="alert-badge" v-if="unread">{{ unread }}</div>
        <div class="checker" v-if="!modelValue"></div>
        <div
            class="profile-option-item-label"
            :class="{
                selected: modelValue,
            }"
        >
            {{ label }}
        </div>
    </div>
</template>
<style scoped>
.profile-option-item {
    @apply relative flex flex-row cursor-pointer text-base lg:text-lg m-1 transition-all duration-150 ease-linear w-auto;
    .checker {
        @apply w-5 h-5 min-w-[24px] min-h-[24px] lg:w-7 lg:h-7 bg-secondary rounded-full mr-4 border-2 my-auto transition-all duration-150 ease-linear;
    }

    .profile-option-item-label {
        @apply text-[0.9rem];
    }
    .alert-badge {
        @apply badge-error rounded-full flex w-4 h-4 text-xs items-center justify-center absolute transition-all duration-75 ease-linear;
        left: -0.5rem;
        top: -0.375rem;
    }

    &:hover:not(.selected) {
        @apply opacity-50;
        .checker {
            @apply bg-transparent;
        }
        .alert-badge {
            @apply badge-error flex items-center justify-center w-5 h-5 min-w-[24px] min-h-[24px] lg:w-7 lg:h-7 text-xs top-0 left-0 border-2 border-white;
        }
    }
}
.profile-option-item.selected {
    @apply relative bg-secondary h-8 rounded-full w-full text-center border-2;
}

.profile-option-item-label.selected {
    @apply !text-[0.9rem] mx-auto;
}
</style>
<script setup>
const props = defineProps({
    modelValue: Boolean,
    label: String,
    unread: {
        type: Number,
        default: 0,
    },
});
</script>
