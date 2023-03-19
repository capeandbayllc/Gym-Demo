<template>
    <div class="w-full">
        <div class="text-center mb-4">
        <AddIcon class="h-[40px] w-[40px] border inline-block border-secondary rounded-full font-semibold cursor-pointer" @click="openAddMemberPopUp"/>
        <p class="text-xs mt-1">
            Add a Lead
        </p>
        </div>
        <div class="page-leads-center-container">
            <div class="page-content custom-page-content-header">
                <span>Leads</span>
                <search-icon v-if="!isSearchEnable" class="search-icon" @click="isSearchEnable = !isSearchEnable" />
                <input v-else type="text" placeholder="Search" class="input input-sm max-w-xs search-input" />
            </div>
            <div class="-md:px-4 page-content custom-page-content flex-col">
                <div class="flex flex-row justify-between space-x-4 mb-4">
                    <div class="flex gap-4">
                        <select-box
                            :items="locationType"
                            value=""
                            :label="'Locations'"
                            :secondary="true"
                            class="w-40 filter-selected"
                        >
                        </select-box>
                        <select-box
                            :items="leadType"
                            value=""
                            :label="'Lead Type'"
                            :secondary="true"
                            class="w-40 filter-selected"
                        >
                        </select-box>
                    </div>
                    <!-- <div class="flex gap-4">
                        <search-input
                            neutral
                            size="md"
                            border="neutral"
                            class="w-52"
                        />
                    </div> -->
                </div>
                <div>
                    <data-table
                        :columns="columns"
                        :data="leads_display"
                        :row-component="LeadTableRow"
                        class="h-96 overflow-y-auto"
                    />
                </div>
            </div>
        </div>
        <daisy-modal id="addMemberPopUp" ref="addMemberPopUp" class="w-fit">
        <div class="bg-black rounded-md p-6 border border-secondary">
            <component :is="addMemberScreens[addMemberScreenIndex]"></component>
            <div class="flex justify-end mt-6">
            <button class="normal-case mx-2" ghost @click="prevScreen" v-if="addMemberScreenIndex > 0"><NextIcon/></button>
            <Button size="sm" class="normal-case mx-2 ml-auto" ghost>Cancel</Button>
            <Button size="sm" class="normal-case mx-2 border border-secondary" outline @click="nextScreen">Continue ></Button>
            </div>
        </div>
        </daisy-modal>
    </div>
</template>
<style scoped>
.page-leads-center-container {
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
import LeadTableRow from './components/lead-table-row.vue';
import { SearchIcon, AddIcon, NextIcon } from '@/components/icons'
import Welcome from '~/pages/check-in/profile-card/add-member/welcom.vue'
import JoinTour from '~/pages/check-in/profile-card/add-member/join-tour.vue'
import Infomrmation from '~/pages/check-in/profile-card/add-member/information.vue'
import PersonalInformation from '~/pages/check-in/user-info/personal-information/index.vue'
import Interests from '~/pages/check-in/profile-card/add-member/interests.vue'
import EmergencyInfo from '~/pages/check-in/profile-card/add-member/emergency-info.vue'
import BroughtToday from '~/pages/check-in/profile-card/add-member/brought-today.vue';
import {request} from "~/api/utils/request";
import lead from "~/api/queries/lead";

const isSearchEnable = ref(false)
const addMemberPopUp = ref(null)
const addMemberScreens = ref([Welcome,JoinTour,Infomrmation,PersonalInformation,Interests,EmergencyInfo,BroughtToday]);
const addMemberScreenIndex = ref(0);
const leads = ref([]);

const leadTypes = ["app_referal", "grand_opening", "snapshot", "free_trial", "streaming_preview"];
const opportunity = ["error", "warning", "accent"];

request(lead.query.browse).then(({data}) => {
  leads.value = data.data.leads.data;
})
const getRandomType = () => {
  return leadTypes[Math.floor(Math.random() * leadTypes.length)];
};
const getRandomOpportunity = () => {
  return opportunity[Math.floor(Math.random() * opportunity.length)];
};

const leads_display = computed(() => {
  return leads.value.map((item) => {
    return {
      ...item,
      type: getRandomType(),
      opportunity: getRandomOpportunity(),
      status: 'available',
      updated_at: new Date(item.updated_at).toLocaleDateString().replaceAll('/', '.'),
      created_at: new Date(item.created_at).toLocaleDateString().replaceAll('/', '.'),

    };
  });
});

const openAddMemberPopUp =()=>{
  addMemberPopUp.value.open()
}
const nextScreen = ()=>{
    addMemberScreenIndex.value = addMemberScreenIndex.value < (addMemberScreens.value.length - 1) ? addMemberScreenIndex.value + 1 : addMemberScreenIndex.value;
    console.log("addMemberScreenIndex",addMemberScreenIndex.value)
}
const prevScreen = ()=>{
    addMemberScreenIndex.value = addMemberScreenIndex.value > 0 ? addMemberScreenIndex.value - 1 : addMemberScreenIndex.value
}

const locationType = [
    {
        value: '1',
        label: 'Location 1',
    },
    {
        value: '2',
        label: 'Location 2',
    },
    {
        value: '3',
        label: 'Location 3',
    },
    {
        value: '4',
        label: 'Location 4',
    },
    {
        value: '5',
        label: 'Location 5',
    },
];
const leadType = [
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
        label: 'Opportunity',
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
        label: 'Location',
        class: 'text-secondary',
    },
    {
        label: 'Type',
        class: 'text-secondary',
    },
    {
        label: 'Status',
        class: 'text-secondary',
    },
    {
        label: 'Action',
        class: '',
    },
];


</script>
