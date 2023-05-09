<template>
  <div class="w-full max-w-7xl">
    <div class="text-center mb-4">
      <button @click="openAddMemberPopUp">
        <AddIcon
          class="aspect-square w-10 h-auto border inline-block border-secondary rounded-full font-semibold cursor-pointer"
        />
      </button>
      <p class="text-xs mt-1">Add an Employee</p>
    </div>
    <div class="py-4 pr-5 w-full h-fit;">
      <SearchTableToggler heading="Employees" />
      <div
        class="-md:px-4 page-content block border border-secondary bg-base-300 rounded-b p-7 flex-col"
      >
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
              :items="departments"
              value=""
              :label="'Department'"
              :secondary="true"
              class="w-40 filter-selected"
            >
            </select-box>
            <select-box
              :items="positions"
              value=""
              :label="'Position'"
              :secondary="true"
              class="w-40 filter-selected"
            >
            </select-box>
          </div>
        </div>
        <div>
          <data-table
            :columns="columns"
            :data="employees_display"
            :row-component="EmployeeTableRow"
            class="h-96 overflow-y-auto"
          />
        </div>
      </div>
    </div>
    <daisy-modal id="addMemberPopUp" ref="addEmployeePopUp" class="w-fit">
      <div class="bg-black rounded-md p-6 border border-secondary">
        <component :is="addEmployeeScreens[addEmployeeScreenIndex]"></component>
        <div class="flex justify-end mt-6">
          <button
            class="normal-case mx-2"
            ghost
            @click="prevScreen"
            v-if="addEmployeeScreenIndex > 0"
          >
            <NextIcon />
          </button>
          <Button size="sm" class="normal-case mx-2 ml-auto" ghost
            >Cancel</Button
          >
          <Button
            size="sm"
            class="normal-case mx-2 border border-secondary"
            outline
            @click="nextScreen"
            >Continue >
          </Button>
        </div>
      </div>
    </daisy-modal>
  </div>
</template>

<script setup>
import EmployeeTableRow from "./components/employee-table-row.vue";
import { AddIcon, NextIcon } from "@/components/icons";
import Welcome from "~/pages/check-in/profile-card/add-member/welcom.vue";
import JoinTour from "~/pages/check-in/profile-card/add-member/join-tour.vue";
import Infomrmation from "~/pages/check-in/profile-card/add-member/information.vue";
import PersonalInformation from "~/pages/check-in/user-info/personal-information/index.vue";
import Interests from "~/pages/check-in/profile-card/add-member/interests.vue";
import EmergencyInfo from "~/pages/check-in/profile-card/add-member/emergency-info.vue";
import BroughtToday from "~/pages/check-in/profile-card/add-member/brought-today.vue";
import employee from "~/api/queries/employee";
import SearchTableToggler from "../components/search-table-toggler.vue";
import { useQuery } from "@vue/apollo-composable";

const addEmployeePopUp = ref(null);
const addEmployeeScreens = ref([
  Welcome,
  JoinTour,
  Infomrmation,
  PersonalInformation,
  Interests,
  EmergencyInfo,
  BroughtToday,
]);
const addEmployeeScreenIndex = ref(0);
// const leads = ref([]);

//TODO: swap out with data from export
const positions = [
  "Front Desk",
  "Sales Manager",
  "Trainer",
  "General Manager",
  "Regional Manager",
].map((position, idx) => ({
  label: position,
  value: idx,
}));
const departments = ["Sales", "Personal Training", "Marketing"].map(
  (position, idx) => ({
    label: position,
    value: idx,
  })
);

const { result } = useQuery(employee.query.browse);
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
      status: "available",
    };
  });
});

const openAddMemberPopUp = () => {
  addEmployeePopUp.value.open();
};
const nextScreen = () => {
  addEmployeeScreenIndex.value =
    addEmployeeScreenIndex.value < addEmployeeScreens.value.length - 1
      ? addEmployeeScreenIndex.value + 1
      : addEmployeeScreenIndex.value;
};
const prevScreen = () => {
  addEmployeeScreenIndex.value =
    addEmployeeScreenIndex.value > 0
      ? addEmployeeScreenIndex.value - 1
      : addEmployeeScreenIndex.value;
};

const locationType = [
  {
    value: "1",
    label: "Club 1",
  },
  {
    value: "2",
    label: "Club 2",
  },
  {
    value: "3",
    label: "Club 3",
  },
  {
    value: "4",
    label: "Club 4",
  },
  {
    value: "5",
    label: "Club 5",
  },
];
const leadType = [
  {
    value: "1",
    label: "App Referal",
  },
  {
    value: "2",
    label: "Snapshot",
  },
  {
    value: "3",
    label: "Grand Opening",
  },
  {
    value: "4",
    label: "Free Trial",
  },
  {
    value: "5",
    label: "Streaming Preview",
  },
];
const columns = [
  {
    label: "Created",
    class: "text-secondary",
  },
  {
    label: "Last Name",
    class: "text-secondary",
  },
  {
    label: "First Name",
    class: "text-secondary",
  },
  {
    label: "Location",
    class: "text-secondary",
  },
  {
    label: "Department",
    class: "text-secondary",
  },
  {
    label: "Position",
    class: "text-secondary",
  },
  {
    label: "Status",
    class: "text-secondary",
  },
  {
    label: "Action",
    class: "",
  },
];
</script>
