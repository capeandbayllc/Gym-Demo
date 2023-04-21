<template>
    <button
        class="status-btn"
        :class="['type-' + status , editIconOnHover ? 'edit-hover-icon': '']"
    >
        <span class="status-status">
            {{status}}
        </span>
        <span class="edit-icon hidden"><edit-icon class="mb-2" /></span>
    </button>
</template>
<style scoped>
    .status-btn {
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
        @apply bg-warning/10 text-base-content hover:bg-warning/10 border-warning/70;
    }
    .type-silver {
        @apply bg-base-content/90 text-base-100 hover:bg-base-content/90 hover:border-base-content border-base-300;
    }
    .type-gold {
        @apply bg-warning/90 text-base-100 hover:bg-warning/90 border-warning/90;
    }
    .type-platinum {
        @apply text-white bg-warning/40 hover:bg-warning/40 border-warning/80;
    }
</style>
<script setup>

import { EditIcon } from '~~/components/icons';

const props = defineProps({
    status: String,
    editIconOnHover: {
        type: Boolean,
        default: false,
    }
})
</script>
