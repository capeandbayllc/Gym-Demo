<template>
  <simple-card title="People Search">
    <div class="people-search-container">
      <div class="people-search-actions">
        <select-box class="w-40" label="Member Type" :items="memTypes" />
        <select-box class="w-40" label="Locations" :items="locations" />
        <select-box class="w-40" label="Sort By: Featured" :items="sortBy" />
        <search-input size="lg" border="base-content" />
      </div>
      <div class="people-search-result">
        <div class="result-title">Leads</div>
        <people-lead-table />
        <div class="result-title">Members</div>
        <people-member-table />
      </div>
    </div>
  </simple-card>
</template>
<style scoped>
.people-search-container {
  @apply pl-2 pr-9 pt-10 pb-8;
}

.people-search-actions {
  @apply flex flex-row space-x-8 justify-end;
}

.people-search-result {
  @apply border border-secondary rounded px-8 py-6 mt-8 ml-10 flex flex-col space-y-4 max-h-[70vh] overflow-y-auto;
  .result-title {
    @apply text-lg text-2xl font-semibold;
  }
}
</style>
<script setup>
import PeopleLeadTable from "../common-tables/people-lead-table.vue";
import PeopleMemberTable from "../common-tables/people-member-table.vue";

const memTypes = [
  {
    id: 1,
    label: "bronze",
    value: "Bronze",
  },
  {
    id: 2,
    value: "silver",
    label: "Silver",
  },
  {
    id: 3,
    value: "gold",
    label: "Gold",
  },
  {
    id: 4,
    value: "platinum",
    label: "Platinum",
  },
];
const locations = [
  {
    id: 1,
    label: "Location ####",
    value: 1,
  },
  {
    id: 2,
    value: 2,
    label: "Location ####",
  },
  {
    id: 3,
    value: 3,
    label: "Location ####",
  },
];
const sortBy = [
  {
    id: 1,
    label: "Featured",
    value: 1,
  },
  {
    id: 2,
    value: 2,
    label: "A-Z",
  },
  {
    id: 3,
    value: 3,
    label: "Z-A",
  },
];
</script>
