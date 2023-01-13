<template>
    <div class="agreement-container">
        <div class="page-title">Agreement Templates</div>
        <div class="page-content">
            <div class="flex justify-center items-center pt-8 pb-10">
                <button class="flex flex-col items-center mr-[40px]" @click="$emit('newAgreement')">
                    <NewAgreementIcon class="h-[50px] mb-2"/>
                    <span>Start a New Agreement</span>
                </button>
                <button class="flex flex-col items-center">
                    <AddIcon class="w-[150px] h-[50px] mb-2"/>
                    <span>Pick up Template</span>
                </button>
            </div>
            <input type="text" placeholder="Search" class="input w-full bg-base-content text-black text-lg mb-6"  v-model="searchInput"/>
            <FilterActions class="mb-6"/>
            <simple-card title="Agreement Templates">
                <agreement-search-table :columns="columns" :items="data" class="p-6"/>
            </simple-card>
        </div>
    </div>
    <daisy-modal ref="statusChangedModal" id="statusChangedModal">
        <simple-card class="p-4">
            <p class="font-semibold w-full text-center mb-4">Are you sure you want to make this inactive?</p>
            <div class="text-center">
                <button class="text-gray-500 mr-4" @click="cancel">Cancel</button>
                <button class="text-secondary" @click="confirm">Confirm</button>
            </div>
        </simple-card>
    </daisy-modal>
</template>

<script setup>
import { NewAgreementIcon, AddIcon } from "@/components/icons";
import FilterActions from './components/filter-actions.vue';
import AgreementSearchTable from './components/agreement-search-table.vue';

const searchInput =  ref("");

const columns = [
    {
        label: "Name",
        class: "text-secondary text-left"
    },
    {
        label: "Agreement Type",
        class: "text-secondary text-left"
    },
    {
        label: "Schedule Type",
        class: "text-secondary text-left"
    },
    {
        label: "Status",
        class: "text-secondary text-left"
    },
    {
        label: "Created By",
        class: "text-secondary text-left"
    }, 
    {
        label: "Availability",
        class: "text-secondary text-left"
    },
    {
        label: "Edit",
        class: "text-secondary text-left"
    },
    {
        label: "Date Created",
        class: "text-secondary text-left"
    }
];

const data = [
    {
        id: 1,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Active",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    },
    {
        id: 2,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Inactive",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    },
    {
        id: 3,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Draft",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    },
    {
        id: 4,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Active",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    },
    {
        id: 5,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Inactive",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    },
    {
        id: 6,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Draft",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    },
    {
        id: 7,
        name: 'Agreement File Name',
        agreement_type: 'Membership',
        schedule_type: 'Term',
        status: "Active",
        created_by: "Paul Siglioni",
        availability: "Instore",
        date_created: "5/5/2002, 12:24:44 PM"
    }
];

const statusChangedModal = ref(null);

onMounted(() => {
    statusChangedModal.value.open()
});
const cancel =()=>{
    statusChangedModal.value.close()
}
const confirm =()=>{
    statusChangedModal.value.close()
}

</script>

<style scoped>
.agreement-container {
    @apply py-4 pr-5 w-full h-fit;
    .page-title {
        @apply text-lg font-light pb-3 pl-5;
    }
    .page-content {
        @apply w-full max-w-[1120px] mx-auto;
    }
}
</style>