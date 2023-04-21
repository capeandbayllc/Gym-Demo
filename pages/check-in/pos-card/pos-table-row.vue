<template>
    <tr class="club-table-row">
        <td>
            <div class="px-4 font-semibold">
                {{data.name}}
            </div>
        </td>
        <td><div class="px-4">
            ${{data.price}}
        </div></td>
        <td>
            <div class="px-4">
                {{data.amount}}
            </div>
        </td>
    </tr>
</template>
<style scoped lang="postcss">
.club-table-row {
    td {
        @apply border-y border-secondary h-12 py-2.5 bg-base-100/60;
        > div {
            @apply flex items-center justify-center text-sm border-r border-secondary;
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
