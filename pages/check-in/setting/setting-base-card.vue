<template>
    <simple-card class="mb-8">
        <div class="setting-base-card card-gradient-bg">
            <slot></slot>
        </div>
    </simple-card>
 </template>
<script setup>
</script>
<style>
.setting-base-card {
    @apply grid grid-cols-3 gap-6 py-4 px-10 -lg:!grid-cols-2 -md:!grid-cols-1;
    h2 {
        @apply text-center leading-10 text-lg col-span-3 -lg:col-span-2 -md:col-auto;
    }

    .secondary-input {
        @apply bg-secondary;
    }
    .neutral-input {
        @apply bg-base-content/20;
    }
    .readonly-input {
        @apply bg-transparent text-base-content/50;
    }
    .outline-input {
        @apply bg-transparent border border-secondary;
    }
    .divider {
        @apply border-b h-0 border-secondary col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-auto;
    }
}
</style>