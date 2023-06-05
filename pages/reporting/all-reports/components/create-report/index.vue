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
        @next="createReportScreenIndex++"
        @back="closeCreateReportModal"
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
  emits: ["saveReport"],
  components: {
    CloseCreateReportReminderModal,
  },
  setup(props, { emit }) {
    const createReportModal = ref(null);
    const closeCreateReportReminderModal = ref(null);
    const newReportData = ref(null);

    const createReportScreens = ref([NewReport, Reporting]);
    const createReportScreenIndex = ref(0);

    const actualFolderOrSubFolderName = ref("");

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

    watchEffect(() => {
      if (
        props.actualFolderOrSubFolder.name != actualFolderOrSubFolderName.value
      ) {
        actualFolderOrSubFolderName.value = props.actualFolderOrSubFolder.name;
        generateNewReportData();
      }
    });

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
      report.id = uuidv4();
      createReportScreenIndex.value = 0;
      setTimeout(() => {
        closeCreateReportModal();
      }, 100);
      emit("saveReport", report);
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
      actualFolderOrSubFolderName,
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
