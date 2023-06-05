<template>
  <div class="flex flex-col gap-3">
    <div class="flex justify-between gap-5 items-center flex-wrap">
      <div class="flex items-center gap-2">
        <arrow-icon
          v-if="saved"
          direction="left"
          class="h-fit cursor-pointer"
          @click="emit('closeRunReport')"
        />
        <h5 class="text-xl">{{ report.report_name }}</h5>
        <font-awesome-icon
          v-if="saved"
          :icon="['fas', 'circle-info']"
          size="sm"
          tabindex="0"
          class="outline-none"
          @click.prevent.stop
        ></font-awesome-icon>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <span class="text-sm" v-if="saved">
          <font-awesome-icon
            :icon="['fas', 'rotate-right']"
            size="sm"
            tabindex="0"
            class="outline-none"
            @click.prevent.stop
          ></font-awesome-icon>
          Updated less than a minute ago
        </span>
        <Button
          v-if="!saved"
          size="sm"
          outline
          class="normal-case rounded-lg hover:text-secondary h-8"
          @click="emit('closeRunReport')"
        >
          Cancel
        </Button>
        <Button
          v-if="!saved"
          size="sm"
          outline
          class="normal-case rounded-lg hover:text-secondary h-8"
        >
          Edit
        </Button>
        <edit-report :selectOutline="saved">
          <button
            class="bg-secondary rounded-l-lg px-5 h-8"
            @click="saved = true"
            v-if="!saved"
          >
            Save
          </button>
          <button v-else class="border rounded-l-lg h-8 px-5">Edit</button>
        </edit-report>
      </div>
    </div>

    <div>
      <span>Total Records: </span>
      <span class="font-semibold">{{ actualData.length }}</span>
    </div>
    <report-filters />
    <reporting-table
      :data="actualData"
      :columns="actualColumns"
      class="mt-3 sm:mt-0 sm:col-span-8 md:col-span-8 xl:col-span-9 !h-full"
      tableClass="!h-full !max-h-full"
    />
  </div>
</template>

<script setup>
import ReportingTable from "../reporting-table.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFilter,
  faRotateRight,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ArrowIcon } from "~~/components/icons";
import ReportFilters from "../../../report-filters.vue";
import EditReport from "../../../edit-report/index.vue";
library.add(faFilter);
library.add(faRotateRight);
library.add(faCircleInfo);

const saved = ref(false);

const props = defineProps({
  report: {
    type: Object,
  },
  actualData: {
    type: Array,
    default: [],
  },
  actualColumns: {
    type: Array,
    default: [],
  },
});

const emit = defineEmits("closeRunReport");

const filterOptions = [
  "begins with",
  "does not begin with",
  "ends with",
  "does not begin with",
  "contains",
  "does not contain",
];
</script>
