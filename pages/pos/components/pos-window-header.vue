<template>
  <div class="flex flex-col lg:flex-row justify-between gap-2">
    <div class="flex flex-row justify-between lg:gap-10">
      <h3 class="text-[1.8rem] font-light tracking-wider">Purchase</h3>
      <div class="flex flex-row gap-1 group lg:hidden">
        <span
          class="my-auto text-[0.9rem] group-hover:text-secondary pos-style-transition"
          >Scan Item</span
        >
        <BarcodeScanIcon class="pos-barcode-scan-icon" />
      </div>
      <button class="pos-admin-button" @click="showPosAdminModal">
        <PersonAdminIcon class="my-auto" />
        <span class="my-auto">Admin</span>
      </button>
    </div>
    <div class="pos-header-right-components-container">
      <div class="hidden lg:flex flex-row gap-1 group">
        <span
          class="my-auto text-[0.9rem] group-hover:text-secondary pos-style-transition"
          >Scan Item</span
        >
        <BarcodeScanIcon class="pos-barcode-scan-icon" />
      </div>
      <div
        class="my-auto flex flex-row lg:gap-5 justify-between w-full lg:w-auto"
      >
        <select-box
          :items="locationsFilter"
          value=""
          :label="'Locations'"
          :secondary="true"
          class="w-40 text-[0.9rem] my-auto"
        >
        </select-box>
        <div>
          <!-- <input
                        placeholder="Search Member"
                        class="text-[0.8rem] w-60 rounded-md px-3 text-black py-2"
                    /> -->
          <input
            v-if="!hasDefaultPurchaser"
            ref="globalSearchInput"
            type="text"
            placeholder="Search"
            class="text-[0.8rem] w-60 rounded-md px-3 text-black py-2 pos-style-transition"
            @click="showGlobalSearchModal"
            @mouseover="showFocus"
            @mouseleave="hideFocus"
          />
        </div>
      </div>
    </div>
  </div>
  <daisy-modal :overlay="true" id="globalSearchModal" ref="globalSearchModal">
    <GlobalSearchModal
      :isOpen="globalSearchModal?.isOpen"
      @row-clicked="selectPerson"
    />
  </daisy-modal>
</template>

<script setup>
import GlobalSearchModal from "~~/layouts/components/global-search-modal.vue";
import { PersonAdminIcon, BarcodeScanIcon } from "~~/components/icons";

const emit = defineEmits(["person-selected"]);
const props = defineProps({
  showPosAdminModal: { type: Function },
  hasDefaultPurchaser: { type: Boolean },
});
const globalSearchInput = ref("");
const globalSearchModal = ref(null);

const showFocus = () => {
  globalSearchInput.value.style = "";
  globalSearchInput.value.focus();
};

const hideFocus = () => {
  globalSearchInput.value.blur();
};

const showGlobalSearchModal = () => {
  globalSearchModal.value.open();
};

const selectPerson = (data) => {
  emit("person-selected", data);
  globalSearchModal.value.close();
};

const locationsFilter = [
  {
    value: "1",
    label: "Location 1",
  },
  {
    value: "2",
    label: "Location 2",
  },
  {
    value: "3",
    label: "Location 3",
  },
  {
    value: "4",
    label: "Location 4",
  },
  {
    value: "5",
    label: "Location 5",
  },
];
</script>

<style scoped>
.pos-admin-button {
  @apply rounded-md border-2 border-secondary bg-[#191919]/[0.3] text-[0.8rem] py-1 px-4 flex flex-row gap-2 hover:border-white hover:bg-[#191919]/[0.1] pos-style-transition;
}
.pos-header-right-components-container {
  @apply flex flex-row gap-5 w-full justify-between lg:justify-end;
}
.pos-barcode-scan-icon path {
  @apply group-hover:!fill-secondary pos-style-transition;
}
.pos-style-transition {
  @apply transition-all duration-300 ease-linear;
}
</style>
