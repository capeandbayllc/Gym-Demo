<template>
    <simple-card class="grid grid-cols-2 p-4 gap-4 w-[600px] text-sm max-h-[70vh] overflow-auto">
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">First Name</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="personalInfoForm.firstName"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Last Name</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="personalInfoForm.lastName"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Birth Date</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="personalInfoForm.birthDate"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full flex items-center">
            <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />Male</div>
            <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />Female</div>
            <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />Other</div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Home Address 1*</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="personalInfoForm.homeAddress1"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Home Address 2</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="personalInfoForm.homeAddress2"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">City*</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="personalInfoForm.city"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full flex">
            <div class="mr-4 w-[80%]">
                <div class="mb-2">State*</div>
                <input class="white-input w-full p-1 rounded-sm" v-model="personalInfoForm.state"/>
            </div>
            <div>
                <div class="mb-2">Zip Code*</div>
                <input class="white-input w-full p-1 rounded-sm" v-model="personalInfoForm.zipCode"/>
            </div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Emergency Contact Name</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="personalInfoForm.emergencyContactName"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Emergency Contact Phone</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="personalInfoForm.emergencyContactPhone"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Mobile Phone*</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="personalInfoForm.mobilePhone"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Email</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="personalInfoForm.email"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full flex justify-center items-center text-xs">
            <input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked /> 
            Send me promotional texts
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full flex justify-center items-center text-xs">
            <input type="checkbox" v-model="sendMePromotionalEmails" class="toggle toggle-info toggle-sm mr-2" /> 
            Send me promotional emails
        </div>
        <p class="col-span-2">Yes! I would like a Fitness Club Consultant to follow up with me regarding a membership by text message and/or cell phone call; I also would like to receive other offers from Fitness Club via text message and/or cell phone call. By checking the box, I therefore agree to receive autodialed and manually dialed advertising text messages and cell phone calls from Fitness Club and its affiliates to the mobile phone number provided here. I understand that my consent to receive promotional autodialed and manually dialed text messages and/or phone calls is not a condition of purchasing goods and services from Fitness Club. Message and data rates may apply. I understand that I may withdraw my consent at any time by texting STOP to a text message or by informing the calling party during a phone call. Fitness Club has no intention of selling your personal information. Florida** law requires businesses to provide an alternate form of opt-out requests via email. If you are a Nevada resident, you may submit such opt-out requests to info@fitnessclub.com. To be effective, your request must include your full name, address, phone number, and email.</p>
    </simple-card>
    
</template>
<script setup>

const personalInfoForm = ref({
    firstName:"",
    lastName:"",
    birthDate: "",
    male: "",
    female: "",
    other: "",
    homeAddress1: "",
    homeAddress2: "",
    city: "",
    state: "",
    zipCode: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    mobilePhone: "",
    email: "",
    sendMePromotionalTexts: "",
    sendMePromotionalEmails: ""
})

</script>
<style scoped>
    .white-input {
        @apply bg-white text-black;
    }
</style>