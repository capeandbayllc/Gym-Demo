<template>
    <div class="page-recruitment-center-container">
        <div>
            <div class="page-content custom-page-content-header">
                <span>Recruitment</span>
                <search-icon v-if="!isSearchEnable" class="search-icon" @click="isSearchEnable = !isSearchEnable" />
                <input v-else type="text" placeholder="Search" class="input input-sm max-w-xs search-input" />
            </div>
            <div class="-md:px-4 page-content custom-page-content flex-col">
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
<style scoped>
.page-recruitment-center-container {
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
import RecruitmentTableRow from './components/recruitment-table-row.vue';
import { SearchIcon, AddIcon } from '@/components/icons'
import {faker} from "@faker-js/faker";

const isSearchEnable = ref(false)

const columns = [
    {
        label: 'First Name',
        class: 'text-secondary',
    },
    {
        label: 'Last Name',
        class: 'text-secondary',
    },
    {
        label: 'Phone',
        class: 'text-secondary',
    },
    {
        label: 'E-mail',
        class: 'text-secondary',
    },
];
const leads = [
    {
        id: 1,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        phone:faker.phone.number('501-###-###'),
      email:faker.internet.email()
    },
    {
        id: 2,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone:faker.phone.number('501-###-###'),
      email:faker.internet.email()
    },
    {
        id: 3,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone:faker.phone.number('501-###-###'),
      email:faker.internet.email()
    },
    {
        id: 4,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone:faker.phone.number('501-###-###'),
      email:faker.internet.email()
    },
    {
        id: 5,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone:faker.phone.number('501-###-###'),
      email:faker.internet.email()
    },
    {
        id: 6,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone:faker.phone.number('501-###-###'),
      email:faker.internet.email()
    },
    {
        id: 7,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone:faker.phone.number('501-###-###'),
      email:faker.internet.email()
    },
];
</script>
