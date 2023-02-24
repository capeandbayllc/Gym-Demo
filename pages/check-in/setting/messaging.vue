<template>
    <setting-base-card>
        <h2>Messaging</h2>
        <div>
            <div class="mb-2">Email Address</div>
            <input class="neutral-input w-full p-1 rounded-sm" v-model="messagingForm.email"/>
        </div>
        <div>
            <div class="mb-2">Receive Emails:</div>
            <select class="select select-sm w-full rounded-sm w-full" v-model="messagingForm.receiveEmail">
                <option disabled selected>Emails</option>
                <option v-for="opt in receiveEmail" :value="opt.value" :key="opt.value">{{opt.label}}</option>
            </select>
        </div>
        <div>
            <div class="mb-2">Receive Text:</div>
            <select class="select select-sm w-full rounded-sm" v-model="messagingForm.receiveText">
                <option disabled selected>Text</option>
                <option v-for="opt in receiveText" :value="opt.value" :key="opt.value">{{opt.label}}</option>
            </select>
        </div>
        <div>
            <div class="mb-2">Text Number</div>
            <input class="neutral-input w-full p-1 rounded-sm" v-model="messagingForm.textNumber"/>
        </div>
        <div class="col-span-3 -lg:!col-span-2 -md:!col-auto mx-auto w-full text-center">
            <Button secondary size="sm" class="capitalize">Save</Button>
        </div>
    </setting-base-card>
 </template>
<script setup>
import SettingBaseCard from './setting-base-card.vue'
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