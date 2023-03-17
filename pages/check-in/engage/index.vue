<template>
    <simple-card title="Engage" class="engage-card" closable>
        <div>
            <div class="text-center py-5 flex justify-center">
                <button class="mx-6 h-15 w-15 border border-secondary rounded-full p-4" @click="outgoingCall"><CallIcon class="h-full w-full"/></button>
                <button class="mx-6 h-15 w-15 border border-secondary rounded-full p-4" @click="openEmailModal"><EmailIcon class="h-full w-full"/></button>
                <button class="mx-6 h-15 w-15 border border-secondary rounded-full p-4" @click="openSMSModal"><MessageIcon class="h-full w-full"/></button>
            </div>
            <div>
                <h3 class="text-xl pl-6">Engage History</h3>
                <engageHistoryTable :columns="columns" :items="leadsData" class="p-6"/>
            </div>
        </div>
        <daisy-modal ref="outgoingCallModalRef">
            <!-- <outgoing-call-modal @callNow="showInCallModal" @close="closeOutgoingCall"></outgoing-call-modal> -->
            <MakeCall  @close="closeOutgoingCall" @callNow="showInCallModal" @saveNow="saveNow"/>
        </daisy-modal>
        <daisy-modal ref="emailModalRef">
            <EmailModal @close="closeEmailModal"/>
        </daisy-modal>
        <daisy-modal ref="smsModalRef">
            <SMSModal @close="closeSMSModal"/>
        </daisy-modal>
    </simple-card>
</template>
<script setup>
import { CallIcon,EmailIcon,MessageIcon } from '~~/components/icons';
import engageHistoryTable from './engage-history-table.vue';
import OutgoingCallModal from '../../call-user/components/outgoing-call-modal.vue';
import EmailModal from './email.vue';
import SMSModal from './message.vue';
import MakeCall from '../side-car-split/make-call.vue';

const columns = [
    {
        label: "Type",
        class: "text-secondary text-left"
    },
    {
        label: "Date/Time",
        class: "text-secondary text-left"
    },
    {
        label: "Status",
        class: "text-secondary text-left"
    },
    {
        label: "Completed By",
        class: "text-secondary text-left"
    }
];

const leadsData = [
    {
        id: 1,
        type:"Outgoing Call",
        date_time:"09/26/22 12:22:00 PM",
        status:"Answered",
        completed_by:"Kevin Buchanan"
    },
    {
        id: 2,
        type:"Outgoing Call",
        date_time:"09/26/22 12:22:00 PM",
        status:"Answered",
        completed_by:"Kevin Buchanan"
    },
    {
        id: 3,
        type:"Outgoing Call",
        date_time:"09/26/22 12:22:00 PM",
        status:"Answered",
        completed_by:"Kevin Buchanan"
    },
    {
        id: 5,
        type:"Outgoing Call",
        date_time:"09/26/22 12:22:00 PM",
        status:"Answered",
        completed_by:"Kevin Buchanan"
    },
    {
        id: 5,
        type:"Outgoing Call",
        date_time:"09/26/22 12:22:00 PM",
        status:"Answered",
        completed_by:"Kevin Buchanan"
    }    
];

const outgoingCallModalRef = ref(null);
const emailModalRef = ref(null);
const smsModalRef = ref(null);
const outgoingCall = ()=>{
    outgoingCallModalRef.value.open();
}
const closeOutgoingCall = ()=>{
    outgoingCallModalRef.value.close();
}

const openEmailModal = ()=>{
    emailModalRef.value.open();
}
const closeEmailModal = ()=>{
    emailModalRef.value.close();
}
const openSMSModal = ()=>{
    smsModalRef.value.open();
}
const closeSMSModal = ()=>{
    smsModalRef.value.close();
}

const showInCallModal = () => {
    outgoingCallModalRef.value.close();
};

const saveNow = () => {
    outgoingCallModalRef.value.close();
};

</script>

<style scoped>
    .engage-card{
        @apply mx-auto max-w-[1120px] xl:w-[1120px] w-full;
    }
</style>