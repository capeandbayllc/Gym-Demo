<template>
  <context-menu v-show="!isPageView" ref="userMenu" class="user-menu">
    <div class="cursor-pointer mx-2" @click.prevent="openAddMemberPopUp">
      <AddLead class="m-auto h-8" />
      <div class="m-auto whitespace-nowrap font-semibold text-xs mt-1">
        Add Lead
      </div>
    </div>
  </context-menu>
  <daisy-modal
    id="addMemberPopUp"
    ref="addMemberPopUp"
    class="w-fit"
    @close="addMemberScreenIndex = 0"
    :closable="mode !== 'page'"
  >
    <div
      class="bg-black rounded-md p-6 border border-secondary h-full overflow-auto"
    >
      <component
        :is="addMemberScreens[addMemberScreenIndex]"
        :profile-info="profileInfo"
        :value="data"
        @change="data = $event"
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
        <Button
          v-show="!isPageView"
          size="sm"
          class="normal-case mx-2 ml-auto"
          ghost
          @click="closeAddMemberPopUp"
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
</template>
<style scoped>
.user-menu {
  @apply bg-secondary p-4 flex flex-col space-y-3 top-12 ml-6 rounded;
  left: -4rem;
}
</style>
<script setup>
import Welcome from "../../../pages/check-in/profile-card/add-member/welcom.vue";
import JoinTour from "../../../pages/check-in/profile-card/add-member/join-tour.vue";
import Infomrmation from "../../../pages/check-in/profile-card/add-member/information.vue";
import PersonalInformation from "../../../pages/check-in/user-info/personal-information/index.vue";
import Interests from "../../../pages/check-in/profile-card/add-member/interests.vue";
import EmergencyInfo from "../../../pages/check-in/profile-card/add-member/emergency-info.vue";
import BroughtToday from "../../../pages/check-in/profile-card/add-member/brought-today.vue";
import MembershipType from "../../../pages/check-in/new-agreement/membership-type.vue";
import isThisYou from "~~/pages/check-in/profile-card/add-member/is-this-you.vue";
import { NextIcon, AddLead } from "@/components/icons";
import member from "@/api/queries/member";
import lead from "@/api/queries/lead";
import { useMutation, useQuery } from "@vue/apollo-composable";
import userMutation from "~/api/mutations/user";
import { v4 as uuidv4 } from "uuid";

const route = useRoute();
const profileId = route.query.id;
const isLeadView = route.query.type === "lead";
const user = useState("auth");

const data = ref({
  firstName: "",
  lastName: "",
  birthDate: "",
  male: "",
  female: "",
  other: "",
  homeAddress1: "",
  homeAddress2: "",
  city: "",
  state: "",
  zipCode: "",
  emergencyContactName: "",
  emergencyContactPhone: "",
  mobilePhone: "",
  email: "",
  sendMePromotionalTexts: "",
  sendMePromotionalEmails: "",
});

const router = useRouter();
const props = defineProps({
  mode: {
    type: String,
    require: true,
    default: "modal",
    validator(value) {
      return ["modal", "page"].includes(value);
    },
  },
});

const userMenu = ref(null);
const open = () => {
  userMenu.value.open();
};
const close = () => {
  userMenu.value.close();
};

const addMemberPopUp = ref(null);
const addMemberScreens = ref([
  Welcome,
  JoinTour,
  Infomrmation,
  isThisYou,
  PersonalInformation,
  Interests,
  EmergencyInfo,
  BroughtToday,
  MembershipType,
]);
const addMemberScreenIndex = ref(0);
const isPageView = props.mode === "page";

onMounted(() => {
  if (props.mode === "page") {
    openAddMemberPopUp();
  }
});

const openAddMemberPopUp = () => {
  addMemberPopUp.value.open();
};
const closeAddMemberPopUp = () => {
  addMemberPopUp.value.close();
};
const nextScreen = () => {
  addMemberScreenIndex.value =
    addMemberScreenIndex.value < addMemberScreens.value.length - 1
      ? addMemberScreenIndex.value + 1
      : (() => {
          addLeadAndGoToNewAgreement();
          return addMemberScreenIndex.value;
        })();
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
    const { result } = useQuery((isLeadView ? lead : member).query.get, {
      id: profileId,
    });

    watch(result, () => {
      profileInfo.value = result.value[isLeadView ? "lead" : "member"];
    });
  } else {
    profileInfo.value = user.value;
  }
}
const { mutate } = useMutation(userMutation.mutation.createUser);

const addLeadAndGoToNewAgreement = async () => {
  const variables = {
    id: uuidv4(),
    first_name: data.value.firstName,
    last_name: data.value.lastName,
    date_of_birth: data.value.birthDate,
    gender: data.value.gender,
    email: data.value.email,
    address1: data.value.homeAddress1,
    address2: data.value.homeAddress2,
    city: data.value.city,
    state: data.value.state,
    phone: data.value.phone,
  };

  const response = await mutate({ input: variables });
  watchEffect(() => {
    if (!response?.data?.createUser?.id) return;
    router.push({
      path: "/check-in",
      query: {
        id: response.data.createUser.id,
        openDetail: "newAgreement",
        type: "user",
      },
    });
    closeAddMemberPopUp();
  });
};

defineExpose({ open, close });
</script>
