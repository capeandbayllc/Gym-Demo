<template>
  <div id="Timesheet" class="border border-[#0075c9] p-3 rounded-[19px]">
    <div class="flex items-center justify-between">
      <FormIconSearchInput height="h-[45px]" />
      <div class="actions space-x-2 flex items-center relative">
        <button class="border-[#0075c9] border-2 rounded-[19px] h-[45px] px-6">
          Archive
        </button>
        <button class="bg-[#0075c9] rounded-[19px] h-[45px] px-6">
          Add Day
        </button>
        <button class="bg-[#0075c9] rounded-[19px] h-[45px] px-6">
          Export
        </button>
        <FormFilterButton>
          <template v-slot:filters>
            <div class="flex space-x-5">
              <SwitchGroup as="div" class="flex items-center">
                <Switch
                  v-model="filters.location"
                  class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2"
                >
                  <span
                    aria-hidden="true"
                    class="pointer-events-none absolute h-full w-full rounded-md bg-white"
                  />
                  <span
                    aria-hidden="true"
                    :class="[
                      'bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                    ]"
                  />
                  <span
                    aria-hidden="true"
                    :class="[
                      filters.location
                        ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]'
                        : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]',
                      'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                    ]"
                  />
                </Switch>
                <SwitchLabel as="span" class="ml-3 text-sm">
                  <span
                    class="font-medium"
                    :class="
                      filters.location ? 'text-[#0275c9]' : 'text-[#bababa]'
                    "
                    >Location</span
                  >
                </SwitchLabel>
              </SwitchGroup>

              <SwitchGroup as="div" class="flex items-center">
                <Switch
                  v-model="filters.type"
                  class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2"
                >
                  <span
                    aria-hidden="true"
                    class="pointer-events-none absolute h-full w-full rounded-md bg-white"
                  />
                  <span
                    aria-hidden="true"
                    :class="[
                      'bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                    ]"
                  />
                  <span
                    aria-hidden="true"
                    :class="[
                      filters.type
                        ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]'
                        : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]',
                      'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                    ]"
                  />
                </Switch>
                <SwitchLabel as="span" class="ml-3 text-sm">
                  <span
                    class="font-medium"
                    :class="filters.type ? 'text-[#0275c9]' : 'text-[#bababa]'"
                    >Type</span
                  >
                </SwitchLabel>
              </SwitchGroup>

              <SwitchGroup as="div" class="flex items-center">
                <Switch
                  v-model="filters.alert"
                  class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2"
                >
                  <span
                    aria-hidden="true"
                    class="pointer-events-none absolute h-full w-full rounded-md bg-white"
                  />
                  <span
                    aria-hidden="true"
                    :class="[
                      'bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                    ]"
                  />
                  <span
                    aria-hidden="true"
                    :class="[
                      filters.alert
                        ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]'
                        : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]',
                      'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                    ]"
                  />
                </Switch>
                <SwitchLabel as="span" class="ml-3 text-sm">
                  <span
                    class="font-medium"
                    :class="filters.alert ? 'text-[#0275c9]' : 'text-[#bababa]'"
                    >Alert</span
                  >
                </SwitchLabel>
              </SwitchGroup>

              <SwitchGroup as="div" class="flex items-center">
                <Switch
                  v-model="filters.segments"
                  class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-[#0275c9] focus:ring-offset-2"
                >
                  <span
                    aria-hidden="true"
                    class="pointer-events-none absolute h-full w-full rounded-md bg-white"
                  />
                  <span
                    aria-hidden="true"
                    :class="[
                      'bg-[#ECEBEF] pointer-events-none absolute mx-auto h-2 w-9 rounded-full transition-colors duration-200 ease-in-out',
                    ]"
                  />
                  <span
                    aria-hidden="true"
                    :class="[
                      filters.segments
                        ? 'translate-x-5 bg-[#0275c9] border-[#0275c9]'
                        : 'translate-x-0 bg-[#cbcbcb] border-[#cbcbcb]',
                      'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border   shadow ring-0 transition-transform duration-200 ease-in-out',
                    ]"
                  />
                </Switch>
                <SwitchLabel as="span" class="ml-3 text-sm">
                  <span
                    class="font-medium"
                    :class="
                      filters.segments ? 'text-[#0275c9]' : 'text-[#bababa]'
                    "
                    >Segments</span
                  >
                </SwitchLabel>
              </SwitchGroup>
            </div>
          </template>
        </FormFilterButton>
      </div>
    </div>
    <div class="flex items-center space-x-12 mt-4">
      <div>
        <label for="period">Period:</label>
        <div class="flex items-center space-x-5 mt-3">
          <FormTimeInput />
          <span>To</span>
          <FormTimeInput />
        </div>
      </div>
      <div>
        <label for="period">Employee:</label>
        <FormSelectInput class="mt-3 text-base-300" :options="employees" :value="selectedEmployee" @update="selectedEmployee = $event"/>
      </div>
    </div>
    <div class="">
      <employee-search-list :columns="columns" :items="employeeData" filter="id" />
      <hr class="border-3 border-white mt-4">
      <ul class="flex justify-between py-3 text-sm">
        <li>
          Total:
        </li>
        <li class="ml-20">
          5 Days
        </li>
        <li>
          40 Hours
        </li>
        <li></li>
        <li>
          <button class="rounded-[12px] border border-[#0075c9] py-1 px-4">
            Send to Payroll
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import { useQuery } from "@vue/apollo-composable";
import employee from "~/api/queries/employee";
import EmployeeSearchList from './components/employee-search-list.vue'
const filters = ref({
  location: false,
  type: false,
  alert: false,
  segments: false,
});
let selectedEmployee = ref('All')
let employees = ref([
  {
    id: 1, 
    value: 'All',
  }
])
const { result } = useQuery(employee.query.browse);
watch(() => {
  employees.value = [
    {
      id: 1, 
      value: 'All',
    },
    ...result?.value?.employee?.data.map((e,index) => {
      return {
        id: e.id,
        value: `${e.first_name} ${e.last_name}`
      };
    })
  ]; 

});
const columns = [
    {
        label: 'Location',
        class: 'text-secondary text-center ',
    },
    {
        label: 'Day',
        class: 'text-secondary text-center'
    },
    {
        label: 'Hours',
        class: 'text-secondary text-center'
    },
    {
        label: 'In',
        class: 'text-secondary text-center'
    },
    {
        label: 'Out',
        class: 'text-secondary text-center'
    },
];
const employeeData = [
    {
        id: 1,
        location: 'Club#1234',
        day: 'Monday 01.02.2023',
        hours: '8.00',
        in: '9:00 AM',
        out: '5:00 PM',
        img_url: 'checkin/avatar_random.jpg'
    },
    {
        id: 2,
        location: 'Club#1234',
        day: 'Tuesday 01.03.2023',
        hours: '8.00',
        in: '9:00 AM',
        out: '5:00 PM',
        img_url: 'chat-conversation/2.png'
    },
    {
        id: 3,
        location: 'Club#1234',
        day: 'Monday 01.02.2023',
        hours: '8.00',
        in: '9:00 AM',
        out: '5:00 PM',
        img_url: 'chat-conversation/3.png'
    },
    {
        id: 4,
        location: 'Club#1234',
        day: 'Tuesday 01.03.2023',
        hours: '8.00',
        in: '9:00 AM',
        out: '5:00 PM',
        img_url: 'chat-conversation/4.png'
    },
    {
        id: 5,
        location: 'Club#1234',
        day: 'Monday 01.02.2023',
        hours: '8.00',
        in: '9:00 AM',
        out: '5:00 PM',
        img_url: 'chat-conversation/5.png'
    },
    {
        id: 6,
        location: 'Club#1234',
        day: 'Monday 01.02.2023',
        hours: '8.00',
        in: '9:00 AM',
        out: '5:00 PM',
        img_url: 'chat-conversation/1.png'
    },
];
</script>
<style>
#Timesheet {
}
</style>
