<template>
    <div class="page-corporation-center-container">
        <div>
            <div class="page-content custom-page-content-header">
                <span>Corporations</span>
                <search-icon v-if="!isSearchEnable" class="search-icon" @click="isSearchEnable = !isSearchEnable" />
                <input v-else type="text" placeholder="Search" class="input input-sm max-w-xs search-input" />
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
import CorporationTableRow from './components/corporation-table-row.vue';
import { SearchIcon, AddIcon } from '@/components/icons'

const isSearchEnable = ref(false)

const columns = [
    {
        label: 'Corporation Name',
        class: 'text-secondary',
    },
    {
        label: 'Contact Name',
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
        first_name: 'Corporation 1',
        last_name: 'Name 1',
        phone: '(123)-456-7890',
        email: 'email@email.com',
    },
    {
        id: 2,
        first_name: 'Corporation 2',
        last_name: 'Name 2',
        phone: '(123)-456-7890',
        email: 'email@email.com',
    },
    {
        id: 3,
        first_name: 'Corporation 3',
        last_name: 'Name 3',
        phone: '(123)-456-7890',
        email: 'email@email.com',
    },
    {
        id: 4,
        first_name: 'Corporation 4',
        last_name: 'Name 4',
        phone: '(123)-456-7890',
        email: 'email@email.com',
    },
    {
        id: 5,
        first_name: 'Corporation 5',
        last_name: 'Name 5',
        phone: '(123)-456-7890',
        email: 'email@email.com',
    },
    {
        id: 6,
        first_name: 'Corporation 6',
        last_name: 'Name 6',
        phone: '(123)-456-7890',
        email: 'email@email.com',
    },
    {
        id: 7,
        first_name: 'Corporation 7',
        last_name: 'Name 7',
        phone: '(123)-456-7890',
        email: 'email@email.com',
    },
];
</script>
