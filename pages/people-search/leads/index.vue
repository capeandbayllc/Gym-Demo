<template>
  <div class="w-full max-w-7xl">
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
          :profile-info="profileInfo"
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
    <SearchTableToggler class="page-content" heading="Leads" />

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
      <component
        :is="addMemberScreens[addMemberScreenIndex]"
        :profile-info="profileInfo"
        @change="newMemberData = $event"
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
import { AddIcon, NextIcon } from "@/components/icons";
import Welcome from "~/pages/check-in/profile-card/add-member/welcom.vue";
import JoinTour from "~/pages/check-in/profile-card/add-member/join-tour.vue";
import Infomrmation from "~/pages/check-in/profile-card/add-member/information.vue";
import PersonalInformation from "~/pages/check-in/user-info/personal-information/index.vue";
import Interests from "~/pages/check-in/profile-card/add-member/interests.vue";
import EmergencyInfo from "~/pages/check-in/profile-card/add-member/emergency-info.vue";
import BroughtToday from "~/pages/check-in/profile-card/add-member/brought-today.vue";
import { useQuery, useMutation } from "@vue/apollo-composable";
import lead from "~/api/queries/lead";
import leadStatusQuery from "~/api/queries/leadStatus";
import userMutation from "~/api/mutations/user";
import location from "~~/api/queries/location";
import { v4 as uuidv4 } from "uuid";
import SearchTableToggler from "../components/search-table-toggler.vue";
const route = useRoute();
const profileId = route.query.id;
const isLeadView = route.query.type === "lead";
const user = useState("auth");

const newMemberData = ref({
  first_name: "",
  middle_name: "",
  last_name: "",
  date_of_birth: null,
  gender: "",
  drivers_license_number: null,
  occupation: null,
  employer: null,
  barcode: null,
  email: "",
  home_location_id: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  phone: "",
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
      id: uuidv4(),
      first_name: newMemberData.value.firstName,
      last_name: newMemberData.value.lastName,
      date_of_birth: newMemberData.value.birthDate,
      gender: newMemberData.value.gender,
      email: newMemberData.value.email,
      address1: newMemberData.value.homeAddress1,
      address2: newMemberData.value.homeAddress2,
      city: newMemberData.value.city,
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

onMounted(() => {
  const locationData = ref(null);
  const { result } = useQuery(location.query.browse, { first: 1 });
  watch(result, () => {
    newMemberData.value.home_location_id = result.value.locations.data[0].id;
    newMemberDataReset.value = { ...newMemberData.value };
  });
  getLeadsQuery();
});

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
// TODO implement filters

const getLeadsQuery = () => {
  const { result } = useQuery(lead.query.browse, { first: 5 });
  watch(result, () => {
    leads.value = result.value.leads.data;
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
      opportunity: getRandomOpportunity(),
      status: "available",
      type: getRandomType(),
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

const profileInfo = ref(null);
getMember();
function getMember() {
  if (profileId) {
    const { result: memberResult } = useQuery(
      (isLeadView ? lead : member).query.get,
      { id: profileId }
    );

    watch(memberResult, () => {
      profileInfo.value = result.value[isLeadView ? "lead" : "member"];
    });
  } else {
    profileInfo.value = user.value;
  }
}

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
const leadStatus = [
  {
    value: "New",
    label: "New",
  },
  {
    value: "Contacted",
    label: "Contacted",
  },
  {
    value: "Converted",
    label: "Converted",
  },
  {
    value: "Lost",
    label: "Lost",
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
