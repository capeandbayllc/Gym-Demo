<template>
    <div>
        <div class="profile-image-container">
            <div class="profile-image">
                <div class="profile-avatar">
                    <img :src="ProfileInfo.profile_photo_path" alt="profile image" />
                </div>
            </div>
        </div> 
        <div :class="modalClass">
            <simple-card bg-gradient class="p-4">
                <div class="col-span-2 text-xl font-semibold text-base-content mb-4">
                    Personal Information (Profile)
                </div>
                <div class="max-h-[70vh] overflow-x-hidden overflow-y-scroll grid pr-2 grid-cols-2 gap-4 w-[650px] text-sm width-full">
                    <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                        <div class="mb-2">First Name</div>
                        <input class="gray-input" v-model="personalInfoForm.firstName"/>
                    </div>
                    <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                        <div class="mb-2">Last Name</div>
                        <input class="gray-input" v-model="personalInfoForm.lastName"/>
                    </div>
                    <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                        <div class="mb-2">Birth Date</div>
                        <input class="gray-input" v-model="personalInfoForm.birthDate"/>
                    </div>
                    <div class="col-span-1 -lg:col-span-2 -md:col-auto mr-auto flex flex-wrap items-center">
                        <custom-toggle v-model="maleCheck" title="Male" />
                        <custom-toggle v-model="femaleCheck" title="Female" />
                        <custom-toggle v-model="otherCheck" title="Other" />
                    </div>
                    <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                        <div class="mb-2">Home Address 1*</div>
                        <input class="gray-input" v-model="personalInfoForm.homeAddress1"/>
                    </div>
                    <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                        <div class="mb-2">Home Address 2</div>
                        <input class="gray-input" v-model="personalInfoForm.homeAddress2"/>
                    </div>
                    <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                        <div class="mb-2">City*</div>
                        <input class="gray-input" v-model="personalInfoForm.city"/>
                    </div>
                    <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full flex">
                        <div class="mr-4 w-[80%]">
                            <div class="mb-2">State*</div>
                            <select-box
                                :items="cities"
                                label="Florida"
                                :showSearch="false"
                                :showClearList="false"
                                :bgSecondaryOpened="false"
                                @onChange=""
                                classButton="my-[5px] mx-[10px]"
                                class="bg-[#5a5a5a] text-white rounded-[10px] w-full">
                            </select-box>
                        </div>
                        <div>
                            <div class="mb-2">Zip Code*</div>
                            <input class="gray-input" v-model="personalInfoForm.zipCode"/>
                        </div>
                    </div>
                    <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                        <div class="mb-2">Emergency Contact Name</div>
                        <input class="gray-input" v-model="personalInfoForm.emergencyContactName"/>
                    </div>
                    <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                        <div class="mb-2">Emergency Contact Phone</div>
                        <input class="gray-input" v-model="personalInfoForm.emergencyContactPhone"/>
                    </div>
                    <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                        <div class="mb-2">Mobile Phone*</div>
                        <input class="gray-input" v-model="personalInfoForm.mobilePhone"/>
                    </div>
                    <div class="col-span-1 -lg:col-span-2 -md:col-auto mx-auto w-full">
                        <div class="mb-2">Email</div>
                        <input class="gray-input" v-model="personalInfoForm.email"/>
                    </div>
                    <p class="col-span-2 py-4 pb-8">Yes! I would like a Fitness Club Consultant to follow up with me regarding a membership by text message and/or cell phone call; I also would like to receive other offers from Fitness Club via text message and/or cell phone call. By checking the box, I therefore agree to receive autodialed and manually dialed advertising text messages and cell phone calls from Fitness Club and its affiliates to the mobile phone number provided here. I understand that my consent to receive promotional autodialed and manually dialed text messages and/or phone calls is not a condition of purchasing goods and services from Fitness Club. Message and data rates may apply. I understand that I may withdraw my consent at any time by texting STOP to a text message or by informing the calling party during a phone call. Fitness Club has no intention of selling your personal information. Florida** law requires businesses to provide an alternate form of opt-out requests via email. If you are a Nevada resident, you may submit such opt-out requests to info@fitnessclub.com. To be effective, your request must include your full name, address, phone number, and email.</p>
                </div>
            </simple-card>
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
import { request } from "~/api/utils/request";
import member from "@/api/queries/member";
import CustomToggle from "~/components/toggle/custom-toggle.vue";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const route = useRoute();
const profileId = route.query.id;
const isLeadView = route.query.type === "lead";
const ProfileInfo = ref(null);
const user = useState("auth");

const personalInfoForm = ref({
    firstName:"",
    lastName:"",
    birthDate: "",
    male: "",
    female: "",
    other: "",
    homeAddress1: "",
    homeAddress2: "",
    city: "",
    state: "",
    zipCode: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    mobilePhone: "",
    email: "",
    sendMePromotionalTexts: "",
    sendMePromotionalEmails: ""
})

getMember();
function getMember() {
    if (profileId) {
        request((isLeadView ? lead : member).query.get, { id: profileId }).then(
            ({ data }) => {
                ProfileInfo.value = data.data[isLeadView ? "lead" : "member"];
            }
        );
    } else {
        ProfileInfo.value = user.value;
    }
}

const props = defineProps({
    modalClass:{
        type: String
    }
})

const maleCheck = ref(false);
const femaleCheck = ref(false);
const otherCheck = ref(false);

</script>
<style scoped>
    .gray-input {
        @apply bg-[#5a5a5a] w-full text-white py-[10px] px-[10px] outline-none rounded-[10px];
    }

    .toggle-custom{
        @apply mr-3;
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
            @apply relative left-[60px] h-0 mb-0;
        }
    }
</style>