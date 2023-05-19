<template>
  <div class="card-container">
    <div class="card-header">
      <div class="all-reports-search">
        <input class="search-input" type="text" placeholder="Search Reports" />
      </div>
    </div>
    <div class="card-content">
      <div class="folders-container">
        <div class="section">
          <div
            v-for="(folder, i) in folders"
            :key="i"
            @click="emit('changeActualFolder', folder)"
            class="folder"
            :class="{
              'folder-selected':
                folder.name == actualFolder.name &&
                actualSubFolder?.name == null,
            }"
          >
            {{ folder.name }}
          </div>
        </div>
        <div class="section">
          <div
            v-for="(subFolder, i) in actualFolder.subFolders"
            :key="i"
            @click="emit('changeActualSubFolder', subFolder)"
            class="folder"
            :class="{
              'folder-selected': subFolder.name == actualSubFolder?.name,
            }"
          >
            {{ subFolder.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.card-container {
  @apply overflow-auto w-full py-[8px] h-[70vh] overflow-visible border border-secondary rounded-2xl bg-base-300 text-left;
  .card-title-container {
    @apply flex justify-between items-center;
  }
  .card-header {
    @apply h-[70px] flex flex-col justify-between;
    .all-reports-search {
      @apply min-h-[30px] p-4;
      .search-input {
        @apply w-full min-h-[32px] rounded-[10px] bg-neutral-content/40 text-base-content float-right py-[2px] px-[10px] transition-all duration-300 text-[16px] !tracking-normal;
      }
      .search-input:hover,
      .search-input:focus {
        @apply bg-neutral-content/70;
      }
      .search-input:focus {
        box-shadow: none;
        outline: none;
      }
    }
  }
  .card-content {
    @apply h-full;
    .section {
      @apply border-b border-base-content/30;
      .folder {
        @apply my-1 py-1 px-8 font-light cursor-pointer;
      }
      .folder-selected {
        @apply bg-secondary font-semibold;
      }
    }
    .section:last-child {
      @apply border-b-0;
    }
    .folders-container {
      @apply overflow-auto w-full h-[calc(70vh-80px)];
    }
  }
}
</style>
<script setup>
const emit = defineEmits(["changeActualFolder", "changeActualSubFolder"]);
const props = defineProps({
  actualSubFolder: {
    type: Object,
    default: null,
  },
  actualFolder: {
    type: Object,
    default: null,
  },
  folders: {
    type: Array,
    default: [],
  },
});
</script>
