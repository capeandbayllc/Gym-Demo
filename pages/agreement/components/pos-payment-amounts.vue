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
            <p class="pl-4" :class="{'text-gray-400':!data.activeInitiationFee}">1. Initialition Fee</p>
        </div>
        <div class="col-span-3 mx-auto w-full">
            <input :disabled="!data.activeInitiationFee" type="number" class="white-input w-full p-1 rounded-sm" v-model="data.initialitionFeePrice" />
        </div>
        <div class="col-span-3 mx-auto w-full">
            <input :disabled="!data.activeInitiationFee" type="number" class="white-input w-full p-1 rounded-sm" v-model="data.initialitionFeePriceMaximum" />
            <input :disabled="!data.activeInitiationFee" type="number" class="white-input w-full p-1 rounded-sm mt-3" v-model="data.initialitionFeePriceMinimum" />
        </div>
        <div class="col-span-3 w-full flex justify-center">
            <div>
                <button v-if="data.activeInitiationFee" @click="buttonActiveInitiationFee.click()" class="pt-1">Remove</button>
                <button :class="{'text-gray-400':!data.activeInitiationFee}" v-else class="pt-1" @click="buttonActiveInitiationFee.click()">Add</button>
            </div>
        </div>
        <!-- 2 First months dues -->
        <div class="col-span-3 w-full flex">
            <p class="pl-4" :class="{'text-gray-400':!data.activeFirstMonthsDues}">2. First Months Dues</p>
        </div>
        <div class="col-span-4 mx-auto w-full">
            <input :disabled="!data.activeFirstMonthsDues" value="Pro Rate Monthly PTM" class="white-input w-full p-1 rounded-sm" />
        </div>
        <div class="col-span-2 w-full flex">
            <p class="pt-1" :class="{'text-gray-400':!data.activeFirstMonthsDues}">First Month Only</p>
        </div>
        <div class="col-span-3 w-full flex justify-center">
            <div>
                <button v-if="data.activeFirstMonthsDues" @click="buttonActiveFirstMonthsDues.click()" class="pt-1">Remove</button>
                <button :class="{'text-gray-400':!data.activeFirstMonthsDues}" v-else class="pt-1" @click="buttonActiveFirstMonthsDues.click()">Add</button>
            </div>
        </div>
        <!-- 3 Total Amount Paid Today -->
        <div class="col-span-3 w-full flex">
            <p class="pl-4" :class="{'text-gray-400':!data.activeTotalAmountPaid}">3. *Total Amount Paid Today</p>
        </div>
        <div class="col-span-6  mx-auto w-full">
            <select-box
                :items="[
                    { id: true, label: 'Yes' },
                    { id: false, label: 'No' }
                ]"
                value=""
                label="Pos Total" 
                labelOpened="Limited Availability"
                :showSearch="false"
                :showClearList="false"
                :class="data.activeTotalAmountPaid?'bg-white border-white':'bg-gray-400 border-gray-400'"
                class="text-black rounded border w-full">
            </select-box>
            <!-- <select :disabled="!data.activeTotalAmountPaid" placeholder="POS Total" class="white-input w-full p-1 rounded-sm" v-model="data.totalAmountPaidToday">
                <option value="" disabled selected hidden>POS Total</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select> -->
        </div>
        <div class="col-span-3 w-full flex justify-center">
            <div>
                <button v-if="data.activeTotalAmountPaid" @click="buttonActiveTotalAmountPaid.click()" class="pt-1">Remove</button>
                <button v-else :class="{'text-gray-400':!data.activeTotalAmountPaid}" class="pt-1" @click="buttonActiveTotalAmountPaid.click()">Add</button>
            </div>
        </div>
        <div class="col-span-12 flex justify-center">
            <div class="flex items-center mt-3">
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" ref="buttonActiveInitiationFee" v-model="data.activeInitiationFee" />Initiation Fee</div>
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" ref="buttonActiveFirstMonthsDues" v-model="data.activeFirstMonthsDues" />First Months Dues</div>
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" ref="buttonActiveTotalAmountPaid" v-model="data.activeTotalAmountPaid" />Last Months Dues</div>
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    newAgreementData: {
		type: Object,
		default: null,
	}
})
const emit = defineEmits(['changeNewAgreementData']);

const data = ref({
    activeInitiationFee: true,
    initialitionFeePrice: 50.00,
    initialitionFeePriceMinimum: 50.00,
    initialitionFeePriceMaximum: 50.00,
    activeFirstMonthsDues: true,
    firstMonthsDuesProRate: "Pro Rate Monthly PTM",
    activeTotalAmountPaid: false,
    totalAmountPaidToday: "",
})

onMounted(() => {
  if (props.newAgreementData.posPayment !== null) {
    data.value =  props.newAgreementData.posPayment;
  }
});

const changeNewAgreementData = ()=>{
    let changeNewAgreementData = props.newAgreementData;
    changeNewAgreementData.posPayment = data.value;
    emit('changeNewAgreementData', changeNewAgreementData)
};

watch(data, () => {
    changeNewAgreementData()
});

const buttonActiveInitiationFee = ref(null);
const buttonActiveFirstMonthsDues = ref(null);
const buttonActiveTotalAmountPaid = ref(null);


</script>
<style scoped>
    .white-input {
        @apply bg-white text-black;
    }

    .white-input:disabled{
        @apply bg-gray-400;
    }


</style>