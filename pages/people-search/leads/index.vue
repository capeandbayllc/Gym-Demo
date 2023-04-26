<template>
  <div class="w-full max-w-7xl">
    <div class="text-center mb-4">
      <button @click="openAddMemberPopUp">
        <AddIcon
          class="aspect-square w-10 h-auto border inline-block border-secondary rounded-full font-semibold cursor-pointer"
        />
      </button>

      <p class="text-xs mt-1">Add a Lead</p>
    </div>
    <div class="py-4 pr-5 w-full h-fit">
      <SearchTableToggler heading="Leads" />

      <div
        class="block border border-secondary bg-base-300 rounded-b p-7 flex-col"
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
              :items="leadType"
              value=""
              :label="'Lead Type'"
              :secondary="true"
              class="w-40 filter-selected"
            >
            </select-box>
          </div>
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
      <div class="bg-base-300 rounded-md p-6 border border-secondary">
        <component :is="addMemberScreens[addMemberScreenIndex]"></component>
        <div class="flex justify-end mt-6">
          <button
            class="normal-case mx-2"
            ghost
            @click="prevScreen"
            v-if="addMemberScreenIndex > 0"
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
            >Continue ></Button
          >
        </div>
      </div>
    </daisy-modal>
  </div>
</template>

<script setup>
import LeadTableRow from "./components/lead-table-row.vue";
import { AddIcon, NextIcon } from "@/components/icons";
import Welcome from "~/pages/check-in/profile-card/add-member/welcom.vue";
import JoinTour from "~/pages/check-in/profile-card/add-member/join-tour.vue";
import Infomrmation from "~/pages/check-in/profile-card/add-member/information.vue";
import PersonalInformation from "~/pages/check-in/user-info/personal-information/index.vue";
import Interests from "~/pages/check-in/profile-card/add-member/interests.vue";
import EmergencyInfo from "~/pages/check-in/profile-card/add-member/emergency-info.vue";
import BroughtToday from "~/pages/check-in/profile-card/add-member/brought-today.vue";
import { request } from "~/api/utils/request";
import lead from "~/api/queries/lead";
import SearchTableToggler from "../components/search-table-toggler.vue";

const addMemberPopUp = ref(null);
const addMemberScreens = ref([
  Welcome,
  JoinTour,
  Infomrmation,
  PersonalInformation,
  Interests,
  EmergencyInfo,
  BroughtToday,
]);
const addMemberScreenIndex = ref(0);
const leads = ref([]);

const leadTypes = [
  "app_referal",
  "grand_opening",
  "snapshot",
  "free_trial",
  "streaming_preview",
];
const opportunity = ["error", "warning", "accent"];

request(lead.query.browse).then(({ data }) => {
  leads.value = data.data.leads.data;
});
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
      status: "available",
    };
  });
});

const openAddMemberPopUp = () => {
  addMemberPopUp.value.open();
};
const nextScreen = () => {
  addMemberScreenIndex.value =
    addMemberScreenIndex.value < addMemberScreens.value.length - 1
      ? addMemberScreenIndex.value + 1
      : addMemberScreenIndex.value;
  console.log("addMemberScreenIndex", addMemberScreenIndex.value);
};
const prevScreen = () => {
  addMemberScreenIndex.value =
    addMemberScreenIndex.value > 0
      ? addMemberScreenIndex.value - 1
      : addMemberScreenIndex.value;
};

const locationType = [
  {
    value: "1",
    label: "Location 1",
  },
  {
    value: "2",
    label: "Location 2",
  },
  {
    value: "3",
    label: "Location 3",
  },
  {
    value: "4",
    label: "Location 4",
  },
  {
    value: "5",
    label: "Location 5",
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
    label: "Opportunity",
    class: "text-secondary",
  },
  {
    label: "First Name",
    class: "text-secondary",
  },
  {
    label: "Last Name",
    class: "text-secondary",
  },
  {
    label: "Location",
    class: "text-secondary",
  },
  {
    label: "Type",
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
