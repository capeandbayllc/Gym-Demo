<template>
    <simple-card class="gradient-bg grid grid-cols-2 p-4 gap-4 w-[650px] text-sm max-h-[75vh] overflow-auto">
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2 font-semibold text-lg">POS Payment Amounts</div>
        </div>
        <!-- <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full" />
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Billing Schedule Type</div>
            <select class="white-input w-full p-1 rounded-sm" v-model="paymentSchedule.billingScheduleType">
                <option value="fulltime">Paid in Full</option>
            </select>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Allow Edits to Amounts</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="paymentSchedule.editsAmount"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Billing Frequency</div>
            <select class="white-input w-full p-1 rounded-sm" v-model="paymentSchedule.billingFrequency">
                <option value="onetime">One Time</option>
            </select>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div>Availability</div>
            <div class="flex items-center mt-3">
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />Instore</div>
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />Online</div>
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />In App</div>
            </div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">*Term in Months</div>
            <select class="white-input w-full p-1 rounded-sm" v-model="paymentSchedule.terms">
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="9">9 Months</option>
                <option value="12">12 Months</option>
            </select>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full flex">
            <div class="mr-4 min-w-[35%]">
                <div class="mb-2">Auto Renew</div>
                <select class="white-input w-full p-1 rounded-sm" v-model="paymentSchedule.autoRenew">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
            </select>
            </div>
            <div>
                <div class="mb-2">Introductory Offer</div>
                <select class="white-input w-full p-1 rounded-sm" v-model="paymentSchedule.introductoryOffer">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto mt-5 w-full">
            <div class="mb-2 text-lg">Preferred First Due Date</div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full" />
        <div class="col-span-2 -lg:col-span-2 -md:col-auto mx-auto w-full flex">
            <div class="mr-4 min-w-[70%]">
                <div class="mb-2">Choose how the preferred due day will be determined</div>
                <select class="white-input w-full p-1 rounded-sm" v-model="paymentSchedule.chooesePreferredDueDay">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div>
                <div class="mb-2">Date</div>
                <Datepicker class="custom-date-input" v-model="paymentSchedule.planDate" :enable-time-picker="false" auto-apply></Datepicker>
            </div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto mt-5 w-full">
            <div class="mb-2 text-lg">Last Payment</div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full" />
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Member pays last payment at Signing</div>
            <select class="white-input w-full p-1 rounded-sm" v-model="paymentSchedule.memberPaySigning">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full" /> -->
    </simple-card>
    
</template>
<script setup>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const paymentSchedule = ref({
    billingScheduleType:"fulltime",
    editsAmount:"",
    billingFrequency: "onetime",
    inStore: "",
    online: "",
    inApp: "",
    terms: "12",
    introductoryOffer: "yes",
    autoRenew: "no",
    chooesePreferredDueDay: "yes",
    planDate: "",
    memberPaySigning: "yes"
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