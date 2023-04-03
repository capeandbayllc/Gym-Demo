<template>
   
      <div class="page-leads-center-container">
        <div class="page-content custom-page-content-header">
          <span>{{ title }}</span>
        </div>
        <div class="-md:px-4 page-content custom-page-content flex-col">
          <div class="flex flex-row justify-between space-x-4 mb-4">
          </div>
          <div>
            <data-table v-if="title=='Overdue'"
                :columns="columns"
                :data="employees_display"
                :row-component="EmployeeTableRowOverdue"
                class="h-60 overflow-y-auto no-scrollbar"
            />
            <data-table v-if="title=='Today'"
                :columns="columns"
                :data="employees_display"
                :row-component="EmployeeTableRowToday"
                class="h-60 overflow-y-auto no-scrollbar"
            />
            <data-table v-if="title=='Completed'"
                :columns="columns"
                :data="employees_display"
                :row-component="EmployeeTableRowCompleted"
                class="h-60 overflow-y-auto no-scrollbar"
            />
          </div>
        </div>
      </div>
      
  </template>
  <style scoped>
  .page-leads-center-container {
    @apply p-5 w-full h-fit;
  
    .custom-page-content {
      @apply block border border-secondary bg-black rounded-b-xl p-7;
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
  
  <script setup>
  import EmployeeTableRowToday from './employee-table-row-today.vue';
  import EmployeeTableRowOverdue from './employee-table-row-overdue.vue';
  import EmployeeTableRowCompleted from './employee-table-row-completed.vue';
  import {AddIcon, NextIcon, SearchIcon} from '@/components/icons'
  import Welcome from '~/pages/check-in/profile-card/add-member/welcom.vue'
  import JoinTour from '~/pages/check-in/profile-card/add-member/join-tour.vue'
  import Infomrmation from '~/pages/check-in/profile-card/add-member/information.vue'
  import PersonalInformation from '~/pages/check-in/user-info/personal-information/index.vue'
  import Interests from '~/pages/check-in/profile-card/add-member/interests.vue'
  import EmergencyInfo from '~/pages/check-in/profile-card/add-member/emergency-info.vue'
  import BroughtToday from '~/pages/check-in/profile-card/add-member/brought-today.vue';
  import employee from "~/api/queries/employee";
  import {useQuery} from "@vue/apollo-composable";
  
  const isSearchEnable = ref(false)
  const addEmployeePopUp = ref(null)
 const addEmployeeScreenIndex = ref(0);
  // const leads = ref([]);

  const props=defineProps({
    title:String,
  })
  
  //TODO: swap out with data from export
  const positions = ["Front Desk", "Sales Manager", "Trainer", "General Manager", "Regional Manager"].map((position, idx) => ({
    label: position,
    value: idx
  }));
  const departments = ["Sales", "Personal Training", "Marketing"].map((position, idx) => ({
    label: position,
    value: idx
  }));
  
  const {result} = useQuery(employee.query.browse);
  const employees = computed(() => result?.value?.employee?.data);
  const getRandomPosition = () => {
    return positions[Math.floor(Math.random() * positions.length)].label;
  };
  const getRandomDepartment = () => {
    return departments[Math.floor(Math.random() * departments.length)].label;
  };
  
  const employees_display = computed(() => {
    return employees?.value?.map((item) => {
      return {
        ...item,
        position: getRandomPosition(),
        department: getRandomDepartment(),
        status: 'available',
      };
    });
  });
  
  const openAddMemberPopUp = () => {
    addEmployeePopUp.value.open()
  }
  const nextScreen = () => {
    addEmployeeScreenIndex.value = addEmployeeScreenIndex.value < (addEmployeeScreens.value.length - 1) ? addEmployeeScreenIndex.value + 1 : addEmployeeScreenIndex.value;
  }
  const prevScreen = () => {
    addEmployeeScreenIndex.value = addEmployeeScreenIndex.value > 0 ? addEmployeeScreenIndex.value - 1 : addEmployeeScreenIndex.value
  }
  
  const locationType = [
    {
      value: '1',
      label: 'Club 1',
    },
    {
      value: '2',
      label: 'Club 2',
    },
    {
      value: '3',
      label: 'Club 3',
    },
    {
      value: '4',
      label: 'Club 4',
    },
    {
      value: '5',
      label: 'Club 5',
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
      label: 'Name',
      class: 'text-white',
    },
    {
      label: 'Task Type',
      class: 'text-white',
    },
    {
      label: 'Club Location',
      class: 'text-white',
    },
    {
      label: 'Start Date',
      class: 'text-white',
    },
    {
      label: 'Status',
      class: 'text-white',
    }
   
  ];
  
  
  </script>
  