<template>
    <div>
        <div class="people-lead-tbl-row mr-2 font-light text-[0.8rem]">
            <div
                class="flex items-center text-base font-semibold text-green-600"
                :class="`w-[${columns[0].width}px]`"
            >
                <input
                    type="checkbox"
                    class="checkbox checkbox-secondary bg-white mr-2"
                />
                {{ data.segment }}
            </div>
            <div
                class="flex items-center gap-2 px-4"
                :class="`w-[${columns[1].width}px]`"
            >
                <AlertIcon class="mr-2 text-red-600" @click.stop="openAlertModal" />
                <AlertIcon
                    class="mr-2 text-yellow-500"
                    @click.stop="openAlertModal"
                />
                <span>2</span>
            </div>
            <div class="" :class="`w-[${columns[2].width}px]`">
                <div class="flex items-center">
                    <img
                        :src="data.profile_photo_path"
                        :gender="data.gender"
                        class="w-[40px] border-2 border-secondary rounded-[12px] mr-2 line-clamp-1"
                    />
                    {{ data.first_name }} {{ data.last_name }}
                </div>
            </div>
            <div
                class="flex items-center pr-[20px]"
                :class="`w-[${columns[3].width}px]`"
            >
                <div class="mr-[40px]">
                    <SmsSquareIcon  @click="openSMSModal" />
                </div>
                <!-- <a :href="'mailto:' + data.email" class="mr-[40px]">
                    <EmailSquareIcon />
                </a> -->
                <a  class="mr-[40px]">
                    <EmailSquareIcon @click="openEmailModal" />
                </a>
                <!-- <a :href="'tel:' + data.phone">
                    <CallSquareIcon  />
                </a> -->
                <a >
                    <CallSquareIcon @click="outgoingCall" />
                </a>
            </div>
            <div
                class="text-xs"
                :class="`w-[${columns[4].width}px]`"
                :title="data.homeLocation.name"
            >
                Club 4
            </div>
            <div class="" :class="`w-[${columns[5].width}px]`">
                <membership-btn :membership="data.type" class="max-w-[100px]" />
            </div>
            <div :class="`w-[${columns[6].width}px]`">
                <div
                    v-show="!dropdownInfo"
                    @click="showDropdownInfo"
                    class="text-secondary h-6 w-6 flex items-center justify-center"
                >
                    <svg
                        class="more-icon-normal"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.999"
                        height="6"
                        viewBox="0 0 23.999 6"
                    >
                        <path
                            id="icon_more-2"
                            data-name="icon more"
                            d="M1329,732.81a3,3,0,1,1,3,3A3,3,0,0,1,1329,732.81Zm-9,0a3,3,0,1,1,3,3A3,3,0,0,1,1320,732.81Zm-9,0a3,3,0,1,1,3,3A3,3,0,0,1,1311,732.81Z"
                            transform="translate(-1311 -729.81)"
                            fill="#0075C9"
                        />
                    </svg>
                </div>
                <div
                    v-show="dropdownInfo"
                    @click="hideDropdownInfo"
                    class="text-secondary h-6 w-6 flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.999"
                        height="15"
                        viewBox="0 0 14.999 15"
                    >
                        <path
                            id="icon_more"
                            data-name="icon more"
                            d="M1329,735.81a3,3,0,1,1,3,3A3,3,0,0,1,1329,735.81Zm-9,0a3,3,0,1,1,3,3A3,3,0,0,1,1320,735.81Zm0-9a3,3,0,1,1,3,3A3,3,0,0,1,1320,726.81Z"
                            transform="translate(-1320 -723.81)"
                            fill="#0075C9"
                        />
                    </svg>
                </div>
            </div>
            <div class="dropdown" v-show="dropdownInfo">
                <div class="dropdown-container">
                    <cross-icon
                        @click="hideDropdownInfo"
                        class="flex absolute text-white h-[15px] w-[15px] top-[15px] left-[150px] cursor-pointer"
                    ></cross-icon>
                    <div @click="openInfoModal" class="dropdown-item">
                        Edit account
                    </div>
                    <div @click="openInfoModal" class="dropdown-item">
                        View alerts
                    </div>
                    <div @click="openInfoModal" class="dropdown-item">
                        Add Guest Pass
                    </div>
                    <div @click="openInfoModal">POS</div>
                </div>
            </div>
        </div>
        <daisy-modal ref="alertModal" id="alertModal" :closable="false">
            <simple-card class="p-4 w-[400px] mx-auto alert-modal">
                <close-btn :isBlack="true" @click="closeAlertModal" />
                <h5 class="text-3xl mb-2">Alert</h5>
                <div class="number-alert-circle mb-3">
                    <div class="number">3</div>
                </div>
                <p class="text-[19px] mb-1">
                    Overdue membership. Missing fees.
                </p>
                <p class="font-thin mb-6">
                    Aya Buchanan | 5/5/2022, 12:24:44 PM
                </p>
                <div class="text-center flex gap-4 justify-center my-4">
                    <button
                        class="text-white text-sm border border-white rounded-xl px-4 py-1"
                        @click="closeAlertModal"
                    >
                        Resolve
                    </button>
                    <button
                        class="text-white hover:text-secondary text-sm bg-secondary hover:bg-gray-900 border border-secondary rounded-xl px-4 py-1 transition-all duration-75"
                        @click="closeAlertModal"
                    >
                        Read alert notes
                    </button>
                </div>
            </simple-card>
        </daisy-modal>

        <daisy-modal ref="infoModal" id="infoModal" :closable="false">
            <simple-card class="p-4 w-[400px] mx-auto info-modal">
                <close-btn :isBlack="true" @click="closeInfoModal" />
                <div class="my-6">
                    <p class="text-[19px] mb-1">Agent: Kyle P.</p>
                    <p class="text-[19px] mb-1">Created by: Kyle P.</p>
                </div>
                <p class="font-thin mb-8">5/5/2022, 12:24:44 PM</p>
                <div class="text-center flex gap-4 justify-center my-4">
                    <button
                        class="text-white hover:text-secondary text-sm bg-secondary hover:bg-gray-900 border border-secondary rounded-xl px-4 py-1 transition-all duration-75"
                        @click="openViewNoteModal"
                    >
                        View note
                    </button>
                </div>
            </simple-card>
        </daisy-modal>

        <daisy-modal
            :overlay="false"
            ref="viewNoteModal"
            id="viewNoteModal"
            class="!w-screen max-h-screen !h-screen"
            :closable="false"
        >
            <div
                class="p-4 bg-[#191919] border-t border-l border-secondary w-[450px] h-[100vh] px-[30px] ml-auto"
            >
                <div class="arrow-icon">
                    <arrow-icon :sizeFull="true" @click="closeViewNoteModal" />
                </div>
                <div class="h-full flex items-center">
                    <div class="bg-white rounded-[22px] w-full p-6 mb-[67px]">
                        <div class="flex justify-between text-secondary">
                            <p>14:36:56 PM</p>
                            <p>December 6, 2022</p>
                        </div>
                        <div class="text-secondary text-lg font-semibold mt-2">
                            <p>Club 4 (East Side Phily Hill)</p>
                        </div>
                        <div class="text-gray-600 mt-3">
                            <p class="mb-3">
                                Member has questions on missed PT class and
                                wants to hold membership for 6 months for
                                medical reasons. Note supplied.
                            </p>
                            <p class="mb-3">Reviewed with manager.</p>
                            <p class="mb-3">Kyle.</p>
                        </div>
                        <div
                            class="text-white flex flex-col gap-4 items-center mt-[100px]"
                        >
                            <div>
                                <button
                                    class="bg-accent-focus px-3 py-2 rounded-[12px]"
                                >
                                    Create an action
                                </button>
                            </div>
                            <div>
                                <button
                                    class="bg-secondary px-3 py-2 rounded-[12px]"
                                >
                                    Resolve
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </daisy-modal>
        <daisy-modal ref="outgoingCallModalRef">
           <MakeCallModal  @close="closeOutgoingCall" @callNow="showInCallModal" @saveNow="saveNow"/>
      </daisy-modal>
      <daisy-modal ref="emailModalRef">
            <SendEmailModal @close="closeEmailModal" @saveEmail="saveEmail" @sendEmail="sendEmail" />
      </daisy-modal>
      <daisy-modal ref="smsModalRef">
           <SendSmsModal @close="closeSMSModal" @saveSms="saveSms" @sendSms="sendSms" />
      </daisy-modal> 
    </div>
</template>
<style scoped>
.people-lead-tbl-row {
    @apply bg-base-100 rounded-[15px] h-14 flex items-center px-[20px] py-[30px] my-[13px] cursor-pointer transition-all duration-75 border-2 border-base-100 hover:border-secondary hover:bg-primary;

    td {
        @apply border-y-2 border-secondary text-left px-3;
    }
    td:first-child {
        @apply border-l-2 rounded-l text-accent-focus/60;
    }
    td:last-child {
        @apply border-r-2 rounded-r capitalize;
    }
    .type-warning {
        @apply bg-orange-400;
    }
    .type-secondary {
        @apply bg-secondary;
    }
}

.more-icon .more-icon-normal {
}
.people-search-tbl-content thead {
    @apply top-0 sticky bg-black h-10 text-white;
}
.alert-modal {
    @apply bg-cover bg-center text-center;
    background-image: url("/notification-modal-background.png");
}

.number-alert-circle {
    @apply flex justify-center;
}

.number-alert-circle .number {
    @apply bg-white w-[40px] h-[40px] rounded-full text-black flex justify-center items-center font-bold pb-[3px] pl-[2px] text-[30px];
}

.info-modal {
    @apply bg-cover bg-center text-center;
    background-image: url("/info-modal-background.png");
}

.dropdown {
    @apply bg-secondary text-white right-[160px] top-[90px] relative w-0;

    .dropdown-container {
        @apply bg-secondary p-3 w-[180px] border-[2px] rounded-[20px];
    }
}

.arrow-icon {
    @apply cursor-pointer h-6 w-6 ml-auto mt-3;
}

.arrow-icon svg {
    @apply h-12 w-12;
}

.dropdown-item {
    @apply mb-2;
}
</style>
<script setup>
import MembershipBtn from "~/components/buttons/membership-btn.vue";
import {
    AlertIcon,
    ArrowIcon,
    CallSquareIcon,
    CrossIcon,
    EmailSquareIcon,
    SmsSquareIcon
} from "~~/components/icons";
import MakeCallModal from '../../check-in/side-car-split/make-call.vue';
import SendEmailModal from '../../check-in/side-car-split/send-email.vue';
import SendSmsModal from '../../check-in/side-car-split/send-sms.vue';

const props = defineProps({
    data: Object,
    columns: {
        type: Array,
        default: [],
    },
});
const alertModal = ref(null);

const openAlertModal = () => {
    alertModal.value.open();
};
const closeAlertModal = () => {
    alertModal.value.close();
};

const infoModal = ref(null);

const openInfoModal = () => {
    infoModal.value.open();
};
const closeInfoModal = () => {
    infoModal.value.close();
};

const dropdownInfo = ref(false);

const showDropdownInfo = () => {
    dropdownInfo.value = true;
};

const hideDropdownInfo = () => {
    dropdownInfo.value = false;
};

const viewNoteModal = ref(false);

const openViewNoteModal = () => {
    viewNoteModal.value.open();
};

const closeViewNoteModal = () => {
    viewNoteModal.value.close();
};


const outgoingCallModalRef = ref(null);
const emailModalRef = ref(null);
const smsModalRef = ref(null);
const outgoingCall = ()=>{
    outgoingCallModalRef.value.open();
}
const closeOutgoingCall = ()=>{
    outgoingCallModalRef.value.close();
}

const openEmailModal = ()=>{
    emailModalRef.value.open();
}
const closeEmailModal = ()=>{
    emailModalRef.value.close();
}
const saveEmail = ()=>{
    emailModalRef.value.close();
}
const sendEmail = ()=>{
    emailModalRef.value.close();
}
const openSMSModal = ()=>{
    smsModalRef.value.open();
}
const closeSMSModal = ()=>{
    smsModalRef.value.close();
}
const saveSms = ()=>{
    smsModalRef.value.close();
}
const sendSms = ()=>{
    smsModalRef.value.close();
}

const showInCallModal = () => {
    outgoingCallModalRef.value.close();
};

const saveNow = () => {
    outgoingCallModalRef.value.close();
};
</script>
