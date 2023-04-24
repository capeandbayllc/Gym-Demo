<template>
  <tr class="conversion-table-row">
    <td>
      <img :src="data.src" alt="User Photo" height="40" width="40" />
    </td>
    <td>
      <div class="conversion-data">{{ data.name }}</div>
    </td>
    <td>
      <div class="conversion-data">{{ data.unit }}</div>
    </td>
    <td>
      <div class="conversion-data">
        <membership-status :status="data.membership" />
      </div>
    </td>
    <td>
      <div class="conversion-data">{{ data.revenue }}</div>
    </td>
  </tr>
</template>

<style scoped lang="postcss">
tr td {
  @apply border-b border-secondary px-4;
  > img {
    @apply p-1 rounded-2xl aspect-square max-h-12;
  }
  .conversion-title {
    @apply text-xl font-bold;
  }
}
</style>

<script setup>
import MembershipStatus from "@/components/buttons/membership-status.vue";

const props = defineProps({
  data: Object,
});
</script>
