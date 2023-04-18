<template>
  <tr
    class="relative call-list-item bg-[#1A1A1A] hover:bg-secondary hover:bg-opacity-30"
  >
    <td>
      <div class="flex items-center min-h-[28px]">
        <input type="checkbox" class="h-5 ml-2 mr-2 w-5 rounded" />
      </div>
    </td>
    <td>
      <div
        class="flex text-left min-h-[28px] whitespace-nowrap text-ellipsis overflow-hidden"
      >
        <img :src="data.profile_photo_path" class="h-7 mr-2 rounded-full" />
        <span
          class="text-ellipsis overflow-hidden whitespace-nowrap max-w-[5rem]"
          >{{ data.first_name }}</span
        >

        {{ data.last_name }}
      </div>
    </td>
    <td
      class="text-left whitespace-nowrap text-ellipsis overflow-hidden max-w-[5rem]"
    >
      {{ data.homeLocation.name }}
    </td>

    <td class="">
      <div class="flex justify-evenly gap-2">
        <button class="contact-button" @click.stop="contactOption='call'">
          <CallIcon class="icon"></CallIcon>
        </button>

        <button class="contact-button" @click.stop="contactOption = 'email'">
          <EmailIcon class="icon"></EmailIcon>
        </button>

        <button class="contact-button" @click.stop="contactOption = 'text'">
          <MessageIcon class="icon"></MessageIcon>
        </button>
      </div>
    </td>
    <td class="px-4">
      <membership-status :status="data.membership_type" />
    </td>
    <td>
      <div class="min-h-[28px] ml-[1rem]">{{ data.updated_at }}</div>
    </td>
    <td>
      <div class="dropdown dropdown-end">
        <div
          class="btn btn-ghost btn-sm text-base-content"
          tabindex="0"
          @click.prevent.stop
          @mouseover="hovering"
        >
          <font-awesome-icon
            icon="ellipsis-h"
            class="text-[#0075C9]"
            size="lg"
          />
        </div>
        <div
          class="dropdown-content menu p-2 bg-secondary border-1 rounded items-start"
        >
          <cross-icon
            class="flex absolute text-white h-[15px] w-[15px] top-2 right-2 cursor-pointer"
          ></cross-icon>
          <div class="dropdown-item" tabindex="-1">Edit Account</div>
          <div class="dropdown-item" tabindex="-1">View Alerts</div>
          <div class="dropdown-item" tabindex="-1">Add Guest Pass</div>
          <div class="dropdown-item" tabindex="-1">POS</div>
        </div>
      </div>
    </td>
  </tr>

    <Options :user="data" :show="contactOption" @on:close="contactOption = null" />
</template>
<style scoped>
.call-list-item {
  @apply h-12 text-xs;

  td {
    @apply border-y-2 border-secondary text-center;
    > div {
      @apply flex items-center border-secondary px-1;
    }
  }
  td:first-child {
    @apply border-l-2 rounded-l-xl;
    > div {
      @apply justify-start;
    }
  }
  td:last-child {
    @apply border-r-2 rounded-r-xl capitalize text-accent-focus/60;
    > div {
      @apply border-none px-2;
    }
  }
  .type-warning {
    @apply bg-orange-400;
  }
  .dot {
    @apply float-left h-[.5rem] w-[.5rem] rounded-full bottom-0 right-2 mr-[2px];
  }
  .contact-button {
    @apply bg-[#0089FF] border-white border rounded-xl p-1;
  }
  .icon {
    @apply fill-white w-4 h-4;
  }
  .dropdown-content {
    display: block !important;
    @apply mt-[8rem] border-2 rounded-xl flex;
  }
  .dropdown-item {
    @apply flex flex-col hover:text-opacity-50 uppercase hover:text-black text-left text-xs h-[1.5rem] w-[8rem] text-white transition rounded  inline-block my-1 border-primary px-2 py-1 cursor-pointer;
  }
}
</style>
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import MembershipStatus from "@/components/buttons/membership-status.vue";
import {
  CallIcon,
  EmailIcon,
  MessageIcon,
  CrossIcon,
} from "~/components/icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Options from "~/pages/components/contact/Options.vue";


library.add(faEllipsisH);

const contactOption = ref(null);

const props = defineProps({
  data: Object,
});
let isHovering = false;

const hovering = () => {
  console.log(isHovering);
  isHovering = !isHovering;
};

const outgoingCallModalRef = ref(null);
const emailModalRef = ref(null);
const smsModalRef = ref(null);
const outgoingCall = () => {
  outgoingCallModalRef.value.open();
};
const closeOutgoingCall = () => {
  outgoingCallModalRef.value.close();
};

const openEmailModal = () => {
  emailModalRef.value.open();
};
const closeEmailModal = () => {
  emailModalRef.value.close();
};
const saveEmail = () => {
  emailModalRef.value.close();
};
const sendEmail = () => {
  emailModalRef.value.close();
};
const openSMSModal = () => {
  smsModalRef.value.open();
};
const closeSMSModal = () => {
  smsModalRef.value.close();
};
const saveSms = () => {
  smsModalRef.value.close();
};
const sendSms = () => {
  smsModalRef.value.close();
};

const showInCallModal = () => {
  outgoingCallModalRef.value.close();
};

const saveNow = () => {
  outgoingCallModalRef.value.close();
};
</script>
