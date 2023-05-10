<template>
  <div :class="modalClass" class="max-w-[500px]">
    <div>
      <div class="text-center text-xl mt-4 font-semibold mb-6">
        Select your Agreement Type
      </div>
      <div class="flex mb-3 items-center" v-if="enableLocationSelection">
        <p>Location: {{ locationSelected?.name }}</p>
        <Button
          size="sm"
          class="normal-case mx-2 ml-auto rounded-lg"
          outline
          hoverSecondary
          @click="showSelectGymModal"
        >
          Change Location
        </Button>
      </div>
      <div
        class="flex justify-around cursor-pointer gradient-bg w-fit w-[450px] p-6 mx-auto rounded border border-secondary"
      >
        <div
          v-for="(type, ndx) in filesTypes"
          :key="ndx"
          class="create-option mx-6"
          :class="{ 'transition-all scale-[1.2]': activeTab == ndx }"
          @click="activeTab = ndx"
        >
          <empty-file-icon class="mb-2 mx-auto w-14" />
          <span class="mb-4">{{ type }}</span>
        </div>
      </div>
      <slot></slot>
      <daisy-modal
        v-if="enableLocationSelection"
        :overlay="true"
        ref="selectGymModal"
        class="w-fit"
      >
        <SelectGym @selectGym="selectGym" />
      </daisy-modal>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.agreement-builder-modal-container {
  @apply pl-2 pr-2 pt-6 pb-6;
  .card-title {
    @apply border-b pb-2 border-base-content/50;
  }
  .create-option {
    @apply inline-block items-center text-xs text-center w-20 mb-4;
  }
  .content {
    @apply border border-secondary;
  }
}
.agreement-builder-modal-card {
  @apply bg-base-200;
}
</style>
<script setup>
import { EmptyFileIcon } from "~~/components/icons";
import SelectGym from "~/pages/check-in/user-info/select-gym";
import { useQuery } from "@vue/apollo-composable";
import location from "~/api/queries/location";

const props = defineProps({
  modalClass: {
    type: String,
    default: "",
  },
  newAgreementData: {
    type: Object,
    default: null,
  },
  enableLocationSelection: {
    type: Boolean,
    default: false,
  },
});

const locationSelected = ref(null);

const { result } = useQuery(location.query.browse, { first: 1 });
watchEffect(() => {
  if (!result.value?.locations?.data[0]) return;
  locationSelected.value = result.value.locations.data[0];
});

const selectGym = (newLocation) => {
  closeSelectGymModal();
  locationSelected.value = newLocation;
};

const selectGymModal = ref(null);

const showSelectGymModal = () => {
  selectGymModal.value.open();
};

const closeSelectGymModal = () => {
  selectGymModal.value.close();
};

const activeTab = ref(null);

const changeNewAgreementData = () => {
  if (props.newAgreementData) {
    let changeNewAgreementData = props.newAgreementData;
    changeNewAgreementData.type = filesTypes[activeTab.value];
    emit("changeNewAgreementData", changeNewAgreementData);
  }
};

watch(activeTab, () => {
  changeNewAgreementData();
});

const filesTypes = ["Membership", "Personal Training", "FLA. PIF"];

const emit = defineEmits(["close", "changeNewAgreementData"]);

watch(activeTab, () => {
  emit("changeType", filesTypes[activeTab.value]);
});
</script>
