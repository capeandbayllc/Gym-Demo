<template>
    <div>
        <div class="text-center mb-4">
            <AddIcon class="h-[40px] w-[40px] border inline-block border-secondary rounded-full font-semibold cursor-pointer"/>
            <p class="text-xs mt-1">
                Update Lead
            </p>
        </div>
        <div class="page-members-center-container">
            <div class="custom-page-content-header">
                <span>Members</span>
                <search-icon v-if="!isSearchEnable" class="search-icon" @click="isSearchEnable = !isSearchEnable" />
                <input v-else type="text" placeholder="Search" class="input input-sm max-w-xs search-input" />
            </div>
            <div class="-md:px-4 custom-page-content flex-col">
                <div class="flex flex-row justify-between space-x-4 mb-4">
                    <div class="flex gap-4">
                        <select-box
                            :items="filterBy"
                            value=""
                            :label="'Filter By'"
                            :secondary="true"
                            class="w-40 filter-selected"
                        >
                        </select-box>
                    </div>
                </div>
                <div>
                    <data-table
                        :columns="columns"
                        :data="members"
                        :row-component="MemberTableRow"
                        class="h-96 overflow-y-auto"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.page-members-center-container {
    @apply py-4 pr-5 w-full h-fit;
    .custom-page-content {
        @apply block border border-secondary bg-black rounded-b p-7 mx-auto w-full max-w-[1120px];
    }
    .custom-page-content-header {
        @apply bg-secondary rounded-t-lg pl-6 p-3 font-semibold mx-auto w-full max-w-[1120px];
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
import MemberTableRow from './components/member-table-row.vue';
import { SearchIcon, AddIcon } from '@/components/icons'

const isSearchEnable = ref(false)
const filterBy = [
    {
        value: '1',
        label: 'App Referal',
    },
    {
        value: '2',
        label: 'Snapshot',
    },
    {
        value: '3',
        label: 'Grand Opening',
    },
    {
        value: '4',
        label: 'Free Trial',
    },
    {
        value: '5',
        label: 'Streaming Preview',
    },
];

const columns = [
    {
        label: 'Created',
        class: 'text-secondary',
    },
    {
        label: 'First Name',
        class: 'text-secondary',
    },
    {
        label: 'Last Name',
        class: 'text-secondary',
    },
    {
        label: 'mobile',
        class: 'text-secondary',
    },
    {
        label: 'email',
        class: 'text-secondary',
    },
    {
        label: 'Location',
        class: 'text-secondary',
    },
    {
        label: 'Type',
        class: 'text-secondary',
    },
    {
        label: 'Add-ons',
        class: 'text-secondary',
    },
    {
        label: 'Action',
        class: '',
    },
];
const members = [
    {
        id: 1,
        created: '5/5 2002, 12:24:44PM',
        first_name: 'Caleb',
        last_name: 'Sauer',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        location: '1',
        type: 'silver',
        addOns: true,
    },
    {
        id: 2,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'error',
        first_name: 'Nathan',
        last_name: 'Sipes',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        location: '1',
        type: 'bronze',
        addOns: false,
    },
    {
        id: 3,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'warning',
        first_name: 'Nathan',
        last_name: 'Sipes',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        location: '1',
        type: 'platinum',
        addOns: true,
    },
    {
        id: 4,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'warning',
        first_name: 'Nathan',
        last_name: 'Sipes',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        location: '1',
        type: 'gold',
        addOns: true,
    },
    {
        id: 5,
        created: '5/5 2002, 12:24:44PM',
        opportunity: 'warning',
        first_name: 'Nathan',
        last_name: 'Sipes',
        phone: '(123) 456-7890',
        email: 'email@email.com',
        location: '1',
        type: 'platinum',
        addOns: false,
    },
];
</script>
