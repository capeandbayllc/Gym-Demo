<template>
    <tr class="people-lead-tbl-row">
        <td>{{data.agreementName}}</td>
        <td>{{data.type}}</td>
        <td>{{data.paymentSchedule?.billingScheduleType == '' ? 'None' : (data.paymentSchedule.billingScheduleType == 'fulltime' ? 'Paid in full' : 'Term')}}</td>
        <td>
            <div class="relative">
                <button class="absolute top-0 left-0 w-12 h-full opacity-0" @click="changeStatus('checkboxStatus'+data.id)"></button>
                <input type="checkbox" class="toggle toggle-info align-middle mr-2" :id="'checkboxStatus'+data.id" :ref="'checkboxStatus'+data.id" v-model="status"/> <span class="align-middle">{{status?'Active':'Inactive'}}</span>
            </div>
        </td>
        <td>{{data.createdBy}}</td>
        <td>{{data.agreementTemplate.limitedAvailability == 'yes' ? 'Yes' : 'No'}}</td>
        <td><AddAgreementIcon class="inline-block align-middle mr-2 cursor-pointer"/> <EditAgreementIcon class="inline-block align-middle cursor-pointer"/></td>
        <td>{{data.dateCreated}}</td>
    </tr>
</template>
<style scoped lang="postcss">
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
    .type-warning {
        @apply bg-warning/80;
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

const emit = defineEmits(['handle']);

const status =  ref(props.data.status=='Active');

const changeStatus = (id)=>{
    if(status.value == true){
        emit('handle', id);
    }else{
        document.getElementById(id).click()
    }
};
</script>
