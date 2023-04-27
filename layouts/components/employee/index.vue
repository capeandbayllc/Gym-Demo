<template>
  <div class="border border-[#0075c9] outer-gradient-modal p-4 rounded-[19px]">
    <ModalWrapper
      v-if="signIn && visible"
      title="Complete the following:"
      @close="close"
    >
      <template #body>
        <SignIn @submit="submitSignin" />
      </template>
      <template #footer>
        <div class="actions text-center pt-5 pb-3">
          <button class="text-[#0075c9] text-[15px] cursor-pointer">
            Sign-In With QR Code
          </button>
        </div>
      </template>
    </ModalWrapper>
    <ModalWrapper
      v-else-if="timeTrack"
      title="Choose an action:"
      @close="close"
    >
      <template #body>
        <TimeTrack @break="$emit('showBreak')" />
      </template>
      <template #footer>
        <div
          class="actions flex justify-center items-center pt-5 pb-3 space-x-3"
        >
          <button
            class="text-[#0075c9] text-[15px] rounded-[12px] border border-[#0075c9] px-2"
            @click="activeTimesheet"
          >
            Timesheet
          </button>
          <button
            class="text-[#0075c9] text-[15px] rounded-[12px] border border-[#0075c9] px-2"
          >
            Schedule
          </button>
          <button
            class="text-[#0075c9] text-[15px] rounded-[12px] border border-[#0075c9] px-2"
            @click="activeHoursPTO"
          >
            Hours & PTO
          </button>
        </div>
      </template>
    </ModalWrapper>
    <ModalWrapper
      v-else-if="timesheet"
      title="Timesheet:"
      compWidth="w-[90vw] max-w-[998px]"
      @close="close"
    >
      <template #body>
        <Timesheet />
      </template>
    </ModalWrapper>
    <ModalWrapper v-else-if="hoursPTO" title="Hours & PTO" @close="close">
      <template #body>
        <HoursPTO
          @gotoTimesheet="activeTimesheet"
          @gotoAddHours="activeAddDay"
        />
      </template>
    </ModalWrapper>
    <ModalWrapper v-else-if="addDay" title="Add Day" @close="close">
      <template #body>
        <AddDay />
        <div class="flex justify-end items-center mt-6 space-x-4">
          <button class="text-[#707070] rounded-[12px] px-2" @click="close">
            Cancel
          </button>
          <button class="text-white rounded-[12px] bg-[#0075c9] px-2 h-[36px]">
            Save
          </button>
        </div>
      </template>
    </ModalWrapper>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ModalWrapper from "./modal-wrapper.vue";
import SignIn from "./sign-in.vue";
import TimeTrack from "./time-track.vue";
import Timesheet from "./timesheet.vue";
import HoursPTO from "./hours-pto.vue";
import AddDay from "./add-day.vue";

const emit = defineEmits(["close"]);
const props = defineProps({
  visible: Boolean,
});

let signIn = ref(true);
let timeTrack = ref(false);
let timesheet = ref(false);
let hoursPTO = ref(false);
let addDay = ref(false);

const close = () => {
  emit("close");
  if (props.visible) {
    signIn.value = true;
    allFalse();
  } else {
    signIn.value = false;
    allFalse();
  }
};
const allFalse = () => {
  timeTrack.value = false;
  timesheet.value = false;
  hoursPTO.value = false;
  addDay.value = false;
};
const submitSignin = (param) => {
  timeTrack.value = param;
  signIn.value = false;
};
const activeTimesheet = () => {
  timesheet.value = true;
  timeTrack.value = false;
};
const activeHoursPTO = () => {
  hoursPTO.value = true;
  timeTrack.value = false;
};
const activeAddDay = () => {
  addDay.value = true;
  hoursPTO.value = false;
};
</script>
