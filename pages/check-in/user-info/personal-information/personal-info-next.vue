<template>
    <simple-card class="p-4 gap-4 w-[400px]">
        <h2 class="text-md font-bold mb-4">Personal information</h2>
        <p class="px-4 text-sm mb-4">Want to add family members to help keep you accountable to your fitness goals? This is your chance to add memberships for $0 down and $17 a month.</p>
        <div class="form-control w-full max-w-xs">
            <label class="label">
                <span class="label-text">Pick the best fantasy franchise</span>
            </label>
            <select class="select select-bordered mb-6 bg-white text-black">
                <option disabled selected>Nobody - I prefer to workout alone</option>
                <option>Add 1 for $17 per month</option>
                <option>Add 2 for $34 per month</option>
                <option>Add 3 for $51 per month</option>
                <option>Add 4 for $68 per month</option>
                <option>Add 5 for $85 per month</option>
                <option>Add 6 for $102 per month</option>
            </select>
        </div>
        <p class="text-sm">*Each additional membership subject to $49 annual fee. Must be 12 and up.</p>
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