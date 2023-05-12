<template>
  <div class="pb-5 pt-4 mx-auto w-full px-10 max-w-[1932px]">
    <div class="pl-10 pr-4 mb-2 flex justify-content">
      <div class="flex flex-auto">Reporting</div>
    </div>
    <div class="page-content gap-5">
      <div class="flex justify-between">
        <h3 class="text-2xl font-semibold">{{ actualCategory }}</h3>
        <div class="flex gap-3 items-center pb-2">
          <div class="all-reports-search col-span-4">
            <input
              class="search-input"
              type="text"
              placeholder="Search All Reports"
            />
          </div>
          <Button
            @click="showCreateReportModal"
            secondary
            size="xs"
            class="normal-case px-5 !h-[30px] border-secondary hover:bg-secondary hover:border-secondary hover:text-white rounded-lg"
          >
            Create a report
          </Button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 md:gap-3 mt-2">
        <ReportsCategoryCard
          :actual-category="actualCategory"
          @changeActualCategory="actualCategory = $event"
        />
        <ReportsTable :data="data" class="col-span-3 mt-3 md:mt-0" />
      </div>

      <daisy-modal
        :overlay="true"
        id="createReportModal"
        ref="createReportModal"
      >
        <create-report-modal />
      </daisy-modal>
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
import { getRandomInt } from "~/api/utils/number";
import CreateReportModal from "./components/create-report-modal/index.vue";

const actualCategory = ref("All Reports");

const createReportModal = ref(false);

const data = computed(() => {
  let array = [];
  for (let i = 0; i < getRandomInt(actualCategory.value.length * 3, 0); i++) {
    array.push({
      id: 1,
      report_name: actualCategory.value,
      description: "",
      report_type: "",
      date_created: "",
      last_run_date: "10 min ago",
      created_by: "",
      last_edited_by: "Ron",
    });
  }
  return array;
});

const showCreateReportModal = () => {
  createReportModal.value.open();
};
</script>
