<template>
    <div
        :class="'type-' + membership"
    >
        {{membership}}
    </div>
</template>
<style scoped>
    .type-premimum {
        @apply bg-accent rounded px-4 py-1.5 font-semibold cursor-pointer;
    }
    .type-basic {
        @apply border-2 rounded font-semibold px-4 py-1.5 cursor-pointer;
    }
    .type-gold {
        @apply bg-warning/80 rounded font-semibold px-4 py-1.5 cursor-pointer;
    }
</style>
<script setup>
const props = defineProps({
    membership: String
})
</script>
