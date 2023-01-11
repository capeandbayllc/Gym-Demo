<template>
    <simple-card class="mb-8">
        <div class="grid grid-cols-3 gap-6 py-4 px-10 -lg:grid-cols-2">
            <div class="flex justify-between items-center col-span-3 -lg:col-span-2">
                <Button class="text-white capitalize mr-[100px] -md:!mr-0" :class="isActiveMember ? 'bg-slate-400 hover:bg-slate-500' : 'bg-lime-500 hover:bg-lime-600'" @click="isActiveMember = !isActiveMember" >{{isActiveMember ? "In-Active" : "Active"}}</Button>
                <h2 class="text-center leading-10 text-lg">Member Information</h2>
                <Button class="bg-[#0074C8] text-white capitalize" @click="showAgreementPopUp">Create New Agreement</Button>
            </div>

            <div v-for="item in memberInformation" :key="item.key" class="col-span-1 -lg:col-span-1 -md:col-span-2 -md:col-auto mx-auto w-full">
                <div class="mb-2">{{item.label}}</div>
                <input :class="item.class" class="w-full p-1 rounded-sm" v-model="memberInfo[item.key]"/>
            </div>
        </div>
    </simple-card>
    <daisy-modal id="agreementPopUp" ref="agreementPopUp" class="w-fit" @close="closeModel">
        <div class="bg-black rounded-md p-6 border border-secondary">
            <component :is="agreementScreens[agreementScreenIndex]"></component>
            <div class="flex justify-end mt-6">
                <Button size="sm" class="normal-case mx-2" ghost @click="prevScreen" v-if="agreementScreenIndex > 0">Back</Button>
                <Button size="sm" class="normal-case mx-2 ml-auto" ghost>Cancel</Button>
                <Button size="sm" class="normal-case mx-2" secondary v-if="agreementScreenIndex == 0">Save as a Draft</Button>
                <Button size="sm" class="normal-case mx-2">Add to Segment</Button>
                <!-- <Button size="sm" class="normal-case mx-2">Complet and Send Document</Button> -->
                <Button size="sm" class="normal-case mx-2 border border-secondary" outline @click="nextScreen">Continue ></Button>
            </div>
        </div>
    </daisy-modal>
</template>
<script setup>
import {ref} from 'vue';
import Agreement from './agreement'
import SelectGym from './select-gym'
import PersonalInformation from './personal-information'
import PersonalInformationNext from './personal-information/personal-info-next.vue'
import FinancialCollect from './financial-collect'
import TermsAndCondition from './terms-condition.vue'
import PayNow from './pay-now.vue'
const isActiveMember = ref(false);

const memberInfo = ref({});

const memberInformation = [{
    key: "first-name",
    label: "First Name",
    class: "secondary-input"
}, {
    key: "middle-name",
    label: "Middle Name",
    class: "secondary-input"
}, {
    key: "last-name",
    label: "Last Name",
    class: "secondary-input"
}, {
    key: "birthday",
    label: "Date of Birth",
    class: "neutral-input"
}, {
    key: "gender",
    label: "Gender",
    class: "neutral-input"
}, {
    key: "social-security-number",
    label: "Social Security Number",
    class: "neutral-input"
}, {
    key: "occupation",
    label: "Occupation",
    class: "neutral-input"
}, {
    key: "employer",
    label: "Employer",
    class: "neutral-input"
}, {
    key: "barcode",
    label: "Barcode",
    class: "neutral-input"
}, {
    key: "previous-agreement-number",
    label: "Previous Agreement Number",
    class: "neutral-input"
}, {
    key: "wellness-program-id",
    label: "Wellness Program ID",
    class: "neutral-input"
},{
    key: "membership-type",
    label: "Membership Type",
    class: "neutral-input"
},{
    key: "group",
    label: "Group",
    class: "neutral-input"
},{
    key: "member-misc-1",
    label: "Member Misc. 1",
    class: "neutral-input"
},{
    key: "member-misc-2",
    label: "Member Misc. 2",
    class: "neutral-input"
}];

const agreementPopUp = ref(null);
const agreementScreens = ref([Agreement,SelectGym,PersonalInformation, PersonalInformationNext,FinancialCollect,TermsAndCondition,PayNow]);
const agreementScreenIndex = ref(0);

const closeModel = ()=>{
    setTimeout(() => {   
        agreementScreenIndex.value = 0;
    },500);
}

const showAgreementPopUp = () => {
	agreementPopUp.value.open()
}
const nextScreen = ()=>{
    agreementScreenIndex.value = agreementScreenIndex.value < (agreementScreens.value.length - 1) ? agreementScreenIndex.value + 1 : agreementScreenIndex.value;
    console.log("agreementScreenIndex",agreementScreenIndex.value)
}
const prevScreen = ()=>{
    agreementScreenIndex.value = agreementScreenIndex.value > 0 ? agreementScreenIndex.value - 1 : agreementScreenIndex.value
}

</script>
<style scoped>
    .secondary-input {
        @apply bg-secondary;
    }
    .neutral-input {
        @apply bg-base-content/20;
    }
    .readonly-input {
        @apply bg-transparent text-base-content/50;
    }
    .outline-input {
        @apply bg-transparent border border-secondary;
    }
    .divider {
        @apply border-b h-0 border-secondary col-span-3 3xl:col-span-4 -lg:col-span-2 -md:col-auto;
    }
</style>