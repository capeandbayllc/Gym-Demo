<template>
    <div class="agreement-container">
        <div class="page-title">Agreement Templates</div>
        <div class="page-content">
            <div class="flex justify-center items-center pt-8 pb-10">
                <button class="flex flex-col items-center mr-[40px]" @click="openNewAgreementModal">
                    <NewAgreementIcon class="h-[50px] mb-2"/>
                    <span>Start a New Agreement</span>
                </button>
                <button class="flex flex-col items-center mr-[20px]">
                    <CreatePreSaleIcon class="h-[50px] mb-2"/>
                    <span>Create a Pre-Sale</span>
                </button>
                <button class="flex flex-col items-center">
                    <AddIcon class="w-[150px] h-[50px] mb-2" />
                    <span>Pick up Template</span>
                </button>
            </div>
            <input type="text" placeholder="Search" class="input w-full bg-base-content text-black text-lg mb-6"  v-model="searchInput"/>
            <FilterActions class="mb-6"/>
            <simple-card title="Agreement Templates">
                <agreement-search-table @showConfirmStatusModal="showConfirmStatusModal" :columns="columns" :items="data" class="p-6"/>
            </simple-card>
        </div>
    </div>
    <daisy-modal ref="confirmStatusModal" id="confirmStatusModal">
        <simple-card class="p-4">
            <p class="font-semibold w-full text-center mb-4">Are you sure you want to make this inactive?</p>
            <div class="text-center">
                <button class="text-gray-500 mr-4" @click="cancel">Cancel</button>
                <button class="text-secondary" @click="confirm">Confirm</button>
            </div>
        </simple-card>
    </daisy-modal>
    <daisy-modal ref="newAgreementModal" id="newAgreementModal">
        <simple-card class="p-4">
            <component :is="newAgreementScreens[newAgreementScreenIndex]" @change-type="changeType" @next="nextScreenAgreementModal" ref="newAgreementComponent"></component>
            <div class="flex justify-end mt-6 mb-2">
                <Button size="sm" class="normal-case mx-2" ghost @click="prevScreenAgreementModal" v-if="newAgreementScreenIndex > 0">Back</Button>
                <Button size="sm" class="normal-case mx-2 ml-auto" ghost @click="closeNewAgreementModal">Cancel</Button>
                <Button v-if="showButtonsAgreement" size="sm" class="normal-case mx-2" secondary>Save as a Draft</Button>
                <Button v-if="showButtonsAgreement" size="sm" class="normal-case mx-2 border border-secondary" outline @click="nextScreenAgreementModal">Continue</Button>
            </div>
        </simple-card>
    </daisy-modal>
    <!-- <daisy-modal ref="newTemplateModal" id="newTemplateModal">
        <simple-card class="p-4">
            <component :open="newTemplateIsOpen" :is="newTemplateScreens[newTempalteScreenIndex]" @change-type="changeType" @next="nextScreenTemplateModal" ref="newTemplateComponent"></component>
            <div class="flex justify-end mt-6 mb-2">
                <Button size="sm" class="normal-case mx-2" ghost @click="prevScreenTemplateModal" v-if="newTempalteScreenIndex > 1">Back</Button>
                <Button size="sm" class="normal-case mx-2 ml-auto" ghost @click="closeNewTemplateModal">Cancel</Button>
                <Button size="sm" class="normal-case mx-2" secondary>Save as a Draft</Button>
                <Button size="sm" class="normal-case mx-2 border border-secondary" outline @click="nextScreenTemplateModal">Continue</Button>
            </div>
        </simple-card>
    </daisy-modal> -->
</template>

<script setup>
import { NewAgreementIcon, AddIcon, CreatePreSaleIcon } from "@/components/icons";
import FilterActions from './components/filter-actions.vue';
import AgreementSearchTable from './components/agreement-search-table.vue';
import AgreementModal from './components/agreement-modal.vue';
import AgreementTemplate from './components/agreement-template.vue';
import AgreementFileTemplate from './components/agreement-file-template.vue';
import PaymentSchedule from './components/payment-schedule.vue';
import PosPaymentAmounts from './components/paos-payment-amounts.vue';
import ScheduledBilling from './components/scheduled-billing.vue';
import ContractModal from './components/contract-modal.vue';
import EditPaymentPlan from './components/edit-payment-plan-modal.vue';
import AgreementType from './components/agreement-type.vue';
import SaveModal from './components/save-modal.vue';


const searchInput =  ref("");
const showButtonsAgreement = ref(false);
const actualCheckboxConfirmId = ref(null);


// const newTemplateComponent = ref(null);
// const newTemplateScreens = ref([AgreementFileTemplate, AgreementTemplate, PaymentSchedule, PosPaymentAmounts, ScheduledBilling]);
// const newTempalteScreenIndex = ref(0);
// const newTemplateModal = ref(null);

const newAgreementComponent = ref(null);
const newAgreementScreens = ref([AgreementModal, AgreementFileTemplate, AgreementTemplate, PaymentSchedule, PosPaymentAmounts, ScheduledBilling, ContractModal, EditPaymentPlan, AgreementType, SaveModal]);
const newAgreementScreenIndex = ref(0);
const newAgreementModal = ref(null);


const nextScreenAgreementModal = ()=>{
    
    let index = newAgreementScreenIndex.value < (newAgreementScreens.value.length - 1) ? newAgreementScreenIndex.value + 1 : newAgreementScreenIndex.value;
    if(index == 1){
        newAgreementModal.value.close()
    }else{
        newAgreementModal.value.open()
    }
    newAgreementScreenIndex.value = index
}

const prevScreenAgreementModal = ()=>{
    let index = newAgreementScreenIndex.value > 0 ? newAgreementScreenIndex.value - 1 : newAgreementScreenIndex.value
    if(index == 1){
        newAgreementModal.value.close()
    }else{
        newAgreementModal.value.open()
    }
    newAgreementScreenIndex.value = index
}

const openNewAgreementModal =()=>{
    if(newAgreementScreenIndex.value == 1){
        newAgreementComponent.value.openFileInput()
    }else{
        newAgreementModal.value.open()
    }
}

    
const closeNewAgreementModal =()=>{
    newAgreementScreenIndex.value = 0;
    newAgreementModal.value.close()
}

const changeType = (type)=>{
    showButtonsAgreement.value =  type ? true : false;
}

// const nextScreenTemplateModal = ()=>{
//     newTemplateModal.value.open()
//     newTempalteScreenIndex.value = newTempalteScreenIndex.value < (newTemplateScreens.value.length - 1) ? newTempalteScreenIndex.value + 1 : newTempalteScreenIndex.value;
//     console.log("newTempalteScreenIndex",newTempalteScreenIndex.value)
// }

// const prevScreenTemplateModal = ()=>{
//     newTempalteScreenIndex.value = newTempalteScreenIndex.value > 0 ? newTempalteScreenIndex.value - 1 : newTempalteScreenIndex.value
// }





const columns = [
    {
        label: "Name",
        class: "text-secondary text-left"
    },
    {
        label: "Agreement Type",
        class: "text-secondary text-left"
    },
    {
        label: "Schedule Type",
        class: "text-secondary text-left"
    },
    {
        label: "Status",
        class: "text-secondary text-left"
    },
    {
        label: "Created By",
        class: "text-secondary text-left"
    }, 
    {
        label: "Availability",
        class: "text-secondary text-left"
    },
    {
        label: "Edit",
        class: "text-secondary text-left"
    },
    {
        label: "Date Created",
        class: "text-secondary text-left"
    }
];

const data = [
    {
        id: 1,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Active",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    },
    {
        id: 2,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Inactive",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    },
    {
        id: 3,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Draft",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    },
    {
        id: 4,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Active",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    },
    {
        id: 5,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Inactive",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    },
    {
        id: 6,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Draft",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    },
    {
        id: 7,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Active",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    }
];

// Confirm status modal

const confirmStatusModal = ref(null);

const showConfirmStatusModal = (event)=>{
    actualCheckboxConfirmId.value = event;
    confirmStatusModal.value.open()
};

const cancel =()=>{
    confirmStatusModal.value.close()
}
const confirm =()=>{
    document.getElementById(actualCheckboxConfirmId.value).click()
    confirmStatusModal.value.close()
}



// const openNewTemplateModal = () =>{
//     if(newTempalteScreenIndex.value == 0){
//         newTemplateComponent.value.open()
//     }else{
//         newTemplateModal.value.open()
//     }
// }

// const closeNewTemplateModal =()=>{
//     newTempalteScreenIndex.value = 0;
//     newTemplateModal.value.close()
// }

</script>

<style scoped>
.agreement-container {
    @apply py-4 pr-5 px-7 w-full h-fit;
    .page-title {
        @apply text-lg font-light pb-3 pl-5;
    }
}
</style>