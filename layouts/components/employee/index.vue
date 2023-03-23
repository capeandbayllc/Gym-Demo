<template>
  <div class="border border-[#0075c9] outer-gradient-modal p-4 rounded-[19px]">
    <ModalWrapper v-if="signIn && visible" title="Complete the following:" class="w-[721px]" @close="close">
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
    <ModalWrapper v-else-if="timeTrack" title="Choose an action:" @close="close">
      <template #body>
        <TimeTrack />
      </template>
      <template #footer>
        <div class="actions">
          <button class="text-[#0075c9] text-[15px]">
            Sign-In With QR Code
          </button>
        </div>
      </template>
    </ModalWrapper>
  </div>
</template>
<script setup>
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import {ref} from 'vue';
import ModalWrapper from "./modal-wrapper.vue";
import SignIn from "./sign-in.vue";
import TimeTrack from "./time-track.vue";

const emit = defineEmits(['close'])
const props = defineProps({
  visible: Boolean
})

let signIn = ref(true)
let timeTrack = ref(false)

const close = ()=> {
  emit('close')
  if(props.visible) {
    signIn.value = true
    timeTrack.value = false
  } else {
    signIn.value = false
    timeTrack.value = false
  }
  
}
const submitSignin = (param)=> {
  timeTrack.value = param
  signIn.value = false
}
</script>
