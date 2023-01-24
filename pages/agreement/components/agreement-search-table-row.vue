<template>
    <tr class="people-lead-tbl-row">
        <td>{{data.name}}</td>
        <td>{{data.agreement_type}}</td>
        <td>{{data.schedule_type}}</td>
        <td> <input type="checkbox" class="toggle toggle-info align-middle mr-2" v-model="status" :checked="data.status == 'Active'"/> <span class="align-middle">{{data.status}}</span></td>
        <td>{{data.created_by}}</td>
        <td>{{data.availability}}</td>
        <td><AddAgreementIcon class="inline-block align-middle mr-2 cursor-pointer"/> <EditAgreementIcon class="inline-block align-middle cursor-pointer"/></td>
        <td>{{data.date_created}}</td>
    </tr>
</template>
<style scoped>
.people-lead-tbl-row {
    @apply bg-base-100 h-14;
    td {
        @apply border-y-2 border-secondary text-left px-3 w-min text-sm;
    }
    td:first-child {
        @apply border-l-2 rounded-l;
    }
    td:nth-child(2){
        @apply text-accent-focus/60;
    }
    td:last-child {
        @apply border-r-2 rounded-r capitalize;
    }
    .membership-btn {
        @apply flex items-center justify-center rounded text-sm cursor-pointer h-full px-2 py-1;
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
import { AddAgreementIcon, EditAgreementIcon } from "@/components/icons";
const props = defineProps({
    data: Object
});
const status =  ref(props.data.status=='Active');

</script>
