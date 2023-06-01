<template>
  <div class="flex flex-col gap-3">
    <div class="flex justify-between items-center">
      <h5 class="text-xl">{{ report.report_name }}</h5>
      <div class="flex items-center gap-2">
        <Button
          size="sm"
          outline
          class="normal-case rounded-lg hover:text-secondary"
          @click="emit('closeRunReport')"
        >
          Cancel
        </Button>
        <edit-report>
          <button class="bg-secondary rounded-l-xl px-5">Save</button>
        </edit-report>
      </div>
    </div>

    <div>
      <span>Total Records: </span>
      <span class="font-semibold">{{ actualData.length }}</span>
    </div>
    <div class="rounded-xl flex items-center gap-3">
      <div>
        <font-awesome-icon
          :icon="['far', 'filter']"
          size="md"
          class="mr-1 mt-[4px] focus:outline-none"
          tabindex="0"
          @click.prevent.stop
        />
        <span>Filters</span>
      </div>
      <select-dropdown
        value=""
        grayContent
        :scrollable="true"
        :items="filterOptions"
        label="None"
        class="select-dropdown"
      />
      <select-dropdown
        value=""
        grayContent
        :scrollable="true"
        :items="filterOptions"
        label="None"
        class="select-dropdown"
      />
      <input type="text" class="dark-input block" />

      <button
        class="bg-secondary rounded-xl px-4 h-8 disabled:bg-secondary/80 disabled:text-base-content/80"
        disabled
      >
        Apply
      </button>
    </div>
    <reporting-table
      :data="actualData"
      :columns="actualColumns"
      class="mt-3 sm:mt-0 sm:col-span-8 md:col-span-8 xl:col-span-9"
    />
  </div>
</template>

<style scoped lang="postcss">
.select-dropdown {
  @apply bg-neutral h-9 !w-[170px] rounded-xl px-1;
}
.dark-input {
  @apply rounded-xl h-9 bg-neutral placeholder:text-base-content/40 px-3 max-w-[170px] w-full disabled:text-base-content/50 outline-none;
}
</style>

<script setup>
import ReportingTable from "../reporting-table.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import selectDropdown from "../../../report-details-modal/components/select-dropdown.vue";
import EditReport from "../../../edit-report/index.vue";
library.add(faFilter);

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
