<template>
  <div class="flex justify-center items-center gap-10 pt-8 pb-16">
    <button class="flex flex-col items-center" @click="$emit('newAgreement')">
      <NewAgreementIcon class="w-[140px] h-[45px] mb-2" />
      <span class="font-semibold">Start a New Agreement</span>
    </button>
  </div>
  <div class="flex flex-col gap-5">
    <simple-card title="Active Agreements">
      <people-search-table
        no-data-message="No active agreements are currently available."
        :columns="columns"
        :items="agreements"
        class="p-6 text-sm"
      />
    </simple-card>
    <simple-card title="Expired Agreements">
      <people-search-table
        no-data-message="No expired agreements are currently available."
        :columns="columns"
        :items="agreementsExpired"
        class="p-6 text-sm"
      />
    </simple-card>
  </div>
</template>

<script setup>
import PeopleSearchTable from "./people-search-table.vue";
import { NewAgreementIcon } from "@/components/icons";
import agreement from "~/api/queries/agreement";
import { useQuery } from "@vue/apollo-composable";
import dateFormat from "dateformat";
const columns = [
  {
    label: "Segment",
    class: "text-secondary text-left",
  },
  {
    label: "First Name",
    class: "text-secondary text-left",
  },
  {
    label: "Last Name",
    class: "text-secondary text-left",
  },
  {
    label: "Mobile",
    class: "text-secondary text-left",
  },
  {
    label: "Email",
    class: "text-secondary text-left",
  },
  {
    label: "Location",
    class: "text-secondary text-left",
  },
  {
    label: "Type",
    class: "text-secondary text-left",
  },
  {
    label: "Created",
    class: "text-secondary text-left",
  },
];
const getType = () => {
  const types = ["bronze", "silver", "gold", "platinum"];
  const randomIndex = Math.floor(Math.random() * types.length);
  return types[randomIndex];
};
const agreements = ref([]);
const agreementsExpired = ref([]);
onMounted(() => {});

function getAgreementsResult(agreementsSaveData, status) {
  const { result } = useQuery(agreement.query.browse, { filter: { status } });
  watchEffect(() => {
    agreementsSaveData.value = result?.value?.agreements.data.map(
      (agreement) => {
        return {
          id: agreement.id,
          segment: agreement.agreementCategory.name,
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
      }
    );
  });
}
getAgreementsResult(agreements, "1");
getAgreementsResult(agreementsExpired, "0");
</script>
