<template>
    <button
        class="membership-btn"
        :class="['type-' + membership , editIconOnHover ? 'edit-hover-icon': '']"
    >
        <span class="membership-status">
            {{membership}}
        </span>
        <span class="edit-icon hidden"><edit-icon class="mb-2" /></span>
    </button>
</template>
<style scoped lang="postcss">
    .membership-btn {
        @apply flex items-center justify-center capitalize btn btn-xs w-full rounded-xl;

        .edit-icon {
            @apply absolute h-5 w-5;
            svg {
                @apply h-full w-full;
            }
        }
    }
    .type-p {
        @apply bg-warning;
    }
    .type-bronze {
        @apply bg-amber-600 text-white hover:bg-amber-600 border-amber-600;
    }
    .type-silver {
        @apply bg-slate-200 text-zinc-800 hover:bg-slate-200 border-slate-200;
    }
    .type-gold {
        @apply bg-amber-200 text-amber-900 hover:bg-amber-200 border-amber-200;
    }
    .type-platinum {
        @apply text-white bg-amber-500 hover:bg-amber-500 border-amber-500;
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
