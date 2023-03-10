<template>
    <simple-card class="gradient-bg grid grid-cols-12 p-4 gap-4 w-[500px] text-sm max-h-[75vh] overflow-auto">
        <div class="col-span-12 w-full">
            <div class="mb-2 font-semibold text-lg">Scheduled Billing</div>
        </div>
        <div class="col-span-3 w-full">
            <div class="mb-2">Schedule Type </div>
        </div>
        <div class="col-span-5 w-full">
            <div class="mb-2">GD Profit Center</div>
        </div>
        <div class="col-span-4 w-full">
            <div class="mb-2 ml-4">Pre Tax Amount</div>
        </div>
        <!-- Item -->
        <div class="col-span-3 w-full flex">
            <p class="pl-4">Primary</p>
        </div>
        <div class="col-span-5 mx-auto w-full">
            <select class="white-input w-full p-1 rounded-sm" v-model="posPaymentAmounts.totalAmountPaidToday">
                <option value="dues">Dues</option>
            </select>
        </div>
        <div class="col-span-4 w-full flex items-center">
            <p class="mr-2">$</p>
            <input :disabled="!activeInitiationFee" type="number" class="white-input w-full p-1 rounded-sm" v-model="posPaymentAmounts.initialitionFeePrice" />
        </div>
        <!-- More items -->
        <template v-for="(n, i) in 5">
            <div class="col-span-3 w-full flex">
                <p class="pl-4">Add On</p>
            </div>
            <div class="col-span-5 mx-auto w-full">
                <select class="white-input w-full p-1 rounded-sm">
                    <option value="" selected>Select One</option>
                </select>
            </div>
            <div class="col-span-4 w-full flex items-center">
                <p class="mr-2">$</p>
                <input value="0" type="number" class="white-input w-full p-1 rounded-sm" />
            </div>
        </template>
    </simple-card>
</template>
<script setup>
const posPaymentAmounts= ref({
    initialitionFeePrice: 15.00,
    initialitionFeePriceMinimum: 50.00,
    initialitionFeePriceMaximum: 50.00,
    firstMonthsDuesProRate: "Pro Rate Monthly PTM",
    totalAmountPaidToday: "dues",
})

const buttonActiveInitiationFee = ref(null);
const activeInitiationFee = ref(true);

const buttonActiveFirstMonthsDues = ref(null);
const activeFirstMonthsDues = ref(true);

const buttonActiveTotalAmountPaid = ref(null);
const activeTotalAmountPaid = ref(false);


</script>
<style scoped>
    .white-input {
        @apply bg-white text-black;
    }

    .white-input:disabled{
        @apply bg-gray-400;
    }


</style>