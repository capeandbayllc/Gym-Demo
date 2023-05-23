<template>
  <div class="card-container">
    <div class="flex justify-center">
      <div class="card-header">
        <button
          @click="emit('changeActualSection', 'Columns')"
          class="card-button"
          :class="{ 'card-button-selected': actualSection == 'Columns' }"
        >
          Columns
        </button>
        <button
          @click="emit('changeActualSection', 'Filters')"
          class="card-button"
          :class="{ 'card-button-selected': actualSection == 'Filters' }"
        >
          Filters
        </button>
      </div>
    </div>
    <div class="card-content">
      <div
        v-if="actualSection == 'Columns'"
        class="section"
        v-for="(section, i) in columnsContent"
        :key="i"
      >
        <div class="flex justify-between pt-3 pb-1">
          <h3 class="text-[16px] font-semibold">{{ section.title }}</h3>
          <button
            v-if="section.icon_type && section.icon_type == 'pencil'"
            class="add-new-button"
            @click="openAddFilterModal"
          >
            Add Filter
            <font-awesome-icon
              :icon="['far', 'pencil']"
              size="md"
              class="hidden-icon-hover mr-1 focus:outline-none h-[10px]"
              tabindex="0"
              @click.prevent.stop
            />
            <plus-icon class="show-icon-hover hidden" />
          </button>
          <button v-else class="add-new-button">
            <plus-icon />
          </button>
        </div>
        <div
          v-for="(item, j) in section.items"
          v-if="section.items.length"
          :key="j"
        >
          <div class="section-item">
            <button class="flex gap-1 items-center w-full">
              <font-awesome-icon
                :icon="['far', 'bars']"
                size="md"
                class="mr-1 focus:outline-none h-[12px]"
                tabindex="0"
                @click.prevent.stop
              />
              {{ item }}
            </button>
            <button class="xmark-button">
              <font-awesome-icon
                :icon="['fas', 'xmark']"
                size="md"
                class="mr-1 focus:outline-none h-[12px] text-secondary"
                tabindex="0"
                @click.prevent.stop
              />
            </button>
          </div>
        </div>
        <div v-else>
          <span class="text-base-content/40 font-light tracking-wide">
            No Column Selected
          </span>
        </div>
      </div>
      <div v-if="actualSection == 'Filters'" class="section">
        <div :key="i" class="flex justify-between pt-3 pb-1">
          <h3 class="text-[16px] font-semibold">Filters</h3>
          <button class="add-new-button" @click="openAddFilterModal">
            <font-awesome-icon
              :icon="['far', 'pencil']"
              size="md"
              class="hidden-icon-hover mr-1 focus:outline-none h-[10px]"
              tabindex="0"
              @click.prevent.stop
            />
            <plus-icon class="show-icon-hover hidden" />
          </button>
        </div>
      </div>
    </div>
    <daisy-modal :overlay="true" id="addFilterModal" ref="addFilterModal">
      <add-filter-modal @close="closeAddFilterModal" />
    </daisy-modal>
  </div>
</template>
<style scoped lang="postcss">
.card-container {
  @apply overflow-y-auto w-full py-[20px] h-[70vh] overflow-visible border border-secondary rounded-2xl bg-base-300 text-left;
  .card-header {
    @apply bg-secondary-focus border border-secondary rounded flex flex-wrap mx-5 gap-3 justify-center px-5 py-1;
    .card-button {
      @apply rounded px-3 py-1 font-semibold;
    }
    .card-button-selected {
      @apply bg-secondary  rounded font-semibold;
    }
  }
  .card-content {
    @apply mt-5;
    .section-item {
      @apply pb-1 hover:text-secondary flex justify-between;
      .xmark-button {
        @apply hidden;
      }
    }
    .section-item:hover .xmark-button {
      @apply !block;
    }
    .section {
      @apply pb-5 px-5;
      .add-new-button {
        @apply border-secondary border text-white w-[25px] h-[25px] p-[4px] rounded-lg flex justify-center items-center hover:bg-secondary;
      }
      .add-new-button:hover {
        .hidden-icon-hover {
          @apply !hidden;
        }
        .show-icon-hover {
          @apply !block;
        }
      }
    }
  }
}
</style>
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faXmark,
  faPlus,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
library.add(faPlus);
library.add(faBars);
library.add(faXmark);
library.add(faPencil);

import { PlusIcon } from "~/components/icons";
import AddFilterModal from "./add-filter-modal.vue";

const emit = defineEmits(["changeActualSection"]);

const props = defineProps({
  actualSection: {
    type: String,
    default: "",
  },
});

var columnsContent = [
  {
    title: "Columns",
    items: [
      "Full Name",
      "Annual Revenue",
      "BI Contract Expiration",
      "BI Monthly Cost",
      "BI Notes",
    ],
  },
  {
    title: "Row Groups",
    items: [],
  },
  {
    title: "Column Groups",
    items: [],
  },
  {
    title: "Aggregate Groups",
    items: [],
  },
  {
    title: "Visability",
    items: ["Locations", "Security Roles", "User"],
  },
];

const addFilterModal = ref(null);

const openAddFilterModal = () => {
  addFilterModal.value.open();
};
const closeAddFilterModal = () => {
  addFilterModal.value.close();
};
</script>
