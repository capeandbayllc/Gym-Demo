<template>
    <div
        class="profile-option-item"
        :class="{
            'selected': modelValue
        }"
        @click="$emit('update:modelValue', !modelValue)"
    >   
        <div class="alert-badge" v-if="unread">{{unread}}</div>
        <div class="checker" v-if="!modelValue"></div>
        <div>{{label}}</div>
    </div>
</template>
<style scoped>
.profile-option-item {
    @apply relative flex flex-row cursor-pointer text-base lg:text-lg font-semibold m-1;
    .checker {
        @apply w-5 h-5 min-w-[24px] min-h-[24px] lg:w-6 lg:h-6 bg-secondary rounded-full mr-4;
        box-shadow: 0 0 0 3px hsl(var(--bc));
    }
    .alert-badge {
        @apply badge-error rounded-full flex w-4 h-4 text-xs items-center justify-center absolute;
        left: -0.5rem;
		top: -0.375rem;
    }

    &:hover:not(.selected) {
        @apply opacity-50;
        .checker {
            @apply bg-transparent;
        }
        .alert-badge {
            @apply badge-error flex items-center justify-center w-5 h-5 min-w-[24px] min-h-[24px] lg:w-6 lg:h-6 text-xs absolute top-0 left-0;
        }
    }
}
.profile-option-item.selected {
    @apply px-4 bg-secondary h-7 rounded rounded-full w-fit;
    box-shadow: 0 0 0 3px hsl(var(--bc));
}
</style>
<script setup>
    const props = defineProps({
        modelValue: Boolean,
        label: String,
        unread: {
            type: Number,
            default: 0
        }
    })
</script>
