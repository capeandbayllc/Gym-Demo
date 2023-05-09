<template>
  <tr class="bg-base-100 h-14">
    <td>{{ data.name }}</td>
    <td>{{ data.category }}</td>
    <td>{{ data.created_at }}</td>
    <td>{{ data.invoice_amount }}</td>
    <td>{{ data.agreement_value }}</td>
    <td>{{ data.billing_schedule_type }}</td>
  </tr>
</template>

<style scoped lang="postcss">
td {
  @apply border-y-2 border-secondary px-3 text-center;
}
td:first-child {
  @apply border-l-2 rounded-l text-accent-focus;
}
td:last-child {
  @apply border-r-2 rounded-r capitalize;
}
</style>

<script setup lang="ts">
import { type Agreement, defaultAgreementTableRow } from "./helpers";

interface Props {
  data: Agreement;
}

const props = withDefaults(defineProps<Props>(), {
  data: () => defaultAgreementTableRow,
});
</script>
