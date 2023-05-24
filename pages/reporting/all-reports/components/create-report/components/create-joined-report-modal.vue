<template>
  <div class="modal-container">
    <div class="modal-content">
      <div class="font-semibold text-xl mb-6">Create a Report</div>
      <p class="mb-3">
        View multiple reports at once by creating a Joined Report.
      </p>
      <div class="max-full max-h-[60vh] overflow-visible">
        <div class="select-container">
          <div v-for="(selectedReport, i) in selectedReports" :key="i">
            <div class="select-title">Report {{ i + 1 }}</div>
            <div class="flex gap-2 justify-content items-center">
              <select-box
                v-if="!selectedReport.disabled"
                :items="reportsOptions"
                :bg-secondary-opened="true"
                :show-search="false"
                :showClearList="false"
                :label="
                  selectedReport.value ? selectedReport.label : 'Select report'
                "
                class="select-box"
                :value="selectedPrimaryModule"
                @on-change="selectReport(i, $event)"
              />
              <input
                v-else
                type="text"
                disabled
                :value="selectedReport.label"
                class="dark-input"
              />
              <div class="w-[18px]">
                <button
                  v-if="!selectedReport.disabled && selectedReports.length > 2"
                  @click="deleteSelectedReport(i)"
                >
                  <font-awesome-icon
                    :icon="['fas', 'xmark']"
                    size="md"
                    class="mt-[2px] focus:outline-none h-[18px] text-secondary"
                    tabindex="0"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="text-left">
            <button
              :disabled="
                selectedReports.length >= 3 ||
                !selectedReports.every((report) => report.value)
              "
              @click="selectedReports.push({})"
              class="text-secondary font-semibold disabled:text-base-content/50"
            >
              Add Report
            </button>
            <p class="mb-3" v-if="selectedReports.length >= 3">
              We cannot add more than 3 reports
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-right pt-6 pb-4">
      <Button
        ghost
        size="sm"
        class="normal-case mr-2 rounded-lg"
        @click="resetDataAndClose"
      >
        Cancel
      </Button>
      <Button
        size="sm"
        secondary=""
        class="normal-case rounded-lg"
        @click="resetDataAndClose"
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
      @apply mb-7 flex flex-col gap-5;

      .select-title {
        @apply pb-2 text-[15px] font-semibold;
      }

      .select-box {
        @apply bg-neutral text-base-content !h-10 py-2 rounded-lg !text-left;
      }
    }
    .dark-input {
      @apply rounded-lg h-9 bg-neutral placeholder:text-base-content/40 px-3 w-full disabled:text-base-content/50 outline-none;
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faXmark);

const props = defineProps({
  folders: {
    type: Array,
    default: [],
  },
  reportName: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["close"]);

const selectedReports = ref([
  {
    label: props.reportName,
    value: props.reportName,
    disabled: true,
  },
  {},
]);
const resetSelectedReports = ref(null);
onMounted(() => {
  resetSelectedReports.value = [...selectedReports.value];
});

const selectReport = (index, report) => {
  selectedReports.value[index] = reportsOptions.value.find(
    (i) => i.value == report
  );
};

const resetDataAndClose = () => {
  selectedReports.value = resetSelectedReports.value;
  emit("close");
};

const deleteSelectedReport = (index) => {
  selectedReports.value.splice(index, 1);
};

const reportsOptions = ref([
  {
    value: "empty",
    label: "Report 1",
  },
]);
</script>
