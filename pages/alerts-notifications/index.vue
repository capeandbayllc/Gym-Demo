<template>
  <div class="page-alerts-notifications-container">
    <div class="-md:px-4 page-content flex-col">
      <search-input></search-input>
      <search-white-input
        :searchValue="searchInput"
        @update="searchInput = $event"
      />
      <filter-actions></filter-actions>
      <div class="mt-5">
        <simple-card title="Recent Alerts" class="mb-5">
          <div class="p-6">
            <data-table
              :columns="columns"
              :data="list"
              :row-component="RecentAlertsTableRow"
              class="h-72 overflow-y-auto recent-alerts-datatable"
            />
          </div>
        </simple-card>
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.page-alerts-notifications-container {
  @apply py-4 pr-5 w-full h-fit;
  .page-content {
    @apply block border border-secondary bg-neutral rounded p-7 w-fit max-w-[1120px] mx-auto;
  }
}
</style>
<style lang="postcss">
.recent-alerts-datatable thead {
  @apply top-0 sticky bg-base-300 h-10;
}
</style>
<script setup>
import FilterActions from "./components/filter-actions.vue";
import RecentAlertsTableRow from "./components/recent-alerts-table-row.vue";
import SearchWhiteInput from "~/components/search-white-input.vue";

const searchInput = ref("example");
const columns = [
  {
    label: "Segment",
    class: "text-secondary text-left",
  },
  {
    label: "First Name",
    class: "text-secondary text-left",
  },
  {
    label: "Last Name",
    class: "text-secondary text-left",
  },
  {
    label: "Mobile",
    class: "text-secondary text-left",
  },
  {
    label: "Email",
    class: "text-secondary text-left",
  },
  {
    label: "Location",
    class: "text-secondary text-left",
  },
  {
    label: "Type",
    class: "text-secondary text-left",
  },
  {
    label: "Created",
    class: "text-secondary text-left",
  },
];
const list = [
  {
    id: 1,
    segment: "New Member",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "warning",
    first_name: "Kevin",
    last_name: "Buchanan",
    location: "1",
    type: "platinum",
  },
  {
    id: 2,
    segment: "New Member",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "warning",
    first_name: "Kevin",
    last_name: "Buchanan",
    location: "1",
    type: "platinum",
  },
  {
    id: 3,
    segment: "New Member",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "warning",
    first_name: "Kevin",
    last_name: "Buchanan",
    location: "1",
    type: "platinum",
  },
  {
    id: 4,
    segment: "Marketing Campaign",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "warning",
    first_name: "Kevin",
    last_name: "Buchanan",
    location: "1",
    type: "gold",
  },
  {
    id: 5,
    segment: "Marketing Campaign",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "warning",
    first_name: "Kevin",
    last_name: "Buchanan",
    location: "1",
    type: "silver",
  },
  {
    id: 6,
    segment: "PT Sessions",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "warning",
    first_name: "Kevin",
    last_name: "Buchanan",
    location: "1",
    type: "bronze",
  },
  {
    id: 7,
    segment: "PT Sessions",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "warning",
    first_name: "Kevin",
    last_name: "Buchanan",
    location: "1",
    type: "platinum",
  },
  {
    id: 8,
    segment: "PT Sessions",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "warning",
    first_name: "Kevin",
    last_name: "Buchanan",
    location: "1",
    type: "platinum",
  },
  {
    id: 9,
    segment: "PT Sessions",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "warning",
    first_name: "Kevin",
    last_name: "Buchanan",
    location: "1",
    type: "platinum",
  },
  {
    id: 10,
    segment: "PT Sessions",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "warning",
    first_name: "Kevin",
    last_name: "Buchanan",
    location: "1",
    type: "platinum",
  },
];
</script>
