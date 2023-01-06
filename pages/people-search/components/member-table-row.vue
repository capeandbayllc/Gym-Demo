<template>
    <tr class="people-member-tbl-row">
        <td>{{data.created}}</td>
        <td>{{data.first_name}}</td>
        <td>{{data.last_name}}</td>
        <td class="px-4">{{data.phone}}</td>
        <td class="px-4">{{data.email}}</td>
        <td>{{data.location}}</td>
        <td>
            <membership-btn :membership="data.type" class="text-sm"/>
        </td>
        <td>
            <addon-btn :value="data.addOns" class="!rounded-full"/>
        </td>
        <td> 
            <div class="flex items-center">
                <img src="/ellypsis.svg" class="w-7 h-7"/>
            </div>
        </td>
    </tr>
</template>
<style scoped>
.people-member-tbl-row {
    @apply bg-base-100 h-14;

    td {
        @apply border-y-2 border-secondary text-center px-4;
    }
    td:first-child {
        @apply border-l-2 rounded-l;
    }
    td:last-child {
        @apply border-r-2 rounded-r;
    }
}
</style>
<script setup>
import MembershipBtn from '~~/components/buttons/membership-btn.vue';
import AddonBtn from '~~/components/buttons/addon-btn.vue';
const props = defineProps({
    data: Object
})
</script>
