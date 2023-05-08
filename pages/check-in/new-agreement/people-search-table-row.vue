<template>
  <tr class="people-lead-tbl-row">
    <td>{{ data.segment }}</td>
    <td>
      <div class="flex items-center">
        <img :src="data.photo" class="w-7 rounded-full mr-2" />
        {{ data.first_name }}
      </div>
    </td>
    <td class="text-center">{{ data.last_name }}</td>
    <td>{{ data.phone }}</td>
    <td>{{ data.email }}</td>
    <td class="text-center">{{ data.location }}</td>
    <td>
      <membership-status :membership="data.type" />
    </td>
    <td>{{ data.created }}</td>
  </tr>
</template>
<style scoped lang="postcss">
.people-lead-tbl-row {
  @apply bg-base-100 h-14;

  td {
    @apply border-y-2 border-secondary px-3;
  }
  td:first-child {
    @apply border-l-2 rounded-l text-accent-focus;
  }
  td:last-child {
    @apply border-r-2 rounded-r capitalize;
  }
  .membership-status {
    @apply flex items-center justify-center rounded text-sm cursor-pointer h-full px-2 py-1;
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
import MembershipStatus from "~~/components/buttons/membership-status.vue";
const props = defineProps({
  data: Object,
});
</script>
