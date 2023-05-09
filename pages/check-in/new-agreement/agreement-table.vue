<template>
  <div class="agreement-table">
    <data-table
      :columns="columns"
      :data="items"
      :row-component="AgreementTableRow"
      class="h-56 overflow-y-auto"
    />
  </div>
</template>

<script setup lang="ts">
import AgreementTableRow from "./agreement-table-row.vue";
import { type Agreement } from "./helpers";

type Header = {
  label: string;
  class: string;
};

interface Props {
  columns: Header[];
  items: Agreement[];
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  items: () => [],
});
</script>
