<template>
  <div class="flex justify-center items-center gap-10 pt-8 pb-16">
    <button class="flex flex-col items-center" @click="$emit('newAgreement')">
      <NewAgreementIcon class="w-36 h-11 mb-2" />
      <span class="font-semibold">Start a New Agreement</span>
    </button>
  </div>
  <simple-card title="Current Agreements">
    <AgreementTable
      :columns="columns"
      :items="agreements"
      class="p-6 text-sm"
    />
  </simple-card>
</template>

<script setup>
import AgreementTable from "./agreement-table.vue";
import { NewAgreementIcon } from "@/components/icons";
import agreement from "~/api/queries/agreement";
import { useQuery } from "@vue/apollo-composable";
import dateFormat from "dateformat";

const columns = [
  {
    label: "Agreement Name",
    class: "text-secondary",
  },
  {
    label: "Agreement Category",
    class: "text-secondary",
  },
  {
    label: "Created Date",
    class: "text-secondary",
  },
  {
    label: "Invoice Amount",
    class: "text-secondary",
  },
  {
    label: "Total Agreement Value",
    class: "text-secondary",
  },
  {
    label: "Billing Schedule Type",
    class: "text-secondary",
  },
];

const getType = () => {
  const types = ["bronze", "silver", "gold", "platinum"];
  const randomIndex = Math.floor(Math.random() * types.length);
  return types[randomIndex];
};
const agreements = ref([]);
onMounted(() => {});
const { result } = useQuery(agreement.query.browse);
watchEffect(() => {
  agreements.value = result?.value?.agreements.data.map((agreement) => {
    return {
      id: agreement.id,
      segment: agreement.agreement_category.name,
      phone: agreement.user.phone,
      photo: agreement.user.profile_photo_path,
      email: agreement.user.email,
      created: dateFormat(
        new Date(agreement.created_at),
        "m/d yyyy, h:MM:ssTT"
      ),
      first_name: agreement.user.first_name,
      last_name: agreement.user.last_name,
      location: agreement.gr_location_id,
      type: getType(),
    };
  });
});
</script>
