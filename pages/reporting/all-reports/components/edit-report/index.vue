<template>
  <div class="flex mr-5">
    <slot></slot>
    <select-dropdown
      value=""
      :items="exportOptions"
      @onChange="selectEditOption"
      label=""
      class="edit-dropdown"
      :class="{
        'edit-dropdown-outline': selectOutline,
        'edit-dropdown-secondary': !selectOutline,
      }"
    />
  </div>
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

<style lang="postcss">
.edit-dropdown {
  @apply h-8 !w-[20px] rounded-r-lg w-full border-l;
  .select-box-btn {
    @apply !w-[24px] !px-0 !mx-0 !pr-[32px] py-[18px] rounded-r-xl;
  }
  .select-box-content {
    @apply overflow-x-visible min-w-[97px] !left-[-65px] !top-[12px] !rounded-xl border border-base-content;
  }
  .select-box-content div:first-child {
    @apply min-w-[120px];
  }
}
.edit-dropdown-outline {
  @apply border;
}
.edit-dropdown-secondary {
  @apply bg-secondary border-base-content/50;
}
</style>

<script setup>
import CloneReportModal from "./components/clone-report-modal.vue";
import ExportReportModal from "./components/export-report-modal.vue";
import SendEmailModal from "./components/send-email-modal.vue";
import selectDropdown from "../report-details-modal/components/select-dropdown.vue";

const props = defineProps({
  report: {
    type: Object,
  },
  selectOutline: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits("saveClonedReport");

const selectEditOption = (item) => {
  if (item == "clone") {
    openCloneReportModal();
  } else if (item == "export") {
    openExportReportModal();
  } else if (item == "send_email") {
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

const exportOptions = [
  { value: "clone", label: "Clone" },
  { value: "export", label: "Export" },
  { value: "send_email", label: "Send Email" },
];
</script>
