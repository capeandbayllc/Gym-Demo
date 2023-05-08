<template>
  <div class="py-4 pr-5 w-full h-fit">
    <div>
      <div
        class="page-content flex justify-between items-center bg-secondary rounded-t-lg pl-6 p-3 font-semibold"
      >
        <span>Recruitment</span>
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
      <div
        class="-md:px-4 page-content border border-secondary bg-base-300 rounded-b p-7 flex-col"
      >
        <div>
          <data-table
            :columns="columns"
            :data="leads"
            :row-component="RecruitmentTableRow"
            class="h-96 overflow-y-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RecruitmentTableRow from "./components/recruitment-table-row.vue";
import { SearchIcon } from "@/components/icons";
import { faker } from "@faker-js/faker";

const isSearchEnable = ref(false);

const columns = [
  {
    label: "First Name",
    class: "text-secondary",
  },
  {
    label: "Last Name",
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
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone: faker.phone.number("501-###-###"),
    email: faker.internet.email(),
  },
  {
    id: 2,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone: faker.phone.number("501-###-###"),
    email: faker.internet.email(),
  },
  {
    id: 3,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone: faker.phone.number("501-###-###"),
    email: faker.internet.email(),
  },
  {
    id: 4,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone: faker.phone.number("501-###-###"),
    email: faker.internet.email(),
  },
  {
    id: 5,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone: faker.phone.number("501-###-###"),
    email: faker.internet.email(),
  },
  {
    id: 6,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone: faker.phone.number("501-###-###"),
    email: faker.internet.email(),
  },
  {
    id: 7,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone: faker.phone.number("501-###-###"),
    email: faker.internet.email(),
  },
];
</script>
