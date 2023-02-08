<template>
    <simple-card title="Agreements" class="agreements-card gradient-bg" closable>
        <div class="p-8">
            <CurrentAgreement v-if="!showNewAgreement" @new-agreement="newAgreement"/>
            <div v-else class="bg-black w-fit mx-auto rounded-md p-6 border border-secondary new-agreements-wrapper">
                <component :is="agreementScreens[agreementScreenIndex]"></component>
                <div class="flex justify-end mt-6">
                    <Button size="sm" class="normal-case mx-2" ghost @click="prevScreen" v-if="agreementScreenIndex > 0">Back</Button>
                    <Button size="sm" class="normal-case mx-2 ml-auto" ghost @click="showNewAgreement = false">Cancel</Button>
                    <Button size="sm" class="normal-case mx-2" secondary v-if="agreementScreenIndex == 0">Save as a Draft</Button>
                    <Button size="sm" class="normal-case mx-2">Add to Segment</Button>
                    <!-- <Button size="sm" class="normal-case mx-2">Complet and Send Document</Button> -->
                    <Button size="sm" class="normal-case mx-2 border border-secondary" outline @click="nextScreen">Continue ></Button>
                </div>
            </div>
        </div>
    </simple-card>
</template>

<script setup>
import CurrentAgreement from './current-agreement.vue';
import MembershipType from './membership-type.vue';
import Agreement from '../user-info/agreement';
import SelectGym from '../user-info/select-gym';
import PersonalInformation from '../user-info/personal-information';
import PersonalInformationNext from '../user-info/personal-information/personal-info-next.vue';
import FinancialCollect from '../user-info/financial-collect';
import TermsAndCondition from '../user-info/terms-condition.vue';
import PayNow from '../user-info/pay-now.vue';;

const showNewAgreement = ref(false);
const newAgreement = ()=>{
    showNewAgreement.value = true;
}

const agreementScreens = ref([Agreement,MembershipType,SelectGym,PersonalInformation, PersonalInformationNext,FinancialCollect,TermsAndCondition,PayNow]);
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
    @apply m-auto bg-neutral w-full max-w-[1120px];
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