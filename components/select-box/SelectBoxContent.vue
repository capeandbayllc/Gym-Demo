<template>
    <div class="select-box-content">
        <slot></slot>
    </div>
</template>
<style scoped>
.select-box-content {
    @apply overflow-y-scroll cursor-pointer py-2 absolute z-20 right-0 bg-base-content text-neutral border rounded-b text-xs min-w-full;
    max-height: 220px;
}
</style>
