<template>
  <div class="agreement-builder-container">
    <div class="-md:px-4 page-content flex-col">
      <new-agreement-card></new-agreement-card>
      <seach-filter-action-card class="mt-10"></seach-filter-action-card>
      <recent-card class="mt-10"></recent-card>
      <folder-card class="mt-10"></folder-card>
      <last-month-card class="mt-10"></last-month-card>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.agreement-builder-container {
  @apply py-4 pr-5 w-full h-fit;
  .page-content {
    @apply block border border-secondary bg-neutral rounded p-7;
  }
}
</style>
<style lang="postcss">
@media (max-width: 1200px) {
  .agreement-builder-container .page-content {
    @apply w-[90%];
  }
}
@media (max-width: 1100px) {
  .folder-doc svg {
    @apply h-[60px];
  }
  .create-option svg {
    @apply h-[70px];
  }
  .last-month-doc svg,
  .recent-doc svg {
    @apply h-[90px];
  }
  .last-month-doc,
  .recent-doc,
  .create-option {
    @apply text-center;
  }
}
@media (max-width: 980px) {
  .new-agreement-card-content .title-text {
    @apply w-auto text-[14px];
  }
  .search-filer-action-title .select-box-wrapper {
    @apply w-[9rem];
  }
  .search-filer-action-title .select-box-btn {
    @apply text-[14px];
  }
}
@media (max-width: 820px) {
  .new-agreement-card-content {
    @apply p-[10px];
  }
  .new-agreement-card-content .title-text {
    @apply text-[12px] w-auto;
  }
  .search-filer-action-title .select-box-wrapper {
    @apply w-[4rem];
  }
  .search-filer-action-title .select-box-btn {
    @apply text-[12px];
  }
  .folder-doc svg {
    @apply h-[50px];
  }
  .create-option svg {
    @apply h-[60px];
  }
  .last-month-doc svg,
  .recent-doc svg {
    @apply h-[80px];
  }
}
</style>
<script setup>
import RecentCard from "./components/recent-card.vue";
import LastMonthCard from "./components/last-month-card.vue";
import FolderCard from "./components/folder-card.vue";
import SeachFilterActionCard from "./components/seach-filter-action-card.vue";
import NewAgreementCard from "./components/new-agreement-card.vue";
</script>
