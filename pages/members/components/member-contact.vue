<template>
    <simple-card title="Contact Member">
      <div class="mx-3 my-1">
        <div
          class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block m-2 border-primary px-2 py-1 cursor-pointer text-secondary"
          tabindex="-1" @click.stop="openEmailModal"
        >
          Email
        </div>
        <div
          class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block m-2 border-primary px-2 py-1 cursor-pointer text-secondary"
          tabindex="-1" @click.stop="openCallModal"
        >
          Call
        </div>
        <div
          class="hover:bg-white uppercase hover:text-black border transition rounded border-secondary inline-block m-2 border-primary px-2 py-1 cursor-pointer text-secondary"
          tabindex="-1" @click.stop="openSmsModal"
        >
          SMS
        </div>

        <daisy-modal ref="callModalRef">
          <call-modal @close="closeCallModal"/>
        </daisy-modal>
        <daisy-modal ref="emailModalRef">
          <email-modal @close="closeEmailModal"/>
        </daisy-modal>
        <daisy-modal ref="smsModalRef">
          <sms-modal @close="closeSmsModal"/>
        </daisy-modal>
      </div>
    </simple-card>
</template>

<script setup>
import EmailModal from '~/pages/check-in/engage/email.vue';
import SmsModal from '~/pages/check-in/engage/message.vue';
import CallModal from "~/pages/call-user/components/outgoing-call-modal.vue";

const callModalRef = ref(null);
const emailModalRef = ref(null);
const smsModalRef = ref(null);

const openCallModal = () => {
  callModalRef.value.open();
}
const closeCallModal = () => {
  callModalRef.value.close();
}

const openEmailModal = () => {
  emailModalRef.value.open();
}
const closeEmailModal = () => {
  emailModalRef.value.close();
}

const openSmsModal = () => {
  smsModalRef.value.open();
}
const closeSmsModal = () => {
  smsModalRef.value.close();
}
</script>