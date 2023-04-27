<template>
    <simple-card class="gradient-bg grid grid-cols-2 p-4 gap-4 w-[650px] text-sm max-h-[75vh] overflow-auto">
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2 font-semibold text-lg">Agreement Template</div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="flex items-center mx-2 mt-1 float-right"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />Active</div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Plan Name</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="data.planName"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Allow Edits to Amounts</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="data.editsAmount"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Display Name</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="data.displayName"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div>Web Service Plan</div>
            <div class="flex items-center mt-3">
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />Instore</div>
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />Online</div>
                <div class="flex items-center mx-2"><input type="checkbox" class="toggle toggle-info toggle-sm mr-2" checked />In App</div>
            </div>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Limited Availability (Membership Segment)</div>
            <select-box
                :items="[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' }
                ]"
                :label="data.limitedAvailability == '' ? 'Select' : (data.limitedAvailability == 'yes' ? 'Yes' : 'No')" 
                labelOpened="Limited Availability"
                :showSearch="false"
                :showClearList="false"
                @onChange="data.limitedAvailability = $event"
                class="bg-base-content text-base-300 rounded border border-base-content w-full">
            </select-box>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Introductory Offer</div>
            <select-box
                :items="[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' }
                ]"
                :label="data.introductoryOffer == '' ? 'Select' : (data.introductoryOffer == 'yes' ? 'Yes' : 'No')" 
                labelOpened="Limited Availability"
                :showSearch="false"
                :showClearList="false"
                @onChange="data.introductoryOffer = $event"
                class="bg-base-content text-base-300 rounded border border-base-content w-full">
            </select-box>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Membership Type</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="data.membershipType"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Promotion Segment</div>
            <select-box
                :items="[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' }
                ]"
                :label="data.promotionSegment == '' ? 'Select' : (data.promotionSegment == 'yes' ? 'Yes' : 'No')" 
                labelOpened="Limited Availability"
                :showSearch="false"
                :showClearList="false"
                @onChange="data.promotionSegment = $event"
                class="bg-base-content text-base-300 rounded border border-base-content w-full">
            </select-box>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Agreement Template</div>
                <input class="white-input w-full p-1 rounded-sm" v-model="data.agreementTemplate"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Available for Presale</div>
            <select-box
                :items="[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' }
                ]"
                :label="data.availableForPresale == '' ? 'Select' : (data.availableForPresale == 'yes' ? 'Yes' : 'No')" 
                labelOpened="Limited Availability"
                :showSearch="false"
                :showClearList="false"
                @onChange="data.availableForPresale = $event"
                class="bg-base-content text-base-300 rounded border border-base-content w-full">
            </select-box>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
            <div class="mb-2">Billing System Type</div>
            <input class="white-input w-full p-1 rounded-sm" v-model="data.billingSystemType"/>
        </div>
        <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full flex">
            <div class="mr-4 min-w-[45%]">
                <div class="mb-2">Plan Start Date</div>
                <Datepicker class="custom-date-input" v-model="data.planStartDate" :enable-time-picker="false" auto-apply></Datepicker>
            </div>
            <div>
                <div class="mb-2">Plan End Date</div>
                <Datepicker class="custom-date-input" v-model="data.planEndDate" :enable-time-picker="false" auto-apply></Datepicker>
            </div>
        </div>
    </simple-card>
    
</template>
<script setup>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const props = defineProps({
    newAgreementData: {
		type: Object,
		default: null,
	}
})
const emit = defineEmits(['changeNewAgreementData']);

const data = ref({
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

onMounted(() => {
  if (props.newAgreementData.agreementTemplate !== null) {
    data.value =  props.newAgreementData.agreementTemplate;
  }
});

const changeNewAgreementData = ()=>{
    let changeNewAgreementData = props.newAgreementData;
    changeNewAgreementData.agreementTemplate = data.value;
    emit('changeNewAgreementData', changeNewAgreementData)
};

watch(data, () => {
    changeNewAgreementData()
});

</script>
<style scoped lang="postcss">
    .white-input {
        @apply bg-base-content text-base-300;
    }
</style>
<style lang="postcss">
    .custom-date-input {
        .dp__input {
            @apply h-[28px];
        }
    }
</style>