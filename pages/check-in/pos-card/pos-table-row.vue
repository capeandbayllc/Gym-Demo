<template>
    <tr class="club-table-row">
        <td>
            <div class="pl-5 pr-8 font-semibold">
                <name-avatar
                    class="h-14 w-14 rounded-full mr-6"
                    :first-name="data.name.split(' ')[0]"
                    :last-name="data.name.split(' ')[1]"
                />
                {{data.name}}
            </div>
        </td>
        <td><div class="px-9">{{data.membership}}</div></td>
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
        @apply border-y border-secondary h-20 py-2.5;
        > div {
            @apply flex items-center justify-center text-sm border-r border-secondary h-full;
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
