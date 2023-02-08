<template>
    <simple-card class="gradient-bg grid grid-cols-2 p-4 gap-4 w-[650px] text-sm max-h-[75vh] overflow-auto">
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2 font-semibold text-lg">Agreement Template</div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="flex items-center mx-2 mt-1 float-right"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />Active</div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Plan Name</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="agreementInfoForm.planName"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Allow Edits to Amounts</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="agreementInfoForm.editsAmount"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Display Name</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="agreementInfoForm.displayName"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div>Web Service Plan</div>
            <div class="flex items-center mt-3">
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />Instore</div>
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />Online</div>
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />In App</div>
            </div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Limited Availability (Membership Segment)</div>
            <select class="white-input w-full p-1 rounded-sm" v-model="agreementInfoForm.limitedAvailability">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Introductory Offer</div>
            <select class="white-input w-full p-1 rounded-sm" v-model="agreementInfoForm.introductoryOffer">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Membership Type</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="agreementInfoForm.membershipType"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Promotion Segment</div>
            <select class="white-input w-full p-1 rounded-sm" v-model="agreementInfoForm.promotionSegment">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Agreement Template</div>
                <input class="white-input w-full p-1 rounded-sm" v-model="agreementInfoForm.agreementTemplate"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Available for Presale</div>
            <select class="white-input w-full p-1 rounded-sm" v-model="agreementInfoForm.availableForPresale">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Billing System Type</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="agreementInfoForm.billingSystemType"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full flex">
            <div class="mr-4 min-w-[45%]">
                <div class="mb-2">Plan Start Date</div>
                <Datepicker class="custom-date-input" v-model="agreementInfoForm.planStartDate" :enable-time-picker="false" auto-apply></Datepicker>
            </div>
            <div>
                <div class="mb-2">Plan End Date</div>
                <Datepicker class="custom-date-input" v-model="agreementInfoForm.planEndDate" :enable-time-picker="false" auto-apply></Datepicker>
            </div>
        </div>
    </simple-card>
    
</template>
<script setup>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const agreementInfoForm = ref({
    planName:"",
    editsAmount:"",
    displayName: "",
    inStore: "",
    online: "",
    inApp: "",
    limitedAvailability: "yes",
    introductoryOffer: "yes",
    membershipType: "",
    promotionSegment: "",
    agreementTemplate: "",
    availableForPresale: "yes",
    billingSystemType: "",
    planStartDate: "",
    planEndDate: "",
})

</script>
<style scoped>
    .white-input {
        @apply bg-white text-black;
    }
</style>
<style>
    .custom-date-input {
        .dp__input {
            height: 28px;
        }
    }
</style>