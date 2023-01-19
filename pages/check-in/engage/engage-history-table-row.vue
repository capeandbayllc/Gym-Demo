<template>
    <tr class="engage-history-tbl-row">
        <td>{{data.type}}</td>
        <td>{{data.date_time}}</td>
        <td><div class="w-fit border border-white px-4 py-1 rounded-md">{{data.status}}</div></td>
        <td>{{data.completed_by}}</td>
        <td><Button size="sm" secondary>View</Button></td>
    </tr>
</template>
<style scoped>
.engage-history-tbl-row {
    @apply bg-black h-14;

    td {
        @apply border-y-2 border-secondary text-left px-3;
    }
    td:first-child {
        @apply border-l-2 rounded-l;
    }
    td:last-child {
        @apply border-r-2 rounded-r capitalize;
    }
    .membership-btn {
        @apply flex items-center justify-center rounded text-sm cursor-pointer h-full px-2 py-1;
    }
    .type-warning {
        @apply bg-orange-400;
    }
    .type-secondary {
        @apply bg-secondary;
    }
}
</style>
<style>
    .people-search-tbl-content thead {
        @apply top-0 sticky bg-black h-10;
    }
</style>
<script setup>
const props = defineProps({
    data: Object
})
</script>
