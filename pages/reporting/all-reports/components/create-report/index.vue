<template>
  <div>
    <daisy-modal
      id="createReportModal"
      ref="createReportModal"
      :confirm-close="createReportScreenIndex > 0"
      @confirmClose="openCloseCreateReportReminderModal"
      @close="createReportScreenIndex = 0"
    >
      <component
        :is="createReportScreens[createReportScreenIndex]"
        @back="createReportScreenIndex--"
        @next="createReportScreenIndex++"
        @close="closeCreateReportModal"
        @saveReport="saveReport"
        :folders="folders"
        :report="newReportData"
        @updateReport="newReportData = { ...newReportData, ...$event }"
      >
      </component>
    </daisy-modal>
    <daisy-modal
      :overlay="true"
      ref="closeCreateReportReminderModal"
      id="closeCreateReportReminderModal"
    >
      <close-create-report-reminder-modal
        @confirm="confirmCancellationReportCreation"
        @cancel="cancelCancellationReportCreation"
      />
    </daisy-modal>
  </div>
</template>

<script>
import NewReport from "./new-report.vue";
import Reporting from "./reporting.vue";
import CloseCreateReportReminderModal from "./components/close-create-report-reminder-modal.vue";
import { v4 as uuidv4 } from "uuid";
import { getRandomInt } from "~/api/utils/number";

export default defineComponent({
  props: {
    folders: {
      type: Array,
      default: [],
    },
    actualFolderOrSubFolder: {
      type: Object,
    },
  },
  components: {
    CloseCreateReportReminderModal,
  },
  setup(props, { emit }) {
    const createReportModal = ref(null);
    const closeCreateReportReminderModal = ref(null);
    const newReportData = ref(null);

    const createReportScreens = ref([NewReport, Reporting]);
    const createReportScreenIndex = ref(0);

    watch(createReportScreenIndex, (actualValue, oldValue) => {
      if (
        actualValue == 0 &&
        oldValue == 1 &&
        createReportModal.value.isOpen == false
      ) {
        closeCreateReportReminderModal.value.open();
      }
    });

    const generateNewReportData = () => {
      let item = {};
      props.actualFolderOrSubFolder.columns.forEach((column) => {
        let value = column.default ? column.default : "";
        if (column.options?.length) {
          value =
            column.options[getRandomInt(column.options.length - 1, 0)].name;
        }
        item[column.value] = value;
      });
      item.id = uuidv4();
      item.selected = false;
      item.isFavorite = false;
      newReportData.value = item;
      console.log(newReportData.value);
    };

    onMounted(() => {
      generateNewReportData();
    });

    const confirmCancellationReportCreation = () => {
      createReportModal.value.confirmClose();
      setTimeout(() => {
        closeCreateReportReminderModal.value.close();
      }, 100);
    };

    const cancelCancellationReportCreation = () => {
      createReportScreenIndex.value = 1;
      closeCloseCreateReportReminderModal();
    };

    const saveReport = (report) => {
      console.log("report");
      console.log(report);
      console.log("folders.value");
      console.log(props.folders);
    };

    const openCreateReportModal = () => {
      createReportModal.value.open();
    };
    const closeCreateReportModal = () => {
      createReportModal.value.close();
    };
    const closeCloseCreateReportReminderModal = () => {
      closeCreateReportReminderModal.value.close();
    };
    const openCloseCreateReportReminderModal = () => {
      closeCreateReportReminderModal.value.open();
    };

    return {
      createReportModal,
      closeCreateReportReminderModal,
      newReportData,
      createReportScreens,
      createReportScreenIndex,
      generateNewReportData,
      confirmCancellationReportCreation,
      cancelCancellationReportCreation,
      saveReport,
      openCreateReportModal,
      closeCreateReportModal,
      closeCloseCreateReportReminderModal,
      openCloseCreateReportReminderModal,
    };
  },
});
</script>
