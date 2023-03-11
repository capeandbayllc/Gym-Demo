<template>
    <div class="grid grid-cols-12 p-4 gap-x-4 gap-y-8 w-[700px] text-sm max-h-[75vh] overflow-auto">
        <div class="col-span-12 w-full">
            <div class="mb-2 font-semibold text-lg">POS Payment Amounts</div>
        </div>
        <div class="col-span-3 w-full">
            <div class="mb-2">Name</div>
        </div>
        <div class="col-span-3 w-full">
            <div class="mb-2">Preffered Price</div>
        </div>
        <div class="col-span-6 w-full">
            <div class="mb-2">Maximum / Minimum</div>
        </div>
        <!-- 1 Initialition fee -->
        <div class="col-span-3 w-full flex">
            <p class="pl-4" :class="{'text-gray-400':!activeInitiationFee}">1. Initialition Fee</p>
        </div>
        <div class="col-span-3 mx-auto w-full">
            <input :disabled="!activeInitiationFee" type="number" class="white-input w-full p-1 rounded-sm" v-model="posPaymentAmounts.initialitionFeePrice" />
        </div>
        <div class="col-span-3 mx-auto w-full">
            <input :disabled="!activeInitiationFee" type="number" class="white-input w-full p-1 rounded-sm" v-model="posPaymentAmounts.initialitionFeePriceMaximum" />
            <input :disabled="!activeInitiationFee" type="number" class="white-input w-full p-1 rounded-sm mt-3" v-model="posPaymentAmounts.initialitionFeePriceMinimum" />
        </div>
        <div class="col-span-3 w-full flex justify-center">
            <div>
                <button v-if="activeInitiationFee" @click="buttonActiveInitiationFee.click()" class="pt-1">Remove</button>
                <button :class="{'text-gray-400':!activeInitiationFee}" v-else class="pt-1" @click="buttonActiveInitiationFee.click()">Add</button>
            </div>
        </div>
        <!-- 2 First months dues -->
        <div class="col-span-3 w-full flex">
            <p class="pl-4" :class="{'text-gray-400':!activeFirstMonthsDues}">2. First Months Dues</p>
        </div>
        <div class="col-span-4 mx-auto w-full">
            <input :disabled="!activeFirstMonthsDues" value="Pro Rate Monthly PTM" class="white-input w-full p-1 rounded-sm" />
        </div>
        <div class="col-span-2 w-full flex">
            <p class="pt-1" :class="{'text-gray-400':!activeFirstMonthsDues}">First Month Only</p>
        </div>
        <div class="col-span-3 w-full flex justify-center">
            <div>
                <button v-if="activeFirstMonthsDues" @click="buttonActiveFirstMonthsDues.click()" class="pt-1">Remove</button>
                <button :class="{'text-gray-400':!activeFirstMonthsDues}" v-else class="pt-1" @click="buttonActiveFirstMonthsDues.click()">Add</button>
            </div>
        </div>
        <!-- 3 Total Amount Paid Today -->
        <div class="col-span-3 w-full flex">
            <p class="pl-4" :class="{'text-gray-400':!activeTotalAmountPaid}">3. *Total Amount Paid Today</p>
        </div>
        <div class="col-span-6  mx-auto w-full">
            <select :disabled="!activeTotalAmountPaid" placeholder="POS Total" class="white-input w-full p-1 rounded-sm" v-model="posPaymentAmounts.totalAmountPaidToday">
                <option value="" disabled selected hidden>POS Total</option>
                <option value="post_total">POS Total</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <div class="col-span-3 w-full flex justify-center">
            <div>
                <button v-if="activeTotalAmountPaid" @click="buttonActiveTotalAmountPaid.click()" class="pt-1">Remove</button>
                <button v-else :class="{'text-gray-400':!activeTotalAmountPaid}" class="pt-1" @click="buttonActiveTotalAmountPaid.click()">Add</button>
            </div>
        </div>
        <div class="col-span-12 flex justify-center">
            <div class="flex items-center mt-3">
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" ref="buttonActiveInitiationFee" v-model="activeInitiationFee" />Initiation Fee</div>
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" ref="buttonActiveFirstMonthsDues" v-model="activeFirstMonthsDues" />First Months Dues</div>
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" ref="buttonActiveTotalAmountPaid" v-model="activeTotalAmountPaid" />Last Months Dues</div>
            </div>
        </div>
    </div>
</template>
<script setup>
const posPaymentAmounts= ref({
    initialitionFeePrice: 50.00,
    initialitionFeePriceMinimum: 50.00,
    initialitionFeePriceMaximum: 50.00,
    firstMonthsDuesProRate: "Pro Rate Monthly PTM",
    totalAmountPaidToday: "",
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