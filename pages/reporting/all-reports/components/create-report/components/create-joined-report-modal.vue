<template>
  <div class="modal-container">
    <div class="modal-content">
      <div class="font-semibold text-xl mb-6">Create a Report</div>
      <p class="mb-3">
        View multiple reports at once by creating a Joined Report.
      </p>
      <div class="max-full max-h-[60vh] overflow-visible">
        <div class="select-container">
          <div>
            <div class="select-title">Report 1</div>
            <input
              type="text"
              disabled
              value="Untitled report"
              class="dark-input"
            />
          </div>
          <div>
            <label class="select-title">Report 2</label>
            <select-box
              :items="primaryModules"
              :bg-secondary-opened="true"
              :show-search="false"
              :showClearList="false"
              label="Select report"
              :class="`z-[${i}]`"
              class="select-box"
              :value="selectedPrimaryModule"
              @on-change="setPrimaryModule"
            />
          </div>
          <div class="text-left">
            <button
              @click="openCreateJoinedReportModal"
              class="text-secondary font-semibold"
            >
              Add Report
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-right pt-6 pb-4">
      <Button
        ghost
        size="sm"
        class="normal-case mr-2 rounded-lg"
        @click="emit('close')"
      >
        Cancel
      </Button>
      <Button
        size="sm"
        secondary=""
        class="normal-case rounded-lg"
        @click="emit('next')"
      >
        Save
      </Button>
    </div>
  </div>
  <daisy-modal
    :overlay="true"
    id="reportSchedulerModal"
    ref="reportSchedulerModal"
  >
    <report-scheduler-modal
      @close="closeReportSchedulerModal"
      :folders="folders"
    />
  </daisy-modal>
</template>

<style scoped lang="postcss">
.modal-container {
  @apply p-4 bg-base-300 border-2 rounded-3xl text-[0.9rem] flex flex-col border-secondary relative;

  .modal-content {
    @apply border-secondary text-base-content px-10 py-7 bg-gradient-to-b from-secondary-focus to-base-300/30 border-2 rounded-2xl max-w-[500px] w-[90vw] gap-5;
    ::-webkit-scrollbar {
      @apply hidden;
    }

    .select-container {
      @apply mb-7 flex flex-col gap-5;

      .select-title {
        @apply pb-2 text-[15px] font-semibold;
      }

      .select-box {
        @apply bg-neutral text-base-content !h-10 py-2 rounded-lg !text-left;
      }
    }
    .dark-input {
      @apply rounded-xl h-9 bg-neutral px-3 w-full;
    }
  }
}
</style>
<style lang="postcss">
.select-box {
  .select-box-btn {
    @apply !h-10 rounded-lg;
  }
  .select-box-content {
    @apply top-[8px];
  }
}
</style>

<script setup>
const props = defineProps({
  folders: {
    type: Array,
    default: [],
  },
});

const emit = defineEmits(["close"]);

const selectedPrimaryModule = ref(null);
const primaryModules = [
  {
    value: "leads",
    label: "Leads",
  },
  {
    value: "contacts",
    label: "Contacts",
  },
  {
    value: "accounts",
    label: "Accounts",
  },
  {
    value: "deals",
    label: "Deals",
  },
  {
    value: "tasks",
    label: "Tasks",
  },
  {
    value: "meetings",
    label: "Meetings",
  },
  {
    value: "calls",
    label: "Calls",
  },
];
</script>
