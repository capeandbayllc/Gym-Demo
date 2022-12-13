<template>
    <div class="call-user-container">
        <daisy-modal ref="outgoingCallModalRef">
            <outgoing-call-modal @callNow="showInCallModal"></outgoing-call-modal>
        </daisy-modal>
        <daisy-modal ref="inCallModalRef">
            <in-call-modal @endCall="showEndCallModal"></in-call-modal>
        </daisy-modal>
        <daisy-modal ref="endCallModalRef">
            <end-call-modal @incomingCall="showIncomingCallModal"></end-call-modal>
        </daisy-modal>
        <daisy-modal ref="incomingCallModalRef">
            <incoming-call-modal @endCall="showEndCallModal" @callNow="showInCallModal"></incoming-call-modal>
        </daisy-modal>
    </div>
</template>

<script setup>
import OutgoingCallModal from './components/outgoing-call-modal.vue';
import InCallModal from './components/in-call-modal.vue';
import EndCallModal from './components/end-call-modal.vue';
import IncomingCallModal from './components/incoming-call-modal.vue';

const outgoingCallModalRef = ref(null);
const inCallModalRef = ref(null);
const endCallModalRef = ref(null);
const incomingCallModalRef = ref(null);

onMounted(() => {
    outgoingCallModalRef.value.open();
});

const showInCallModal = () => {
    outgoingCallModalRef.value.close();
    incomingCallModalRef.value.close();
    inCallModalRef.value.open();
};

const showEndCallModal = () => {
    inCallModalRef.value.close();
    incomingCallModalRef.value.close();
    endCallModalRef.value.open();
};

const showIncomingCallModal = () => {
    endCallModalRef.value.close();
    incomingCallModalRef.value.open();
};
</script>

<style scoped>
.call-user-container {
    @apply py-4 pr-5 w-full h-fit pl-16;
}
</style>