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
}
</style>
<script setup>
const props = defineProps({
    data: Object
})
</script>
