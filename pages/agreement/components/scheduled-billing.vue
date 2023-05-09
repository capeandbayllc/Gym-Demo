<template>
  <simple-card
    class="gradient-bg grid grid-cols-12 p-4 gap-4 w-[500px] text-sm max-h-[75vh] overflow-auto"
  >
    <div class="col-span-12 w-full">
      <div class="mb-2 font-semibold text-lg">Scheduled Billing</div>
    </div>
    <div class="col-span-3 w-full">
      <div class="mb-2">Schedule Type</div>
    </div>
    <div class="col-span-5 w-full">
      <div class="mb-2">GR Profit Center</div>
    </div>
    <div class="col-span-4 w-full">
      <div class="mb-2 ml-4">Pre Tax Amount</div>
    </div>
    <!-- Item -->
    <div class="col-span-3 w-full flex">
      <p class="pl-4">Primary</p>
    </div>
    <div class="col-span-5 mx-auto w-full">
      <select-box
        :items="[
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ]"
        label="Dues"
        labelOpened="Limited Availability"
        :showSearch="false"
        :showClearList="false"
        @onChange="data.primary.grProfitCenter = $event"
        class="bg-base-content text-base-300 rounded border border-base-content w-full"
      >
      </select-box>
    </div>
    <div class="col-span-4 w-full flex items-center">
      <p class="mr-2">$</p>
      <input
        type="number"
        class="white-input w-full p-1 rounded-sm"
        v-model="data.primary.preTaxAmount"
      />
    </div>
    <!-- More items -->
    <template v-for="(n, i) in 5">
      <div class="col-span-3 w-full flex">
        <p class="pl-4">Add On</p>
      </div>
      <div class="col-span-5 mx-auto w-full">
        <select-box
          :items="[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          ]"
          :label="
            data[`addOn${n}`].grProfitCenter == ''
              ? 'Select One'
              : data[`addOn${n}`].grProfitCenter == 'yes'
              ? 'Yes'
              : 'No'
          "
          :labelOpened="
            data[`addOn${n}`].grProfitCenter == ''
              ? 'Select One'
              : data[`addOn${n}`].grProfitCenter == 'yes'
              ? 'Yes'
              : 'No'
          "
          :showSearch="false"
          :showClearList="false"
          @onChange="data[`addOn${n}`].grProfitCenter = $event"
          class="bg-base-content text-base-300 rounded border border-base-content w-full"
        >
        </select-box>
      </div>
      <div class="col-span-4 w-full flex items-center">
        <p class="mr-2">$</p>
        <input
          type="number"
          class="white-input w-full p-1 rounded-sm"
          v-model="data[`addOn${n}`].preTaxAmount"
        />
      </div>
    </template>
  </simple-card>
</template>

<script setup>
const props = defineProps({
  newAgreementData: {
    type: Object,
    default: null,
  },
});
const emit = defineEmits(["changeNewAgreementData"]);

const data = ref({
  primary: {
    grProfitCenter: "dues",
    preTaxAmount: 15.0,
  },
  addOn1: {
    grProfitCenter: "",
    preTaxAmount: 0.0,
  },
  addOn2: {
    grProfitCenter: "",
    preTaxAmount: 0.0,
  },
  addOn3: {
    grProfitCenter: "",
    preTaxAmount: 0.0,
  },
  addOn4: {
    grProfitCenter: "",
    preTaxAmount: 0.0,
  },
  addOn5: {
    grProfitCenter: "",
    preTaxAmount: 0.0,
  },
});

onMounted(() => {
  if (props.newAgreementData.scheduledBilling !== null) {
    data.value = props.newAgreementData.scheduledBilling;
  }
});

const changeNewAgreementData = () => {
  let changeNewAgreementData = props.newAgreementData;
  changeNewAgreementData.scheduledBilling = data.value;
  emit("changeNewAgreementData", changeNewAgreementData);
};

watch(data, () => {
  changeNewAgreementData();
});
</script>
<style scoped lang="postcss">
.white-input {
  @apply bg-base-content text-base-300;
}
</style>
