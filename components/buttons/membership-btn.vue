<template>
    <button
        class="membership-btn"
        :class="['type-' + membership , editIconOnHover ? 'edit-hover-icon': '']"
    >
        <span class="membership-status">
            {{membership}}
        </span>
        <span class="edit-icon"><edit-icon class="mb-2" /></span>
    </button>
</template>
<style scoped>
    .membership-btn {
        @apply flex items-center justify-center rounded-full font-semibold cursor-pointer capitalize h-full px-3 text-sm relative w-full;
        
        .edit-icon {
            @apply absolute h-5 w-5 invisible;
            svg {
                @apply h-full w-full;
            }
        }
        
    }
    .membership-btn.edit-hover-icon:hover {
        .membership-status {
            font-size:0;
        }
        @apply px-4;
        .edit-icon{
            @apply visible;
        }
    }
    .type-p {
        @apply bg-accent;
    }
    .type-bronze {
        @apply bg-gradient-to-b from-amber-600;
    }
    .type-silver {
        @apply bg-gradient-to-b from-slate-100;
    }
    .type-gold {
        @apply bg-gradient-to-b from-amber-200 to-amber-700;
    }
    .type-platinum {
        @apply bg-amber-400;
    }
</style>
<script setup>

import { EditIcon } from '~~/components/icons';

const props = defineProps({
    membership: String,
    editIconOnHover: {
        type: Boolean,
        default: false,
    }
})
</script>
