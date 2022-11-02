<template>
    <tr class="people-member-tbl-row">
        <td>{{data.created}}</td>
        <td>{{data.first_name}}</td>
        <td>{{data.last_name}}</td>
        <td class="px-4">{{data.phone}}</td>
        <td class="px-4">{{data.email}}</td>
        <td>{{data.location}}</td>
        <td>
            <btn-membership :membership="data.type" />
        </td>
        <td>
            <btn-addon :value="data.addOns" class="!rounded-full"/>
        </td>
    </tr>
</template>
<style scoped>
.people-member-tbl-row {
    @apply bg-base-100 h-14;

    td {
        @apply border-y-2 border-secondary text-center;
    }
    td:first-child {
        @apply border-l-2 rounded-l px-4;
    }
    td:last-child {
        @apply border-r-2 rounded-r px-4;
    }
}
</style>
<script setup>
const props = defineProps({
    data: Object
})
</script>
