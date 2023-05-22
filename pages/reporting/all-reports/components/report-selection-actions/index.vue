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
      placeholderSearch="Search Folder"
    >
      <button
        class="text-secondary text-center w-[138px] py-1 bg-neutral-content/10"
      >
        <font-awesome-icon :icon="['fas', 'fa-plus']" />
        Create a folder
      </button>
    </select-box>
    <button class="border rounded px-3 h-[29px]">Delete</button>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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

const emit = defineEmits(["clearSelection"]);

const foldersSelect = computed(() => {
  let foldersSelect = [];
  if (Array.isArray(props.folders)) {
    props.folders?.forEach((folder) => {
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
