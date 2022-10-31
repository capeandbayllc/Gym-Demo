<template>
    <thead class="sticky top-0 bg-neutral text-base-content">
        <th
            v-for="column in columns"
            :key="column.field"
            class="px-3"
            :class="column.class + (rowBordered ? ' px-3' : '  px-3 border-b')"
        >
            {{ column.label }}
        </th>
    </thead>
</template>
<style scoped>
thead {
    @apply z-10;
}
</style>
<script setup>
const props = defineProps({
    columns: {
        type: Array,
        default: [],
    },
    rowBordered: {
        type: Boolean,
        default: false,
    },
});
</script>
