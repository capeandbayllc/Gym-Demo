<template>
  <div>
    <nav-columns
      actualSection="Filters"
      @changeActualSection="emit('changeActualSection', $event)"
    />
    <div class="mt-5 pb-5 px-5">
      <div class="flex justify-between pb-1 pt-3">
        <h3 class="text-[16px] font-semibold">Filters</h3>
        <button class="add-new-button" @click="openAddFilterModal">
          <font-awesome-icon
            :icon="['far', 'pencil']"
            size="md"
            class="hidden-icon-hover focus:outline-none h-[10px]"
            tabindex="0"
            @click.prevent.stop
          />
          <plus-icon class="show-icon-hover hidden" />
        </button>
      </div>
      <div v-if="filters.length">
        Date Filter
        <div class="filter-item" v-for="(filter, i) in filters" :key="i">
          <div>
            <span>
              {{ filter.dateFilter?.field }}
            </span>
            <p>
              {{ filter.dateFilter?.timeRange.toUpperCase() }}
              {{ filter.dateFilter?.operator }}
              {{ filter.dateFilter?.value }}
            </p>
          </div>
          <button class="xmark-button" @click="deleteFilter(i)">
            <font-awesome-icon
              :icon="['fas', 'xmark']"
              size="md"
              class="mr-1 focus:outline-none h-[12px] text-secondary"
              tabindex="0"
            />
          </button>
        </div>
      </div>
      <div v-else>
        <span class="text-base-content/40 font-light tracking-wide">
          No Filters Found
        </span>
      </div>
      <daisy-modal :overlay="true" id="addFilterModal" ref="addFilterModal">
        <add-filter-modal
          @close="closeAddFilterModal"
          @save="createNewFilter"
        />
      </daisy-modal>
    </div>
  </div>
</template>

<style scoped lang="postcss">
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
.filter-item:hover .xmark-button {
  @apply !block;
}
.filter-item {
  @apply flex justify-between p-3 my-1 mb-3 bg-base-200/70 border border-base-content/40 rounded w-full text-start;
  .xmark-button {
    @apply hidden;
  }
}
</style>

<script setup>
import AddFilterModal from "./add-filter-modal.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark, faPencil } from "@fortawesome/free-solid-svg-icons";
library.add(faPencil);
library.add(faXmark);
import { PlusIcon } from "~/components/icons";
import NavColumns from "./nav-columns.vue";

const emit = defineEmits(["changeActualSection"]);

const filters = ref([]);

const createNewFilter = (filter) => {
  closeAddFilterModal();
  console.log(filter);
  if (
    filter?.dateFilter?.field != "None" &&
    filter?.dateFilter?.timeRange != "None" &&
    filter?.dateFilter?.operator &&
    filter?.dateFilter?.value
  ) {
    filters.value.push(JSON.parse(JSON.stringify(filter)));
  }
};

const addFilterModal = ref(null);

const deleteFilter = (index) => {
  filters.value.splice(index, 1);
};

const openAddFilterModal = () => {
  addFilterModal.value.open();
};
const closeAddFilterModal = () => {
  addFilterModal.value.close();
};
</script>
