<template>
  <div
    class="relative flex flex-wrap items-center gap-5 sm:col-span-4 md:col-span-4 xl:col-span-3"
  >
    <div class="flex items-center gap-3">
      <arrow-left
        class="pt-1 min-w-12 max-w-12 h-12 cursor-pointer"
        @click="emit('back')"
      ></arrow-left>
      <h5 class="text-2xl whitespace-nowrap mr-2">
        {{ report?.report_name }}
      </h5>
      <div class="relative">
        <button @click.stop="toggleTitleDropdown">
          <vertical-ellipsis
            class="h-6 fill-base-content transform rotate-90 mt-[9px]"
          />
        </button>
        <div class="dropdown" v-show="showTitleDropdown">
          <div class="dropdown-container">
            <div class="dropdown-item" @click="openRenameModal">Rename</div>
            <div class="dropdown-item" @click.stop="toggleTitleDropdown">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-wrap justify-between gap-4 items-center sm:col-span-8 md:col-span-8 xl:col-span-9"
  >
    <div class="flex items-center gap-8">
      <span class="text-lg font-semibold" v-if="actualSection == 'Columns'">
        Leads
      </span>
      <div class="flex gap-1 flex-nowrap items-start">
        <font-awesome-icon
          :icon="['fas', 'circle-info']"
          size="md"
          class="mr-1 mt-[4px] focus:outline-none"
          tabindex="0"
          @click.prevent.stop
        />
        <p>
          Do you want to run another report?
          <button
            @click="openCreateJoinedReportModal"
            class="text-secondary font-semibold"
          >
            Joined Report
          </button>
        </p>
      </div>
    </div>
    <div class="flex gap-4 ml-auto">
      <Button
        size="sm"
        outline
        class="normal-case rounded-lg hover:text-secondary h-8"
        @click="emit('close')"
      >
        Cancel
      </Button>
      <Button
        size="sm"
        outline
        class="normal-case rounded-lg hover:text-secondary h-8"
        @click="emit('runReport')"
      >
        Run
      </Button>
      <edit-report>
        <button
          class="bg-secondary rounded-l-lg px-5 h-8"
          @click="emit('saveReport')"
        >
          Save
        </button>
      </edit-report>
    </div>
  </div>
  <daisy-modal :overlay="true" :show-close-button="false" ref="renameModal">
    <rename-modal
      @close="closeRenameModal"
      :report-name="report?.report_name"
      @changeName="changeName"
      :open="renameModal?.isOpen"
    />
  </daisy-modal>
  <daisy-modal
    :overlay="true"
    :show-close-button="false"
    ref="createJoinedReportModal"
  >
    <create-joined-report-modal
      @close="closeCreateJoinedReportModal"
      :report-name="report?.report_name"
    />
  </daisy-modal>
</template>

<style scoped lang="postcss">
.dropdown {
  @apply absolute top-[28px] right-[0px] h-auto z-[60];
  .dropdown-container {
    @apply bg-base-300 border-secondary border text-base font-normal rounded-2xl p-3 px-5 w-[120px];
    .dropdown-item {
      @apply mb-2 cursor-pointer;
    }
  }
}
</style>

<script setup>
import { ArrowLeft, VerticalEllipsis } from "~/components/icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import EditReport from "../../../edit-report/index.vue";
import RenameModal from "../../../rename-modal.vue";
import CreateJoinedReportModal from "../create-joined-report-modal.vue";
library.add(faInfoCircle);

const props = defineProps({
  report: {
    type: Object,
  },
  actualSection: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["changeReport", "runReport", "saveReport"]);

const showTitleDropdown = ref(false);

const toggleTitleDropdown = () => {
  showTitleDropdown.value = !showTitleDropdown.value;
};

const renameModal = ref(null);

const openRenameModal = () => {
  toggleTitleDropdown();
  renameModal.value.open();
};

const closeRenameModal = () => {
  renameModal.value.close();
};

const createJoinedReportModal = ref(null);

const openCreateJoinedReportModal = () => {
  createJoinedReportModal.value.open();
};

const closeCreateJoinedReportModal = () => {
  createJoinedReportModal.value.close();
};

const changeName = (name) => {
  emit("changeReport", { ...props.report, report_name: name });
};
</script>
