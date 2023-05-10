<template>
  <div class="flex justify-center items-center gap-10 pt-8 pb-16">
    <button class="flex flex-col items-center" @click="$emit('newAgreement')">
      <NewAgreementIcon class="w-36 h-11 mb-2" />
      <span class="font-semibold">Start a New Agreement</span>
    </button>
  </div>
  <simple-card title="Active Agreements">
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
    label: "Segment",
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
    label: "Mobile",
    class: "text-secondary",
  },
  {
    label: "Email",
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
    label: "Created",
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
  console.log(result);
  agreements.value = result?.value?.agreements.data.map((agreement) => {
    return {
      name: agreement.template_name,
      category: agreement.agreementCategory.name,
      created_at: dateFormat(
        new Date(agreement.created_at),
        "m/d yyyy, h:MM:ssTT"
      ),
      invoice_amount: "",
      agreement_value: "",
      billing_schedule_type: "",
      // id: agreement.id,
      // segment: agreement.agreementCategory.name,
      // phone: agreement.user.phone,
      // photo: agreement.user.profile_photo_path,
      // email: agreement.user.email,
      // created: dateFormat(
      //   new Date(agreement.created_at),
      //   "m/d yyyy, h:MM:ssTT"
      // ),
      // first_name: agreement.user.first_name,
      // last_name: agreement.user.last_name,
      // location: agreement.gr_location_id,
      // type: getType(),
    };
  });
});
</script>
''
