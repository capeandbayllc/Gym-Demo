<template>
    <tr class="leads-list-item">
        <td>
            <div>{{data.name}}</div>
        </td>
        <td>
            <div>{{data.membership}}</div>
        </td>
        <td>
            <div>{{data.phone}}</div>
        </td>
    </tr>
</template>
<style scoped>
.leads-list-item {
    @apply h-8 text-xs ;

    td {
        @apply border-y text-center text-sm ;
        > div {
            @apply flex items-center justify-center border-r px-1;
        }
    }
    td:first-child {
        @apply border-l rounded-l text-secondary;
        > div {
            @apply justify-center;
        }
    }
    td:last-child {
        @apply border-r rounded-r capitalize;
        > div {
            @apply border-none px-2;
        }
    }
}
</style>
<script setup>
const props = defineProps({
    data: Object
})
</script>
