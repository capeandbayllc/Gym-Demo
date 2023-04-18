<template>
    <tr class="document-tbl-row">
        <td>{{data.segment}}</td>
        <td width="50px">
            <membership-status :status="data.type"/>
        </td>
        <td>{{data.created}}</td>
        <td>
            <div class="flex items-center">
                <img src="/checkin/kevin.png" class="w-7 rounded-full mr-2"/> {{data.first_name}} {{data.last_name}}
            </div>
        </td>
    </tr>
</template>
<style scoped>
.document-tbl-row {
    @apply bg-base-100 h-14;

    td {
        @apply border-y-2 border-secondary text-left px-3;
    }
    td:first-child {
        @apply border-l-2 rounded-l;
    }
    td:last-child {
        @apply border-r-2 rounded-r capitalize;
    }
    .type-warning {
        @apply bg-orange-400;
    }
    .type-secondary {
        @apply bg-secondary;
    }
}
</style>
<script setup>
import MembershipStatus from '~~/components/buttons/membership-status.vue';
const props = defineProps({
    data: Object
})
</script>
