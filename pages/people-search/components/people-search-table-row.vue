<template>
  <!-- if making changes ensure grid columns are synchronised with headers -->
  <div>
    <div class="people-lead-tbl-row mr-2 font-light text-[0.8rem]">
      <div class="flex items-center gap-2">
        <img
          :src="data.profile_photo_path"
          :gender="data.gender"
          class="w-8 border-2 border-secondary rounded-lg"
        />
        {{ data.first_name }} {{ data.last_name }}
      </div>

      <div class="flex items-center text-base font-semibold text-green-500">
        <input
          type="checkbox"
          @click.stop=""
          class="checkbox checkbox-secondary bg-white mr-2"
        />
        {{ data.segment }}
      </div>
      <div class="flex items-center gap-2 px-4">
        <AlertIcon class="mr-2 text-red-600" @click.stop="openAlertModal" />
        <AlertIcon class="mr-2 text-yellow-500" @click.stop="openAlertModal" />
        <span>2</span>
      </div>

      <div class="flex items-center justify-evenly">
        <div class="">
          <SmsSquareIcon @click.stop="contactOption = 'text'" />
        </div>
        <a class="">
          <EmailSquareIcon @click.stop="contactOption = 'email'" />
        </a>
        <a>
          <CallSquareIcon @click.stop="contactOption = 'call'" />
        </a>
      </div>
      <div class="text-xs px-4" :title="data.homeLocation.name">
        Club {{ Math.floor(Math.random() * 10) }}
      </div>
      <div>
        <membership-status :status="data.type" />
      </div>
      <div class="w-fit justify-self-center relative">
        <div
          v-show="!dropdownInfo"
          @click.stop="showDropdownInfo"
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
          @click.stop="hideDropdownInfo"
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
        <div class="dropdown z-[1]" v-show="dropdownInfo" @click.stop>
          <div class="dropdown-container">
            <button class="absolute right-4" @click.stop="hideDropdownInfo">
              <cross-icon></cross-icon>
            </button>

            <div @click.stop="openInfoModal" class="dropdown-item">
              Edit account
            </div>
            <div @click.stop="openInfoModal" class="dropdown-item">
              View alerts
            </div>
            <div @click.stop="openInfoModal" class="dropdown-item">
              Add Guest Pass
            </div>
            <div @click.stop="openInfoModal">POS</div>
          </div>
        </div>
      </div>
    </div>
    <daisy-modal ref="alertModal" id="alertModal" :closable="false">
      <simple-card class="p-4 mx-auto alert-modal">
        <close-btn :isBlack="true" @click="closeAlertModal" />
        <h5 class="text-3xl mb-2">Alert</h5>
        <div class="number-alert-circle mb-3">
          <div class="number">3</div>
        </div>
        <p class="text-lg mb-1">Overdue membership. Missing fees.</p>
        <p class="font-thin mb-6">Aya Buchanan | 5/5/2022, 12:24:44 PM</p>
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
                Member has questions on missed PT class and wants to hold
                membership for 6 months for medical reasons. Note supplied.
              </p>
              <p class="mb-3">Reviewed with manager.</p>
              <p class="mb-3">Kyle.</p>
            </div>
            <div class="text-white flex flex-col gap-4 items-center mt-[100px]">
              <div>
                <button class="bg-accent-focus px-3 py-2 rounded-[12px]">
                  Create an action
                </button>
              </div>
              <div>
                <button class="bg-secondary px-3 py-2 rounded-[12px]">
                  Resolve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </daisy-modal>

    <Options
      :user="data"
      :show="contactOption"
      @on:close="contactOption = null"
    />
  </div>
</template>
<style scoped lang="postcss">
.people-lead-tbl-row {
  @apply grid grid-cols-[1fr_1fr_8rem_1fr_0.5fr_0.5fr_4rem];
  @apply bg-base-100 rounded-lg px-4 h-14 items-center my-2 cursor-pointer transition-all duration-75 border-2 border-base-100;
  @apply hover:border-secondary hover:bg-primary;

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
  @apply top-0 bg-black h-10 text-white;
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
  @apply text-white absolute right-0;

  .dropdown-container {
    @apply bg-secondary p-3 w-48 border-2 rounded-3xl;
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
import MembershipStatus from "~/components/buttons/membership-status.vue";
import {
  AlertIcon,
  ArrowIcon,
  CallSquareIcon,
  CrossIcon,
  EmailSquareIcon,
  SmsSquareIcon,
} from "~~/components/icons";
import Options from "~/pages/components/contact/Options.vue";

const contactOption = ref(null);

watch(contactOption, (v) => console.log(111, v));
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
  return; // @Clayton want this to do nothing for now
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
const saveEmail = () => {
  emailModalRef.value.close();
};
const sendEmail = () => {
  emailModalRef.value.close();
};
const saveSms = () => {
  smsModalRef.value.close();
};
const sendSms = () => {
  smsModalRef.value.close();
};
const saveNow = () => {
  outgoingCallModalRef.value.close();
};
</script>
