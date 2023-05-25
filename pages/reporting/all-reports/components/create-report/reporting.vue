<template>
  <div class="modal-content">
    <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-2">
      <div
        class="relative flex flex-wrap items-center gap-5 sm:col-span-4 md:col-span-4 xl:col-span-3"
      >
        <div class="flex items-center gap-3">
          <arrow-left
            class="pt-1 min-w-12 max-w-12 h-12 cursor-pointer"
            @click="emit('back')"
          ></arrow-left>
          <h5 class="text-2xl whitespace-nowrap mr-2">{{ reportName }}</h5>
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

      <sidebar
        :actualSection="actualSection"
        @changeActualSection="actualSection = $event"
        class="sm:col-span-4 md:col-span-4 xl:col-span-3"
      />
      <reporting-table
        :data="actualData"
        :columns="actualColumns"
        class="mt-3 sm:mt-0 sm:col-span-8 md:col-span-8 xl:col-span-9"
      />
    </div>
  </div>
  <daisy-modal :overlay="true" :show-close-button="false" ref="renameModal">
    <rename-modal
      @close="closeRenameModal"
      :report-name="reportName"
      @changeName="reportName = $event"
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
      :report-name="reportName"
    />
  </daisy-modal>
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
}
</style>

<script setup>
import Sidebar from "./components/sidebar.vue";
import ReportingTable from "./components/reporting-table.vue";
import RenameModal from "../rename-modal.vue";
import { getRandomInt } from "~/api/utils/number";
import EditReport from "../edit-report/index.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import CreateJoinedReportModal from "./components/create-joined-report-modal.vue";
library.add(faInfoCircle);

import { VerticalEllipsis, ArrowLeft } from "~/components/icons";

const showTitleDropdown = ref(false);
const reportName = ref("Untitled Report");

const emit = defineEmits(["close", "back", "next"]);

const actualSection = ref("Columns");

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

const actualData = computed(() => {
  if (actualSection.value == "Columns") {
    return dataColumns.value;
  } else if (actualSection.value == "Filters") {
    return dataFilters.value;
  }
});
const dataColumns = computed(() => {
  let array = [];
  for (let i = 0; i < getRandomInt(20 * 3, 0); i++) {
    array.push({
      id: i,
      name: "Kelly Price",
      annual_revenue: "",
      brand_category: "",
      city: "",
      last_saved: "",
      company: "HydraMassage",
    });
  }
  return array;
});
const dataFilters = computed(() => {
  let array = [];
  for (let i = 0; i < getRandomInt(20 * 3, 0); i++) {
    array.push({
      id: i,
      name: "Kelly Price",
      annual_revenue: "",
      bi_conctract_expiration: "",
      bi_monthly_cost: "",
      bi_notes: "",
    });
  }
  return array;
});

const actualColumns = computed(() => {
  if (actualSection.value == "Columns") {
    return columnsColumns;
  } else if (actualSection.value == "Filters") {
    return columnsFilters;
  }
});
const columnsColumns = [
  {
    label: "Name",
    value: "name",
    class: "!w-[150px]",
  },
  {
    label: "Annual Revenue",
    value: "annual_revenue",
    class: "!w-[150px]",
  },
  {
    label: "Brand Category",
    value: "brand_category",
    class: "!w-[150px]",
  },
  {
    label: "City",
    value: "city",
    class: "!w-[150px]",
  },
  {
    label: "Last Saved",
    value: "last_saved",
    class: "!w-[150px]",
  },
  {
    label: "Company",
    value: "company",
    class: "!w-[150px]",
  },
];

const columnsFilters = [
  {
    label: "Name",
    value: "name",
    class: "!w-[150px]",
  },
  {
    label: "Annual Revenue",
    value: "annual_revenue",
    class: "!w-[150px]",
  },
  {
    label: "BI Conctract Expiration",
    value: "bi_conctract_expiration",
    class: "!w-[150px]",
  },
  {
    label: "BI Monthly Cost",
    value: "bi_monthly_cost",
    class: "!w-[150px]",
  },
  {
    label: "BI Notes",
    value: "bi_notes",
    class: "!w-[150px]",
  },
];
</script>
