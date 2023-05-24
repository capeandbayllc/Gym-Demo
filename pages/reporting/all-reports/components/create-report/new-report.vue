<template>
  <div class="modal-container">
    <div class="modal-content">
      <div class="font-semibold text-xl mb-7">Create a Report</div>

      <div class="max-full min-h-[350px] max-h-[60vh] overflow-auto">
        <div class="select-container">
          <div class="select-title">Select Primary Module</div>
          <select-box
            :items="primaryModules"
            :bg-secondary-opened="true"
            :show-search="false"
            :showClearList="false"
            label="Select Primary Module"
            :class="`z-[${i}]`"
            class="select-box"
            :value="selectedPrimaryModule"
            @on-change="setPrimaryModule"
          />
        </div>
        <div class="select-container" v-if="selectedPrimaryModule">
          <div class="select-title">Select Secondary Module</div>
          <select-box
            :items="[]"
            :bg-secondary-opened="true"
            :show-search="false"
            :showClearList="false"
            label="Select Secondary Module"
            :class="`z-[${i}]`"
            class="select-box"
          />
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
      @apply mb-7;

      .select-title {
        @apply pb-2 text-[15px] font-semibold;
      }

      .select-box {
        @apply bg-neutral text-base-content !h-10 py-2 rounded-lg !text-left;
      }
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
import ReportSchedulerModal from "./components/report-scheduler-modal.vue";

const reportSchedulerModal = ref(null);

const props = defineProps({
  folders: {
    type: Array,
    default: [],
  },
});

const openReportSchedulerModal = () => {
  reportSchedulerModal.value.open();
};
const closeReportSchedulerModal = () => {
  reportSchedulerModal.value.close();
};
const emit = defineEmits(["close"]);

const changeSelect = (item, selected) => {
  if (item.title == "Schedule") {
    openReportSchedulerModal();
  }
};

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

const setPrimaryModule = (moduleName) => {
  console.log(moduleName);
  selectedPrimaryModule.value = moduleName;
};
// const selects = [
//     {
//         title: "Select Primary Module",
//         values: [
//             {
//                 value: "leads",
//                 label: "Leads",
//             },
//             {
//                 value: "contacts",
//                 label: "Contacts",
//             },
//             {
//                 value: "accounts",
//                 label: "Accounts",
//             },
//             {
//                 value: "deals",
//                 label: "Deals",
//             },
//             {
//                 value: "tasks",
//                 label: "Tasks",
//             },
//             {
//                 value: "meetings",
//                 label: "Meetings",
//             },
//             {
//                 value: "calls",
//                 label: "Calls",
//             },
//         ],
//     },
//       {
//         title: "Start Date",
//         values: [
//           {
//             value: "today",
//             label: "Today",
//           },
//           {
//             value: "tomorrow",
//             label: "Tomorrow",
//           },
//         ],
//       },
//       {
//         title: "End Date",
//         values: [
//           {
//             value: "today",
//             label: "Today",
//           },
//           {
//             value: "tomorrow",
//             label: "Tomorrow",
//           },
//         ],
//       },
//       {
//         title: "Post Rate",
//         values: [
//           {
//             value: "excel",
//             label: "Excel",
//           },
//           {
//             value: "csv",
//             label: "CSV",
//           },
//           {
//             value: "pdf",
//             label: "PDF",
//           },
//         ],
//       },
//       {
//         title: "Reocurring Report",
//         values: [
//           {
//             value: "excel",
//             label: "Excel",
//           },
//           {
//             value: "csv",
//             label: "CSV",
//           },
//           {
//             value: "pdf",
//             label: "PDF",
//           },
//         ],
//       },
//       {
//         title: "Schedule",
//         values: [
//           {
//             value: "excel",
//             label: "Excel",
//           },
//           {
//             value: "csv",
//             label: "CSV",
//           },
//           {
//             value: "pdf",
//             label: "PDF",
//           },
//         ],
//       },
// ];
</script>
