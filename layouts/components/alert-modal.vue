<template>
  <card
    title=""
    class="alert-popup-card"
    :options="{
      collapse: false,
      favorite: false,
    }"
  >
    <template #content>
      <div class="alert-popup-container">
        <input
          type="text"
          placeholder="Search"
          class="input w-full bg-base-content text-black text-lg"
          v-model="searchInput"
        />
        <filter-action class="pt-6" />
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
    </template>
  </card>
</template>
<style scoped>
.alert-popup-card {
  @apply rounded-2xl bg-neutral;
  .alert-popup-container {
    @apply pl-2 pr-2 pt-6 pb-6;
    .modal_scroll {
      @apply overflow-y-auto;
      height: 60vh;
    }
  }
}
</style>
<style>
.recent-alerts-datatable thead {
  @apply top-0 sticky bg-black h-10;
}
</style>
<script setup>
import FilterAction from "./alert-modal/filter-action.vue";
import RecentAlertsTableRow from "~~/pages/alerts-notifications/components/recent-alerts-table-row.vue";

const searchInput = ref("");
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
    type: "platinum",
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
    type: "platinum",
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
    type: "platinum",
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
