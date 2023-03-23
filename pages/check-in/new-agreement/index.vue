<template>
    <simple-card title="Agreements" class="agreements-card" closable>
        <div class="p-8 card-gradient-bg">
            <div v-if="showNewAgreement && agreementScreenIndex == 2" class="profile-image-container">
                <div class="profile-image">
                    <div class="profile-avatar">
                        <img src="/checkin/avatar_random.jpg" alt="profile image" />
                    </div>
                </div>
            </div>
            <CurrentAgreement v-if="!showNewAgreement" @new-agreement="newAgreement"/>
            <div v-else class="bg-black w-fit mx-auto rounded-[8px] p-[17px] border border-secondary new-agreements-wrapper">
                <component :is="agreementScreens[agreementScreenIndex]"></component>
                <div class="flex justify-end mt-6">
                    <button class="button-simple mr-auto" @click="prevScreen" v-if="agreementScreenIndex > 0">Back</button>
                    <button class="button-simple" @click="showNewAgreement = false">Cancel</button>
                    <!-- <Button size="sm" class="normal-case mx-2" secondary v-if="agreementScreenIndex == 0">Save as a Draft</Button> -->
                    <!-- <Button size="sm" class="normal-case mx-2">Add to Segment</Button> -->
                    <!-- <Button size="sm" class="normal-case mx-2">Complet and Send Document</Button> -->
                    <Button size="sm" class="normal-case mx-2 border border-secondary" outline @click="nextScreen">Continue</Button>
                </div>
            </div>
        </div>
    </simple-card>
</template>

<script setup>
import CurrentAgreement from './current-agreement.vue';
import MembershipType from './membership-type.vue';
// import Agreement from '../user-info/agreement';
import SelectGym from '../user-info/select-gym';
import PersonalInformation from '../user-info/personal-information';
import PersonalInformationNext from '../user-info/personal-information/personal-info-next.vue';
import FinancialCollect from '../user-info/financial-collect';
import AgreementModal from '../user-info/agreement-modal.vue';
import TermsAndCondition from '../user-info/terms-condition.vue';
import PayNow from '../user-info/pay-now.vue';;

const showNewAgreement = ref(false);
const newAgreement = ()=>{
    showNewAgreement.value = true;
}

const agreementScreens = ref([SelectGym,AgreementModal,PersonalInformation,MembershipType, PersonalInformationNext,FinancialCollect,TermsAndCondition,PayNow]);
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
.profile-avatar {
    @apply rounded-[25px] p-1 inline-block ring-[4px] bg-black ring-secondary border-none;
    img {
        @apply w-[72px] h-[72px] rounded-[25px];
    }
}

.profile-image-container{
    @apply mb-5;
}

@media (min-width:1152px){
    .profile-image-container{
        @apply relative left-[80px] h-0 mb-0;
    }
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