<template>
  <div class="py-4 pr-5 w-full h-fit">
    <div>
      <div
        class="page-content py-4 bg-secondary rounded-t-lg pl-6 p-3 font-semibold flex justify-between items-center"
      >
        <span>Vendors</span>

        <div class="flex items-center h-8">
          <button class="mx-4" @click="isSearchEnable = !isSearchEnable">
            <search-icon />
          </button>
          <input
            v-if="isSearchEnable"
            type="text"
            placeholder="Search"
            class="input input-sm max-w-xs bg-secondary border border-base-content rounded"
          />
        </div>
      </div>
      <div
        class="-md:px-4 page-content border border-secondary bg-base-300 rounded-b p-7 flex-col"
      >
        <div>
          <data-table
            :columns="columns"
            :data="leads"
            :row-component="VendorsTableRow"
            class="h-96 overflow-y-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VendorsTableRow from "./components/vendors-table-row.vue";
import { SearchIcon, AddIcon } from "@/components/icons";

const isSearchEnable = ref(false);

const columns = [
  {
    label: "Vendor Name",
    class: "text-secondary",
  },
  {
    label: "Contact Name",
    class: "text-secondary",
  },
  {
    label: "Phone",
    class: "text-secondary",
  },
  {
    label: "E-mail",
    class: "text-secondary",
  },
];
const leads = [
  {
    id: 1,
    first_name: "Vendor 1",
    last_name: "Name 1",
    phone: "(123)-456-7890",
    email: "email@email.com",
  },
  {
    id: 2,
    first_name: "Vendor 2",
    last_name: "Name 2",
    phone: "(123)-456-7890",
    email: "email@email.com",
  },
  {
    id: 3,
    first_name: "Vendor 3",
    last_name: "Name 3",
    phone: "(123)-456-7890",
    email: "email@email.com",
  },
  {
    id: 4,
    first_name: "Vendor 4",
    last_name: "Name 4",
    phone: "(123)-456-7890",
    email: "email@email.com",
  },
  {
    id: 5,
    first_name: "Vendor 5",
    last_name: "Name 5",
    phone: "(123)-456-7890",
    email: "email@email.com",
  },
  {
    id: 6,
    first_name: "Vendor 6",
    last_name: "Name 6",
    phone: "(123)-456-7890",
    email: "email@email.com",
  },
  {
    id: 7,
    first_name: "Vendor 7",
    last_name: "Name 7",
    phone: "(123)-456-7890",
    email: "email@email.com",
  },
];
</script>
