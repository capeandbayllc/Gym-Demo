<template>
    <thead class="top-0 text-base-content">
        <tr>
            <th
                v-for="(column, ndx) in columns"
                :key="column.field ? column.field : ndx"
                class="px-3 capitalize"
                :class="column.class"
            >
                {{ column.label ? column.label: column }}
            </th>
        </tr>
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
