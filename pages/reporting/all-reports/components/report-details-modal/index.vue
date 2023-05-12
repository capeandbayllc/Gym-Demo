<template>
  <div class="modal-container">
    <div class="modal-header relative">
      <div class="font-semibold text-2xl flex">
        <div class="relative flex items-center gap-5">
          <arrow-left
            class="pt-1 h-12 cursor-pointer"
            @click="emit('close')"
          ></arrow-left>
          {{ report.report_name }}
          <div class="">
            <button @click.stop="toggleTitleDropdown">
              <vertical-ellipsis
                class="h-6 fill-base-content transform rotate-90 mt-[9px]"
              />
            </button>
            <div
              class="dropdown"
              @click.stop="toggleTitleDropdown"
              v-show="showTitleDropdown"
            >
              <div class="dropdown-container">
                <div class="dropdown-item">Rename</div>
                <div class="dropdown-item">Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-right pt-6 pb-4 flex justify-between gap-4 flex-wrap">
        <div class="flex gap-4 items-center flex-wrap">
          <div class="text-[18px] flex items-center gap-2 font-semibold">
            <filters-reporting-icon class="w-7" />
            Filters
          </div>
          <select-dropdown
            value=""
            grayContent
            :items="timeOptions"
            label="None"
            class="select-dropdown bg-neutral"
          />
          <equal-to-icon />
          <select-dropdown
            value=""
            grayContent
            :items="timeOptions"
            label="Created Time"
            class="select-dropdown bg-neutral"
          />
          <select-dropdown
            value=""
            :items="totalRecordsOptions"
            countCircle="37"
            label="Total records"
            class="select-dropdown bg-secondary"
          />
          <Button
            size="sm"
            outline
            error
            class="normal-case rounded-lg !text-base-content border-error"
            @click="emit('close')"
          >
            Clear
          </Button>
          <Button
            size="sm"
            outline
            success
            class="normal-case rounded-lg !text-base-content border-success"
          >
            Apply
          </Button>
        </div>
        <div class="flex gap-4 items-center">
          <Button
            size="sm"
            outline
            class="normal-case rounded-lg"
            @click="emit('close')"
          >
            Cancel
          </Button>
          <Button size="sm" outline class="normal-case rounded-lg">
            Run
          </Button>
          <select-dropdown
            value=""
            :items="['Clone', 'Export', 'Send Email']"
            label="Edit"
            class="bg-secondary h-9 !w-[120px] rounded-xl px-1 w-full"
          />
        </div>
      </div>
    </div>
    <div class="modal-content">
      <div class="max-full h-[60vh] overflow-auto"></div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal-container {
  @apply py-4 px-6 md:px-8 w-[90vw] bg-base-300 border-2 rounded-3xl text-[0.9rem] flex flex-col border-secondary relative bg-gradient-to-b from-secondary-focus to-base-300/30;
  .modal-header {
    .dropdown {
      @apply absolute top-[28px] right-[0px] h-auto z-[20];
      .dropdown-container {
        @apply bg-base-300 border-secondary border text-base font-normal rounded-2xl p-3 px-5 w-[120px];
        .dropdown-item {
          @apply mb-2 cursor-pointer;
        }
      }
    }
    .select-dropdown {
      @apply h-9 !w-[170px] rounded-xl px-1;
    }
  }
  .modal-content {
    ::-webkit-scrollbar {
      @apply hidden;
    }
    .select-container {
      @apply mb-7;
      .select-title {
        @apply pb-2 text-[15px];
      }
      .select-box {
        @apply bg-neutral-content text-base-content font-semibold rounded-lg !text-left;
      }
    }
  }
}
</style>

<script setup>
import selectDropdown from "./components/select-dropdown.vue";
import equalToIcon from "./components/equal-to-icon.vue";
import {
  VerticalEllipsis,
  ArrowLeft,
  FiltersReportingIcon,
} from "~/components/icons";

const emit = defineEmits(["close"]);

const props = defineProps({
  report: {
    type: Object,
  },
});

const showTitleDropdown = ref(false);

const toggleTitleDropdown = () => {
  showTitleDropdown.value = !showTitleDropdown.value;
};

const totalRecordsOptions = [
  "Total records",
  "Total records",
  "Total records",
  "Total records",
];

const timeOptions = [
  "Between",
  "is before",
  "is after",
  "Yesterday",
  "Today",
  "Tomorrow",
  "Last Week",
  "Current Week",
  "Next Week",
  "Lost Month",
  "Current Month",
  "Next Month",
  "Lost 3 Months",
  "Lost 6 Months",
  "Lost 12 Months",
  "Next 3 Months",
  "Next 6 Months",
  "Next 12 Month",
  "Age in Days",
  "Age in Months",
  "Age in Years",
  "Due in Days",
  "Current Quarter",
  "Current Year",
  "Previous Querter",
  "Previous Year",
  "Next Quarter",
  "Next Year",
  "1st Quarter",
  "2nd Quarter",
  "3rd Quarter",
  "4th Quarter",
];
</script>
