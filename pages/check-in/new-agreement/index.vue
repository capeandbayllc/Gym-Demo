<template>
    <simple-card title="Agreements" class="agreements-card" closable>
        <div class="p-8 card-gradient-bg"> 
            <CurrentAgreement v-if="!showNewAgreement" @new-agreement="newAgreement"/>
            <component v-else :is="agreementScreens[agreementScreenIndex]" :modalClass="'bg-black w-fit mx-auto p-[17px] border border-secondary new-agreements-wrapper '+(agreementScreenIndex==0?'rounded-[8px]':'rounded-[19px]')">
                <div class="flex justify-end mt-6">
                    <button class="button-simple mr-auto" @click="prevScreen" v-if="agreementScreenIndex > 0">Back</button>
                    <button class="button-simple" @click="showNewAgreement = false">Cancel</button>
                    <button class="normal-case mx-2 border-2 rounded-[10px] border-secondary px-[10px] py-[2px]" outline @click="nextScreen">Continue</button>
                </div>
            </component>
            <div class="" :class="agreementScreenIndex==0?'rounded-[8px]':'rounded-[19px]'">
            </div>
        </div>
    </simple-card>
</template>

<script setup>
import CurrentAgreement from './current-agreement.vue';
import MembershipType from './membership-type.vue';
import SelectGym from '../user-info/select-gym';
import PersonalInformation from '../user-info/personal-information';
import PersonalInformationNext from '../user-info/personal-information/personal-info-next.vue';
import DueTodayPayment from '../user-info/financial-collect/due-today.vue';
import MostlyDuesPayment from '../user-info/financial-collect/mostly-dues.vue';
import SecondaryPayments from '../user-info/financial-collect/secondary-payments.vue';
import AgreementModal from '../user-info/agreement-modal.vue';
import TermsAndCondition from '../user-info/terms-condition.vue';
import PayNow from '../user-info/pay-now.vue';;

const showNewAgreement = ref(false);
const newAgreement = ()=>{
    showNewAgreement.value = true;
}

const agreementScreens = ref([SelectGym,AgreementModal,PersonalInformation,PersonalInformationNext,DueTodayPayment,MostlyDuesPayment,SecondaryPayments,TermsAndCondition,PayNow]);
// MembershipType

const agreementScreenIndex = ref(0);

const nextScreen = ()=>{
    agreementScreenIndex.value = agreementScreenIndex.value < (agreementScreens.value.length - 1) ? agreementScreenIndex.value + 1 : agreementScreenIndex.value;
    console.log("agreementScreenIndex",agreementScreenIndex.value)
}
const prevScreen = ()=>{
    agreementScreenIndex.value = agreementScreenIndex.value > 0 ? agreementScreenIndex.value - 1 : agreementScreenIndex.value
}

</script>

<style scoped>
.agreements-card {
    @apply m-auto w-full max-w-[1120px];
}
.button-simple{
    @apply normal-case px-2 text-[#6d6d6d] my-auto hover:text-primary transition-colors duration-300;
}
</style>
<style>
@media (max-width:1152px){
    .new-agreements-wrapper {
        width:100%;
        .width-full{
            width:100%;
        }
        .display-flex-column{flex-direction: column;}
    }
}

</style>