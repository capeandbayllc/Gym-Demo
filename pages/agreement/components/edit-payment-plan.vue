<template>
    <simple-card class="gradient-bg grid grid-cols-3 p-4 gap-4 w-[650px] text-sm max-h-[75vh] overflow-auto">
        <div class="col-span-3 mx-auto w-full">
            <div class="mb-2 font-semibold text-lg">Edit Payment Plan: Basic 12 Month (Part 2)</div>
        </div>
        <div class="col-span-3 w-2/4">
            <div class="mb-2 text-lg">Commisions</div>
            <div class="mb-2">Total Contract Value</div>
            <select-box
                :items="totalContractValueItems"
                :label="totalContractValueLabel" 
                labelOpened="Open"
                :showSearch="false"
                :showClearList="false"
                @onChange="data.totalContractValue = $event"
                class="bg-white text-black rounded border border-white w-full">
            </select-box>
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
                <textarea class="border border-black rounded p-1 w-full resize-none" rows="5" readonly>#668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668 #668</textarea>
            </div>
        </div>
    </simple-card>
    
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
    totalContractValue: ""
})

const totalContractValueItems = ref([
    { value: '', label: 'None' },
    { value: 'initiation', label: 'Initiation Fee' },
    { value: 'dues', label: 'First Months Dues' }
]);

const totalContractValueLabel = computed(()=>{
    return data.value.totalContractValue == '' ? 'Select'
    : totalContractValueItems.value.find(item => item.value == data.value.totalContractValue)?.label
});

onMounted(() => {
  if (props.newAgreementData.editPaymentPlan !== null) {
    data.value =  props.newAgreementData.editPaymentPlan;
  }
});

const changeNewAgreementData = ()=>{
    let changeNewAgreementData = props.newAgreementData;
    changeNewAgreementData.editPaymentPlan = data.value;
    emit('changeNewAgreementData', changeNewAgreementData)
};

watch(data, () => {
    changeNewAgreementData()
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