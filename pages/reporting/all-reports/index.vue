<template>
  <div class="pb-5 pt-4 mx-auto w-full px-10 max-w-[1932px]">
    <div class="pl-10 pr-4 mb-2 flex justify-content">
      <div class="flex flex-auto">Reporting</div>
    </div>
    <div class="page-content gap-5">
      <div class="flex flex-row justify-between md:gap-3 text-start">
        <h3 class="text-2xl font-semibold">{{ actualFolder.name }}</h3>
        <div
          class="flex flex-row justify-between gap-3 items-center pb-2 col-span-3 mt-3 md:mt-0"
        >
          <report-selection-actions
            :folders="folders"
            :actual-folder="actualFolder"
            v-show="selectedReports?.length"
            :selected-reports="selectedReports"
            @clearSelection="clearSelection"
            @deleteReports="deleteSelectedReports"
            @moveToFolder="moveToFolder"
          />
          <div class="flex gap-3 ml-auto">
            <div class="all-reports-search col-span-4">
              <input
                class="search-input"
                type="text"
                :placeholder="`Search ${actualFolder.name}`"
              />
            </div>
          </div>
          <Button
            v-if="actualFolder.name !== 'Recently Deleted'"
            @click="createReportClick()"
            secondary
            size="xs"
            class="normal-case px-5 !h-[30px] border-secondary hover:bg-secondary hover:border-secondary hover:text-white rounded-lg"
          >
            {{ createReportLabel }}
          </Button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 md:gap-3">
        <span class="col-span-1"></span>
        <span
          class="text-rose-600 text-[0.9rem] leading-none col-span-3 text-left"
          v-if="actualFolder.name === 'Recently Deleted'"
        >
          Reports that have been in the 'Recently Deleted' folder for more than
          30 days will be automatically deleted
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 md:gap-3 mt-2">
        <reports-folders-card
          :actual-folder="actualFolder"
          :actual-sub-folder="actualSubFolder"
          @changeActualFolder="
            actualFolder = $event;
            actualSubFolder = null;
            createReportModal?.generateNewReportData();
          "
          @changeActualSubFolder="
            actualSubFolder = $event;
            createReportModal?.generateNewReportData();
          "
          :folders="folders"
        />
        <reports-table
          :data="folderSelected.data"
          @toggle-is-favorite="toggleIsFavorite"
          @toggle-select-report="toggleSelectReport"
          @save-cloned-report="saveClonedReport"
          @update-report="updateReport"
          :columns="folderSelected.columns"
          class="col-span-3 mt-3 md:mt-0"
        />
      </div>
    </div>
  </div>
  <create-report-modal
    ref="createReportModal"
    :folders="folders"
    :actualFolderOrSubFolder="actualFolderOrSubFolder"
    @saveReport="saveReport"
  />
  <daisy-modal
    :overlay="true"
    id="reportSchedulerModal"
    ref="reportSchedulerModal"
  >
    <report-scheduler-modal
      :folders="folders"
      @close="closeReportSchedulerModal"
    />
  </daisy-modal>
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
import ReportNameColumn from "./components/reports-table/components/columns/reportNameColumn.vue";
import UserColumn from "./components/reports-table/components/columns/userColumn.vue";
import ExportColumn from "./components/reports-table/components/columns/exportColumn.vue";
import ReportSelectionActions from "./components/report-selection-actions/index.vue";
import ReportSchedulerModal from "./components/create-report/components/report-scheduler-modal.vue";
import { v4 as uuidv4 } from "uuid";
import CreateReportModal from "./components/create-report/index.vue";

const selectedReport = ref(null);

const defaultSubFolders = ref([
  { name: "Campaign Reports" },
  { name: "Communication Reports" },
  { name: "Email Reports" },
  { name: "Financial Reports" },
  { name: "Fitness Reports" },
  { name: "Lead Reports" },
  { name: "Member Reports" },
  { name: "People Reports" },
]);

const reportNameHeader = ref({
  label: "Report Name",
  value: "report_name",
  component: ReportNameColumn,
  class: "w-full",
});
const descriptionHeader = ref({
  label: "Description",
  value: "description",
  class: "w-full",
});
const reportTypeHeader = ref({
  label: "Report Type",
  value: "report_type",
  class: "!w-[146px]",
});
const dateCreatedHeader = ref({
  label: "Date Created",
  value: "date_created",
  class: "!w-[146px]",
});
const lastRunDateHeader = ref({
  label: "Last Run Date",
  value: "last_run_date",
  default: "10 min ago",
  class: "!w-[146px]",
});
const createdByHeader = ref({
  label: "Created By",
  value: "created_by",
  class: "!w-[146px]",
});
const lastEditedByHeader = ref({
  label: "Last Edited By",
  value: "last_edited_by",
  default: "Ron",
  class: "w-full",
});
const deletedByHeader = ref({
  label: "Deleted By",
  value: "deleted_by",
  default: "Ron",
  class: "w-full",
});
const permanentDeletingIn = ref({
  label: "Permanently Deleted In",
  value: "permanently_deleted_in",
  default: "5 days",
  class: "w-full",
});
const reportStatusHeader = ref({
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
});

const completedDateHeader = ref({
  label: "Completed Date",
  value: "completed_date",
  default: "April 9, 2023",
  class: "!w-[146px]",
});
const completedTimeHeader = ref({
  label: "Completed Time",
  value: "completed_time",
  default: "1:00 PM",
  class: "!w-[146px]",
});
const userHeader = ref({
  label: "User",
  value: "user",
  component: UserColumn,
  class: "!w-[146px]",
});
const exportHeader = ref({
  label: "Export",
  value: "export",
  component: ExportColumn,
  class: "!w-[146px]",
});

const defaultColumns = ref({
  allReports: [
    reportNameHeader.value,
    descriptionHeader.value,
    reportTypeHeader.value,
    dateCreatedHeader.value,
    lastRunDateHeader.value,
    createdByHeader.value,
    lastEditedByHeader.value,
  ],
  reportQueue: [
    reportNameHeader.value,
    descriptionHeader.value,
    reportStatusHeader.value,
    completedDateHeader.value,
    completedTimeHeader.value,
    userHeader.value,
    exportHeader.value,
  ],
  favorites: [
    reportNameHeader.value,
    descriptionHeader.value,
    reportTypeHeader.value,
    dateCreatedHeader.value,
    lastRunDateHeader.value,
    createdByHeader.value,
    lastEditedByHeader.value,
  ],
  recentlyViewed: [
    reportNameHeader.value,
    descriptionHeader.value,
    reportTypeHeader.value,
    dateCreatedHeader.value,
    lastRunDateHeader.value,
    createdByHeader.value,
    lastEditedByHeader.value,
  ],
  scheduledReports: [
    reportNameHeader.value,
    descriptionHeader.value,
    reportTypeHeader.value,
    dateCreatedHeader.value,
    lastRunDateHeader.value,
    createdByHeader.value,
    lastEditedByHeader.value,
  ],
  recentlyDeleted: [
    reportNameHeader.value,
    descriptionHeader.value,
    dateCreatedHeader.value,
    lastRunDateHeader.value,
    createdByHeader.value,
    deletedByHeader.value,
    permanentDeletingIn.value,
  ],
});

const getFavoritesReports = () => {
  let array = [];

  folders.value.forEach((folder) => {
    if (folder.name == "Favorites") return;

    folder.data?.forEach((item) => {
      if (item.isFavorite && array.findIndex((e) => e.id == item.id) == -1)
        array.push(item);
    });

    folder?.subFolders?.forEach((subFolder) => {
      subFolder.data?.forEach((subItem) => {
        if (
          subItem.isFavorite &&
          array.findIndex((e) => e.id == subItem.id) == -1
        )
          array.push(subItem);
      });
    });
  });

  return array;
};

const reportSchedulerModal = ref(null);

const openReportSchedulerModal = () => {
  reportSchedulerModal.value.open();
};
const closeReportSchedulerModal = () => {
  reportSchedulerModal.value.close();
};

const folders = ref([
  {
    name: "All Reports",
    subFolders: defaultSubFolders.value,
    columns: defaultColumns.value.allReports,
    data: "defaultData",
  },
  {
    name: "Report Queue",
    subFolders: [
      { name: "Account and Contact Reports" },
      { name: "Deal Reports" },
      { name: "Campaign Reports" },
      { name: "Case and Solution Reports" },
      { name: "Product Reports" },
      { name: "Vendor Reports" },
      { name: "Quote Reports" },
      { name: "Sales Orders Reports" },
    ],
    columns: defaultColumns.value.reportQueue,
    data: "defaultData",
  },
  {
    name: "Favorites",
    subFolders: defaultSubFolders.value,
    columns: defaultColumns.value.favorites,
    getData: getFavoritesReports,
  },
  {
    name: "Recently Viewed",
    subFolders: defaultSubFolders.value,
    columns: defaultColumns.value.recentlyViewed,
    data: "defaultData",
  },
  {
    name: "Scheduled Reports",
    createReportLabel: "New Scheduled Reports",
    createReportClick: openReportSchedulerModal,
    subFolders: defaultSubFolders.value,
    columns: defaultColumns.value.scheduledReports,
    data: "defaultData",
  },
  {
    name: "Recently Deleted",
    subFolders: defaultSubFolders.value,
    columns: defaultColumns.value.recentlyDeleted,
    data: "defaultData",
  },
]);

const createReportDetails = () => {
  let report_details = {
    columns: [
      {
        label: "Name",
        value: "name",
        active: true,
        class: "w-full",
      },
      {
        label: "Annual Revenue",
        value: "annual_revenue",
        active: true,
        class: "w-full",
      },
      {
        label: "Brand Category",
        value: "brand_category",
        active: true,
        class: "w-full",
      },
      {
        label: "City",
        value: "city",
        active: true,
        class: "w-full",
      },
      {
        label: "Company",
        value: "company",
        active: true,
        class: "w-full text-center",
      },
    ],
    data: [],
  };
  for (let i = 0; i < getRandomInt(100, 0); i++) {
    report_details.data.push({
      id: 1,
      name: "Kelly Price",
      annual_revenue: "",
      brand_category: "",
      city: "",
      company: "HydraMassage",
    });
  }
  return report_details;
};

const fillFoldersWithData = () => {
  folders.value.forEach((folder) => {
    let array = [];
    for (let i = 0; i < getRandomInt(folder.name.length * 5, 0); i++) {
      let item = {};
      folder.columns.forEach((column) => {
        let value = column.default ? column.default : "";
        if (column.value == "report_name") {
          value = folder.name + ` ${i + 1}`;
        } else if (column.options?.length) {
          value =
            column.options[getRandomInt(column.options.length - 1, 0)].name;
        }
        item["report_details"] = createReportDetails();
        item[column.value] = value;
      });
      item.id = uuidv4();
      item.selected = false;
      item.isFavorite = false;
      array.push(item);
    }

    if (folder.subFolders) {
      folder.subFolders.forEach((subFolder) => {
        subFolder.columns = folder.columns;
        subFolder.data = array
          .map((item, i) => {
            return {
              ...item,
              report_name: subFolder.name + ` ${i + 1}`,
              report_details: createReportDetails(),
              id: uuidv4(),
              selected: false,
              isFavorite: false,
            };
          })
          .slice(0, getRandomInt(array.length - 1, 0));
      });
    }

    if (folder.data == "defaultData") {
      folder.data = array;
    }
  });
};
onMounted(() => {
  fillFoldersWithData();
});

const createReportModal = ref(null);

const folderSelected = computed(() => {
  if (actualSubFolder.value != null) {
    return actualSubFolder.value;
  }
  if (actualFolder.value.getData)
    actualFolder.value.data = actualFolder.value.getData();
  return actualFolder.value;
});

const createReportLabel = computed(() => {
  if (actualFolderOrSubFolder.value.createReportLabel) {
    return actualFolderOrSubFolder.value.createReportLabel;
  }
  return "Create a report";
});

const createReportClick = computed(() => {
  if (actualFolderOrSubFolder.value.createReportClick) {
    return actualFolderOrSubFolder.value.createReportClick;
  }
  return createReportModal.value.openCreateReportModal;
});

const actualFolder = ref(folders.value[0]);
const actualSubFolder = ref(null);

const actualFolderOrSubFolder = computed(() => {
  let folderActual = null;
  if (actualSubFolder?.value != null) {
    folderActual = actualFolder.value.subFolders.find((folder) => {
      return folder.name == actualSubFolder.value.name;
    });
  } else {
    folderActual = folders.value.find((folder) => {
      return folder.name == actualFolder.value.name;
    });
  }
  return folderActual;
});

const selectedReports = computed(() => {
  let reports = actualFolderOrSubFolder.value.data;
  if (Array.isArray(reports)) {
    return reports.filter((item) => {
      return item.selected;
    });
  }
});

const toggleIsFavorite = (itemSelected) => {
  actualFolderOrSubFolder.value.data.forEach((item) => {
    if (item.id == itemSelected.id) {
      item.isFavorite = !item.isFavorite;
    }
  });
};

const toggleSelectReport = (itemSelected) => {
  actualFolderOrSubFolder.value.data.forEach((item) => {
    if (item.id == itemSelected.id) {
      item.selected = !item.selected;
    }
  });
};

watch(actualFolderOrSubFolder, () => {
  // reset folders selection state
  clearSelection();
});

const clearSelection = () => {
  actualFolderOrSubFolder?.value?.data?.forEach((item) => {
    item.selected = false;
  });
};

const deleteSelectedReports = () => {
  selectedReports.value.forEach((report) => {
    actualFolderOrSubFolder.value.data.forEach((item, i) => {
      if (item.id === report.id) {
        actualFolderOrSubFolder.value.data.splice(i, 1);
      }
    });
  });
};

const saveClonedReport = (name) => {
  actualFolderOrSubFolder.value.data.unshift({
    ...selectedReport.value,
    report_name: name,
  });
};

const moveToFolder = (folderName) => {
  if (folderName === "") {
    folderName = "New folder";
  }

  let findFolder = actualFolder.value.subFolders.find(
    (folder) => folder.name === folderName
  );

  if (!findFolder) {
    findFolder = {
      name: folderName,
      columns: defaultColumns.value,
      data: [],
    };
    actualFolder.value.subFolders.push(findFolder);
  }

  selectedReports.value.forEach((report) => {
    const reportIndex = actualFolderOrSubFolder.value.data.findIndex(
      (item) => item.id === report.id
    );
    if (reportIndex !== -1) {
      const reportToMove = actualFolderOrSubFolder.value.data.splice(
        reportIndex,
        1
      )[0];
      findFolder.data.push(reportToMove);
    }
  });

  actualSubFolder.value = findFolder;
};

const updateReport = (reportData) => {
  folders.value.forEach((folder, folderIndex) => {
    if (folder.data) {
      folder.data.forEach((report, reportIndex) => {
        if (report.id == reportData.id) {
          folders.value[folderIndex].data[reportIndex] = { ...reportData };
        }
      });
      folder.data.forEach((report, reportIndex) => {
        if (report.id == reportData.id) {
          folders.value[folderIndex].data[reportIndex] = { ...reportData };
        }
      });
    }
  });
};

const saveReport = (reportData) => {
  actualFolderOrSubFolder.value?.data.unshift(toRaw(reportData));
};
</script>
