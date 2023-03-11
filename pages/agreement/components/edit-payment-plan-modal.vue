<template>
    <simple-card class="gradient-bg grid grid-cols-3 p-4 gap-4 w-[650px] text-sm max-h-[75vh] overflow-auto">
        <div class="col-span-3 mx-auto w-full">
            <div class="mb-2 font-semibold text-lg">Edit Payment Plan: Basic 12 Month (Part 2)</div>
        </div>
        <div class="col-span-3 w-2/4">
            <div class="mb-2 text-lg">Commisions</div>
            <div class="mb-2">Total Contract Value</div>
            <select class="white-input w-full p-1 rounded-sm" v-model="agreementInfoForm.limitedAvailability">
                <option value="yes">None</option>
                <option value="yes">Initiation Fee</option>
                <option value="no">First Months Dues</option>
            </select>
        </div>
        <div class="col-span-1 mx-auto w-full">
            <div class="mb-2">Name (1)</div>
        </div>
        <div class="col-span-1 mx-auto w-full">
            <div class="mb-2">Amount</div>
        </div>
        <div class="col-span-1 mx-auto w-full">
            <div class="mb-2">Clubs</div>
        </div>
        <div class="col-span-3 bg-white text-black rounded mx-auto w-full grid grid-cols-3 px-2 pt-2 gap-4">
            <div class="col-span-1 mx-auto w-full">
                <div class="mb-2">FL ACD 30 Day 7%</div>
            </div>
            <div class="col-span-1 mx-auto w-full">
                <div class="mb-2">$53.49</div>
            </div>
            <div class="col-span-1 mx-auto w-full">
                <textarea class="border border-black rounded p-1 w-full resize-none" rows="5">#668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668</textarea>
            </div>
        </div>
    </simple-card>
    
</template>
<script setup>

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