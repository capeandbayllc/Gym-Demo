<template>
  <div class="file-browser-container">
    <div class="-md:px-4 page-content flex-col">
      <file-action @fileActionSelected="actionSelected"></file-action>
      <file-card :actionType="actionType"></file-card>
      <history-card class="history-title"></history-card>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.file-browser-container {
  @apply py-4 pr-5 w-full h-fit;
  .page-content {
    @apply block border border-secondary bg-neutral rounded;
  }
}
</style>
<style lang="postcss">
@media (max-width: 1200px) {
  .file-browser-container .page-content {
    @apply w-[90%];
  }
}
@media (max-width: 1100px) {
  .history-trash-icon {
    @apply h-[155px] items-center;
  }
  .history-folder-icon svg,
  .history-trash-icon svg {
    @apply w-80 h-60 mx-auto;
  }
  .history-title .simple-card-title {
    @apply h-[45px] text-[17px];
  }
}
@media (max-width: 980px) {
  .history-folder-icon {
    @apply pl-[20px] pr-[20px];
  }
  .create-option {
    @apply text-xs;
  }
}
@media (max-width: 820px) {
  .file-card-content .mx-auto {
    @apply w-3/4;
  }
  .select-box-wrapper {
    @apply w-[6rem];
  }

  .history-trash-icon {
    @apply h-[145px] items-center;
  }
  .history-folder-icon svg,
  .history-trash-icon svg {
    @apply w-[60px] h-[50px] mx-auto;
  }
  .history-title .simple-card-title {
    @apply h-[45px] text-[17px];
  }
}
</style>
<script setup>
import HistoryCard from "./components/history-card.vue";
import FileCard from "./components/file-card.vue";
import FileAction from "./components/file-action.vue";
const actionType = ref("upload");

const actionSelected = (name) => {
  actionType.value = name;
};
</script>
