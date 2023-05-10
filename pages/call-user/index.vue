<template>
  <div class="call-user-container">
    <daisy-modal ref="outgoingCallModalRef">
      <MakeCall :user="ProfileInfo" @callNow="showInCallModal" />
    </daisy-modal>
    <daisy-modal ref="inCallModalRef">
      <OngoingCall
        :showEndCallButton="true"
        @endCall="showEndCallModal"
        :user="user"
      />
    </daisy-modal>
    <daisy-modal ref="endCallModalRef">
      <end-call-modal @incomingCall="showIncomingCallModal"></end-call-modal>
    </daisy-modal>
    <daisy-modal ref="incomingCallModalRef">
      <incoming-call-modal
        @endCall="showEndCallModal"
        @callNow="showInCallModal"
      ></incoming-call-modal>
    </daisy-modal>
  </div>
</template>

<script setup>
import MakeCall from "~/pages/check-in/side-car-split/make-call.vue";
import OngoingCall from "~/pages/check-in/side-car-split/ongoing-call.vue";
import EndCallModal from "./components/end-call-modal.vue";
import IncomingCallModal from "./components/incoming-call-modal.vue";
import { useQuery } from "@vue/apollo-composable";
import member from "@/api/queries/member";
import lead from "~/api/queries/lead";

const route = useRoute();
const user = useState("auth");
const profileId = route.query.id;
const isLeadView = route.query.type === "lead";
const ProfileInfo = ref(null);

const outgoingCallModalRef = ref(null);
const inCallModalRef = ref(null);
const endCallModalRef = ref(null);
const incomingCallModalRef = ref(null);

onMounted(() => {
  outgoingCallModalRef.value.open();
});

const showInCallModal = () => {
  outgoingCallModalRef.value.close();
  incomingCallModalRef.value.close();
  inCallModalRef.value.open();
};

const showEndCallModal = () => {
  inCallModalRef.value.close();
  incomingCallModalRef.value.close();
  endCallModalRef.value.open();
};

const showIncomingCallModal = () => {
  endCallModalRef.value.close();
  incomingCallModalRef.value.open();
};

const getMember = () => {
  if (profileId) {
    const { result } = useQuery((isLeadView ? lead : member).query.get, {
      id: profileId,
    });

    watch(result, () => {
      let user = result.value[isLeadView ? "lead" : "member"];
      ProfileInfo.value = {
        ...user,
        name: `${user.first_name} ${user.last_name}`,
      };
    });
  } else {
    ProfileInfo.value = {
      ...user.value,
      name: `${user.value.first_name} ${user.value.last_name}`,
    };
  }
};
getMember();
</script>

<style scoped lang="postcss">
.call-user-container {
  @apply py-4 pr-5 w-full h-fit pl-16;
}
</style>
