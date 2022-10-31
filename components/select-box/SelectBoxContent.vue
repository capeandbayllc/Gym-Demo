<template>
    <div class="select-box-content">
        <slot></slot>
    </div>
</template>
<style scoped>
.select-box-content {
    @apply cursor-pointer py-2 absolute z-20 right-0 bg-base-content text-neutral border rounded text-xs min-w-full;
}
</style>
