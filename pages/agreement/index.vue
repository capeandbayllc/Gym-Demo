<template>
    <div class="agreement-container">
        <div class="page-title">Agreement Templates</div>
        <div class="page-content">
            <div class="flex justify-center items-center pt-8 pb-10">
                <button class="flex flex-col items-center mr-[40px]" @click="openNewAgreementModal">
                    <NewAgreementIcon class="h-[50px] mb-2" />
                    <span>Start a New Agreement</span>
                </button>
                <button class="flex flex-col items-center mr-[20px]">
                    <CreatePreSaleIcon class="h-[50px] mb-2" />
                    <span>Create a Pre-Sale</span>
                </button>
                <button class="flex flex-col items-center">
                    <AddIcon class="w-[150px] h-[50px] mb-2" />
                    <span>Pick up Template</span>
                </button>
            </div>
            <input type="text" placeholder="Search" class="input w-full bg-base-content text-black text-lg mb-6"
                v-model="searchInput" />
            <FilterActions class="mb-6" />
            <simple-card title="Agreement Templates">
                <agreement-search-table @showConfirmStatusModal="showConfirmStatusModal" :columns="columns" :items="agreements" class="p-6"/>
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
            <component :is="newAgreementScreens[newAgreementScreenIndex]" :newAgreementData="newAgreementData"
                @changeNewAgreementData="newAgreementData = $event" @change-type="changeType"
                @next="nextScreenAgreementModal" ref="newAgreementComponent"></component>
            <div class="flex justify-end mt-6 mb-2">
                <Button size="sm" class="normal-case mx-2" ghost @click="prevScreenAgreementModal"
                    v-if="newAgreementScreenIndex > 0">Back</Button>
                <Button size="sm" class="normal-case mx-2 ml-auto" ghost @click="closeNewAgreementModal">Cancel</Button>
                <Button v-if="showButtonsAgreement" size="sm" class="normal-case mx-2" secondary>Save as a Draft</Button>
                <Button v-if="showButtonsAgreement" size="sm" class="normal-case mx-2 border border-secondary" outline
                    @click="nextScreenAgreementModal">Continue</Button>
            </div>
        </simple-card>
    </daisy-modal>
    <button @click="saveAgreement">Execute</button>
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
import PosPaymentAmounts from './components/pos-payment-amounts.vue';
import ScheduledBilling from './components/scheduled-billing.vue';
import ContractModal from './components/contract-modal.vue';
import EditPaymentPlan from './components/edit-payment-plan.vue';
import AgreementType from './components/agreement-type.vue';
import SaveModal from './components/save-modal.vue';
import { exit } from "process";

const authToken = useCookie("auth");

const newAgreementData = ref({
    // Added
    id: null,
    type: '',
    file: null,
    status: 'Active',
    agreementTemplate: {
        planName: "",
        editsAmount: "",
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
    },
    paymentSchedule: {
        billingScheduleType: "fulltime",
        editsAmount: "",
        billingFrequency: "onetime",
        inStore: "",
        online: "",
        inApp: "",
        terms: "12",
        introductoryOffer: "yes",
        autoRenew: "no",
        chooesePreferredDueDay: "yes",
        planDate: "",
        memberPaySigning: "yes"
    },
    posPayment: {
        activeInitiationFee: true,
        initialitionFeePrice: 50.00,
        initialitionFeePriceMinimum: 50.00,
        initialitionFeePriceMaximum: 50.00,
        activeFirstMonthsDues: true,
        firstMonthsDuesProRate: "Pro Rate Monthly PTM",
        activeTotalAmountPaid: false,
        totalAmountPaidToday: "",
    },
    scheduledBilling: {
        primary: {
            grProfitCenter: 'dues',
            preTaxAmount: 15.0,
        },
        addOn1: {
            grProfitCenter: '',
            preTaxAmount: 0.0,
        },
        addOn2: {
            grProfitCenter: '',
            preTaxAmount: 0.0,
        },
        addOn3: {
            grProfitCenter: '',
            preTaxAmount: 0.0,
        },
        addOn4: {
            grProfitCenter: '',
            preTaxAmount: 0.0,
        },
        addOn5: {
            grProfitCenter: '',
            preTaxAmount: 0.0,
        },
    },
    contract: '',
    editPaymentPlan: {
        totalContractValue: ""
    },
    agreementType: {
        agreeTerms: false,
        agreeElectronics: false,
        signature: '',
        fullName: '',
        date: '',
        idNumber: ''
    },
    agreementName: '',
    createdBy: '',
    dateCreated: '',


    // id: 0,
    // name: '',
    // price: '',
    // is_not_billable: '',
    // availability: '',
    // displayable_price: '',
    // created_at: '',
    // updated_at: '',
    // contractTemplate: {
    //     id: 0,
    //     name: '',
    //     data: '',
    //     data_type: '',
    //     created_at: '',
    //     updated_at: ''
    // },
    // category: {
    //     id: 0,
    //     name: '',
    //     created_at: '',
    //     updated_at: ''
    // },

    // billingSchedules: [
    //     {
    //         id: 0,
    //         schedule_type: '',
    //         name: '',
    //         schedule_cycle_type: '',
    //         billable_dates: '',
    //         is_open_ended: '',
    //         is_renewable: '',
    //         should_renew_automatically: '',
    //         term_unit: '',
    //         term_duration: '',
    //         billed_on_type: '',
    //         billing_term_length: '',
    //         displayable_billable_dates: '',
    //         min_terms: '',
    //         used_in: '',
    //         created_at: '',
    //         updated_at: '',
    //     }
    // ],
    // locations: [

    // ]
});

const newAgreementDataReset = ref({});

onMounted(() => {
    newAgreementData.value.createdBy = authToken.value.first_name
    newAgreementDataReset.value = newAgreementData.value;
})

const searchInput = ref("");
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

const saveAgreement = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleDateString('en-US') + ', ' + currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    newAgreementData.value.dateCreated = formattedDate;
    newAgreementData.value.id = agreements.value[agreements.value.length-1].id + 1;
    agreements.value.push(newAgreementData.value);
    newAgreementData.value = newAgreementDataReset.value
    closeNewAgreementModal();
};


const nextScreenAgreementModal = () => {
    if (newAgreementScreenIndex.value == ((newAgreementScreens.value.length) - 1)) {
        alert('Save agreement?');
        saveAgreement();
        exit();
    }
    let index = newAgreementScreenIndex.value < (newAgreementScreens.value.length - 1) ? newAgreementScreenIndex.value + 1 : newAgreementScreenIndex.value;
    if (index == 1) {
        newAgreementModal.value.close()
    } else {
        newAgreementModal.value.open()
    }
    newAgreementScreenIndex.value = index
}

const prevScreenAgreementModal = () => {
    let index = newAgreementScreenIndex.value > 0 ? newAgreementScreenIndex.value - 1 : newAgreementScreenIndex.value;
    if (index == 1) {
        newAgreementModal.value.close();
    } else {
        newAgreementModal.value.open();
    }
    newAgreementScreenIndex.value = index;
}

const openNewAgreementModal = () => {
    if (newAgreementScreenIndex.value == 1) {
        newAgreementComponent.value.openFileInput();
    } else {
        newAgreementModal.value.open();
    }
}


const closeNewAgreementModal = () => {
    newAgreementScreenIndex.value = 0;
    showButtonsAgreement.value = false;
    newAgreementModal.value.close();
}

const changeType = (type) => {
    showButtonsAgreement.value = type ? true : false;
}

// const nextScreenTemplateModal = ()=>{
//     newTemplateModal.value.open()
//     newTempalteScreenIndex.value = newTempalteScreenIndex.value < (newTemplateScreens.value.length - 1) ? newTempalteScreenIndex.value + 1 : newTempalteScreenIndex.value;
//     console.log("newTempalteScreenIndex",newTempalteScreenIndex.value)
// }

// const prevScreenTemplateModal = ()=>{
//     newTempalteScreenIndex.value = newTempalteScreenIndex.value > 0 ? newTempalteScreenIndex.value - 1 : newTempalteScreenIndex.value
// }





const columns = ref([
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
]);

const agreements = ref([
    {
        id: 1,
        type: 'Membership',
        file: null,
        status: 'Active',
        agreementName: 'Agreement File Name',
        createdBy: 'Paul Siglioni',
        dateCreated: '5/5/2002, 12:24:44 PM',
        contract: '',
        agreementTemplate: {
            planName: "",
            editsAmount: "",
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
        },
        paymentSchedule: {
            billingScheduleType: "fulltime",
            editsAmount: "",
            billingFrequency: "onetime",
            inStore: "",
            online: "",
            inApp: "",
            terms: "12",
            introductoryOffer: "yes",
            autoRenew: "no",
            chooesePreferredDueDay: "yes",
            planDate: "",
            memberPaySigning: "yes"
        },
        posPayment: {
            activeInitiationFee: true,
            initialitionFeePrice: 50.00,
            initialitionFeePriceMinimum: 50.00,
            initialitionFeePriceMaximum: 50.00,
            activeFirstMonthsDues: true,
            firstMonthsDuesProRate: "Pro Rate Monthly PTM",
            activeTotalAmountPaid: false,
            totalAmountPaidToday: "",
        },
        scheduledBilling: {
            primary: {
                grProfitCenter: 'dues',
                preTaxAmount: 15.0,
            },
            addOn1: {
                grProfitCenter: '',
                preTaxAmount: 0.0,
            },
            addOn2: {
                grProfitCenter: '',
                preTaxAmount: 0.0,
            },
            addOn3: {
                grProfitCenter: '',
                preTaxAmount: 0.0,
            },
            addOn4: {
                grProfitCenter: '',
                preTaxAmount: 0.0,
            },
            addOn5: {
                grProfitCenter: '',
                preTaxAmount: 0.0,
            },
        },
        editPaymentPlan: {
            totalContractValue: ""
        },
        agreementType: {
            agreeTerms: false,
            agreeElectronics: false,
            signature: '',
            fullName: '',
            date: '',
            idNumber: ''
        },
        
    },
    // {
    //     id: 1,
    //     name: 'Agreement File Name',
    //     agreement_type: 'Membership',
    //     schedule_type: 'Term',
    //     status: "Active",
    //     created_by: "Paul Siglioni",
    //     availability: "Instore",
    //     date_created: "5/5/2002, 12:24:44 PM"
    // }
]);


// Confirm status modal

const confirmStatusModal = ref(null);

const showConfirmStatusModal = (event) => {
    actualCheckboxConfirmId.value = event;
    confirmStatusModal.value.open()
};

const cancel = () => {
    confirmStatusModal.value.close()
}
const confirm = () => {
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
}</style>