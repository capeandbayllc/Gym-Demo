<template>
  <div class="w-full">
    <div class="text-center mb-4">
      <AddIcon
        class="h-[40px] w-[40px] border inline-block border-secondary rounded-full font-semibold cursor-pointer"
        @click="openAddMemberPopUp"
      />
      <p class="text-xs mt-1">Add a Lead</p>
    </div>
    <daisy-modal id="addMemberPopUp" ref="addMemberPopUp" class="w-fit">
      <div class="bg-black rounded-md p-6 border border-secondary">
        <component
          :is="addMemberScreens[addMemberScreenIndex]"
          :newMemberData="newMemberData"
          @changeNewMemberData="newMemberData = $event"
        ></component>
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
  <div class="py-4 pr-5 w-full h-fit">
    <div
      class="bg-secondary flex justify-between rounded-t-lg pl-6 p-3 font-semibold mx-auto w-full max-w-7xl page-content items-center"
    >
      <span>Leads</span>
      <div class="flex items-center h-8">
        <button class="mx-4" @click="isSearchEnable = !isSearchEnable">
          <SearchIcon />
        </button>
        <input
          v-if="isSearchEnable"
          type="text"
          placeholder="Search"
          class="input input-sm max-w-xs bg-secondary border border-base-content rounded"
        />
      </div>
    </div>
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
            :items="leadTypes"
            value=""
            :label="'Lead Type'"
            :secondary="true"
            class="w-40 filter-selected"
          >
          </select-box>
          <select-box
            :items="leadStatuses"
            value=""
            @onChange="filters.status = $event"
            :label="'Lead Status'"
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
        <Button size="sm" class="normal-case mx-2 ml-auto" ghost>Cancel</Button>
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
</template>

<script setup>
import LeadTableRow from "./components/lead-table-row.vue";
import { SearchIcon, AddIcon, NextIcon } from "@/components/icons";
import Welcome from "~/pages/check-in/profile-card/add-member/welcom.vue";
import JoinTour from "~/pages/check-in/profile-card/add-member/join-tour.vue";
import Infomrmation from "~/pages/check-in/profile-card/add-member/information.vue";
import PersonalInformation from "~/pages/check-in/user-info/personal-information/index.vue";
import Interests from "~/pages/check-in/profile-card/add-member/interests.vue";
import EmergencyInfo from "~/pages/check-in/profile-card/add-member/emergency-info.vue";
import BroughtToday from "~/pages/check-in/profile-card/add-member/brought-today.vue";
import { useQuery } from "@vue/apollo-composable";
import lead from "~/api/queries/lead";
import leadStatusQuery from "~/api/queries/leadStatus";
import userMutation from "~/api/mutations/user";
import { useMutation } from "@vue/apollo-composable";
import location from "~~/api/queries/location";
import gql from "graphql-tag";

const newMemberData = ref({
  id: "19bb102e-dc34-4f5a-8edd-07ed997e69fa",
  first_name: "Pete",
  middle_name: "",
  last_name: "Mahvash",
  date_of_birth: null,
  gender: "other",
  drivers_license_number: null,
  occupation: null,
  employer: null,
  barcode: null,
  email: "Cedrick.Schmeler@yahoo.com",
  home_location_id: "afea5d32-ec62-480d-af29-d67fc8c9c7a3",
  address1: "4782 Lehner Avenue Suite 976",
  address2: "Apt. 344",
  city: "Port Wendy",
  state: "MT",
  phone: "9846188996",
});

const newMemberDataReset = ref({});
const leadStatuses = ref([]);

const { result: resultLocation } = useQuery(location.query.browse, {
  first: 1,
});
watchEffect(() => {
  if (!resultLocation.value?.locations?.data[0]) return;
  newMemberData.value.home_location_id =
    resultLocation.value?.locations?.data[0].id;
  newMemberDataReset.value.home_location_id = { ...newMemberData.value };
});

onMounted(() => {
  newMemberDataReset.value = { ...newMemberData.value };
});

const saveLead = () => {
  addMemberScreenIndex.value = 0;
  const { mutate: createMember } = useMutation(
    userMutation.mutation.createUser
  );
  createMember({
    input: {
      first_name: newMemberData.value.first_name,
      middle_name: newMemberData.value.middle_name,
      last_name: newMemberData.value.last_name,
      date_of_birth: newMemberData.value.date_of_birth,
      gender: newMemberData.value.gender,
      drivers_license_number: newMemberData.value.drivers_license_number,
      occupation: newMemberData.value.occupation,
      employer: newMemberData.value.employer,
      barcode: newMemberData.value.barcode,
      email: newMemberData.value.email,
      home_location_id: newMemberData.value.home_location_id,
      address1: newMemberData.value.address1,
      address2: newMemberData.value.address2,
      city: newMemberData.value.city,
      state: newMemberData.value.state,
      phone: newMemberData.value.phone,
      state: newMemberData.value.state,
      phone: newMemberData.value.phone,
    },
  }).then((response) => {
    console.log(response);
    leads.value = [];
    getLeadsQuery();
  });

  newMemberData.value = { ...newMemberDataReset.value };
};

let { result } = useQuery(leadStatusQuery.query.browse);
watchEffect(() => {
  if (!result.value?.lead_statuses) return;

  let statuses = result.value?.lead_statuses.slice();
  statuses.sort((a, b) => a.order - b.order);
  const mappedStatuses = statuses.map((status) => ({
    value: status.id,
    label: status.status,
  }));
  leadStatuses.value = mappedStatuses;
});

const isSearchEnable = ref(false);
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
const filters = ref({ status: "" });
const opportunity = ["error", "warning", "accent"];

const getLeadsQuery = () => {
  let { result } = useQuery(lead.query.browse, { filter: filters.value });
  watchEffect(() => {
    if (!result.value?.leads.data) return;
    leads.value = result.value?.leads.data;
  });
};
getLeadsQuery();

watch(filters.value, () => {
  leads.value = [];
  getLeadsQuery();
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
    };
  });
});

const openAddMemberPopUp = () => {
  addMemberPopUp.value.open();
};
const nextScreen = () => {
  if (!(addMemberScreenIndex.value < addMemberScreens.value.length - 1)) {
    saveLead();
    addMemberPopUp.value.close();
  }
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
const leadTypes = [
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
// const leadStatus = [
//   {
//     value: "New",
//     label: "New",
//   },
//   {
//     value: "Not Interested",
//     label: "Not Interested",
//   },
//   {
//     value: "No Show",
//     label: "No Show",
//   },
//   {
//     value: "Missed",
//     label: "Missed",
//   },
// ];
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
