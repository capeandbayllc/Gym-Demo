<template>
  <div class="modal-content">
    <div class="grid grid-cols-1 md:grid-cols-4 md:gap-3 mt-2">
      <div class="relative flex items-center gap-5">
        <arrow-left
          class="pt-1 h-12 cursor-pointer"
          @click="emit('close')"
        ></arrow-left>
        <h5 class="text-2xl">Report name</h5>
        <div class="">
          <button @click.stop="toggleTitleDropdown">
            <vertical-ellipsis
              class="h-6 fill-base-content transform rotate-90 mt-[9px]"
            />
          </button>
          <div
            class="dropdown"
            @click.stop="toggleTitleDropdown"
            v-show="showTitleDropdown"
          >
            <div class="dropdown-container">
              <div class="dropdown-item">Rename</div>
              <div class="dropdown-item">Delete</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-3 flex justify-between gap-4 items-center">
        <div class="flex items-center gap-8">
          <span class="text-lg font-semibold">Leads</span>
          <div class="flex flex-nowrap items-center">
            <font-awesome-icon
              :icon="['fas', 'circle-info']"
              size="md"
              class="mr-1 focus:outline-none"
              tabindex="0"
              @click.prevent.stop
            />
            <p>
              Do you want to run another report?
              <span class="text-secondary font-semibold">Joined Report.</span>
            </p>
          </div>
        </div>
        <div class="flex gap-4">
          <Button
            size="sm"
            outline
            class="normal-case rounded-lg hover:text-secondary"
            @click="emit('close')"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            outline
            class="normal-case rounded-lg hover:text-secondary"
          >
            Run
          </Button>
          <edit-report></edit-report>
        </div>
      </div>

      <ReportsFoldersCard :actual-folder="actualFolder" />
      <ReportsTable :data="data" class="col-span-3 mt-3 md:mt-0" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal-content {
  @apply border-secondary text-base-content px-5 py-4 bg-gradient-to-b from-secondary-focus to-base-300 border-2 rounded-2xl max-w-[1500px] w-[90vw] max-h-[85vh] overflow-y-auto gap-5;
  ::-webkit-scrollbar {
    @apply hidden;
  }
  .dropdown {
    @apply absolute top-[28px] right-[0px] h-auto z-[60];
    .dropdown-container {
      @apply bg-base-300 border-secondary border text-base font-normal rounded-2xl p-3 px-5 w-[120px];
      .dropdown-item {
        @apply mb-2 cursor-pointer;
      }
    }
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
import ReportsFoldersCard from "~/pages/reporting/all-reports/components/reports-folders-card/index.vue";
import ReportsTable from "~/pages/reporting/all-reports/components/reports-table/index.vue";
import { getRandomInt } from "~/api/utils/number";
import EditReport from "../../../edit-report/index.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faInfoCircle);

import { VerticalEllipsis, ArrowLeft } from "~/components/icons";

const showTitleDropdown = ref(false);

const toggleTitleDropdown = () => {
  showTitleDropdown.value = !showTitleDropdown.value;
};

const actualFolder = ref("My Reports");
const data = computed(() => {
  let array = [];
  for (let i = 0; i < getRandomInt(actualFolder.value.length * 3, 0); i++) {
    array.push({
      id: 1,
      report_name: actualFolder.value,
      description: "",
      report_type: "",
      date_created: "",
      last_run_date: "10 min ago",
      created_by: "",
      last_edited_by: "Ron",
    });
  }
  return array;
});
</script>
