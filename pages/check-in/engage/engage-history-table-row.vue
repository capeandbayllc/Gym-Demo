<template>
  <tr class="engage-history-tbl-row">
    <td>{{ data.type }}</td>
    <td>{{ data.date_time }}</td>
    <td>
      <div class="w-fit border border-base-content px-4 py-1 rounded-md">
        {{ data.status }}
      </div>
    </td>
    <td>{{ data.completed_by }}</td>
    <td><Button size="sm" secondary>View</Button></td>
  </tr>
</template>
<style scoped lang="postcss">
.engage-history-tbl-row {
  @apply bg-base-300 h-14;

  td {
    @apply border-y-2 border-secondary text-left px-3;
  }
  td:first-child {
    @apply border-l-2 rounded-l;
  }
  td:last-child {
    @apply border-r-2 rounded-r capitalize;
  }
  .type-warning {
    @apply bg-warning/70;
  }
  .type-secondary {
    @apply bg-secondary;
  }
}
</style>
<style lang="postcss">
.people-search-tbl-content thead {
  @apply top-0 sticky bg-base-300 h-10;
}
</style>
<script setup>
const props = defineProps({
  data: Object,
});
</script>
