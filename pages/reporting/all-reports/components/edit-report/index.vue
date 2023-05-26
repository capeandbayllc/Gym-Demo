<template>
  <select-dropdown
    value=""
    :items="['Clone', 'Export', 'Send Email']"
    @onChange="selectEditOption"
    label="Edit"
    class="bg-secondary h-9 !w-[120px] rounded-xl px-1 w-full"
  />
  <daisy-modal
    :overlay="true"
    :showCloseButton="false"
    ref="cloneReportModal"
    class="w-fit"
  >
    <clone-report-modal
      @close="closeCloneReportModal"
      @save="emit('saveClonedReport', $event)"
      :open="cloneReportModal?.isOpen"
      :reportName="report?.report_name"
    />
  </daisy-modal>
  <daisy-modal
    :overlay="true"
    :showCloseButton="false"
    ref="exportReportModal"
    class="w-fit"
  >
    <export-report-modal @close="closeExportReportModal" />
  </daisy-modal>
  <daisy-modal
    :overlay="true"
    :showCloseButton="false"
    ref="sendEmailModal"
    class="w-fit"
  >
    <send-email-modal @close="closeSendEmailModal" />
  </daisy-modal>
</template>

<script setup>
import CloneReportModal from "./components/clone-report-modal.vue";
import ExportReportModal from "./components/export-report-modal.vue";
import SendEmailModal from "./components/send-email-modal.vue";
import selectDropdown from "../report-details-modal/components/select-dropdown.vue";

const props = defineProps({
  report: {
    type: Object,
  },
});

const emit = defineEmits("saveClonedReport");

const selectEditOption = (item) => {
  if (item == "Clone") {
    openCloneReportModal();
  } else if (item == "Export") {
    openExportReportModal();
  } else if (item == "Send Email") {
    openSendEmailModal();
  }
};

const cloneReportModal = ref(null);
const openCloneReportModal = () => {
  cloneReportModal.value.open();
};
const closeCloneReportModal = () => {
  cloneReportModal.value.close();
};

const exportReportModal = ref(null);
const openExportReportModal = () => {
  exportReportModal.value.open();
};
const closeExportReportModal = () => {
  exportReportModal.value.close();
};

const sendEmailModal = ref(null);
const openSendEmailModal = () => {
  sendEmailModal.value.open();
};
const closeSendEmailModal = () => {
  sendEmailModal.value.close();
};
</script>
