<template>
    <simple-card title="Engage" class="engage-card" closable>
        <div>
            <div
                class="text-center py-5 flex justify-center max-w-[200px] mx-auto"
            >
                <button
                    class="mx-6 h-15 w-15 border border-secondary rounded-full p-4"
                    @click="contactOption = 'call'"
                >
                    <CallIcon class="h-8 w-8" />
                </button>
                <button
                    class="mx-6 h-15 w-15 border border-secondary rounded-full p-4"
                    @click="contactOption = 'email'"
                >
                    <EmailIcon class="h-8 w-8" />
                </button>
                <button
                    class="mx-6 h-15 w-15 border border-secondary rounded-full p-4"
                    @click="contactOption = 'text'"
                >
                    <MessageIcon class="h-8 w-8" />
                </button>
            </div>
            <div>
                <h3 class="text-xl pl-6">Engage History</h3>
                <EngageHistoryTable
                    :columns="columns"
                    :items="leadsData"
                    class="p-6"
                />
            </div>
        </div>
      <Options :user="user" :show="contactOption" @on:close="contactOption = null" />
    </simple-card>
</template>
<script setup>
import { CallIcon, EmailIcon, MessageIcon } from "~~/components/icons";
import EngageHistoryTable from "./engage-history-table.vue";
import Options from "~/pages/components/contact/Options.vue";

const props = defineProps({
  user: Object
});

const contactOption = ref(null);

console.log(props.user
)
const columns = [
    {
        label: "Type",
        class: "text-secondary text-left",
    },
    {
        label: "Date/Time",
        class: "text-secondary text-left",
    },
    {
        label: "Status",
        class: "text-secondary text-left",
    },
    {
        label: "Completed By",
        class: "text-secondary text-left",
    },
];

const leadsData = [
    {
        id: 1,
        type: "Outgoing Call",
        date_time: "09/26/22 12:22:00 PM",
        status: "Answered",
        completed_by: "Kevin Buchanan",
    },
    {
        id: 2,
        type: "Outgoing Call",
        date_time: "09/26/22 12:22:00 PM",
        status: "Answered",
        completed_by: "Kevin Buchanan",
    },
    {
        id: 3,
        type: "Outgoing Call",
        date_time: "09/26/22 12:22:00 PM",
        status: "Answered",
        completed_by: "Kevin Buchanan",
    },
    {
        id: 5,
        type: "Outgoing Call",
        date_time: "09/26/22 12:22:00 PM",
        status: "Answered",
        completed_by: "Kevin Buchanan",
    },
    {
        id: 5,
        type: "Outgoing Call",
        date_time: "09/26/22 12:22:00 PM",
        status: "Answered",
        completed_by: "Kevin Buchanan",
    },
];

const outgoingCallModalRef = ref(null);
const emailModalRef = ref(null);
const smsModalRef = ref(null);
const outgoingCall = () => {
    outgoingCallModalRef.value.open();
};


const openEmailModal = () => {
    emailModalRef.value.open();
};

const saveEmail = () => {
    emailModalRef.value.close();
};
const sendEmail = () => {
    emailModalRef.value.close();
};
const openSMSModal = () => {
    smsModalRef.value.open();
};

const saveSms = () => {
    smsModalRef.value.close();
};
const sendSms = () => {
    smsModalRef.value.close();
};


const saveNow = () => {
    outgoingCallModalRef.value.close();
};
</script>

<style scoped lang="postcss">
.engage-card {
    @apply mx-auto max-w-[1120px] xl:w-[1120px] w-full;
}
</style>
