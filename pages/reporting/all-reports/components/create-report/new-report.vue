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
            class="select-box z-[25]"
            @on-change="setPrimaryModule"
            :value="selectedPrimaryModule"
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
            class="select-box z-[20]"
          />
        </div>
        <div class="select-container" v-if="selectedPrimaryModule">
          <div class="select-title">Report name</div>
          <input
            type="text"
            placeholder="Untitled Report"
            class="dark-input"
            maxlength="22"
            v-model="inputReportName"
            @focusin="focusInput = true"
            @focusout="focusInput = false"
            @keypress="validationMessage = ''"
          />
          <span
            class="text-error text-sm"
            :class="{ 'font-bold tracking-tight': focusInput }"
          >
            {{ validationMessage }}
          </span>
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
        @click="validateAndSave"
      >
        Save
      </Button>
    </div>
  </div>
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
      .dark-input {
        @apply rounded-lg h-9 bg-neutral placeholder:text-base-content/40 px-3 w-full disabled:text-base-content/50 outline-none;
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
const focusInput = ref(false);
const inputReportName = ref("");
const validationMessage = ref("");

const props = defineProps({
  folders: {
    type: Array,
    default: [],
  },
});

const validateAndSave = () => {
  if (inputReportName.value.length < 5 && inputReportName.value.length > 0) {
    validationMessage.value =
      "The report name must be at least 5 characters long.";
  } else {
    if (inputReportName.value.length == 0) {
      emit("change", { report_name: "Untitled Report" });
    } else {
      emit("change", { report_name: inputReportName.value });
    }
    emit("next");
  }
};

const setPrimaryModule = (moduleName) => {
  selectedPrimaryModule.value = moduleName;
};
const emit = defineEmits(["close", "change"]);

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
