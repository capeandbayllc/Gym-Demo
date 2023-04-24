<template>
    <tr class="people-member-tbl-row">
        <td>{{data.created}}</td>
        <td>{{data.first_name}}</td>
        <td>{{data.last_name}}</td>
        <td class="px-4">{{data.phone}}</td>
        <td class="px-4">{{data.email}}</td>
        <td>{{data.location}}</td>
        <td>
            <membership-status :status="data.type" class="text-sm"/>
        </td>
        <td>
            <addon-btn :value="data.addOns" class="!rounded-full"/>
        </td>
    </tr>
</template>
<style scoped lang="postcss">
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
import MembershipStatus from '~~/components/buttons/membership-status.vue';
import AddonBtn from '~~/components/buttons/addon-btn.vue';
const props = defineProps({
    data: Object
})
</script>
