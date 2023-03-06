<template>
  <daisy-modal v-if="disableCall" ref="outgoingCallModalRef">
    <OutgoingCallModal @callNow="showOnGoingCall" />
  </daisy-modal>
  <daisy-modal v-if="disableCall" ref="onGoingCallModalRef" @close="$emit('on:close', 'call')">
    <OngoingCallCard />
  </daisy-modal>
  <daisy-modal v-if="disableEmail" ref="emailModalRef" @close="$emit('on:close', 'email')">
    <EmailModal />
  </daisy-modal>
  <daisy-modal v-if="disableText" ref="textModalRef" @close="$emit('on:close', 'text')">
    <TextModal />
  </daisy-modal>
</template>

<script setup lang="ts">
import OutgoingCallModal from "~/pages/call-user/components/outgoing-call-modal.vue";
import EmailModal from '~/pages/check-in/engage/email.vue';
import TextModal from '~/pages/check-in/engage/message.vue';
import OngoingCallCard from "~/pages/call-user/components/ongoing-call-card.vue";

export type Type = 'text' | 'email' | 'call' | null;
interface Ref {
  value: any
}

interface Props {
  disableEmail?: boolean
  disableText?: boolean
  disableCall?: boolean,
  show: Type
}

const emit = defineEmits<{
  (e: 'on:close', type: Type): void
}>()

const props = withDefaults(defineProps<Props>(), {
  disableEmail: true,
  disableText: true,
  disableCall: true,
  show: {
    type: String,
    validator: (prop: Type) => ['text', 'email', 'call', null].includes(prop)
  }
});

const outgoingCallModalRef = ref(null);
const onGoingCallModalRef = ref(null);
const emailModalRef = ref(null);
const textModalRef = ref(null);
let lastOpen: Ref|null = null;
let startedCall: Boolean = false;

watch(() => props.show, toggleModal);

function showOnGoingCall() {
  toggleModal(null);
  toggleModal('call');
}

function toggleModal(value: String|null): void {
  if (value === null) {
    if (lastOpen !== null) {
      lastOpen.value.close();
    }
    return;
  }

  if (value === 'text') {
    lastOpen = textModalRef;
  } else if (value === 'email') {
    lastOpen = emailModalRef;
  } else {
    lastOpen = startedCall ? onGoingCallModalRef : outgoingCallModalRef;
    startedCall = true;
  }

  lastOpen.value.open();
}
</script>
