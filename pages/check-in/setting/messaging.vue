<template>
    <simple-card class="">
        <div class="grid grid-cols-3 gap-6 py-4 px-10">
            <h2 class="text-center leading-10 text-lg col-span-3">Messaging</h2>
            
            <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                <div class="mb-2">Email Address</div>
                <input class="neutral-input w-full p-1 rounded-sm" v-model="messagingForm.email"/>
            </div>
            <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                <div class="mb-2">Receive Emails:</div>
                <select class="select select-sm w-full max-w-xs rounded-sm" v-model="messagingForm.receiveEmail">
                    <option disabled selected>Emails</option>
                    <option v-for="opt in receiveEmail" :value="opt.value" :key="opt.value">{{opt.label}}</option>
                </select>
            </div>
            <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                <div class="mb-2">Receive Text:</div>
                <select class="select select-sm w-full max-w-xs rounded-sm" v-model="messagingForm.receiveText">
                    <option disabled selected>Text</option>
                    <option v-for="opt in receiveText" :value="opt.value" :key="opt.value">{{opt.label}}</option>
                </select>
            </div>
            <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                <div class="mb-2">Text Number</div>
                <input class="neutral-input w-full p-1 rounded-sm" v-model="messagingForm.textNumber"/>
            </div>
            <div class="col-span-3 -lg:col-span-2 -md:col-auto mx-auto w-full text-center">
                <Button secondary size="sm" class="capitalize">Save</Button>
            </div>
        </div>
    </simple-card>
 </template>
<script setup>
const messagingForm = ref({
    email:"",
    receiveEmail:"",
    receiveText:"",
    textNumber:''
});

const receiveEmail = [{
    value: "yes",
    label: "Yes"     
}, {
    value: "no",
    label: "No (Opt Out)"     
}];

const receiveText = [{
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