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
      :items="currentAgreements"
      class="p-6 text-sm"
    />
  </simple-card>
</template>

<script setup>
import AgreementTable from "./agreement-table.vue";
import { NewAgreementIcon } from "@/components/icons";

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

const currentAgreements = [
  {
    id: 1,
    name: "Agreement #1",
    category: "membership",
    created_at: new Date().toLocaleDateString(),
    invoice_amount: "$500.00",
    agreement_value: "$600.00",
    billing_schedule_type: "monthly",
  },
  {
    id: 2,
    name: "Agreement #2",
    category: "membership",
    created_at: new Date().toLocaleDateString(),
    invoice_amount: "$500.00",
    agreement_value: "$600.00",
    billing_schedule_type: "yearly",
  },
  {
    id: 3,
    name: "Agreement #3",
    category: "membership",
    created_at: new Date().toLocaleDateString(),
    invoice_amount: "$500.00",
    agreement_value: "$600.00",
    billing_schedule_type: "monthly",
  },
  {
    id: 4,
    name: "Agreement #4",
    category: "membership",
    created_at: new Date().toLocaleDateString(),
    invoice_amount: "$500.00",
    agreement_value: "$600.00",
    billing_schedule_type: "monthly",
  },
  {
    id: 5,
    name: "Agreement #5",
    category: "membership",
    created_at: new Date().toLocaleDateString(),
    invoice_amount: "$500.00",
    agreement_value: "$600.00",
    billing_schedule_type: "yearly",
  },
  {
    id: 6,
    name: "Agreement #6",
    category: "membership",
    created_at: new Date().toLocaleDateString(),
    invoice_amount: "$500.00",
    agreement_value: "$600.00",
    billing_schedule_type: "yearly",
  },
  {
    id: 7,
    name: "Agreement #7",
    category: "membership",
    created_at: new Date().toLocaleDateString(),
    invoice_amount: "$500.00",
    agreement_value: "$600.00",
    billing_schedule_type: "monthly",
  },
  {
    id: 8,
    name: "Agreement #8",
    category: "membership",
    created_at: new Date().toLocaleDateString(),
    invoice_amount: "$500.00",
    agreement_value: "$600.00",
    billing_schedule_type: "monthly",
  },
  {
    id: 9,
    name: "Agreement #9",
    category: "membership",
    created_at: new Date().toLocaleDateString(),
    invoice_amount: "$500.00",
    agreement_value: "$600.00",
    billing_schedule_type: "monthly",
  },
  {
    id: 10,
    name: "Agreement #10",
    category: "membership",
    created_at: new Date().toLocaleDateString(),
    invoice_amount: "$500.00",
    agreement_value: "$600.00",
    billing_schedule_type: "monthly",
  },
];
</script>
