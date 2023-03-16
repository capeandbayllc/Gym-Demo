<template>
    <div class="select-box-content">
        <slot></slot>
    </div>
</template>
<style scoped>
.select-box-content {
    @apply overflow-y-scroll cursor-pointer py-2 absolute top-0 z-20 left-0 bg-base-content text-neutral border rounded-b text-xs max-h-[200px] mt-[29px] w-full;
}

.select-box-filter-size .select-box-content {
    @apply mt-[29px];
}

</style>
