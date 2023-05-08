<template>
  <user-info-card>
    <Button
      class="text-base-content capitalize"
      :class="
        isActiveMember
          ? 'bg-neutral-content hover:bg-neutral-content/80'
          : 'bg-lime-500 hover:bg-lime-600'
      "
      @click="isActiveMember = !isActiveMember"
      size="sm"
    >
      {{ isActiveMember ? "Inactive" : "Active" }}
    </Button>
    <h2 class="!col-span-1">Member Information</h2>
    <Button
      secondary
      size="sm"
      class="place-self-end"
      @click="showAgreementPopUp"
      >Create New Agreement</Button
    >

    <div
      v-for="item in memberInformation"
      :key="item.key"
      class="mem-info-item"
    >
      <div class="mb-2">{{ item.label }}</div>
      <input
        :class="item.class"
        class="w-full p-1 rounded-sm"
        v-model="memberInfo[item.key]"
      />
    </div>

    <daisy-modal
      id="agreementPopUp"
      ref="agreementPopUp"
      class="w-fit"
      @close="closeModel"
    >
      <div class="bg-base-300 rounded-md p-6 border border-secondary">
        <component
          :is="agreementScreens[agreementScreenIndex]"
          :profile-info="profileInfo"
        >
        </component>
        <div class="flex justify-end mt-6">
          <Button
            size="sm"
            class="normal-case mx-2"
            ghost
            @click="prevScreen"
            v-if="agreementScreenIndex > 0"
            >Back</Button
          >
          <Button size="sm" class="normal-case mx-2 ml-auto" ghost
            >Cancel</Button
          >
          <Button
            size="sm"
            class="normal-case mx-2"
            secondary
            v-if="agreementScreenIndex == 0"
            >Save as a Draft</Button
          >
          <Button size="sm" class="normal-case mx-2">Add to Segment</Button>
          <!-- <Button size="sm" class="normal-case mx-2">Complet and Send Document</Button> -->
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
  </user-info-card>
</template>
<script setup>
import { ref } from "vue";
import Agreement from "./agreement";
import SelectGym from "./select-gym";
import PersonalInformation from "./personal-information";
import PersonalInformationNext from "./personal-information/personal-info-next.vue";
import FinancialCollect from "./financial-collect/due-today.vue";
import TermsAndCondition from "~/pages/agreement/components/agreement-type.vue";
import PayNow from "./pay-now.vue";
import UserInfoCard from "./user-info-card.vue";
import { request } from "~/api/utils/request";
import member from "@/api/queries/member";

const route = useRoute();
const profileId = route.query.id;
const isLeadView = route.query.type === "lead";
const user = useState("auth");

const isActiveMember = ref(false);

const memberInfo = ref({});

const memberInformation = [
  {
    key: "first-name",
    label: "First Name",
    class: "secondary-input",
  },
  {
    key: "middle-name",
    label: "Middle Name",
    class: "secondary-input",
  },
  {
    key: "last-name",
    label: "Last Name",
    class: "secondary-input",
  },
  {
    key: "birthday",
    label: "Date of Birth",
    class: "neutral-input",
  },
  {
    key: "gender",
    label: "Gender",
    class: "neutral-input",
  },
  {
    key: "occupation",
    label: "Occupation",
    class: "neutral-input",
  },
  {
    key: "employer",
    label: "Employer",
    class: "neutral-input",
  },
  {
    key: "barcode",
    label: "Barcode",
    class: "neutral-input",
  },
  {
    key: "previous-agreement-number",
    label: "Previous Agreement Number",
    class: "neutral-input",
  },
  {
    key: "wellness-program-id",
    label: "Wellness Program ID",
    class: "neutral-input",
  },
  {
    key: "membership-type",
    label: "Membership Type",
    class: "neutral-input",
  },
  {
    key: "group",
    label: "Group",
    class: "neutral-input",
  },
  {
    key: "member-misc-1",
    label: "Member Misc. 1",
    class: "neutral-input",
  },
  {
    key: "member-misc-2",
    label: "Member Misc. 2",
    class: "neutral-input",
  },
  {
    key: "member-misc-3",
    label: "Member Misc. 3",
    class: "neutral-input",
  },
];

const agreementPopUp = ref(null);
const agreementScreens = ref([
  Agreement,
  SelectGym,
  PersonalInformation,
  PersonalInformationNext,
  FinancialCollect,
  TermsAndCondition,
  PayNow,
]);
const agreementScreenIndex = ref(0);

const closeModel = () => {
  setTimeout(() => {
    agreementScreenIndex.value = 0;
  }, 500);
};

const showAgreementPopUp = () => {
  agreementPopUp.value.open();
};
const nextScreen = () => {
  agreementScreenIndex.value =
    agreementScreenIndex.value < agreementScreens.value.length - 1
      ? agreementScreenIndex.value + 1
      : agreementScreenIndex.value;
  console.log("agreementScreenIndex", agreementScreenIndex.value);
};
const prevScreen = () => {
  agreementScreenIndex.value =
    agreementScreenIndex.value > 0
      ? agreementScreenIndex.value - 1
      : agreementScreenIndex.value;
};

const profileInfo = ref(null);
getMember();
function getMember() {
  if (profileId) {
    request((isLeadView ? lead : member).query.get, { id: profileId }).then(
      ({ data }) => {
        profileInfo.value = data.data[isLeadView ? "lead" : "member"];
      }
    );
  } else {
    profileInfo.value = user.value;
  }
}
</script>
