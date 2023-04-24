<template>
  <div class="page-corporation-center-container">
    <div>
      <div
        class="bg-secondary flex justify-between rounded-t-lg pl-6 p-3 font-semibold mx-auto w-full max-w-7xl page-content items-center"
      >
        <span>Corporations</span>
        <div class="flex items-center h-8">
          <button class="mx-4" @click="isSearchEnable = !isSearchEnable">
            <SearchIcon />
          </button>
          <input
            v-if="isSearchEnable"
            type="text"
            placeholder="Search"
            class="input input-sm max-w-xs bg-secondary border border-base-content rounded"
          />
        </div>
      </div>
      <div class="-md:px-4 page-content custom-page-content flex-col">
        <div>
          <data-table
            :columns="columns"
            :data="leads"
            :row-component="CorporationTableRow"
            class="h-96 overflow-y-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.page-corporation-center-container {
  @apply py-4 pr-5 w-full h-fit;
  .custom-page-content {
    @apply block border border-secondary bg-black rounded-b p-7;
  }
  .custom-page-content-header {
    @apply bg-secondary rounded-t-lg pl-6 p-3 font-semibold;
    .search-icon {
      @apply float-right m-1 mr-6 cursor-pointer;
    }
    .search-input {
      @apply float-right -mt-1 mr-6 cursor-pointer bg-secondary border border-white rounded;
    }
  }
}
</style>
<style>
/* @media (max-width: 1300px) {
    .page-content {
        width: 90% !important;
    }
} */
</style>
<script setup>
import CorporationTableRow from "./components/corporation-table-row.vue";
import { SearchIcon, AddIcon } from "@/components/icons";
import { faker } from "@faker-js/faker";

const isSearchEnable = ref(false);

const columns = [
  {
    label: "Corporation Name",
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
    first_name: faker.company.companyName(),
    last_name: faker.name.fullName(),
    phone: faker.phone.number("501-###-###"),
    email: "email@email.com",
  },
  {
    id: 2,
    first_name: faker.company.companyName(),
    last_name: faker.name.fullName(),
    phone: faker.phone.number("501-###-###"),
    email: "email@email.com",
  },
  {
    id: 3,
    first_name: faker.company.companyName(),
    last_name: faker.name.fullName(),
    phone: faker.phone.number("501-###-###"),
    email: "email@email.com",
  },
  {
    id: 4,
    first_name: faker.company.companyName(),
    last_name: faker.name.fullName(),
    phone: faker.phone.number("501-###-###"),
    email: "email@email.com",
  },
  {
    id: 5,
    first_name: faker.company.companyName(),
    last_name: faker.name.fullName(),
    phone: faker.phone.number("501-###-###"),
    email: "email@email.com",
  },
  {
    id: 6,
    first_name: faker.company.companyName(),
    last_name: faker.name.fullName(),
    phone: faker.phone.number("501-###-###"),
    email: "email@email.com",
  },
  {
    id: 7,
    first_name: faker.company.companyName(),
    last_name: faker.name.fullName(),
    phone: faker.phone.number("501-###-###"),
    email: "email@email.com",
  },
];
</script>
