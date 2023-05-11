<template>
  <div class="card-container">
    <div class="card-header"></div>
    <div class="card-content"></div>
  </div>
</template>
<style scoped lang="postcss">
.card-container {
  @apply overflow-auto w-full py-[8px] h-[70vh] overflow-visible border border-secondary rounded-2xl bg-base-300 text-left;
  .card-title-container {
    @apply flex justify-between items-center;
  }
  .card-header {
    @apply h-[100px] flex flex-col justify-between;
  }
  .card-content {
    @apply h-full;
  }
}
</style>
<script setup>
var actualCategory = ref("My Reports");
var categories = [
  [
    "My Reports",
    "All Reports",
    "Favorites",
    "Recently Viewed",
    "Scheduled Reports",
    "Recently Deleted",
    "Report Queue",
  ],
  [
    "Campaign Reports",
    "Communication Reports",
    "Email Reports",
    "Financial Reports",
    "Fitness Reports",
    "Lead Reports",
    "Member Reports",
    "People Reports",
  ],
];
</script>
