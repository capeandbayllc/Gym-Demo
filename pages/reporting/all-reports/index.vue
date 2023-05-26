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
          "
          @changeActualSubFolder="actualSubFolder = $event"
          :folders="folders"
        />
        <reports-table
          :data="folderSelected.data"
          @toggle-is-favorite="toggleIsFavorite"
          @toggle-select-report="toggleSelectReport"
          @save-cloned-report="saveClonedReport"
          @change-selected-report="selectedReport = $event"
          :columns="folderSelected.columns"
          class="col-span-3 mt-3 md:mt-0"
        />
      </div>
    </div>
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
      :folders="folders"
    >
    </component>
  </daisy-modal>
  <daisy-modal
    :overlay="true"
    id="closeCreateReportReminderModal"
    ref="closeCreateReportReminderModal"
  >
    <close-create-report-reminder-modal
      @close="closeCloseCreateReportReminderModal"
      @cancel="cancelReminderModal"
    />
  </daisy-modal>
  <button @click="openCloseCreateReportReminderModal">Open modal</button>
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
import NewReport from "./components/create-report/new-report.vue";
import Reporting from "./components/create-report/reporting.vue";
import ReportNameColumn from "./components/reports-table/components/columns/reportNameColumn.vue";
import UserColumn from "./components/reports-table/components/columns/userColumn.vue";
import ExportColumn from "./components/reports-table/components/columns/exportColumn.vue";
import ReportSelectionActions from "./components/report-selection-actions/index.vue";
import ReportSchedulerModal from "./components/create-report/components/report-scheduler-modal.vue";
import CloseCreateReportReminderModal from "./components/close-create-report-reminder-modal.vue";
import { v4 as uuidv4 } from "uuid";

const selectedReport = ref(null);
const closeCreateReportReminderModal = ref(null);

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

const reportNameHeader = {
  label: "Report Name",
  value: "report_name",
  component: ReportNameColumn,
  class: "w-full",
};
const descriptionHeader = {
  label: "Description",
  value: "description",
  class: "w-full",
};
const reportTypeHeader = {
  label: "Report Type",
  value: "report_type",
  class: "!w-[146px]",
};
const dateCreatedHeader = {
  label: "Date Created",
  value: "date_created",
  class: "!w-[146px]",
};
const lastRunDateHeader = {
  label: "Last Run Date",
  value: "last_run_date",
  default: "10 min ago",
  class: "!w-[146px]",
};
const createdByHeader = {
  label: "Created By",
  value: "created_by",
  class: "!w-[146px]",
};
const lastEditedByHeader = {
  label: "Last Edited By",
  value: "last_edited_by",
  default: "Ron",
  class: "w-full",
};
const deletedByHeader = {
  label: "Deleted By",
  value: "deleted_by",
  default: "Ron",
  class: "w-full",
};
const permanentDeletingIn = {
  label: "Permanently Deleted In",
  value: "permanently_deleted_in",
  default: "5 days",
  class: "w-full",
};
const reportStatusHeader = {
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
};

const completedDateHeader = {
  label: "Completed Date",
  value: "completed_date",
  default: "April 9, 2023",
  class: "!w-[146px]",
};
const completedTimeHeader = {
  label: "Completed Time",
  value: "completed_time",
  default: "1:00 PM",
  class: "!w-[146px]",
};
const userHeader = {
  label: "User",
  value: "user",
  component: UserColumn,
  class: "!w-[146px]",
};
const exportHeader = {
  label: "Export",
  value: "export",
  component: ExportColumn,
  class: "!w-[146px]",
};

const defaultColumns = ref({
  allReports: [
    reportNameHeader,
    descriptionHeader,
    reportTypeHeader,
    dateCreatedHeader,
    lastRunDateHeader,
    createdByHeader,
    lastEditedByHeader,
  ],
  reportQueue: [
    reportNameHeader,
    descriptionHeader,
    reportStatusHeader,
    completedDateHeader,
    completedTimeHeader,
    userHeader,
    exportHeader,
  ],
  favorites: [
    reportNameHeader,
    descriptionHeader,
    reportTypeHeader,
    dateCreatedHeader,
    lastRunDateHeader,
    createdByHeader,
    lastEditedByHeader,
  ],
  recentlyViewed: [
    reportNameHeader,
    descriptionHeader,
    reportTypeHeader,
    dateCreatedHeader,
    lastRunDateHeader,
    createdByHeader,
    lastEditedByHeader,
  ],
  scheduledReports: [
    reportNameHeader,
    descriptionHeader,
    reportTypeHeader,
    dateCreatedHeader,
    lastRunDateHeader,
    createdByHeader,
    lastEditedByHeader,
  ],
  recentlyDeleted: [
    reportNameHeader,
    descriptionHeader,
    dateCreatedHeader,
    lastRunDateHeader,
    createdByHeader,
    deletedByHeader,
    permanentDeletingIn,
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

const createReportScreens = ref([NewReport, Reporting]);
const createReportScreenIndex = ref(0);
const createReportModal = ref(false);
const openCreateReportModal = () => {
  createReportModal.value.open();
};
const closeCreateReportModal = () => {
  createReportModal.value.close();
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

onMounted(() => {
  fillFoldersWithData();
});

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

const folderSelected = computed(() => {
  if (actualSubFolder.value != null) {
    return actualSubFolder.value;
  }
  if (actualFolder.value.getData)
    actualFolder.value.data = actualFolder.value.getData();
  return actualFolder.value;
});

const createReportLabel = computed(() => {
  if (activeFolderOrSubFolder.value.createReportLabel) {
    return activeFolderOrSubFolder.value.createReportLabel;
  }
  return "Create a report";
});

const createReportClick = computed(() => {
  if (activeFolderOrSubFolder.value.createReportClick) {
    return activeFolderOrSubFolder.value.createReportClick;
  }
  return openCreateReportModal;
});

const actualFolder = ref(folders.value[0]);
const actualSubFolder = ref(null);

const activeFolderOrSubFolder = computed(() => {
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
  let reports = activeFolderOrSubFolder.value.data;
  if (Array.isArray(reports)) {
    return reports.filter((item) => {
      return item.selected;
    });
  }
});

const toggleIsFavorite = (itemSelected) => {
  activeFolderOrSubFolder.value.data.forEach((item) => {
    if (item.id == itemSelected.id) {
      item.isFavorite = !item.isFavorite;
    }
  });
};

const toggleSelectReport = (itemSelected) => {
  activeFolderOrSubFolder.value.data.forEach((item) => {
    if (item.id == itemSelected.id) {
      item.selected = !item.selected;
    }
  });
};

watch(activeFolderOrSubFolder, () => {
  // reset folders selection state
  clearSelection();
});

const clearSelection = () => {
  activeFolderOrSubFolder?.value?.data?.forEach((item) => {
    item.selected = false;
  });
};

const deleteSelectedReports = () => {
  selectedReports.value.forEach((report) => {
    activeFolderOrSubFolder.value.data.forEach((item, i) => {
      if (item.id === report.id) {
        activeFolderOrSubFolder.value.data.splice(i, 1);
      }
    });
  });
};

const saveClonedReport = (name) => {
  activeFolderOrSubFolder.value.data.unshift({
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
    const reportIndex = activeFolderOrSubFolder.value.data.findIndex(
      (item) => item.id === report.id
    );
    if (reportIndex !== -1) {
      const reportToMove = activeFolderOrSubFolder.value.data.splice(
        reportIndex,
        1
      )[0];
      findFolder.data.push(reportToMove);
    }
  });

  actualSubFolder.value = findFolder;
};

const closeCloseCreateReportReminderModal = () => {
  closeCreateReportReminderModal.value.close();
};

const openCloseCreateReportReminderModal = () => {
  closeCreateReportReminderModal.value.open();
};

watch(createReportScreenIndex, (actualValue, oldValue) => {
  if (
    actualValue == 0 &&
    oldValue == 1 &&
    createReportModal.value.isOpen == false
  ) {
    closeCreateReportReminderModal.value.open();
  }
});

const cancelReminderModal = () => {
  createReportScreenIndex.value = 1;
  closeCloseCreateReportReminderModal();
  openCreateReportModal();
};
</script>
