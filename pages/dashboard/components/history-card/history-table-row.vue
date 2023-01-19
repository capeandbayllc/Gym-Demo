<template>
    <tr class="history-table-row">
        <td>
            <div class="w-44">
                {{data.date}}:
                <span class="text-secondary ml-1">{{data.time}}</span>
            </div>
        </td>
        <td>
            <div class="w-48 !justify-start">
                <img class="w-10 pr-2" src="/account.png" /> {{data.name}}
            </div>
        </td>
        <td>
            <div><span class="border rounded px-4 py-2">{{data.event}}</span></div>
        </td>
        <td>
            <div>
                <membership-btn :membership="data.membership" class="w-28"/>
            </div>
        </td>
        <td>
            <div>
                <Button secondary class="text-base-content" size="sm">View</Button>
            </div>
        </td>
    </tr>
</template>
<style scoped>
.history-table-row {
    td {
        @apply border-y border-base-content/40 text-sm;
        > div {
            @apply my-2 border-r border-base-content/40 text-center flex items-center justify-center h-10 px-4;
        }
    }
    td:last-child {
        > div {
            @apply border-none text-left;
        }
    }
}
</style>
<script setup>
import MembershipBtn from '~~/components/buttons/membership-btn.vue';

const props = defineProps({
    data: Object
})
</script>
