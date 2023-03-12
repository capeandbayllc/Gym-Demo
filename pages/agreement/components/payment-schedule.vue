<template>
    <simple-card class="gradient-bg grid grid-cols-2 p-4 gap-4 w-[650px] text-sm max-h-[75vh] overflow-auto">
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2 font-semibold text-lg">Payment Schedule</div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full" />
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Billing Schedule Type</div>
            <select-box
                :items="[
                    { value: 'fulltime', label: 'Paid in full' },
                    { value: 'term', label: 'Term' }
                ]"
                :label="paymentSchedule.billingScheduleType == '' ? 'Select' : (paymentSchedule.billingScheduleType == 'fulltime' ? 'Paid in full' : 'Term')" 
                labelOpened="Open"
                :showSearch="false"
                :showClearList="false"
                @onChange="paymentSchedule.billingScheduleType = $event"
                class="bg-white text-black rounded border border-white w-full">
            </select-box>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Allow Edits to Amounts</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="paymentSchedule.editsAmount"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Billing Frequency</div>
            <select-box
                :items="billingFrequencyItems"
                :label="billingFrequencyLabel" 
                labelOpened="Open"
                :showSearch="false"
                :showClearList="false"
                @onChange="paymentSchedule.billingFrequency = $event"
                class="bg-white text-black rounded border border-white w-full">
            </select-box>
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
            <select-box
                :items="termsItems"
                :label="termsLabel" 
                labelOpened="Open"
                :showSearch="false"
                :showClearList="false"
                @onChange="paymentSchedule.terms = $event"
                class="bg-white text-black rounded border border-white w-full">
            </select-box>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full flex">
            <div class="mr-4 min-w-[35%]">
                <div class="mb-2">Auto Renew</div>
                <select-box
                    :items="[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' }
                    ]"
                    :label="paymentSchedule.autoRenew == '' ? 'Select' : (paymentSchedule.autoRenew == 'yes' ? 'Yes' : 'No')" 
                    labelOpened="Limited Availability"
                    :showSearch="false"
                    :showClearList="false"
                    @onChange="paymentSchedule.autoRenew = $event"
                    class="bg-white text-black rounded border border-white w-full">
                </select-box>
            </div>
            <div>
                <div class="mb-2">Introductory Offer</div>
                <select-box
                    :items="[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' }
                    ]"
                    :label="paymentSchedule.introductoryOffer == '' ? 'Select' : (paymentSchedule.introductoryOffer == 'yes' ? 'Yes' : 'No')" 
                    labelOpened="Limited Availability"
                    :showSearch="false"
                    :showClearList="false"
                    @onChange="paymentSchedule.introductoryOffer = $event"
                    class="bg-white text-black rounded border border-white w-full">
                </select-box>
            </div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto mt-5 w-full">
            <div class="mb-2 text-lg">Preferred First Due Date</div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full" />
        <div class="col-span-2 -lg:col-span-2 -md:col-auto mx-auto w-full flex">
            <div class="mr-4 min-w-[70%]">
                <div class="mb-2">Choose how the preferred due day will be determined</div>
                <select-box
                    :items="[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' }
                    ]"
                    label="Anniversary Day (Day agreement is sold)" 
                    labelOpened="Limited Availability"
                    :showSearch="false"
                    :showClearList="false"
                    @onChange="paymentSchedule.chooesePreferredDueDay = $event"
                    class="bg-white text-black rounded border border-white w-full">
                </select-box>
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
            <select-box
                :items="[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' }
                ]"
                :label="paymentSchedule.memberPaySigning == '' ? 'Select' : (paymentSchedule.memberPaySigning == 'yes' ? 'Yes' : 'No')" 
                labelOpened="Limited Availability"
                :showSearch="false"
                :showClearList="false"
                @onChange="paymentSchedule.memberPaySigning = $event"
                class="bg-white text-black rounded border border-white w-full">
            </select-box>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full" />
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

const billingFrequencyItems = ref([
    { value: 'onetime', label: 'One time' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'annually', label: 'Annually' }
]);

const billingFrequencyLabel = computed(()=>{
    return paymentSchedule.value.billingFrequency == '' ? 'Select'
    : billingFrequencyItems.value.find(item => item.value == paymentSchedule.value.billingFrequency)?.label
});

const termsItems = ref([
    { value: '3', label: '3 Months' },
    { value: '6', label: '6 Months' },
    { value: '9', label: '9 Months' },
    { value: '12', label: '12 Months' },
]);

const termsLabel = computed(()=>{
    return paymentSchedule.value.terms == '' ? 'Select'
    : termsItems.value.find(item => item.value == paymentSchedule.value.terms)?.label
});


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