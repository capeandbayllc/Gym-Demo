<template>
  <div class="pb-5 pt-4 mx-auto w-full px-10 max-w-[1932px]">
    <div class="pl-10 pr-4 mb-2 flex justify-content">
      <div class="flex flex-auto">Reporting</div>
    </div>
    <div class="page-content gap-5">
      <div class="flex justify-between">
        <h3 class="text-xl">All Reports</h3>
        <div class="flex gap-3 items-center pb-2 pr-10">
          <div class="all-reports-search col-span-4">
            <input
              class="search-input"
              type="text"
              placeholder="Search All Reports"
            />
          </div>
          <Button
            secondary
            size="xs"
            class="normal-case px-5 !h-[30px] border-secondary hover:bg-secondary hover:border-secondary hover:text-white rounded-lg"
          >
            Create a report
          </Button>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-3 mt-2">
        <ReportsCategoryCard
          :actual-category="actualCategory"
          @changeActualCategory="actualCategory = $event"
        />
        <ReportsTable class="col-span-3" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.page-content {
  @apply text-center text-base-content p-6 border-secondary border-2 rounded-[26px] bg-secondary-focus max-w-[85vw];
}
.all-reports-search {
  @apply min-h-[30px];
  .search-input {
    @apply min-w-[210px] min-h-[32px] rounded-[10px] bg-neutral/60 float-right py-[2px] px-[10px] transition-all duration-300 text-[16px] !tracking-normal;
  }
  .search-input:hover,
  .search-input:focus {
    @apply bg-neutral-content/80;
  }
  .search-input:focus {
    box-shadow: none;
    outline: none;
  }
}
</style>
<script setup>
import ReportsCategoryCard from "./components/reports-category-card/index.vue";
import ReportsTable from "./components/reports-table/index.vue";

const actualCategory = ref("My Reports");
</script>
