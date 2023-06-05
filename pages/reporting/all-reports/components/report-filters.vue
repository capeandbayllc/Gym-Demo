<template>
  <div
    class="border border-base-content/60 py-2 px-3 rounded-xl w-full flex flex-wrap items-center gap-3"
  >
    <div class="flex flex-nowrap">
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
    <input type="text" class="dark-input" />

    <button
      class="bg-secondary rounded-xl px-4 h-8 disabled:bg-secondary/80 disabled:text-base-content/80"
      disabled
    >
      Apply
    </button>
  </div>
</template>

<style scoped lang="postcss">
.select-dropdown {
  @apply bg-neutral h-9 !w-[170px] rounded-xl px-1;
}
.dark-input {
  @apply rounded-xl h-9 bg-neutral placeholder:text-base-content/40 px-3 w-[170px] max-w-full disabled:text-base-content/50 outline-none;
}
</style>

<script setup>
import selectDropdown from "./report-details-modal/components/select-dropdown.vue";

const filterOptions = [
  "begins with",
  "does not begin with",
  "ends with",
  "does not begin with",
  "contains",
  "does not contain",
];
</script>
