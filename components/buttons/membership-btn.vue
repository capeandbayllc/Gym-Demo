<template>
    <div
        class="membership-btn"
        :class="'type-' + membership"
    >
        {{membership}}
    </div>
</template>
<style scoped>
    .membership-btn {
        @apply flex items-center justify-center rounded font-semibold cursor-pointer uppercase h-full px-5 py-1;
    }
    .type-premimum {
        @apply bg-accent;
    }
    .type-premium {
        @apply bg-accent;
    }
    .type-basic {
        @apply border-2;
    }
    .type-gold {
        @apply bg-warning/80;
    }
</style>
<script setup>
const props = defineProps({
    membership: String
})
</script>
