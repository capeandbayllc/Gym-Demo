<template>
  <div class="modal-container">
    <div class="modal-content relative">
      <button @click="emit('close')" class="absolute top-[15px] right-[20px]">
        <close-me size="big" />
      </button>

      <div>
        <div class="overflow-visible flex flex-col gap-10 mb-5">
          <h3 class="text-lg font-semibold text-center">
            Export Report - Launch Party Needs
          </h3>
          <div class="flex items-start gap-4">
            <input
              type="radio"
              value="formattedReport"
              name="type"
              id="formattedReport"
              v-model="typeSelected"
              class="input-radio mt-4"
            />
            <label
              for="formattedReport"
              class="cursor-pointer py-2 rounded-lg transition-all duration-300"
              :class="{
                'bg-secondary-focus  pl-4': typeSelected == 'formattedReport',
              }"
            >
              <span class="text-lg font-semibold">Formatted Report</span>
              <p>
                Export the report with the current view including group
                information. Maximum of 2000 rows can be exported.
              </p>
            </label>
          </div>

          <div class="flex items-start gap-4">
            <input
              type="radio"
              value="detailedReport"
              name="type"
              id="detailedReport"
              v-model="typeSelected"
              class="input-radio mt-4"
            />
            <label
              for="detailedReport"
              class="cursor-pointer py-2 rounded-lg transition-all duration-300"
              :class="{
                'bg-secondary-focus  pl-4': typeSelected == 'detailedReport',
              }"
            >
              <span class="text-lg font-semibold">Detailed Report</span>
              <p>
                Export detailed report and include all rows. This will export
                without the grouping of row/column. A maximum of 50,000 rows can
                be exported. Select this option if you would like to do further
                calculations in the report data.
              </p>
            </label>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-between gap-3">
          <div>
            <span>Choose File Format</span>
            <div class="flex gap-4">
              <div class="flex items-center gap-2">
                <input
                  type="radio"
                  id="excel"
                  name="fileFormat"
                  value="excel"
                  v-model="fileFormatSelected"
                />
                <label for="excel">Excel</label>
              </div>

              <div class="flex items-center gap-2">
                <input
                  type="radio"
                  id="pdf"
                  name="fileFormat"
                  value="pdf"
                  v-model="fileFormatSelected"
                />
                <label for="pdf">PDF</label>
              </div>

              <div class="flex items-center gap-2">
                <input
                  type="radio"
                  id="csv"
                  name="fileFormat"
                  value="csv"
                  v-model="fileFormatSelected"
                />
                <label for="csv">CSV</label>
              </div>
            </div>
          </div>
          <div class="flex gap-3">
            <Button
              size="sm"
              ghost
              outline
              class="normal-case rounded-xl"
              @click="emit('close')"
            >
              Cancel
            </Button>
            <Button size="sm" secondary class="normal-case rounded-xl">
              Export
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal-container {
  @apply !p-4 w-[90vw] !max-w-[700px] max-h-[90vh] overflow-auto bg-base-300 border-2 rounded-3xl text-[0.9rem] flex flex-col border-secondary relative bg-gradient-to-b from-secondary-focus to-base-300/30;
  ::-webkit-scrollbar {
    @apply hidden;
  }
  .modal-content {
    @apply w-full p-[30px] md:px-[80px] border border-secondary rounded-2xl bg-base-300 text-left max-w-full;
  }
}
</style>

<script setup>
import { CloseMe } from "~/components/icons";

const emit = defineEmits(["close"]);

const typeSelected = ref(null);
const fileFormatSelected = ref(null);
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
