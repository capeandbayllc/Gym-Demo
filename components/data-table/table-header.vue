<template>
    <thead class="top-0 text-base-content">
        <th
            v-for="(column, ndx) in columns"
            :key="column.field ? column.field : ndx"
            class="px-3 capitalize"
            :class="column.class"
        >
            {{ column.label ? column.label: column }}
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
});
</script>
