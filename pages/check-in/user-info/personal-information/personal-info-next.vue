<template>
    <div :class="modalClass">
        <simple-card bg-gradient class="p-4 gap-4 w-[400px] width-full">
            <h2 class="text-md font-bold mb-4">Personal information</h2>
            <p class="px-4 text-sm mb-4">Want to add family members to help keep you accountable to your fitness goals? This is your chance to add memberships for $0 down and $17 a month.</p>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">How many members would you like to add?</span>
                </label>
                <select-box
                    :items="cities"
                    label="Nobody - I prefer to work alone"
                    :showSearch="false"
                    :showClearList="false"
                    :bgSecondaryOpened="false"
                    @onChange=""
                    classButton="my-[5px] mx-[10px]"
                    class="bg-[#5a5a5a] text-white rounded-[10px] w-full">
                </select-box>
    
            </div>
            <p class="text-sm mt-4">*Each additional membership subject to $49 annual fee. Must be 12 and up.</p>
        </simple-card>
        <slot></slot>
    </div>
</template>
<script setup>

const props = defineProps({
    modalClass:{
        type: String
    }
})

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

const cities = ref([
    {
        label:"Add 1 for $17 per month",
        value:"1"
    },
    {
        label:"Add 2 for $34 per month",
        value:"2"
    },
    {
        label:"Add 3 for $51 per month",
        value:"3"
    },
    {
        label:"Add 4 for $68 per month",
        value:"4"
    },
    {
        label:"Add 5 for $85 per month",
        value:"5"
    },
    {
        label:"Add 6 for $102 per month",
        value:"6"
    }
])

</script>
<style scoped>
    .white-input {
        @apply bg-white text-black;
    }
    
</style>