<template>
  <daisy-modal
    v-if="disableCall"
    ref="outgoingCallModalRef"
    @close="$emit('on:close', 'call')"
  >
    <MakeCall :user="user" @callNow="showOnGoingCall" />
  </daisy-modal>
  <daisy-modal
    v-if="disableCall"
    ref="onGoingCallModalRef"
    @close="$emit('on:close', 'ongoing-call')"
  >
    <OngoingCall :user="user" />
  </daisy-modal>
  <daisy-modal
    v-if="disableEmail"
    ref="emailModalRef"
    @close="$emit('on:close', 'email')"
  >
    <SendEmail :user="user" />
  </daisy-modal>
  <daisy-modal
    v-if="disableText"
    ref="textModalRef"
    @close="$emit('on:close', 'text')"
  >
    <SendSms :user="user" />
  </daisy-modal>
</template>

<script setup lang="ts">
import MakeCall from "~/pages/check-in/side-car-split/make-call.vue";
import SendEmail from "~/pages/check-in/engage/email.vue";
import SendSms from "~/pages/check-in/engage/message.vue";
import OngoingCall from "~/pages/check-in/side-car-split/ongoing-call.vue";

export type Type = "text" | "email" | "call" | null;
interface Ref {
  value: any;
}

interface Props {
  disableEmail?: boolean;
  disableText?: boolean;
  disableCall?: boolean;
  show: Type;
  user: object;
}

const emit = defineEmits<{
  (e: "on:close", type: Type): void;
}>();

const props = withDefaults(defineProps<Props>(), {
  disableEmail: true,
  disableText: true,
  disableCall: true,
  show: {
    type: String,
    validator: (prop: Type) =>
      ["text", "email", "call", "ongoing-call", null].includes(prop),
  },
});

const outgoingCallModalRef = ref(null);
const onGoingCallModalRef = ref(null);
const emailModalRef = ref(null);
const textModalRef = ref(null);
let lastOpen: Ref | null = null;

watch(() => props.show, toggleModal);

function showOnGoingCall() {
  toggleModal("ongoing-call");
}

function toggleModal(value: String | null): void {
  if (value === null) {
    if (lastOpen !== null) {
      lastOpen.value.close();
    }
    return;
  }

  if (value === "text") {
    lastOpen = textModalRef;
  } else if (value === "email") {
    lastOpen = emailModalRef;
  } else if (value === "call") {
    lastOpen = outgoingCallModalRef;
  } else {
    lastOpen = onGoingCallModalRef;
  }

  lastOpen.value.open();
}
</script>
