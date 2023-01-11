<template>
    <simple-card class="mb-8">
        <div class="grid grid-cols-3 gap-6 py-4 px-10 -lg:grid-cols-2">
            <h2 class="text-center leading-10 text-lg col-span-3 -lg:col-span-2">Marketing</h2>
            <div class="col-span-1 -lg:col-span-1 -md:col-span-2 mx-auto w-full">
                <div class="mb-2">Receive Emails:</div>
                <select class="select select-sm w-full rounded-sm" v-model="messagingForm.receiveEmail">
                    <option disabled selected>Emails</option>
                    <option v-for="opt in receiveEmail" :value="opt.value" :key="opt.value">{{opt.label}}</option>
                </select>
            </div>
            <div class="col-span-1 -lg:col-span-1 -md:col-span-2 mx-auto w-full">
                <div class="mb-2">Receive SMS:</div>
                <select class="select select-sm w-full rounded-sm" v-model="messagingForm.receiveSMS">
                    <option disabled selected>Text</option>
                    <option v-for="opt in receiveSMS" :value="opt.value" :key="opt.value">{{opt.label}}</option>
                </select>
            </div>
            <div class="col-span-1 -lg:col-span-1 -md:col-span-2 mx-auto w-full">
                <div class="mb-2">Receive Direct Mails:</div>
                <select class="select select-sm w-full rounded-sm" v-model="messagingForm.receiveDirectMail">
                    <option disabled selected>Direct Mails</option>
                    <option v-for="opt in receiveDirectMail" :value="opt.value" :key="opt.value">{{opt.label}}</option>
                </select>
            </div>
            <div class="col-span-1 -lg:col-span-1 -md:col-span-2 mx-auto w-full">
                <div class="mb-2">Receive Push Notifications:</div>
                <select class="select select-sm w-full  rounded-sm" v-model="messagingForm.receivePushNotifications">
                    <option disabled selected>Push Notifications</option>
                    <option v-for="opt in receivePushNotifications" :value="opt.value" :key="opt.value">{{opt.label}}</option>
                </select>
            </div>
            <div class="col-span-3 -lg:col-span-1 -md:col-span-2 mx-auto w-full text-center">
                <Button secondary size="sm" class="capitalize">Save</Button>
            </div>
        </div>
    </simple-card>
 </template>
<script setup>
const messagingForm = ref({
    receiveEmail:"",
    receiveDirectMail:"",
    receiveSMS:"",
    receivePushNotifications:''
});

const receiveEmail = [{
    value: "yes",
    label: "Yes"     
}, {
    value: "no",
    label: "No (Opt Out)"     
}];

const receiveDirectMail = [{
    value: "yes",
    label: "Yes"     
}, {
    value: "no",
    label: "No (Opt Out)"     
}];

const receiveSMS = [{
    value: "yes",
    label: "Yes"     
}, {
    value: "no",
    label: "No (Opt Out)"     
}];

const receivePushNotifications = [{
    value: "yes",
    label: "Yes"     
}, {
    value: "no",
    label: "No (Opt Out)"     
}];


</script>
<style scoped>
    .secondary-input {
        @apply bg-secondary;
    }
    .neutral-input {
        @apply bg-base-content/20;
    }
    .readonly-input {
        @apply bg-transparent text-base-content/50;
    }
    .outline-input {
        @apply bg-transparent border border-secondary;
    }
    .divider {
        @apply border-b h-0 border-secondary col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-auto;
    }
</style>