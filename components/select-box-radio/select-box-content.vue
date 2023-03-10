<template>
    <div class="select-box-content">
        <slot></slot>
    </div>
</template>
<style scoped>
.select-box-content {
    @apply overflow-y-scroll cursor-pointer py-2 absolute z-20 left-0 bg-base-content text-neutral border rounded-b text-xs w-full;
}
</style>
