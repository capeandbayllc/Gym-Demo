<template>
   
      <div class="page-leads-center-container">
        <div class="page-content custom-page-content-header">
          <span>{{ title }}</span>
        </div>
        <div class="-md:px-4 page-content custom-page-content flex-col">
          <div class="flex flex-row justify-between space-x-4">
          </div>
          <div>
            <data-table v-if="title=='Overdue'"
                :columns="columns"
                :data="employees_display"
                :row-component="TaskTableRowOverdue"
                class="h-60 overflow-y-auto no-scrollbar"
            />
            <data-table v-if="title=='Today'"
                :columns="columns"
                :data="employees_display"
                :row-component="TaskTableRowToday"
                class="h-60 overflow-y-auto no-scrollbar"
            />
            <data-table v-if="title=='Completed'"
                :columns="columns"
                :data="employees_display"
                :row-component="TaskTableRowCompleted"
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
  
    }
  }
  </style>
  
  <script setup>
  import TaskTableRowToday from './task-table-row-today.vue';
  import TaskTableRowOverdue from './task-table-row-overdue.vue';
  import TaskTableRowCompleted from './task-table-row-completed.vue';
   import employee from "~/api/queries/employee";
  import {useQuery} from "@vue/apollo-composable";
  
  const isSearchEnable = ref(false)
  const addEmployeePopUp = ref(null)
 const addEmployeeScreenIndex = ref(0);
  // const leads = ref([]);

  const props=defineProps({
    title:String,
  })
  
  
  
  const {result} = useQuery(employee.query.browse);
  const employees = computed(() => result?.value?.employee?.data);
  
  
  const employees_display = computed(() => {
    return employees?.value?.map((item) => {
      return {
        ...item,
        status: 'available',
      };
    });
  });
  
  
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
  