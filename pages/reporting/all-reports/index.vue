<template>
  <div class="pb-5 pt-4 mx-auto w-full px-10 max-w-[1932px]">
    <div class="pl-10 pr-4 mb-2 flex justify-content">
      <div class="flex flex-auto">Reporting</div>
    </div>
    <div class="page-content gap-5">
      <div class="flex justify-between flex-wrap gap-3">
        <h3 class="text-2xl font-semibold">{{ actualFolder.name }}</h3>
        <div class="flex gap-3 items-center pb-2">
          <div class="all-reports-search col-span-4">
            <input
              class="search-input"
              type="text"
              :placeholder="`Search ${actualFolder.name}`"
            />
          </div>
          <Button
            @click="openCreateReportModal"
            secondary
            size="xs"
            class="normal-case px-5 !h-[30px] border-secondary hover:bg-secondary hover:border-secondary hover:text-white rounded-lg"
          >
            Create a report
          </Button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 md:gap-3 mt-2">
        <ReportsFoldersCard
          :actual-folder="actualFolder"
          :actual-sub-folder="actualSubFolder"
          @changeActualFolder="
            actualFolder = $event;
            actualSubFolder = '';
          "
          @changeActualSubFolder="actualSubFolder = $event"
          :folders="folders"
        />
        <ReportsTable
          :data="actualData"
          :columns="actualColumns"
          class="col-span-3 mt-3 md:mt-0"
        />
      </div>

      <daisy-modal
        :overlay="true"
        id="createReportModal"
        ref="createReportModal"
        @close="createReportScreenIndex = 0"
      >
        <component
          :is="createReportScreens[createReportScreenIndex]"
          @back="createReportScreenIndex--"
          @next="createReportScreenIndex++"
          @close="closeCreateReportModal"
        >
        </component>
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
    @apply bg-neutral-content/80 placeholder-base-content;
  }

  .search-input:focus {
    box-shadow: none;
    outline: none;
  }
}
</style>
<script setup>
import ReportsFoldersCard from "./components/reports-folders-card/index.vue";
import ReportsTable from "./components/reports-table/index.vue";
import { getRandomInt } from "~/api/utils/number";
import NewReport from "./components/create-report/new-report.vue";
import Reporting from "./components/create-report/reporting.vue";
import ReportNameColumn from "./components/reports-table/components/columns/reportNameColumn.vue";
import UserColumn from "./components/reports-table/components/columns/userColumn.vue";
import ExportColumn from "./components/reports-table/components/columns/exportColumn.vue";

const subFolders = ref([
  "Campaign Reports",
  "Communication Reports",
  "Email Reports",
  "Financial Reports",
  "Fitness Reports",
  "Lead Reports",
  "Member Reports",
  "People Reports",
]);

const defaultColumns = ref([
  {
    label: "Report Name",
    value: "report_name",
    component: ReportNameColumn,
    class: "w-full",
  },
  {
    label: "Description",
    value: "description",
    class: "w-full",
  },
  {
    label: "Report Type",
    value: "report_type",
    class: "!w-[146px]",
  },
  {
    label: "Date Created",
    value: "date_created",
    class: "!w-[146px]",
  },
  {
    label: "Last Run Date",
    value: "last_run_date",
    default: "10 min ago",
    class: "!w-[146px]",
  },
  {
    label: "Created By",
    value: "created_by",
    class: "!w-[146px]",
  },
  {
    label: "Last Edited By",
    value: "last_edited_by",
    default: "Ron",
    class: "w-full",
  },
]);

const folders = ref([
  {
    name: "All Reports",
    subFolders: subFolders.value,
    columns: defaultColumns.value,
  },
  {
    name: "Report Queue",
    subFolders: [
      "Account and Contact Reports",
      "Deal Reports",
      "Campaign Reports",
      "Case and Solution Reports",
      "Product Reports",
      "Vendor Reports",
      "Quote Reports",
      "Sales Orders Reports",
    ],
    columns: [
      {
        label: "Report Name",
        value: "report_name",
        component: ReportNameColumn,
        class: "w-full",
      },
      {
        label: "Description",
        value: "description",
        class: "w-full",
      },
      {
        label: "Status",
        value: "status",
        disableSearch: true,
        disableSort: true,
        disableConfirm: true,
        options: [
          { label: "Completed", value: "completed" },
          { label: "Pending", value: "pending" },
          { label: "Failed", value: "failed" },
        ],
        class: "!w-[146px]",
      },
      {
        label: "Completed Date",
        value: "completed_date",
        default: "April 9, 2023",
        class: "!w-[146px]",
      },
      {
        label: "Completed Time",
        value: "completed_time",
        default: "1:00 PM",
        class: "!w-[146px]",
      },
      {
        label: "User",
        value: "user",
        component: UserColumn,
        class: "!w-[146px]",
      },
      {
        label: "Export",
        value: "export",
        component: ExportColumn,
        class: "!w-[146px]",
      },
    ],
  },
  {
    name: "Favorites",
    subFolders: subFolders.value,
    columns: defaultColumns.value,
  },
  {
    name: "Recently Viewed",
    subFolders: subFolders.value,
    columns: defaultColumns.value,
  },
  {
    name: "Scheduled Reports",
    subFolders: subFolders.value,
    columns: defaultColumns.value,
  },
  {
    name: "Recently Deleted",
    subFolders: subFolders.value,
    columns: defaultColumns.value,
  },
]);

const actualFolder = ref(folders.value[0]);
const actualSubFolder = ref("");

const createReportScreens = ref([NewReport, Reporting]);
const createReportScreenIndex = ref(0);
const createReportModal = ref(false);

const actualData = computed(() => {
  let array = [];

  let actualName =
    actualSubFolder.value == ""
      ? actualFolder.value.name
      : actualSubFolder.value;

  console.log(actualColumns.value);
  for (let i = 0; i < getRandomInt(actualName.length * 3, 0); i++) {
    let item = {};
    actualColumns.value.forEach((column) => {
      let value = column.default ? column.default : "";
      if (column.value == "report_name") {
        value = actualName;
      } else if (column.options?.length) {
        value =
          column.options[getRandomInt(column.options.length - 1, 0)].label;
      }
      item[column.value] = value;
    });
    array.push(item);
  }
  return array;
});
const actualColumns = computed(() => {
  return actualFolder.value.columns;
});

const openCreateReportModal = () => {
  createReportModal.value.open();
};
const closeCreateReportModal = () => {
  createReportModal.value.close();
};
</script>
