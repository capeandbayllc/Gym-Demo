<template>
  <simple-card title="Agreements" class="agreements-card" closable>
    <div class="p-8 card-gradient-bg">
      <ActiveAgreement v-if="!showNewAgreement" @new-agreement="newAgreement" />
      <component
        v-else
        :is="agreementScreens[agreementScreenIndex]"
        :enableLocationSelection="true"
        :profile-info="profileInfo"
        :modalClass="
          'bg-base-300 w-fit mx-auto p-[17px] border border-secondary new-agreements-wrapper ' +
          (agreementScreenIndex == 0 ? 'rounded-[8px]' : 'rounded-[19px]')
        "
      >
        <div class="flex justify-end mt-6">
          <button
            class="button-simple mr-auto"
            @click="prevScreen"
            v-if="agreementScreenIndex > 0"
          >
            Back
          </button>
          <button class="button-simple" @click="showNewAgreement = false">
            Cancel
          </button>
          <button
            class="normal-case mx-2 border-2 rounded-[10px] border-secondary px-[10px] py-[2px]"
            outline
            @click="nextScreen"
          >
            Continue
          </button>
        </div>
      </component>
      <div
        class=""
        :class="agreementScreenIndex == 0 ? 'rounded-[8px]' : 'rounded-[19px]'"
      ></div>
    </div>
  </simple-card>
</template>

<script setup>
import ActiveAgreement from "./active-agreement.vue";
import SelectGym from "../user-info/select-gym";
import PersonalInformation from "../user-info/personal-information";
import PersonalInformationNext from "../user-info/personal-information/personal-info-next.vue";
import DueTodayPayment from "../user-info/financial-collect/due-today.vue";
import MostlyDuesPayment from "../user-info/financial-collect/mostly-dues.vue";
import SecondaryPayments from "../user-info/financial-collect/secondary-payments.vue";
import AgreementModal from "~/pages/agreement/components/agreement-modal.vue";
import TermsAndCondition from "~/pages/agreement/components/agreement-type.vue";
import PayNow from "../user-info/pay-now.vue";
import { useQuery } from "@vue/apollo-composable";
import member from "@/api/queries/member";
import lead from "@/api/queries/lead";

const route = useRoute();
const profileId = route.query.id;
const isLeadView = route.query.type === "lead";
const user = useState("auth");

const openDetail = route.query.openDetail;

onMounted(() => {
  if (openDetail == "newAgreement") {
    showNewAgreement.value = true;
    agreementScreenIndex.value = 5;
  }
});

const showNewAgreement = ref(false);
const newAgreement = () => {
  showNewAgreement.value = true;
};

const agreementScreens = ref([
  SelectGym,
  AgreementModal,
  PersonalInformation,
  PersonalInformationNext,
  DueTodayPayment,
  MostlyDuesPayment,
  SecondaryPayments,
  TermsAndCondition,
  PayNow,
]);
// MembershipType

const agreementScreenIndex = ref(0);

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
    const { result } = useQuery((isLeadView ? lead : member).query.get, {
      id: profileId,
    });
    watchEffect(() => {
      if (!result.value) return;
      profileInfo.value = result.value[isLeadView ? "lead" : "member"];
    });
  } else {
    profileInfo.value = user.value;
  }
}
</script>

<style scoped lang="postcss">
.agreements-card {
  @apply m-auto w-full max-w-[1120px];
}
.button-simple {
  @apply normal-case px-2 text-neutral-content my-auto hover:text-primary transition-colors duration-300;
}
</style>
<style lang="postcss">
@media (max-width: 1152px) {
  .new-agreements-wrapper {
    @apply w-full;
    .width-full {
      @apply w-full;
    }
    .display-flex-column {
      @apply flex-col;
    }
  }
}
</style>
