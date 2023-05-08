<template>
  <div class="global-search-result">
    <simple-card title="Members">
      <people-member-table class="p-6" />
    </simple-card>
    <simple-card title="Leads">
      <people-lead-table class="p-6" />
    </simple-card>
    <simple-card title="Calendar">
      <data-table />
    </simple-card>
    <simple-card title="Invoices">
      <data-table />
    </simple-card>
  </div>
</template>
<style scoped>
.global-search-result {
  @apply flex flex-col space-y-6 bg-black border border-secondary rounded p-10 overflow-y-auto max-h-[80vh];
}
</style>
<script setup>
import PeopleLeadTable from "../common-tables/people-lead-table.vue";
import PeopleMemberTable from "../common-tables/people-member-table.vue";
</script>
