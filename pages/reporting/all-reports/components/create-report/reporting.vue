<template>
  <div class="modal-content">
    <div class="grid grid-cols-1 md:grid-cols-4 md:gap-3 mt-2">
      <div class="relative flex items-center gap-5">
        <arrow-left
          class="pt-1 h-12 cursor-pointer"
          @click="emit('back')"
        ></arrow-left>
        <h5 class="text-2xl">Report name</h5>
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

      <sidebar
        :actualSection="actualSection"
        @changeActualSection="actualSection = $event"
      />
      <reporting-table :data="data" class="col-span-3 mt-3 md:mt-0" />
    </div>
  </div>
  <daisy-modal :overlay="true" :show-close-button="false" ref="renameModal">
    <rename-modal @close="closeRenameModal" />
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
import RenameModal from "./components/rename-modal.vue";
import { getRandomInt } from "~/api/utils/number";
import EditReport from "../edit-report/index.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faInfoCircle);

import { VerticalEllipsis, ArrowLeft } from "~/components/icons";

const showTitleDropdown = ref(false);

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

const data = computed(() => {
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
</script>
