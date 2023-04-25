<template>
  <div class="w-full max-w-7xl">
    <div>
      <SearchTableToggler heading="Vendors" />
      <div class="border border-secondary bg-base-300 rounded-b p-7 flex-col">
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
import SearchTableToggler from "../components/search-table-toggler.vue";

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
