<template>
  <div class="flex justify-center items-center gap-10 pt-8 pb-16">
    <button class="flex flex-col items-center" @click="$emit('newAgreement')">
      <NewAgreementIcon class="w-36 h-11 mb-2" />
      <span class="font-semibold">Start a New Agreement</span>
    </button>
  </div>
  <simple-card title="Current Agreements">
    <AgreementTable :columns="columns" :items="leadsData" class="p-6 text-sm" />
  </simple-card>
</template>

<script setup>
import AgreementTable from "./agreement-table.vue";
import { NewAgreementIcon, AddIcon } from "@/components/icons";

const columns = [
  {
    label: "Agreement Name",
    class: "text-secondary text-left",
  },
  {
    label: "Agreement Category",
    class: "text-secondary text-left",
  },
  {
    label: "Created Date",
    class: "text-secondary text-left",
  },
  {
    label: "Invoice Amount",
    class: "text-secondary text-left",
  },
  {
    label: "Total Agreement Value",
    class: "text-secondary text-left",
  },
  {
    label: "Billing Schedule Type",
    class: "text-secondary text-left",
  },
];

const leadsData = [
  {
    id: 1,
    segment: "New Member",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "secondary",
    first_name: "Caleb",
    last_name: "Sauer",
    location: "1",
    type: "gold",
  },
  {
    id: 2,
    segment: "New Member",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "secondary",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "1",
    type: "platinum",
  },
  {
    id: 3,
    segment: "New Member",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "secondary",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "1",
    type: "platinum",
  },
  {
    id: 4,
    segment: "Marketing Campaign",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "secondary",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "1",
    type: "platinum",
  },
  {
    id: 5,
    segment: "Marketing Campaign",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "secondary",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "1",
    type: "platinum",
  },
  {
    id: 6,
    segment: "PT Sessions",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "secondary",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "1",
    type: "bronze",
  },
  {
    id: 7,
    segment: "PT Sessions",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "secondary",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "1",
    type: "silver",
  },
  {
    id: 8,
    segment: "PT Sessions",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "secondary",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "1",
    type: "platinum",
  },
  {
    id: 9,
    segment: "PT Sessions",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "secondary",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "1",
    type: "platinum",
  },
  {
    id: 10,
    segment: "PT Sessions",
    phone: "(123) 456-7890",
    email: "email@email.com",
    created: "5/5 2002, 12:24:44PM",
    type_status: "secondary",
    first_name: "Nathan",
    last_name: "Sipes",
    location: "1",
    type: "platinum",
  },
];
</script>
