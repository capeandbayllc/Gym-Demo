<template>
    <tr class="club-table-row">
        <td><div class="text-lg font-bold">{{data.name}}</div></td>
        <td><div class="w-36 px-4">{{data.city}}, {{data.address1}}, {{data.state}} {{data.zip}}</div></td>
        <td><div class="px-3">{{data.phone}}</div></td>
        <td><div class="px-3">emailaddress@email.com</div></td>
        <td>
            <div class="px-8">
                <Button secondary size="sm">View</Button>
            </div>
        </td>
    </tr>
</template>
<style scoped>
.club-table-row {
    td {
        @apply border-y h-14 py-3;
        > div {
            @apply flex items-center justify-center text-sm border-r h-full;
        }
    }
    td:first-child {
        @apply border-l;
    }
    td:last-child {
        @apply border-r;
        > div {
            @apply border-none;
        }
    }
    @apply bg-base-100 h-14;
    
    td {
        @apply border-y-2 border-secondary px-3;
    }
    /* td:first-child {
        @apply border-l-2 rounded-l text-accent-focus;
    } */
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
.club-search-tbl-content thead{
    @apply top-0 sticky bg-neutral h-10;
}
.club-search-tbl-content th{
    @apply font-normal;
}
</style>
<script setup>
const props = defineProps({
    data: Object
})
</script>
