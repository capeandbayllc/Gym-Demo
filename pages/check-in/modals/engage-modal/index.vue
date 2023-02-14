<template>
    <simple-card
        title="Engage"
    >
    <div class="bg-base-200 flex flex-col items-center py-4 px-32">
        <div class="flex flex-row space-x-9">
            <div class="engage-contact-option" v-for="{icon}, ndx in contactMethods" :key="ndx">
                <component :is="icon" class="cursor-pointer"/>
            </div>
        </div>
        <div>
            <h3 class="font-semibold text-xl">Communication History</h3>
            <data-table
                :columns="columns"
                :data="mock"
                :row-component="EngageTableRow"
                class="h-96 overflow-y-auto"
            />
        </div>
    </div>
    </simple-card>
</template>

<script setup>
import { CallIcon, EmailIcon, MessageIcon } from '~~/components/icons';
import EngageTableRow from './engage-table-row.vue'

const contactMethods = [{
    icon: CallIcon
}, {
    icon: EmailIcon
}, {
    icon: MessageIcon
}]

const columns = [{
        label: 'Type',
        class: 'text-secondary text-left',
    }, {
        label: 'Date/Time',
        class: 'text-secondary text-left',
    }, {
        label: 'Status',
        class: 'text-secondary text-left',
    }, {
        label: 'Completed By',
        class: 'text-secondary text-left',
    }
];

const mock = [
    {
        id: 1,
        type: 'call',
        time: '09/26/22, 12:24:44 PM',
        status: 'answered',
    }, {
        id: 2,
        type: 'call',
        time: '09/26/22, 12:24:44 PM',
        status: 'voice_mail',
    }, {
        id: 3,
        type: 'sms',
        time: '09/26/22, 12:24:44 PM',
        status: 'answered',
    }, {
        id: 4,
        type: 'e-mail',
        time: '09/26/22, 12:24:44 PM',
        status: 'answered',
    }, {
        id: 5,
        type: 'call',
        time: '09/26/22, 12:24:44 PM',
        status: 'answered',
    },
]
</script>

<style scoped>
.engage-contact-option {
    @apply flex items-center justify-center w-14 h-14 border-4 border-secondary rounded-full bg-base-300 my-9;
}
</style>