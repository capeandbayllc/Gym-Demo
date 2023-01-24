<template>
    <div
        class="membership-btn"
        :class="['type-' + membership , editIconOnHover ? 'edit-hover-icon': '']"
    >
    {{membership}}
    
    <span class="edit-icon"><empty-file-icon class="mb-2" /></span>
    </div>
</template>
<style scoped>
    .membership-btn {
        @apply flex items-center justify-center rounded-full font-semibold cursor-pointer capitalize h-full px-3 text-sm relative;
        
        .edit-icon{
            @apply absolute h-[20px] w-[20px] invisible;
            svg {
                @apply h-full w-full;
            }
        }
        
    }
    .membership-btn.edit-hover-icon {
        &:hover {
            font-size:0;
            @apply px-4;
            .edit-icon{
                @apply visible;
            }
        }
    }
    .type-p {
        @apply bg-accent;
    }
    .type-premium {
        @apply bg-amber-400;
    }
    .type-basic {
        @apply border-2;
    }
    .type-gold {
        @apply bg-warning/80;
    }
</style>
<script setup>

import { EmptyFileIcon } from '~~/components/icons';

const props = defineProps({
    membership: String,
    editIconOnHover: {
        type: Boolean,
        default: false,
    }
})
</script>
