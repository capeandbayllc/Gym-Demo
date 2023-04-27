<template>
  <div class="page-document-container">
    <filter-actions class="filter-actions"></filter-actions>
    <div class="page-content">
      <div class="document-container">
        <create-card />
        <documents-card />
        <!-- <employee-card />
                <marketing-card /> -->
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.filter-actions {
  @apply max-w-full lg:max-w-[1120px] lg:mx-auto px-1;
}
.page-document-container {
  @apply py-4 pr-5 w-full h-fit -md:pl-0;
  .page-content {
    @apply grid gap-2 max-w-full overflow-x-scroll mx-1;
    .document-container {
      @apply grid border border-secondary bg-neutral py-7 px-7 rounded gap-5 -lg:block -lg:w-full max-w-[1120px] mx-auto w-full;
    }
  }
}
</style>
<script setup>
import CreateCard from "./components/create-card.vue";
import EmployeeCard from "./components/employee-card.vue";
import MarketingCard from "./components/marketing-card.vue";
import FilterActions from "./components/filter-actions.vue";
import DocumentsCard from "./components/documents-card.vue";
</script>
