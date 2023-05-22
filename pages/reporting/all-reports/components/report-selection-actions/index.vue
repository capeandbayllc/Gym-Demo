<template>
  <div class="flex gap-3 items-center mr-5">
    <span class="inline-block whitespace-nowrap text-center">
      {{ selectedReports?.length }} report selected
    </span>
    <button class="text-secondary" @click="emit('clearSelection')">
      Clear
    </button>
    <select-box
      :items="foldersSelect"
      label="Move to folder"
      secondary
      class="move-folder-select !w-[120px]"
      :show-clear-list="false"
      @onChange="moveToFolder"
      placeholderSearch="Search Folder"
    >
      <button
        @click="openCreateFolderModal"
        class="text-secondary text-center w-[138px] py-1 bg-neutral-content/10"
      >
        <font-awesome-icon :icon="['fas', 'fa-plus']" />
        Create a folder
      </button>
    </select-box>
    <button class="border rounded px-3 h-[29px]" @click="emit('deleteReports')">
      Delete
    </button>
    <daisy-modal
      :overlay="true"
      id="createFolderModal"
      ref="createFolderModal"
      class="w-fit"
      :showCloseButton="false"
    >
      <create-folder-modal @closeCreateFolderModal="closeCreateFolderModal">
      </create-folder-modal>
    </daisy-modal>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateFolderModal from "./components/create-folder-modal.vue";

library.add(faPlus);
const props = defineProps({
  selectedReports: {
    type: Array,
    default: [],
  },
  folders: {
    array: Array,
    default: [],
  },
});

const createFolderModal = ref(null);

const openCreateFolderModal = () => {
  createFolderModal.value.open();
};
const closeCreateFolderModal = () => {
  createFolderModal.value.close();
};

const moveToFolder = (folder) => {
  emit("moveToFolder", folder);
};

const emit = defineEmits(["clearSelection", "deleteReports", "moveToFolder"]);

const foldersSelect = computed(() => {
  let foldersSelect = [];
  if (Array.isArray(props.folders)) {
    props.folders?.forEach((folder) => {
      if (folder.name == "Favorites") return;
      foldersSelect.push({ value: folder.name, label: folder.name });
    });
  }
  return foldersSelect;
});
</script>

<style lang="postcss">
.move-folder-select .select-box-content {
  @apply !z-[25];
}
</style>
