<template>
  <div class="modal-container">
    <div class="modal-content relative">
      <button @click="emit('close')" class="absolute top-[15px] right-[20px]">
        <close-me size="big" />
      </button>

      <div>
        <div class="overflow-visible flex flex-col gap-10 mb-5">
          <h3 class="text-lg font-semibold">Rename Report Here</h3>

          <div class="modal-section">
            <div class="w-[110px] font-semibold">Report name</div>
            <div class="w-full relative">
              <input
                type="text"
                class="input-text"
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
              <button
                class="input-text-icon"
                @click.stop="toggleRecipientDropdown"
              >
                <recipient-search-icon />
              </button>
              <recipient-dropdown
                @close="toggleRecipientDropdown"
                v-show="showRecipientDropdown"
              />
            </div>
          </div>

          <div class="modal-section !items-start">
            <div class="w-[110px] font-semibold mt-4">Description</div>
            <div class="w-full">
              <textarea
                class="w-full h-[200px] rounded-xl bg-secondary-focus/50 h-28 p-2 focus:outline-none resize-none p-4"
              ></textarea>
            </div>
          </div>

          <div class="modal-section">
            <div class="w-[110px] font-semibold">Report Type</div>
            <div class="w-full">
              <select-box
                :items="reportTypes"
                :bg-secondary-opened="true"
                :show-search="false"
                :showClearList="false"
                :label="'Leads Folder'"
                class="select-box"
              />
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3">
          <Button
            size="sm"
            ghost
            outline
            class="normal-case rounded-xl"
            @click="emit('close')"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            secondary
            class="normal-case rounded-xl"
            @click="validateAndSave"
          >
            Save
          </Button>
          <Button size="sm" secondary class="normal-case rounded-xl">
            Export
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal-container {
  @apply !p-4 w-[90vw] !max-w-[700px] bg-base-300 border-2 rounded-3xl text-[0.9rem] flex flex-col border-secondary relative bg-gradient-to-b from-secondary-focus to-base-300/30;
  ::-webkit-scrollbar {
    @apply hidden;
  }
  .modal-content {
    @apply w-full p-[30px] md:px-[80px] border border-secondary rounded-2xl bg-base-300 text-left max-w-full;
    .modal-section {
      @apply flex flex-col sm:flex-row sm:items-center gap-4;
      .select-box {
        @apply bg-neutral-content/70 text-base-content !h-10 py-2 rounded-lg !text-left w-full;
      }
      .input-text {
        @apply bg-neutral-content/70 text-base-content !h-10 px-3 !pr-10 rounded-lg !text-left w-full focus:outline-none;
      }
      .input-text-icon {
        @apply absolute right-3 top-[20px] transform -translate-y-1/2 cursor-pointer;
      }
    }
  }
}
</style>
<style lang="postcss">
.select-box {
  .select-box-btn {
    @apply !h-10 rounded-lg !px-3;
  }
  .select-box-content {
    @apply top-[8px];
  }
}
</style>

<script setup>
import { RecipientSearchIcon, CloseMe } from "~/components/icons";
import RecipientDropdown from "./recipient-dropdown.vue";

const emit = defineEmits(["close", "save"]);
const props = defineProps({
  reportName: {
    type: String,
    default: "",
  },
  open: {
    type: Boolean,
    default: false,
  },
});

const showRecipientDropdown = ref(false);
const inputReportName = ref("");
const validationMessage = ref("");
const focusInput = ref(false);

watchEffect(() => {
  if (!props.open) return;
  inputReportName.value = props.reportName;
});

const validateAndSave = () => {
  if (inputReportName.value.length == 0) {
    validationMessage.value = "The report name cannot be empty.";
  } else if (inputReportName.value.length < 5) {
    validationMessage.value =
      "The report name must be at least 5 characters long.";
  } else if (inputReportName.value == props.reportName) {
    validationMessage.value =
      "The report name must be different from the current one.";
  } else {
    emit("save", inputReportName.value);
    emit("close");
  }
};

const toggleRecipientDropdown = () => {
  showRecipientDropdown.value = !showRecipientDropdown.value;
};

const reportTypes = ref([
  {
    value: "excel",
    label: "Excel",
  },
  {
    value: "csv",
    label: "CSV",
  },
  {
    value: "pdf",
    label: "PDF",
  },
]);
</script>
