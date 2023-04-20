<template>
    <tr class="recent-alerts-tbl-row">
        <td>{{data.segment}}</td>
        <td>
            <div class="flex items-center">
                <img src="/checkin/kevin.png" class="w-7 rounded-full mr-2"/> {{data.first_name}}
            </div>
        </td>
        <td>{{data.last_name}}</td>
        <td>{{data.phone}}</td>
        <td>{{data.email}}</td>
        <td>{{data.location}}</td>
        <td>
            <membership-btn :membership="data.type" class="text-sm"/>
        </td>
        <td>{{data.created}}</td>
    </tr>
</template>
<style scoped lang="postcss">
.recent-alerts-tbl-row {
    @apply bg-base-100 h-14;

    td {
        @apply border-y-2 border-secondary text-left px-3;
    }
    td:first-child {
        @apply border-l-2 rounded-l text-accent-focus/60;
    }
    td:last-child {
        @apply border-r-2 rounded-r capitalize;
    }
    .membership-btn {
        @apply flex items-center justify-center rounded text-sm cursor-pointer h-full px-2 py-1;
    }
    .type-warning {
        @apply bg-warning/90;
    }
    .type-secondary {
        @apply bg-secondary;
    }
}
</style>
<script setup>
import MembershipBtn from '~~/components/buttons/membership-btn.vue';
const props = defineProps({
    data: Object
})
</script>
