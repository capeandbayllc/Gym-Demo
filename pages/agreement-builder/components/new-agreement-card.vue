<template>
    <simple-card title="Start a new agreement">
        <div class="new-agreement-card-content">
            <div class="title-text w-28 text-lg pt-5">Select your Template</div>
            <div v-for="(type, ndx) in types" :key="ndx" class="create-option">
                <empty-file-icon class="mb-2" />
                {{type}}
            </div>
            <div class="create-option" @click="showAgreementModal">
                <add-icon class="mb-2.5" />
                Upload a document
            </div>
        </div>
    </simple-card>
    <daisy-modal ref="agreementModal">
        <agreement-modal />
    </daisy-modal>
</template>
<style scoped lang="postcss">
.new-agreement-card-content {
    @apply grid grid-cols-7 gap-4 py-6 px-9 bg-transparent;
    .create-option {
        @apply flex flex-col items-center text-xs;
    }
}
</style>
<script setup>
import { AddIcon,EmptyFileIcon } from '~~/components/icons';
import AgreementModal from './agreement-modal.vue';
const types = ["Blank", "Bronze Membership", "Silver Membership", "Gold Membership", "Platinum Membership", "Traning"];
const agreementModal = ref(null);
const showAgreementModal = () => {
    agreementModal.value.open();
};
</script>